require("../../../app.js");
var t = require("../../../utils/getPlatform.js"),
  e = require("../../../model/common/useBack.js"),
  s = require("../../../model/debt/useDebt.js"),
  n = require("../../../mixin/platforms/index.js"),
  o = require("../../../common/vendor.js"),
  r = {
    name: "TradeDebtResult",
    components: {
      CommonResult: function () {
        return "../../../components/CommonResult/CommonResult.js";
      },
    },
    mixins: [n.pluginMixins],
    data: function () {
      return {
        retcode: null,
        status: "fail",
        isWeixin: t.getPlatform().isWeixin,
      };
    },
    mounted: function () {
      var t = this.$route.query.retcode,
        e = void 0 === t ? "" : t;
      (this.retcode = String(e)),
        (this.status = "0" === this.retcode ? "succ" : "fail");
    },
    methods: {
      handleClick: function () {
        var t = this;
        if ("succ" === this.status) {
          var e = getCurrentPages();
          if ((null == e ? void 0 : e.length) > 1) {
            var n = e.findIndex(function (t) {
              return !!t && t.route.indexOf("debt/index") > -1;
            });
            if (n >= 0)
              return (
                (e[n].options.tab = s.TAB_TYPE[1]),
                void setTimeout(function () {
                  t.$router.back({ delta: e.length - n - 1 });
                }, 500)
              );
          }
          this.$router.push({ name: "Debt", query: { tab: "history" } });
        } else this.$router.back();
      },
      backAsset: function () {
        (0, e.usePersonal().toAsset)();
      },
    },
  };
Array ||
  (o.resolveComponent("CommonResult") + o.resolveComponent("GlobalWrap"))(),
  Math ||
    (
      function () {
        return "../../../components/CommonResult/CommonResult.js";
      } +
      function () {
        return "../../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var u = o._export_sfc(r, [
  [
    "render",
    function (t, e, s, n, r, u) {
      return o.e(
        { a: t.rootFontSize, b: "succ" === r.status },
        (r.status, {}),
        { c: "succ" === r.status },
        "succ" === r.status ? { d: o.t(r.isWeixin ? "通过微信" : "") } : {},
        {
          e: o.t("succ" === r.status ? "查看下单记录" : "重新下单"),
          f: o.o(function () {
            return u.handleClick && u.handleClick.apply(u, arguments);
          }),
          g: o.o(function () {
            return u.backAsset && u.backAsset.apply(u, arguments);
          }),
          h: o.p({ status: r.status }),
          i: null !== r.retcode,
          j: o.sr("#global-wrap", "13ed0f6b-0"),
          k: o.p({
            id: "global-wrap",
            filePath: "/trade/debt/result",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(u);
