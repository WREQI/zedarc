var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  r = Object.defineProperty,
  i = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  f = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  u = function (e, t, n) {
    return new Promise(function (r, i) {
      var o = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        a = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, s);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  h = require("../api/index.js"),
  p = require("../../../../../common/vendor.js"),
  l = {
    options: { styleIsolation: "shared" },
    components: {
      listSearch: function () {
        return "./listSearch.js";
      },
      pageFooter: function () {
        return "./page-footer.js";
      },
    },
    inject: ["hqBridge", "theme"],
    props: {
      keyword: { type: String, default: "" },
      inputComfirmed: { type: Number, default: 0 },
      reportInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      tabIndex: { type: Number, default: 0 },
    },
    data: function () {
      return {
        infoReqData: { reqSession: "", offset: 0, hasNext: 1, type: "time" },
        isLoading: !1,
        isFirst: !0,
        infoList: [],
        isMP: !0,
      };
    },
    watch: {
      keyword: function (e) {
        e && (this.initData(), this.getInfo());
      },
    },
    created: function () {
      (this.isMP = "mp" === this.hqBridge.ENV), this.isMP && this.getInfo();
    },
    methods: {
      reportSearchBrow: function () {
        this.$emit("reportSearchBrow");
      },
      askAI: function (e) {
        this.$emit.apply(this, ["askAI"].concat(n(e)));
      },
      initData: function () {
        Object.assign(this, {
          infoReqData: { reqSession: "", offset: 0, hasNext: 1, type: "time" },
          infoList: [],
          isFirst: !0,
        });
      },
      getInfo: function () {
        return u(
          this,
          null,
          e().mark(function r() {
            var u, p, l, d, m, g, b, y, x;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (this.infoReqData.hasNext && !this.isLoading) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", !1);
                    case 2:
                      return (
                        (this.isLoading = !0),
                        (e.prev = 3),
                        (e.next = 6),
                        h.serviceApi.getSearchInfo(
                          this.hqBridge,
                          ((y = (function (e, n) {
                            for (var r in n || (n = {}))
                              a.call(n, r) && c(e, r, n[r]);
                            if (s) {
                              var i,
                                o = t(s(n));
                              try {
                                for (o.s(); !(i = o.n()).done; ) {
                                  r = i.value;
                                  f.call(n, r) && c(e, r, n[r]);
                                }
                              } catch (e) {
                                o.e(e);
                              } finally {
                                o.f();
                              }
                            }
                            return e;
                          })({}, this.infoReqData)),
                          (x = {
                            q: this.keyword,
                            limit: this.isFirst ? 20 : 10,
                          }),
                          i(y, o(x)))
                        )
                      );
                    case 6:
                      if (0 == +(p = e.sent).code) {
                        e.next = 9;
                        break;
                      }
                      throw p.msg;
                    case 9:
                      return (
                        (l = p.data),
                        (d = l.has_next),
                        (m = l.req_session),
                        (g = l.next_offset),
                        (b = l.news_list),
                        e.abrupt(
                          "return",
                          (Object.assign(this.infoReqData, {
                            offset: g,
                            reqSession: m,
                            hasNext: d,
                          }),
                          (u = this.infoList).push.apply(u, n(b)),
                          (this.isFirst = !1),
                          d)
                        )
                      );
                    case 11:
                      return (e.prev = 11), (this.isLoading = !1), e.finish(11);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              this,
              [[3, , 11, 14]]
            );
          })
        );
      },
      onReachBottom: function () {
        return u(
          this,
          null,
          e().mark(function t() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), this.getInfo();
                    case 2:
                      return e.abrupt("return", !e.sent);
                    case 3:
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
  };
Array ||
  (
    p.resolveComponent("list-search") +
    p.resolveComponent("page-footer") +
    p.resolveComponent("st-reach-bottom")
  )();
var d = p._export_sfc(l, [
  [
    "render",
    function (e, t, n, r, i, o) {
      return p.e(
        { a: i.isMP },
        i.isMP
          ? p.e(
              { b: i.infoList.length > 0 },
              i.infoList.length > 0
                ? {
                    c: p.o(o.reportSearchBrow, 4118),
                    d: p.p({
                      "list-type": "info",
                      "list-data": i.infoList,
                      keyword: n.keyword,
                      "input-comfirmed": n.inputComfirmed,
                      "report-info": n.reportInfo,
                      "tab-index": n.tabIndex,
                    }),
                  }
                : {},
              { e: i.isLoading },
              i.isLoading || (i.infoReqData.hasNext && i.infoList.length)
                ? {}
                : {
                    g: p.o(o.askAI, 4119),
                    h: p.p({ "no-data": !i.isFirst && !i.infoList.length }),
                  },
              {
                f: !i.infoReqData.hasNext || !i.infoList.length,
                i: p.o(function () {
                  return o.getInfo && o.getInfo.apply(o, arguments);
                }, 4120),
              }
            )
          : p.e(
              { j: i.infoList.length > 0 },
              i.infoList.length > 0
                ? {
                    k: p.o(o.reportSearchBrow, 4121),
                    l: p.p({
                      "list-type": "info",
                      "list-data": i.infoList,
                      keyword: n.keyword,
                      "input-comfirmed": n.inputComfirmed,
                      "report-info": n.reportInfo,
                      "tab-index": n.tabIndex,
                    }),
                  }
                : {},
              {
                m:
                  (!i.isLoading && !i.infoReqData.hasNext) ||
                  !i.infoList.length,
              },
              (i.isLoading || i.infoReqData.hasNext) && i.infoList.length
                ? {}
                : {
                    n: p.o(o.askAI, 4122),
                    o: p.p({ "no-data": !i.isFirst && !i.infoList.length }),
                  },
              {
                p: p.sr("tabInfoContainer", "e2e8603a-2"),
                q: p.p({
                  "finished-text": " ",
                  "on-reach-bottom": o.onReachBottom,
                }),
              }
            ),
        { r: p.n(o.theme) }
      );
    },
  ],
  ["__scopeId", "data-v-e2e8603a"],
]);
wx.createComponent(d);
