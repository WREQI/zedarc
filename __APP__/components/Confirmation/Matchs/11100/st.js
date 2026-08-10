var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  o = require("../../../../@babel/runtime/helpers/inherits"),
  n = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var t = require("../../../../common/vendor.js"),
  i = require("../../../../bizs/protocol/rich-text-protocol/BaseProtocolConfig.js"),
  c = {
    components: {
      Protocol: function () {
        return "../../protocol.js";
      },
    },
    props: { matchInfo: { type: Object, default: function () {} } },
    setup: function (c) {
      var a = t.ref("st"),
        l = t.ref("风险警示股票（ST等）权限设置"),
        u = new ((function (t) {
          o(c, t);
          var i = n(c);
          function c() {
            return e(this, c), i.apply(this, arguments);
          }
          return (
            r(c, [
              {
                key: "priskLevel",
                get: function () {
                  return "R4";
                },
              },
              {
                key: "pname",
                get: function () {
                  return l.value;
                },
              },
            ]),
            c
          );
        })(i.BaseProtocolConfig))({ matchInfo: c.matchInfo, biz: a.value });
      return t.provide("protocolConfig", u), { biz: a, pname: l };
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
Array || t.resolveComponent("Protocol")();
var a = t._export_sfc(c, [
  [
    "render",
    function (e, r, o, n, i, c) {
      return {
        a: t.o(c.handleConfirm),
        b: t.o(c.handleCancel),
        c: t.p({
          "protocol-key": "zhongxinjiantou_apply_match",
          "match-info": o.matchInfo,
        }),
      };
    },
  ],
]);
wx.createComponent(a);
