var t = require("../../../../../common/vendor.js"),
  e = {
    components: {
      itemSearch: function () {
        return "./item-search.js";
      },
    },
    inject: ["hqBridge", "theme"],
    props: {
      listTitle: { type: String, default: "" },
      listType: { type: String, default: "stock" },
      listData: {
        type: Array,
        default: function () {
          return [];
        },
      },
      listLimit: { type: Number, default: -1 },
      isFolder: { type: Boolean, default: !1 },
      keyword: { type: String, default: "" },
      inputComfirmed: { type: Number, default: 0 },
      tabKey: { type: String, default: "all" },
      skin: { type: String, default: "white" },
      showMoreText: { type: [Boolean, String], default: !1 },
      showDeleteBtn: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        isFolderOpen: !1,
        funcLimit: 4,
        funcRenderList: [],
        funcShowMoreBtn: {
          iconWhite:
            "https://st.gtimg.com/design/34d2e445a40a66c9ad59233b5e160724.png",
          iconBlack:
            "https://st.gtimg.com/design/a6430b016ba2ba9b4879bcb05ac3b42e.png",
          functionName: "更多",
          toShowMore: "show",
        },
        funcCloseMoreBtn: {
          iconWhite:
            "https://st.gtimg.com/design/d5f1fdf274d13bf9ae6f6c8e77cc36cf.png",
          iconBlack:
            "https://st.gtimg.com/design/d5f1fdf274d13bf9ae6f6c8e77cc36cf.png",
          functionName: "收起",
          toShowMore: "hide",
        },
      };
    },
    computed: {
      renderList: function () {
        var t = this.listLimit,
          e = this.listData;
        return -1 == +t || +t >= e.length || this.isFolderOpen
          ? e
          : e.slice(0, +t);
      },
      moreBtnTxt: function () {
        var t = this.isFolderOpen,
          e = this.isFolder,
          i = this.showMoreText,
          n = this.listTitle;
        return ""
          .concat(t ? "收起" : e ? "展开" : "查看")
          .concat("string" == typeof i ? i : "更多".concat(n));
      },
    },
    watch: {
      listData: {
        handler: function (t) {
          if ("func" === this.listType) {
            var e = this.funcLimit,
              i = this.funcShowMoreBtn;
            t.length <= e
              ? (this.funcRenderList = t)
              : (this.funcRenderList = t.slice(0, e).concat([i]));
          }
        },
        immediate: !0,
      },
    },
    activated: function () {
      this.isFolder || (this.isFolderOpen = !1);
    },
    methods: {
      deleteList: function () {
        this.$emit("deleteList");
      },
      openStockResult: function () {
        var t,
          e = this.listType,
          i = this.isFolder,
          n = this.isFolderOpen,
          s = this.keyword;
        null == (t = this.hqBridge) ||
          t.report(
            "base.search.alltab_"
              .concat(e, "_")
              .concat(n ? "less" : "more", "_tap"),
            { searchText: s }
          ),
          i ? (this.isFolderOpen = !n) : this.$emit("click-more");
      },
      jumpToDetail: function (t, e) {
        this.$emit("jumpToDetail", t, e, this.listType);
      },
    },
  };
Array || (t.resolveComponent("item-search") + t.resolveComponent("template"))();
var i = t._export_sfc(e, [
  [
    "render",
    function (e, i, n, s, o, r) {
      return t.e(
        { a: r.renderList.length && n.listTitle },
        r.renderList.length && n.listTitle
          ? t.e(
              { b: t.t(n.listTitle), c: n.showDeleteBtn },
              n.showDeleteBtn
                ? {
                    d: t.o(function () {
                      return r.deleteList && r.deleteList.apply(r, arguments);
                    }, 3258),
                  }
                : {}
            )
          : {},
        {
          e: t.f(r.renderList, function (e, i, s) {
            return {
              a: i,
              b: t.o(r.jumpToDetail, 3259, i),
              c: "553fc000-0-" + s,
              d: t.p({
                item: e,
                index: i,
                "render-serial-number": r.renderList.length,
                "list-type": n.listType,
                "tab-key": n.tabKey,
                keyword: n.keyword,
              }),
            };
          }),
          f: t.n("func" === n.listType && "func-list"),
          g:
            -1 !== n.listLimit &&
            n.listData.length > n.listLimit &&
            n.listTitle,
        },
        -1 !== n.listLimit && n.listData.length > n.listLimit && n.listTitle
          ? {
              h: t.t(r.moreBtnTxt),
              i: t.n(n.isFolder && "folder-close"),
              j: t.n(o.isFolderOpen && "folder-open"),
              k: t.n(o.isFolderOpen ? "open" : ""),
              l: t.o(function () {
                return (
                  r.openStockResult && r.openStockResult.apply(r, arguments)
                );
              }, 3260),
            }
          : {},
        { m: t.n("history" === n.listType ? "history" : ""), n: t.n(r.theme) }
      );
    },
  ],
  ["__scopeId", "data-v-553fc000"],
]);
wx.createComponent(i);
