/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "header-1": "38px", // Main headings (e.g., <h1>)
        "header-2": "32px", // Secondary headings (e.g., <h2>)
        "header-3": "28px", // Tertiary headings (e.g., <h3>)
        "header-4": "24px", // Subheadings (e.g., <h4>)
        "header-5": "20px", // Smaller headings (e.g., <h5>)
        "header-6": "18px", // Smallest headings (e.g., <h6>)
        subheader: "16px", // Subheaders or important text
        "body-large": "16px", // Large body text
        body: "14px", // Default body text
        "body-small": "12px", // Small body text
        caption: "10px", // Captions and fine print
        button: "14px", // Button text
        input: "14px", // Form input text
        label: "12px", // Form labels and small text
        comment: "12px", // Comments and minor text
        price: "16px", // Prices and important figures
        quote: "16px", // Quotes or highlighted text
        lead: "18px", // Lead paragraphs or emphasis
        code: "14px", // Code snippets or monospaced text
        footer: "12px", // Footer text
      },
    },
  },
  plugins: [],
};
