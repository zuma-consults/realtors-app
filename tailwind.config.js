// tailwind.config.ts

const tailwindConfig = {
  content: [
    // './src/pages/*/.{js,ts,jsx,tsx,mdx}',
    // './src/components/*/.{js,ts,jsx,tsx,mdx}',
    // './src/app/*/.{js,ts,jsx,tsx,mdx}',
    // './src/pages/*/.{js,ts,jsx,tsx,mdx}',
    // './src/layouts/*/.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ra: {
          darkgreen: "#02B98F",
          lightgreen: "#EFFEF5",
          footer:'#0F2D4F',
          text: "#0F2D4F",
        },
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
