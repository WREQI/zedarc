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
      var a = o.ref("kechuang"),
        u = o.ref("科创板权限开通"),
        l = new ((function (o) {
          n(c, o);
          var i = t(c);
          function c() {
            return e(this, c), i.apply(this, arguments);
          }
          return (
            r(c, [
              {
                key: "pname",
                get: function () {
                  return u.value;
                },
              },
              {
                key: "priskLevel",
                get: function () {
                  return "R3（中风险）";
                },
              },
              {
                key: "pinvestTerm",
                get: function () {
                  return "0-1年";
                },
              },
              {
                key: "pinvestRange",
                get: function () {
                  return "权益类";
                },
              },
              {
                key: "levelTip",
                get: function () {
                  var e = this.matchInfo.riskLevel || this.matchInfo.risk_level;
                  return "".concat(
                    e < 3 ? "高于" : e > 3 ? "低于" : "等于",
                    "您在客户风险评估中所显示的风险承受能力等级"
                  );
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
                  return this.investType < 2
                    ? "可能与您确认的投资品种不一致"
                    : "和您确认的投资品种一致";
                },
              },
            ]),
            c
          );
        })(i.BaseProtocolConfig))({ matchInfo: c.matchInfo, biz: a.value });
      return (
        o.provide("protocolConfig", l), { biz: a, pname: u, protocolConfig: l }
      );
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
          "protocol-key": "guosen_base_unmatch",
          "match-info": n.matchInfo,
        }),
      };
    },
  ],
]);
wx.createComponent(a);
