import { resume } from "@/data/resume";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${resume.links.website}/sitemap.xml`,
  };
}
