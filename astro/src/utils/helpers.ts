import { parseISO, format } from "date-fns";
import { client } from "../lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

export function formatDate(date: string) {
  const dateString = parseISO(date);
  const formattedDateString = format(dateString, "MMMM yyyy");
  return `${formattedDateString}`;
}

export function getSanityImageUrl(source: SanityImageSource) {
  return builder.image(source);
}
