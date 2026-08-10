var e = {
    light: {
      "--fill-content-layer": "#fff",
      "--color-heavygray": "#262e40",
      "--border-light-divider": "#e9ebf0",
      "--color-midgray": "#475166",
      "--color-lightgray-2": "#98a0b3",
    },
    dark: {
      "--color-heavygray": "#f0f1f5",
      "--fill-content-layer": "#12161f",
      "--border-light-divider": "#191e27",
      "--color-midgray": "#a7b0c4",
      "--color-lightgray-2": "#69738c",
    },
  },
  r = {
    dark: "dark",
    black: "dark",
    panda: "dark",
    white: "light",
    blue: "light",
    light: "light",
  };
exports.getCSSVariable = function (t, l) {
  var a =
    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "light";
  return "web" == ("undefined" != typeof document ? "web" : "mp")
    ? getComputedStyle(document.body).getPropertyValue(t)
    : e[r[a] || "light"][t] || "#262e40";
};
