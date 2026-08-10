var e = require("../../../../stock-community-base/utils/knife.js"),
  t = require("../../../../../../../common/vendor.js"),
  n = e.sdk.getSystemInfo,
  o = {
    name: "listPop",
    props: {
      title: { type: String, default: null },
      menuList: {
        type: Array,
        default: function () {
          return [{ showName: "菜单1", onTapMenu: function () {} }];
        },
      },
      cancelMode: { type: Boolean, default: !0 },
      closeOnClickModal: { type: Boolean, default: !0 },
    },
    data: function () {
      return { isIphoneX: !1, isShow: !1 };
    },
    mounted: function () {
      var e = this;
      setTimeout(function () {
        e.show();
      }, 350);
    },
    methods: {
      show: function () {
        this.isShow = !0;
      },
      hide: function () {
        (this.isShow = !1), this.$emit("closeComplaintPop");
      },
      closeMask: function () {
        this.closeOnClickModal &&
          ((this.isShow = !1), this.$emit("closeComplaintPop"));
      },
      tapMenu: function (e) {
        e.onTapMenu && e.onTapMenu(e),
          (this.isShow = !1),
          this.$emit("closeComplaintPop");
      },
    },
    created: function () {
      var e = this;
      n().then(function (t) {
        e.isIphoneX = t.isIphoneX;
      });
    },
  };
Array || t.resolveComponent("transition")();
var i = t._export_sfc(o, [
  [
    "render",
    function (e, n, o, i, s, a) {
      return t.e(
        { a: s.isShow },
        s.isShow
          ? {
              b: t.o(function () {
                return a.closeMask && a.closeMask.apply(a, arguments);
              }, 5544),
            }
          : {},
        { c: t.p({ name: "fade" }), d: s.isShow },
        s.isShow
          ? t.e(
              { e: o.title },
              o.title ? { f: t.t(o.title) } : {},
              {
                g: t.f(o.menuList, function (e, n, o) {
                  return t.e(
                    { a: t.t(e.showName || e.title), b: e.enableforward },
                    (e.enableforward, {}),
                    {
                      c: n,
                      d: t.o(
                        function (t) {
                          return a.tapMenu(e);
                        },
                        5545,
                        n
                      ),
                    }
                  );
                }),
                h: o.cancelMode,
              },
              o.cancelMode
                ? {
                    i: t.o(function () {
                      return a.hide && a.hide.apply(a, arguments);
                    }, 5546),
                  }
                : {}
            )
          : {},
        { j: t.p({ name: "animation" }), k: s.isIphoneX ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-4394e6c7"],
]);
wx.createComponent(i);
