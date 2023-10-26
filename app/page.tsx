import Features from "~/components/features";
import Hero from "~/components/hero";
import getPageContext, { PageName } from "~/lib/get-page-context";

export default async function Page() {
  const ctx = await getPageContext(PageName.CIO_JOURNEYS);
  console.log("ctx:", ctx);
  return (
    <>
      {ctx && <Hero {...ctx} />}
      {ctx && <Features {...ctx} />}
    </>
  );
}
