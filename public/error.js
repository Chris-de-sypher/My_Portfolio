/** @format */

const changer = document.getElementById("background");

const LightAndDarkMode = function () {
  changer.onclick = (e) => {
    e.preventDefault();
    const Light = changer.getAttribute("data-bg-dark");
    const LightBulb = changer.getAttribute("data-on");
    document
      .querySelector(":root")
      .style.setProperty("--bg-color-black", Light);
    changer.style.color = LightBulb;

    LightMode(changer);
  };
};

LightAndDarkMode(changer);

function LightMode() {
  changer.onclick = (e) => {
    e.preventDefault();
    const Light = changer.getAttribute("data-bg-light");
    const LightBulb = changer.getAttribute("data-off");
    document
      .querySelector(":root")
      .style.setProperty("--bg-color-black", Light);
    changer.style.color = LightBulb;

    LightAndDarkMode(changer);
  };
}
