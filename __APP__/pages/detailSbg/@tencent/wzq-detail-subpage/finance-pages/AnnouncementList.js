var t = require("../../../../../common/vendor.js"),
  e = require("api/index.js"),
  n = {
    props: { symbol: { type: String, default: "" } },
    components: {
      NoData: function () {
        return "./components/NoData.js";
      },
    },
    computed: {
      isMini: function () {
        return "mp" === t.StockBridge.ENV;
      },
    },
    data: function () {
      return { loaded: !1, hasMore: !0, list: [] };
    },
    created: function () {
      this.refresh();
    },
    methods: {
      refresh: function () {
        (this.hasMore = !0), (this.pageIndex = 1), this.loadData();
      },
      loadMore: function (t) {
        this.hasMore &&
          !this.loading &&
          ((this.pageIndex += 1), this.loadData(t));
      },
      format: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (Array.isArray(t)) {
          var e = new Date().getFullYear();
          t.map(function (t) {
            var n = new Date(t.time.replace(/-/g, "/"));
            t.chineseTitle &&
              ((t.subTitle = t.title), (t.title = t.chineseTitle));
            var o = [];
            n.getFullYear() != e && o.push(n.getFullYear()),
              o.push(
                n.getMonth() < 9
                  ? "0".concat(n.getMonth() + 1)
                  : n.getMonth() + 1
              ),
              o.push(n.getDate() < 9 ? "0".concat(n.getDate()) : n.getDate()),
              (t.timeStr = o.join("-"));
          });
        }
        return t;
      },
      loadData: function (t) {
        var n = this,
          o = { symbol: this.symbol, pageIndex: this.pageIndex };
        (this.loading = !0),
          e
            .getAnnouncementList(o)
            .then(function (e) {
              if (((n.loading = !1), 0 == +e.code && e.data)) {
                var o = e.data || {},
                  i = o.data,
                  a = void 0 === i ? [] : i,
                  r = o.total_page,
                  d = void 0 === r ? 0 : r;
                n.list.length && (n.hasMore = n.pageIndex <= d),
                  n.format(a),
                  1 === n.pageIndex
                    ? (n.list = a)
                    : (n.list = n.list.concat(a)),
                  (n.loaded = !0),
                  t && t(n.hasMore);
              }
            })
            .catch(function (t) {
              n.loading = !1;
            });
      },
      toPDF: function (n) {
        if (n) {
          var o = {
            id: n.id,
            market: this.market,
            scode: this.scode,
            title: encodeURIComponent(n.title),
          };
          t.StockBridge.report(
            "hq.stock_detail.finance.announcement.list.detail_click"
          ),
            this.isMini
              ? (t.wx$1.showLoading(),
                e
                  .getPDFcontent(o.id)
                  .then(function (e) {
                    var n = e.code,
                      i = e.data,
                      a = void 0 === i ? [] : i;
                    if (
                      0 == +n &&
                      Array.isArray(a) &&
                      a.length &&
                      a[0].pdf &&
                      (a[0].pdf.indexOf(".pdf") > 0 ||
                        a[0].pdf.indexOf(".PDF") > 0)
                    ) {
                      var r = e.data[0].pdf.replace("http:", "https:");
                      t.wx$1.downloadFile({
                        url: r,
                        success: function (e) {
                          if ((t.wx$1.hideLoading(), 200 == +e.statusCode)) {
                            var n = e.tempFilePath;
                            t.wx$1.openDocument({
                              filePath: n,
                              success: function () {
                                t.wx$1.hideLoading();
                              },
                              fail: function () {
                                t.wx$1.hideLoading(),
                                  t.StockRouter.routeTo({
                                    name: "informationDetail",
                                    query: o,
                                  });
                              },
                            });
                          } else
                            t.wx$1.showModal({
                              title: "提示",
                              content: "文件下载失败！",
                              showCancel: !1,
                              confirmText: "我知道了",
                            });
                        },
                        fail: function () {
                          t.wx$1.hideLoading(),
                            t.StockRouter.routeTo({
                              name: "informationDetail",
                              query: o,
                            });
                        },
                      });
                    } else t.wx$1.hideLoading(), t.StockRouter.routeTo({ name: "informationDetail", query: o });
                  })
                  .catch(function (e) {
                    t.wx$1.hideLoading();
                  }))
              : t.StockRouter.routeTo({ name: "informationDetail", query: o });
        }
      },
    },
  };
Array || t.resolveComponent("NoData")();
var o = t._export_sfc(n, [
  [
    "render",
    function (e, n, o, i, a, r) {
      return t.e(
        {
          a: t.f(a.list, function (e, n, o) {
            return {
              a: t.t(e.title),
              b: t.t(e.subTitle),
              c: t.t(e.timeStr),
              d: e.id,
              e: t.o(
                function (t) {
                  return r.toPDF(e);
                },
                1339,
                e.id
              ),
            };
          }),
          b: !a.list.length && a.loaded,
        },
        (!a.list.length && a.loaded, {})
      );
    },
  ],
  ["__scopeId", "data-v-a6fd9f31"],
]);
wx.createComponent(o);
