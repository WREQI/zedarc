var t = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var e = require("../../common/vendor.js"),
  o = require("../../stores/app/useNavbar.js"),
  n = {
    name: "ProtocolPopup",
    components: {
      Popup: function () {
        return "../../common/components/Popup/index.js";
      },
      RichTextProtocol: function () {
        return "../../bizs/protocol/rich-text-protocol/index.js";
      },
      LoadingProvider: function () {
        return "../../bizs/protocol/loading-provider/index.js";
      },
    },
    props: {
      value: { type: Boolean, default: !1 },
      data: {
        type: Array,
        default: function () {
          return [];
        },
      },
      matchInfo: { type: Object, default: function () {} },
      preview: { type: Boolean, default: !1 },
      title: { type: String, default: "" },
      subtitle: { type: String, default: "" },
      content: { type: String, default: "" },
      protocols: {
        type: Array,
        default: function () {
          return [];
        },
      },
      showTitleBorderBottom: { type: Boolean, default: !0 },
      maskClosable: { type: Boolean, default: !0 },
      closeButton: { type: Boolean, default: !0 },
      confirmTxt: { type: String, default: "已阅读并签署" },
      zIndex: { type: String, default: "100" },
    },
    setup: function () {
      var n = e.storeToRefs(o.useNavbarStore()),
        r = n.externalNavBar,
        a = n.externalNavBar4Mp,
        i = e.getCurrentInstance().proxy;
      return {
        externalNavBar: r,
        externalNavBar4Mp: a,
        toProtocol: function (e) {
          i.$router.push({
            name: "VProtocol",
            query: t(t({}, e), {}, { name: "" }),
          });
        },
        format: function (t) {
          return /^《.+》$/.test(t) ? t : "《".concat(t, "》");
        },
      };
    },
    methods: {
      show: function () {
        this.$emit("input", !0);
      },
      hide: function () {
        this.$emit("input", !1);
      },
      maskClick: function () {
        this.maskClosable && this.hide();
      },
      cancel: function () {
        this.hide(), this.$emit("cancel");
      },
      confirm: function () {
        this.hide(), this.$emit("confirm");
      },
    },
  };
Array ||
  (
    e.resolveComponent("RichTextProtocol") +
    e.resolveComponent("LoadingProvider") +
    e.resolveComponent("popup")
  )();
var r = e._export_sfc(n, [
  [
    "render",
    function (t, o, n, r, a, i) {
      return e.e(
        { a: e.t(n.title), b: n.subtitle },
        n.subtitle ? { c: e.t(n.subtitle) } : {},
        {
          d: n.subtitle ? 1 : "",
          e: n.showTitleBorderBottom ? 1 : "",
          f: e.o(function () {
            return i.cancel && i.cancel.apply(i, arguments);
          }),
          g: n.title,
          h: n.preview,
        },
        n.preview
          ? e.e(
              { i: n.content },
              n.content
                ? { j: e.t(n.content) }
                : n.protocols.length
                ? {
                    l: e.f(n.protocols, function (t, o, r) {
                      return {
                        a: "b4b93f3d-2-" + r + ",b4b93f3d-1-" + r,
                        b: e.p({
                          "protocol-key": t.key,
                          "invest-info": n.matchInfo,
                        }),
                        c: t.key,
                        d: "b4b93f3d-1-" + r + ",b4b93f3d-0",
                      };
                    }),
                  }
                : {},
              { k: n.protocols.length }
            )
          : e.e({ m: n.content }, n.content ? { n: e.t(n.content) } : {}, {
              o: e.f(n.protocols, function (t, o, a) {
                return e.e(
                  {
                    a: e.t(r.format(t.name)),
                    b: e.o(function (e) {
                      return r.toProtocol(t);
                    }, t.key),
                    c: o < n.protocols.length - 2,
                  },
                  (o < n.protocols.length - 2 || n.protocols.length, {}),
                  { d: o === n.protocols.length - 2, e: t.key }
                );
              }),
            }),
        {
          p: e.t(n.confirmTxt),
          q: e.o(function () {
            return i.confirm && i.confirm.apply(i, arguments);
          }),
          r: n.value,
          s: e.o(function () {}),
          t: r.externalNavBar || r.externalNavBar4Mp ? 1 : "",
          v: e.o(i.maskClick),
          w: e.p({
            show: n.value,
            center: !1,
            mask: !0,
            "z-index": n.zIndex,
            position: "bottom",
            "mask-closable": n.maskClosable,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-b4b93f3d"],
]);
wx.createComponent(r);
