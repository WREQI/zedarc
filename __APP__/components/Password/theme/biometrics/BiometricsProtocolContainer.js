require("../../../../app.js");
var e = require("../../../../stores/app/useNavbar.js"),
  o = require("../../../../common/vendor.js"),
  t = {
    components: {
      Popup: function () {
        return "../../../../common/components/Popup/index.js";
      },
    },
    props: {
      showBack: { type: Boolean, default: !1 },
      showClose: { type: Boolean, default: !1 },
      showButton: { type: Boolean, default: !0 },
      title: { type: String, required: !0 },
    },
    setup: function (t, n) {
      var r = n.emit,
        s = e.useNavbarStore();
      return {
        refuse: function () {
          r("refuse");
        },
        agree: function () {
          r("agree");
        },
        close: function () {
          r("close");
        },
        back: function () {
          r("back");
        },
        isNavExist: o.computed(function () {
          return s.shownav || s.externalNavBar;
        }),
      };
    },
  };
Array || o.resolveComponent("popup")();
var n = o._export_sfc(t, [
  [
    "render",
    function (e, t, n, r, s, a) {
      return o.e(
        { a: n.showBack },
        n.showBack
          ? {
              b: o.o(function () {
                return r.back && r.back.apply(r, arguments);
              }),
            }
          : {},
        { c: o.t(n.title), d: n.showClose },
        n.showClose
          ? {
              e: o.o(function () {
                return r.close && r.close.apply(r, arguments);
              }),
            }
          : {},
        { f: n.showButton },
        n.showButton
          ? {
              g: o.o(function () {
                return r.refuse && r.refuse.apply(r, arguments);
              }),
              h: o.o(function () {
                return r.agree && r.agree.apply(r, arguments);
              }),
            }
          : {},
        {
          i: o.n(r.isNavExist ? "bio-protocol-navwrapper" : ""),
          j: o.p({
            show: !0,
            center: !1,
            mask: !0,
            position: "bottom",
            "mask-closable": !1,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-35690106"],
]);
wx.createComponent(n);
