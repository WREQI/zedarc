var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  o = require("../../../../@babel/runtime/helpers/inherits"),
  n = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var t = require("../../../../common/vendor.js"),
  a = require("../../../../bizs/protocol/rich-text-protocol/BaseProtocolConfig.js"),
  c = {
    components: {
      Protocol: function () {
        return "../../protocol.js";
      },
    },
    props: { matchInfo: { type: Object, default: function () {} } },
    setup: function (c) {
      var i = t.ref("gem"),
        l = t.ref("创业板权限开通"),
        u = new ((function (t) {
          o(c, t);
          var a = n(c);
          function c() {
            return e(this, c), a.apply(this, arguments);
          }
          return (
            r(c, [
              {
                key: "pname",
                get: function () {
                  return l.value;
                },
              },
            ]),
            c
          );
        })(a.BaseProtocolConfig))({ matchInfo: c.matchInfo, biz: i.value });
      return t.provide("protocolConfig", u), { biz: i, pname: l };
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
var i = t._export_sfc(c, [
  [
    "render",
    function (e, r, o, n, a, c) {
      return {
        a: t.o(c.handleConfirm),
        b: t.o(c.handleCancel),
        c: t.p({
          "protocol-key": "guangfa_base_match",
          "match-info": o.matchInfo,
        }),
      };
    },
  ],
]);
wx.createComponent(i);
