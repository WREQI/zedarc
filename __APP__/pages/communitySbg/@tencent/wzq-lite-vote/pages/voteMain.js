var t = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  e = require("../../stock-community-ui/utils/service/index.js"),
  o = require("../../../../../common/vendor.js"),
  i = {
    components: {
      voteMulti: function () {
        return "../components/voteMulti.js";
      },
      voteTwo: function () {
        return "../components/voteTwo.js";
      },
    },
    props: {
      voteInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      topicId: { type: String, default: "" },
      voteId: { type: String, default: "" },
      innerWindow: { type: Boolean, default: !1 },
    },
    data: function () {
      return { pick: !1, queryData: {} };
    },
    computed: {},
    watch: {
      voteInfo: {
        deep: !0,
        handler: function (t, e) {
          this.queryData = t;
        },
        immediate: !0,
      },
      voteId: {
        handler: function (t, e) {
          t && e && t !== e && this.queryVote(t);
        },
        immediate: !0,
      },
    },
    created: function () {
      this.voteId
        ? this.queryVote(this.voteId)
        : (this.queryData = this.voteInfo);
    },
    activated: function () {
      this.voteId && this.queryVote(this.voteId);
    },
    methods: {
      updateList: function () {
        this.$emit("updateList");
      },
      queryVote: function (o) {
        var i = this;
        e.queryVote({ vote_id: o }).then(function () {
          var e,
            o,
            n,
            a,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          (null == (n = r.data) ? void 0 : n.vote_info.length) &&
            (null == (a = r.data) ? void 0 : a.vote_info[0]) &&
            ((e = r.data.vote_info), (o = t(e, 1)), (i.queryData = o[0]));
        });
      },
      pickVote: function (t) {
        var o = this,
          i = t.ids,
          n = void 0 === i ? [] : i,
          a = t.voteId;
        n.length &&
          e
            .pickVote({
              vote_id: a,
              vote_items: JSON.stringify(n),
              vote_type: 1,
            })
            .then(function () {
              var t,
                e,
                i,
                a,
                r,
                u =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              if (
                null ==
                (i =
                  null ==
                  (e =
                    null == (t = null == u ? void 0 : u.data)
                      ? void 0
                      : t.vote_info)
                    ? void 0
                    : e.vote_items)
                  ? void 0
                  : i.length
              ) {
                (o.pick = !0), (o.queryData = u.data.vote_info);
                var v =
                    1 === n.length &&
                    (null ==
                    (r = null == (a = o.queryData) ? void 0 : a.vote_items)
                      ? void 0
                      : r.filter(function (t) {
                          return n[0] === t.item_id;
                        })[0].item_name),
                  d =
                    n.length > 1
                      ? "说说你支持这".concat(n.length, "项的原因吧~")
                      : "说说你投票".concat(v, "的原因吧~");
                o.$emit("pickVote", d);
              }
            });
      },
    },
  };
Array || (o.resolveComponent("voteMulti") + o.resolveComponent("voteTwo"))();
var n = o._export_sfc(i, [
  [
    "render",
    function (t, e, i, n, a, r) {
      return o.e(
        { a: a.queryData.vote_items && a.queryData.vote_items.length },
        a.queryData.vote_items && a.queryData.vote_items.length
          ? o.e(
              { b: a.queryData.vote_items.length > 2 },
              a.queryData.vote_items.length > 2
                ? {
                    c: o.o(r.updateList, 5292),
                    d: o.o(r.pickVote, 5293),
                    e: o.p({ pick: a.pick, "vote-info": a.queryData }),
                  }
                : {
                    f: o.o(r.updateList, 5294),
                    g: o.o(r.pickVote, 5295),
                    h: o.p({ pick: a.pick, "vote-info": a.queryData }),
                  },
              { i: o.n(i.innerWindow ? "inner" : "") }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-e8ccdf13"],
]);
wx.createComponent(n);
