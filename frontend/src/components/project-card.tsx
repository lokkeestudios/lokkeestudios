import SanityImage from '@/components/ui/sanity-image';
import type { Project } from '@/lib/get-projects';
import { formatDate } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={`/project/${project.slug.current}`}
      className="relative flex-1 flex-grow rounded-lg border border-neutrals-200/20 bg-radial-highlight p-4 transition-[transform,filter] duration-300 focus-visible:-translate-y-2 focus-visible:scale-[1.01] focus-visible:drop-shadow-lg md:p-8 md:hover:-translate-y-2 md:hover:scale-[1.01] md:hover:drop-shadow-lg"
    >
      <SanityImage
        image={project.poster}
        className="aspect-video w-full rounded-md object-cover object-center"
      />
      <article className="mt-4 flex flex-col items-center gap-y-2 text-center">
        <time
          dateTime={project.date}
          className="text-xs uppercase text-neutrals-200"
        >
          {formatDate(project.date)}
        </time>
        <h3 className="text-2xl font-bold md:text-3xl">{project.name}</h3>
        {project.tags && (
          <p className="mb-2 text-xs text-neutrals-200">
            {project.tags.join(', ')}
          </p>
        )}
        <p className="max-w-prose text-neutrals-200">{project.description}</p>
      </article>
    </a>
  );
}

export default ProjectCard;
