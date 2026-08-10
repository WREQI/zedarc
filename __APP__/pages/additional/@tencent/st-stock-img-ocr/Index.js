require("../../../../@babel/runtime/helpers/Arrayincludes");
var e,
  t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  r = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  p = function (e, t, n) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  u = function (e, t) {
    for (var o in t || (t = {})) s.call(t, o) && p(e, o, t[o]);
    if (a) {
      var r,
        i = n(a(t));
      try {
        for (i.s(); !(r = i.n()).done; ) {
          o = r.value;
          c.call(t, o) && p(e, o, t[o]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  d = function (e, t, n) {
    return new Promise(function (o, r) {
      var i = function (e) {
          try {
            s(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          try {
            s(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        s = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(i, a);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  l = require("../../../../common/vendor.js"),
  g = require("../../js-cookie/src/js.cookie.js"),
  h = "zxg_xcx",
  m = "wx4ffb369b6881ee5e";
e =
  l.StockBridge.ENV === l.EnvTypeEnum.MP
    ? {
        app: h,
        appid: m,
        openid: l.StockBridge.getStorage("_qluin"),
        fskey: l.StockBridge.getStorage("_qlskey"),
        check: 11,
        new_opt: 1,
      }
    : {
        app: h,
        appid: m,
        openid: g.cookie.get("wzq_qluin"),
        fskey: g.cookie.get("wzq_qlskey"),
        access_token: "",
        check: 11,
        _devId: g.cookie.get("wzq_qlskey"),
        buildType: "rdm",
        new_opt: 1,
      };
var f = function (t) {
    var n = Object.keys(e)
      .map(function (t) {
        return "".concat(t, "=").concat(e[t]);
      })
      .join("&");
    return l.StockBridge.request(
      "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq?".concat(
        n
      ),
      "POST",
      { seq: "".concat(encodeURIComponent(JSON.stringify(t))) }
    );
  },
  k = { choose: 0, update: 1, result: 2, error: 3 },
  b = [
    "AI识图全新升级",
    "沪深港美，一扫即识",
    "正在加速中...",
    "识别中，请保持当前界面",
  ],
  v = {
    components: {
      Loading: function () {
        return "./components/Loading.js";
      },
      GroupPop: function () {
        return "./components/GroupPop.js";
      },
    },
    props: ["query"],
    inject: ["hqBridge"],
    setup: function () {
      return {
        onCheckUserAgreementStatus: l.inject(
          "onCheckUserAgreementStatus",
          null
        ),
        didAgreeUserAgreement: l.inject("didAgreeUserAgreement", null),
      };
    },
    computed: {
      showTip: function () {
        return !1;
      },
      isSimpleMode: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
      demoImg: function () {
        return "black" === this.themeValue
          ? "https://st.gtimg.com/design/94248755ff00430861e75b9ec6627341.png"
          : this.isSimpleMode
          ? "https://st.gtimg.com/design/9e93210c1f84eaa482e19ce28fb00eaf.png"
          : "https://st.gtimg.com/design/7f9be951e4b57bb6134932c8b704dc4d.png";
      },
      themeValue: function () {
        return "mp" === l.StockBridge.ENV
          ? l.wx$1.getStorageSync("user/skin") || "light"
          : document.documentElement.getAttribute("data-st-theme") || "light";
      },
    },
    data: function () {
      return {
        step: k.choose,
        loadingShow: !1,
        stepMaps: k,
        base64Img: "",
        stockList: [],
        loadingTextTimer: null,
        loadingTextIndex: 0,
        updateTypeButtonText: "立即识别",
      };
    },
    methods: {
      handleSearch: function () {
        this.showTip &&
          (l.StockBridge.report("yy.qd.route_to_search"),
          l.StockRouter.routeTo({ name: "search" }));
      },
      handleChoose: function () {
        return d(
          this,
          null,
          t().mark(function e() {
            var n, o, r, i, a, s, c;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = this),
                        l.StockBridge.report("yy.imgocr.choose_img_click"),
                        !1 === this.didAgreeUserAgreement &&
                          "function" == typeof this.onCheckUserAgreementStatus)
                      ) {
                        e.next = 20;
                        break;
                      }
                      if (!["mpwzq", "mpweapp"].includes("mpweapp")) {
                        e.next = 6;
                        break;
                      }
                      l.wx$1.chooseMedia({
                        count: 1,
                        mediaType: ["image"],
                        success: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t = e.tempFiles,
                            n = void 0 === t ? [] : t,
                            o = n[0] || {},
                            i = o.size,
                            a = o.tempFilePath;
                          if (i > 7340032)
                            l.StockBridge.toast(
                              "图片体积超过7M，请重新上传",
                              "none"
                            );
                          else {
                            if (!a)
                              return (
                                l.StockBridge.toast(
                                  "图片上传失败，请稍后重试",
                                  "none"
                                ),
                                void l.StockBridge.aegisReportEvent(
                                  "MONITOR-IMGOCR-CHOOSE-EMPTY"
                                )
                              );
                            (r.base64Img = a), (r.step = k.update);
                          }
                        },
                        fail: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t = e.errMsg;
                          "chooseMedia:fail cancel" !== t &&
                            (l.StockBridge.toast(
                              "选择图片失败，请稍后重试",
                              "none"
                            ),
                            l.StockBridge.aegisReportEvent(
                              "MONITOR-IMGOCR-CHOOSE-FAIL",
                              { ext4: t }
                            ));
                        },
                      }),
                        (e.next = 18);
                      break;
                    case 6:
                      return (
                        (i =
                          (null ==
                          (n =
                            null == window ? void 0 : window.__UNION_BRIDGE__)
                            ? void 0
                            : n.sdk) || {}),
                        (e.next = 9),
                        i.chooseImage({
                          count: 1,
                          sourceType: ["album", "camera"],
                        })
                      );
                    case 9:
                      if (
                        ((a = e.sent),
                        !(null == (o = null == a ? void 0 : a.localIds)
                          ? void 0
                          : o[0]))
                      ) {
                        e.next = 18;
                        break;
                      }
                      return (
                        (e.next = 13),
                        i.getLocalMedia({ localId: a.localIds[0] })
                      );
                    case 13:
                      if (
                        ((s = e.sent),
                        (c = this.getBase64ImageSize(s)),
                        !(c.MB > 7))
                      ) {
                        e.next = 17;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void l.StockBridge.toast(
                          "图片体积超过7M，请重新上传",
                          "none"
                        )
                      );
                    case 17:
                      s.includes("data:image") ||
                        (s = "data:image/png;base64,".concat(s)),
                        (this.base64Img = s),
                        (this.step = k.update);
                    case 18:
                      e.next = 21;
                      break;
                    case 20:
                      this.onCheckUserAgreementStatus();
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      getImgBase64: function () {
        var e = this;
        return new Promise(function (t, n) {
          l.wx$1.getFileSystemManager().readFile({
            filePath: e.base64Img,
            encoding: "base64",
            success: function (e) {
              var n = "data:image/png;base64,".concat(e.data);
              t(n);
            },
            fail: function (e) {
              l.StockBridge.toast("获取图片失败，请稍后重试", "none"),
                l.StockBridge.aegisReportEvent("MONITOR-IMGOCR-BASE64-FAIL"),
                n();
            },
          });
        });
      },
      getBase64ImageSize: function (e) {
        var t = e.replace(/^data:image\/\w+;base64,/, ""),
          n = (3 * t.length) / 4 - (t.match(/=/g) || []).length;
        return {
          bytes: Math.ceil(n),
          kB: parseFloat((n / 1024).toFixed(2)),
          MB: parseFloat((n / 1048576).toFixed(3)),
        };
      },
      clearBtnTextInterval: function () {
        (this.updateTypeButtonText = "立即识别"),
          this.loadingTextTimer && clearInterval(this.loadingTextTimer);
      },
      handleUpdate: function () {
        return d(
          this,
          null,
          t().mark(function e() {
            var n,
              o,
              r,
              i,
              a,
              s,
              c = this;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        this.loadingShow ||
                        (l.StockBridge.report("yy.imgocr.update_img_click"),
                        !this.base64Img)
                      ) {
                        e.next = 26;
                        break;
                      }
                      if (
                        ((e.t0 = ["mpwzq", "mpweapp"].includes("mpweapp")),
                        !e.t0)
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 5), this.getImgBase64();
                    case 5:
                      this.base64Img = e.sent;
                    case 6:
                      return (
                        (this.loadingShow = !0),
                        (this.updateTypeButtonText = b[b.length - 1]),
                        (this.loadingTextTimer = setInterval(function () {
                          (c.updateTypeButtonText = b[c.loadingTextIndex]),
                            (c.loadingTextIndex = c.loadingTextIndex + 1),
                            c.loadingTextIndex === b.length &&
                              (c.loadingTextIndex = 0);
                        }, 1500)),
                        (e.prev = 9),
                        (e.next = 12),
                        (n = {
                          image_base64: this.base64Img.replace(/[\r\n]/g, ""),
                        }),
                        l.StockBridge.request(
                          "https://proxy.finance.qq.com/cgi/cgi-bin/api/basicCgi/extract_securities",
                          "POST",
                          n,
                          {
                            forceCallback: !0,
                            headers: { "Content-Type": "application/json" },
                            timeout: 3e4,
                          }
                        )
                      );
                    case 12:
                      if (
                        ((o = e.sent),
                        (r = o.code),
                        (i = o.data),
                        (a = (void 0 === i ? {} : i).securities),
                        (s = void 0 === a ? [] : a),
                        (this.loadingShow = !1),
                        this.clearBtnTextInterval(),
                        !+r && s.length)
                      ) {
                        e.next = 20;
                        break;
                      }
                      return e.abrupt("return", void (this.step = k.error));
                    case 20:
                      (this.stockList = s.map(function (e) {
                        var t = e.symbol,
                          n = e.name;
                        return u(
                          { symbol: t, name: n, checked: !0 },
                          c.splitSymbol(t)
                        );
                      })),
                        (this.step = k.result),
                        (e.next = 26);
                      break;
                    case 23:
                      (e.prev = 23),
                        (e.t1 = e.catch(9)),
                        (this.loadingShow = !1),
                        this.clearBtnTextInterval(),
                        (this.step = k.error);
                    case 26:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[9, 23]]
            );
          })
        );
      },
      splitSymbol: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = -1 !== e.indexOf("us."),
          n = e.slice(0, 2);
        return { market: "ft" === n ? "hqzhi" : n, scode: e.substr(t ? 3 : 2) };
      },
      handleChange: function (e) {
        e.checked = !e.checked;
      },
      handleAlladd: function () {
        l.StockBridge.report("yy.imgocr.all_add_click"),
          this.stockList.filter(function (e) {
            return e.checked;
          }).length
            ? this.$refs.groupPop.show()
            : l.StockBridge.toast("请先选择股票", "none");
      },
      moveStocks: function (e) {
        return d(
          this,
          null,
          t().mark(function n() {
            var o, r, i, a;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        e.length || (e = ["1"]),
                        (o = new Date().getTime()),
                        (r = []),
                        (i = this.stockList.filter(function (e) {
                          return e.checked;
                        })),
                        e.forEach(function (e) {
                          i.forEach(function (t) {
                            var n = t.symbol;
                            r.push({
                              timestamp: o,
                              grpid: e,
                              act: "sa",
                              code: n,
                            });
                          });
                        }),
                        (t.next = 5),
                        f(r)
                      );
                    case 5:
                      (a = t.sent),
                        +a.code
                          ? l.StockBridge.toast("添加失败", "none")
                          : (l.StockBridge.toast("添加成功", "none", {
                              duration: 1e3,
                            }),
                            setTimeout(function () {
                              l.StockRouter.routeTo({ name: "ChooseIndex" });
                            }, 1e3),
                            ["mpwzq", "mpweapp"].includes("mpweapp") &&
                              (this.hqBridge.busEmit("toggleAdded"),
                              l.StockBridge.busEmit("common-toggleAdded")));
                    case 8:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
    },
    beforeDestroy: function () {
      this.clearBtnTextInterval();
    },
    deactivated: function () {
      this.clearBtnTextInterval();
    },
  };
Array || (l.resolveComponent("loading") + l.resolveComponent("group-pop"))();
var x = l._export_sfc(v, [
  [
    "render",
    function (e, t, n, o, r, i) {
      return l.e(
        { a: r.step === r.stepMaps.choose },
        r.step === r.stepMaps.choose
          ? l.e(
              {
                b: i.demoImg,
                c: l.o(function () {
                  return i.handleChoose && i.handleChoose.apply(i, arguments);
                }, 1112),
                d: i.showTip,
              },
              i.showTip
                ? {
                    e: l.o(function () {
                      return (
                        i.handleSearch && i.handleSearch.apply(i, arguments)
                      );
                    }, 1113),
                  }
                : {},
              { f: i.showTip ? "#fff" : "inherit" }
            )
          : r.step === r.stepMaps.update
          ? {
              h: r.base64Img,
              i: l.t(r.updateTypeButtonText),
              j: r.loadingShow ? 1 : "",
              k: l.o(function () {
                return i.handleUpdate && i.handleUpdate.apply(i, arguments);
              }, 1114),
            }
          : r.step === r.stepMaps.error
          ? {
              m: r.base64Img,
              n: l.o(function () {
                return i.handleChoose && i.handleChoose.apply(i, arguments);
              }, 1115),
            }
          : r.step === r.stepMaps.result
          ? {
              p: l.f(r.stockList, function (e, t, n) {
                return {
                  a: e.checked ? 1 : "",
                  b: l.t(e.name),
                  c: "https://wzq.tenpay.com/resources/mp-files/portfolio/icon/".concat(
                    e.market,
                    ".svg"
                  ),
                  d: l.t(e.scode),
                  e: t,
                  f: l.o(function (t) {
                    return i.handleChange(e);
                  }, 1116),
                };
              }),
              q: l.o(function () {
                return i.handleAlladd && i.handleAlladd.apply(i, arguments);
              }, 1117),
            }
          : {},
        {
          g: r.step === r.stepMaps.update,
          l: r.step === r.stepMaps.error,
          o: r.step === r.stepMaps.result,
          r: r.loadingShow,
        },
        (r.loadingShow, {}),
        {
          s: l.sr("groupPop", "89b29d16-1"),
          t: l.o(i.moveStocks, 1118),
          v: l.p({ isSimpleMode: i.isSimpleMode }),
          w: i.isSimpleMode ? 1 : "",
        }
      );
    },
  ],
  ["__scopeId", "data-v-89b29d16"],
]);
wx.createComponent(x);
var S = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LXN0b2NrLWltZy1vY3IvSW5kZXgudnVl =
  S),
  (exports.queryUserStock = function (t) {
    return l.StockBridge.request(
      "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stocklist",
      "GET",
      ((n = u(u({}, t), e)), r(n, i({ all_groups: 1 }))),
      { headers: { "Content-Type": "application/json" } }
    );
    var n;
  }),
  (exports.updateStock = f);
