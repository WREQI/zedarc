var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../stock-community-base/utils/api/index.js"),
  o = require("../../../../stock-base/visibilityObserver/index.js"),
  n = require("../../../../../../../common/vendor.js"),
  s = {
    name: "stockBar",
    options: { styleIsolation: "shared" },
    components: {},
    inject: {
      stockPollPool: { value: "stockPollPool", default: null },
      didAgreeUserAgreement: {
        default: function () {
          return { value: !0 };
        },
      },
      onCheckUserAgreementStatus: {
        default: function () {
          return function () {};
        },
      },
    },
    props: {
      index: { type: String, default: "" },
      name: { type: String, default: "" },
      code: { type: String, default: "" },
    },
    created: function () {
      var t;
      null == (t = this.stockPollPool) || t.$on(this.code, this.updateData);
    },
    setup: function (t, e) {
      e.emit;
      var s = n.getCurrentInstance().proxy || n.getCurrentInstance(),
        i = null,
        r = !1;
      n.onMounted(function () {
        i = new o.VisibilityObserver(
          "#index-".concat(t.code),
          {
            once: !0,
            callback: function (t, e) {
              !r && t && s.emitExpose();
            },
            intersection: { threshold: 0 },
          },
          { context: s }
        );
      }),
        n.onUnmounted(function () {
          var t, e;
          (r = !0),
            null ==
              (e =
                null == (t = null == i ? void 0 : i.observer)
                  ? void 0
                  : t.disconnect) || e.call(t),
            (i = null);
        });
    },
    data: function () {
      var t, e, o, n, s, i, r, c, l;
      return {
        curName:
          this.name ||
          (null !=
          (o =
            null ==
            (e = null == (t = this.stockPollPool) ? void 0 : t.data[this.code])
              ? void 0
              : e.name)
            ? o
            : ""),
        ratio:
          null !=
          (i =
            null ==
            (s = null == (n = this.stockPollPool) ? void 0 : n.data[this.code])
              ? void 0
              : s.updown)
            ? i
            : "",
        added:
          null !=
          (l =
            null ==
            (c = null == (r = this.stockPollPool) ? void 0 : r.data[this.code])
              ? void 0
              : c.added)
            ? l
            : null,
        isVisible: !1,
      };
    },
    beforeDestroy: function () {
      var t;
      this.code &&
        (null == (t = this.stockPollPool) ||
          t.$off(this.code, this.updateData));
    },
    watch: {
      name: function (t) {
        var e, o, n;
        this.curName =
          t ||
          (null !=
          (n =
            null ==
            (o = null == (e = this.stockPollPool) ? void 0 : e.data[this.code])
              ? void 0
              : o.name)
            ? n
            : "");
      },
      code: {
        handler: function (t, e) {
          var o, n, s, i, r, c, l, a, u, d, h;
          t !== e &&
            (e &&
              (null == (o = this.stockPollPool) || o.$off(e, this.updateData)),
            t &&
              (null == (n = this.stockPollPool) || n.$on(t, this.updateData)),
            (this.curName =
              this.curName ||
              (null !=
              (r =
                null ==
                (i =
                  null == (s = this.stockPollPool) ? void 0 : s.data[this.code])
                  ? void 0
                  : i.name)
                ? r
                : "")),
            (this.ratio =
              null !=
              (a =
                null ==
                (l =
                  null == (c = this.stockPollPool) ? void 0 : c.data[this.code])
                  ? void 0
                  : l.updown)
                ? a
                : ""),
            (this.added =
              null !=
              (h =
                null ==
                (d =
                  null == (u = this.stockPollPool) ? void 0 : u.data[this.code])
                  ? void 0
                  : d.added)
                ? h
                : null));
        },
      },
    },
    computed: {
      plateIcon: function () {
        return (
          {
            sz: "https://wzq.gtimg.com/resources/shy/news/roundangle/sz.png",
            sh: "https://wzq.gtimg.com/resources/shy/news/roundangle/sh.png",
            hk: "https://wzq.gtimg.com/resources/shy/news/roundangle/hk.png",
            us: "https://wzq.gtimg.com/resources/shy/news/roundangle/us.png",
            uk: "https://wzq.gtimg.com/resources/shy/news/roundangle/uk.png",
            cnjj: "https://wzq.gtimg.com/resources/shy/news/roundangle/cnjj.png",
            kc: "https://wzq.gtimg.com/resources/shy/news/roundangle/kc.png",
            zq: "https://wzq.gtimg.com/resources/shy/news/roundangle/zq.png",
            nq: "https://wzq.gtimg.com/resources/shy/news/roundangle/nq.png",
            jj: "https://wzq.gtimg.com/resources/shy/news/roundangle/cwjj.png",
            pt: "https://wzq.gtimg.com/resources/shy/news/roundangle/bk.png",
            fu: "https://wzq.gtimg.com/resources/shy/news/roundangle/ft.png",
            ft: "https://wzq.gtimg.com/resources/shy/news/roundangle/ft.png",
            fx: "https://wzq.gtimg.com/resources/shy/news/roundangle/ft.png",
            hd: "https://wzq.gtimg.com/resources/shy/news/roundangle/ft.png",
            bj: "https://wzq.gtimg.com/resources/shy/news/roundangle/bj.png",
            cyb: "https://wzq.gtimg.com/resources/shy/news/roundangle/cyb.png",
            "zs-hs":
              "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-hs.png",
            "zs-hk":
              "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-hk.png",
            "zs-us":
              "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-us.png",
            "zs-uk":
              "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-uk.png",
            "zs-nq":
              "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-nq.png",
            "zs-hq":
              "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-hq.png",
            cs: "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-hq.png",
          }[this.code.slice(0, 2).toLowerCase()] || ""
        );
      },
      buttonIcon: function () {
        var t;
        return null != (t = this.added) && t
          ? "https://st.gtimg.com/design/6e65af41d56ffff4455112e25167aec6.png"
          : "https://st.gtimg.com/design/7c5e4d2016018f46f67ce3b71c0f0ff6.png";
      },
      formatedRatio: function () {
        var t = parseFloat(this.ratio);
        return isNaN(t)
          ? ""
          : "".concat(t > 0 ? "+" : "").concat(this.ratio, "%");
      },
      ratioColor: function () {
        var t = parseFloat(this.ratio);
        return isNaN(t)
          ? "gray-ratio"
          : t > 0
          ? "red-ratio"
          : t < 0
          ? "green-ratio"
          : "gray-ratio";
      },
    },
    methods: {
      updateData: function (t) {
        this.curName || (this.curName = t.name), (this.ratio = t.updown);
        var e = this.added;
        (this.added = t.added),
          null === e && this.isVisible && this.emitExpose();
      },
      emitExpose: function () {
        var t, e;
        (null == (e = null == (t = this.stockPollPool) ? void 0 : t.data)
          ? void 0
          : e[this.code]) && this.$emit("expose", this.code, this.added);
      },
      goStockDetail: function () {
        this.$emit("godetail", this.code),
          e.api.goStockDetail({
            code: this.code,
            name: this.name,
            instance: this,
          });
      },
      toggleAdded: function () {
        return (
          (e = this),
          null,
          (o = t().mark(function e() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      this.didAgreeUserAgreement.value
                        ? null !== this.added &&
                          (this.added ? this.delStock() : this.addStock())
                        : this.onCheckUserAgreementStatus();
                    case 1:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })),
          new Promise(function (t, n) {
            var s = function (t) {
                try {
                  r(o.next(t));
                } catch (t) {
                  n(t);
                }
              },
              i = function (t) {
                try {
                  r(o.throw(t));
                } catch (t) {
                  n(t);
                }
              },
              r = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(s, i);
              };
            r((o = o.apply(e, null)).next());
          })
        );
        var e, o;
      },
      addStock: function () {
        var t;
        null == (t = this.stockPollPool) || t.operateStock(this.code, !0),
          this.$emit("addstock", this.code);
      },
      delStock: function () {
        var t;
        null == (t = this.stockPollPool) || t.operateStock(this.code, !1),
          this.$emit("removestock", this.code);
      },
    },
  },
  i = n._export_sfc(s, [
    [
      "render",
      function (t, e, o, s, i, r) {
        return {
          a: r.plateIcon,
          b: n.t(i.curName),
          c: n.t(r.formatedRatio),
          d: n.n(r.ratioColor),
          e: n.o(function () {
            return r.toggleAdded && r.toggleAdded.apply(r, arguments);
          }, 4309),
          f: r.buttonIcon,
          g: n.n("index-".concat(o.code)),
          h: "index-".concat(o.code),
          i: n.o(function () {
            return r.goStockDetail && r.goStockDetail.apply(r, arguments);
          }, 4310),
        };
      },
    ],
    ["__scopeId", "data-v-238e5eda"],
  ]);
wx.createComponent(i);
