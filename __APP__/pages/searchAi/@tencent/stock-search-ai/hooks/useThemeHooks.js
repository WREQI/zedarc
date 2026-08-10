var t = require("../../../../../common/vendor.js"),
  e = !1,
  n = !1,
  i = {}.ios;
exports.useThemeHooks = function (o, A) {
  var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    u = t.ref(!1),
    c = t.computed(function () {
      return "blue" === o.theme || "white" === o.theme ? "white" : "black";
    }),
    r = t.computed(function () {
      var t, e;
      return (
        (null == (e = null == (t = getApp().globalData.detect) ? void 0 : t.env)
          ? void 0
          : e.IS_PCWEIXIN) || !1
      );
    }),
    g = t.computed(function () {
      if (t.wx$1.getMenuButtonBoundingClientRect && !r.value)
        try {
          return t.wx$1.getMenuButtonBoundingClientRect();
        } catch (t) {}
      return null;
    }),
    s = t.computed(function () {
      if (g.value)
        try {
          var t = g.value.bottom;
          return "height: ".concat(t + 16, "px");
        } catch (t) {}
      else {
        if (e && i && window.__statusBarHeight__)
          return "height: ".concat(window.__statusBarHeight__ + 44, "px");
        if (e && !n) return "height: 82px";
      }
      return "";
    }),
    f = t.computed(function () {
      if (g.value)
        try {
          var t = g.value,
            n = t.top,
            o = t.height;
          return "top: ".concat(n + (o - 44) / 2, "px; height: 54px");
        } catch (t) {}
      else if (e && i && window.__statusBarHeight__)
        return "top: ".concat(window.__statusBarHeight__, "px; height: 44px");
      return "";
    }),
    d = t.computed(function () {
      return "white" === c.value
        ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAEJwAABCcASbNOjQAAABFUExURUdwTAsTKBAYKAsVKAsVKwoUKAoUKAoVKAoUKQgYKAsVJxAgIAsUKQsTKAkUKRAQMAwUKAkVKQsVJwsUJwsVKQoWKQoUKOcfs80AAAAWdFJOUwBfIGAwgH/f7yDPEM9gcBBAb5Bwj1D9+0nlAAAAm0lEQVRYw+3XWw7DIAxE0QmE4r5ImrTe/1Ir4XYFno+U+i7gCGQBAoiiCK0kBnO9qEriOKqN5GgmOZvXOZtT3E4N548d98GYzbm7HRnTWbsjq9eZ+nJkHtOpbudhTjqKAzsX7rkDwoJ21tZQaFImjf8ryaCSXUc8SadBpcqSPg/kKaSQjiUtty49adKLJRVwJKF8IZEbx4miX+kNHBYZVlY+mtkAAAAASUVORK5CYII="
        : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAEJwAABCcASbNOjQAAAA/UExURUdwTJmhs5mgs5+fr5WftZefs5efspigtJigs5efr5eft5mhtJqftZefs5mftJihs5aftJafspigspifs5igsyoQvwIAAAAUdFJOUwB/zxAwgGDf7yAgXzBAcG9wUI+Q9h5MAwAAAJlJREFUWMPt1+sNgzAMBOAD8nBDoZR6/1mRMBv4ftDgG+BTouhiGYhEIthyYzDTqCqN46iuJEcLyfl5nZc52e3UcB7suIuRKqcXSfp0ltORxevM53Ek9elUt/Mxp93FgfXC/e6AsKCVdTVkmlRMerMk6VSy74gn6dypVFnSNSCHkEK6l3StEDtN+rKkDI4klBUSZeM4kci/5ABIDBdBaHEc4wAAAABJRU5ErkJggg==";
    }),
    l = t.ref(
      "https://st.gtimg.com/design/326b2ffe05df5f6db6a1673953de4116.png"
    ),
    m = t.computed(function () {
      return !r.value;
    }),
    h = t.computed(function () {
      return "white" === c.value
        ? "https://st.gtimg.com/design/ff3298e1d31fe32dd08a01019c152aac.png"
        : "https://st.gtimg.com/design/8b070ecfcc11230071a4145975b70a97.png";
    }),
    w = t.computed(function () {
      return "white" === c.value
        ? "https://st.gtimg.com/design/81aaf0913e051a952d6612b8a037ba62.png"
        : "https://st.gtimg.com/design/b3b6e94afe7e287a8262634c3a6a8c83.png";
    }),
    p = t.computed(function () {
      return "white" === c.value
        ? "https://st.gtimg.com/design/058f36a362c620bd33be780dff7b7c94.png"
        : "https://st.gtimg.com/design/eb561b16ef26130a43a2b6bd18ea6f1a.png";
    }),
    B = t.ref(0),
    v = t.ref(0),
    U = Object.freeze({}),
    y = t.computed(function () {
      if (B.value) {
        var t = B.value - 8 - v.value;
        return { "--last-answer-min-height": "".concat(Math.max(0, t), "px") };
      }
      return U;
    }),
    E = function () {
      t.nextTick$1(function () {
        t.wx$1
          .createSelectorQuery()
          .in(A)
          .select(".mainContent")
          .boundingClientRect(function (t) {
            B.value = null == t ? void 0 : t.height;
          })
          .exec();
      });
    },
    K = t.computed(function () {
      if (t.StockBridge.ENV === t.EnvTypeEnum.MP) {
        var e = (
          (t.wx$1.getWindowInfo && t.wx$1.getWindowInfo()) ||
          t.wx$1.getSystemInfoSync()
        ).screenHeight;
        return "height: ".concat(0.8 * e, "px");
      }
      return "";
    }),
    x = null,
    I = null;
  return (
    t.onMounted(function () {
      e &&
        "undefined" != typeof shy &&
        shy.getSystemInfo &&
        shy.getSystemInfo(function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          u.value = "harmony" === t.os;
        }),
        a &&
          ((x = setTimeout(function () {
            E();
          }, 30)),
          (I = setTimeout(function () {
            E();
          }, 500)));
    }),
    t.onUnmounted(function () {
      a && (x && clearTimeout(x), I && clearTimeout(I));
    }),
    {
      isHarmony: u,
      skin: c,
      isMPZxgPC: r,
      navTitleStyle: f,
      navTitleBackImageUrl: d,
      naviTitleAiModelTriangle: l,
      navContainerStyle: s,
      showNaviBack: m,
      drawerHistoryCloseIcon: h,
      drawerHistoryStickyIcon: w,
      drawerHistoryEmptyIcon: p,
      mainContentHeight: B,
      calcContainerHeight: E,
      lastAnswerItemStyle: y,
      updateInputAreaHeightOffset: function (t) {
        v.value = Math.max(0, t || 0);
      },
      getAppSafeBottom: function () {
        if (!e) return 0;
        return i || u.value
          ? null == window.__safeAreaBottom__
            ? 39
            : 0 == window.__safeAreaBottom__
            ? 10
            : window.__safeAreaBottom__
          : 39;
      },
      halfContainerStyle: K,
    }
  );
};
