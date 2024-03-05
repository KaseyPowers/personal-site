import Script from "next/script";

function themeScriptFn() {
  var theme;
  // try grabbing theme from localstorage
  try {
    theme = localStorage.getItem("theme");
  } catch (e) {
    console.error("Localstorage get failed, error: ", e);
  }
  // if no theme grabbed, use media query
  if (!theme) {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    // if grabbing a theme from query, make sure to update localstorage to match
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      console.error("Localstorage set failed, error: ", e);
    }
  }

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function ThemeScript() {
  return (
    <Script id="theme_script">{`
      ${themeScriptFn.toString()}

      themeScriptFn();
  `}</Script>
  );
}
