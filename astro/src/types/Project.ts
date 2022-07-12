import Image from "./Image";

type Project = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  date: string;
  description: string;
  githuburl: string | null;
  figmaurl: string | null;
  images: Image[];
  name: string;
  projecturl: string | null;
  slug: { _type: string; current: string };
  tags: string[];
};

export default Project;
