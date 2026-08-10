var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../@babel/runtime/helpers/inherits"),
  t = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var o = require("../../../../model/riskTest/index.js"),
  i = require("../../../../common/vendor.js"),
  a = require("../../../../bizs/protocol/rich-text-protocol/BaseProtocolConfig.js");
require("../../../../service/broker.js");
var c = require("../../../../config/enum.js"),
  u = require("../../../../config/broker/11100/index.js"),
  s = {
    components: {
      Protocol: function () {
        return "../../protocol.js";
      },
    },
    props: { matchInfo: { type: Object, default: function () {} } },
    setup: function (s) {
      var l = i.ref("apply"),
        p = i.ref("股票"),
        f = new ((function (a) {
          n(f, a);
          var l = t(f);
          function f() {
            return e(this, f), l.apply(this, arguments);
          }
          return (
            r(f, [
              {
                key: "pname",
                get: function () {
                  return p.value;
                },
              },
              {
                key: "rangeTip",
                get: function () {
                  return this.investType < 3 ? "不匹配" : "匹配";
                },
              },
              {
                key: "priskLevel",
                get: function () {
                  return (
                    i.get(u.brokerConfig.common, "PRODUCT_RISK.2") ||
                    c.RISK_STOCK[2] ||
                    "未知"
                  );
                },
              },
              {
                key: "levelTip",
                get: function () {
                  return +(
                    s.matchInfo.riskLevel ||
                    s.matchInfo.risk_level ||
                    0
                  ) < 3
                    ? "不匹配"
                    : "匹配";
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
            ]),
            f
          );
        })(a.BaseProtocolConfig))({ matchInfo: s.matchInfo, biz: l.value });
      return i.provide("protocolConfig", f), { biz: l, pname: p };
    },
    methods: {
      handleCancel: function () {
        this.$emit("cancel");
      },
      handleConfirm: function () {
        this.$emit("confirm");
      },
      investRange: function () {
        var e,
          r,
          n =
            null ==
            (r =
              null == (e = this.matchInfo.invest_type || "1")
                ? void 0
                : e.split(""))
              ? void 0
              : r.map(function (e) {
                  return String(e - 1);
                });
        return o.getVarietiesText(n.join(""));
      },
    },
  };
Array || i.resolveComponent("Protocol")();
var l = i._export_sfc(s, [
  [
    "render",
    function (e, r, n, t, o, a) {
      return {
        a: i.o(a.handleConfirm),
        b: i.o(a.handleCancel),
        c: i.p({
          "protocol-key": "zhongxinjiantou_apply_unmatch",
          "match-info": n.matchInfo,
        }),
      };
    },
  ],
]);
wx.createComponent(l);
