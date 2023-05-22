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
      className="relative p-4 md:p-8 rounded-lg flex-1 border-neutrals-200/20 border bg-[radial-gradient(circle_at_50%_100%,rgb(46_54_79/0.4)_1%,rgb(46_54_79/0.1)_100%)] md:hover:-translate-y-2 transition-[transform,filter] md:hover:drop-shadow-lg duration-300 md:hover:scale-[1.01] focus-visible:-translate-y-2 focus-visible:drop-shadow-lg focus-visible:scale-[1.01] flex-grow"
    >
      <SanityImage
        image={project.poster}
        className="rounded-md w-full aspect-video object-cover object-center"
      />
      <div className="mt-4 flex flex-col items-center text-center gap-y-2">
        <p className="text-xs uppercase text-neutrals-200">
          {formatDate(project.date)}
        </p>
        <h3 className="font-bold text-2xl md:text-3xl">{project.name}</h3>
        {project.tags && (
          <p className="text-neutrals-200 text-xs mb-2">
            {project.tags.join(', ')}
          </p>
        )}
        <p className="max-w-prose text-neutrals-200">{project.description}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
