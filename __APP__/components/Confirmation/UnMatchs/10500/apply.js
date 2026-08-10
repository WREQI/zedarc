var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  t = require("../../../../@babel/runtime/helpers/inherits"),
  n = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var o = require("../../../../model/riskTest/index.js");
require("../../../../service/broker.js");
var i = require("../../../../common/vendor.js"),
  s = require("../../../../bizs/protocol/rich-text-protocol/BaseProtocolConfig.js"),
  a = require("../../../../config/broker/10500/index.js"),
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
        p = i.ref(a.brokerConfig.apply.suitableProtocolShowRiskResult || !1),
        h = new ((function (i) {
          t(a, i);
          var s = n(a);
          function a() {
            return e(this, a), s.apply(this, arguments);
          }
          return (
            r(a, [
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
                  return o.getVarietiesText(e.join(""));
                },
              },
              {
                key: "pinvestTerm",
                get: function () {
                  return "短期——1年以内（含1年）";
                },
              },
              {
                key: "pinvestRange",
                get: function () {
                  return "投资资讯产品；股票，权益类资产管理产品等权益类金融产品；混合类（投资品种含固收类、权益类、商品及金融衍生品类）金融产品；股票质押式回购，约定购回式证券交易，股权激励融资等融资类业务";
                },
              },
              {
                key: "noMatchItem",
                get: function () {
                  var e = "";
                  return (
                    "不匹配" === this.levelTip &&
                      (e =
                        "<p><strong>其风险等级高于本人的风险承受能力等级</strong></p>"),
                    "不匹配" === this.rangeTip &&
                      (e +=
                        "<p><strong>其所属投资品种超出本人可接受的投资品种。</strong></p>"),
                    e
                  );
                },
              },
              {
                key: "levelTip",
                get: function () {
                  var e = this.matchInfo.riskLevel || this.matchInfo.risk_level;
                  return e < 3 || e >= 6 ? "不匹配" : "匹配";
                },
              },
              {
                key: "rangeTip",
                get: function () {
                  var e;
                  return 4 ==
                    (null == (e = this.matchInfo) ? void 0 : e.invest_type)
                    ? "不匹配"
                    : "匹配";
                },
              },
            ]),
            a
          );
        })(s.BaseProtocolConfig))({ matchInfo: c.matchInfo, biz: l.value });
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
    function (e, r, t, n, o, s) {
      return {
        a: i.o(s.handleConfirm),
        b: i.o(s.handleCancel),
        c: i.p({
          "show-risk-result": n.showRiskResult,
          "match-info": t.matchInfo,
          "protocol-key": "guangfa_apply_unmatch",
          "is-show-match-protocol": t.isShowMatchProtocol,
        }),
      };
    },
  ],
]);
wx.createComponent(l);
