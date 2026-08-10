var e,
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../@babel/runtime/helpers/defineProperty"),
  a = require("../../@babel/runtime/helpers/slicedToArray");
require("../../app.js");
var o = require("../../common/vendor.js"),
  u = require("../../stores/app/useMode.js"),
  i = require("../../stores/user/useUserinfo.js"),
  c = require("../../cgi/userproperty.js"),
  l = require("../../utils/getPlatform.js"),
  s = require("../../config/key.js"),
  f = require("../../common/utils/colorHelper.js"),
  p = require("../../filters/money.js"),
  v = require("../../filters/postfix.js"),
  d = require("../../service/stat/mp-weixin.js"),
  m = require("../../mixin/platforms/index.js");
function h() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
    n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
    o = [];
  return (
    isNaN(+e) ||
      "" === e ||
      (r.forEach(function (r) {
        var t = r.split(":"),
          n = a(t, 2),
          u = n[0],
          i = n[1];
        Math.abs(+e) > u && i && o.push("fs-".concat(i));
      }),
      !n && e >= t && o.push("no-line-height")),
    o.join(" ")
  );
}
var y = "2",
  g =
    (n((e = {}), "1", "trade.currencysetting.hkd_cny_click"),
    n(e, y, "trade.currencysetting.hkd_click"),
    e),
  k = o.defineComponent({
    name: "CurrencySetting",
    mixins: [m.pluginMixins],
    setup: function () {
      var e = o.getCurrentInstance().proxy,
        n = u.useModeStore(),
        a = i.useUserinfoStore(),
        m = o.computed(function () {
          return n.simpleMode;
        }),
        k = o.ref("1"),
        C = o.ref("--"),
        _ = o.ref("--"),
        x = o.ref("--"),
        P = o.ref("--"),
        b = o.ref("--"),
        q = o.ref("--"),
        j = o.ref("--"),
        w = o.ref("--"),
        S = o.ref("--"),
        U = o.computed(function () {
          return p.formatNoUnit(w.value, !0, 2);
        }),
        E = o.computed(function () {
          return p.formatNoUnit(S.value, !0, 2);
        }),
        F = function (e) {
          return String(e).replace(/[,%+]/g, "");
        },
        M = o.computed(function () {
          return f.redOrGreen(F(w.value));
        }),
        T = o.computed(function () {
          return f.redOrGreen(F(S.value));
        }),
        N = o.computed(function () {
          return h(C.value.length, ["5:28", "6:24"], 6, !1);
        }),
        V = o.computed(function () {
          return h(x.value, ["100:28", "1000:24"]);
        }),
        D = o.computed(function () {
          return h(F(w.value), ["10000:28", "100000:24", "10000000:22"]);
        }),
        I = o.computed(function () {
          return h(F(S.value), ["10000:28", "100000:24", "10000000:22"]);
        }),
        R = o.computed(function () {
          return k.value === y ? b.value : P.value;
        }),
        O = (function () {
          var e = t(
            r().mark(function e(t) {
              var n;
              return r().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          c.UserPropertyCgi.setUserProperty({
                            scene: "comm",
                            biz: "1",
                            val: t,
                          })
                        );
                      case 3:
                        if (
                          (a.updateUserInfoValue({
                            key: "cur_switch",
                            value: t,
                          }),
                          (n = l.getPlatform()),
                          n.isZxg)
                        )
                          try {
                            o.index.setStorageSync(s.APP_CUR_SWITCH_SYNC, t);
                          } catch (e) {}
                        e.next = 10;
                        break;
                      case 8:
                        (e.prev = 8), (e.t0 = e.catch(0));
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (r) {
            return e.apply(this, arguments);
          };
        })(),
        G = [
          { value: "1", label: "港元/人民币" },
          { value: y, label: "港元/港元" },
        ],
        $ = o.computed(function () {
          return k.value === y ? "$" : "";
        }),
        z = o.computed(function () {
          return k.value === y
            ? "现价和成本均以港元展示（符号为$）"
            : "现价以港元展示（符号为$），成本以人民币展示";
        });
      return (
        o.onMounted(function () {
          var n,
            o = (null == (n = e.$route) ? void 0 : n.query) || {},
            u = function (e) {
              if (!e) return "";
              try {
                return decodeURIComponent(String(e).trim());
              } catch (r) {
                return String(e).trim();
              }
            };
          (C.value = u(o.stock_name) || "--"),
            (_.value = u(o.stock_code) || "--"),
            (x.value = u(o.new_price) || "--"),
            (P.value = u(o.hold_cost) || "--"),
            (b.value = u(o.hold_cost_hk) || "--"),
            (w.value = u(o.earn_val_day) || "--"),
            (S.value = u(o.earn_val) || "--");
          var i = u(o.earn_per_day);
          q.value = i ? v.postfix(p.prefix(i), "%") : "--";
          var c = u(o.earn_per);
          (j.value = c ? v.postfix(p.prefix(c), "%") : "--"),
            t(
              r().mark(function e() {
                var t;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), a.getUserInfo();
                        case 3:
                          (null == (t = e.sent) ? void 0 : t.cur_switch) &&
                            (k.value = t.cur_switch),
                            (e.next = 9);
                          break;
                        case 7:
                          (e.prev = 7), (e.t0 = e.catch(0));
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            )();
        }),
        {
          simpleMode: m,
          selectedValue: k,
          currencyOptions: G,
          costPrefix: $,
          tipText: z,
          handleRadioChange: function (e) {
            var r = e.detail.value;
            r && r !== k.value && ((k.value = r), O(r));
          },
          handleSelect: function (e) {
            e !== k.value && ((k.value = e), O(e));
            var r = g[e];
            r && d.stat.click(r);
          },
          stockName: C,
          stockCode: _,
          stockPrice: x,
          stockCost: R,
          stockEarnValDay: U,
          stockEarnPerDay: q,
          stockEarnVal: E,
          stockEarnPer: j,
          todayProfitCls: M,
          totalProfitCls: T,
          nameFontCls: N,
          priceFontCls: V,
          earnDayFontCls: D,
          earnTotalFontCls: I,
        }
      );
    },
  });
Array || o.resolveComponent("GlobalWrap")(), Math;
var C = o._export_sfc(k, [
  [
    "render",
    function (e, r, t, n, a, u) {
      return {
        a: e.rootFontSize,
        b: o.f(e.currencyOptions, function (r, t, n) {
          return {
            a: r.value,
            b: e.selectedValue === r.value,
            c: o.t(r.label),
            d: r.value,
            e: o.o(function (t) {
              return e.handleSelect(r.value);
            }, r.value),
          };
        }),
        c: e.simpleMode ? "#e63535" : "#3077ec",
        d: o.n({ "cs__options--inline": 2 === e.currencyOptions.length }),
        e: o.o(function () {
          return e.handleRadioChange && e.handleRadioChange.apply(e, arguments);
        }),
        f: o.t(e.stockName),
        g: o.n(e.nameFontCls),
        h: o.t(e.stockCode),
        i: o.t(e.stockPrice),
        j: o.n(e.priceFontCls),
        k: o.t(e.costPrefix),
        l: o.t(e.stockCost),
        m: o.t(e.stockEarnValDay),
        n: o.n(e.todayProfitCls),
        o: o.n(e.earnDayFontCls),
        p: o.t(e.stockEarnPerDay),
        q: o.n(e.todayProfitCls),
        r: o.t(e.stockEarnVal),
        s: o.n(e.totalProfitCls),
        t: o.n(e.earnTotalFontCls),
        v: o.t(e.stockEarnPer),
        w: o.n(e.totalProfitCls),
        x: o.t(e.tipText),
        y: o.sr("#global-wrap", "9fba5541-0"),
        z: o.p({
          id: "global-wrap",
          filePath: "/asset/currency-setting",
          defaultTheme: "",
        }),
      };
    },
  ],
  ["__scopeId", "data-v-9fba5541"],
]);
wx.createPage(C);
