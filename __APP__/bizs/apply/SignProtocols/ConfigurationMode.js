var o = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var t = require("../../../common/vendor.js"),
  e = require("../../../common/components/Dialog/index.js");
require("../../../service/sdk/lib/api.js");
var n = require("../../../service/sdk/platform/mp-weixin.js"),
  i = {
    name: "SignProtocol",
    components: {
      Protocols: function () {
        return "../Protocols.js";
      },
      ProtocolBarWrap: function () {
        return "./component/ProtocolBarWrap.js";
      },
    },
    props: {
      protocolConfig: {
        type: Object,
        default: function () {
          return {
            useWrapStyle: !1,
            hideCheckBox: !0,
            signText: "",
            allProtocolName: "",
            signTextAppendix: "",
            tilingList: [],
            mergingList: [],
            modalProtocol: {},
          };
        },
      },
      isProtocolCheck: { type: Boolean, default: !1 },
    },
    setup: function (i, r) {
      var l = r.emit,
        c = t.getCurrentInstance().proxy,
        s = t.ref(!1),
        a = t.computed(function () {
          return Boolean(
            i.protocolConfig.tilingList &&
              i.protocolConfig.tilingList.length > 0
          );
        }),
        g = t.computed(function () {
          return Boolean(
            i.protocolConfig.mergingList &&
              i.protocolConfig.mergingList.length > 0
          );
        }),
        u = t.computed(function () {
          return i.protocolConfig.modalProtocol;
        }),
        p = t.computed(function () {
          return Boolean(u.value && u.value.content);
        });
      return {
        isProtocolsDialogVisible: s,
        toProtocol: function (t) {
          t.url
            ? n.sdk.openUrlWithExtraWebview({ url: t.url })
            : c.$router.push({
                name: "VProtocol",
                query: o(o({}, t), {}, { name: "" }),
              });
        },
        showProtocolList: function () {
          s.value = !0;
        },
        handleChange: function () {
          l("check", !i.isProtocolCheck);
        },
        hasMergingList: g,
        hasTilingList: a,
        hasModalProtocol: p,
        modalProtocolConfig: u,
        showModalProtocol: function () {
          e.Dialog({
            title: u.value.name,
            message: u.value.content,
            messageType: u.value.messageType || "",
            confirmButtonText: u.value.confirmText || "同意",
            showCancelButton: u.value.cancelText,
            cancelButtonText: u.value.cancelText || "不同意",
            onConfirm: function () {
              l("check", !0);
            },
            onCancel: function () {
              l("check", !1);
            },
          });
        },
      };
    },
  };
Array ||
  (t.resolveComponent("ProtocolBarWrap") + t.resolveComponent("protocols"))();
var r = t._export_sfc(i, [
  [
    "render",
    function (o, e, n, i, r, l) {
      return t.e(
        {
          a: t.t(n.protocolConfig.signText),
          b: t.o(function () {
            return i.handleChange && i.handleChange.apply(i, arguments);
          }),
          c: i.hasTilingList || i.hasMergingList,
        },
        i.hasTilingList || i.hasMergingList
          ? t.e(
              { d: i.hasTilingList },
              i.hasTilingList
                ? {
                    e: t.f(n.protocolConfig.tilingList, function (o, e, r) {
                      return t.e(
                        {
                          a: t.t(o.name),
                          b: t.o(function (t) {
                            return i.toProtocol(o);
                          }, e),
                          c: e !== n.protocolConfig.tilingList.length - 1,
                        },
                        e !== n.protocolConfig.tilingList.length - 1
                          ? {}
                          : i.hasMergingList
                          ? { d: t.t(i.hasModalProtocol ? "，" : "和") }
                          : {},
                        { e: e }
                      );
                    }),
                    f: i.hasMergingList,
                  }
                : {},
              { g: i.hasMergingList },
              i.hasMergingList
                ? {
                    h: t.t(n.protocolConfig.allProtocolName || "全部文件"),
                    i: t.o(function () {
                      return (
                        i.showProtocolList &&
                        i.showProtocolList.apply(i, arguments)
                      );
                    }),
                  }
                : {}
            )
          : {},
        { j: i.hasModalProtocol },
        i.hasModalProtocol
          ? t.e(
              { k: i.hasMergingList || i.hasTilingList },
              (i.hasMergingList || i.hasTilingList, {}),
              {
                l: t.t(i.modalProtocolConfig.name),
                m: t.o(function () {
                  return (
                    i.showModalProtocol &&
                    i.showModalProtocol.apply(i, arguments)
                  );
                }),
              }
            )
          : {},
        { n: n.protocolConfig.signTextAppendix },
        n.protocolConfig.signTextAppendix
          ? {
              o: t.t(n.protocolConfig.signTextAppendix),
              p: t.o(function () {
                return i.handleChange && i.handleChange.apply(i, arguments);
              }),
            }
          : {},
        {
          q: t.o(i.handleChange),
          r: t.p({
            "is-check": n.isProtocolCheck,
            "hide-checkbox": n.protocolConfig.hideCheckBox,
            "use-wrap-style": n.protocolConfig.useWrapStyle,
          }),
          s: t.o(i.toProtocol),
          t: t.o(function (o) {
            return (i.isProtocolsDialogVisible = !1);
          }),
          v: t.o(function (t) {
            return o.$emit("check", !0);
          }),
          w: t.p({
            protocols: n.protocolConfig.mergingList,
            visible: i.isProtocolsDialogVisible,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-f3a1fc6b"],
]);
wx.createComponent(r);
