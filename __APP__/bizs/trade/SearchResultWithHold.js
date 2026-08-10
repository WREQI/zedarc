require("../../app.js");
var e = require("../../common/vendor.js"),
  t = {
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
    setup: function (t, a) {
      var r = e.inject("searchWithHold"),
        o = r.searchCode,
        c = r.search,
        n = r.holdStockData,
        h = r.fetchHoldStock,
        s = r.searchData,
        i = r.requestingSearch;
      return (
        e.onBeforeMount(function () {
          h();
        }),
        {
          requestingSearch: i,
          holdStockData: n,
          searchData: s,
          searchCode: o,
          search: c,
          handleClick: function (e) {
            c({ keyword: "" }), a.emit("clickItem", e);
          },
        }
      );
    },
  };
Array ||
  (e.resolveComponent("search-result-list") + e.resolveComponent("Empty"))(),
  Math;
var a = e._export_sfc(t, [
  [
    "render",
    function (t, a, r, o, c, n) {
      return e.e(
        { a: !o.searchData || 0 === o.searchData.length },
        o.searchData && 0 !== o.searchData.length
          ? {
              h: e.o(o.handleClick),
              i: e.p({
                showBorder: !0,
                formData: o.searchData,
                highlightKeyWord: !0,
                "search-code": o.searchCode,
              }),
            }
          : e.e(
              { b: !o.searchCode },
              o.searchCode
                ? o.requestingSearch
                  ? {}
                  : { g: e.p({ text: "暂无数据" }) }
                : e.e(
                    { c: o.holdStockData.length > 0 },
                    o.holdStockData.length > 0
                      ? {
                          d: e.o(o.handleClick),
                          e: e.p({
                            showBorder: !0,
                            formData: o.holdStockData,
                            "search-code": o.searchCode,
                          }),
                        }
                      : {}
                  ),
              { f: !o.requestingSearch }
            )
      );
    },
  ],
  ["__scopeId", "data-v-6c80a269"],
]);
wx.createComponent(a);
