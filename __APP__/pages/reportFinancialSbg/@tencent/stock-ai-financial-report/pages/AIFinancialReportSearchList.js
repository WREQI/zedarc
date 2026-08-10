var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../common/vendor.js"),
  n = require("../api/financialReportRequest.js"),
  i = require("../../stock-news-core/utils/force2https.js"),
  a = {
    options: { styleIsolation: "shared" },
    components: {
      StockSearchItem: function () {
        return "../components/StockSearchItem.js";
      },
    },
    props: { theme: "", fromSearchClick: !1 },
    computed: {
      isMP: function () {
        return n.isMPEnv();
      },
      isWZQ: function () {
        return n.isWZQEnv();
      },
      isApp: function () {
        return n.isAppEnv();
      },
      isWeb: function () {
        return n.isWebEnv();
      },
      containerStyle: function () {
        return this.isMP
          ? {}
          : {
              backgroundImage: "url('".concat(
                i.forceHttpsAdvanced(this.aiTitleBgImgUrl || ""),
                "')"
              ),
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            };
      },
      aiTitleBgImgUrl: function () {
        return "black" === this.theme
          ? "https://st.gtimg.com/design/8641a84cc73d84f64c2e48f0209144c6.png"
          : "https://st.gtimg.com/design/e1627c56f1035f395b7c5915f307bdb7.png";
      },
      aiSearchClearUrl: function () {
        return "black" === this.theme
          ? "https://st.gtimg.com/design/cd7e7ad2f1be91614220ace241a8a040.png"
          : "https://st.gtimg.com/design/d01365f162bbb6efb1130da527bb8ed9.png";
      },
      aiSearchUrl: function () {
        return "black" === this.theme
          ? "https://st.gtimg.com/design/3cfd82f771e90ce5abdbf2895ccbdd16.png"
          : "https://st.gtimg.com/design/f87eaf66e6de28862e174eb6ab7256e4.png";
      },
      aiSearchNoResultImgUrl: function () {
        return "black" === this.theme
          ? "https://st.gtimg.com/design/6aaceec2945636e7624299b0dfec49e9.png"
          : "https://st.gtimg.com/design/49256c57651483a8b728da5c5c1fcb74.png";
      },
    },
    data: function () {
      return {
        financialList: [],
        loading: !1,
        searchCode: "",
        searchLoading: !1,
        isFirstLoading: !0,
        isInputFocused: !1,
        fromSearch: !1,
        mpAutoFocus: !0,
      };
    },
    created: function () {
      (this.fromSearch = this.fromSearchClick),
        this.requestDefaultFinancialList(),
        this.isApp && shy.setWebViewFollowKeyboardChanged(!1);
    },
    mounted: function () {
      var t = this;
      this.addEvent(),
        this.$nextTick(function () {
          t.$refs.aiSearchInput && t.$refs.aiSearchInput.focus();
        });
    },
    beforeDestroy: function () {
      this.removeEvent();
    },
    activated: function () {
      var t = this;
      this.addEvent(),
        this.isWZQ
          ? this.fromSearch &&
            this.$nextTick(function () {
              t.aiSearchFocus(),
                (t.fromSearch = !1),
                t.$emit("resetSearchClickStatus");
            })
          : this.$nextTick(function () {
              t.aiSearchFocus();
            });
    },
    deactivated: function () {
      this.removeEvent();
    },
    methods: {
      aiSearchFocus: function () {
        this.$refs.aiSearchInput && this.$refs.aiSearchInput.focus();
      },
      refreshDataWhenRouteChange: function () {
        (!this.searchCode || this.searchCode.length <= 0) &&
          ((this.loading = !1), this.requestDefaultFinancialList());
      },
      requestDefaultFinancialList: function () {
        var t = this;
        this.loading ||
          ((this.loading = !0),
          n
            .getFinancialReportListData({
              last_score: "",
              page_start: 1,
              n: 10,
            })
            .then(function (e) {
              (t.isFirstLoading = !1), (t.loading = !1);
              var n = (e || {}).data,
                i = void 0 === n ? {} : n;
              i && i.data && i.data.length > 0 && (t.financialList = i.data);
            }));
      },
      handleInput: function (t) {
        (this.searchCode = t.target.value), this.searchStockReport();
      },
      searchStockReport: e.debounce(function () {
        return (
          (e = this),
          null,
          (n = t().mark(function e() {
            var n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      try {
                        (n = this.searchCode.replace(/\s/g, "")) && n.length > 0
                          ? this.requestSearchList(n)
                          : this.requestDefaultFinancialList();
                      } catch (t) {}
                    case 1:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })),
          new Promise(function (t, i) {
            var a = function (t) {
                try {
                  s(n.next(t));
                } catch (t) {
                  i(t);
                }
              },
              c = function (t) {
                try {
                  s(n.throw(t));
                } catch (t) {
                  i(t);
                }
              },
              s = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(a, c);
              };
            s((n = n.apply(e, null)).next());
          })
        );
        var e, n;
      }, 300),
      requestSearchList: function (t) {
        var e = this;
        this.searchLoading ||
          !t ||
          t.length <= 0 ||
          ((this.searchLoading = !0),
          n.getFinancialSearchListData({ search: t }).then(function (t) {
            e.searchLoading = !1;
            var n = (t || {}).data,
              i = void 0 === n ? {} : n;
            i && i.data && i.data.length > 0
              ? (e.financialList = i.data)
              : (e.financialList = []);
          }));
      },
      xcxNavigate: function (t) {
        var n, i;
        e.wx$1 && e.wx$1.navigateTo
          ? e.wx$1.navigateTo(t)
          : null ==
              (i =
                null == (n = null == window ? void 0 : window.wx)
                  ? void 0
                  : n.miniProgram) || i.navigateTo(t);
      },
      cancelBtnClick: function () {
        (this.searchCode = ""),
          this.requestDefaultFinancialList(),
          this.$emit("onCancelClick");
      },
      clearBtnClick: function () {
        (this.searchCode = ""), this.requestDefaultFinancialList();
      },
      handleScroll: function () {
        this.isInputFocused &&
          (this.isMP
            ? (this.mpAutoFocus = !1)
            : this.$refs.aiSearchInput.blur(),
          (this.isInputFocused = !1));
      },
      handleInputFocus: function () {
        this.isInputFocused = !0;
      },
      addEvent: function () {
        this.isMP ||
          window.addEventListener("touchstart", this.handleScroll, !1);
      },
      removeEvent: function () {
        this.isMP ||
          window.removeEventListener("touchstart", this.handleScroll, !1);
      },
    },
  };
