var o = require("../../../../@babel/runtime/helpers/classCallCheck"),
  e = require("../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../@babel/runtime/helpers/inherits"),
  t = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var n = require("../../../../common/vendor.js"),
  c = require("../../../../bizs/protocol/rich-text-protocol/BaseProtocolConfig.js"),
  i = {
    components: {
      Protocol: function () {
        return "../../protocol.js";
      },
    },
    props: { matchInfo: { type: Object, default: function () {} } },
    setup: function (i) {
      var l = n.ref("kechuang"),
        a = n.ref("科创板权限开通"),
        u = new ((function (n) {
          r(i, n);
          var c = t(i);
          function i() {
            return o(this, i), c.apply(this, arguments);
          }
          return (
            e(i, [
              {
                key: "pname",
                get: function () {
                  return a.value;
                },
              },
            ]),
            i
          );
        })(c.BaseProtocolConfig))({ matchInfo: i.matchInfo, biz: l.value });
      return (
        n.provide("protocolConfig", u), { biz: l, pname: a, protocolConfig: u }
      );
    },
    computed: {
      config: function () {
        return this.protocolConfig.config;
      },
    },
    methods: {
      clickProtocolItem: function (o) {
        var e = o.currentTarget.dataset.link;
        this.$router.push({
          name: "VProtocol",
          query: { key: e, buttonType: "confirm", style: "fix" },
        });
      },
      handleCancel: function () {
        this.$emit("cancel");
      },
      handleConfirm: function () {
        this.$emit("confirm");
      },
    },
  };
Array || n.resolveComponent("Protocol")();
var l = n._export_sfc(i, [
  [
    "render",
    function (o, e, r, t, c, i) {
      return n.e(
        { a: i.config.moreProtocol },
        i.config.moreProtocol
          ? {
              b: n.o(function () {
                return (
                  i.clickProtocolItem && i.clickProtocolItem.apply(i, arguments)
                );
              }),
              c: n.o(function () {
                return (
                  i.clickProtocolItem && i.clickProtocolItem.apply(i, arguments)
                );
              }),
            }
          : {},
        {
          d: n.o(function () {
            return i.handleConfirm && i.handleConfirm.apply(i, arguments);
          }),
          e: n.o(i.handleConfirm),
          f: n.o(i.handleCancel),
          g: n.p({
            "protocol-key": "gjzq_base_match_new",
            "match-info": r.matchInfo,
          }),
        }
      );
    },
  ],
]);
wx.createComponent(l);
