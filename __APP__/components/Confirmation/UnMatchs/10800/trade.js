var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../@babel/runtime/helpers/inherits"),
  o = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var r = require("../../../../common/vendor.js"),
  i = require("../../../../bizs/protocol/rich-text-protocol/BaseProtocolConfig.js"),
  c = {
    components: {
      Protocol: function () {
        return "../../protocol.js";
      },
    },
    props: { matchInfo: { type: Object, default: function () {} } },
    setup: function (c) {
      var a = r.ref("trade"),
        l = r.ref("交易"),
        u = new ((function (r) {
          n(c, r);
          var i = o(c);
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
                key: "priskLevel",
                get: function () {
                  return "R3";
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
                key: "flagRisk",
                get: function () {
                  return (
                    this.matchInfo.riskLevel < 3 ||
                    this.matchInfo.risk_level < 3
                  );
                },
              },
              {
                key: "levelTip",
                get: function () {
                  return this.flagRisk
                    ? "高于您的风险承受能力等级".concat(
                        this.riskLevel,
                        "。投资该项产品或接受该项服务，可能导致超出您自身风险承受能力的损失。"
                      )
                    : "您的风险承受能力等级为".concat(
                        this.riskLevel,
                        "。二者适配。"
                      );
                },
              },
              {
                key: "termTip",
                get: function () {
                  return this.flagTerm
                    ? "与您的预计投资期限".concat(
                        this.investTerm,
                        "不一致。投资该项产品或接受该项服务，可能无法满足您预期的流动性需求或导致其他额外风险。"
                      )
                    : "您的预计投资期限为".concat(
                        this.investTerm,
                        "。二者适配"
                      );
                },
              },
              {
                key: "rangeTip",
                get: function () {
                  return this.flagInRange
                    ? "您的预期投资品种为".concat(
                        this.investRange,
                        "。投资该项产品或接受该项服务与您确认的投资品种不一致。"
                      )
                    : "您的预期投资品种为".concat(
                        this.investRange,
                        "。二者适配。"
                      );
                },
              },
            ]),
            c
          );
        })(i.BaseProtocolConfig))({ matchInfo: c.matchInfo, biz: a.value });
      return (
        r.provide("protocolConfig", u), { biz: a, pname: l, protocolConfig: u }
      );
    },
    computed: {
      config: function () {
        return this.protocolConfig.config;
      },
    },
    methods: {
      clickProtocolItem: function (e) {
        var t = e.currentTarget.dataset.link;
        this.$router.push({
          name: "VProtocol",
          query: { key: t, buttonType: "confirm", style: "fix" },
        });
      },
      handleCancel: function () {
        this.$emit("cancel");
      },
      handleConfirm: function () {
        this.$emit("confirm");
      },
    },
  };
Array || r.resolveComponent("Protocol")();
var a = r._export_sfc(c, [
  [
    "render",
    function (e, t, n, o, i, c) {
      return r.e(
        { a: c.config.moreProtocol },
        c.config.moreProtocol
          ? {
              b: r.o(function () {
                return (
                  c.clickProtocolItem && c.clickProtocolItem.apply(c, arguments)
                );
              }),
              c: r.o(function () {
                return (
                  c.clickProtocolItem && c.clickProtocolItem.apply(c, arguments)
                );
              }),
            }
          : {},
        { d: c.config.buttonsNormal },
        c.config.buttonsNormal
          ? {
              e: r.o(function () {
                return c.handleConfirm && c.handleConfirm.apply(c, arguments);
              }),
            }
          : {},
        { f: c.config.buttonsTrade },
        c.config.buttonsTrade
          ? {
              g: r.o(function () {
                return c.handleCancel && c.handleCancel.apply(c, arguments);
              }),
              h: r.o(function () {
                return c.handleConfirm && c.handleConfirm.apply(c, arguments);
              }),
            }
          : {},
        {
          i: r.o(c.handleConfirm),
          j: r.p({
            "protocol-key": "cmschina_apply_unmatch",
            "match-info": n.matchInfo,
            "normal-buttons": !1,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-61f6a067"],
]);
wx.createComponent(a);
