var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, r) {
    return new Promise(function (n, a) {
      var s = function (e) {
          try {
            c(r.next(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          try {
            c(r.throw(e));
          } catch (e) {
            a(e);
          }
        },
        c = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(s, o);
        };
      c((r = r.apply(e, t)).next());
    });
  },
  r = require("../../../../../../common/vendor.js"),
  n = require("../../node-modules/@tencent/st-judge-gray-user/dist/mp-weixin.js"),
  a = {
    components: {
      basketForAI: function () {
        return "../../../../../stockBasket/@tencent/wzq-lite-basket/components/basketForAI.js";
      },
      basketCard: function () {
        return "../../../../../stock-widget/@tencent/stock-widget/cardKits/basketCard.js";
      },
    },
    props: {
      theme: { type: String, default: "" },
      data: {
        type: Object,
        default: function () {
          return {};
        },
      },
      contexObj: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return { grayUserStatus: 0 };
    },
    methods: {
      getOpenid: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (r.StockBridge.ENV !== r.EnvTypeEnum.SHY_NATIVE) {
                      e.next = 4;
                      break;
                    }
                    return (e.next = 3), r.StockBridge.getZxgLoginInfo();
                  case 3:
                    return e.abrupt("return", e.sent.openid);
                  case 4:
                    return (e.next = 6), r.StockBridge.getLoginInfoUnion();
                  case 6:
                    return e.abrupt("return", e.sent.qluin);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        );
      },
    },
    created: function () {
      return t(
        this,
        null,
        e().mark(function t() {
          var r;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), this.getOpenid();
                  case 2:
                    return (
                      (r = e.sent),
                      (e.next = 5),
                      n.judgeGrayUser(r, "0757440938")
                    );
                  case 5:
                    if (!e.sent) {
                      e.next = 9;
                      break;
                    }
                    (e.t0 = 2), (e.next = 10);
                    break;
                  case 9:
                    e.t0 = 1;
                  case 10:
                    this.grayUserStatus = e.t0;
                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
  };
Array ||
  (r.resolveComponent("basketCard") + r.resolveComponent("basketForAI"))();
var s = r._export_sfc(a, [
  [
    "render",
    function (e, t, n, a, s, o) {
      return r.e(
        { a: 2 === s.grayUserStatus },
        2 === s.grayUserStatus
          ? {
              b: r.p({
                "contex-obj": n.contexObj,
                skin: n.theme,
                "basket-id": n.data.fsid,
                "is-to-mock-trade": n.data.mockTradeAbtUser,
                source: "searchAi",
              }),
            }
          : 1 === s.grayUserStatus
          ? {
              d: r.p({
                "contex-obj": n.contexObj,
                skin: n.theme,
                "basket-id": n.data.fsid,
                "route-mock-trade-param": {
                  scene: "fromai",
                  type: "gd",
                  id: n.data.fsid,
                },
                "is-to-mock-trade": n.data.mockTradeAbtUser,
              }),
            }
          : {},
        { c: 1 === s.grayUserStatus }
      );
    },
  ],
]);
wx.createComponent(s);
