var e = require("../../../../../common/vendor.js"),
  i = e.defineStore("useSwitchModeStore", function () {
    var i = e.ref({}),
      n = e.ref({}),
      t = function (e, n) {
        if (e && void 0 !== n) {
          var t = i.value;
          (t[e] = n), (i.value = Object.assign({}, t));
        }
      },
      r = function (e, i) {
        if (e && void 0 !== i) {
          var t = n.value;
          (t[e] = i), (n.value = Object.assign({}, t));
        }
      };
    return {
      riseIndexMap: i,
      animateMovingMap: n,
      setRiseIndex: t,
      setAnimateMoving: r,
      resetAll: function (e) {
        t(e, 0), r(e, !1);
      },
    };
  });
exports.useSwitchModeStore = i;
