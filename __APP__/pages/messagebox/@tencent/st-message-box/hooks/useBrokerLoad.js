var e = require("../../../../../common/vendor.js");
exports.useCardLoad = function () {
  var n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
    t = e.ref([]);
  function r(e) {
    var n = "".concat(e),
      r = t.value.findIndex(function (e) {
        return e.dealerCode === n;
      });
    r !== t.value.length - 1 && u(t.value[r + 1].dealerCode);
  }
  function u(e) {
    var n = "".concat(e),
      u = t.value.findIndex(function (e) {
        return e.dealerCode === n;
      });
    u < 0 ||
      (t.value[u].status
        ? setTimeout(function () {
            r(t.value[u].dealerCode);
          }, 100)
        : (t.value[u].status = !0));
  }
  return {
    canRender: function (e) {
      if (!n) return !0;
      var r = "".concat(e),
        u = t.value.find(function (e) {
          return e.dealerCode === r;
        });
      return !u || u.status;
    },
    setCardQueue: function (e) {
      var n = e.map(function (e) {
        var n = t.value.find(function (n) {
          return n.dealerCode === e;
        });
        return { dealerCode: "".concat(e), status: !!n && n.status };
      });
      (t.value = n), t.value.length && u(t.value[0].dealerCode);
    },
    notifyNextRender: r,
    notifyCurrentRender: u,
    cardQueue: t,
  };
};
