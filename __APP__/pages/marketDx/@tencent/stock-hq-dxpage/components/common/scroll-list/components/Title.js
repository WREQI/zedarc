var t = require("../../../../../../../../common/vendor.js"),
  e = {
    props: {
      columns: {
        type: Array,
        default: function () {
          return [];
        },
      },
      firstSort: { type: String, default: "" },
    },
    data: function () {
      return { newColumns: this.columns, activeSort: 0 };
    },
    created: function () {
      var t = this;
      this.activeSort =
        this.columns.findIndex(function (e) {
          return e.rank === t.firstSort;
        }) || 0;
    },
    methods: {
      getSortIcon: function (t, e) {
        return t && e === this.activeSort
          ? "asc" === t
            ? "https://st.gtimg.com/design/2d2097ce1db19a530e5e8b196d3098c1.png"
            : "https://st.gtimg.com/design/31cee3c00b67a3a2be6b748097762b74.png"
          : "https://st.gtimg.com/design/ae0e32901c9856509db5334a4b676a3a.png";
      },
      sortClick: function (t, e) {
        this.activeSort = e;
        var n = t.isSort,
          r = t.sortBy,
          o = void 0 === r ? "asc" : r;
        n &&
          ((t.sortBy = "desc" === o ? "asc" : "desc"),
          this.newColumns.splice(e, 1, t),
          this.$emit("sortClick", t));
      },
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, r, o, s, c) {
        return t.e(
          { a: s.newColumns.length },
          s.newColumns.length
            ? {
                b: t.f(s.newColumns, function (e, n, r) {
                  return t.e(
                    {
                      a: t.t(e.text),
                      b: t.n(
                        e.sortBy && s.activeSort === n ? "text-selected" : ""
                      ),
                      c: e.isSort,
                    },
                    e.isSort ? { d: c.getSortIcon(e.sortBy, n) } : {},
                    {
                      e: "".concat(e.rank),
                      f: t.n(e.isFreeze ? "column-item-wrapper-freeze" : ""),
                      g: t.o(
                        function (t) {
                          return c.sortClick(e, n);
                        },
                        4885,
                        "item_" + n
                      ),
                      h: "item_" + n,
                      i: t.n("".concat(e.width)),
                    }
                  );
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-da9377ce"],
  ]);
wx.createComponent(n);
