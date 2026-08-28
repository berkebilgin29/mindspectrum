import { buildLandingExports } from "@/lib/seo/buildLandingPage";
import { LANDING_BY_TR_SLUG } from "@/lib/seo/landings";

const { metadata, Page } = buildLandingExports(
  LANDING_BY_TR_SLUG["anksiyete-testi"],
  "tr",
);
export { metadata };
export default Page;
