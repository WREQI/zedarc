var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("api/index.js"),
  r = require("utils/const.js"),
  a = require("../../../../common/vendor.js"),
  n = {
    inject: ["hqBridge"],
    props: ["symbol", "skin"],
    components: {
      NoData: function () {
        return "./components/NoData.js";
      },
    },
    data: function () {
      return { error: "", data: {} };
    },
    created: function () {
      this.getData();
    },
    methods: {
      retryTab: function () {
        this.$emit("refreshTab"), (this.error = ""), this.getData();
      },
      getData: function () {
        return (
          (a = this),
          null,
          (n = t().mark(function a() {
            var n,
              o = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        e
                          .getDebtData(this.hqBridge, this.symbol)
                          .catch(function (t) {
                            o.$nextTick(function () {
                              o.$emit("loaded");
                            }),
                              (o.error = r.COMMON_PAGE_STATUS.ERROR);
                          })
                      );
                    case 3:
                      (n = t.sent),
                        (this.data = n.data[this.symbol]),
                        this.$emit("loaded"),
                        (t.next = 10);
                      break;
                    case 7:
                      (t.prev = 7), (t.t0 = t.catch(0)), this.$emit("loaded");
                    case 10:
                    case "end":
                      return t.stop();
                  }
              },
              a,
              this,
              [[0, 7]]
            );
          })),
          new Promise(function (t, e) {
            var r = function (t) {
                try {
                  i(n.next(t));
                } catch (t) {
                  e(t);
                }
              },
              o = function (t) {
                try {
                  i(n.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              i = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(r, o);
              };
            i((n = n.apply(a, null)).next());
          })
        );
        var a, n;
      },
    },
  };
Array || (a.resolveComponent("NoData") + a.resolveComponent("st-status"))();
var o = a._export_sfc(n, [
  [
    "render",
    function (t, e, r, n, o, i) {
      return a.e(
        { a: o.data && o.data.gpdm },
        o.data && o.data.gpdm
          ? {
              b: a.t(o.data.gpdm),
              c: a.t(o.data.zqjc),
              d: a.t(o.data.zqqc),
              e: a.t(o.data.jysc),
              f: a.t(o.data.zqlb),
              g: a.t(o.data.time_limit),
            }
          : {},
        { h: !o.data && !o.error },
        (o.data || o.error, {}),
        { i: o.error },
        o.error
          ? {
              j: a.o(function (t) {
                return i.retryTab();
              }, 1925),
              k: a.p({ type: o.error }),
            }
          : {},
        { l: "black" === r.skin ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-e6a97050"],
]);
wx.createComponent(o);
