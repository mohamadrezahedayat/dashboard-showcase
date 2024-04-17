import React from "react";

const AnalyticsIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_26_757)">
        <mask
          id="mask0_26_757"
          maskUnits="userSpaceOnUse"
          x="4"
          y="1"
          width="22"
          height="22"
        >
          <path
            d="M25 2.5H5V8.5H25V2.5Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M5 20.515L11.088 14.365L14.3775 17.515L18.399 13.5L20.639 15.684"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25 8.086V21.086M5 8.086V15.086M9.508 21.5H25"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M11.5 5.49997H22M8 5.49847H8.5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </mask>
        <g mask="url(#mask0_26_757)">
          <path d="M3 0H27V24H3V0Z" fill="currentColor" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_26_757"
          x="-1"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_26_757"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_26_757"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default AnalyticsIcon;
