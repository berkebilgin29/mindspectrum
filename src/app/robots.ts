import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "Googlebot",
  "ClaudeBot",
  "Anthropic-AI",
  "PerplexityBot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "meta-externalagent",
];

const LANDING_ALLOW = [
  "/dehb-testi",
  "/okb-testi",
  "/depresyon-testi",
  "/anksiyete-testi",
  "/bipolar-testi",
  "/otizm-testi",
  "/sosyal-kaygi-testi",
  "/travma-testi",
  "/duygu-regulasyonu-testi",
  "/en/adhd-test",
  "/en/ocd-test",
  "/en/depression-test",
  "/en/anxiety-test",
  "/en/bipolar-test",
  "/en/autism-test",
  "/en/social-anxiety-test",
  "/en/trauma-test",
  "/en/emotion-regulation-test",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/tarama",
          "/sonuc",
          "/gecmis",
          "/paylas",
          "/cocuklar/tarama",
          "/cocuklar/sonuc",
          "/en/scan",
          "/en/results",
          "/en/history",
          "/en/share",
          "/en/children/scan",
          "/en/children/results",
        ],
      },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: [
          "/",
          "/llms.txt",
          "/ai.txt",
          "/hakkinda",
          "/sss",
          "/olcekler",
          "/cocuklar",
          "/kriz",
          "/en",
          "/en/about",
          "/en/faq",
          "/en/scales",
          "/en/children",
          "/en/crisis",
          ...LANDING_ALLOW,
        ],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
