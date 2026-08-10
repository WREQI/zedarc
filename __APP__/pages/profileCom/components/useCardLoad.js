var e = require("../../../common/vendor.js");
exports.useCardLoad = function () {
  var n = e.ref([]);
  function r(e) {
    var r = "".concat(e),
      u = n.value.findIndex(function (e) {
        return e.dealerCode === r;
      });
    u !== n.value.length - 1 && a(n.value[u + 1].dealerCode);
  }
  function a(e) {
    var a = "".concat(e),
      u = n.value.findIndex(function (e) {
        return e.dealerCode === a;
      });
    u < 0 ||
      (n.value[u].status ? r(n.value[u].dealerCode) : (n.value[u].status = !0));
  }
  return {
    canRender: function (e) {
      var r = "".concat(e),
        a = n.value.find(function (e) {
          return e.dealerCode === r;
        });
      return !a || a.status;
    },
    setCardQueue: function (r) {
      var u = !e.hasFixedPluginRender(),
        t = r.map(function (e) {
          var r = n.value.find(function (n) {
            return n.dealerCode === e;
          });
          return { dealerCode: "".concat(e), status: r ? r.status : u };
        });
      (n.value = t), n.value.length && a(n.value[0].dealerCode);
    },
    notifyNextRender: r,
    notifyCurrentRender: a,
    cardQueue: n,
  };
};
