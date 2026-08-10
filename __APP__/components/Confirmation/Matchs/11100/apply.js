var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../@babel/runtime/helpers/inherits"),
  t = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var o = require("../../../../model/riskTest/index.js"),
  i = require("../../../../common/vendor.js"),
  a = require("../../../../bizs/protocol/rich-text-protocol/BaseProtocolConfig.js"),
  c = {
    components: {
      Protocol: function () {
        return "../../protocol.js";
      },
    },
    props: { matchInfo: { type: Object, default: function () {} } },
    setup: function (c) {
      var u = i.ref("apply"),
        l = i.ref("股票"),
        s = new ((function (i) {
          n(c, i);
          var a = t(c);
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
            c
          );
        })(a.BaseProtocolConfig))({ matchInfo: c.matchInfo, biz: u.value });
      return i.provide("protocolConfig", s), { biz: u, pname: l };
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
var u = i._export_sfc(c, [
  [
    "render",
    function (e, r, n, t, o, a) {
      return {
        a: i.o(a.handleConfirm),
        b: i.o(a.handleCancel),
        c: i.p({
          "protocol-key": "zhongxinjiantou_apply_match",
          "match-info": n.matchInfo,
        }),
      };
    },
  ],
]);
wx.createComponent(u);