Array || e.resolveComponent("StockSearchItem")();
var c = e._export_sfc(a, [
  [
    "render",
    function (t, n, i, a, c, s) {
      return e.e(
        { a: s.aiSearchUrl, b: !s.isMP },
        s.isMP
          ? {
              f: c.mpAutoFocus,
              g: c.searchCode,
              h: e.o(function () {
                return s.handleInput && s.handleInput.apply(s, arguments);
              }, 1695),
              i: e.o(function () {
                return (
                  s.handleInputFocus && s.handleInputFocus.apply(s, arguments)
                );
              }, 1696),
            }
          : {
              c: c.searchCode,
              d: e.o(function () {
                return s.handleInput && s.handleInput.apply(s, arguments);
              }, 1693),
              e: e.o(function () {
                return (
                  s.handleInputFocus && s.handleInputFocus.apply(s, arguments)
                );
              }, 1694),
            },
        { j: c.searchCode && c.searchCode.length > 0 },
        c.searchCode && c.searchCode.length > 0
          ? {
              k: s.aiSearchClearUrl,
              l: e.o(function () {
                return s.clearBtnClick && s.clearBtnClick.apply(s, arguments);
              }, 1697),
            }
          : {},
        {
          m: e.o(function () {
            return s.cancelBtnClick && s.cancelBtnClick.apply(s, arguments);
          }, 1698),
          n: e.f(c.financialList, function (t, n, i) {
            return {
              a: "45296178-0-" + i,
              b: e.p({ itemData: t, pageType: "search" }),
              c: n,
            };
          }),
          o: !c.isFirstLoading && c.financialList.length <= 0,
        },
        !c.isFirstLoading && c.financialList.length <= 0
          ? { p: s.aiSearchNoResultImgUrl }
          : {},
        { q: e.n(s.isMP ? "container-bg" : ""), r: e.s(s.containerStyle) }
      );
    },
  ],
  ["__scopeId", "data-v-45296178"],
]);
wx.createComponent(c);
