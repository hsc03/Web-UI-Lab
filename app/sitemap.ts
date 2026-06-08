import type { MetadataRoute } from "next";
import { absoluteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/keyboard_test"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
