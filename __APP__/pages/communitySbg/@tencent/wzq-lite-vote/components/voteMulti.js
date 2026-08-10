var t = require("../../stock-community-base/utils/knife.js"),
  e = require("../../../../../common/vendor.js"),
  o = {
    inject: {
      stockBridge: {
        default: function () {
          return {};
        },
      },
    },
    props: {
      voteInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      pick: { type: Boolean, default: !1 },
    },
    components: {
      voteTitle: function () {
        return "./voteTitle.js";
      },
      voteCheckBox: function () {
        return "./voteCheckBox.js";
      },
    },
    data: function () {
      return { check: !1, pickId: [], hasChosen: !1 };
    },
    computed: {
      totalCnt: function () {
        var t, e;
        return (
          +(null == (e = null == (t = this.voteInfo) ? void 0 : t.vote_items)
            ? void 0
            : e
                .map(function (t) {
                  return t.item_count;
                })
                .reduce(function (t, e) {
                  return t + e;
                })) || 0
        );
      },
      chosenState: function () {
        return (!this.hasChosen || this.check) && this.voteInfo.status;
      },
      voteMultiple: function () {
        var t;
        return null == (t = this.voteInfo) ? void 0 : t.vote_multiple;
      },
      colorClass: function () {
        return "zxg-color";
      },
    },
    watch: {
      pick: {
        deep: !0,
        handler: function () {
          this.check = !1;
        },
        immediate: !0,
      },
      voteInfo: {
        deep: !0,
        handler: function (t) {
          var e;
          try {
            this.hasChosen =
              (null == (e = null == t ? void 0 : t.vote_items)
                ? void 0
                : e.filter(function (t) {
                    return t.item_chosen;
                  }).length) > 0;
          } catch (t) {}
        },
        immediate: !0,
      },
    },
    created: function () {
      var t, e;
      (this.hasChosen =
        (null == (e = null == (t = this.voteInfo) ? void 0 : t.vote_items)
          ? void 0
          : e.filter(function (t) {
              return t.item_chosen;
            }).length) > 0),
        (this.check = !1);
    },
    methods: {
      calcRate: function (t) {
        return this.totalCnt ? Math.round((100 * t) / this.totalCnt) : 0;
      },
      updateList: function () {
        this.$emit("updateList");
      },
      formatView: function (e) {
        return t.formatView(e);
      },
      pickVote: function () {
        var e;
        this.$emit("pickVote", {
          ids: t.isArray(this.pickId) ? this.pickId : [this.pickId],
          voteId: null == (e = this.voteInfo) ? void 0 : e.vote_id,
        });
      },
      setChosen: function (t) {
        var e,
          o,
          n,
          i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (this.voteInfo.vote_items =
          null == (e = this.voteInfo)
            ? void 0
            : e.vote_items.map(function (e, o) {
                var n = e;
                return (
                  i
                    ? (n.item_chosen = 0)
                    : o === t && (n.item_chosen = 0 === e.item_chosen ? 1 : 0),
                  n
                );
              })),
          (this.hasChosen =
            (null == (n = null == (o = this.voteInfo) ? void 0 : o.vote_items)
              ? void 0
              : n.filter(function (t) {
                  return t.item_chosen;
                }).length) > 0);
      },
      toggleCheck: function (t, e) {
        if (this.voteInfo.status && this.chosenState && !this.pick) {
          if (((this.check = !0), !this.voteMultiple))
            return (this.pickId = t), this.setChosen(e), void this.pickVote();
          this.pickId.includes(t)
            ? (this.pickId = this.pickId.filter(function (e) {
                return e !== t;
              }))
            : this.pickId.push(t),
            this.setChosen(e);
        }
      },
    },
  };
Array ||
  (e.resolveComponent("voteTitle") + e.resolveComponent("voteCheckBox"))();
var n = e._export_sfc(o, [
  [
    "render",
    function (t, o, n, i, c, s) {
      return e.e(
        {
          a: e.o(s.updateList, 5536),
          b: e.p({ voteInfo: n.voteInfo }),
          c: e.f(n.voteInfo.vote_items, function (t, o, i) {
            return e.e(
              {
                a: e.t(t.item_name),
                b: "fac5ab54-1-" + i,
                c: e.p({ value: !!t.item_chosen }),
                d: e.n(t.item_chosen && n.voteInfo.status ? "chosen" : ""),
                e: s.calcRate(t.item_count) + "%",
                f: t.item_chosen && n.voteInfo.status,
              },
              t.item_chosen && n.voteInfo.status
                ? {
                    g: e.n(s.colorClass),
                    h: e.t(t.item_name),
                    i: e.n(s.colorClass),
                  }
                : { j: e.t(t.item_name), k: e.n(s.colorClass) },
              {
                l: e.t(s.formatView(t.item_count)),
                m: e.t(s.calcRate(t.item_count)),
                n: o,
                o: e.o(
                  function (e) {
                    return s.toggleCheck(t.item_id, o, !t.item_chosen);
                  },
                  5537,
                  o
                ),
              }
            );
          }),
          d: e.n(n.pick ? "pick" : ""),
          e: e.n(s.chosenState && !n.pick ? "vote-show" : ""),
          f: e.n(s.colorClass),
          g: e.n(n.pick ? "pick" : ""),
          h: e.n(n.pick ? "pick" : ""),
          i: e.n(!s.chosenState || n.pick ? "vote-show" : ""),
          j: s.chosenState && s.voteMultiple,
        },
        s.chosenState && s.voteMultiple
          ? {
              k: e.n(s.colorClass),
              l: e.n(c.hasChosen ? "chosen" : ""),
              m: e.n(n.pick ? "pick" : ""),
              n: e.o(function () {
                return s.pickVote && s.pickVote.apply(s, arguments);
              }, 5538),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-fac5ab54"],
]);
wx.createComponent(n);
