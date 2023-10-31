import Features from "~/components/features";
import Hero from "~/components/hero";
import getPageContext, { PageName } from "~/lib/get-page-context";

export default async function Page() {
  const ctx = await getPageContext(PageName.CIO_PIPELINES);

  return (
    <>
      <Hero {...ctx} />
      <Features {...ctx} />
    </>
  );
}
