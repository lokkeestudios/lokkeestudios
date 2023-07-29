import Container from '@/components/ui/container';
import Icons from '@/components/ui/icons';
import type { Project } from '@/lib/get-projects';
import { generateImageSizeProps } from '@/lib/sanity-image';
import { cn, formatDate } from '@/lib/utils';
import { Listbox } from '@headlessui/react';
import { cx } from 'class-variance-authority';
import {
  AnimatePresence,
  MotionValue,
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from 'framer-motion';
import {
  Dispatch,
  ElementRef,
  Fragment,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface ProjectItemProps {
  project: Project;
  index: number;
  isCurrent: boolean;
  isDisabled: boolean;
  isDragging: boolean;
  carouselWidth: number;
  carouselOffsetLeft: number;
  dragX: MotionValue<number>;
}

function ProjectItem({
  project,
  index,
  isCurrent,
  isDisabled,
  isDragging,
  carouselWidth,
  carouselOffsetLeft,
  dragX,
}: ProjectItemProps) {
  const itemRef = useRef<ElementRef<'li'>>(null);
  const [itemOffsetLeft, setItemOffsetLeft] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const imagePosition = useTransform(
    dragX,
    [-itemOffsetLeft - itemWidth, -itemOffsetLeft + carouselWidth],
    ['0%', '100%'],
  );

  const updateSliderItemConstraints = useCallback(() => {
    if (!itemRef.current) return;

    setItemOffsetLeft(itemRef.current.offsetLeft - carouselOffsetLeft);
    setItemWidth(itemRef.current.offsetWidth);
  }, [carouselOffsetLeft]);

  useEffect(() => {
    updateSliderItemConstraints();

    window.addEventListener('resize', updateSliderItemConstraints);
    window.addEventListener('orientationchange', updateSliderItemConstraints);

    return () => {
      window.removeEventListener('resize', updateSliderItemConstraints);
      window.removeEventListener(
        'orientationchange',
        updateSliderItemConstraints,
      );
    };
  }, [updateSliderItemConstraints]);

  const ProjectContentWrapper = isDisabled ? 'div' : 'a';

  return (
    <motion.li
      key={project._id}
      ref={itemRef}
      layout={carouselWidth === 0 ? false : 'position'}
      initial={{ opacity: 0, translateY: '5%' }}
      animate={{ opacity: 1, translateY: '0%' }}
      exit={{ opacity: 0, translateY: '5%' }}
      aria-labelledby={`project-item-${project._id}-heading`}
      data-item-index={index}
      aria-current={isCurrent}
      aria-hidden={isDisabled}
      aria-disabled={isDisabled}
      className="relative mr-6 aspect-[2/3] h-[clamp(28rem,65vmin,38rem)] overflow-hidden rounded-md"
    >
      <ProjectContentWrapper
        href={isDisabled ? undefined : `/project/${project.slug.current}`}
        aria-label={
          isDisabled ? undefined : `Show ${project.name} project details`
        }
        className={cx(
          'group block h-full w-full border-0.5 border-neutrals-50/20',
          (isDisabled || isDragging) && 'pointer-events-none',
        )}
        draggable={false}
      >
        <article
          className={cn(
            'absolute inset-0 flex flex-col items-center justify-center gap-y-2 bg-neutrals-900/50 p-4 text-center opacity-0 backdrop-blur-sm transition-opacity duration-300',
            !isDisabled &&
              'group-hover:opacity-100 group-focus-visible:opacity-100',
          )}
        >
          <div className="overflow-hidden">
            <p className="translate-y-full text-xs uppercase text-neutrals-50/90 transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
              {formatDate(project.date)}
            </p>
          </div>
          <div className="overflow-hidden">
            <h3
              id={`project-item-${project._id}-heading`}
              className="translate-y-full text-2xl font-bold transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 lg:text-4xl"
            >
              {project.name}
            </h3>
          </div>
          {project.tags && (
            <div className="overflow-hidden">
              <p className="translate-y-full text-xs text-neutrals-50/90 transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 lg:text-sm">
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
              ? 'animate-project-item-disabled opacity-20 grayscale'
              : 'animate-project-item-enabled group-hover:scale-105 group-focus-visible:scale-105',
          )}
          style={{
            objectPosition: imagePosition,
            backgroundColor:
              project.poster.asset.metadata.palette.dominant.background,
          }}
        />
      </ProjectContentWrapper>
    </motion.li>
  );
}

const projectTagFilters = ['Website', 'Graphic design', 'Archive'] as const;

type ProjectTagFilter = (typeof projectTagFilters)[number];
const wildcardFilter: ProjectTagFilter = 'Archive';

interface ProjectFilterSelectProps {
  selectedFiltersState: [
    ProjectTagFilter[],
    Dispatch<SetStateAction<ProjectTagFilter[]>>,
  ];
}

function ProjectFilterSelect({
  selectedFiltersState,
}: ProjectFilterSelectProps) {
  const [selectedFilters, setSelectedFilters] = selectedFiltersState;

  return (
    <Listbox
      as="div"
      value={selectedFilters}
      onChange={(newSelectedFilters) => {
        if (newSelectedFilters.length !== 0)
          setSelectedFilters(newSelectedFilters);
      }}
      multiple
      className="group relative min-w-[20rem]"
    >
      <Listbox.Button className="flex w-full items-center justify-between rounded-sm border border-neutrals-600 bg-radial-highlight px-4 py-2 text-sm text-neutrals-100">
        {selectedFilters
          .sort(
            (a, b) =>
              projectTagFilters.indexOf(a) - projectTagFilters.indexOf(b),
          )
          .map((selectedFilter) => selectedFilter)
          .join(', ')}
        <Icons.ChevronDown
          aria-hidden
          className="h-4 w-4 transition-transform group-data-[headlessui-state='open']:-scale-y-100"
        />
      </Listbox.Button>
      <Listbox.Options className="absolute z-10 mt-2 w-full rounded-sm border border-neutrals-600 bg-neutrals-900/90 px-2 py-2 drop-shadow-lg backdrop-blur-md focus:outline-none supports-[backdrop-filter]:bg-neutrals-900/60">
        {projectTagFilters.map((projectTagFilter) => (
          <Listbox.Option
            key={projectTagFilter}
            as={Fragment}
            value={projectTagFilter}
          >
            {({ active, selected }) => (
              <li
                className={cx(
                  'cursor-pointer rounded-sm p-2 text-sm transition-all',
                  selected && !active ? 'text-primary' : '',
                  active ? 'bg-primary text-neutrals-50' : 'text-neutrals-300',
                )}
              >
                {projectTagFilter}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

interface ProjectCarouselProps {
  projects: Project[];
}

function ProjectCarousel({ projects }: ProjectCarouselProps) {
  // TODO: make use of useMemo() for all width calculations, stored in state
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [carouselItemsWrapperWidth, setCarouselItemsWrapperWidth] = useState(0);
  const [carouselOffsetLeft, setCarouselOffsetLeft] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [projectItemWidth, setProjectItemWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const carouselItemsWrapperRef = useRef<HTMLUListElement>(null);
  const dragX = useMotionValue(0);
  const [carouselInlineMargin, setCarouselInlineMargin] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselPosition = useTransform(
    dragX,
    [carouselInlineMargin, carouselWidth - carouselInlineMargin],
    ['0%', '100%'],
  );

  const [selectedFilters, setSelectedFilters] = useState<ProjectTagFilter[]>([
    'Website',
  ]);

  const updateSliderConstraints = useCallback(() => {
    if (
      !carouselWrapperRef.current ||
      !carouselRef.current ||
      !carouselItemsWrapperRef.current
    )
      return;

    setProjectItemWidth(
      carouselItemsWrapperRef.current.offsetWidth / projects.length,
    );

    setCarouselItemsWrapperWidth(carouselWrapperRef.current.offsetWidth);
    setCarouselOffsetLeft(carouselWrapperRef.current.offsetLeft);

    const firstChild = carouselItemsWrapperRef.current
      .firstChild as HTMLLIElement;
    if (firstChild) {
      const firstChildWidth = firstChild.offsetWidth;
      const firstChildOffsetLeft = firstChild.offsetLeft;
      const initialX = -(
        firstChildOffsetLeft +
        firstChildWidth / 2 -
        carouselRef.current.offsetWidth / 2
      );
      setCarouselInlineMargin(initialX);
      dragX.jump(initialX);
    }

    if (!carouselRef.current || !carouselItemsWrapperRef.current) return;

    setCarouselWidth(
      carouselRef.current.offsetWidth -
        carouselItemsWrapperRef.current.offsetWidth,
    );

    setTimeout(() => {
      if (!carouselRef.current || !carouselItemsWrapperRef.current) return;

      setCarouselWidth(
        carouselRef.current.offsetWidth -
          carouselItemsWrapperRef.current.offsetWidth,
      );
    }, 500);
  }, [dragX, projects.length]);

  useEffect(() => {
    updateSliderConstraints();

    window.addEventListener('resize', updateSliderConstraints);
    window.addEventListener('orientationchange', updateSliderConstraints);

    return () => {
      window.removeEventListener('resize', updateSliderConstraints);
      window.removeEventListener('orientationchange', updateSliderConstraints);
    };
  }, [updateSliderConstraints]);

  function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
  }

  useMotionValueEvent(dragX, 'change', (latestDragX) => {
    setCurrentProject(
      clamp(
        0,
        Math.round((-latestDragX + carouselInlineMargin) / projectItemWidth),
        projects.length - 1,
      ),
    );
  });

  function slideToProjectIndex(projectIndex: number) {
    void animate(dragX, carouselInlineMargin - projectIndex * projectItemWidth);
  }

  function slideToPreviousProject() {
    slideToProjectIndex(clamp(0, currentProject - 1, projects.length - 1));
  }

  function slideToNextProject() {
    slideToProjectIndex(clamp(0, currentProject + 1, projects.length - 1));
  }

  const filteredProjects = projects.filter((project) => {
    const isAnyProjectTagFiltered = selectedFilters.some(
      (selectedFilter) => project.tags?.includes(selectedFilter),
    );
    if (isAnyProjectTagFiltered) return true;

    const isWildcardFilterEnabledAndNoProjectTagFiltered =
      selectedFilters.includes(wildcardFilter) &&
      !project.tags?.some((projectTag) =>
        projectTagFilters.includes(projectTag),
      );
    return isWildcardFilterEnabledAndNoProjectTagFiltered;
  });

  const CAROUSEL_ITEMS_GAP = 24;

  return (
    <motion.div
      ref={carouselWrapperRef}
      className="mt-4 overflow-hidden"
    >
      <Container>
        <div className="flex items-center justify-center">
          <ProjectFilterSelect
            selectedFiltersState={[selectedFilters, setSelectedFilters]}
          />
        </div>
      </Container>
      <div className="relative py-8">
        <div
          aria-label="Carousel Controls"
          className="pointer-events-none absolute top-1/2 z-10 flex w-full -translate-y-1/2 justify-between px-4 lg:px-8"
        >
          <button
            type="button"
            onClick={slideToPreviousProject}
            title="Previous project"
            aria-controls="project-carousel"
            disabled={currentProject === 0}
            className="pointer-events-auto aspect-square h-fit rounded-full border border-neutrals-600 bg-neutrals-900/90 p-4 text-neutrals-100 drop-shadow-lg backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50 supports-[backdrop-filter]:bg-neutrals-900/50"
          >
            <Icons.ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={slideToNextProject}
            title="Next project"
            aria-controls="project-carousel"
            disabled={currentProject === projects.length - 1}
            className="pointer-events-auto aspect-square h-fit rounded-full border border-neutrals-600 bg-neutrals-900/90 p-4 text-neutrals-100 drop-shadow-lg backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50 supports-[backdrop-filter]:bg-neutrals-900/50"
          >
            <Icons.ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <motion.div
          ref={carouselRef}
          id="project-carousel"
          aria-label="Project Carousel"
          draggable
          drag="x"
          dragConstraints={{
            left: carouselWidth - carouselInlineMargin + CAROUSEL_ITEMS_GAP,
            right: carouselInlineMargin,
          }}
          whileTap={{ cursor: 'grabbing' }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          dragTransition={{
            power: 0.3,
            timeConstant: 300,
          }}
          style={{ x: dragX }}
          className="cursor-grab touch-none select-none"
        >
          <motion.ul
            ref={carouselItemsWrapperRef}
            className="inline-flex"
          >
            <AnimatePresence>
              {projects.map((project, index) => (
                <ProjectItem
                  key={project._id}
                  project={project}
                  index={index}
                  isCurrent={currentProject === index}
                  isDisabled={!filteredProjects.includes(project)}
                  isDragging={isDragging}
                  carouselWidth={carouselItemsWrapperWidth}
                  carouselOffsetLeft={carouselOffsetLeft}
                  dragX={dragX}
                />
              ))}
            </AnimatePresence>
          </motion.ul>
        </motion.div>
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {`Project ${currentProject + 1} of ${projects.length}`}
        </div>
      </div>
      <Container>
        <div className="h-px w-full bg-gradient-to-r from-neutrals-600/60 via-neutrals-600 to-neutrals-600/60">
          <motion.div
            style={{ width: carouselPosition }}
            className="h-full bg-gradient-to-r from-neutrals-100/30 via-neutrals-100 to-neutrals-100/30"
          />
        </div>
      </Container>
    </motion.div>
  );
}

export default ProjectCarousel;
