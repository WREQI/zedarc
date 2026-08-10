var e = require("../utils/tool.js"),
  t = require("../../../../../../common/vendor.js"),
  r = {
    components: {
      emptyTips: function () {
        return "./emptyTips.js";
      },
    },
    props: {
      data: {
        type: Array,
        default: function () {
          return [];
        },
      },
      emptyText: { type: String, default: "" },
      order: { type: Number, default: 0 },
      listType: { type: String, default: "" },
    },
    setup: function () {
      return {
        onePixel: t.ref(!0),
        cutString: function (t) {
          return e.cutStr(t, 6, 1);
        },
      };
    },
  };
Array || t.resolveComponent("empty-tips")();
var n = t._export_sfc(r, [
  [
    "render",
    function (e, r, n, a, o, i) {
      return t.e(
        { a: n.data && n.data.length > 0 },
        n.data && n.data.length > 0
          ? {
              b: t.t("week" == n.listType ? "本周收益率" : "累计收益"),
              c: t.f(n.data, function (e, r, o) {
                return t.e(
                  {
                    a: t.t(n.order + r + 1),
                    b: e.headimgurl
                      ? e.headimgurl
                      : "https://wzq.gtimg.com/resources/mocktrade/default_avatar.png",
                    c: e.nickname,
                  },
                  e.nickname ? { d: t.t(a.cutString(e.nickname)) } : {},
                  {
                    e: t.t((e.score / 1e4).toFixed(2)),
                    f: t.n(e.score > 0 ? "red" : "green"),
                    g: t.n(e.score > 0 ? "red" : "green"),
                    h: t.n(r + 1 == n.data.length ? "last" : ""),
                    i: r,
                  }
                );
              }),
              d: a.onePixel,
            }
          : { e: t.p({ text: n.emptyText }) }
      );
    },
  ],
  ["__scopeId", "data-v-e487da62"],
]);
wx.createComponent(n);
