var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  t = require("../../../../@babel/runtime/helpers/inherits"),
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
        s = new ((function (o) {
          t(c, o);
          var i = n(c);
          function c() {
            return e(this, c), i.apply(this, arguments);
          }
          return (
            r(c, [
              {
                key: "pname",
                get: function () {
                  var e = this.matchInfo.riskLevel || this.matchInfo.risk_level;
                  return +e < 3 || 10 == +e
                    ? "国债类（及逆回购）"
                    : "主板证券(主板股票、存托凭证)";
                },
              },
              {
                key: "priskLevel",
                get: function () {
                  var e = this.matchInfo.riskLevel || this.matchInfo.risk_level;
                  return +e < 3 || 10 == +e ? "R1（低风险）" : "R3（中风险）";
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
            ]),
            c
          );
        })(i.BaseProtocolConfig))({ matchInfo: c.matchInfo, biz: a.value });
      return o.provide("protocolConfig", s), { biz: a };
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
    function (e, r, t, n, i, c) {
      return {
        a: o.o(c.handleConfirm),
        b: o.o(c.handleCancel),
        c: o.p({
          "protocol-key": "guosen_base_match",
          "match-info": t.matchInfo,
        }),
      };
    },
  ],
]);
wx.createComponent(a);
