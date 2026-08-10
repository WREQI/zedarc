var t = require("../../../../../../common/vendor.js"),
  r = require("../../store/useStocksStore.js"),
  e = {
    name: "CaptionItem",
    props: {
      sortCaptions: {
        type: Object,
        default: function () {
          return {};
        },
      },
      index: { type: String, default: "" },
      groupId: { type: String, default: "" },
    },
    emits: ["sort"],
    setup: function (e, o) {
      var n = o.emit,
        s = t.computed(function () {
          var t;
          return (null == (t = e.sortCaptions) ? void 0 : t.order) || 0;
        }),
        a = t.computed(function () {
          return 1 === s.value;
        }),
        i = t.computed(function () {
          return -1 === s.value;
        }),
        u = t.computed(function () {
          return (e.sortCaptions.orderBy && 0 !== s.value) || !1;
        }),
        c = r.useStocksStore(),
        d = t.computed(function () {
          var t = c.groups,
            r = c.rateConfig,
            o = (
              (null == t
                ? void 0
                : t.find(function (t) {
                    return t.id === e.groupId;
                  })) || {}
            ).hasMultMarket,
            n = r && !!Object.keys(r).length;
          return o && n;
        });
      return {
        order: s,
        asc: a,
        desc: i,
        activated: u,
        switchOrder: function () {
          n("sort");
        },
        isH5Pro: !1,
        isMPPro: !0,
        hasMultMarket: d,
      };
    },
  },
  o = t._export_sfc(e, [
    [
      "render",
      function (r, e, o, n, s, a) {
        return t.e(
          {
            a:
              n.activated &&
              n.hasMultMarket &&
              "zsz" === o.sortCaptions.orderBy,
          },
          (n.activated && n.hasMultMarket && o.sortCaptions.orderBy, {}),
          {
            b: t.t(o.sortCaptions.text),
            c: t.n(n.activated ? "activated" : ""),
            d: o.sortCaptions.orderBy || o.sortCaptions.isOrderBtnShow,
          },
          o.sortCaptions.orderBy || o.sortCaptions.isOrderBtnShow
            ? { e: n.asc ? 1 : "", f: n.desc ? 1 : "" }
            : {},
          {
            g: t.n("caption-".concat(o.index)),
            h: t.n({
              sortable: o.sortCaptions.orderBy,
              "h5-pro": n.isH5Pro,
              "mp-pro": n.isMPPro,
            }),
            i: t.o(function () {
              return n.switchOrder && n.switchOrder.apply(n, arguments);
            }, 4229),
          }
        );
      },
    ],
    ["__scopeId", "data-v-1273c8a0"],
  ]);
wx.createComponent(o);
