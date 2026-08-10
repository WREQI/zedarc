var e = require("../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var r = require("../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../@babel/runtime/helpers/createClass"),
  t = require("../../../../@babel/runtime/helpers/inherits"),
  o = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var a = require("../../../../common/vendor.js"),
  i = require("../../../../bizs/protocol/rich-text-protocol/BaseProtocolConfig.js"),
  c = {
    components: {
      Protocol: function () {
        return "../../protocol.js";
      },
    },
    props: { matchInfo: { type: Object, default: function () {} } },
    setup: function (c) {
      var s = a.ref("trade"),
        u = a.ref("交易"),
        l = new ((function (a) {
          t(c, a);
          var i = o(c);
          function c() {
            return r(this, c), i.apply(this, arguments);
          }
          return (
            n(c, [
              {
                key: "pname",
                get: function () {
                  return u.value;
                },
              },
              {
                key: "priskLevel",
                get: function () {
                  return "R3";
                },
              },
              {
                key: "lowerRisk",
                get: function () {
                  var e = "";
                  return (
                    +(this.matchInfo.riskLevel || this.matchInfo.risk_level) <
                      3 && (e = "其风险等级高于本人的风险承受能力等级"),
                    e
                  );
                },
              },
              {
                key: "lowerRange",
                get: function () {
                  var e = "",
                    r =
                      this.matchInfo.investRange ||
                      this.matchInfo.invest_range ||
                      [];
                  return (
                    Array.isArray(r) || (r = [r]),
                    r.includes("0") &&
                      (e = "其所属投资品种超出本人可接受的投资品种"),
                    e
                  );
                },
              },
              {
                key: "investRange",
                get: function () {
                  var r =
                    this.matchInfo.investRange || this.matchInfo.invest_range;
                  return (
                    Array.isArray(r) && (r = Math.max.apply(Math, e(r))),
                    this.varieties.slice(0, r + 1).join("，")
                  );
                },
              },
            ]),
            c
          );
        })(i.BaseProtocolConfig))({ matchInfo: c.matchInfo, biz: s.value });
      return a.provide("protocolConfig", l), { biz: s, pname: u };
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
Array || a.resolveComponent("Protocol")();
var s = a._export_sfc(c, [
  [
    "render",
    function (e, r, n, t, o, i) {
      return {
        a: a.o(i.handleConfirm),
        b: a.o(i.handleCancel),
        c: a.p({
          "protocol-key": "guangfa_base_unmatch",
          "match-info": n.matchInfo,
        }),
      };
    },
  ],
]);
wx.createComponent(s);
