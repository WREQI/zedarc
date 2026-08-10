require("../../../app.js");
var e = require("../../../common/vendor.js"),
  r = require("../../../utils/navigator.js"),
  n = require("../../../utils/getPlatform.js"),
  o = require("../../../stores/app/useNavbar.js"),
  t = e.defineComponent({
    __name: "TransferBottomNav",
    props: {
      type: { type: String, required: !0 },
      showChangeCard: { type: Boolean, default: !1 },
      showFundRecord: { type: Boolean, default: !1 },
    },
    setup: function (t) {
      var a = t,
        u = e.getCurrentInstance().proxy,
        s = e.storeToRefs(o.useNavbarStore()).externalNavBar4Mp;
      function c(e) {
        u.$stat.click(
          "trade.transfer"
            .concat(a.type.toLowerCase(), ".nav_")
            .concat(e.toLowerCase())
        );
      }
      function d() {
        u.$router.push({ name: "TransferFundRecords" }), c("fundrecord");
      }
      function i() {
        u.$router.push({ name: "AccountCard" }), c("changebankcard");
      }
      function f() {
        n.getPlatform().isOEM
          ? u.$router.push({ name: "TransferHelp" })
          : setTimeout(function () {
              return r.hrefToKnowledge(75);
            }, 500),
          c("help");
      }
      return function (r, n) {
        return e.e(
          { a: t.showFundRecord },
          t.showFundRecord ? { b: e.o(d) } : {},
          { c: t.showChangeCard },
          t.showChangeCard ? { d: e.o(i) } : {},
          { e: e.o(f), f: e.unref(s) ? 1 : "" }
        );
      };
    },
  });
wx.createComponent(t);
