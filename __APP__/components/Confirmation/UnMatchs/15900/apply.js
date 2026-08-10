var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../@babel/runtime/helpers/inherits"),
  t = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var o = require("../../../../common/vendor.js"),
  i = require("../../../../bizs/protocol/rich-text-protocol/BaseProtocolConfig.js"),
  a = {
    components: {
      Protocol: function () {
        return "../../protocol.js";
      },
    },
    props: { matchInfo: { type: Object, default: function () {} } },
    setup: function (a) {
      var c = o.ref("apply"),
        s = o.ref("股票"),
        l = new ((function (o) {
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
                  return s.value;
                },
              },
              {
                key: "alertVarieties",
                get: function () {
                  return [
                    "地方政府债、政策性银行金融债、AA+及以上的信用债、可转债等场内投资品种均为R2(中低风险等级)",
                    "A股股票、B股股票、基金（股票型）、AA级信用债等场内投资品种均为R3（中风险等级）",
                  ]
                    .slice(this.matchInfo.riskLevel - 1)
                    .join("，");
                },
              },
              {
                key: "confirmVarieties",
                get: function () {
                  var e = ["A股股票、B股股票、基金（股票型）"];
                  switch (+this.matchInfo.riskLevel) {
                    case 1:
                      e.push(
                        "国债、地方政府债、政策性银行金融债、AA+及以上的信用债、可转债"
                      );
                      break;
                    case 2:
                      e.push("AA级信用债");
                  }
                  return e.join("、");
                },
              },
            ]),
            a
          );
        })(i.BaseProtocolConfig))({ matchInfo: a.matchInfo, biz: c.value });
      return o.provide("protocolConfig", l), { biz: c, pname: s };
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
var c = o._export_sfc(a, [
  [
    "render",
    function (e, r, n, t, i, a) {
      return {
        a: o.o(a.handleConfirm),
        b: o.o(a.handleCancel),
        c: o.p({
          "protocol-key": "gjzq_apply_unmatch_new",
          "match-info": n.matchInfo,
        }),
      };
    },
  ],
]);
wx.createComponent(c);
