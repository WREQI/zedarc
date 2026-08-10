var e = require("../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var r = require("../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../@babel/runtime/helpers/createClass"),
  t = require("../../../../@babel/runtime/helpers/inherits"),
  o = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var i = require("../../../../common/vendor.js"),
  a = require("../../../../bizs/protocol/rich-text-protocol/BaseProtocolConfig.js"),
  s = {
    components: {
      Protocol: function () {
        return "../../protocol.js";
      },
    },
    props: { matchInfo: { type: Object, default: function () {} } },
    setup: function (s) {
      var c = i.ref("st"),
        u = i.ref("风险警示股票（ST等）权限设置"),
        l = new ((function (i) {
          t(s, i);
          var a = o(s);
          function s() {
            return r(this, s), a.apply(this, arguments);
          }
          return (
            n(s, [
              {
                key: "pname",
                get: function () {
                  return u.value;
                },
              },
              {
                key: "priskLevel",
                get: function () {
                  return "R4中高风险";
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
            s
          );
        })(a.BaseProtocolConfig))({ matchInfo: s.matchInfo, biz: c.value });
      return i.provide("protocolConfig", l), { biz: c, pname: u };
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
Array || i.resolveComponent("Protocol")();
var c = i._export_sfc(s, [
  [
    "render",
    function (e, r, n, t, o, a) {
      return {
        a: i.o(a.handleConfirm),
        b: i.o(a.handleCancel),
        c: i.p({
          "protocol-key": "guangfa_base_unmatch",
          "match-info": n.matchInfo,
        }),
      };
    },
  ],
]);
wx.createComponent(c);
