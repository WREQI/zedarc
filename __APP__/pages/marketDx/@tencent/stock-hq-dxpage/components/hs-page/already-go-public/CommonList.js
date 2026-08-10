var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  i = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (t, e, i) {
    return e in t
      ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  u = function (t, r) {
    for (var i in r || (r = {})) o.call(r, i) && c(t, i, r[i]);
    if (s) {
      var n,
        u = e(s(r));
      try {
        for (u.s(); !(n = u.n()).done; ) {
          i = n.value;
          a.call(r, i) && c(t, i, r[i]);
        }
      } catch (t) {
        u.e(t);
      } finally {
        u.f();
      }
    }
    return t;
  },
  h = function (t, e) {
    return i(t, n(e));
  },
  l = function (t, e, r) {
    return new Promise(function (i, n) {
      var s = function (t) {
          try {
            a(r.next(t));
          } catch (t) {
            n(t);
          }
        },
        o = function (t) {
          try {
            a(r.throw(t));
          } catch (t) {
            n(t);
          }
        },
        a = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(s, o);
        };
      a((r = r.apply(t, e)).next());
    });
  },
  d = require("../../../utils/HangqingDataFormat.js"),
  f = require("../../../utils/list.js"),
  p = require("../../../utils/common.js"),
  m = require("../../../../../../../common/vendor.js"),
  g = {
    inject: { hqBridge: {}, isZxgMiniApp: { default: !1 } },
    components: {
      ScrollList: function () {
        return "../../common/scroll-list/index.js";
      },
      NoDataCard: function () {
        return "../../common/NoDataCard.js";
      },
    },
    props: {
      type: { type: String, default: "" },
      isTrading: { type: Boolean, default: !1 },
      isLabelSelected: { type: Boolean, default: !1 },
      accoutOpened: { type: Boolean, default: !1 },
      hasButton: { type: String, default: "" },
    },
    data: function () {
      return {
        loadingText: "上拉加载更多",
        finishedText: "没有更多数据",
        rows: [],
        requestConfig: {},
        stockTimer: null,
        bondTimer: null,
        stockNum: 20,
        bondNum: 20,
        env: this.hqBridge.ENV,
        listLoaded: !1,
      };
    },
    computed: {
      getData: function () {
        return "stock" === this.type
          ? d.getHSNewStockPurchase
          : d.getHSNewBondPurchase;
      },
      columnConfig: function () {
        return "stock" === this.type ? f.newStock : f.newBond;
      },
      noDataText: function () {
        return "stock" === this.type ? "暂无此类新股" : "暂无此类新债";
      },
      isStockLabel: function () {
        return "stock" === this.type && this.isLabelSelected;
      },
      isBondLabel: function () {
        return "bond" === this.type && this.isLabelSelected;
      },
      isStockRefresh: function () {
        return this.isTrading && this.isStockLabel;
      },
      isBondRefresh: function () {
        return this.isTrading && this.isBondLabel;
      },
    },
    watch: {
      isStockRefresh: function (t) {
        t ? this.refreshStockList() : clearTimeout(this.stockTimer);
      },
      isBondRefresh: function (t) {
        t ? this.refreshBondList() : clearTimeout(this.bondTimer);
      },
    },
    created: function () {
      this.init(), this.loadData();
    },
    deactivated: function () {
      this.clearTimer();
    },
    destroyed: function () {
      this.clearTimer();
    },
    methods: {
      init: function () {
        var t = { market: "hs", page: 1 },
          e = h(u({}, t), {
            order: "ssrq",
            desc: "desc",
            period: 360,
            limit: 20,
          }),
          r = h(u({}, t), { sort: "ssrq", order: "desc", type: 3, size: 20 });
        this.requestConfig = "stock" === this.type ? e : r;
      },
      loadData: function () {
        return l(
          this,
          null,
          t().mark(function e() {
            var r, i, n, s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (this.listLoaded = !1),
                        this.$emit("loadFinished", !1),
                        (t.prev = 1),
                        (t.next = 4),
                        this.getData(this.hqBridge, this.requestConfig)
                      );
                    case 4:
                      (r = t.sent),
                        (this.listLoaded = !0),
                        (i = (null == r ? void 0 : r.data) || []),
                        (n = i.data),
                        (this.rows = n),
                        (s = this.rows.length),
                        "stock" === this.type
                          ? (this.stockNum = s)
                          : (this.bondNum = s),
                        s === n.total && this.$emit("loadFinished", !0),
                        (t.next = 15);
                      break;
                    case 12:
                      (t.prev = 12),
                        (t.t0 = t.catch(1)),
                        (this.listLoaded = !0),
                        this.$emit("loadFinished", !0);
                    case 15:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[1, 12]]
            );
          })
        );
      },
      handleColumnClick: function (e) {
        return l(
          this,
          null,
          t().mark(function r() {
            var i, n, s, o, a, c, l, d, f, p, m;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (a = (o = e || {}).rank),
                        (c = o.sortBy),
                        (l = o.reportRank),
                        (d = a),
                        Array.isArray(a) && (d = a[0]),
                        (f = { order: d, desc: c }),
                        (p = { sort: d, order: c }),
                        (m = "stock" === this.type ? f : p),
                        (this.requestConfig = h(
                          u(u({}, this.requestConfig), m),
                          { page: 1 }
                        )),
                        this.loadData(),
                        null ==
                          (s =
                            null ==
                            (n =
                              null == (i = this.$refs) ? void 0 : i.reachBottom)
                              ? void 0
                              : n.resetStatus) || s.call(n),
                        this.hqBridge.report(
                          "hq.daxin_calendar_hstab.already_go_public_tab_new_".concat(
                            this.type,
                            "_list_column_click"
                          ),
                          { ordertype: l }
                        );
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              this
            );
          })
        );
      },
      handleRowClick: function (t) {
        var e = (null == t ? void 0 : t.item) || {},
          r = e.market,
          i = e.scode,
          n = e.code,
          s = e.value;
        if (
          (this.hqBridge.report(
            "hq.daxin_calendar_hstab.already_go_public_tab_new_".concat(
              this.type,
              "_list_row_click"
            ),
            { stockid: n }
          ),
          this.isZxgMiniApp)
        )
          p.goToMiniAppQuote(r, i);
        else {
          if ("mp" === this.env) {
            if (!r || !i) return;
            this.hqBridge.routeTo({
              path: "/pages/quote/quote",
              query: { market: r, scode: i },
            });
          }
          if ("wzq" === this.env) {
            if (!r || !i) return;
            this.hqBridge.routeTo({
              path: "/hq/stock/".concat(r, "/").concat(i),
            });
          }
          if ("app" === this.env) {
            if (!n || "--" === s) return;
            this.hqBridge.routeTo({
              url: "qqstock://detailstock/".concat(n, "/").concat(s),
            });
          }
        }
      },
      reportHorizontalScroll: function () {
        this.hqBridge.report(
          "hq.daxin_calendar_hstab.already_go_public_tab_new_".concat(
            this.type,
            "_list_horizontal_scroll"
          )
        );
      },
      onLoadMore: function () {
        return l(
          this,
          null,
          t().mark(function e() {
            var r, i, n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.rows) {
                        t.next = 18;
                        break;
                      }
                      return (
                        this.$emit("loadFinished", !1),
                        (t.prev = 2),
                        (this.requestConfig.page += 1),
                        (t.next = 6),
                        this.getData(this.hqBridge, this.requestConfig)
                      );
                    case 6:
                      if (
                        ((r = t.sent),
                        (i = r.data.data),
                        (n = i.length),
                        "stock" === this.type
                          ? (this.stockNum += n)
                          : (this.bondNum += n),
                        0 !== n)
                      ) {
                        t.next = 11;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        (this.$emit("loadFinished", !0), !0)
                      );
                    case 11:
                      if (
                        (this.$refs.scrollList.loadMoreRowsData(i), !(n < 20))
                      ) {
                        t.next = 13;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        (this.$emit("loadFinished", !0), !0)
                      );
                    case 13:
                      t.next = 18;
                      break;
                    case 15:
                      return (
                        (t.prev = 15),
                        (t.t0 = t.catch(2)),
                        t.abrupt(
                          "return",
                          (this.$emit("loadFinished", !0), Promise.reject())
                        )
                      );
                    case 18:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[2, 15]]
            );
          })
        );
      },
      refreshStockList: function () {
        return l(
          this,
          null,
          t().mark(function e() {
            var r,
              i,
              n,
              s = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        this.getData(
                          this.hqBridge,
                          h(u({}, this.requestConfig), {
                            page: 1,
                            limit: this.stockNum,
                          })
                        )
                      );
                    case 2:
                      if (((r = t.sent), this.isStockRefresh)) {
                        t.next = 5;
                        break;
                      }
                      return t.abrupt("return");
                    case 5:
                      (i = (null == r ? void 0 : r.data) || {}),
                        (n = i.data),
                        this.$refs.scrollList.refreshRowsData(n),
                        (this.stockTimer = setTimeout(function () {
                          s.refreshStockList();
                        }, 5e3));
                    case 7:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      refreshBondList: function () {
        return l(
          this,
          null,
          t().mark(function e() {
            var r,
              i,
              n,
              s = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        this.getData(
                          this.hqBridge,
                          h(u({}, this.requestConfig), {
                            page: 1,
                            size: this.bondNum,
                          })
                        )
                      );
                    case 2:
                      if (((r = t.sent), this.isBondRefresh)) {
                        t.next = 5;
                        break;
                      }
                      return t.abrupt("return");
                    case 5:
                      (i = (null == r ? void 0 : r.data) || {}),
                        (n = i.data),
                        this.$refs.scrollList.refreshRowsData(n),
                        (this.bondTimer = setTimeout(function () {
                          s.refreshBondList();
                        }, 5e3));
                    case 7:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      clearTimer: function () {
        clearTimeout(this.stockTimer), clearTimeout(this.bondTimer);
      },
    },
  };
Array ||
  (m.resolveComponent("no-data-card") + m.resolveComponent("scroll-list"))();
var b = m._export_sfc(g, [
  [
    "render",
    function (t, e, r, i, n, s) {
      return m.e(
        { a: n.listLoaded && !n.rows.length },
        n.listLoaded && !n.rows.length
          ? {
              b: m.n(r.hasButton ? "no-data-list-btn" : ""),
              c: m.p({ text: s.noDataText, accoutOpened: r.accoutOpened }),
            }
          : {},
        {
          d: m.sr("scrollList", "93a1dfe0-0"),
          e: m.o(s.handleColumnClick, 3816),
          f: m.o(s.handleRowClick, 3817),
          g: m.o(s.reportHorizontalScroll, 3818),
          h: m.p({
            rows: n.rows,
            columnConfig: s.columnConfig,
            firstSort: "ssrq",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-93a1dfe0"],
]);
wx.createComponent(b);
