const body = document.body,
  html = document.documentElement,
  themeToggles = document.querySelectorAll("[data-theme]"),
  menu = document.querySelector("[data-menu]"),
  mobile = document.querySelector("[data-mobile]"),
  rtlToggles = document.querySelectorAll("[data-rtl]");

// Dark mode
function applyTheme(isDark) {
  body.classList.toggle("dark", isDark);
  html.classList.toggle("dark", isDark);
  themeToggles.forEach((btn) => {
    if (btn.classList.contains("mobile-tool")) {
      btn.textContent = isDark ? "☀" : "◐";
    } else {
      btn.textContent = isDark ? "☀" : "◐";
    }
  });
}
applyTheme(localStorage.getItem("orgema-theme") === "dark");
themeToggles.forEach((btn) =>
  btn.addEventListener("click", () => {
    const isDark = !html.classList.contains("dark");
    localStorage.setItem("orgema-theme", isDark ? "dark" : "light");
    applyTheme(isDark);
  }),
);

// Mobile menu toggle
menu?.addEventListener("click", () => {
  mobile?.classList.toggle("open");
  menu.setAttribute(
    "aria-expanded",
    mobile?.classList.contains("open") ? "true" : "false",
  );
});

// RTL / LTR direction
function setDirection(isRtl) {
  if (isRtl) {
    html.setAttribute("dir", "rtl");
    body.setAttribute("dir", "rtl");
  } else {
    html.removeAttribute("dir");
    body.removeAttribute("dir");
  }
  localStorage.setItem("orgema-dir", isRtl ? "rtl" : "ltr");
  rtlToggles.forEach((btn) => {
    btn.textContent = btn.classList.contains("mobile-tool")
      ? isRtl ? "LTR" : "RTL"
      : isRtl ? "LTR" : "RTL";
    btn.classList.toggle("active", isRtl);
    btn.setAttribute("title", isRtl ? "Switch to LTR" : "Switch to RTL");
  });
}
setDirection(localStorage.getItem("orgema-dir") === "rtl");
rtlToggles.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    setDirection(html.getAttribute("dir") !== "rtl");
  }),
);

// Demo forms handler
document.querySelectorAll("[data-demo]").forEach((form) =>
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const msg = form.querySelector(".form-message");
    if (msg) {
      msg.textContent =
        "Thank you. This is a front-end demo; connect an email or CRM service to receive submissions.";
    } else {
      alert("Thank you for your enquiry. We will get back to you shortly.");
    }
    form.reset();
  }),
);

// Back to top floating button
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  const toggleBackToTop = () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
