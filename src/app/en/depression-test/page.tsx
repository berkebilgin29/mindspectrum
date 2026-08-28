import { buildLandingExports } from "@/lib/seo/buildLandingPage";
import { LANDING_BY_EN_SLUG } from "@/lib/seo/landings";

const { metadata, Page } = buildLandingExports(
  LANDING_BY_EN_SLUG["depression-test"],
  "en",
);
export { metadata };
export default Page;
