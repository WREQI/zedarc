var t = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  e = require("../../../../../common/vendor.js"),
  n = {
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
    },
    data: function () {
      return { rateWrap: 0 };
    },
    computed: {
      totalCnt: function () {
        var t,
          e,
          n,
          o = (null == (t = this.voteInfo) ? void 0 : t.vote_items.length) || 0;
        return (
          +(null == (n = null == (e = this.voteInfo) ? void 0 : e.vote_items)
            ? void 0
            : n
                .map(function (t) {
                  return t.item_count;
                })
                .reduce(function (t, e) {
                  return t + e;
                })) || o
        );
      },
      voteItems: function () {
        var t, e;
        return (
          (null == (e = null == (t = this.voteInfo) ? void 0 : t.vote_items)
            ? void 0
            : e.slice(0, 2)) || []
        );
      },
      rateStyle: function () {
        var t = this;
        return this.voteItems.map(function (e) {
          var n = e.item_count,
            o = t.calcRate(n),
            i = (t.rateWrap * o) / 100;
          return { width: (i < 13 ? 23 : i - 1) + "px" };
        });
      },
      chosenState: function () {
        var t,
          e,
          n =
            null == (e = null == (t = this.voteInfo) ? void 0 : t.vote_items)
              ? void 0
              : e
                  .map(function (t) {
                    return t.item_count;
                  })
                  .reduce(function (t, e) {
                    return t + e;
                  });
        return (!this.hasChosen && this.voteInfo.status) || !n;
      },
      hasChosen: function () {
        var t, e;
        return null == (e = null == (t = this.voteInfo) ? void 0 : t.vote_items)
          ? void 0
          : e.filter(function (t) {
              return t.item_chosen;
            }).length;
      },
    },
    created: function () {},
    watch: {
      chosenState: {
        immediate: !0,
        handler: function (t, e) {
          var n = this;
          t ||
            setTimeout(function () {
              n.updateRateWrapHeight();
            }, 100);
        },
      },
    },
    mounted: function () {
      this.updateRateWrapHeight();
    },
    methods: {
      calcRate: function (t) {
        return Math.round((100 * t) / this.totalCnt);
      },
      updateList: function () {
        this.$emit("updateList");
      },
      pickVote: function (t) {
        var e;
        this.$emit("pickVote", {
          ids: [t],
          voteId: null == (e = this.voteInfo) ? void 0 : e.vote_id,
        });
      },
      updateRateWrapHeight: function () {
        var n = this,
          o = e.wx$1.createSelectorQuery().in(this);
        o.select("#voteChosen").boundingClientRect(),
          o.select("#rateText0").boundingClientRect(),
          o.select("#rateText1").boundingClientRect(),
          o.exec(function (e) {
            var o = t(e, 3),
              i = o[0],
              r = o[1],
              u = o[2],
              c = (null == i ? void 0 : i.width) || 0,
              a = (null == r ? void 0 : r.width) || 0,
              s = (null == u ? void 0 : u.width) || 0;
            n.rateWrap = c - a - s - 14 || 0;
          });
      },
    },
  };
Array || e.resolveComponent("voteTitle")();
var o = e._export_sfc(n, [
  [
    "render",
    function (t, n, o, i, r, u) {
      return e.e(
        {
          a: e.o(u.updateList, 5539),
          b: e.p({ voteInfo: o.voteInfo }),
          c: u.chosenState,
        },
        u.chosenState
          ? {
              d: e.f(u.voteItems, function (t, n, o) {
                return {
                  a: e.t(t.item_name),
                  b: n,
                  c: e.n(n ? "right" : "left"),
                  d: e.o(
                    function (e) {
                      return u.pickVote(t.item_id, n);
                    },
                    5540,
                    n
                  ),
                };
              }),
              e: e.n(o.pick ? "pick" : ""),
              f: e.n(u.chosenState ? "vote-show" : ""),
            }
          : {
              g: e.f(u.voteItems, function (t, n, i) {
                return e.e(
                  { a: t.item_chosen && o.voteInfo.status },
                  (t.item_chosen && o.voteInfo.status, {}),
                  { b: t.item_chosen && o.voteInfo.status },
                  t.item_chosen && o.voteInfo.status
                    ? { c: e.t(t.item_name) }
                    : { d: e.t(t.item_name) },
                  { e: n, f: e.n(1 === n ? "right" : "left") }
                );
              }),
              h: e.f(u.voteItems, function (t, n, o) {
                return {
                  a: n,
                  b: e.n(1 === n ? "right" : "left"),
                  c: u.rateStyle[n].width,
                };
              }),
              i: e.n(o.pick ? "pick" : ""),
              j: r.rateWrap + "px",
              k: e.f(u.voteItems, function (t, n, o) {
                return {
                  a: e.t(u.calcRate(t.item_count)),
                  b: e.n(1 === n ? "right" : "left"),
                  c: "rateText".concat(n),
                  d: n,
                };
              }),
              l: e.n(o.pick ? "pick" : ""),
              m: e.n(u.chosenState ? "" : "vote-show"),
            }
      );
    },
  ],
  ["__scopeId", "data-v-eedeec11"],
]);
wx.createComponent(o);
