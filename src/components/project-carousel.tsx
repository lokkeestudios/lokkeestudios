import { Container } from '@/components/ui/container';
import { Icons } from '@/components/ui/icons';
import { type Project } from '@/lib/sanity/get-projects';
import { generateImageSizeProps } from '@/lib/sanity/sanity-image';
import { clamp, cn } from '@/lib/utils';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { cx } from 'class-variance-authority';
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from 'framer-motion';
import {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentRef,
  type Dispatch,
  type MouseEvent,
  type SetStateAction,
  type UIEvent,
} from 'react';

function ProjectSlide({
  project,
  index,
  currentIndex,
  isDisabled,
  isDragging,
  carouselWidth,
  scrollPosition,
}: {
  project: Project;
  index: number;
  currentIndex: number;
  isDisabled: boolean;
  isDragging: boolean;
  carouselWidth: number;
  scrollPosition: MotionValue<number>;
}) {
  const slideRef = useRef<ComponentRef<'li'>>(null);
  const [slideOffsetLeft, setSlideOffsetLeft] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const imagePosition = useTransform(
    scrollPosition,
    [slideOffsetLeft + slideWidth, slideOffsetLeft - carouselWidth],
    ['0%', '100%'],
  );

  const updateSlideConstraints = useCallback(() => {
    if (!slideRef.current) return;

    setSlideOffsetLeft(slideRef.current.offsetLeft);
    setSlideWidth(slideRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    updateSlideConstraints();

    window.addEventListener('resize', updateSlideConstraints);
    window.addEventListener('orientationchange', updateSlideConstraints);

    return () => {
      window.removeEventListener('resize', updateSlideConstraints);
      window.removeEventListener('orientationchange', updateSlideConstraints);
    };
  }, [updateSlideConstraints]);

  return (
    <motion.li
      key={project._id}
      ref={slideRef}
      aria-labelledby={`project-item-${project._id}-heading`}
      data-item-index={index}
      aria-current={currentIndex === index}
      aria-hidden={isDisabled}
      className="relative aspect-2/3 w-[clamp(18rem,42vmin,26rem)] overflow-hidden rounded-md"
    >
      <a
        href={`/project/${project.slug.current}`}
        aria-label={isDisabled ? undefined : `Show ${project.name} project details`}
        aria-disabled={isDisabled}
        className={cx(
          'group border-neutrals-50/30 block h-full w-full rounded-md border',
          (isDisabled || isDragging) && 'pointer-events-none',
        )}
        draggable={false}
      >
        <article
          className={cn(
            'bg-neutrals-900/60 absolute inset-0 flex flex-col items-center justify-center gap-y-2 p-4 text-center transition-opacity duration-300 md:opacity-0 md:backdrop-blur-sm',
            !isDisabled && 'group-hover:opacity-100 group-focus-visible:opacity-100',
          )}
        >
          <div className="overflow-hidden">
            <h3
              id={`project-item-${project._id}-heading`}
              className="text-2xl font-bold transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 md:translate-y-full lg:text-4xl"
            >
              {project.name}
            </h3>
          </div>
          {project.tags && (
            <div className="overflow-hidden">
              <p className="text-neutrals-50/90 text-xs transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 md:translate-y-full lg:text-sm">
                {project.tags.join(', ')}
              </p>
            </div>
          )}
        </article>
        <motion.img
          alt={project.poster.alt}
          loading="lazy"
          decoding="async"
          {...generateImageSizeProps({ image: project.poster })}
          className={cn(
            'pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700',
            isDisabled
              ? 'opacity-20 grayscale'
              : 'group-hover:scale-105 group-focus-visible:scale-105',
          )}
          style={{
            objectPosition: imagePosition,
            backgroundColor: project.poster.asset.metadata.palette.dominant.background,
          }}
        />
      </a>
    </motion.li>
  );
}

const projectTagFilters = ['Website'] as const;
type ProjectTagFilter = (typeof projectTagFilters)[number];
const wildcardFilter: ProjectTagFilter = 'Website';

function ProjectFiltersSelect({
  selectedFiltersState,
}: {
  selectedFiltersState: [ProjectTagFilter[], Dispatch<SetStateAction<ProjectTagFilter[]>>];
}) {
  const [selectedFilters, setSelectedFilters] = selectedFiltersState;

  return (
    projectTagFilters.length > 1 && (
      <Listbox
        as="div"
        value={selectedFilters}
        onChange={(newSelectedFilters) => {
          if (newSelectedFilters.length !== 0) setSelectedFilters(newSelectedFilters);
        }}
        multiple
        className="group relative min-w-[20rem]"
      >
        {({ open }) => (
          <>
            <ListboxButton className="border-neutrals-600 bg-radial-highlight text-neutrals-100 flex w-full items-center justify-between rounded-sm border px-4 py-2 text-sm">
              {selectedFilters
                .sort((a, b) => projectTagFilters.indexOf(a) - projectTagFilters.indexOf(b))
                .map((selectedFilter) => selectedFilter)
                .join(', ')}
              <Icons.ChevronDown
                aria-hidden
                className="size-4 transition-transform duration-200 group-data-[headlessui-state='open']:-scale-y-100"
              />
            </ListboxButton>
            <AnimatePresence>
              {open && (
                <ListboxOptions
                  static
                  as={Fragment}
                >
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="border-neutrals-600 bg-neutrals-900/90 supports-backdrop-filter:bg-neutrals-900/60 absolute z-10 mt-2 w-full rounded-sm border px-2 py-2 drop-shadow-lg backdrop-blur-sm focus:outline-none"
                  >
                    {projectTagFilters.map((projectTagFilter) => (
                      <ListboxOption
                        key={projectTagFilter}
                        as={Fragment}
                        value={projectTagFilter}
                      >
                        <li
                          className={cx(
                            'text-neutrals-300 data-focus:bg-primary data-[focus=false]:data-selected:text-neutrals-50 data-focus:text-neutrals-50 cursor-pointer rounded-sm p-2 text-sm transition-all',
                          )}
                        >
                          {projectTagFilter}
                        </li>
                      </ListboxOption>
                    ))}
                  </motion.ul>
                </ListboxOptions>
              )}
            </AnimatePresence>
          </>
        )}
      </Listbox>
    )
  );
}

const CAROUSEL_SLIDES_GAP = 24;

function ProjectCarousel({ projects }: { projects: Project[] }) {
  const carouselWrapperRef = useRef<ComponentRef<'div'>>(null);
  const carouselRef = useRef<ComponentRef<'ul'>>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [carouselSlideWidth, setCarouselSlideWidth] = useState(0);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);
  const scrollPosition = useMotionValue(0);
  const scrollProgress = useTransform(scrollPosition, [0, maxScrollWidth], ['0%', '100%']);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{
    scrollX: number;
    pointerX: number;
  } | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<ProjectTagFilter[]>(['Website']);

  const updateCarouselConstraints = useCallback(() => {
    if (
      !carouselWrapperRef.current ||
      !carouselRef.current ||
      !carouselRef.current.firstElementChild
    )
      return;

    setCarouselWidth(carouselWrapperRef.current.offsetWidth);
    setCarouselSlideWidth(
      (carouselRef.current.firstElementChild as ComponentRef<'li'>).offsetWidth,
    );
    setMaxScrollWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    updateCarouselConstraints();

    window.addEventListener('resize', updateCarouselConstraints);
    window.addEventListener('orientationchange', updateCarouselConstraints);

    return () => {
      window.removeEventListener('resize', updateCarouselConstraints);
      window.removeEventListener('orientationchange', updateCarouselConstraints);
    };
  }, [updateCarouselConstraints]);

  function updateCurrentSlide(latestScrollPosition: number) {
    setCurrentSlide(
      clamp(
        0,
        Math.round(latestScrollPosition / (carouselSlideWidth + CAROUSEL_SLIDES_GAP)),
        projects.length - 1,
      ),
    );
  }

  useMotionValueEvent(scrollPosition, 'change', updateCurrentSlide);

  function scrollToSlide(slideIndex: number) {
    if (!carouselRef.current) return;

    carouselRef.current.scrollTo({
      left: slideIndex * (carouselSlideWidth + CAROUSEL_SLIDES_GAP),
      behavior: 'smooth',
    });
  }

  function scrollToPreviousSlide() {
    scrollToSlide(currentSlide - 1);
  }

  function scrollToNextSlide() {
    scrollToSlide(currentSlide + 1);
  }

  const handleScroll = useCallback(
    (event: UIEvent<ComponentRef<'ul'>>) => {
      scrollPosition.set(event.currentTarget.scrollLeft);
    },
    [scrollPosition],
  );

  const handleMouseDown = useCallback((event: MouseEvent) => {
    const isMainMouseButtonClicked = event.button === 0;

    if (isMainMouseButtonClicked) {
      setDragStart({
        scrollX: (event.currentTarget as HTMLElement).scrollLeft,
        pointerX: event.clientX,
      });
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setDragStart(null);
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (carouselRef.current && dragStart) {
        const distanceX = event.clientX - dragStart.pointerX;

        carouselRef.current.scrollTo({
          left: dragStart.scrollX - distanceX,
        });
        if (!isDragging) setIsDragging(true);
      }
    },
    [dragStart, isDragging],
  );

  const filteredProjects = projects.filter((project) => {
    const isAnyProjectTagFiltered = selectedFilters.some((selectedFilter) =>
      project.tags?.includes(selectedFilter),
    );
    if (isAnyProjectTagFiltered) return true;

    const isWildcardFilterEnabledAndNoProjectTagFiltered =
      selectedFilters.includes(wildcardFilter) &&
      !project.tags?.some((projectTag) => projectTagFilters.includes(projectTag));
    return isWildcardFilterEnabledAndNoProjectTagFiltered;
  });

  return (
    <div
      ref={carouselWrapperRef}
      className="mt-4 w-full"
    >
      <Container>
        <div className="flex items-center justify-center">
          <ProjectFiltersSelect selectedFiltersState={[selectedFilters, setSelectedFilters]} />
        </div>
      </Container>
      <div className="relative py-8">
        <div
          aria-label="Carousel Controls"
          className="pointer-events-none absolute top-1/2 z-10 flex w-full -translate-y-1/2 justify-between px-4 lg:px-8"
        >
          <button
            type="button"
            onPointerDown={scrollToPreviousSlide}
            title="Previous project slide"
            aria-controls="project-carousel"
            disabled={currentSlide === 0}
            className="border-neutrals-600 bg-neutrals-900/90 text-neutrals-100 supports-backdrop-filter:bg-neutrals-900/60 pointer-events-auto aspect-square h-fit rounded-full border p-4 drop-shadow-md backdrop-blur-sm transition-transform not-disabled:active:scale-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Icons.ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onPointerDown={scrollToNextSlide}
            title="Next project slide"
            aria-controls="project-carousel"
            disabled={currentSlide === projects.length - 1}
            className="border-neutrals-600 bg-neutrals-900/90 text-neutrals-100 supports-backdrop-filter:bg-neutrals-900/60 pointer-events-auto aspect-square h-fit rounded-full border p-4 drop-shadow-md backdrop-blur-sm transition-transform not-disabled:active:scale-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Icons.ChevronRight className="size-5" />
          </button>
        </div>
        <div className="h-[calc(clamp(18rem,42vmin,26rem)*3/2)] touch-none overflow-hidden select-none">
          <ul
            ref={carouselRef}
            id="project-carousel"
            aria-label="Project Carousel"
            onScroll={handleScroll}
            onMouseDownCapture={handleMouseDown}
            onMouseUpCapture={handleMouseUp}
            onMouseMoveCapture={handleMouseMove}
            className={cn(
              'grid auto-cols-min grid-flow-col gap-x-6 overflow-x-auto ps-[calc(50vw-clamp(18rem,42vmin,26rem)/2-7px)] pe-[calc(50vw-(clamp(18rem,42vmin,26rem)+1.5rem)/2)]',
              isDragging && 'cursor-grabbing',
            )}
          >
            {projects.map((project, index) => (
              <ProjectSlide
                key={project._id}
                project={project}
                index={index}
                currentIndex={currentSlide}
                isDisabled={!filteredProjects.includes(project)}
                isDragging={isDragging}
                carouselWidth={carouselWidth}
                scrollPosition={scrollPosition}
              />
            ))}
          </ul>
        </div>
        <p
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          Project {currentSlide + 1} of {projects.length}
        </p>
      </div>
      <Container>
        <div className="from-neutrals-600/60 via-neutrals-600 to-neutrals-600/60 h-px w-full bg-linear-to-r">
          <motion.div
            style={{ width: scrollProgress }}
            className="from-neutrals-100/30 via-neutrals-100 to-neutrals-100/30 h-full bg-linear-to-r"
          />
        </div>
      </Container>
    </div>
  );
}

export { ProjectCarousel };
