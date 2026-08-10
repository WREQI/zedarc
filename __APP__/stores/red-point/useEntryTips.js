var e = require("../../@babel/runtime/helpers/defineProperty"),
  r = require("../../@babel/runtime/helpers/objectSpread2"),
  u = require("../../@babel/runtime/helpers/toConsumableArray");
require("../../app.js");
var n = require("../../common/vendor.js");
require("../../service/broker.js");
var i = require("../../config/broker/11100/index.js"),
  t = n.defineStore("useEntryTips", function () {
    var t = n.ref([]),
      l = n.ref([]),
      a = n.ref({}),
      o = i.brokerConfig.dictionary.Enties.all.routeName,
      s = n.computed(function () {
        var e = u(t.value);
        return (
          l.value.some(function (e) {
            return "redPoint" === e.type;
          }) && e.push(o),
          e
        );
      }),
      v = n.computed(function () {
        var e = l.value.find(function (e) {
          return "bubble" === e.type;
        });
        return e ? { contentText: e.contentText || "", isFirstShow: !0 } : null;
      }),
      b = n.computed(function () {
        var e = r({}, a.value);
        return v.value && (e[o] = v.value), e;
      });
    function c(e) {
      var r = t.value.indexOf(e);
      -1 !== r && t.value.splice(r, 1);
    }
    function d(e) {
      var u = r({}, a.value);
      delete u[e], (a.value = r({}, u));
    }
    return {
      redPoints: s,
      bizHall: l,
      bubbleTips: b,
      allEntryBubble: v,
      addRedPoint: function (e) {
        var r = a.value[e];
        (null == r ? void 0 : r.isFirstShow) ||
          t.value.includes(e) ||
          (d(e), t.value.push(e));
      },
      deleteRedPoint: c,
      addBubbleTip: function (u, n) {
        var i = r({ isFirstShow: !0 }, n);
        (t.value.includes(u) && !i.isFirstShow) ||
          (c(u), (a.value = r(r({}, a.value), {}, e({}, u, i))));
      },
      deleteBubbleTip: d,
      isHasBubbleTipByRouteName: function (e) {
        return Object.keys(b.value).includes(e);
      },
    };
  });
exports.useEntryTips = t;
