var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../@babel/runtime/helpers/inherits"),
  n = require("../../../../@babel/runtime/helpers/createSuper");
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
      var a = o.ref("apply"),
        l = o.ref("股票"),
        s = new ((function (o) {
          r(c, o);
          var i = n(c);
          function c() {
            return e(this, c), i.apply(this, arguments);
          }
          return (
            t(c, [
              {
                key: "pname",
                get: function () {
                  return l.value;
                },
              },
              {
                key: "suitableLevel",
                get: function () {
                  return [
                    "R1(低风险等级)",
                    "R2（中低风险等级）",
                    "R3（中风险等级）",
                    "R4（中高风险等级）",
                    "R5（高风险等级）",
                  ]
                    .slice(0, this.matchInfo.risk_level || 1)
                    .join("、");
                },
              },
              {
                key: "insuitableLevel",
                get: function () {
                  return [
                    "R2（中低风险等级）及以上",
                    "R3（中风险等级）及以上",
                    "R4（中高风险等级）及以上",
                    "R5（高风险等级）",
                  ][(this.matchInfo.risk_level || 1) - 1];
                },
              },
              {
                key: "matchText",
                get: function () {
                  if (11 == +this.matchInfo.risk_level)
                    return "您只能购买或接受公司产品或服务风险目录中R1（低风险等级）的产品或服务，您不能购买或接受超过R1（低风险等级）的产品或服务。";
                  var e = "您适合购买或接受公司产品或服务风险目录中".concat(
                    this.suitableLevel,
                    "的产品或服务，"
                  );
                  return (
                    +this.matchInfo.risk_level < 5
                      ? (e += "公司产品或服务风险目录中".concat(
                          this.insuitableLevel,
                          "的产品或服务的风险超过了您的风险承受能力，若您参与可能会给您带来超出您风险承受能力的损失，请您谨慎参与。"
                        ))
                      : (e +=
                          "在您购买公司产品或服务风险目录中R5（高风险等级）的产品或服务时，需在了解产品的高风险特征后理性作出投资决策。"),
                    e
                  );
                },
              },
            ]),
            c
          );
        })(i.BaseProtocolConfig))({ matchInfo: c.matchInfo, biz: a.value });
      return o.provide("protocolConfig", s), { biz: a, pname: l };
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
    function (e, t, r, n, i, c) {
      return {
        a: o.o(c.handleConfirm),
        b: o.o(c.handleCancel),
        c: o.p({
          "match-info": r.matchInfo,
          "protocol-key": "gjzq_apply_match",
        }),
      };
    },
  ],
]);
wx.createComponent(a);
