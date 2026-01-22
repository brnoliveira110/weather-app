const config = {
  plugins: {
    "@tailwindcss/postcss": {
      content: [
        './src/components/**/*.{ts,tsx,js,jsx}',
        './src/app/**/*.{ts,tsx,js,jsx}',
      ],
    },
  },
};

export default config;
