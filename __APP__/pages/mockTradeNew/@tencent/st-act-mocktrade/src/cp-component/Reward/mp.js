var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(i, c);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  n = require("../../../../../../../common/vendor.js");
require("../../utils/tool.js");
var r = {
  components: {
    reward: function () {
      return "../../../../../../asyncCom/@tencent/st-reward-core/components/reward.js";
    },
    lottieCom: function () {
      return "../../../../../../common/lottie.js";
    },
  },
  props: {
    rewardData: { type: Object, default: function () {} },
    h5userinfo: { type: Object, default: function () {} },
    srcsite: { type: String, default: "" },
  },
  options: { styleIsolation: "shared" },
  data: function () {
    return {
      lottie: {},
      styleForm: {},
      showFlowerLottie: !1,
      flowerLottie: null,
    };
  },
  methods: {
    getLottie: function (r) {
      return t(
        this,
        null,
        e().mark(function t() {
          var o = this;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (this.lottie = r),
                      this.$nextTick(function () {
                        n.wx$1
                          .createSelectorQuery()
                          .in(o)
                          .select("#lottie-canvas")
                          .node(function (e) {
                            if (e && e.node) {
                              var t = e.node,
                                n = t.getContext("2d");
                              (t.width = 650),
                                (t.height = 650),
                                o.lottie.setup(t),
                                r
                                  .loadAnimation({
                                    rendererSettings: { context: n },
                                    loop: !0,
                                    autoplay: !0,
                                    path: "https://st.gtimg.com/design/38dbf308b4720b13ef40356358b65399.json",
                                  })
                                  .setSpeed(1);
                            }
                          })
                          .exec();
                      });
                  case 1:
                  case "end":
                    return e.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    goTrade: function () {
      this.$emit("goTrade");
    },
    cancel: function () {
      this.$emit("cancel");
    },
  },
  mounted: function () {
    return t(
      this,
      null,
      e().mark(function t() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
              case "end":
                return e.stop();
            }
        }, t);
      })
    );
  },
};
Array || (n.resolveComponent("lottie-com") + n.resolveComponent("reward"))();
var o = n._export_sfc(r, [
  [
    "render",
    function (e, t, r, o, i, c) {
      return {
        a: n.o(c.getLottie, 5164),
        b: n.p({ rewardDesc: r.rewardData.reward_desc }),
        c: n.o(function () {
          return c.goTrade && c.goTrade.apply(c, arguments);
        }, 5165),
        d: n.o(function () {
          return c.cancel && c.cancel.apply(c, arguments);
        }, 5166),
      };
    },
  ],
  ["__scopeId", "data-v-f625f98d"],
]);
wx.createComponent(o);
