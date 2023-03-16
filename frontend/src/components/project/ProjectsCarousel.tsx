import ProjectItem from '@components/project/ProjectItem';
import type { Project } from '@utils/getProjects';
import {
  animate,
  AnimationOptions,
  motion,
  MotionStyle,
  MotionValue,
  PanInfo,
  useMotionValue,
} from 'framer-motion';
import React, { forwardRef, ReactNode } from 'react';

/* interface PreviousButtonProps {
  previousDisabled: boolean;
  previousSlide: () => void;
}

function PreviousButton({
  previousDisabled,
  previousSlide,
}: PreviousButtonProps) {
  return (
    <button
      type="button"
      onClick={previousSlide}
      disabled={previousDisabled}
      className="ml-5 rounded-full bg-neutrals-900/40 p-3 transition-opacity disabled:opacity-30"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-6 w-6 text-neutrals-50 lg:h-7 lg:w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 16l-4-4m0 0l4-4m-4 4h18"
        />
      </svg>
    </button>
  );
}

interface NextButtonProps {
  nextDisabled: boolean;
  nextSlide: () => void;
}

function NextButton({ nextDisabled, nextSlide }: NextButtonProps) {
  return (
    <button
      type="button"
      onClick={nextSlide}
      disabled={nextDisabled}
      className="mr-10 aspect-square rounded-full bg-neutrals-900/40 p-3 transition-opacity disabled:opacity-30"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-6 w-6 text-neutrals-50 lg:h-7 lg:w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 16l-4-4m0 0l4-4m-4 4h18"
        />
      </svg>
    </button>
  );
} */

interface ProjectsCarouselProps {
  projects: Project[];
}

/*
function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  return (
    <Carousel
      frameAriaLabel="Projects showcase"
      enableKeyboardControls
      renderBottomCenterControls={null}
      renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
        <PreviousButton
          previousDisabled={previousDisabled}
          previousSlide={previousSlide}
        />
      )}
      renderCenterRightControls={({ nextDisabled, nextSlide }) => (
        <NextButton
          nextDisabled={nextDisabled}
          nextSlide={nextSlide}
        />
      )}
    >
      {projects.map((project) => (
        <ProjectItem
          key={project._id}
          project={project}
        />
      ))}
      </Carousel>
  );
}
*/

const containerStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
  display: 'flex',
};

const transition: AnimationOptions = {
  type: 'spring',
  bounce: 0,
  keyframes: [],
};

// eslint-disable-next-line react/display-name
const Contaier = forwardRef<HTMLDivElement, { children: ReactNode }>(
  (props, ref) => (
    <div
      ref={ref}
      style={containerStyle}
    >
      {props.children}
    </div>
  ),
);

const pageStyle: MotionStyle = {
  width: '100%',
  height: '100%',
  display: 'inline-block',
  flex: 'none',
};

export type SliderProps = {
  x: MotionValue<number>;
  i: number;
  children: React.ReactNode;
  onDragEnd: (e: Event, dragProps: PanInfo) => void;
};

function Slider({ x, i, onDragEnd, children }: SliderProps) {
  return (
    <motion.div
      style={{
        ...pageStyle,
        x,
        left: `${i * 100}%`,
        right: `${i * 100}%`,
      }}
      drag="x"
      dragElastic={0.3}
      onDragEnd={onDragEnd}
    >
      {children}
    </motion.div>
  );
}

const autoPlay = false;
const interval = 2000;
const loop = true;

function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const x = useMotionValue(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [index, setIndex] = React.useState(0);

  const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0);

  const projectsItem = projects.map((project) => (
    <ProjectItem
      key={project._id}
      project={project}
    />
  ));

  const childrens = React.Children.toArray(projectsItem);

  const handleNext = () => {
    const idx = loop ? 0 : index;
    setIndex(index + 1 === childrens.length ? idx : index + 1);
  };

  const handlePrev = () => {
    const idx = loop ? childrens.length - 1 : 0;
    setIndex(index - 1 < 0 ? idx : index - 1);
  };

  const handleEndDrag = (e: Event, dragProps: PanInfo) => {
    const clientWidth = containerRef.current?.clientWidth || 0;

    const { offset } = dragProps;

    if (offset.x > clientWidth / 4) {
      handlePrev();
    } else if (offset.x < -clientWidth / 4) {
      handleNext();
    } else {
      // animate(x, calculateNewX(), transition);
    }
  };

  React.useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    return controls.stop;
  }, [index]);

  React.useEffect(() => {
    if (!autoPlay) {
      return;
    }
    setInterval(() => handleNext(), interval);
    // return () => clearInterval(timer);
  }, [handleNext, interval]);

  return (
    <Contaier ref={containerRef}>
      {childrens.map((child, i) => (
        <Slider
          onDragEnd={handleEndDrag}
          x={x}
          i={i}
          key={i}
        >
          {child}
        </Slider>
      ))}
      {/* left arrow */}
      {/* renderArrowLeft ? (
        renderArrowLeft({ handlePrev, activeIndex: index })
      ) : (
        <Arrow
          left
          onClick={handlePrev}
        >
          &larr;
        </Arrow>
      ) */}

      {/* right arrow */}
      {/* renderArrowRight ? (
        renderArrowRight({ handleNext, activeIndex: index })
      ) : (
        <Arrow onClick={handleNext}>&rarr;</Arrow>
      ) */}

      {/* dots */}
      {/* renderDots ? (
        renderDots({ setActiveIndex: setIndex, activeIndex: index })
      ) : (
        <Dots
          length={childrens.length}
          setActiveIndex={setIndex}
          activeIndex={index}
        />
      ) */}
    </Contaier>
  );
}

export default ProjectsCarousel;
