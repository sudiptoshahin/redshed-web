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
      fontFamily: {
        'roboto': ['robotoRegular', 'robotoThin', 'robotoLight', 'robotoBold', 'robotoBlack'],
        'michroma': ['michromaRegular'],
        'lato': ['latoThin', 'latoLight', 'latoRegular', 'latoBold', 'latoBlack'],
        'dancingScript': ['dancingScriptRegular', 'dancingScriptMedium', 'dancingScriptSemibold', 'dancingScriptBold', 'dancingScriptBlack'],
      }
    },

    screens: {
      '2xs': '420px', // mob

      'xs': '578px',

      'sm': '640px',

      'md': '768px', // tab

      'lg': '992px',

      'xl': '1200px', // desktop

      '2xl': '1400px', 

      '3xl': '1600px',
    }
  },
  plugins: [],
};
export default config;
