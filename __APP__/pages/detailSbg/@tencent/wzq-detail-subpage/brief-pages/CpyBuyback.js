var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("api/index.js"),
  n = require("../../../../../common/vendor.js"),
  i = {
    components: {
      NoData: function () {
        return "./components/NoData.js";
      },
    },
    inject: ["hqBridge"],
    props: ["code", "market"],
    data: function () {
      return { hgList: [], firstLoaded: !0, isLoading: !0 };
    },
    created: function () {
      this.getData();
    },
    methods: {
      getData: function () {
        return (
          (n = this),
          null,
          (i = t().mark(function n() {
            var i;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        e.getHKGshg(this.hqBridge, "hk".concat(this.code))
                      );
                    case 3:
                      (i = t.sent),
                        (this.isLoading = !1),
                        i &&
                          0 == +i.code &&
                          i.data &&
                          (this.hgList = i.data.huigouComplete || []),
                        this.firstLoaded || (this.firstLoaded = !0),
                        (t.next = 9);
                      break;
                    case 7:
                      (t.prev = 7), (t.t0 = t.catch(0));
                    case 9:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this,
              [[0, 7]]
            );
          })),
          new Promise(function (t, e) {
            var r = function (t) {
                try {
                  a(i.next(t));
                } catch (t) {
                  e(t);
                }
              },
              s = function (t) {
                try {
                  a(i.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              a = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(r, s);
              };
            a((i = i.apply(n, null)).next());
          })
        );
        var n, i;
      },
    },
  };
Array || (n.resolveComponent("st-loading") + n.resolveComponent("NoData"))();
var r = n._export_sfc(i, [
  [
    "render",
    function (t, e, i, r, s, a) {
      return n.e(
        { a: s.isLoading },
        s.isLoading ? { b: n.p({ type: "spinner" }) } : {},
        { c: !s.isLoading && s.hgList && s.hgList.length > 0 },
        (!s.isLoading && s.hgList && s.hgList.length, {}),
        { d: !s.isLoading && s.hgList && s.hgList.length > 0 },
        !s.isLoading && s.hgList && s.hgList.length > 0
          ? {
              e: n.f(s.hgList, function (t, e, i) {
                return {
                  a: n.t(t.REP_DATE),
                  b: n.t(t.REDEMPTION_QUANTITY),
                  c: n.t(t.REDEEN_AVG_PRICE),
                  d: e,
                };
              }),
            }
          : {},
        {
          f:
            !s.isLoading &&
            s.firstLoaded &&
            (!s.hgList || 0 === s.hgList.length),
        },
        (s.isLoading || !s.firstLoaded || (s.hgList && s.hgList.length), {})
      );
    },
  ],
  ["__scopeId", "data-v-05fcfa4d"],
]);
wx.createComponent(r);
