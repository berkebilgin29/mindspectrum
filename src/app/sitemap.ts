import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const TR_PATHS = [
  { path: "", priority: 1, freq: "weekly" },
  { path: "/cocuklar", priority: 0.9, freq: "weekly" },
  { path: "/olcekler", priority: 0.8, freq: "monthly" },
  { path: "/hakkinda", priority: 0.7, freq: "monthly" },
  { path: "/sss", priority: 0.7, freq: "monthly" },
  { path: "/yasal-uyari", priority: 0.5, freq: "monthly" },
  { path: "/gizlilik", priority: 0.5, freq: "monthly" },
  { path: "/kullanim-sartlari", priority: 0.5, freq: "monthly" },
  { path: "/kriz", priority: 0.8, freq: "monthly" },
  { path: "/iletisim", priority: 0.6, freq: "monthly" },
];

const EN_PATHS = [
  { path: "/en", priority: 1, freq: "weekly" },
  { path: "/en/children", priority: 0.9, freq: "weekly" },
  { path: "/en/scales", priority: 0.8, freq: "monthly" },
  { path: "/en/about", priority: 0.7, freq: "monthly" },
  { path: "/en/faq", priority: 0.7, freq: "monthly" },
  { path: "/en/disclaimer", priority: 0.5, freq: "monthly" },
  { path: "/en/privacy", priority: 0.5, freq: "monthly" },
  { path: "/en/terms", priority: 0.5, freq: "monthly" },
  { path: "/en/crisis", priority: 0.8, freq: "monthly" },
  { path: "/en/contact", priority: 0.6, freq: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...TR_PATHS, ...EN_PATHS].map(({ path, priority, freq }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: freq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority,
  }));
}
