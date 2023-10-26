import { ImageResponse } from "next/server";

import Logo from "~/components/logo";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Cusomer.io Lander";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  const geologica = fetch(
    new URL("public/Geologica_Cursive-Regular.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          backgroundColor: "#070724",
          backgroundSize: "100px 100px",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #00f260 2%, transparent 0%), radial-gradient(circle at 75px 75px, #00f260 2%, transparent 0%)",
          backgroundPosition: "0 -8px, 0 -8px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        />
        {/* <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="32"
            viewBox="0 0 45 32"
            fill="none"
          >
            <path
              d="M22.2381 18.2679C27.1509 18.2679 31.1334 14.3024 31.1334 9.41074C31.1334 4.51907 27.1509 0.553589 22.2381 0.553589C17.3253 0.553589 13.3428 4.51907 13.3428 9.41074C13.3428 14.3024 17.3253 18.2679 22.2381 18.2679Z"
              fill="white"
            />
            <mask
              id="mask0_30_34"
              // style="mask-type:luminance"
              maskUnits="userSpaceOnUse"
              x="0"
              y="9"
              width="45"
              height="23"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5288 9.41077C6.94038 9.41077 8.82507 11.4089 9.6001 13.6827C11.3867 18.9245 16.3701 22.6965 22.2383 22.6965C28.1065 22.6965 33.09 18.9245 34.8765 13.6827C35.6515 11.4089 37.5363 9.41077 39.9478 9.41077H44.4764C44.4764 21.6399 34.5202 31.5536 22.2383 31.5536C9.95641 31.5536 0 21.6399 0 9.41077H4.5288Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_30_34)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6782 17.5326C9.93351 15.2869 8.89533 12.4695 8.89533 9.41064H0C0 14.9162 2.01795 19.9524 5.35757 23.8261L11.6782 17.5326ZM7.76092 26.2191C11.6512 29.5442 16.7091 31.5535 22.2383 31.5535C27.7676 31.5535 32.8255 29.5442 36.7159 26.2189L30.3953 19.9254C28.1399 21.6626 25.3103 22.6963 22.2383 22.6963C19.1664 22.6963 16.3369 21.6627 14.0815 19.9256L7.76092 26.2191ZM32.7986 17.5324L39.1192 23.8259C42.4589 19.9523 44.4764 14.9161 44.4764 9.41064H35.5813C35.5813 12.4694 34.5432 15.2867 32.7986 17.5324Z"
                fill="white"
              />
              <path
                d="M22.2381 22.6963C29.6072 22.6963 35.5811 16.7481 35.5811 9.41058C35.5811 2.07309 29.6072 -3.87512 22.2381 -3.87512C14.869 -3.87512 8.89514 2.07309 8.89514 9.41058C8.89514 16.7481 14.869 22.6963 22.2381 22.6963Z"
                fill="#2F326A"
              />
            </g>
          </svg>
        </div> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
            fontStyle: "normal",
            marginTop: 0,
            lineHeight: 1.8,
            whiteSpace: "pre-wrap",
          }}
        >
          <b style={{ color: "white" }}>Customer.io | Homework</b>
        </div>
        <div
          style={{
            display: "flex",
          }}
        />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Geologica",
          data: await geologica,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
