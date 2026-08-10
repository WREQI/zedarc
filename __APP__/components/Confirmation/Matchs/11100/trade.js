var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  o = require("../../../../@babel/runtime/helpers/inherits"),
  n = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var t = require("../../../../common/vendor.js"),
  i = require("../../../../bizs/protocol/rich-text-protocol/BaseProtocolConfig.js"),
  a = {
    components: {
      Protocol: function () {
        return "../../protocol.js";
      },
    },
    props: { matchInfo: { type: Object, default: function () {} } },
    setup: function (a) {
      var c = t.ref("trade"),
        l = t.ref("交易"),
        u = new ((function (t) {
          o(a, t);
          var i = n(a);
          function a() {
            return e(this, a), i.apply(this, arguments);
          }
          return (
            r(a, [
              {
                key: "panme",
                get: function () {
                  return l.value;
                },
              },
            ]),
            a
          );
        })(i.BaseProtocolConfig))({ matchInfo: a.matchInfo, biz: c.value });
      return t.provide("protocolConfig", u), { biz: c, pname: l };
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
var c = t._export_sfc(a, [
  [
    "render",
    function (e, r, o, n, i, a) {
      return {
        a: t.o(a.handleConfirm),
        b: t.o(a.handleCancel),
        c: t.p({
          "match-info": o.matchInfo,
          "protocol-key": "zhongxinjiantou_apply_match",
        }),
      };
    },
  ],
]);
wx.createComponent(c);
