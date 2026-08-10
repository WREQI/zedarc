var o = require("../../../../@babel/runtime/helpers/classCallCheck"),
  e = require("../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../@babel/runtime/helpers/inherits"),
  r = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var t = require("../../../../common/vendor.js"),
  c = require("../../../../bizs/protocol/rich-text-protocol/BaseProtocolConfig.js"),
  i = {
    components: {
      Protocol: function () {
        return "../../protocol.js";
      },
    },
    props: { matchInfo: { type: Object, default: function () {} } },
    setup: function (i) {
      var a = t.ref("trade"),
        l = t.ref(""),
        u = new ((function (t) {
          n(i, t);
          var c = r(i);
          function i() {
            return o(this, i), c.apply(this, arguments);
          }
          return (
            e(i, [
              {
                key: "pname",
                get: function () {
                  return l.value;
                },
              },
            ]),
            i
          );
        })(c.BaseProtocolConfig))({ matchInfo: i.matchInfo, biz: a.value });
      return (
        t.provide("protocolConfig", u), { biz: a, pname: l, protocolConfig: u }
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
Array || t.resolveComponent("Protocol")();
var a = t._export_sfc(i, [
  [
    "render",
    function (o, e, n, r, c, i) {
      return t.e(
        { a: i.config.moreProtocol },
        i.config.moreProtocol
          ? {
              b: t.o(function () {
                return (
                  i.clickProtocolItem && i.clickProtocolItem.apply(i, arguments)
                );
              }),
              c: t.o(function () {
                return (
                  i.clickProtocolItem && i.clickProtocolItem.apply(i, arguments)
                );
              }),
            }
          : {},
        { d: i.config.buttonsTrade },
        i.config.buttonsTrade
          ? {
              e: t.o(function () {
                return i.handleCancel && i.handleCancel.apply(i, arguments);
              }),
              f: t.o(function () {
                return i.handleConfirm && i.handleConfirm.apply(i, arguments);
              }),
            }
          : {},
        { g: i.config.buttonsNormal },
        i.config.buttonsNormal
          ? {
              h: t.o(function () {
                return i.handleConfirm && i.handleConfirm.apply(i, arguments);
              }),
            }
          : {},
        {
          i: t.p({
            "protocol-key": "gjzq_base_unmatch_new",
            "match-info": n.matchInfo,
            "normal-buttons": !1,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-3c1fbc8e"],
]);
wx.createComponent(a);
