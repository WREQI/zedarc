var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../common/vendor.js"),
  o = {
    inject: ["hqBridge"],
    components: {
      MatchText: function () {
        return "./MatchText.js";
      },
    },
    props: {
      list: {
        type: Array,
        require: !0,
        default: function () {
          return [];
        },
      },
      symbol: {
        type: String,
        require: !1,
        default: function () {
          return !1;
        },
      },
      market: { type: String, require: !1, default: "" },
    },
    data: function () {
      return { scrollTop: 0, dialog: { top: 0 } };
    },
    computed: {},
    mounted: function () {
      this.disableScroll(), this.$refs.eventcontainer, this.computePosition();
    },
    beforeDestroy: function () {
      this.recoverScroll();
    },
    deactivated: function () {
      this.$emit("onClose");
    },
    methods: {
      gotoDetail: function () {
        this.hqBridge.report("hq.kch_eventbottom.goeventpage_click"),
          this.$emit("goDetail"),
          this.$emit("onClose");
      },
      close: function () {
        this.$emit("onClose");
      },
      disableScroll: function () {
        var t = this,
          o = e.wx$1.createSelectorQuery();
        o.selectViewport().scrollOffset(),
          o.exec(function (o) {
            (t.scrollTop = o[0].scrollTop || 0),
              e.wx$1.pageScrollTo({ scrollTop: 0, duration: 0 }),
              t.hqBridge.busEmit("change-pulldown-status", !0);
          });
      },
      recoverScroll: function () {
        this.hqBridge.busEmit("change-pulldown-status", !1);
      },
      getRectForMP: function (t, o) {
        return new Promise(function (n) {
          e.wx$1
            .createSelectorQuery()
            .in(t)
            .select(o)
            .boundingClientRect(function (t) {
              n(t);
            })
            .exec();
        });
      },
      computePosition: function () {
        var o = this;
        this.$nextTick(function () {
          return (
            (n = o),
            null,
            (r = t().mark(function o() {
              var n, r, i, c;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (n = 0),
                          (t.next = 4),
                          this.getRectForMP(this.$parent, ".recom-bar")
                        );
                      case 4:
                        (r = t.sent),
                          (i = r.top),
                          (n = i),
                          (c = e.wx$1.getSystemInfoSync()),
                          c.pixelRatio,
                          (this.dialog.top = n),
                          (t.next = 13);
                        break;
                      case 11:
                        (t.prev = 11), (t.t0 = t.catch(0));
                      case 13:
                        this.dialog.ready = !0;
                      case 14:
                      case "end":
                        return t.stop();
                    }
                },
                o,
                this,
                [[0, 11]]
              );
            })),
            new Promise(function (t, e) {
              var o = function (t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    e(t);
                  }
                },
                i = function (t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    e(t);
                  }
                },
                c = function (e) {
                  return e.done
                    ? t(e.value)
                    : Promise.resolve(e.value).then(o, i);
                };
              c((r = r.apply(n, null)).next());
            })
          );
          var n, r;
        });
      },
    },
  };
Array || e.resolveComponent("MatchText")();
var n = e._export_sfc(o, [
  [
    "render",
    function (t, o, n, r, i, c) {
      return {
        a: e.f(n.list, function (t, o, n) {
          return {
            a: e.t(t.title),
            b: "b9bff72e-0-" + n,
            c: e.p({ textData: t }),
            d: t.ob_id,
          };
        }),
        b: e.o(function () {
          return c.gotoDetail && c.gotoDetail.apply(c, arguments);
        }, 2793),
        c: i.dialog.ready,
        d: i.dialog.top + "px",
        e: e.o(function () {}, 2794),
      };
    },
  ],
  ["__scopeId", "data-v-b9bff72e"],
]);
wx.createComponent(n);
