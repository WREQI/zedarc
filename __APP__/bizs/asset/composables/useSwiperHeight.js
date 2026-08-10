var e = require("../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../app.js");
var t = require("../../../common/vendor.js"),
  l = require("../../../config/enum/asset.js"),
  a = require("../../../model/trade/conditions/utils.js"),
  n = require("../../../stores/app/useMode.js");
exports.useSwiperHeight = function (o) {
  var r = o.asset,
    u = o.tabBar,
    d = o.assetFetchData,
    i = o.assetV2Control,
    s = o.bandAssistMap,
    v = o.curUniKey,
    c = o.doneOrderListExpanded,
    h = o.assetTabMaxShow,
    T = t.storeToRefs(n.useModeStore()).simpleMode,
    g = T.value ? 135 : 120;
  return t.computed(function () {
    var t,
      n,
      o,
      f,
      p,
      I,
      E,
      H,
      O,
      b = 0;
    if (0 === u.currentTabIndex.value)
      if (i.value) {
        var m,
          _ = T.value ? 198 : 192,
          M = T.value ? 96 : 72,
          S = T.value ? 128 : 120,
          y = T.value ? 17 : 16,
          D = T.value ? 120 : 124,
          C = ["debt", "holdbalance"].reduce(function (e, t) {
            var l, a;
            return (
              e +
              ((null == (a = null == (l = r.data) ? void 0 : l[t])
                ? void 0
                : a.length) || 0)
            );
          }, 0),
          G = C > 0 ? C * S + 56 + y : M,
          N =
            (null == (f = null == (o = r.data) ? void 0 : o.stock)
              ? void 0
              : f.length) || 0,
          k = N > 0 ? N * S + 56 + y : 0,
          q =
            (null == (I = null == (p = r.data) ? void 0 : p.pzstock)
              ? void 0
              : I.length) || 0,
          P = q > 0 ? q * S + 56 + y : 0,
          j =
            (null == (H = null == (E = r.data) ? void 0 : E.holdDelisted)
              ? void 0
              : H.length) || 0,
          x = N + j + q > 0 ? k + P + (j > 0 ? 322 * j + 56 + y : 0) : M,
          A = s.value || {},
          L = 0,
          Y = e(r.data.stock);
        try {
          for (Y.s(); !(m = Y.n()).done; ) {
            var F = m.value,
              R = (F.allotment ? 1 : 0) + (F.code && A[F.code] ? 1 : 0);
            R > 0 && (L += 64 * R + 20 * (R - 1) + 24);
          }
        } catch (e) {
          Y.e(e);
        } finally {
          Y.f();
        }
        b += _ + G + x + L + (v.value ? D : 0);
      } else {
        var w = ["stock", "debt", "holdbalance", "holdoutbalance", "pzstock"],
          z = w.reduce(function (e, t) {
            var l, a;
            return (
              e +
              (Boolean(
                null == (a = null == (l = r.data) ? void 0 : l[t])
                  ? void 0
                  : a.length
              )
                ? 1
                : 0)
            );
          }, 0),
          B = w.reduce(function (e, t) {
            var l, a;
            return (
              e +
              ((null == (a = null == (l = r.data) ? void 0 : l[t])
                ? void 0
                : a.length) || 0)
            );
          }, 0);
        if (0 === B) b = l.ASSET_EMPTY_HEIGHT;
        else {
          b = B * g + 56 * z + 24 * (z - 1);
          var U = r.data.stock.filter(function (e) {
            return e.allotment;
          });
          b += (180 - g) * U.length;
        }
        (null == (n = null == (t = r.data) ? void 0 : t.holdDelisted)
          ? void 0
          : n.length) &&
          (b += (T.value ? 112 : 56) + 322 * r.data.holdDelisted.length);
      }
    else if (2 === u.currentTabIndex.value) {
      var K =
          (null == (O = d.noTriggerConditions.value)
            ? void 0
            : O[d.condStatusType.value]) || [],
        V = Math.min(K.length, h);
      if (V) {
        for (var J = 0, Q = 0; Q < V; Q++) J += a.calcCondItemHeight(K[Q]);
        b = J + l.CONDITION_OPERATION_HEIGHT;
      } else b = l.CONDITION_EMPTY_HEIGHT;
      "done" !== d.condFetchStatus.value[d.condStatusType.value] &&
        (b = l.CONDITION_EMPTY_HEIGHT);
    } else if (0 === r.data.history.length) b = l.ASSET_EMPTY_HEIGHT;
    else {
      for (var W = [], X = [], Z = 0; Z < r.data.history.length; Z++) {
        var $ = r.data.history[Z];
        $.isUndone ? W.push($) : X.push($);
      }
      var ee = W.length > 0 ? 172 * W.length + 56 : 120,
        te = X.length > 0 ? 118 * X.length + 56 + 70 : 120;
      X.length > 0
        ? ((b = ee + 24 + (c.value ? te : 70)), T.value && (b -= 24))
        : (b = ee);
    }
    return (b + l.LOGO_PLACEHOLDER_HEIGHT) / 75 + "rem";
  });
};
