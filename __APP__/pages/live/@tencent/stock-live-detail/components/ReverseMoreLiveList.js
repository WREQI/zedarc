var e = require("../../../../../common/vendor.js"),
  n = {}.IS_ZXG,
  o = null == navigator ? void 0 : navigator.userAgent,
  i = {
    name: "ReverseMoreLiveList",
    components: {
      LiveCardSmall: function () {
        return "./LiveCardSmall.js";
      },
    },
    props: {
      hasSubscribed: Boolean,
      showSubscribeBanner: Boolean,
      liveSubjectList: Array,
      theme: { type: String, default: "blue" },
    },
    data: function () {
      return {
        isAndroid: /\bAndroid([^;]+)/.test(o),
        safeBottom: (null == window ? void 0 : window.__safeAreaBottom__) || 24,
        isAPP: n,
      };
    },
    computed: {},
    created: function () {},
    methods: {
      onReverseMoreLiveClose: function () {
        this.$emit("onReverseMoreLiveClose");
      },
      nothingHappened: function () {},
      closeSubscribeBar: function () {
        this.$emit("closeSubscribeBar");
      },
      onSubscribe: function () {
        this.$emit("onSubscribe");
      },
      handleTapLiveCard: function (e) {
        this.$emit("tapLiveCard", e);
      },
      onReserveOne: function (e) {
        this.$emit("onReserve", e);
      },
    },
  };
Array || e.resolveComponent("LiveCardSmall")();
var r = e._export_sfc(i, [
  [
    "render",
    function (n, o, i, r, t, s) {
      return e.e(
        {
          a: e.n(t.isAndroid ? "android" : ""),
          b: e.o(function () {
            return (
              s.onReverseMoreLiveClose &&
              s.onReverseMoreLiveClose.apply(s, arguments)
            );
          }, 5176),
          c: e.o(function () {}, 5177),
          d: i.showSubscribeBanner,
        },
        i.showSubscribeBanner
          ? {
              e: e.n(t.isAPP ? "app" : ""),
              f: e.n(t.isAndroid ? "android" : ""),
              g: e.n(t.isAPP ? "app" : ""),
              h: e.o(function () {
                return s.onSubscribe && s.onSubscribe.apply(s, arguments);
              }, 5178),
              i: e.o(function () {
                return (
                  s.closeSubscribeBar && s.closeSubscribeBar.apply(s, arguments)
                );
              }, 5179),
            }
          : {},
        {
          j: e.f(i.liveSubjectList, function (n, o, r) {
            return {
              a: e.o(s.handleTapLiveCard, 5180, n.id),
              b: e.o(
                function (e) {
                  return s.onReserveOne(n);
                },
                5181,
                n.id
              ),
              c: "5433b6d4-0-" + r,
              d: e.p({ "live-data": n, theme: i.theme }),
              e: n.id,
              f: e.n(0 === o ? "first-item" : ""),
            };
          }),
          k: "".concat(t.safeBottom, "px"),
          l: e.n(i.theme),
          m: e.o(function () {
            return s.nothingHappened && s.nothingHappened.apply(s, arguments);
          }, 5182),
        }
      );
    },
  ],
  ["__scopeId", "data-v-5433b6d4"],
]);
wx.createComponent(r);
