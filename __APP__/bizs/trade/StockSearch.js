var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var a = require("../../model/trade/useSearch.js"),
  t = require("../../common/vendor.js"),
  o = require("../../common/components/Dialog/index.js"),
  r = {
    name: "StockSearch",
    components: {
      SearchResultList: function () {
        return "./SearchResultList.js";
      },
    },
    emits: ["click"],
    props: {
      showCancel: Boolean,
      isShowAddBtn: Boolean,
      userStock: {
        type: Array,
        default: function () {
          return [];
        },
      },
      clearKeyword: { type: Boolean, default: !0 },
      searchIndex: Boolean,
    },
    setup: function (r) {
      var n = t.getCurrentInstance().proxy,
        c = a.useSearch(),
        l = c.searchCode,
        h = c.searchData,
        d = c.localSearchData,
        u = c.updateLocalSearchData,
        i = c.search,
        s = c.getLocalSearchData,
        m = c.removeAllSearchData,
        f = t.computed(function () {
          var e = r.userStock.map(function (e) {
            return e.scode + e.type;
          });
          return d.value.map(function (a) {
            return (a.followed = -1 !== e.indexOf(a.code + a.market)), a;
          });
        }),
        p = t.computed(function () {
          var e = r.userStock.map(function (e) {
            return e.scode + e.type;
          });
          return h.value.map(function (a) {
            return (a.followed = -1 !== e.indexOf(a.code + a.market)), a;
          });
        }),
        S = t.debounce(function (e) {
          var a = e.detail.value.replace(/\s/g, "");
          i({ keyword: a, action: r.searchIndex ? 1 : 0 });
        }, 500);
      return (
        t.onMounted(function () {
          s();
        }),
        t.onDeactivated(function () {
          r.clearKeyword && ((l.value = ""), i({ keyword: "" }));
        }),
        {
          searchCode: l,
          localSearchData: d,
          mergeLocalSearchData: f,
          searchData: h,
          mergeSearchData: p,
          handleClick: function (e) {
            u(e), r.clearKeyword && i({ keyword: "" }), n.$emit("click", e);
          },
          handleDeleteLocal: function () {
            o.Dialog({
              message: "删除近期输入股票记录？",
              confirmButtonText: "确定",
              showCancelButton: !0,
              onConfirm: function () {
                m();
              },
            });
          },
          searchStock: S,
          onblur: function (e) {
            n.$emit("blur", e);
          },
          cancel: function () {
            (l.value = ""), i({ keyword: "" }), n.$emit("cancel");
          },
          addStock: function (a) {
            n.$emit(
              "onAddStock",
              e(e({}, a), {}, { stock_code: a.code, stock_market: a.market })
            );
          },
          handleKeyBoardHeightChange: function (e) {
            n.$emit("keyBoardHeightChange", e);
          },
        }
      );
    },
    mounted: function () {},
    activated: function () {},
  };
Array || t.resolveComponent("search-result-list")();
var n = t._export_sfc(r, [
  [
    "render",
    function (e, a, o, r, n, c) {
      return t.e(
        {
          a: r.searchCode,
          b: t.o(function () {
            return (
              r.handleKeyBoardHeightChange &&
              r.handleKeyBoardHeightChange.apply(r, arguments)
            );
          }),
          c: t.o(function () {
            return r.searchStock && r.searchStock.apply(r, arguments);
          }),
          d: t.o(function () {
            return r.onblur && r.onblur.apply(r, arguments);
          }),
          e: o.showCancel,
        },
        o.showCancel
          ? {
              f: t.o(function () {
                return r.cancel && r.cancel.apply(r, arguments);
              }),
            }
          : {},
        { g: !r.searchData || 0 === r.searchData.length },
        (r.searchData && r.searchData.length, {}),
        { h: !r.searchData || 0 === r.searchData.length },
        r.searchData && 0 !== r.searchData.length
          ? {
              o: t.o(r.handleClick),
              p: t.o(r.addStock),
              q: t.p({
                isShowAddBtn: o.isShowAddBtn,
                formData: r.mergeSearchData,
                highlightKeyWord: !0,
                "search-code": r.searchCode,
              }),
            }
          : t.e(
              { i: !r.searchCode },
              r.searchCode
                ? {}
                : t.e(
                    { j: r.mergeLocalSearchData.length > 0 },
                    r.mergeLocalSearchData.length > 0
                      ? {
                          k: t.o(function () {
                            return (
                              r.handleDeleteLocal &&
                              r.handleDeleteLocal.apply(r, arguments)
                            );
                          }),
                          l: t.o(r.handleClick),
                          m: t.o(r.addStock),
                          n: t.p({
                            formData: r.mergeLocalSearchData,
                            "search-code": r.searchCode,
                            isShowAddBtn: o.isShowAddBtn,
                          }),
                        }
                      : {}
                  )
            )
      );
    },
  ],
]);
wx.createComponent(n);
