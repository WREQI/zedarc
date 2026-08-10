require("../../app.js");
var e = require("../../common/vendor.js");
require("../../service/sdk/lib/api.js");
var t = require("../../service/sdk/platform/mp-weixin.js");
Math || (o + n + e.unref(r))();
var o = function () {
    return "../../bizs/protocol/rich-text-protocol/index.js";
  },
  n = function () {
    return "../../bizs/protocol/loading-provider/index.js";
  },
  r = function () {
    return "../../common/components/Dialog/Dialog.js";
  },
  i = e.defineComponent({
    __name: "ProtocolDialog",
    props: {
      protocols: { default: [] },
      visible: { default: !1 },
      title: { default: "协议签署" },
      previewContent: { default: !1 },
      prefixContent: { default: "" },
      confirmButtonText: { default: "同意并签署" },
      showCancelButton: { default: !0 },
    },
    emits: ["confirm", "cancel"],
    setup: function (o, n) {
      var r,
        i = n.emit,
        c = null == (r = e.getCurrentInstance()) ? void 0 : r.proxy;
      function u() {
        i("confirm");
      }
      function a() {
        i("cancel");
      }
      return function (o, n) {
        return e.e(
          { a: !o.previewContent },
          o.previewContent
            ? {
                d: e.f(o.protocols, function (t, o, n) {
                  return e.e(
                    { a: t.key },
                    t.key
                      ? {
                          b: "9951543a-2-" + n + ",9951543a-1",
                          c: e.p({ "protocol-key": t.key }),
                        }
                      : {},
                    { d: o }
                  );
                }),
              }
            : {
                b: e.t(o.prefixContent),
                c: e.f(o.protocols, function (o, n, r) {
                  return e.e(
                    { a: o.name },
                    o.name
                      ? {
                          b: e.t(o.name),
                          c: e.o(function (e) {
                            return (function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {},
                                o = e.url,
                                n = void 0 === o ? "" : o,
                                r = e.key,
                                i = void 0 === r ? "" : r;
                              n
                                ? t.sdk.openUrlWithExtraWebview({ url: n })
                                : i &&
                                  c.$router.push({
                                    name: "VProtocol",
                                    query: { key: i },
                                  });
                            })(o);
                          }, n),
                        }
                      : {},
                    { d: n }
                  );
                }),
              },
          {
            e: o.previewContent ? 1 : "",
            f: e.o(u),
            g: e.o(a),
            h: e.p({
              visible: o.visible,
              title: o.title,
              "show-cancel-button": o.showCancelButton,
              "confirm-button-text": o.confirmButtonText,
            }),
          }
        );
      };
    },
  }),
  c = e._export_sfc(i, [["__scopeId", "data-v-9951543a"]]);
wx.createComponent(c);
