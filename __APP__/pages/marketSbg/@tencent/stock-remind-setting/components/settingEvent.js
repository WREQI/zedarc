require("../../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../../@babel/runtime/helpers/Objectvalues");
var e = require("../../../../../common/vendor.js"),
  t = require("../mixins/config.js"),
  n = require("../../stock-hq-data/index.js"),
  a = {
    options: { styleIsolation: "shared" },
    props: {
      smartData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      theme: { type: String, default: "lite" },
      symbol: { type: String, default: "" },
      isETF: { type: Boolean, default: !1 },
      showLargeOrder: { type: Boolean, default: !1 },
      isIndex: { type: Boolean, default: !1 },
      isHS: { type: Boolean, default: !1 },
      showFundNav: { type: Boolean, default: !1 },
      showEventRemind: { type: Boolean, default: !1 },
    },
    setup: function (a, o) {
      var r = o.emit,
        i = e.ref(-1),
        u = e.ref(!1),
        l = function (e) {
          var n = !e || 0 === Object.values(e).length;
          return t.SMART_REMIND_TEMPLATE.filter(function (t) {
            if (!n && 2 === e[t.key]) return !1;
            switch (t.key) {
              case "new_high_low":
              default:
                return !0;
              case "limit_up_down":
                return a.isHS && !a.isIndex;
              case "big_event":
                return !a.isIndex && !a.isETF;
              case "large_order":
                return a.showLargeOrder;
              case "fund_nav_update":
                return a.showFundNav;
            }
          }).map(function (t) {
            return {
              text: (a.isETF && t.etfText) || t.text,
              open: n ? 0 : e[t.key],
              name: t.name,
              key: t.name,
            };
          });
        },
        d = e.ref(l(a.smartData));
      e.watch(
        function () {
          return a.smartData;
        },
        function (e) {
          e && ((d.value = l(e)), r("updateSmartData", d.value));
        },
        { immediate: !0, deep: !0 }
      ),
        r("updateSmartData", d.value),
        e.computed(function () {
          var e = n.utils.splitSymbol(a.symbol).market;
          return n.utils.isHKMarket(e);
        });
      var s = e.computed(function () {
          var e,
            t =
              null == (e = null == p ? void 0 : p.value) ? void 0 : e.otherData;
          if (!(null == t ? void 0 : t.length)) return "不提醒";
          var n = t.reduce(
            function (e, t) {
              var n = 1 == +t.open;
              return { selectedCount: e.selectedCount + (n ? 1 : 0) };
            },
            { selectedCount: 0 }
          );
          return 0 === n.selectedCount
            ? "不提醒"
            : n.selectedCount === t.length
            ? "全部提醒"
            : "提醒".concat(n.selectedCount, "项");
        }),
        c = e.computed(function () {
          return "profession" === a.theme
            ? "https://st.gtimg.com/design/d21d268ec0b6f14b915c0cc350e3b72b.png"
            : "https://st.gtimg.com/design/3c877687f7e8a9db26d917af5c569b53.png";
        }),
        p = e.computed(function () {
          var e = [],
            t = [];
          return (
            d.value.forEach(function (n) {
              [0, 1].includes(n.open) &&
                ("fund_nav_update" === n.key ? e.push(n) : t.push(n));
            }),
            { fundNavData: e, otherData: t }
          );
        }),
        m = e.computed(function () {
          var e, t;
          return (
            (null ==
            (t =
              null == (e = null == p ? void 0 : p.value)
                ? void 0
                : e.fundNavData)
              ? void 0
              : t.length) || 0
          );
        }),
        f = function (t, n) {
          d.value[n].open = 1 === d.value[n].open ? 0 : 1;
          var o = 1 === d.value[n].open ? "on" : "off";
          e.StockBridge.report("hq.remindsetting.smart_switch_click", {
            stockid: a.symbol,
            name: t,
            status: o,
          }),
            r("handleRemindClick", t, d.value[n].open);
        };
      return {
        showModal: u,
        remindStatusText: s,
        eventRemindData: d,
        splitRemindData: p,
        initRemindData: l,
        handleRemindClick: f,
        openModal: function () {
          (u.value = !0),
            e.StockBridge.report("hq.remindsetting.smart_title_click", {
              stockid: a.symbol,
            });
        },
        closeModal: function () {
          u.value = !1;
        },
        handleModalItemClick: function (e, t) {
          f(e, t);
        },
        modifyIndex: m,
        flashingIndex: i,
        selectImg: c,
      };
    },
  },
  o = e._export_sfc(a, [
    [
      "render",
      function (t, n, a, o, r, i) {
        return e.e(
          {
            a:
              o.splitRemindData &&
              o.splitRemindData.otherData &&
              o.splitRemindData.otherData.length,
          },
          o.splitRemindData &&
            o.splitRemindData.otherData &&
            o.splitRemindData.otherData.length
            ? {
                b: e.t(o.remindStatusText),
                c: e.o(function () {
                  return o.openModal && o.openModal.apply(o, arguments);
                }, 2556),
                d: e.n(a.theme),
              }
            : {},
          { e: o.showModal },
          o.showModal
            ? {
                f: e.o(function () {
                  return o.closeModal && o.closeModal.apply(o, arguments);
                }, 2557),
                g: e.f(o.splitRemindData.otherData, function (t, n, a) {
                  return e.e(
                    { a: e.t(t.text), b: 1 === t.open },
                    1 === t.open ? { c: o.selectImg } : {},
                    {
                      d: n,
                      e: e.o(
                        function (e) {
                          return o.handleModalItemClick(
                            t.name,
                            o.modifyIndex + n
                          );
                        },
                        2558,
                        n
                      ),
                    }
                  );
                }),
                h: e.o(function () {}, 2559),
                i: e.o(function () {}, 2560),
                j: e.o(function () {
                  return o.closeModal && o.closeModal.apply(o, arguments);
                }, 2561),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-6b894733"],
  ]);
wx.createComponent(o);
