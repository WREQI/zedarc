var e = require("../../../../../../../../common/vendor.js"),
  n = function (e, n) {
    var t = {
      title: "打开微证券",
      desc: "点击前往微证券小程序查看",
      miniPath: encodeURIComponent(e),
      appId: "wx4eff699c2e813ab6",
      btnBackGroundColor: "#2470EB",
      logo: "https://wzq.gtimg.com/resources/images/zxg_logo.png",
    };
    return "/pages/lct_web/index?varStorageStr=".concat(
      encodeURIComponent(JSON.stringify(t)),
      "&mini_path=jv_miniprogram"
    );
  },
  t = function (e, t) {
    var i = 0;
    t && (i = 1e3),
      setTimeout(function () {
        var i, o;
        null ==
          (o =
            null == (i = null == window ? void 0 : window.__UNION_BRIDGE__)
              ? void 0
              : i.sdk) ||
          o.navigateTo({
            url: n(e),
            success: function () {
              t && history.go(-2);
            },
          });
      }, i);
  },
  i =
    "mp" === e.StockBridge.ENV
      ? { IS_WEIXIN: !1, IS_MINA: !1 }
      : e.dist.detect().env,
  o = i.IS_WEIXIN,
  a = i.IS_MINA,
  r = "/pages/index/index",
  l = {
    props: {
      username: { type: String, default: "\tgh_71365cb35ad5" },
      path: { type: String, default: r },
      premote: { type: Object, default: null },
    },
    data: function () {
      return {
        domId: "",
        isWeixin: o,
        isMiniprogram: a,
        jumpWzqMpViaLctTranferPage: t,
        enable: !1,
        deliveryLink: r,
      };
    },
    watch: {
      premote: {
        immediate: !0,
        handler: function (e) {
          var n, t, i;
          if (e) {
            var o,
              a =
                ((null == e ? void 0 : e.ad_list) &&
                  (null == e ? void 0 : e.ad_list.length) > 0 &&
                  (null == e ? void 0 : e.ad_list[0])) ||
                {},
              r = (null == a ? void 0 : a.component_param)
                ? JSON.parse(null == a ? void 0 : a.component_param)
                : {},
              l = (null == r ? void 0 : r.component_content) || {};
            (o = {
              target_link_type:
                l.target_link_type ||
                (null == (n = null == a ? void 0 : a.links)
                  ? void 0
                  : n.target_link_type),
              target_link:
                l.target_link ||
                (null == (t = null == a ? void 0 : a.links)
                  ? void 0
                  : t.target_link),
              target_link_ext:
                l.target_link_ext ||
                (null == (i = null == a ? void 0 : a.links)
                  ? void 0
                  : i.target_link_ext),
            }),
              (this.enable = 12 === o.target_link_type),
              (this.deliveryLink = o.target_link);
          }
        },
      },
    },
    methods: {
      handleLctXcxJump: function () {
        t(this.deliveryLink);
      },
    },
    mounted: function () {
      var e = this;
      this.$nextTick(function () {
        var n = document.getElementById(e.domId);
        n &&
          n.addEventListener("launch", function (n) {
            e.$emit("launch");
          });
      });
    },
    created: function () {
      this.domId =
        Math.random().toString(36).substr(3, 6) + new Date().getTime();
    },
  };
Array || e.resolveComponent("wx-open-launch-weapp")();
var d = e._export_sfc(l, [
  [
    "render",
    function (n, t, i, o, a, r) {
      return e.e(
        { a: a.enable },
        a.enable
          ? e.e(
              { b: a.isWeixin && !a.isMiniprogram },
              a.isWeixin && !a.isMiniprogram
                ? {
                    c: a.domId,
                    d: e.p({
                      id: a.domId,
                      username: i.username,
                      path: a.deliveryLink,
                    }),
                  }
                : a.isMiniprogram
                ? {
                    f: e.o(function () {
                      return (
                        r.handleLctXcxJump &&
                        r.handleLctXcxJump.apply(r, arguments)
                      );
                    }, 2635),
                  }
                : {},
              { e: a.isMiniprogram }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-8b43dc32"],
]);
wx.createComponent(d);
