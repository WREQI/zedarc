var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../@babel/runtime/helpers/inherits"),
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
      var u = o.ref("gem"),
        a = o.ref("创业板股票"),
        l = new ((function (o) {
          r(u, o);
          var i = t(u);
          function u() {
            return e(this, u), i.apply(this, arguments);
          }
          return (
            n(u, [
              {
                key: "pname",
                get: function () {
                  return a.value;
                },
              },
              {
                key: "priskLevel",
                get: function () {
                  return "中等风险";
                },
              },
              {
                key: "pinvestTerm",
                get: function () {
                  return "短期";
                },
              },
              {
                key: "pinvestRange",
                get: function () {
                  return "权益类";
                },
              },
              {
                key: "rangeTip",
                get: function () {
                  return this.investType < 3 ? "不匹配" : "匹配";
                },
              },
              {
                key: "termTip",
                get: function () {
                  return "匹配";
                },
              },
              {
                key: "levelTip",
                get: function () {
                  return (c.matchInfo.riskLevel || c.matchInfo.risk_level) < 3
                    ? "不匹配"
                    : "匹配";
                },
              },
            ]),
            u
          );
        })(i.BaseProtocolConfig))({ matchInfo: c.matchInfo, biz: u.value });
      return o.provide("protocolConfig", l), { biz: u, pname: a };
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
var u = o._export_sfc(c, [
  [
    "render",
    function (e, n, r, t, i, c) {
      return {
        a: o.o(c.handleConfirm),
        b: o.o(c.handleCancel),
        c: o.p({
          "protocol-key": "zhongxinjiantou_kzz_unmatch",
          "match-info": r.matchInfo,
          "normal-buttons": !1,
        }),
      };
    },
  ],
]);
wx.createComponent(u);
