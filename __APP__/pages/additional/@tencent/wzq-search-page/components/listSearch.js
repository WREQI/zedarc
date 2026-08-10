var e = require("../../../../../common/vendor.js"),
  t = {
    components: {
      itemSearch: function () {
        return "./item-search.js";
      },
      itemInfo: function () {
        return "./item-info.js";
      },
      itemAI: function () {
        return "./item-ai.js";
      },
      itemFunc: function () {
        return "./item-func.js";
      },
      itemManager: function () {
        return "./item-manager.js";
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
      reportInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      inputComfirmed: { type: Number, default: 0 },
      tabKey: { type: String, default: "all" },
      skin: { type: String, default: "white" },
      showMoreText: { type: [Boolean, String], default: !1 },
      showMoreBtn: { type: Boolean, default: !1 },
      showDeleteBtn: { type: Boolean, default: !1 },
      showBackendFundLabel: { type: Boolean, default: !0 },
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
        var e = this.listLimit,
          t = this.listData;
        return -1 == +e || +e >= t.length || this.isFolderOpen
          ? t
          : t.slice(0, +e);
      },
      shouldShowMoreBtn: function () {
        return (
          this.showMoreBtn ||
          (-1 !== this.listLimit &&
            this.listData.length > this.listLimit &&
            this.listTitle)
        );
      },
      moreBtnTxt: function () {
        var e = this.isFolderOpen,
          t = this.isFolder,
          i = this.showMoreText,
          n = this.listTitle;
        if ("string" == typeof i && !t) return i;
        var o = "查看";
        return (
          e ? (o = "收起") : t && (o = "展开"),
          "".concat(o).concat("string" == typeof i ? i : "更多".concat(n))
        );
      },
    },
    watch: {
      listData: {
        handler: function (e) {
          if ("func" === this.listType) {
            var t = this.funcLimit,
              i = this.funcShowMoreBtn;
            e.length <= t
              ? (this.funcRenderList = e)
              : (this.funcRenderList = e.slice(0, t).concat([i]));
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
        var e = this.tabKey,
          t = this.listType,
          i = this.isFolder,
          n = this.isFolderOpen,
          o = this.keyword;
        this.hqBridge.report(
          "base.search."
            .concat(e, "tab_")
            .concat(t, "_")
            .concat(n ? "less" : "more", "_tap"),
          { searchText: o }
        ),
          i ? (this.isFolderOpen = !n) : this.$emit("click-more");
      },
      jumpToDetail: function (e, t) {
        this.$emit("jumpToDetail", e, t, this.listType);
      },
      showMoreFunc: function (e) {
        var t = this.listData,
          i = this.funcLimit,
          n = this.funcShowMoreBtn,
          o = this.funcCloseMoreBtn;
        this.funcRenderList =
          "show" !== e
            ? t.slice(0, i).concat([n])
            : t.slice(0, i).concat([o], t.slice(i));
      },
      reportSearchBrow: function () {
        this.$emit("reportSearchBrow");
      },
      addUserStock: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        this.$emit.apply(this, ["addUserStock"].concat(t));
      },
      toAics: function () {
        this.$emit("toAics");
      },
    },
  };
Array ||
  (
    e.resolveComponent("item-info") +
    e.resolveComponent("itemAI") +
    e.resolveComponent("item-func") +
    e.resolveComponent("item-manager") +
    e.resolveComponent("item-search")
  )();
var i = e._export_sfc(t, [
  [
    "render",
    function (t, i, n, o, r, s) {
      return e.e(
        { a: s.renderList.length && n.listTitle },
        s.renderList.length && n.listTitle
          ? e.e(
              { b: e.t(n.listTitle), c: n.showDeleteBtn },
              n.showDeleteBtn
                ? {
                    d: e.o(function () {
                      return s.deleteList && s.deleteList.apply(s, arguments);
                    }, 4109),
                  }
                : {}
            )
          : {},
        { e: "info" === n.listType },
        "info" === n.listType
          ? {
              f: e.f(s.renderList, function (t, i, o) {
                return {
                  a: i,
                  b: e.o(s.reportSearchBrow, 4110, i),
                  c: "dd63f554-0-" + o,
                  d: e.p({
                    item: t,
                    index: i,
                    keyword: n.keyword,
                    "list-limit": n.listLimit,
                    "input-comfirmed": n.inputComfirmed,
                    "render-serial-number": s.renderList.length,
                    "total-serial-number": n.listData.length,
                    "tab-key": n.tabKey,
                    "report-info": n.reportInfo,
                  }),
                };
              }),
            }
          : "aiGuess" === n.listType
          ? {
              h: e.f(s.renderList, function (t, i, o) {
                return {
                  a: i,
                  b: e.o(s.jumpToDetail, 4111, i),
                  c: "dd63f554-1-" + o,
                  d: e.p({
                    item: t,
                    index: i,
                    keyword: n.keyword,
                    "render-serial-number": s.renderList.length,
                  }),
                };
              }),
            }
          : "func" === n.listType
          ? {
              j: e.f(r.funcRenderList, function (t, i, o) {
                return {
                  a: i,
                  b: e.o(s.jumpToDetail, 4112, i),
                  c: e.o(s.showMoreFunc, 4113, i),
                  d: "dd63f554-2-" + o,
                  e: e.p({
                    item: t,
                    index: i,
                    skin: n.skin,
                    keyword: n.keyword,
                  }),
                };
              }),
            }
          : "manager" === n.listType
          ? {
              l: e.f(s.renderList, function (t, i, o) {
                return {
                  a: i,
                  b: "dd63f554-3-" + o,
                  c: e.p({
                    item: t,
                    index: i,
                    skin: n.skin,
                    keyword: n.keyword,
                    "report-info": n.reportInfo,
                    "render-serial-number": s.renderList.length,
                  }),
                };
              }),
            }
          : {
              m: e.f(s.renderList, function (t, i, o) {
                return {
                  a: i,
                  b: e.o(s.jumpToDetail, 4114, i),
                  c: e.o(s.addUserStock, 4115, i),
                  d: "dd63f554-4-" + o,
                  e: e.p({
                    item: t,
                    index: i,
                    "render-serial-number": s.renderList.length,
                    "list-type": n.listType,
                    "tab-key": n.tabKey,
                    keyword: n.keyword,
                    "show-backend-fund-label": n.showBackendFundLabel,
                  }),
                };
              }),
            },
        {
          g: "aiGuess" === n.listType,
          i: "func" === n.listType,
          k: "manager" === n.listType,
          n: e.n("func" === n.listType && "func-list"),
          o: "profession" === s.theme && "correct" === n.listType,
        },
        "profession" === s.theme && "correct" === n.listType
          ? {
              p: e.o(function () {
                return s.toAics && s.toAics.apply(s, arguments);
              }, 4116),
            }
          : s.shouldShowMoreBtn
          ? {
              r: e.t(s.moreBtnTxt),
              s: e.n(n.isFolder && "folder-close"),
              t: e.n(r.isFolderOpen && "folder-open"),
              v: e.n(r.isFolderOpen ? "open" : ""),
              w: e.o(function () {
                return (
                  s.openStockResult && s.openStockResult.apply(s, arguments)
                );
              }, 4117),
            }
          : {},
        {
          q: s.shouldShowMoreBtn,
          x: e.n("history" === n.listType ? "history" : ""),
          y: e.n(s.theme),
        }
      );
    },
  ],
  ["__scopeId", "data-v-dd63f554"],
]);
wx.createComponent(i);
