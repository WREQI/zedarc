var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../@babel/runtime/helpers/inherits"),
  t = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var o = require("../../../../common/vendor.js"),
  i = require("../../../../bizs/protocol/rich-text-protocol/BaseProtocolConfig.js"),
  c = {
    components: {
      Protocol: function () {
        return "../../protocol.js";
      },
    },
    props: { matchInfo: { type: Object, default: function () {} } },
    setup: function (c) {
      var a = o.ref("gem"),
        l = o.ref("创业板股票"),
        u = new ((function (o) {
          n(a, o);
          var i = t(a);
          function a() {
            return e(this, a), i.apply(this, arguments);
          }
          return (
            r(a, [
              {
                key: "pname",
                get: function () {
                  return l.value;
                },
              },
              {
                key: "termTip",
                get: function () {
                  return this.flagTerm
                    ? "可能无法满足您预期的流动性需求或导致其他额外风险"
                    : "和您预期的流动性需求一致";
                },
              },
              {
                key: "rangeTip",
                get: function () {
                  return this.flagInRange
                    ? "可能与您确认的投资品种不一致"
                    : "和您确认的投资品种一致";
                },
              },
              {
                key: "levelTip",
                get: function () {
                  var e = +(
                      c.matchInfo.riskLevel ||
                      c.matchInfo.risk_level ||
                      0
                    ),
                    r =
                      (c.matchInfo.riskLevelStock ||
                        c.matchInfo.stock_risk_level) + 1;
                  return "".concat(
                    e < r ? "高于" : e > r ? "低于" : "等于",
                    "您在客户风险评估中所显示的风险承受能力等级"
                  );
                },
              },
            ]),
            a
          );
        })(i.BaseProtocolConfig))({ matchInfo: c.matchInfo, biz: a.value });
      return o.provide("protocolConfig", u), { biz: a, pname: l };
    },
    methods: {
      handleCancel: function () {
        this.$emit("cancel");
      },
      handleConfirm: function () {
        this.$emit("confirm");
      },
    },
  };
Array || o.resolveComponent("Protocol")();
var a = o._export_sfc(c, [
  [
    "render",
    function (e, r, n, t, i, c) {
      return {
        a: o.o(c.handleConfirm),
        b: o.o(c.handleCancel),
        c: o.p({
          "match-info": n.matchInfo,
          "protocol-key": "zhongxinjiantou_base_unmatch",
        }),
      };
    },
  ],
]);
wx.createComponent(a);
