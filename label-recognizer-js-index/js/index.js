const currentYear = document.querySelector(".current-year");
window.addEventListener("DOMContentLoaded", () => currentYear.append(new Date().getUTCFullYear()));

const DEMO_LINKS = {
  "passport-mrz": "https://demo.dynamsoft.com/solutions/passport-scanner/",
  "general-mrz": "https://demo.dynamsoft.com/Samples/DCV/JS/general-MRZ-scanner/index.html",
  vin: "https://demo.dynamsoft.com/Samples/DCV/JS/VINScanner/index.html",
};
const router = document.querySelectorAll(".option");
router.forEach((option) => {
  option.addEventListener("click", () => {
    window.open(DEMO_LINKS[option.id]);
  });
});
