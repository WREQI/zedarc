var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, n) {
    return new Promise(function (i, o) {
      var r = function (e) {
          try {
            s(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        d = function (e) {
          try {
            s(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(r, d);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  n = require("../../../../../../common/vendor.js"),
  i = require("../../../stock-hq-data/index.js"),
  o = {
    props: {
      code: { type: String, require: !0 },
      hasFollow: { default: null },
    },
    data: function () {
      return { added: null };
    },
    computed: {
      isMP: function () {
        return n.StockBridge.ENV === n.EnvTypeEnum.MP;
      },
      symbol: function () {
        var e;
        return null == (e = this.code)
          ? void 0
          : e.split(".").reverse().join("").toLowerCase();
      },
    },
    created: function () {
      this.detailApi ||
        (this.detailApi = new i.DetailApi(function (e) {
          return n.StockBridge.request(e);
        })),
        this.judgeAdded();
    },
    methods: {
      toggleAdded: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var i, o, r, d, s, c, a, u, l, p, h;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      for (l in (this.isMP
                        ? ((s =
                            (null ==
                            (o =
                              null == (i = getApp().globalData)
                                ? void 0
                                : i.Login)
                              ? void 0
                              : o.loginKeys) || {}),
                          (r = s.qluin),
                          (d = s.qlskey))
                        : ((r = n.StockBridge.getCookie("wzq_qluin")),
                          (d = n.StockBridge.getCookie("wzq_qlskey"))),
                      (c = !this.added),
                      (a = {
                        app: this.isMP ? "wzqxcx" : "mini_h5",
                        appid: "wx9cf8c670ebd68ce4",
                        openid: r,
                        fskey: d,
                        check: 11,
                      }),
                      (u = []),
                      a))
                        u.push("".concat(l, "=").concat(a[l]));
                      return (
                        (p = [
                          {
                            act: c ? "sa" : "sd",
                            code: this.symbol,
                            timestamp: new Date().getTime(),
                          },
                        ]),
                        (h =
                          "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq?".concat(
                            u.join("&")
                          )),
                        (e.next = 6),
                        n.StockBridge.request(h, "POST", {
                          seq: JSON.stringify(p),
                        })
                      );
                    case 6:
                      (this.added = !!c),
                        n.StockBridge.toast(
                          this.added ? "添加成功" : "已删除自选"
                        );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      judgeAdded: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var o, r, d, s, c, a, u, l;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        this.isMP
                          ? ((c =
                              (null ==
                              (r =
                                null == (o = getApp().globalData)
                                  ? void 0
                                  : o.Login)
                                ? void 0
                                : r.loginKeys) || {}),
                            (d = c.qluin),
                            (s = c.qlskey))
                          : ((d = n.StockBridge.getCookie("wzq_qluin")),
                            (s = n.StockBridge.getCookie("wzq_qlskey"))),
                        (a = i.utils.splitSymbol(this.symbol)),
                        (u = a.market),
                        (l = a.scode),
                        (e.next = 4),
                        this.detailApi.judgeAdded(
                          {
                            app: this.isMP ? "mp" : "wzq",
                            market: u,
                            scode: l,
                            openId: d,
                            fsKey: s,
                          },
                          { needProcess: !0 }
                        )
                      );
                    case 4:
                      this.added = e.sent;
                    case 5:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
    },
  },
  r = n._export_sfc(o, [
    [
      "render",
      function (e, t, i, o, r, d) {
        return n.e(
          { a: null !== r.added },
          null !== r.added
            ? n.e({ b: !r.added }, (r.added, {}), {
                c: n.o(function (e) {
                  return d.toggleAdded();
                }, 2907),
              })
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-b9b8a6b3"],
  ]);
wx.createComponent(r);
