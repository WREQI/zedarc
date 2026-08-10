var t = require("../../../../../../../common/vendor.js");
Array ||
  (t.resolveComponent("BaseDate") + t.resolveComponent("SubscribeBtn"))();
var e = t._export_sfc(
  {
    components: {
      BaseDate: function () {
        return "./BaseDate.js";
      },
      SubscribeBtn: function () {
        return "./SubscribeBtn.js";
      },
    },
    props: [
      "tabs",
      "textField",
      "currentIndex",
      "onTabClick",
      "isShowBriefTips",
      "allFold",
      "isSticky",
      "afterReport",
      "hasSubscribed",
      "publishTime",
      "triggeable",
    ],
    data: function () {
      return { current: 0 };
    },
    watch: {
      currentIndex: {
        handler: function (t, e) {
          t !== this.current && (this.current = t);
        },
      },
    },
    methods: {
      subscribe: function () {
        this.$emit("subscribe");
      },
      onTabSelect: function (t) {
        (this.current = t), this.onTabClick && this.onTabClick(t);
      },
      triggerFold: function () {
        this.$emit("triggerFold");
      },
    },
  },
  [
    [
      "render",
      function (e, r, i, n, o, s) {
        return t.e(
          { a: i.isSticky },
          i.isSticky
            ? {
                b: t.p({
                  "after-report": i.afterReport,
                  "publish-time": i.publishTime,
                }),
              }
            : {},
          {
            c: t.f(i.tabs, function (e, r, n) {
              return t.e(
                {
                  a: t.t(i.textField ? e[i.textField] : e),
                  b: i.textField && e.tooltip,
                },
                i.textField && e.tooltip ? { c: t.t(e.tooltip) } : {},
                { d: e.dot },
                (e.dot, {}),
                {
                  e: "tab-".concat(r),
                  f: r,
                  g: t.n(o.current == r ? "active bold" : ""),
                  h: t.o(
                    function (t) {
                      return s.onTabSelect(r);
                    },
                    4466,
                    r
                  ),
                }
              );
            }),
            d: t.n(i.isSticky ? "sticky" : ""),
            e: t.n(i.isSticky ? "sticky" : ""),
            f: t.n(null == i.hasSubscribed ? "noSub" : ""),
            g: t.n(i.triggeable ? "hasBrief" : ""),
            h: "tab-".concat(o.current),
            i: i.isSticky && null != i.hasSubscribed,
          },
          i.isSticky && null != i.hasSubscribed
            ? {
                j: t.o(s.subscribe, 4467),
                k: t.p({ "has-subscribed": i.hasSubscribed }),
                l: t.n(i.afterReport ? "after" : ""),
              }
            : i.triggeable
            ? t.e(
                {
                  n: i.allFold,
                  o: t.o(function () {
                    return s.triggerFold && s.triggerFold.apply(s, arguments);
                  }, 4468),
                  p: !i.allFold,
                  q: t.o(function () {
                    return s.triggerFold && s.triggerFold.apply(s, arguments);
                  }, 4469),
                  r: t.n(i.allFold ? "active" : ""),
                  s: t.o(function () {
                    return s.triggerFold && s.triggerFold.apply(s, arguments);
                  }, 4470),
                  t: i.isShowBriefTips,
                },
                (i.isShowBriefTips, {})
              )
            : {},
          { m: i.triggeable }
        );
      },
    ],
    ["__scopeId", "data-v-c7737244"],
  ]
);
wx.createComponent(e);
