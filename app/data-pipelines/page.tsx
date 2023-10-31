import Features from "~/components/features";
import Hero from "~/components/hero";
import getPageContext, { PageName } from "~/lib/get-page-context";

export default async function Page() {
  const ctx = await getPageContext(PageName.CIO_PIPELINES);

  if (!ctx) {
    return <div>Data not found for ${PageName.CIO_PIPELINES}</div>;
  }

  return (
    <>
      <Hero {...ctx} />
      <Features {...ctx} />
    </>
  );
}
