var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  o = require("../../../../@babel/runtime/helpers/inherits"),
  t = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var n = require("../../../../model/riskTest/index.js");
require("../../../../service/broker.js");
var i = require("../../../../common/vendor.js"),
  a = require("../../../../bizs/protocol/rich-text-protocol/BaseProtocolConfig.js"),
  s = require("../../../../config/broker/10500/index.js"),
  c = {
    components: {
      Protocol: function () {
        return "../../protocol.js";
      },
    },
    props: {
      matchInfo: { type: Object, default: function () {} },
      isShowMatchProtocol: { type: Boolean, default: !0 },
    },
    setup: function (c) {
      var l = i.ref("apply"),
        u = i.ref(
          "沪/深交易所证券账户将具备沪深交易所A股、投资基金等中风险证券品种交易权限并可接受广发证券套餐型投资咨询"
        ),
        p = i.ref(s.brokerConfig.apply.suitableProtocolShowRiskResult || !1),
        h = new ((function (i) {
          o(s, i);
          var a = t(s);
          function s() {
            return e(this, s), a.apply(this, arguments);
          }
          return (
            r(s, [
              {
                key: "pname",
                get: function () {
                  return u.value;
                },
              },
              {
                key: "investRange",
                get: function () {
                  var e = (this.investType || "1").split("").map(function (e) {
                    return String(+e - 1);
                  });
                  return n.getVarietiesText(e.join(""));
                },
              },
              {
                key: "pinvestRange",
                get: function () {
                  return "投资资讯产品；股票，权益类资产管理产品等权益类金融产品；混合类（投资品种含固收类、权益类、商品及金融衍生品类）金融产品；股票质押式回购，约定购回式证券交易，股权激励融资等融资类业务";
                },
              },
            ]),
            s
          );
        })(a.BaseProtocolConfig))({ matchInfo: c.matchInfo, biz: l.value });
      return (
        i.provide("protocolConfig", h), { biz: l, pname: u, showRiskResult: p }
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
Array || i.resolveComponent("Protocol")();
var l = i._export_sfc(c, [
  [
    "render",
    function (e, r, o, t, n, a) {
      return {
        a: i.o(a.handleConfirm),
        b: i.o(a.handleCancel),
        c: i.p({
          "show-risk-result": t.showRiskResult,
          "match-info": o.matchInfo,
          "protocol-key": "guangfa_apply_match",
          "is-show-match-protocol": o.isShowMatchProtocol,
        }),
      };
    },
  ],
]);
wx.createComponent(l);
