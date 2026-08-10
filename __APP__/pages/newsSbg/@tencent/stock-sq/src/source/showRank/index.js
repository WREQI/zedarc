var t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  n = function (t, r, o) {
    return r in t
      ? e(t, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[r] = o);
  },
  i = function (e, i) {
    for (var p in i || (i = {})) o.call(i, p) && n(e, p, i[p]);
    if (r) {
      var c,
        s = t(r(i));
      try {
        for (s.s(); !(c = s.n()).done; ) {
          p = c.value;
          a.call(i, p) && n(e, p, i[p]);
        }
      } catch (t) {
        s.e(t);
      } finally {
        s.f();
      }
    }
    return e;
  },
  p = require("../../../../stock-community-base/utils/api/index.js"),
  c = require("../../../../stock-community-base/utils/constant.js"),
  s = require("../../../../../../../common/vendor.js"),
  u = p.api.goIndex,
  l = {
    name: "showRank",
    data: function () {
      return {};
    },
    props: {
      hotRank: { type: Number, default: 0 },
      pageType: { type: String, default: "" },
      pageId: { type: String, default: "" },
      stockName: { type: String, default: "" },
      topic: { type: String, default: "" },
    },
    created: function () {
      this.$emit(
        "commentReport",
        "".concat(c.prefix[this.pageType], "_rank_label_baoguang")
      );
    },
    methods: {
      goHot: function () {
        this.$emit(
          "commentReport",
          "".concat(c.prefix[this.pageType], "_rank_label_tap")
        );
        var t = { rank: this.hotRank };
        (t = this.topic
          ? i({ topicId: this.pageId, topic: this.topic }, t)
          : i({ symbol: this.pageId, name: this.stockName }, t)),
          u(t, this);
      },
    },
  },
  m = s._export_sfc(l, [
    [
      "render",
      function (t, e, r, o, a, n) {
        return {
          a: s.t(r.hotRank),
          b: s.o(function () {
            return n.goHot && n.goHot.apply(n, arguments);
          }, 4929),
        };
      },
    ],
    ["__scopeId", "data-v-822358d1"],
  ]);
wx.createComponent(m);
