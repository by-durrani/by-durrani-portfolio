import { resume } from "@/data/resume";

export default function sitemap() {
  return [{ url: resume.links.website, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
