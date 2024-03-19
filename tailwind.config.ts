import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    ({ addUtilities }: { addUtilities: any }) => {
      addUtilities({
        ".pagingArrow": {
          "@apply w-9 h-9 cursor-pointer text-[20px] flex justify-center items-center border rounded-full hover:text-orange-600 hover:border-orange-600":
            "",
        },
        "section": {
          "@apply mb-5":
            ""
        },
        "section h2": {
          "@apply mb-2":
            ""
        },
        ".search_result_box": {
          "@apply md:w-full lg:w-[700px] xl:w-[750px] 2xl:w-[850px]":
            ""
        }
      })
    }
  ],
};
export default config;
