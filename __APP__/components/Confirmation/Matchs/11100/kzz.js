var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../@babel/runtime/helpers/inherits"),
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
      var a = o.ref("可转债业务"),
        u = o.ref("kzz"),
        l = new ((function (o) {
          n(c, o);
          var i = t(c);
          function c() {
            return e(this, c), i.apply(this, arguments);
          }
          return (
            r(c, [
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
                key: "pname",
                get: function () {
                  return a.value;
                },
              },
            ]),
            c
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
var a = o._export_sfc(c, [
  [
    "render",
    function (e, r, n, t, i, c) {
      return {
        a: o.o(c.handleConfirm),
        b: o.o(c.handleCancel),
        c: o.p({
          "protocol-key": "zhongxinjiantou_kzz_match",
          "match-info": n.matchInfo,
          "normal-buttons": !1,
        }),
      };
    },
  ],
]);
wx.createComponent(a);
