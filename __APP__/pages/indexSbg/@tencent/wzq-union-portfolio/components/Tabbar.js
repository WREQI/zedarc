var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../common/vendor.js"),
  n = require("../utils/util.js"),
  o = require("../store/useStocksStore.js"),
  r = require("../../stock-mini-mins/api/StockMiniChartApiV2.js"),
  i = {
    props: ["pageShow", "basketRedPoint"],
    emits: ["reportQianjiGo", "clickTab"],
    setup: function (i, c) {
      var a = c.emit,
        u = t.StockBridge.ENV === t.EnvTypeEnum.MP,
        s = t.getCurrentInstance().proxy || t.getCurrentInstance(),
        d = null,
        f = !!t.StockBridge.getStorage("basket_guide_animation"),
        l = n.STOCKBASKET_GROUPID,
        b = o.useStocksStore(),
        v = t.ref(0),
        p = t.ref(!0),
        g = t.computed(function () {
          return b.groups || [];
        }),
        S = t.computed(function () {
          return b.curTabIndex || 0;
        }),
        h = r.useViewStore(),
        k = t.computed(function () {
          return b.curGroupId;
        });
      t.watch(
        function () {
          return S.value;
        },
        function (e) {
          P(e);
        }
      ),
        t.watch(
          function () {
            return i.pageShow;
          },
          function (e) {
            T(e);
          }
        ),
        t.watch(
          function () {
            return i.basketRedPoint;
          },
          function (e) {
            e && T(i.pageShow);
          }
        );
      var P = function (n) {
          var o = n > 0 ? n - 1 : n,
            r = n < g.value.length - 1 ? n + 1 : g.value.length - 1;
          if (u)
            t.wx$1
              .createSelectorQuery()
              .in(s)
              .select("#tabbar-scroll-view")
              .boundingClientRect()
              .select("#tab-".concat(o))
              .boundingClientRect()
              .select("#tab-".concat(r))
              .boundingClientRect()
              .exec(function (t) {
                var n = e(t, 3),
                  r = n[0],
                  i = n[1],
                  c = n[2],
                  a = (i && i.left) || 0;
                (((c && c.right) || 0) >= ((r && r.width) || 0) || a <= 0) &&
                  (v.value = o);
              });
          else {
            var i = s.$refs["tab-".concat(o)],
              c = s.$refs["tab-".concat(r)],
              a = s.$refs["tabbar-scroll-view"];
            if (i && i[0] && c && c[0] && a && a.$el) {
              var d = i[0].offsetLeft;
              (c[0].offsetLeft + c[0].offsetWidth >= a.$el.offsetWidth ||
                d <= 0) &&
                (v.value = o);
            }
          }
        },
        T = function (o) {
          var r = g.value.findIndex(function (e) {
            return e.id === n.STOCKBASKET_GROUPID;
          });
          r < 0 ||
            (o && i.basketRedPoint
              ? (d && clearTimeout(d),
                (d = setTimeout(function () {
                  if (u)
                    t.wx$1
                      .createSelectorQuery()
                      .in(s)
                      .select("#tabbar-scroll-view")
                      .boundingClientRect()
                      .select("#tab-".concat(r))
                      .boundingClientRect()
                      .exec(function (t) {
                        var o = e(t, 2),
                          r = o[0],
                          i = o[1];
                        if (r && i) {
                          var c = r.left + r.width;
                          i.left + i.width > c &&
                            !f &&
                            w(n.STOCKBASKET_GROUPID, 1500);
                        }
                      });
                  else {
                    var o = s.$refs["tab-".concat(r)],
                      i = s.$refs["tabbar-scroll-view"];
                    o &&
                      o[0] &&
                      i &&
                      i.$el &&
                      o[0].offsetLeft + o[0].offsetWidth >=
                        i.$el.offsetLeft + i.$el.offsetWidth &&
                      !f &&
                      w(n.STOCKBASKET_GROUPID, 1500);
                  }
                  I(r);
                }, 2e3)))
              : d && clearTimeout(d));
        },
        w = function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1e3,
            o = g.value.findIndex(function (t) {
              return +t.id == +e;
            });
          f ||
            o < 0 ||
            (P(o),
            setTimeout(function () {
              P(S.value),
                (f = !0),
                t.StockBridge.getStorage("basket_guide_animation", f);
            }, n));
        },
        I = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "show",
            o = g.value[e] || {},
            r = g.value.findIndex(function (e) {
              return e.id === n.STOCKBASKET_GROUPID;
            });
          if (
            p.value &&
            !(r < 0) &&
            o.id === n.STOCKBASKET_GROUPID &&
            ("show" != t && (p.value = !1),
            i.basketRedPoint &&
              Array.isArray(i.basketRedPoint.ad_list) &&
              i.basketRedPoint.ad_list.length)
          ) {
            var c = i.basketRedPoint.ad_list[0];
            a("reportQianjiGo", void 0, c.dp_ctx, t);
          }
        };
      return (
        t.onBeforeMount(function () {
          d && clearTimeout(d);
        }),
        {
          groups: g,
          preTabIndex: v,
          curGroupIndex: S,
          showRedPoint: p,
          afterSwitchTab: function (e, t) {
            b.setCurGroup(e, t),
              h.setLongPressIndexConf(k.value, -1),
              a("clickTab", b.curGroupId),
              I(t, "click");
          },
          isH5Pro: !1,
          isMPPro: !0,
          stockBasketId: l,
        }
      );
    },
  },
  c = t._export_sfc(i, [
    [
      "render",
      function (e, n, o, r, i, c) {
        return {
          a: t.f(r.groups, function (e, n, i) {
            return t.e(
              {
                a: t.t(e.name),
                b:
                  o.basketRedPoint && e.id == r.stockBasketId && r.showRedPoint,
              },
              (o.basketRedPoint && e.id == r.stockBasketId && r.showRedPoint,
              {}),
              {
                c: "tab-".concat(n),
                d: "tab-".concat(n),
                e: "".concat(e.id, "-").concat(n),
                f: t.n({ selected: r.curGroupIndex === n }),
                g: t.o(
                  function (t) {
                    return r.afterSwitchTab(e, n);
                  },
                  2636,
                  "".concat(e.id, "-").concat(n)
                ),
              }
            );
          }),
          b: t.n({ "h5-pro": r.isH5Pro, "mp-pro": r.isMPPro }),
          c: "tab-".concat(r.preTabIndex),
        };
      },
    ],
    ["__scopeId", "data-v-e689352c"],
  ]);
wx.createComponent(c);
