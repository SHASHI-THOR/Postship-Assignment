/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "global-orange-orange01": "#fffdfa",
        "color-bg-surface-surface": "#fff",
        "color-bg-fill-fill-brand": "#303030",
        "color-text-text-secondary": "#616161",
        "color-input-border": "#8a8a8a",
        "color-input-bg-surface": "#fdfdfd",
        "color-text-text-emphasis": "#005bd3",
        "color-text-text-brand": "#4a4a4a",
        "color-purple-14": "#7126ff",
        "global-orange-orange02": "#fff7ee",
        mistyrose: "#ffeaea",
        maroon: "#571010",
        lightcoral: "#ff9898",
        "global-orange-orange-08": "#ffc879",
        "global-orange-orange-04": "#ffebd5",
        "global-orange-orange-12": "#956f00",
        "color-bg-bg": "#f1f1f1",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#dedee6",
          "300": "#d9d9d9",
        },
        "color-border-border": "#e3e3e3",
        "color-bg-surface-surface-warning": "#fff1e3",
        antiquewhite: "#e6d9c9",
        silver: "#c9c9c9",
        "color-icon-icon-magic": "#8051ff",
        "color-bg-surface-surface-magic": "#f8f7ff",
        mediumslateblue: "#996bff",
        "color-icon-icon-success": "#29845a",
        "color-bg-surface-surface-info": "#eaf4ff",
        "color-bg-surface-surface-caution": "#fff8db",
        "global-orange-orange-14": "#5e4200",
      },
      spacing: {
        "p-space-4": "16px",
        "space-button-group-gap": "8px",
        "space-050": "2px",
        "space-300": "12px",
        "space-150": "6px",
        "space-100": "4px",
        "space-200": "8px",
        "space-card-padding": "16px",
      },
      fontFamily: {
        "body-body-sm-medium": "Inter",
        "body-body-sm-semibold": "'SF Pro Text'",
      },
      borderRadius: {
        xl: "20px",
        "border-border-radius-button": "8px",
        "card-radius-figma-only": "12px",
      },
    },
    fontSize: {
      xs: "12px",
      smi: "13px",
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
