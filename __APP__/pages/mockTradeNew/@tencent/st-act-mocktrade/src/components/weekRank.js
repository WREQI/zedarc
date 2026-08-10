var r = require("../cp-util/navigator/index.js");
require("../pages/home/index.js");
var n = require("../../../../../../common/vendor.js"),
  e = require("../utils/tool.js"),
  t = {
    components: {
      rankList: function () {
        return "./rankList.js";
      },
    },
    props: {
      rankList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      urank: { type: Object, default: function () {} },
      showDialog: { type: Boolean, default: !1 },
      isLogin: { type: Boolean, default: !1 },
      rankHome: { type: Object, default: function () {} },
    },
    setup: function (t, a) {
      a.emit;
      return {
        onePixel: n.ref(!0),
        marginBottom: n.ref("0"),
        goRank: function () {
          n.StockBridge.report("trade.mocktrade.asset.rank.click"),
            "mpweapp" === n.ShellTypeEnum.SHY
              ? r.push("qqstock://com.tencent.shy.mock_trade/mockrank", "shy", {
                  showNav: !0,
                  title: "模拟炒股",
                })
              : r.push("mockrank", "hippy", { showNav: !0, title: "模拟炒股" });
        },
        substrPointDate: function (r) {
          if (!r) return "";
          if (r) {
            var n = r;
            return "".concat(n.substr(4, 2), ".").concat(n.substr(6, 2));
          }
        },
        cutString: function (r) {
          return e.cutStr(r, 6);
        },
      };
    },
  };
Array || n.resolveComponent("rank-list")();
var a = n._export_sfc(t, [
  [
    "render",
    function (r, e, t, a, o, u) {
      return n.e(
        { a: t.rankHome && "2" != t.rankHome.status },
        t.rankHome && "2" != t.rankHome.status
          ? {
              b: n.t(a.substrPointDate(t.rankHome.date_begin)),
              c: n.t(a.substrPointDate(t.rankHome.date_end)),
              d: a.marginBottom,
            }
          : {},
        {
          e: n.o(function () {
            return a.goRank && a.goRank.apply(a, arguments);
          }, 4548),
          f: a.onePixel,
          g: t.urank,
        },
        t.urank
          ? n.e(
              { h: "-1" != t.urank.rank && "--" != t.urank.rank },
              "-1" != t.urank.rank && "--" != t.urank.rank
                ? { i: n.t(t.urank.rank) }
                : {},
              {
                j: t.urank.headimgurl
                  ? t.urank.headimgurl
                  : "https://wzq.gtimg.com/resources/mocktrade/default_avatar.png",
                k: t.urank.nickname,
              },
              t.urank.nickname ? { l: n.t(a.cutString(t.urank.nickname)) } : {},
              { m: "-1" != t.urank.rank && "--" != t.urank.rank },
              "-1" != t.urank.rank && "--" != t.urank.rank
                ? n.e(
                    {
                      n: n.t(
                        "-1" == t.urank.score || "--" == t.urank.score
                          ? "--"
                          : (t.urank.score / 1e4).toFixed(2)
                      ),
                      o: n.n(t.urank.score >= 0 ? "red" : "green"),
                      p: "-1" != t.urank.score && "--" != t.urank.score,
                    },
                    "-1" != t.urank.score && "--" != t.urank.score
                      ? { q: n.n(t.urank.score >= 0 ? "red" : "green") }
                      : {}
                  )
                : {
                    r: n.t(
                      1 == +t.urank.reset
                        ? "重置账户后次周才可上榜"
                        : "本周访问且有过持仓才可上榜"
                    ),
                  },
              {
                s: a.onePixel,
                t: n.p({
                  data: t.rankList,
                  showIcon: "true",
                  order: 0,
                  emptyText: "当前暂无榜单",
                }),
                v: t.rankList.length ? "" : 1,
              }
            )
          : {},
        { w: t.showDialog || !t.isLogin ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-89a9ec41"],
]);
wx.createComponent(a);
