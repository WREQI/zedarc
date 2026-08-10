require("../../app.js");
var e = require("../../model/trade/useSearch.js"),
  a = require("../../common/vendor.js"),
  o = {
    components: {
      SearchResultList: function () {
        return "./SearchResultList.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      Empty: function () {
        return "../../components/Empty/Empty.js";
      },
    },
    emits: ["click"],
    props: { simpleMode: { type: Boolean, default: !1 } },
    setup: function (o, t) {
      var r = a.ref(!1),
        c = e.useSearch(),
        l = c.searchCode,
        n = c.search,
        s = c.holdStockData,
        h = c.searchData,
        i = c.localSearchData,
        d = c.getLocalSearchData,
        m = c.updateLocalSearchData,
        u = c.removeAllSearchData,
        p = c.searchRequestDone,
        D = a.computed(function () {
          return i.value.filter(function (e) {
            return 9 != e.class;
          });
        });
      return (
        d(),
        {
          holdStockData: s,
          searchData: h,
          searchCode: l,
          search: n,
          getLocalSearchData: d,
          updateLocalSearchData: m,
          removeAllSearchData: u,
          showDeleteDialog: r,
          handleClick: function (e) {
            m(e), n({ keyword: "" }), t.emit("click", e);
          },
          handleDeleteLocal: function () {
            r.value = !0;
          },
          onConfirm: function () {
            u();
          },
          mergeLocalSearchData: D,
          searchRequestDone: p,
        }
      );
    },
  };
Array ||
  (
    a.resolveComponent("search-result-list") +
    a.resolveComponent("Empty") +
    a.resolveComponent("MpDialog")
  )(),
  Math;
var t = a._export_sfc(o, [
  [
    "render",
    function (e, o, t, r, c, l) {
      return a.e(
        { a: !r.searchData || 0 === r.searchData.length },
        r.searchData && 0 !== r.searchData.length
          ? {
              m: a.o(r.handleClick),
              n: a.p({
                formData: r.searchData,
                "simple-mode": t.simpleMode,
                highlightKeyWord: !0,
                "search-code": r.searchCode,
              }),
            }
          : a.e(
              { b: !r.searchCode },
              r.searchCode
                ? r.searchRequestDone
                  ? { l: a.p({ text: "暂无数据" }) }
                  : {}
                : a.e(
                    { c: r.mergeLocalSearchData.length > 0 },
                    r.mergeLocalSearchData.length > 0
                      ? {
                          d: a.o(function () {
                            return (
                              r.handleDeleteLocal &&
                              r.handleDeleteLocal.apply(r, arguments)
                            );
                          }),
                          e: a.n(t.simpleMode ? "" : "border--top"),
                          f: a.o(r.handleClick),
                          g: a.p({
                            "simple-mode": t.simpleMode,
                            formData: r.mergeLocalSearchData,
                            "search-code": r.searchCode,
                          }),
                        }
                      : {},
                    { h: r.holdStockData.length > 0 },
                    r.holdStockData.length > 0
                      ? {
                          i: a.o(r.handleClick),
                          j: a.p({
                            "simple-mode": t.simpleMode,
                            formData: r.holdStockData,
                            "search-code": r.searchCode,
                          }),
                        }
                      : {}
                  ),
              { k: r.searchRequestDone }
            ),
        {
          o: a.o(function (e) {
            return (r.showDeleteDialog = !1);
          }),
          p: a.o(r.onConfirm),
          q: a.p({
            visible: r.showDeleteDialog,
            message: "删除近期输入股票记录？",
            "show-cancel-button": !0,
            "confirm-button-text": "确认",
          }),
          r: a.n(t.simpleMode ? "search-result__simple-mode" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-2a1cd71a"],
]);
wx.createComponent(t);
