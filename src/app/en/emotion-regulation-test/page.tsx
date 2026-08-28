import { buildLandingExports } from "@/lib/seo/buildLandingPage";
import { LANDING_BY_EN_SLUG } from "@/lib/seo/landings";

const { metadata, Page } = buildLandingExports(
  LANDING_BY_EN_SLUG["emotion-regulation-test"],
  "en",
);
export { metadata };
export default Page;
