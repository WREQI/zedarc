var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../common/vendor.js"),
  n = require("../../Index.js"),
  a = {
    components: {
      PlatefundItem: function () {
        return "./platefundItem.js";
      },
    },
    props: {
      fundData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      params: {
        type: Object,
        default: function () {
          return {};
        },
      },
      flucShowMode: { type: String, default: "greenup" },
      range: { type: Number, default: 0 },
    },
    data: function () {
      return {
        timer: null,
        fundflowData: null,
        tabs: [
          { id: "hy2", name: "行业", key: "plate" },
          { id: "gn", name: "概念", key: "concept" },
          { id: "dy", name: "地域", key: "area" },
        ],
        currentTabIndex: 0,
      };
    },
    watch: {
      fundData: {
        handler: function (e) {
          this.fundflowData = e.fundflow;
        },
        deep: !0,
      },
    },
    created: function () {},
    activated: function () {
      this.startGetData();
    },
    deactivated: function () {
      this.timer && clearTimeout(this.timer);
    },
    beforeDestroy: function () {
      this.timer && (clearTimeout(this.timer), (this.timer = null));
    },
    methods: {
      changePage: function (e) {
        var n,
          a = null == (n = null == e ? void 0 : e.detail) ? void 0 : n.current;
        (this.currentTabIndex = a),
          t.StockBridge.report("hq.choose_hq.plate.slide_change");
      },
      startGetData: function () {
        var e = this;
        this.timer && clearTimeout(this.timer),
          (this.timer = setTimeout(function () {
            e.handleRefresh(!0), e.startGetData();
          }, 5e3));
      },
      handleRefresh: function () {
        this.getPlateFund();
      },
      goToDetail: function (e) {
        this.$emit("goToDetail", e);
      },
      goToBarDetail: function (e) {
        this.$emit("goToBarDetail", e);
      },
      getPlateFund: function () {
        return (
          (t = this),
          null,
          (a = e().mark(function t() {
            var a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), n.HqAPI.getHotPlate();
                    case 3:
                      (a = e.sent),
                        (this.fundflowData =
                          (null == a ? void 0 : a.fundflow) || {}),
                        (e.next = 9);
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(0));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[0, 7]]
            );
          })),
          new Promise(function (e, n) {
            var r = function (e) {
                try {
                  o(a.next(e));
                } catch (e) {
                  n(e);
                }
              },
              i = function (e) {
                try {
                  o(a.throw(e));
                } catch (e) {
                  n(e);
                }
              },
              o = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(r, i);
              };
            o((a = a.apply(t, null)).next());
          })
        );
        var t, a;
      },
    },
  };
Array || t.resolveComponent("PlatefundItem")();
var r = t._export_sfc(a, [
  [
    "render",
    function (e, n, a, r, i, o) {
      return t.e(
        { a: i.fundflowData },
        i.fundflowData
          ? {
              b: t.f(i.tabs, function (e, n, r) {
                return {
                  a: t.o(
                    function (t) {
                      return o.goToDetail({ type: e.id });
                    },
                    5173,
                    e.id
                  ),
                  b: t.o(o.goToBarDetail, 5174, e.id),
                  c: "709e2d16-0-" + r,
                  d: t.p({
                    title: e.name,
                    range: a.range,
                    "item-data": i.fundflowData[e.key],
                  }),
                  e: e.id,
                  f: e.id === i.tabs[0].id,
                  g: e.id === i.tabs[i.tabs.length - 1].id,
                };
              }),
              c: i.currentTabIndex,
              d: t.o(function () {
                return o.changePage && o.changePage.apply(o, arguments);
              }, 5175),
              e: t.f(i.tabs, function (e, n, a) {
                return {
                  a: n,
                  b: t.n(i.currentTabIndex === n ? "active" : ""),
                };
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-709e2d16"],
]);
wx.createComponent(r);
