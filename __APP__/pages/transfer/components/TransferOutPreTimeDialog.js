require("../../../app.js");
var e = require("../../../common/vendor.js"),
  r = require("../../../utils/navigator.js"),
  t = require("../../../utils/getPlatform.js");
require("../../../service/sdk/lib/api.js");
var a = require("../../../service/sdk/platform/mp-weixin.js");
Math || (o + e.unref(n))();
var n = function () {
    return "../../../common/components/Dialog/Dialog.js";
  },
  o = function () {
    return "../../../components/TransferProgress/TransferOutProgress.js";
  },
  u = {
    __name: "TransferOutPreTimeDialog",
    props: {
      serverTime: { type: Date, required: !0 },
      drawFromBalance: { type: Number, default: 0 },
      money: { type: Number, required: !0 },
    },
    emits: "confirm",
    setup: function (n, o) {
      var u = o.emit,
        i = e.inject("drawablePlan"),
        c = u;
      function s() {
        c("confirm");
      }
      function l() {
        c("cancel");
      }
      var m = e.computed(function () {
          var r = [];
          return (
            i.value.forEach(function (t, a, n) {
              var o = v.value ? "YYYY-MM-DD" : "YYYY-MM-DD HH:mm";
              r.push({
                state: "pending-enhance",
                text: "第".concat(a + 1, "笔"),
                money: t.amount,
                date: t.arriveTimestamp
                  ? e.dayjs(t.arriveTimestamp).format(o)
                  : t.arriveText,
              });
            }),
            r
          );
        }),
        v = e.computed(function () {
          return 1 !== i.value.length;
        });
      function p() {
        var e = t.getPlatform(),
          n = e.isZxg,
          o = e.isSimpleMode ? "&lite=1" : "",
          u =
            "https://wzq.tenpay.com/wzq/front/aics/#/aiserviceV2/knowledgeDetail?entry=asset&channel="
              .concat(r.getAICSChannel(), "&qid=131")
              .concat(o);
        n ? a.sdk.openUrlWithExtraWebview({ url: u }) : r.uniHref(u);
      }
      var f = e.computed(function () {
          return v.value
            ? "根据交易结算规则，本笔资金将"
            : "根据交易结算规则，将使用预约转账功能，预计";
        }),
        d = e.computed(function () {
          var e;
          return v.value
            ? "分笔到账"
            : "".concat(
                (null == (e = m.value[0]) ? void 0 : e.date) || "预约时间",
                "前到账"
              );
        });
      return function (r, t) {
        return e.e(
          {
            a: e.t(f.value),
            b: e.t(d.value),
            c: v.value ? 1 : "",
            d: v.value ? 1 : "",
            e: v.value,
          },
          v.value
            ? { f: e.p({ "current-progress": 1, "state-list": m.value }) }
            : {},
          { g: e.t(n.drawFromBalance), h: n.drawFromBalance > 0, i: v.value },
          v.value ? { j: e.o(p) } : {},
          {
            k: e.o(s),
            l: e.o(l),
            m: e.p({
              visible: !0,
              "show-cancel-button": !0,
              "confirm-button-text": "确认转出",
            }),
          }
        );
      };
    },
  },
  i = e._export_sfc(u, [["__scopeId", "data-v-48d96512"]]);
wx.createComponent(i);
