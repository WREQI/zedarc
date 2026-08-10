require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  t = ["wzqlight", "stock"],
  n = {
    props: {
      premote: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return {
        premoteNew: null,
        advConfig: null,
        advStyleConfig: null,
        advTextInfo: null,
        isShowAdv: !1,
        redPointContainer: "",
      };
    },
    watch: {
      premote: {
        immediate: !0,
        handler: function (n) {
          var o = this;
          n &&
            this.$nextTick(function () {
              var r, i, d, a, l;
              (o.premoteNew = n),
                n.ad_list &&
                  n.ad_list.length > 0 &&
                  (o.advConfig = n.ad_list[0]);
              var c = (
                (null == (r = n.ad_list) ? void 0 : r[0]) || {
                  component_param: "{}",
                }
              ).component_param;
              try {
                c = JSON.parse(c);
              } catch (e) {}
              var v = o.premoteNew.component_info;
              (v = "string" == typeof v ? JSON.parse(v || "{}") : v || {}),
                (o.advStyleConfig = JSON.parse(
                  null == (i = null == c ? void 0 : c.component_style)
                    ? void 0
                    : i.template
                )),
                (o.redPointContainer =
                  null == (d = c.component_info) ? void 0 : d.container),
                (o.advTextInfo =
                  null ==
                  (l = null == (a = e.StockBridge) ? void 0 : a.deliverySdk)
                    ? void 0
                    : l.deliveryFormatText(o.premoteNew)),
                t.includes("mpweapp") &&
                  o.addClickEventListener(o.redPointContainer),
                (o.isShowAdv = !0),
                o.reportShow();
            });
        },
      },
    },
    beforeDestroy: function () {
      if (t.includes("mpweapp")) {
        var e = this.getParentNode(this.redPointContainer);
        this.redPointContainer &&
          e &&
          e.parentNode.removeEventListener(
            "click",
            this.redPointAreaClickHandle
          );
      }
    },
    methods: {
      getParentNode: function (e) {
        var t = document.querySelector("".concat(e));
        if (t) return t.parentNode.parentNode;
      },
      addClickEventListener: function (e) {
        var t = this.getParentNode(e);
        t && t.addEventListener("click", this.clickAdv);
      },
      reportShow: function () {
        var t, n;
        null == (n = null == (t = e.StockBridge) ? void 0 : t.deliverySdk) ||
          n.deliveryMtaAndRport(this.premoteNew, "brow");
      },
      clickAdv: function () {
        var n, o;
        null == (o = null == (n = e.StockBridge) ? void 0 : n.deliverySdk) ||
          o.deliveryMtaAndRport(this.premoteNew, "click"),
          t.includes("mpweapp") && (this.$el.remove(), this.$destroy());
      },
    },
  },
  o = e._export_sfc(n, [
    [
      "render",
      function (t, n, o, r, i, d) {
        return e.e(
          { a: i.isShowAdv },
          (i.isShowAdv, {}),
          { b: i.isShowAdv },
          i.isShowAdv ? { c: e.t(i.advTextInfo.main_text) } : {}
        );
      },
    ],
    ["__scopeId", "data-v-02b53458"],
  ]);
wx.createComponent(o);
