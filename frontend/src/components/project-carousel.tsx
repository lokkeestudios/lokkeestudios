import Container from '@/components/ui/container';
import Icons from '@/components/ui/icons';
import type { Project } from '@/lib/get-projects';
import { generateImageSizeProps } from '@/lib/sanity-image';
import { formatDate } from '@/lib/utils';
import { Listbox } from '@headlessui/react';
import { cx } from 'class-variance-authority';
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import {
  Dispatch,
  Fragment,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface ProjectItemProps {
  project: Project;
  isDragging: boolean;
  carouselWidth: number;
  carouselOffsetLeft: number;
  dragX: MotionValue<number>;
}

function ProjectItem({
  project,
  isDragging,
  carouselWidth,
  carouselOffsetLeft,
  dragX,
}: ProjectItemProps) {
  const itemRef = useRef<HTMLLIElement>(null);
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

  return (
    <motion.li
      key={project._id}
      ref={itemRef}
      layout={carouselWidth === 0 ? false : 'position'}
      initial={{ opacity: 0, translateY: '5%' }}
      animate={{ opacity: 1, translateY: '0%' }}
      exit={{ opacity: 0, translateY: '5%' }}
      className="relative aspect-[2/3] h-[max(55vmin,20rem)] rounded-md overflow-hidden"
      style={{
        backgroundColor:
          project.poster.asset.metadata.palette.dominant.background,
      }}
    >
      <motion.a
        href={`/project/${project.slug.current}`}
        aria-label={`Show ${project.name} project details`}
        className={cx('group', isDragging ? 'pointer-events-none' : '')}
        draggable={false}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutrals-900/50 p-4 text-center opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 gap-y-2">
          <div className="overflow-hidden">
            <p className="translate-y-full text-xs transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 text-neutrals-50/90 uppercase">
              {formatDate(project.date)}
            </p>
          </div>
          <div className="overflow-hidden">
            <h3 className="translate-y-full text-2xl font-bold transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 lg:text-4xl">
              {project.name}
            </h3>
          </div>
          {project.tags && (
            <div className="overflow-hidden">
              <p className="translate-y-full text-xs lg:text-sm transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 text-neutrals-50/90">
                {project.tags.join(', ')}
              </p>
            </div>
          )}
        </div>
        <motion.img
          alt={project.poster.alt}
          loading="lazy"
          decoding="async"
          {...generateImageSizeProps({ image: project.poster })}
          style={{ objectPosition: imagePosition }}
          className="pointer-events-none -z-10 h-full w-full object-cover absolute inset-0 group-hover:scale-105 group-focus-visible:scale-105 transition-transform duration-700"
        />
      </motion.a>
    </motion.li>
  );
}

const projectTagFilters = ['Website', 'Graphic design'] as const;

type ProjectTagFilter = (typeof projectTagFilters)[number];

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
      className="relative min-w-[20rem]"
    >
      <Listbox.Button className="flex w-full items-center justify-between rounded-sm border border-neutrals-600 bg-neutrals-800 px-4 py-2 text-sm text-neutrals-100">
        {selectedFilters
          .sort(
            (a, b) =>
              projectTagFilters.indexOf(a) - projectTagFilters.indexOf(b),
          )
          .map((selectedFilter) => selectedFilter)
          .join(', ')}
        <Icons.ChevronDown
          aria-hidden
          className="h-4 w-4"
        />
      </Listbox.Button>
      <Listbox.Options className="absolute z-10 mt-2 w-full rounded-sm border border-neutrals-600 bg-neutrals-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutrals-900/60 px-2 py-2 focus:outline-none drop-shadow-lg">
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
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [carouselItemsWrapperWidth, setCarouselItemsWrapperWidth] = useState(0);
  const [carouselOffsetLeft, setCarouselOffsetLeft] = useState(0);
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
  }, [dragX]);

  useEffect(() => {
    updateSliderConstraints();
  }, [selectedFilters, updateSliderConstraints]);

  useEffect(() => {
    window.addEventListener('resize', updateSliderConstraints);
    window.addEventListener('orientationchange', updateSliderConstraints);

    return () => {
      window.removeEventListener('resize', updateSliderConstraints);
      window.removeEventListener('orientationchange', updateSliderConstraints);
    };
  }, [updateSliderConstraints]);

  const filteredProjects = projects.filter((project) =>
    selectedFilters.some((selectedFilter) =>
      project.tags.includes(selectedFilter),
    ),
  );

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
      <motion.div
        ref={carouselRef}
        draggable
        drag="x"
        dragConstraints={{
          left: carouselWidth - carouselInlineMargin,
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
        className="cursor-grab touch-none select-none py-8"
      >
        <motion.ul
          ref={carouselItemsWrapperRef}
          className="inline-flex gap-[3vmin]"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectItem
                key={project._id}
                project={project}
                isDragging={isDragging}
                carouselWidth={carouselItemsWrapperWidth}
                carouselOffsetLeft={carouselOffsetLeft}
                dragX={dragX}
              />
            ))}
          </AnimatePresence>
        </motion.ul>
      </motion.div>
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
