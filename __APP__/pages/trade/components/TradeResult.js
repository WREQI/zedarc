var e = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var t = require("../../../common/vendor.js"),
  n = require("../../../model/trade/utils.js"),
  r = require("../../../model/common/useBack.js");
require("../../../service/broker.js");
var a = require("../../../config/broker/11100/index.js"),
  o = {
    expose: ["autoClose", "tradeSuccess", "tradeFail"],
    components: {
      CommonResult: function () {
        return "../../../components/CommonResult/CommonResult.js";
      },
    },
    props: {
      showHeader: { type: Boolean, default: !1 },
      customCls: { type: String, default: "trade-result-default" },
      registerEventOutSide: { type: Boolean, default: !1 },
      fundaccount: { type: String, default: "****" },
      closeConfirm: { type: Boolean, default: !1 },
      simpleMode: { type: Boolean, default: !1 },
    },
    setup: function (o, u) {
      var l = u.emit,
        c = t.getCurrentInstance().proxy,
        s = r.usePersonal().toAsset,
        i = t.ref(!1),
        d = t.ref(""),
        v = t.ref(""),
        f = t.ref(""),
        p = t.ref(""),
        m = t.ref(""),
        b = t.inject("trade"),
        h = t.computed(function () {
          return n.isBuyAction(f.value);
        }),
        y = t.computed(function () {
          return n.isBuyAction(f.value) ? "买入" : "卖出";
        }),
        k = t.computed(function () {
          return p.value || "订单提交失败";
        }),
        C = t.computed(function () {
          return "".concat(y.value, "委托已提交");
        }),
        g = t.inject("trade").stock,
        x = t.inject("embeddedMode");
      function j() {
        (i.value = !1), l("showConfirmDialog", !1);
      }
      function B() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "unknow";
        j(), c.$stat.click("trade.trade.".concat(e));
      }
      t.watch(
        function () {
          return i.value;
        },
        function () {
          l("tradeResultVisibleChange", i.value);
        }
      );
      var R = {
          jumpTodayOrder: {
            text: "查询今日委托",
            handler: function () {
              l("refreshToday"),
                l("showConfirmDialog", !1),
                (null == x ? void 0 : x.value) || l("closeTradePopup"),
                (i.value = !1),
                c.$stat.click("trade.trade.query_today");
            },
          },
        },
        T = t.computed(function () {
          return m.value &&
            "object" == e(m.value) &&
            m.value.text &&
            m.value.handler &&
            "function" == typeof m.value.handler
            ? m.value
            : m.value && R[m.value]
            ? R[m.value]
            : (null == x ? void 0 : x.value)
            ? { text: "返回下单", handler: B.bind(null, "backtrade_btn") }
            : {
                text: "返回下单",
                handler: function () {
                  (i.value = !1),
                    l("closeTradePopup"),
                    c.$stat.click("trade.trade.".concat(f));
                },
              };
        }),
        w = null;
      return {
        show: i,
        status: d,
        tips: v,
        isBuy: h,
        actionText: y,
        errorTitleRender: k,
        backTrade: B,
        backAndClose: function () {
          l("close"), c.$stat.click("trade.trade.result_close_btn");
        },
        toAssetOrderTab: function () {
          s({ query: { tab: "history" } }), (t.index.xxx = "trade");
        },
        buttonHandlerRender: T,
        autoClose: j,
        title: C,
        broker: a.brokerConfig,
        tradeSuccess: function (e) {
          var t = g.value.quantityUnit;
          (i.value = !0),
            (d.value = "succ"),
            (f.value = e.action),
            (v.value = ""
              .concat(y.value)
              .concat(e.quantity)
              .concat(t, "「")
              .concat(e.name, "」的委托已提交，交易结果稍后将微信通知您")),
            w && (clearTimeout(w), (w = null)),
            (w = setTimeout(function () {
              (null == x ? void 0 : x.value) && l("showConfirmDialog", !1),
                (null == x ? void 0 : x.value) || l("closeTradePopup"),
                (i.value = !1);
            }, 1300));
        },
        tradeFail: function (e) {
          (i.value = !0),
            (d.value = "fail"),
            (f.value = e.action),
            (v.value = e.retmsg),
            (p.value = e.errorTitle || ""),
            (m.value = e.buttonHandler || "");
        },
        tradeResultBtnLoading: b.tradeResultBtnLoading,
      };
    },
  };
Array || t.resolveComponent("BrokerLogo")(), Math;
var u = t._export_sfc(o, [
  [
    "render",
    function (e, n, r, a, o, u) {
      return t.e(
        { a: a.show },
        a.show
          ? t.e(
              { b: r.showHeader },
              r.showHeader
                ? {
                    c: t.t(a.broker.base.name),
                    d: t.t(r.fundaccount),
                    e: t.o(function (e) {
                      return a.backAndClose();
                    }),
                  }
                : {},
              {
                f: t.n("succ" === a.status ? "result-success" : "result-fail"),
                g: "succ" === a.status,
              },
              "succ" === a.status
                ? { h: t.t(a.title), i: t.t(a.tips) }
                : {
                    j: t.t(a.errorTitleRender),
                    k: t.t(a.tips),
                    l: t.t(a.buttonHandlerRender.text),
                    m: t.n(a.isBuy ? "buy" : "sell"),
                    n: a.tradeResultBtnLoading,
                    o: t.o(function () {
                      var e;
                      return (
                        a.buttonHandlerRender.handler &&
                        (e = a.buttonHandlerRender).handler.apply(e, arguments)
                      );
                    }),
                  },
              { p: t.n(r.customCls) }
            )
          : {}
      );
    },
  ],
]);
wx.createComponent(u);
