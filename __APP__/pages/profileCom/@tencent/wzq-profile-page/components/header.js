require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../Index.js"),
  n = require("../hooks/useJumpDetail.js"),
  o = require("../../../../../common/vendor.js"),
  r = {
    components: {
      qianjiRedPointPlaceholder: function () {
        return "../../../../asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/qianjiRedPointPlaceHolderMp.js";
      },
    },
    options: { styleIsolation: "shared" },
    props: {
      userName: { type: String, default: "" },
      premoteMixin: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function () {
      var r = n.useJumpDetail().jumpDetail,
        t = o.inject("stockBridge"),
        i = o.computed(function () {
          return ["mpweapp", "stock"].includes(null == t ? void 0 : t.SHELL);
        });
      return {
        handleMessageClick: function () {
          r(e.commonFuncConfig.NEW_MESSAGE_CONFIG);
        },
        handleKefuClick: function () {
          r(e.commonFuncConfig.AI_ICON_CONFIG);
        },
        stockBridge: t,
        showKefu: i,
      };
    },
  };
Array || o.resolveComponent("qianji-red-point-placeholder")();
var t = o._export_sfc(r, [
  [
    "render",
    function (e, n, r, t, i, a) {
      return o.e(
        {
          a: o.t(r.userName ? r.userName + "，" : "尊敬的用户，"),
          b: t.showKefu,
        },
        t.showKefu
          ? {
              c: o.o(function () {
                return (
                  t.handleKefuClick && t.handleKefuClick.apply(t, arguments)
                );
              }, 2370),
            }
          : {},
        {
          d: o.n("mp" !== t.stockBridge.ENV ? "profile-redpoint-h5" : ""),
          e: o.p({
            name: "prorfile-page-message-redpoint",
            minaredpoint: r.premoteMixin.RedPoint,
          }),
          f: o.o(function () {
            return (
              t.handleMessageClick && t.handleMessageClick.apply(t, arguments)
            );
          }, 2371),
        }
      );
    },
  ],
  ["__scopeId", "data-v-9767aea8"],
]);
wx.createComponent(t);
