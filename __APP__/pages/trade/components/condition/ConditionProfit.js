require("../../../../app.js");
var e = require("../../../../common/components/Dialog/index.js"),
  n = require("../../../../common/utils/colorHelper.js"),
  t = require("../../../../common/vendor.js"),
  i = {
    props: {
      value: {
        type: Object,
        default: function () {
          return {};
        },
      },
      hidefund: { type: Boolean, default: !1 },
      type: { type: String, default: "" },
    },
    setup: function () {
      return {
        redOrGreen: n.redOrGreen,
        explain: function () {
          e.Dialog({
            message:
              '\n          <div class="align-c" style="color: var(--text-color-1);font-size: 17px;font-weight: 500;line-height: 25px;margin-bottom: 16px;">\n            网格增益说明\n          </div>\n          <div class="align-l" style="color: var(--text-color-2);font-size: 14px;line-height: 21px;">计算过程撇除了股票持仓的自然盈亏，根据国际通用的“先进先出”原则对买卖交易配对，再根据买卖交收差额预估网格收益（并非持仓收益）。</div>\n          <br>\n          <div class="align-l" style="color: var(--text-color-1);font-weight: 500;font-size: 14px;line-height: 21px;">仅通过网格交易买入后卖出被认定为配对，收益针对配对的部分计算。</div>\n          <br>\n          <div class="align-l" style="color: var(--text-color-4);font-size: 14px;line-height: 21px;">注：数据来源于成交流水每天更新一次。结果仅供参考，不代表实际盈亏。</div>\n        ',
            messageType: "html",
            confirmButtonText: "我知道了",
          });
        },
      };
    },
  },
  r = t._export_sfc(i, [
    [
      "render",
      function (e, n, i, r, o, l) {
        return t.e(
          {
            a: t.t(i.hidefund ? "***" : i.value.runningDays || "--"),
            b: t.t(i.hidefund ? "***" : i.value.transactionNum || "--"),
            c: "grid" === i.type,
          },
          "grid" === i.type
            ? {
                d: t.o(function () {
                  return r.explain && r.explain.apply(r, arguments);
                }),
              }
            : {},
          { e: !i.hidefund },
          i.hidefund
            ? {}
            : {
                f: t.t(
                  e.$filters.money.formatNoUnit(
                    i.value.profit ? +i.value.profit : "--",
                    !0
                  )
                ),
                g: t.n(r.redOrGreen(i.value.profit)),
              },
          { h: i.hidefund ? 1 : "" }
        );
      },
    ],
    ["__scopeId", "data-v-ce8fa94f"],
  ]);
wx.createComponent(r);
