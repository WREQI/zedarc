require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../common/vendor.js"),
  e = {
    name: "MoreSpanItem",
    inject: ["hqBridge"],
    components: {},
    data: function () {
      return { isfold: !1, foldtext: "", env: this.hqBridge.ENV };
    },
    props: {
      label: { type: String, require: !1 },
      value: { type: String, require: !1 },
    },
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    onShow: function () {
      this.foldtext = this.moretext(this.value);
    },
    methods: {
      isShowfold: function (t) {
        return "span-up" === t
          ? this.value.length < 20 || !this.isfold
          : "span-down" === t
          ? !(this.value.length < 20) && this.isfold
          : "button-up" === t
          ? !(this.value.length < 20 || this.isfold)
          : !(this.value.length < 20) && this.isfold;
      },
      moretext: function (t) {
        if (!t) return "--";
        if (t.includes("\n")) {
          var e = t.indexOf("\n"),
            n = t.substring(0, e - 3);
          return n.length > 23
            ? "".concat(n.slice(0, 23), "...")
            : "".concat(n, "...");
        }
        return t.length > 23 ? "".concat(t.slice(0, 23), "...") : t;
      },
      clickView: function () {
        (this.isfold = !this.isfold),
          this.hqBridge.report(
            "hq.dx_newstock_detail.zqh_".concat(
              this.isfold ? "unfold" : "fold",
              "_click"
            )
          );
      },
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, i, o, s, l) {
        return t.e(
          {
            a: t.t(i.label),
            b: t.n("up-span-".concat(s.env)),
            c: l.isShowfold("span-up"),
          },
          l.isShowfold("span-up")
            ? {
                d: t.t(l.moretext(i.value)),
                e: t.o(function () {
                  return l.clickView && l.clickView.apply(l, arguments);
                }, 4559),
              }
            : {},
          { f: l.isShowfold("span-down") },
          l.isShowfold("span-down")
            ? {
                g: t.t(i.value),
                h: t.o(function () {
                  return l.clickView && l.clickView.apply(l, arguments);
                }, 4560),
              }
            : {},
          { i: l.isShowfold("button-up") },
          (l.isShowfold("button-up"), {}),
          { j: l.isShowfold("button-down") },
          (l.isShowfold("button-down"), {}),
          {
            k: t.n(l.isMp ? "button-text-mp" : ""),
            l: t.o(function () {
              return l.clickView && l.clickView.apply(l, arguments);
            }, 4561),
            m: t.n(s.isfold ? "fold-more-span-container" : ""),
          }
        );
      },
    ],
    ["__scopeId", "data-v-573d91a9"],
  ]);
wx.createComponent(n);
