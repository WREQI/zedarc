require("../../app.js");
var e = require("../../common/vendor.js");
exports.useSwitch = function () {
  var t,
    n = null == (t = e.getCurrentInstance()) ? void 0 : t.proxy,
    r = e.ref(!1);
  function i(e) {
    r.value = e;
  }
  return {
    showSwitch: r,
    handleSwitch: function () {
      null == n || n.$stat.click("trade.trade.togglebroker_click"),
        window.parent.postMessage({ event: "brokerSwitchListVisible" }, "*");
    },
    reset: function () {
      e.index.$off("embedded:brokerSwitchStatusChange", i);
    },
    listenSwitch: function () {
      e.index.$on("embedded:brokerSwitchStatusChange", i);
    },
  };
};
