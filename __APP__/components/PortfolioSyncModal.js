var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../api/zxgApi.js"),
  t = require("../common/vendor.js"),
  o = {
    components: {
      LayerModal: function () {
        return "./LayerModal/index.js";
      },
    },
    props: { value: { type: Boolean, default: !1 } },
    data: function () {
      return {
        initDesc:
          "由于您使用过腾讯微证券网页版，为方便您同步查看网页版添加的自选，腾讯微证券申请获取您的自选授权信息，同意收集您的自选数据，用于在自选股小程序版同步展示。如您不同意授权，则自选股小程序将不会同步展示您在小程序中的自选数据。",
      };
    },
    methods: {
      signChooseSync: function (e) {
        n.zxgApi.setSyncStatus({ status: e, reauth: 1 });
      },
      onConfirm: function () {
        return (
          (n = this),
          null,
          (t = e().mark(function n() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      this.$emit("input", !1), this.signChooseSync("1");
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this
            );
          })),
          new Promise(function (e, o) {
            var r = function (e) {
                try {
                  a(t.next(e));
                } catch (e) {
                  o(e);
                }
              },
              i = function (e) {
                try {
                  a(t.throw(e));
                } catch (e) {
                  o(e);
                }
              },
              a = function (n) {
                return n.done
                  ? e(n.value)
                  : Promise.resolve(n.value).then(r, i);
              };
            a((t = t.apply(n, null)).next());
          })
        );
        var n, t;
      },
      onCancel: function () {
        this.$emit("input", !1), this.signChooseSync("0");
      },
    },
  };
Array || t.resolveComponent("layer-modal")();
var r = t._export_sfc(o, [
  [
    "render",
    function (e, n, o, r, i, a) {
      return {
        a: t.t(i.initDesc),
        b: t.o(a.onConfirm, 1359),
        c: t.o(a.onCancel, 1360),
        d: t.p({
          title: "欢迎使用",
          "cancel-button-text": "不同意",
          "confirm-button-text": "同意并继续",
          visible: o.value,
          "has-bottom-bar": !0,
          "is-agree-privacy-authorization": !0,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-d6b4be3c"],
]);
wx.createComponent(r);
