import formatDate from '@utils/formatDate';
import type { Project } from '@utils/getProjects';
import sanityImageUrlFor from '@utils/sanityImageUrlFor';

interface Props {
  project: Project;
}

function ProjectItem({ project }: Props) {
  return (
    <a
      href={`/projects/${project.slug.current}`}
      title={`Show ${project.name} details`}
      className="group relative flex h-screen w-full flex-col"
    >
      <img
        src={sanityImageUrlFor(project.poster)
          .format('webp')
          .auto('format')
          .url()}
        alt={project.poster.alttext}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-t from-neutrals-900"
      />
      <div className="mx-auto mt-auto w-10/12 py-[24vh] 2xl:w-[80%]">
        <div className="transition-transform duration-500">
          <span className="mb-3 max-w-prose text-sm leading-relaxed md:text-base">
            {formatDate(project.date)}
          </span>
          <h4 className="mt-1 mb-6 font-display text-4xl font-bold leading-[1.1] lg:text-6xl lg:leading-[1.1]">
            {project.name}
          </h4>
        </div>
        <div className="bottom-[25vh] max-h-0 overflow-hidden text-ellipsis transition-[max-height] duration-500 group-hover:max-h-48">
          <p className="max-w-prose translate-y-full text-sm leading-relaxed text-neutrals-50/80 transition-transform duration-500 group-hover:translate-y-0 md:text-base">
            {project.description}
          </p>
        </div>
        <div className="flex gap-x-4 border-b border-neutrals-50/60 pb-3 transition-transform duration-500 group-hover:translate-y-6">
          {project.tags &&
            project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs lg:text-sm"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </a>
  );
}

export default ProjectItem;
