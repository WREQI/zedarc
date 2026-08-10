var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  a = function (t, o, r) {
    return o in t
      ? e(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[o] = r);
  },
  c = function (e, c) {
    for (var u in c || (c = {})) r.call(c, u) && a(e, u, c[u]);
    if (o) {
      var i,
        p = t(o(c));
      try {
        for (p.s(); !(i = p.n()).done; ) {
          u = i.value;
          n.call(c, u) && a(e, u, c[u]);
        }
      } catch (t) {
        p.e(t);
      } finally {
        p.f();
      }
    }
    return e;
  },
  u = require("../../../../../common/vendor.js"),
  i = "mp" === u.StockBridge.ENV,
  p = {
    inject: ["theme"],
    props: {
      hotStock: {
        type: Array,
        default: function () {
          return [];
        },
      },
      groupId: { type: String, default: "" },
    },
    computed: {
      rows: function () {
        var t = [0, 1];
        return i ? t : [].concat(t, [2]);
      },
      rankText: function () {
        return "lite" === this.theme ? "微信热股等更多榜单" : "更多热门榜单";
      },
    },
    methods: {
      jumpHotPage: function () {
        if (
          (u.StockBridge.report("base.search.card_version_list_rg_click_more"),
          u.StockBridge.ENV === u.EnvTypeEnum.WZQ)
        )
          u.StockBridge.routeTo({ path: "/hot", query: { tab: 0 } });
        else {
          u.StockBridge.routeTo({
            url: "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(
                "https://wzq.tenpay.com/mp/v2/index.html#/hot?tab=0"
              )
            ),
          });
        }
      },
      jumpToDetail: function (t, e) {
        var o,
          r = c(
            c({}, this.hotStock[e]),
            null == (o = null == t ? void 0 : t.currentTarget)
              ? void 0
              : o.dataset
          );
        this.$emit("jumpToDetail", r, e, "hotSearch");
      },
    },
  },
  l = u._export_sfc(p, [
    [
      "render",
      function (t, e, o, r, n, a) {
        return {
          a: u.t(a.rankText),
          b: u.o(function () {
            return a.jumpHotPage && a.jumpHotPage.apply(a, arguments);
          }, 4107),
          c: u.f(a.rows, function (t, e, r) {
            return {
              a: u.f([0, 1, 2], function (e, r, n) {
                return {
                  a: u.t(o.hotStock[3 * t + e].name),
                  b: u.t(o.hotStock[3 * t + e].showScode),
                  c: u.t(o.hotStock[3 * t + e].showMarket),
                  d: e,
                  e: o.hotStock[3 * t + e].code,
                  f: o.hotStock[3 * t + e].market,
                  g: o.hotStock[3 * t + e].name,
                  h: u.o(
                    function (o) {
                      return a.jumpToDetail(o, 3 * t + e);
                    },
                    4108,
                    e
                  ),
                };
              }),
              b: t,
            };
          }),
          d: u.n(a.theme),
        };
      },
    ],
    ["__scopeId", "data-v-dafc0a98"],
  ]);
wx.createComponent(l);
