import { promises as fs } from "fs";

export enum PageName {
  CIO_JOURNEYS = "Journeys",
  CIO_PIPELINES = "Data Pipelines",
}

export type PageContextShape = {
  theme: string;
  name: string;
  overview: {
    content: string;
  };
  features: {
    content: string;
  };
  featureItems: {
    [keyof: string]: string;
  };
  images: {
    dashboard: string;
    platform: string;
  };
};

export default async function getPageContext(pageName: PageName) {
  const file = await fs.readFile(
    process.cwd() + "/data/page-context.json",
    "utf8",
  );
  const data: PageContextShape[] = JSON.parse(file);
  const ctx = data.find((ctx) => ctx.name === pageName);

  if (!ctx) {
    throw new Error(`Context not found for pageName: ${pageName}`);
  }

  return ctx;
}
