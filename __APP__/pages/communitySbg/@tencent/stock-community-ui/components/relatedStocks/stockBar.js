var t = require("../../../stock-community-base/utils/api/index.js"),
  e = require("../../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  s = require("../../../../../../common/vendor.js"),
  o = {
    name: "stockBar",
    components: {},
    directives: { "observe-visibility": e.ObserveVisibility },
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
      name: { type: String, default: "" },
      code: { type: String, default: "" },
    },
    created: function () {
      var t;
      null == (t = this.stockPollPool) || t.$on(this.code, this.updateData);
    },
    data: function () {
      var t,
        e,
        s,
        o,
        n,
        i,
        l,
        r,
        c,
        a = this;
      return {
        curName:
          this.name ||
          (null !=
          (s =
            null ==
            (e = null == (t = this.stockPollPool) ? void 0 : t.data[this.code])
              ? void 0
              : e.name)
            ? s
            : ""),
        ratio:
          null !=
          (i =
            null ==
            (n = null == (o = this.stockPollPool) ? void 0 : o.data[this.code])
              ? void 0
              : n.updown)
            ? i
            : "",
        added:
          null !=
          (c =
            null ==
            (r = null == (l = this.stockPollPool) ? void 0 : l.data[this.code])
              ? void 0
              : r.added)
            ? c
            : null,
        visibilityConfig: {
          callback: function (t) {
            (a.isVisible = t), t && a.emitExpose();
          },
          intersection: { threshold: 0.5 },
        },
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
        var e, s, o;
        this.curName =
          t ||
          (null !=
          (o =
            null ==
            (s = null == (e = this.stockPollPool) ? void 0 : e.data[this.code])
              ? void 0
              : s.name)
            ? o
            : "");
      },
      code: {
        handler: function (t, e) {
          var s, o, n, i, l, r, c, a, u, d, h;
          t !== e &&
            (e &&
              (null == (s = this.stockPollPool) || s.$off(e, this.updateData)),
            t &&
              (null == (o = this.stockPollPool) || o.$on(t, this.updateData)),
            (this.curName =
              this.curName ||
              (null !=
              (l =
                null ==
                (i =
                  null == (n = this.stockPollPool) ? void 0 : n.data[this.code])
                  ? void 0
                  : i.name)
                ? l
                : "")),
            (this.ratio =
              null !=
              (a =
                null ==
                (c =
                  null == (r = this.stockPollPool) ? void 0 : r.data[this.code])
                  ? void 0
                  : c.updown)
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
        null !== this.added && this.$emit("expose", this.code, this.added);
      },
      goStockDetail: function () {
        this.$emit("godetail", this.code),
          t.api.goStockDetail({
            code: this.code,
            name: this.name,
            instance: this,
          });
      },
      toggleAdded: function () {
        var t;
        (null == (t = this.didAgreeUserAgreement) ? void 0 : t.value) ||
        "function" != typeof this.onCheckUserAgreementStatus
          ? null !== this.added &&
            (this.added ? this.delStock() : this.addStock())
          : this.onCheckUserAgreementStatus();
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
  n = s._export_sfc(o, [
    [
      "render",
      function (t, e, o, n, i, l) {
        return {
          a: l.plateIcon,
          b: s.t(i.curName),
          c: s.t(l.formatedRatio),
          d: s.n(l.ratioColor),
          e: s.o(function () {
            return l.toggleAdded && l.toggleAdded.apply(l, arguments);
          }, 5722),
          f: l.buttonIcon,
          g: s.o(function () {
            return l.goStockDetail && l.goStockDetail.apply(l, arguments);
          }, 5723),
        };
      },
    ],
    ["__scopeId", "data-v-d9557c5b"],
  ]);
wx.createComponent(n);
