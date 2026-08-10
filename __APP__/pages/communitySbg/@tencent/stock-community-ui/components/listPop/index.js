require("../../../stock-community-base/utils/knife.js");
var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "listPop",
    props: {
      title: { type: String },
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
    created: function () {},
  };
Array || e.resolveComponent("transition")();
var o = e._export_sfc(t, [
  [
    "render",
    function (t, o, n, i, s, a) {
      return e.e(
        { a: s.isShow },
        s.isShow
          ? {
              b: e.o(function () {
                return a.closeMask && a.closeMask.apply(a, arguments);
              }, 5830),
            }
          : {},
        { c: e.p({ name: "fade" }), d: s.isShow },
        s.isShow
          ? e.e(
              { e: n.title },
              n.title ? { f: e.t(n.title) } : {},
              {
                g: e.f(n.menuList, function (t, o, n) {
                  return e.e(
                    { a: e.t(t.showName || t.title), b: t.enableforward },
                    (t.enableforward, {}),
                    {
                      c: o,
                      d: e.o(
                        function (e) {
                          return a.tapMenu(t);
                        },
                        5831,
                        o
                      ),
                    }
                  );
                }),
                h: n.cancelMode,
              },
              n.cancelMode
                ? {
                    i: e.o(function () {
                      return a.hide && a.hide.apply(a, arguments);
                    }, 5832),
                  }
                : {}
            )
          : {},
        { j: e.p({ name: "animation" }), k: s.isIphoneX ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-9c163ced"],
]);
wx.createComponent(o);
