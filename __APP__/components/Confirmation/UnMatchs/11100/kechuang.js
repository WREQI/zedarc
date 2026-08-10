var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../@babel/runtime/helpers/inherits"),
  o = require("../../../../@babel/runtime/helpers/createSuper");
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
      var c = t.ref("kechuang"),
        u = t.ref("科创板股票"),
        l = new ((function (t) {
          n(a, t);
          var i = o(a);
          function a() {
            return e(this, a), i.apply(this, arguments);
          }
          return (
            r(a, [
              {
                key: "pname",
                get: function () {
                  return u.value;
                },
              },
            ]),
            a
          );
        })(i.BaseProtocolConfig))({ matchInfo: a.matchInf, biz: c.value });
      return t.provide("protocolConfig", l), { biz: c, pname: u };
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
    function (e, r, n, o, i, a) {
      return {
        a: t.o(a.handleConfirm),
        b: t.o(a.handleCancel),
        c: t.p({
          "protocol-key": "zhongxinjiantou_base_unmatch",
          "match-info": n.matchInfo,
        }),
      };
    },
  ],
]);
wx.createComponent(c);
