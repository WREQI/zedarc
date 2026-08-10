require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../@babel/runtime/helpers/Objectentries");
var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../../../@babel/runtime/helpers/typeof"),
  n = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  s = Object.defineProperty,
  o = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  h = function (e, t, i) {
    return t in e
      ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  d = function (e, t) {
    for (var i in t || (t = {})) u.call(t, i) && h(e, i, t[i]);
    if (c) {
      var r,
        s = n(c(t));
      try {
        for (s.s(); !(r = s.n()).done; ) {
          i = r.value;
          l.call(t, i) && h(e, i, t[i]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  f = function (e, t) {
    return o(e, a(t));
  },
  p = function (e, t, i) {
    return new Promise(function (r, n) {
      var s = function (e) {
          try {
            a(i.next(e));
          } catch (e) {
            n(e);
          }
        },
        o = function (e) {
          try {
            a(i.throw(e));
          } catch (e) {
            n(e);
          }
        },
        a = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(s, o);
        };
      a((i = i.apply(e, t)).next());
    });
  },
  m = require("../../../../common/vendor.js"),
  g = require("utils/tools.js"),
  y = require("api/index.js"),
  k = require("../stock-markets-base/utils/lct.js"),
  S = require("../stock-hq-core/utils/market.js"),
  v = require("../stock-hq-core/utils/storage/local.js");
require("../../js-cookie/src/js.cookie.js");
var b = require("../stock-hq-data/index.js"),
  w = [
    "pages/index/information/main",
    "pages/index/index",
    "pages/index/market",
    "pages/index/trade",
    "pages/index/account/main",
  ],
  _ = -1,
  R = ["none", "fund_tab", "jump_link"];
function C(e) {
  var t = e.wujiConfigList,
    i = void 0 === t ? [] : t,
    n = e.stockRelatedFund,
    s = void 0 === n ? {} : n,
    o = e.tabList,
    a = void 0 === o ? [] : o,
    c = e.setRenderStock;
  return {
    dynamicRelatedModules: (function (e) {
      var t = e.wujiConfigList,
        i = e.stockRelatedFund,
        n = e.renderStock;
      return Array.isArray(t) && i
        ? t
            .filter(function (e) {
              return null == e ? void 0 : e.etfs_key;
            })
            .map(function (e) {
              var t = e.tablist_key || e.etfs_key,
                s = F(i, e.etfs_key),
                o = 1 === e.isOuterFund,
                a = (function () {
                  var e,
                    t,
                    i =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = null != (e = i.isShow) ? e : i.is_show,
                    n = Number(i.precision);
                  return {
                    key: i.key || "",
                    text: i.text || "",
                    isShow: !1 !== r,
                    redUp: !!(null != (t = i.redUp) ? t : i.red_up),
                    suffix: i.suffix || i.unit || "",
                    precision: Number.isInteger(n) && n >= 0 ? n : null,
                  };
                })(e.right_info),
                c = n(s).map(function (e) {
                  return (function (e, t) {
                    if (!t || !t.key) return e;
                    var i = null == e ? void 0 : e[t.key],
                      r = (function (e, t) {
                        if (null == e || "" === e) return "";
                        var i = t.suffix || "",
                          r = Number(e),
                          n = Number.isInteger(t.precision) && t.precision >= 0,
                          s = String(e);
                        return (
                          (n || t.redUp) &&
                            Number.isFinite(r) &&
                            ((s = n ? r.toFixed(t.precision) : String(r)),
                            t.redUp && r > 0 && (s = "+".concat(s))),
                          i && !s.endsWith(i) ? "".concat(s).concat(i) : s
                        );
                      })(i, t);
                    return f(d({}, e), {
                      rightInfoName: t.text || "",
                      rightInfoValue: r,
                      rightInfoValueClass: t.redUp ? P(i) : "",
                      rightInfoVisible: !(!t.isShow || !r),
                    });
                  })(e, a);
                }),
                u = (function (e) {
                  var t = null == e ? void 0 : e.label_cnt;
                  if (!t || "object" != r(t)) return null;
                  var i = Number(t.mpweapp);
                  return !Number.isInteger(i) || i <= 0 ? null : i;
                })(e),
                l = u
                  ? (function (e, t) {
                      return e.map(function (e) {
                        return e && Array.isArray(e.labelList)
                          ? f(d({}, e), { labelList: e.labelList.slice(0, t) })
                          : e;
                      });
                    })(c, u)
                  : c,
                h = (function (e) {
                  return R.includes(e) ? e : "fund_tab";
                })(e.more_btn_type),
                p = (e.jump_link || {}).mpweapp || "";
              return {
                key: t,
                dataKey: e.etfs_key,
                tabKey: e.tablist_key || t,
                isOuterFund: o,
                title: x(e.module_title, i),
                listData: l,
                listLimit: A(e.all_tab_limit, h, l.length),
                moreBtnText: e.more_btn_text || "",
                moreBtnType: h,
                showMoreBtn: "jump_link" === h && !!p,
                jumpLink: p,
                module: e.report_key || "",
              };
            })
        : [];
    })({
      wujiConfigList: i,
      stockRelatedFund: s,
      renderStock: function (e) {
        return "function" == typeof c ? c(e) : j(e);
      },
    }),
    tabList: j(a),
  };
}
function B(e, t) {
  return j(e).filter(function (e) {
    return e.tabKey === t;
  });
}
function x(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e && "string" == typeof e
    ? e.replace(/\$\{([^}]+)\}/g, function (e, i) {
        var r;
        if ("stock" === i)
          return (null == (r = t.stock) ? void 0 : r.name) || "";
        var n = F(t, i);
        return null == n ? "" : n;
      })
    : "";
}
function A(e, t, i) {
  if ("none" === t) return _;
  var r = (function (e) {
    var t = Number(e);
    return Number.isFinite(t) && t > 0 ? t : _;
  })(e);
  return "jump_link" === t && r === _ ? i : r;
}
function T(e, t) {
  return j(e)
    .filter(function (e) {
      return (function (e, t) {
        return (
          "fund_all" === t ||
          ("fund_cnjj" === t
            ? !0 !== e.isOuterFund
            : "fund_cwjj" === t && !0 === e.isOuterFund)
        );
      })(e, t);
    })
    .map(function (e) {
      return ["fund_cnjj", "fund_cwjj"].includes(t) &&
        "fund_tab" === e.moreBtnType
        ? f(d({}, e), { listLimit: _, showMoreBtn: !1 })
        : e;
    });
}
function F(e, t) {
  if (t)
    return String(t)
      .split(".")
      .reduce(function (e, t) {
        return null == e ? void 0 : e[t];
      }, e);
}
function P(e) {
  var t = Number(e);
  return Number.isNaN(t)
    ? ""
    : 0 === t
    ? "price-equal"
    : t > 0
    ? "price-up"
    : "price-down";
}
function j(e) {
  return Array.isArray(e) ? i(e) : [];
}
var I = { appid: "base", schemaid: "gray_user_config", size: "total" };
function M(e, t, i, r, n) {
  var s;
  return (function (e, t, i, r) {
    return new (i || (i = Promise))(function (n, s) {
      function o(e) {
        try {
          c(r.next(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function c(e) {
        var t;
        e.done
          ? n(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                })).then(o, a);
      }
      c((r = r.apply(e, t || [])).next());
    });
  })(this, void 0, void 0, function () {
    var n, o, a, c, u, l, h;
    return (function (e, t) {
      var i,
        r,
        n,
        s,
        o = {
          label: 0,
          sent: function () {
            if (1 & n[0]) throw n[1];
            return n[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (s = { next: a(0), throw: a(1), return: a(2) }),
        "function" == typeof Symbol &&
          (s[Symbol.iterator] = function () {
            return this;
          }),
        s
      );
      function a(s) {
        return function (a) {
          return (function (s) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; o; )
              try {
                if (
                  ((i = 1),
                  r &&
                    (n =
                      2 & s[0]
                        ? r.return
                        : s[0]
                        ? r.throw || ((n = r.return) && n.call(r), 0)
                        : r.next) &&
                    !(n = n.call(r, s[1])).done)
                )
                  return n;
                switch (((r = 0), n && (s = [2 & s[0], n.value]), s[0])) {
                  case 0:
                  case 1:
                    n = s;
                    break;
                  case 4:
                    return o.label++, { value: s[1], done: !1 };
                  case 5:
                    o.label++, (r = s[1]), (s = [0]);
                    continue;
                  case 7:
                    (s = o.ops.pop()), o.trys.pop();
                    continue;
                  default:
                    if (
                      !(
                        (n = (n = o.trys).length > 0 && n[n.length - 1]) ||
                        (6 !== s[0] && 2 !== s[0])
                      )
                    ) {
                      o = 0;
                      continue;
                    }
                    if (3 === s[0] && (!n || (s[1] > n[0] && s[1] < n[3]))) {
                      o.label = s[1];
                      break;
                    }
                    if (6 === s[0] && o.label < n[1]) {
                      (o.label = n[1]), (n = s);
                      break;
                    }
                    if (n && o.label < n[2]) {
                      (o.label = n[2]), o.ops.push(s);
                      break;
                    }
                    n[2] && o.ops.pop(), o.trys.pop();
                    continue;
                }
                s = t.call(e, o);
              } catch (e) {
                (s = [6, e]), (r = 0);
              } finally {
                i = n = 0;
              }
            if (5 & s[0]) throw s[1];
            return { value: s[0] ? s[1] : void 0, done: !0 };
          })([s, a]);
        };
      }
    })(this, function (d) {
      switch (d.label) {
        case 0:
          return (
            d.trys.push([0, 4, , 5]),
            (n = r),
            (o = []),
            e ? (void 0 !== n ? [3, 2] : [4, t.get(I)]) : [2, !1]
          );
        case 1:
          if (200 !== (a = d.sent()).code) return [2, !1];
          if (
            !(
              (c =
                null === (s = a.data) || void 0 === s
                  ? void 0
                  : s.findIndex(function (e) {
                      return e.key === i || Number(e.key) === Number(i);
                    })) >= 0
            )
          )
            return [2, !1];
          n = a.data[c].grayScale || 0;
          try {
            o = (o = JSON.parse(a.data[c].whitelist) || []).map(function (e) {
              return "".concat(e).trim();
            });
          } catch (e) {
            o = [];
          }
          return [3, 3];
        case 2:
          if (!(n >= 0 && n <= 99)) return [2, !1];
          d.label = 3;
        case 3:
          return (
            (u = new m.MurmurHash3(e, parseInt(i)).result()),
            (l = u % 100),
            (h =
              o.findIndex(function (t) {
                return t === e;
              }) >= 0),
            [2, l < n || h]
          );
        case 4:
          return d.sent(), [2, !1];
        case 5:
          return [2];
      }
    });
  });
}
var L = function (e, t, i, r) {
    return new (i || (i = Promise))(function (n, s) {
      function o(e) {
        try {
          c(r.next(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function c(e) {
        var t;
        e.done
          ? n(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                })).then(o, a);
      }
      c((r = r.apply(e, t || [])).next());
    });
  },
  E = function (e, t) {
    var i,
      r,
      n,
      s,
      o = {
        label: 0,
        sent: function () {
          if (1 & n[0]) throw n[1];
          return n[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (s = { next: a(0), throw: a(1), return: a(2) }),
      "function" == typeof Symbol &&
        (s[Symbol.iterator] = function () {
          return this;
        }),
      s
    );
    function a(s) {
      return function (a) {
        return (function (s) {
          if (i) throw new TypeError("Generator is already executing.");
          for (; o; )
            try {
              if (
                ((i = 1),
                r &&
                  (n =
                    2 & s[0]
                      ? r.return
                      : s[0]
                      ? r.throw || ((n = r.return) && n.call(r), 0)
                      : r.next) &&
                  !(n = n.call(r, s[1])).done)
              )
                return n;
              switch (((r = 0), n && (s = [2 & s[0], n.value]), s[0])) {
                case 0:
                case 1:
                  n = s;
                  break;
                case 4:
                  return o.label++, { value: s[1], done: !1 };
                case 5:
                  o.label++, (r = s[1]), (s = [0]);
                  continue;
                case 7:
                  (s = o.ops.pop()), o.trys.pop();
                  continue;
                default:
                  if (
                    !(
                      (n = (n = o.trys).length > 0 && n[n.length - 1]) ||
                      (6 !== s[0] && 2 !== s[0])
                    )
                  ) {
                    o = 0;
                    continue;
                  }
                  if (3 === s[0] && (!n || (s[1] > n[0] && s[1] < n[3]))) {
                    o.label = s[1];
                    break;
                  }
                  if (6 === s[0] && o.label < n[1]) {
                    (o.label = n[1]), (n = s);
                    break;
                  }
                  if (n && o.label < n[2]) {
                    (o.label = n[2]), o.ops.push(s);
                    break;
                  }
                  n[2] && o.ops.pop(), o.trys.pop();
                  continue;
              }
              s = t.call(e, o);
            } catch (e) {
              (s = [6, e]), (r = 0);
            } finally {
              i = n = 0;
            }
          if (5 & s[0]) throw s[1];
          return { value: s[0] ? s[1] : void 0, done: !0 };
        })([s, a]);
      };
    }
  },
  N = m.StockBridge.ENV === m.EnvTypeEnum.MP,
  q = N ? getApp().globalData : "",
  O = ["bj", "ft", "cs", "nq", "fu", "fx", "sp", "uk"],
  D = "wzq" === m.StockBridge.ENV ? "search/CACHE_KEY" : "_search_history",
  U =
    "wzq" === m.StockBridge.ENV
      ? "pro/search-ai-new-user"
      : "lite/search-ai-new-user",
  K =
    "wzq" === m.StockBridge.ENV
      ? "pro/search-ai-current-text"
      : "lite/search-ai-current-text",
  H =
    "wzq" === m.StockBridge.ENV
      ? "pro/search-ai-displayed-text"
      : "lite/search-ai-displayed-text",
  z =
    "wzq" === m.StockBridge.ENV
      ? "pro/search-ai-all-question"
      : "lite/search-ai-all-question",
  J = "搜索问元宝，投资问题有答案",
  V = 0,
  W = null,
  G = null,
  $ = null,
  Q = new Set(),
  X = {
    options: { styleIsolation: "shared" },
    components: {
      hotSearch: function () {
        return "./components/hotSearch.js";
      },
      listSearch: function () {
        return "./components/listSearch.js";
      },
      infoListPage: function () {
        return "./components/info-list-page.js";
      },
      pageFooter: function () {
        return "./components/page-footer.js";
      },
      tabbar: function () {
        return "./components/tabbar.js";
      },
      BubbleWzqxcx: function () {
        return "../../../asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.js";
      },
      QuickSearch: function () {
        return "../../../searchAi/@tencent/stock-ai-quick-search/Index.js";
      },
      Batch: function () {
        return "./components/batch/Index.js";
      },
      Popup: function () {
        return "./components/batch/Popup.js";
      },
      OffSiteFundAuthModal: function () {
        return "./components/OffSiteFundAuthModal.js";
      },
    },
    inject: [
      "hqBridge",
      "onCheckUserAgreementStatus",
      "didAgreeUserAgreement",
      "getAbtInfoUnion",
    ],
    provide: function () {
      return { theme: this.theme };
    },
    props: {
      queryData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      skin: { type: String, default: "white" },
    },
    data: function () {
      var e,
        t,
        i = m.StockBridge.getStorage(U),
        r = this.getCachePlaceholder();
      return {
        autofocus: !0,
        showOffSiteFundAuthModal: !1,
        lastAddedStock: null,
        barConfig: { placeholder: J, type: "default" },
        isSearching: !1,
        showClose: "hide",
        searchScene: "default",
        userStockReady: !1,
        searchTitleInput: "股票",
        searchResult: [],
        searchHistory: [],
        userStock: [],
        groups: [],
        currStock: {},
        currListType: "stock",
        batchShow: "close",
        hotStock: [],
        searchPlateResult: [],
        searchRankResult: [],
        searchInfoResult: [],
        searchFuncResult: [],
        aiReported: !1,
        searchCorrectResult: [],
        searchAiResult: [],
        searchFundResult: [],
        searchManagerResult: [],
        isStockLimit: !1,
        isPlateLimit: !1,
        isFundLimit: !1,
        isInnerPriority: !0,
        isFolder: !0,
        mapMarket: {
          sz: 0,
          sh: 1,
          hk: 2,
          us: 3,
          pt: "pt",
          fu: "fu",
          fx: "fx",
          ft: "ft",
          bj: "bj",
          nq: "nq",
          cs: "cs",
          uk: "uk",
          hd: "hd",
          zhai: "zhai",
          jj: "jj",
          sp: "sp",
        },
        showPrivacyPolicy: !1,
        newServ: null,
        inputConfirmed: 0,
        isReportedInput: !1,
        inputValue: "",
        keyword: "",
        protocolStatus:
          (null == (e = m.StockBridge.store) ? void 0 : e.protocolStatus) ||
          (null == (t = this.$mpUserAgreementData)
            ? void 0
            : t.protocolStatus) ||
          "",
        tabKey: "all",
        tabFundKey: "fund_all",
        tabConfig: [
          { name: "综合", key: "all" },
          { name: "股票", key: "stock" },
          { name: "板块", key: "plate" },
          { name: "基金", key: "fund" },
          { name: "资讯", key: "info" },
        ],
        tabFundConfig: [
          { name: "全部", key: "fund_all" },
          { name: "场内基金", key: "fund_cnjj" },
          { name: "场外基金", key: "fund_cwjj" },
          { name: "基金经理", key: "fund_manager" },
        ],
        listConfig: new Map([
          [
            "stock",
            {
              name: "股票",
              listName: "searchResult",
              module: "stock",
              limit: 6,
              isStock: !0,
            },
          ],
          [
            "plate",
            {
              name: "板块",
              listName: "searchPlateResult",
              module: "plate",
              limit: 3,
              isStock: !0,
            },
          ],
          [
            "info",
            {
              name: "资讯",
              listName: "searchInfoResult",
              module: "info",
              limit: 3,
              isStock: !1,
            },
          ],
          [
            "rank",
            {
              name: "热门ETF榜单",
              listName: "searchRankResult",
              module: "searchModuleETFRanking",
              limit: 3,
              isStock: !0,
            },
          ],
          [
            "func",
            {
              name: "功能",
              listName: "searchFuncResult",
              module: "func",
              isStock: !1,
            },
          ],
          [
            "correct",
            {
              name: "大家还在搜",
              listName: "searchCorrectResult",
              module: "searchModuleAllGuess",
              isStock: !0,
            },
          ],
          [
            "aiGuess",
            {
              name: "猜你想问",
              listName: "searchAiResult",
              module: "guessquestion",
              isStock: !1,
            },
          ],
          [
            "fund",
            {
              name: "场外基金",
              listName: "searchCWJJResult",
              module: "searchModuleAllFund",
              limit: 2,
              isStock: !0,
            },
          ],
        ]),
        tabList: ["stock", "sector", "correct", "news"],
        renderListOrder: [],
        bubbleConfig: {
          main_text: "点击问元宝入口，提问更多投资问题",
          show_condition: "",
          arrow_pos: "bottom",
          colum_pos: "right",
          bubble_id: ".btn-cancel",
          can_close: 1,
          is_ref: 0,
          com_ref: "",
          is_fixed: 1,
          is_scroll_view: 0,
        },
        isAINewUser: i || { isNewUser: !0, time: 0 },
        showBubble: !1,
        cachePlaceholder: r,
        hasSmartBoxValue: !1,
        smartBoxReportInfo: {},
        smartBoxReportedMap: {},
        reportInfo: {},
        showRemovePopup: !1,
        intention: "",
        toggleAdded: !0,
        isSearchingNoData: !1,
        abtModule: "",
        isLctFundJumpGray: !1,
        resortJJFlag: !1,
        isResortJJValid: !1,
        relatedETFRenderConfig: {},
        isRelatedETFRenderConfigReady: !1,
        dynamicRelatedModules: [],
        dynamicListMap: {},
        dynamicListConfigKeys: [],
      };
    },
    computed: {
      placeholder: function () {
        var e, t;
        return "default" !== (null == (e = this.barConfig) ? void 0 : e.type)
          ? (null == (t = this.barConfig) ? void 0 : t.placeholder) || J
          : !this.isAINewUser.isNewUser &&
            this.cachePlaceholder &&
            "default" === this.searchScene
          ? this.cachePlaceholder
          : J;
      },
      renderPlaceholder: function () {
        var e = String(this.placeholder || ""),
          t = Array.from(e);
        return t.length > 15 ? "".concat(t.slice(0, 15).join(""), "...") : e;
      },
      isMP: function () {
        return N;
      },
      isLite: function () {
        return ["wzqlight", "mpwzq"].includes("mpweapp");
      },
      isWzq: function () {
        return "wzq" === m.StockBridge.ENV;
      },
      theme: function () {
        return this.isLite ? "lite" : "profession";
      },
      pageSearchFrom: function () {
        return this.isSearching
          ? this.inputConfirmed
            ? "searchresultpage"
            : "suggestpage"
          : "searchpage";
      },
      showTabBar: function () {
        return (
          !this.onlyCorrect &&
          !this.isSearchingNoData &&
          this.inputConfirmed &&
          "remind" !== this.searchScene
        );
      },
      onlyCorrect: function () {
        return this.isOnlyOneList("correct");
      },
      notSearchingNoData: function () {
        var e, t, i;
        if (this.isSearching || !this.userStockReady) return !1;
        switch (this.searchScene) {
          case "remind":
            return !(null == (e = this.userStock) ? void 0 : e.length);
          case "sqEdit":
            return !(
              (null == (t = this.userStock) ? void 0 : t.length) ||
              (this.isPrivacyAgreementAuthorized &&
                (null == (i = this.searchHistory) ? void 0 : i.length))
            );
          default:
            return !1;
        }
      },
      isPrivacyAgreementAuthorized: function () {
        return "agree" === this.protocolStatus;
      },
      showSearchHistoryList: function () {
        return (
          this.isPrivacyAgreementAuthorized &&
          ("sqEdit" === this.searchScene ||
            ("default" === this.searchScene && this.hotStock.length)) &&
          this.searchHistory.length
        );
      },
      groupId: function () {
        var e,
          t =
            m.StockBridge.ENV === m.EnvTypeEnum.MP
              ? this.queryData
              : null == (e = this.$route)
              ? void 0
              : e.query;
        return (null == t ? void 0 : t.groupId) || "";
      },
      isPc: function () {
        var e, t;
        return (
          this.isMP &&
          (null ==
          (t = null == (e = null == q ? void 0 : q.detect) ? void 0 : e.env)
            ? void 0
            : t.IS_PCWEIXIN)
        );
      },
      searchCWJJResult: function () {
        return this.searchFundResult.filter(function (e) {
          return "jj" === e.type;
        });
      },
      searchCNJJResult: function () {
        return this.searchFundResult.filter(function (e) {
          return "jj" !== e.type;
        });
      },
      renderableFundDynamicModules: function () {
        return this.getRenderFundList().dynamicModules.filter(function (e) {
          return Array.isArray(e.listData) && e.listData.length > 0;
        });
      },
    },
    watch: {
      showClose: {
        immediate: !0,
        handler: function (e) {
          e && m.StockBridge.report("base.search.img_ocr_brow");
        },
      },
      queryData: {
        deep: !0,
        handler: function (e) {
          if (this.isMP) {
            var t = e || {},
              i = t.searchType,
              r = t.source,
              n = i || ("sqEdit" === r ? "sqEdit" : "default");
            n !== this.searchScene &&
              this.init({ searchFrom: e.source, searchScene: n }, !1);
          }
        },
      },
    },
    created: function () {
      return p(
        this,
        null,
        t().mark(function e() {
          var i, r;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((this.newServ = new g.BatchAPIService(m.StockBridge)),
                      this.syncProtocolStatus(),
                      "mp" !== m.StockBridge.ENV && this.init(),
                      this.getCachePlaceholder(),
                      (this.debounceSubmit = g.debounce(500, this.submitFunc)),
                      !this.isLite)
                    ) {
                      e.next = 5;
                      break;
                    }
                    return (
                      (e.next = 3),
                      this.handleAbtConfig(
                        this.isMP
                          ? "ui_layer_1760516275161"
                          : "ui_layer_1760516090381",
                        "base.search.card_version_baoguang"
                      )
                    );
                  case 3:
                    "New" === (null == (i = e.sent) ? void 0 : i.Version) &&
                      (this.abtModule = "ai_guess_new");
                  case 5:
                    return (
                      this.initLctFundJumpGray(),
                      (e.next = 8),
                      this.handleAbtConfig(
                        "search_fund_ab_layer_20260518",
                        "",
                        { channel: 0, scenes: -1 }
                      )
                    );
                  case 8:
                    (r = e.sent),
                      (this.resortJJFlag =
                        "a" === (null == r ? void 0 : r.type)),
                      (this.isResortJJValid = ["a", "b"].includes(
                        null == r ? void 0 : r.type
                      )),
                      (this.reportInfo =
                        (null == r ? void 0 : r.report_info) || {});
                  case 10:
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
    mounted: function () {
      this.handleDirectResult(),
        this.handleShowBubble(),
        this.syncProtocolStatus(),
        this.subscribeProtocolStatus(),
        this.isPrivacyAgreementAuthorized &&
          !this.searchHistory.length &&
          this.getSearchHistory(),
        this.getValFromQuery(),
        m.StockBridge.busOn("common-toggleAdded", this.handleToggleAdded);
    },
    beforeDestroy: function () {
      this.clearCachePlaceholder(),
        this.clear(),
        this.unsubscribeProtocolStatus(),
        m.StockBridge.busOff("common-toggleAdded", this.handleToggleAdded);
    },
    activated: function () {
      this.syncProtocolStatus(),
        this.init(),
        (this.cachePlaceholder = this.getCachePlaceholder()),
        this.ensurePlaceholder();
    },
    deactivated: function () {
      (this.showBubble = !1), this.clear(), this.rotatePlaceholder();
    },
    onPageShow: function () {
      this.syncProtocolStatus(),
        this.init({ searchScene: this.searchScene }, !1),
        (this.cachePlaceholder = this.getCachePlaceholder()),
        this.ensurePlaceholder();
    },
    onPageHide: function () {
      var e = this;
      (this.toggleAdded = !1),
        clearTimeout($),
        ($ = setTimeout(
          function () {
            e.rotatePlaceholder();
          },
          m.StockBridge.ENV === m.EnvTypeEnum.MP ? 500 : 0
        ));
    },
    methods: {
      onOffSiteFundAuthConfirm: function () {},
      onOffSiteFundAuthCancel: function () {},
      onOffSiteFundAuthClose: function () {
        (this.showOffSiteFundAuthModal = !1),
          m.StockBridge.toast("已添加自选", "success", 1e3);
      },
      syncProtocolStatus: function () {
        var e,
          t,
          i,
          r = null == (e = m.StockBridge.store) ? void 0 : e.protocolStatus;
        if ("string" != typeof r || "" === r) {
          var n =
            null == (t = this.$mpUserAgreementData) ? void 0 : t.protocolStatus;
          "string" != typeof n || "" === n
            ? "boolean" ==
                typeof (null == (i = this.didAgreeUserAgreement)
                  ? void 0
                  : i.value) &&
              (this.protocolStatus = this.didAgreeUserAgreement.value
                ? "agree"
                : "reject")
            : (this.protocolStatus = n);
        } else this.protocolStatus = r;
      },
      handleProtocolStatusChange: function (e) {
        (this.protocolStatus = e),
          this.isPrivacyAgreementAuthorized ||
            ((this.searchHistory = []),
            (this.searchAiResult = []),
            (this.intention = ""),
            (this.hasSmartBoxValue = !1)),
          this.setRenderListOrder(),
          this.isPrivacyAgreementAuthorized &&
            !this.searchHistory.length &&
            this.getSearchHistory();
      },
      subscribeProtocolStatus: function () {
        var e, t, i, r;
        null ==
          (t =
            null == (e = m.StockBridge.store)
              ? void 0
              : e.subscribeProtocolStatus) ||
          t.call(e, this.handleProtocolStatusChange),
          null ==
            (r =
              null == (i = this.$mpUserAgreementData)
                ? void 0
                : i.subscribeProtocolStatus) ||
            r.call(i, this.handleProtocolStatusChange);
      },
      unsubscribeProtocolStatus: function () {
        var e, t, i, r;
        null ==
          (t =
            null == (e = m.StockBridge.store)
              ? void 0
              : e.unsubscribeProtocolStatus) ||
          t.call(e, this.handleProtocolStatusChange),
          null ==
            (r =
              null == (i = this.$mpUserAgreementData)
                ? void 0
                : i.unsubscribeProtocolStatus) ||
            r.call(i, this.handleProtocolStatusChange);
      },
      handleAbtConfig: function (e, t) {
        var i = this,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return new Promise(function (n) {
          m.StockBridge.abtCreate({
            moduleID: e,
            params: d(
              { channel: i.isLite ? 6 : i.isWzq ? 0 : 3, type: "query" },
              r
            ),
            success: function (e) {
              var i = e.data,
                r = void 0 === i ? [] : i,
                s = (null == r ? void 0 : r[0]) || {};
              if (t) {
                var o = s.report_info;
                m.StockBridge.report(t, { report_info: o });
              }
              n(s);
            },
            fail: function (e) {
              n({});
            },
          });
        });
      },
      initLctFundJumpGray: function () {
        return p(
          this,
          null,
          t().mark(function e() {
            var i, r;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        !(i = this.isMP
                          ? m.StockBridge.getStorage("_qluin")
                          : m.StockBridge.getCookie("wzq_qluin")))
                      ) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (e.next = 5),
                        (r = i),
                        "0065871680",
                        L(void 0, void 0, void 0, function () {
                          return E(this, function (e) {
                            switch (e.label) {
                              case 0:
                                return (
                                  e.trys.push([0, 2, , 3]),
                                  [4, M(r, m.Wuji, "0065871680", void 0)]
                                );
                              case 1:
                                return [2, e.sent()];
                              case 2:
                                return e.sent(), [2, !1];
                              case 3:
                                return [2];
                            }
                          });
                        })
                      );
                    case 5:
                      (this.isLctFundJumpGray = !!e.sent),
                        (e.t0 = this.isLctFundJumpGray),
                        (e.next = 10);
                      break;
                    case 9:
                      e.t0 = ((this.isLctFundJumpGray = !1), !1);
                    case 10:
                      return e.abrupt("return", e.t0);
                    case 13:
                      return (
                        (e.prev = 13),
                        (e.t1 = e.catch(0)),
                        e.abrupt("return", ((this.isLctFundJumpGray = !1), !1))
                      );
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 13]]
            );
          })
        );
      },
      handleDirectResult: function () {
        var e,
          t =
            null == (e = null == this ? void 0 : this.queryData)
              ? void 0
              : e.directResult;
        if (t)
          try {
            (this.inputValue = decodeURIComponent(t)),
              this.getSearchResult("", this.inputValue);
          } catch (e) {}
      },
      handleToggleAdded: function () {
        this.toggleAdded = !0;
      },
      onFetchFinish: function (e, t) {
        var i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        (this.hasSmartBoxValue = t),
          (this.smartBoxReportInfo = i),
          this.reportSmartboxBrow();
      },
      onExpandBtclick: function (e) {
        e
          ? m.StockBridge.report(
              "jichu.search.ai_search_smartbox_expand_click",
              {
                searchText: this.keyword,
                search_scene: this.inputConfirmed ? this.tabKey : "suggest",
                report_info: this.reportInfo,
              }
            )
          : m.StockBridge.report(
              "jichu.search.ai_search_smartbox_collapse_click",
              {
                searchText: this.keyword,
                search_scene: this.inputConfirmed ? this.tabKey : "suggest",
                report_info: this.reportInfo,
              }
            );
      },
      getRenderFundList: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : this.tabFundKey;
        return (function (e) {
          var t = e.tabFundKey,
            i = void 0 === t ? "fund_all" : t,
            r = e.searchFundResult,
            n = void 0 === r ? [] : r,
            s = e.searchManagerResult,
            o = void 0 === s ? [] : s,
            a = e.dynamicRelatedModules,
            c = void 0 === a ? [] : a,
            u = n.filter(function (e) {
              return "jj" === e.type;
            }),
            l = n.filter(function (e) {
              return "jj" !== e.type;
            }),
            h = T(c, "fund_all").sort(function (e, t) {
              return Number(e.isOuterFund) - Number(t.isOuterFund);
            }),
            d = T(c, "fund_cnjj"),
            f = T(c, "fund_cwjj"),
            p = {
              fund_all: {
                dynamicModules: h,
                fund: n,
                manager: o,
                limitFund: o.length ? 8 : _,
                limitManager: 3,
              },
              fund_cnjj: {
                dynamicModules: d,
                fund: l,
                manager: [],
                limitFund: _,
              },
              fund_cwjj: {
                dynamicModules: f,
                fund: u,
                manager: [],
                limitFund: _,
              },
              fund_manager: {
                dynamicModules: [],
                fund: [],
                manager: o,
                limitManager: _,
              },
            }[i] || { dynamicModules: [], fund: [], manager: [] };
          return (
            (p.listExisted = ["dynamicModules", "fund", "manager"].filter(
              function (e) {
                return "dynamicModules" === e
                  ? j(p.dynamicModules).some(function (e) {
                      return j(null == e ? void 0 : e.listData).length > 0;
                    })
                  : j(p[e]).length > 0;
              }
            )),
            p
          );
        })({
          tabFundKey: e,
          searchFundResult: this.searchFundResult,
          searchManagerResult: this.searchManagerResult,
          dynamicRelatedModules: this.dynamicRelatedModules,
        });
      },
      getCachePlaceholder: function () {
        return (
          (m.StockBridge.ENV === m.EnvTypeEnum.MP
            ? m.StockBridge.getStorage(K)
            : m.StockBridge.getSession(K)) || ""
        );
      },
      clearCachePlaceholder: function () {
        m.StockBridge.ENV === m.EnvTypeEnum.MP
          ? m.StockBridge.setStorage(K, "")
          : m.StockBridge.setSession(K, "");
      },
      rotatePlaceholder: function () {
        var e;
        if (
          !(null == (e = this.isAINewUser) ? void 0 : e.isNewUser) &&
          "default" === this.searchScene
        ) {
          var t = m.StockBridge.getStorage(z) || [];
          t.length ? this.doRotate(t) : this.fetchAndRotatePlaceholder();
        }
      },
      fetchAndRotatePlaceholder: function () {
        return p(
          this,
          null,
          t().mark(function e() {
            var i, r, n, s, o;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        y.serviceApi.getSearchIndex(m.StockBridge, {})
                      );
                    case 3:
                      if ((i = e.sent)) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return");
                    case 6:
                      if (
                        ((r = i.aiIndex || {}),
                        (n = r.allQuestion),
                        (s = void 0 === n ? [] : n),
                        (o = Array.from(new Set(s))).length)
                      ) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return");
                    case 9:
                      m.StockBridge.setStorage(z, o),
                        this.doRotate(o),
                        (e.next = 14);
                      break;
                    case 12:
                      (e.prev = 12), (e.t0 = e.catch(0));
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 12]]
            );
          })
        );
      },
      doRotate: function (e) {
        var t = m.StockBridge.getStorage(H) || [],
          r = e.filter(function (e) {
            return !t.includes(e);
          }),
          n = r.length > 0 ? r[0] : e[0],
          s = i(t);
        s.length >= e.length && (s = s.slice(1)),
          (s = r.length > 0 ? [].concat(i(s), [n]) : [n]),
          m.StockBridge.setStorage(H, s),
          m.StockBridge.ENV === m.EnvTypeEnum.MP
            ? m.StockBridge.setStorage(K, n)
            : m.StockBridge.setSession(K, n),
          (this.cachePlaceholder = n);
      },
      ensurePlaceholder: function () {
        return p(
          this,
          null,
          t().mark(function e() {
            var i, r;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        !(null == (i = this.isAINewUser)
                          ? void 0
                          : i.isNewUser) &&
                        "default" === this.searchScene
                      ) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (!this.cachePlaceholder) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      if (!(r = m.StockBridge.getStorage(z) || []).length) {
                        e.next = 9;
                        break;
                      }
                      this.doRotate(r), (e.next = 11);
                      break;
                    case 9:
                      return (e.next = 11), this.fetchAndRotatePlaceholder();
                    case 11:
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
      handleShowBubble: function () {
        var e,
          t,
          i = this;
        if (!this.showBubble) {
          var r = null == (e = this.isAINewUser) ? void 0 : e.isNewUser,
            n = null == (t = this.isAINewUser) ? void 0 : t.time,
            s = !!(r && Date.now() - n > 6048e5);
          s &&
            ((this.isAINewUser = { isNewUser: !0, time: Date.now() }),
            m.StockBridge.setStorage(U, this.isAINewUser)),
            (this.showBubble = s),
            clearTimeout(V),
            this.$nextTick(function () {
              V = setTimeout(
                function () {
                  i.showBubble = !1;
                },
                i.isMP ? 3e3 : 4e3
              );
            });
        }
      },
      onTouchmove: function () {
        this.triggerBlur();
      },
      triggerBlur: function () {
        var e, t;
        null == (t = null == (e = this.$refs) ? void 0 : e.searchBox) ||
          t.blur();
      },
      init: function () {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.queryData,
          i =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.isMP || !i) {
          var r = t.searchFrom,
            n = void 0 === r ? "" : r,
            s = t.searchScene,
            o = void 0 === s ? "default" : s;
          if (
            ((this.searchScene = o),
            !this.isMP &&
              (this.$nextTick(function () {
                var t, i, r, n;
                e.isPrivacyAgreementAuthorized
                  ? null ==
                      (i = null == (t = e.$refs) ? void 0 : t.searchBox) ||
                    i.focus()
                  : null ==
                      (n = null == (r = e.$refs) ? void 0 : r.searchBox) ||
                    n.blur();
              }),
              n && (this.initStatus(), "stockDetail" === n)))
          ) {
            var a = d({}, this.$route.query);
            delete a.searchFrom,
              this.$router.replace({ path: this.$route.path, query: a });
          }
          this.queryHotStock(),
            this.getSearchHistory(),
            (this.toggleAdded || !this.isMP) &&
              this.reqUserStock(this.resUserStock);
          var c = m.StockBridge.getSession("SearchAnwen");
          this.isWzq &&
            !this.inputValue &&
            ["market", "choose"].includes(n) &&
            c &&
            (this.barConfig = c),
            this.keyword && this.reportSearchBrow(),
            m.StockBridge.report("jichu.search.ai_search_input_ai_ask_brow", {
              report_info: this.reportInfo,
            }),
            this.initRelatedETFRenderConfig();
        }
      },
      initRelatedETFRenderConfig: function () {
        var e = this;
        "default" !== this.searchScene ||
          this.isRelatedETFRenderConfigReady ||
          ((this.isRelatedETFRenderConfigReady = !0),
          (function () {
            return p(
              this,
              null,
              t().mark(function e() {
                var i;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            m.Wuji.get({
                              appid: "hq",
                              schemaid: "search_related_etf_render_config",
                              schemakey: "1cb2677ab6e94c37b00fb669801aca01",
                            })
                          );
                        case 3:
                          return (
                            (i = e.sent),
                            e.abrupt(
                              "return",
                              200 !== Number(null == i ? void 0 : i.code)
                                ? []
                                : (null == i ? void 0 : i.data) || []
                            )
                          );
                        case 7:
                          return (
                            (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            e.abrupt("return", [])
                          );
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            );
          })().then(function (t) {
            e.relatedETFRenderConfig = t;
          }));
      },
      clear: function () {
        clearTimeout(V), clearTimeout(W), clearTimeout(G), clearTimeout($);
      },
      queryHotStock: function () {
        return p(
          this,
          null,
          t().mark(function e() {
            var i, r, n, s;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ("default" === this.searchScene && !this.isSearching) {
                        e.next = 4;
                        break;
                      }
                      m.StockBridge.aegisReportEvent(
                        "MONITOR-SEARCH-BEFORE-QUERY-HOT-STOCK-ERROR",
                        {
                          ext3: JSON.stringify({
                            searchScene: this.searchScene,
                            isSearching: this.isSearching,
                          }),
                        }
                      ),
                        (e.next = 25);
                      break;
                    case 4:
                      return (
                        (e.prev = 4),
                        (e.next = 7),
                        y.serviceApi.getHotStock(m.StockBridge)
                      );
                    case 7:
                      if (((e.t1 = i = e.sent), null != e.t1)) {
                        e.next = 12;
                        break;
                      }
                      (e.t2 = void 0), (e.next = 13);
                      break;
                    case 12:
                      e.t2 = i.data;
                    case 13:
                      if (((e.t0 = e.t2), e.t0)) {
                        e.next = 16;
                        break;
                      }
                      e.t0 = {};
                    case 16:
                      (r = e.t0),
                        (n = r.stock),
                        (s = void 0 === n ? [] : n),
                        (this.hotStock =
                          null == s
                            ? void 0
                            : s.map(function () {
                                var e,
                                  t,
                                  i,
                                  r =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : [],
                                  n = b.utils.splitSymbol(r[0]) || {},
                                  s = n.scode,
                                  o = n.market,
                                  a = r[2],
                                  c =
                                    null == (e = r[0]) ? void 0 : e.slice(0, 2);
                                return {
                                  code: s,
                                  name: r[1],
                                  showScode: b.utils.trimScode(s),
                                  market: o,
                                  stockType: a,
                                  type: c,
                                  noAdd:
                                    "BK" === a && !b.utils.isHSPlate(o || c),
                                  showMarket:
                                    null ==
                                    (i =
                                      null == (t = r[0])
                                        ? void 0
                                        : t.slice(0, 2))
                                      ? void 0
                                      : i.toUpperCase(),
                                };
                              })),
                        m.StockBridge.report(
                          "base.search.card_version_list_rg_baoguang"
                        ),
                        (e.next = 25);
                      break;
                    case 22:
                      (e.prev = 22),
                        (e.t3 = e.catch(4)),
                        m.StockBridge.aegisReportEvent(
                          "MONITOR-SEARCH-QUERY-HOT-STOCK-ERROR",
                          { ext3: JSON.stringify(e.t3) }
                        );
                    case 25:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[4, 22]]
            );
          })
        );
      },
      isIndex: function (e, t) {
        var i, r, n, s;
        switch (t) {
          case null == (i = null == q ? void 0 : q.MARKET) ? void 0 : i.SA:
            return /^399/.test(e);
          case null == (r = null == q ? void 0 : q.MARKET) ? void 0 : r.HA:
            return /^000/.test(e);
          case null == (n = null == q ? void 0 : q.MARKET) ? void 0 : n.HK:
            return ["HSI", "HSCEI", "HSCCI"].indexOf(e) >= 0;
          case null == (s = null == q ? void 0 : q.MARKET) ? void 0 : s.US:
            return ["DJI", "INX", "IXIC"].indexOf(e) >= 0;
          default:
            return !1;
        }
      },
      switchTab: function (e) {
        var t = this,
          i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (this.tabKey = e),
          r &&
            ((this.inputConfirmed = 1),
            "fund" === e && this.switchTabFund("fund_cwjj"),
            setTimeout(function () {
              t.reportSearchBrow();
            })),
          this.scrollToTop(),
          i && !r && m.StockBridge.report("base.search.".concat(e, "tab_tap"));
      },
      switchTabFund: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (this.tabFundKey = e),
          t &&
            (this.scrollToTop(),
            m.StockBridge.report("base.search.sub_".concat(e, "tab_tap")));
      },
      scrollToTop: function () {
        clearTimeout(W),
          (W = setTimeout(function () {
            N ? m.wx$1.pageScrollTo({ scrollTop: 0 }) : window.scrollTo(0, 0);
          }, 1e3));
      },
      getSearchHistory: function () {
        "remind" !== this.searchScene &&
          !this.isSearching &&
          this.isPrivacyAgreementAuthorized &&
          (this.getSearchHistoryFromStorage(),
          this.searchHistory.length > 0 &&
            m.StockBridge.report("base.search.search_history_brow", {
              contentId: this.searchHistory
                .map(function (e) {
                  return e.code;
                })
                .join(","),
            }));
      },
      getSearchHistoryFromStorage: function () {
        var t = this,
          i = function (i, r, n) {
            var s,
              o =
                null ==
                (s = Object.entries(t.mapMarket).find(function (t) {
                  var r = e(t, 2),
                    n = (r[0], r[1]);
                  return String(n) === String(i);
                }))
                  ? void 0
                  : s[0];
            return o
              ? { code: "".concat(o).concat(r), stockType: n }
              : { code: "".concat(i).concat(r), stockType: "BK" };
          },
          r = (v.sls.getItem(D) || []).map(function (e) {
            return {
              name: e.name,
              suggest: e.suggest,
              status: e.status,
              code: t.isWzq ? e.symbol : i(e.market, e.scode, e.stockType).code,
              type: t.isWzq
                ? e.stocktype
                : i(e.market, e.scode, e.stockType).stockType,
            };
          });
        this.searchHistory = this.setRenderStock(r);
      },
      setSearchHistory: function (e) {
        var t = this,
          i = v.sls.getItem(D);
        i instanceof Array || (i = []);
        for (
          var r = e.name,
            n = e.code,
            s = e.isChoose,
            o = e.suggest,
            a = e.status,
            c = e.scode,
            u = e.market,
            l = e.stockType,
            h = e.type,
            d = e.noAdd,
            f = this.isWzq
              ? {
                  name: r,
                  symbol: n,
                  stocktype: l,
                  followed: s,
                  suggest: o,
                  status: a,
                  scode: c,
                  type: "pt" === u ? "p" : String(u),
                }
              : {
                  name: r,
                  isChoose: s,
                  suggest: o,
                  status: a,
                  scode: c,
                  stockType: l,
                  market: d ? h : u,
                },
            p = function (e) {
              return t.isWzq
                ? e.symbol === f.symbol
                : e.scode === f.scode && String(e.market) === String(f.market);
            },
            m = 0;
          m < i.length;
          m++
        )
          p(i[m]) && i.splice(m, 1);
        i.unshift(f), v.sls.setItem(D, i.slice(0, 15));
      },
      confirmRemoveHistory: function () {
        m.wx$1.removeStorageSync(D),
          this.resetHistoryData(),
          m.StockBridge.report(
            "base.search.card_version_history_click_delete_ok"
          ),
          (this.showRemovePopup = !1);
      },
      cancelRemoveHistory: function () {
        m.StockBridge.report(
          "base.search.card_version_history_click_delete_cancel"
        ),
          (this.showRemovePopup = !1);
      },
      removeSearchHistory: function () {
        var e = this;
        m.StockBridge.report("base.search.card_version_history_click_delete"),
          this.isMP
            ? (this.showRemovePopup = !0)
            : this.$dialog
                .confirm({
                  content: "确定删除全部搜索历史记录？",
                  confirmBtn: "确定",
                  maskClosable: !0,
                })
                .then(function () {
                  v.sls.removeItem(D),
                    e.resetHistoryData(),
                    m.StockBridge.report(
                      "base.search.card_version_history_click_delete_ok"
                    );
                });
      },
      resetHistoryData: function () {
        var e = this,
          t = { autofocus: !0, searchHistory: [] };
        Object.keys(t).forEach(function (i) {
          e[i] = t[i];
        });
      },
      reqUserStock: function (e) {
        return p(
          this,
          null,
          t().mark(function i() {
            var r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (this.userStockReady = !1),
                        (t.next = 3),
                        this.newServ.queryUserStock()
                      );
                    case 3:
                      if (((t.t0 = t.sent), t.t0)) {
                        t.next = 6;
                        break;
                      }
                      t.t0 = {};
                    case 6:
                      (r = t.t0),
                        "function" == typeof e && e(r),
                        (this.userStockReady = !0);
                    case 8:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this
            );
          })
        );
      },
      resUserStock: function (t) {
        var i,
          r,
          s,
          o = this;
        if (0 === parseInt(t.retcode, 10)) {
          var a =
            null ==
            (s =
              null ==
              (r =
                null == (i = null == t ? void 0 : t.grouplist)
                  ? void 0
                  : i.filter(function (e) {
                      var t;
                      return (
                        1 ==
                        +(null == (t = null == e ? void 0 : e.groupinfo)
                          ? void 0
                          : t.type)
                      );
                    }))
                ? void 0
                : r[0])
              ? void 0
              : s.stocklist;
          setTimeout(function () {
            var e;
            o.groups =
              null == (e = null == t ? void 0 : t.grouplist)
                ? void 0
                : e.map(function (e) {
                    return null == e ? void 0 : e.groupinfo;
                  });
          }),
            Q.clear();
          var c = a.map(function (e) {
            var t = e.code,
              i = e.name,
              r = e.scode,
              n = e.stock_type,
              s = e.status,
              a = null == t ? void 0 : t.slice(0, 2),
              c = o.mapMarket[a],
              u = b.utils.trimScode(r),
              l = g.getIconName(c, a, n);
            return (
              Q.add(t),
              {
                code: t,
                name: i,
                scode: r,
                stockType: n,
                status: s,
                type: a,
                market: c,
                showScode: u,
                iconClass: l,
              }
            );
          });
          "default" !== this.searchScene &&
            (this.userStock =
              "remind" === this.searchScene
                ? c.filter(function (e) {
                    return !O.includes(e.market);
                  })
                : c);
          var u = function (e) {
            e.forEach(function (t, i) {
              o.$set(e, i, f(d({}, t), { isChoose: Q.has(t.code) }));
            });
          };
          if ("remind" !== this.searchScene && !this.isSearching)
            return u(this.searchHistory), void this.reportHistoryBrow();
          var l,
            h = n(this.listConfig);
          try {
            for (h.s(); !(l = h.n()).done; ) {
              var p = e(l.value, 2),
                m = p[0],
                y = p[1];
              y.isStock &&
                u(
                  "fund" === m ? this.searchFundResult : this.getListByConfig(y)
                );
            }
          } catch (e) {
            h.e(e);
          } finally {
            h.f();
          }
        }
      },
      getLength: function (e) {
        for (var t = 0, i = 0; i < e.length; i++) {
          var r = e.charCodeAt(i);
          t += (r >= 1 && r <= 126) || (65376 <= r && r <= 65439) ? 1 : 3;
        }
        return t;
      },
      shouldTriggerAIClick: function (e) {
        var t,
          i,
          r,
          n,
          s =
            !e &&
            "default" === (null == (t = this.barConfig) ? void 0 : t.type),
          o =
            !this.intention ||
            (["baike", "factual-baike"].includes(this.intention) &&
              !this.hasSmartBoxValue),
          a =
            o &&
            "aiGuess" ===
              (null == (i = this.renderListOrder) ? void 0 : i[0]) &&
            "isLoading" !== (null == (r = this.searchAiResult) ? void 0 : r[0]),
          c =
            o &&
            this.isOnlyOneList("info") &&
            !(null == (n = this.searchInfoResult)
              ? void 0
              : n.some(function (t) {
                  var i;
                  return null == (i = null == t ? void 0 : t.news_title)
                    ? void 0
                    : i.includes(e);
                })),
          u = this.isSearchingNoData && !this.hasSmartBoxValue;
        return "default" === this.searchScene && (s || a || c || u);
      },
      inputConfirm: function (e, t) {
        var i,
          r,
          n,
          s,
          o = this,
          a =
            null ==
            (n =
              null ==
              (r =
                (null == e ? void 0 : e.detail) ||
                (null == (i = null == e ? void 0 : e.mp) ? void 0 : i.detail) ||
                (null == e ? void 0 : e.target))
                ? void 0
                : r.value)
              ? void 0
              : n.replace(/\s*/g, "");
        if (a)
          m.StockBridge.report("base.search.inputed", {
            report_info: this.reportInfo,
            searchText: a,
            input_comfirmed: this.inputConfirmed,
          });
        else if (
          "default" !== (null == (s = this.barConfig) ? void 0 : s.type) &&
          t
        )
          return void this.yyConfirm(e, t);
        this.shouldTriggerAIClick(a)
          ? this.handleButtonClick("keyboardtoai")
          : (this.inputConfirmed = 1),
          setTimeout(function () {
            o.reportSearchBrow();
          });
      },
      yyConfirm: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = this.barConfig;
        if (
          t ||
          (this.isWzq &&
            "default" !== (null == i ? void 0 : i.type) &&
            !this.inputValue)
        )
          if ("stock_type" === (null == i ? void 0 : i.type)) {
            var r = i.stock,
              n = r.symbol,
              s = r.name,
              o = r.wzq_market,
              a = null == n ? void 0 : n.slice(0, 2),
              c = null == n ? void 0 : n.slice(2),
              u = {
                type: a,
                name: s,
                scode: c,
                market: this.mapMarket[a],
                code: n,
              };
            ["400", "601", "ph", "pu"].includes(o) &&
              ((u.stockType = "BK"), (u.noAdd = !0)),
              m.StockBridge.report("base.search-index.search", { stockid: c }),
              this.jumpToDetail(u, 0, "yy");
          } else
            "text_type" === (null == i ? void 0 : i.type)
              ? ((this.inputValue = i.placeholder),
                this.submit(this.inputValue))
              : "config_type" === (null == i ? void 0 : i.type) &&
                (location.href = i.link);
        else this.inputConfirm(e, t);
      },
      handleKeyUp: function (e) {
        var t;
        "mp" !== m.StockBridge.ENV &&
          13 === e.keyCode &&
          (this.inputConfirm(e, !0),
          null == (t = null == e ? void 0 : e.target) || t.blur());
      },
      getSearchResult: function (e) {
        var t,
          i,
          r,
          n,
          s =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        try {
          var o;
          this.switchTab("all", !1),
            this.switchTabFund("fund_all"),
            this.showBubble && (this.showBubble = !1),
            s
              ? (o = s)
              : ((o = this.isMP
                  ? null ==
                    (i =
                      (null == e ? void 0 : e.detail) ||
                      (null == (t = null == e ? void 0 : e.mp)
                        ? void 0
                        : t.detail))
                    ? void 0
                    : i.value
                  : null ==
                    (n = null == (r = this.$refs) ? void 0 : r.searchBox)
                  ? void 0
                  : n.value),
                (this.inputConfirmed = 0),
                (this.aiReported = !1)),
            (o = o.replace(/(^\s*)|(\s*$)/g, "")).length > 100
              ? ((o = o.slice(0, 100)), (this.inputValue = o))
              : this.submit(o),
            this.isReportedInput ||
              ((this.isReportedInput = !0),
              m.StockBridge.report("base.search.inputed", {
                searchText: o,
                input_comfirmed: this.inputConfirmed,
              }));
        } catch (e) {
          m.StockBridge.aegisReportEvent("MONITOR-SEARCH-GET-RESULT-ERROR", {
            ext3: JSON.stringify(e),
          });
        }
      },
      handleScroll: g.throttle(500, function (e) {
        this.inputConfirmed ||
          e ||
          (this.reportSearchBrow(), (this.aiReported = !0));
      }),
      setRenderStock: function (e) {
        var t = this;
        if (!Array.isArray(e)) return [];
        try {
          var i = e.map(function (e) {
            var i,
              r = e.code,
              n = null == r ? void 0 : r.slice(0, 2),
              s =
                (null == r ? void 0 : r.slice(2).replace(/^\./, "")) || e.scode,
              o = null != (i = t.mapMarket[n]) ? i : e.market,
              a = e.stockType || e.type;
            return f(d({}, e), {
              scode: s,
              market: o,
              isChoose: Q.has(r),
              showScode: b.utils.trimScode(s),
              stockType: a,
              type: n,
              iconClass: g.getIconName(o, n, a),
              noAdd: "BK" === a && !b.utils.isHSPlate(o || n),
            });
          });
          return (
            "remind" === this.searchScene &&
              (i = i.filter(function (e) {
                return !O.includes(e.market);
              })),
            i
          );
        } catch (i) {
          return (
            m.StockBridge.aegisReportEvent(
              "MONITOR-SEARCH-SET-RENDER-STOCK-ERROR",
              { ext3: JSON.stringify(i) }
            ),
            []
          );
        }
      },
      submit: function (e) {
        this.debounceSubmit(e);
      },
      submitFunc: function (e) {
        return p(
          this,
          null,
          t().mark(function i() {
            var r,
              n,
              s,
              o,
              a,
              c,
              u,
              l,
              h,
              d,
              f,
              p,
              g,
              k,
              S,
              v,
              b,
              w,
              _,
              R,
              B,
              x,
              A,
              T,
              F,
              P,
              j,
              I,
              M,
              L,
              E,
              N,
              q,
              O,
              D,
              U,
              K,
              H,
              z,
              J,
              V,
              W,
              G,
              $ = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (e) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        (m.StockBridge.aegisReportEvent(
                          "MONITOR-SEARCH-SUBMITFUNC-ERROR",
                          { ext3: JSON.stringify({ value: e }) }
                        ),
                        this.closeSearchResult())
                      );
                    case 2:
                      return (
                        (t.prev = 2),
                        (r =
                          "remind" === this.searchScene
                            ? {
                                query: e,
                                stockFlag: 1,
                                labelFlag: 1,
                                limit: 30,
                              }
                            : {
                                query: e,
                                stockFlag: 1,
                                ptFlag: 1,
                                newsFlag: 1,
                                labelFlag: 1,
                                fundFlag: 1,
                                ManagerFlag: 1,
                                funcFlag: 1,
                                correctFlag: 1,
                                aiGuessFlag: this.isPrivacyAgreementAuthorized
                                  ? 1
                                  : 0,
                                entityFlag: this.isPrivacyAgreementAuthorized
                                  ? 1
                                  : 0,
                                intentionFlag: this.isPrivacyAgreementAuthorized
                                  ? 1
                                  : 0,
                                limit: 30,
                                rerank_by_zixuan: 1,
                                abTest: this.abtModule,
                                resortETFFlag: !0,
                                resortJJFlag: this.resortJJFlag,
                              }),
                        (t.next = 6),
                        y.serviceApi.getSearchResult(m.StockBridge, r)
                      );
                    case 6:
                      if (((t.t0 = t.sent), t.t0)) {
                        t.next = 9;
                        break;
                      }
                      t.t0 = {};
                    case 9:
                      if (
                        ((n = t.t0),
                        (s = n.stock),
                        (o = n.sector),
                        (a = n.news),
                        (c = n.correct),
                        (u = n.indexShowNum),
                        (l = n.aiGuess),
                        (h = n.tabList),
                        (d = n.rankInfo),
                        (f = void 0 === d ? {} : d),
                        (p = n.function),
                        (g = void 0 === p ? [] : p),
                        (k = n.fund),
                        (S = n.manager),
                        (v = void 0 === S ? [] : S),
                        (b = n.intentionInfo),
                        (w = n.stockRelatedFund),
                        (_ = void 0 === w ? { stock: s, etf: [], jj: [] } : w),
                        m.StockBridge.ENV !== m.EnvTypeEnum.WZQ_LITE &&
                          (this.listConfig.get("stock").limit = u),
                        (this.keyword = e),
                        (this.hasSmartBoxValue = !1),
                        (R = C({
                          wujiConfigList: this.relatedETFRenderConfig,
                          stockRelatedFund: _,
                          tabList: h && h.length > 0 ? h : this.tabList,
                          setRenderStock: this.setRenderStock,
                        })),
                        (B = R.dynamicRelatedModules),
                        (x = R.tabList),
                        (T = (A = function (e) {
                          return e.length >= 50
                            ? { res: e.slice(0, 50), isLimit: 1 }
                            : { res: e, isLimit: 0 };
                        })(this.setRenderStock(s))),
                        (F = T.res),
                        (P = T.isLimit),
                        (j = A(this.setRenderStock(o))),
                        (I = j.res),
                        (M = j.isPlateLimit),
                        (L = A(this.setRenderStock(k))),
                        (E = L.res),
                        (N = L.isFundLimit),
                        (q = this.setRenderStock(c)),
                        (D = (O = a || {}).has_next),
                        (U = O.news_list),
                        (K = D && U ? U.concat([{}]) : U || []),
                        (H = f.name),
                        (z = void 0 === H ? "热门ETF榜单" : H),
                        (J = f.rankList),
                        (V = void 0 === J ? [] : J),
                        (this.listConfig.get("rank").name = z),
                        (W = V.length
                          ? this.setRenderStock(V).concat([{}])
                          : []),
                        (G =
                          "remind" === this.searchScene
                            ? {
                                showClose: "",
                                isSearching: !0,
                                searchResult: F,
                                isStockLimit: P,
                                tabList: ["stock"],
                              }
                            : {
                                showClose: "",
                                searchInfoResult: K,
                                isSearching: !0,
                                searchResult: F,
                                searchPlateResult: I,
                                searchAiResult: [],
                                searchFuncResult: g,
                                searchFundResult: E,
                                searchManagerResult: v,
                                searchRankResult: W,
                                isStockLimit: P,
                                isPlateLimit: M,
                                isFundLimit: N,
                                searchCorrectResult: q,
                                dynamicRelatedModules: B,
                                intention:
                                  (null == b ? void 0 : b.intention) || "",
                                tabList: x,
                              }),
                        this.isLite &&
                          (G.searchFuncResult = g.filter(function (e) {
                            return "开户" === e.plateName;
                          })),
                        Object.keys(G).forEach(function (e) {
                          $[e] = G[e];
                        }),
                        this.setDynamicListConfig(
                          "remind" === this.searchScene ? [] : B
                        ),
                        !this.isPrivacyAgreementAuthorized)
                      ) {
                        t.next = 40;
                        break;
                      }
                      return (t.next = 37), this.getAiGuessResult(l);
                    case 37:
                      (t.t1 = t.sent), (t.next = 41);
                      break;
                    case 40:
                      t.t1 = [];
                    case 41:
                      (this.searchAiResult = t.t1),
                        this.setRenderListOrder(),
                        !this.inputConfirmed &&
                          this.isLite &&
                          (this.aiReported = !1),
                        e.replace(/(^\s*)|(\s*$)/g, "") ||
                          this.closeSearchResult(),
                        this.reportEmptyBrow(),
                        (t.next = 51);
                      break;
                    case 48:
                      (t.prev = 48),
                        (t.t2 = t.catch(2)),
                        m.StockBridge.aegisReportEvent(
                          "MONITOR-SEARCH-RESULT-ERROR",
                          {
                            ext3: JSON.stringify({
                              code: t.t2.code || t.t2.statusCode,
                              msg: t.t2.retmsg || t.t2.msg,
                            }),
                          }
                        );
                    case 51:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this,
              [[2, 48]]
            );
          })
        );
      },
      getAiGuessResult: function () {
        return p(this, arguments, function () {
          var e = this,
            i =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return t().mark(function r() {
            var n, s, o, a, c, u, l, h, d, f, p;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((s = (n = i || {}).param),
                        (o = void 0 === s ? {} : s),
                        (a = n.source),
                        (c = void 0 === a ? "" : a),
                        (u = n.aiGuessList),
                        (l = void 0 === u ? [] : u),
                        !((h = (null == o ? void 0 : o.count) || 0) <= 0) &&
                          c.startsWith("interface"))
                      ) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        ((e.listConfig.get("aiGuess").name = "猜你想问"), l)
                      );
                    case 3:
                      return (
                        (e.listConfig.get("aiGuess").name =
                          "问元宝 · 猜你想问"),
                        (e.searchAiResult = new Array(h)
                          .fill()
                          .map(function (e) {
                            return "isLoading";
                          })),
                        (e.isSearchingNoData = !1),
                        (t.prev = 4),
                        (t.next = 7),
                        y.serviceApi.getAiGuess(m.StockBridge, o)
                      );
                    case 7:
                      if (
                        ((d = t.sent),
                        (null == o ? void 0 : o.query) === e.keyword)
                      ) {
                        t.next = 10;
                        break;
                      }
                      return t.abrupt("return", e.searchAiResult);
                    case 10:
                      if (0 === (null == d ? void 0 : d.code)) {
                        t.next = 12;
                        break;
                      }
                      throw Error(null == d ? void 0 : d.msg);
                    case 12:
                      return (
                        (f = d.aiGuess),
                        (p = void 0 === f ? {} : f),
                        t.abrupt("return", p.aiGuessList || [])
                      );
                    case 16:
                      return (
                        (t.prev = 16),
                        (t.t0 = t.catch(4)),
                        t.abrupt("return", [])
                      );
                    case 19:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[4, 16]]
            );
          })();
        });
      },
      setDynamicListConfig: function () {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        this.dynamicListConfigKeys.forEach(function (t) {
          var i = e.listConfig.get(t);
          (null == i ? void 0 : i.isDynamic) && e.listConfig.delete(t);
        }),
          (this.dynamicListMap = {}),
          (this.dynamicListConfigKeys = []),
          t.forEach(function (t) {
            e.$set(e.dynamicListMap, t.key, t.listData),
              e.listConfig.set(t.key, {
                name: t.title,
                listName: t.key,
                module: t.module,
                limit: t.listLimit,
                isStock: !0,
                isDynamic: !0,
              }),
              e.dynamicListConfigKeys.push(t.key);
          });
      },
      getListByConfig: function (e) {
        return (null == e ? void 0 : e.listName)
          ? e.isDynamic
            ? this.dynamicListMap[e.listName] || []
            : this[e.listName] || []
          : [];
      },
      setRenderListOrder: function () {
        var e;
        this.renderListOrder = [];
        var t,
          i = { sector: "plate", news: "info", function: "func" },
          r = n(this.tabList);
        try {
          for (r.s(); !(t = r.n()).done; ) {
            var s = t.value;
            if (this.isPrivacyAgreementAuthorized || "aiGuess" !== s) {
              var o = i[s] || s,
                a = this.listConfig.get(o),
                c = B(this.dynamicRelatedModules, s)[0];
              if (a) {
                if (!this.getListByConfig(a).length) continue;
              } else if (!c || !(null == (e = c.listData) ? void 0 : e.length))
                continue;
              this.renderListOrder.push(s);
            }
          }
        } catch (e) {
          r.e(e);
        } finally {
          r.f();
        }
        this.isSearchingNoData = 0 === this.renderListOrder.length;
      },
      getDynamicModuleByTab: function (e) {
        return B(this.dynamicRelatedModules, e);
      },
      visibleDynamicModulesByTab: function (e) {
        return B(this.dynamicRelatedModules, e).filter(function (e) {
          return Array.isArray(e.listData) && e.listData.length > 0;
        });
      },
      handleDynamicModuleMore: function (e) {
        var t = this;
        if ("fund_tab" === e.moreBtnType)
          return (
            (this.tabKey = "fund"),
            (this.inputConfirmed = 1),
            this.switchTabFund("fund_cnjj"),
            this.scrollToTop(),
            void setTimeout(function () {
              t.reportSearchBrow();
            })
          );
        "jump_link" === e.moreBtnType &&
          e.jumpLink &&
          this.openPageWithUrl(e.jumpLink);
      },
      isOnlyOneList: function (e) {
        return (
          1 === this.renderListOrder.length && e === this.renderListOrder[0]
        );
      },
      reportSmartboxBrow: function () {
        this.hasSmartBoxValue &&
          m.StockBridge.report("jichu.search.ai_search_smartbox_brow", {
            searchText: this.keyword,
            search_scene: this.inputConfirmed ? this.tabKey : "suggest",
            report_info: d(d({}, this.reportInfo), this.smartBoxReportInfo),
          });
      },
      reportEmptyBrow: function () {
        var e = this;
        clearTimeout(G),
          (G = setTimeout(function () {
            e.reportEmptyBrowCbk();
          }, 2e3));
      },
      reportEmptyBrowCbk: function () {
        this.isSearchingNoData
          ? m.StockBridge.report("base.search.result_all_empty", {
              searchText: this.keyword,
              input_comfirmed: this.inputConfirmed,
            })
          : this.onlyCorrect &&
            m.StockBridge.report("base.search.only_correct_brow");
      },
      reportSearchBrow: function () {
        var t = this;
        if ((this.reportEmptyBrowCbk(), !this.isSearchingNoData)) {
          m.StockBridge.report(
            this.inputConfirmed
              ? "base.search.result_show"
              : "jichu.search.ai_search_suggest_brow",
            d({ report_info: this.reportInfo }, this.getReportBrowParam())
          ),
            this.reportSmartboxBrow();
          var i = { correct: "guess", rank: "etf_ranking_add" };
          if ("all" !== this.tabKey)
            if (["plate", "stock"].includes(this.tabKey)) {
              var r = this.listConfig.get(this.tabKey);
              if (r) {
                var s = this.getListByConfig(r);
                s &&
                  m.StockBridge.report(
                    "base.search.result_".concat(this.tabKey, "_brow"),
                    this.getAddChooseBrowParam(s)
                  );
              }
            } else {
              if ("fund" === this.tabKey) {
                var o = this.getRenderFundList(),
                  a = o.dynamicModules,
                  c = o.fund;
                return (
                  a.forEach(function (e) {
                    m.StockBridge.report(
                      "base.search.result_".concat(e.key, "_brow"),
                      t.getAddChooseBrowParam(e.listData)
                    );
                  }),
                  void (
                    c.length &&
                    ("fund_cnjj" !== this.tabFundKey &&
                      m.StockBridge.report(
                        "base.search.result_fund_brow",
                        this.getAddChooseBrowParam(this.searchCWJJResult)
                      ),
                    "fund_cwjj" !== this.tabFundKey &&
                      m.StockBridge.report(
                        "base.search.result_cnjj_brow",
                        this.getAddChooseBrowParam(this.searchCNJJResult)
                      ))
                  )
                );
              }
              "info" !== this.tabKey ||
                this.searchInfoResult.length ||
                m.StockBridge.report("base.search.result_info_empty");
            }
          else {
            var u,
              l = n(this.listConfig);
            try {
              for (l.s(); !(u = l.n()).done; ) {
                var h = e(u.value, 2),
                  f = h[0],
                  p = h[1],
                  g = p.limit,
                  y = p.isStock,
                  k = this.getListByConfig(p);
                (null == k ? void 0 : k.length)
                  ? "func" === f &&
                    k.some(function (e) {
                      return "开户" === e.plateName;
                    })
                    ? m.StockBridge.report(
                        "base.search.func_new_account_brow",
                        { fchannel_id_fm_i: "IOy00p000a242" }
                      )
                    : y &&
                      m.StockBridge.report(
                        "base.search.result_".concat(i[f] || f, "_brow"),
                        this.getAddChooseBrowParam(k, g)
                      )
                  : m.StockBridge.report(
                      "base.search.result_".concat(f, "_empty")
                    );
              }
            } catch (e) {
              l.e(e);
            } finally {
              l.f();
            }
          }
        }
      },
      getAddChooseBrowParam: function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1 / 0,
          i = {
            fchannel_id_fm_i: "IS000p000l126",
            stocklist: [],
            positionlist: [],
            hasaddlist: [],
            foperation_purpose: "zixuan",
          },
          r = t > 0 ? t : 1 / 0;
        return (
          e.slice(0, Math.min(e.length, r)).map(function (e, t) {
            i.stocklist.push(e.code),
              i.positionlist.push(t),
              i.hasaddlist.push(e.isChoose ? 1 : 0);
          }),
          (i.stocklist = i.stocklist.join(",")),
          (i.positionlist = i.positionlist.join(",")),
          (i.hasaddlist = i.hasaddlist.join(",")),
          i
        );
      },
      getReportBrowParam: function () {
        var e = this,
          t = {
            searchText: this.keyword,
            content: [],
            search_scene: this.inputConfirmed ? this.tabKey : "suggest",
          },
          i = function (e, i, r) {
            if (Array.isArray(e) && e.length) {
              var n = { module: i, contentId: [] };
              e.map(function (e) {
                Object.prototype.hasOwnProperty.call(e, r) &&
                  n.contentId.push(e[r]);
              }),
                (n.contentId = n.contentId.join(
                  ["code", "title", "news_id"].includes(r) ? "," : ";"
                )),
                "guessquestion" === i &&
                  (n.subScene = e
                    .map(function (e) {
                      return e.subScene || "";
                    })
                    .join(",")),
                t.content.push(n);
            }
          },
          r = { info: "news_id", func: "functionName", aiGuess: "title" },
          n = function (e) {
            var t = e.listData,
              r = e.module,
              n = e.idName;
            i(t, r, n);
          };
        if ("all" === this.tabKey) {
          var s = [];
          this.listConfig.forEach(function (t, i) {
            if (null == t ? void 0 : t.listName) {
              var n = e.getListByConfig(t);
              n.length &&
                (t.limit > 0 && (n = n.slice(0, t.limit)),
                s.push({
                  listData: n,
                  module: t.module,
                  idName: t.isStock ? "code" : r[i],
                }));
            }
          }),
            s.forEach(n);
        } else if ("fund" === this.tabKey) {
          var o = this.getRenderFundList(),
            a = o.dynamicModules,
            c = o.fund,
            u = o.manager,
            l = o.limitManager;
          a
            .map(function (e) {
              return (function (e) {
                return {
                  listData: e.listData,
                  module: e.module,
                  idName: "code",
                };
              })(e);
            })
            .forEach(n),
            i(
              u.slice(0, l > 0 ? l : u.length),
              "searchModuleFundManager",
              "id"
            ),
            i(
              c,
              {
                fund_all: "searchModuleTotalFund",
                fund_cnjj: "searchModuleETF",
                fund_cwjj: "searchModuleAllFund",
              }[this.tabFundKey] || "",
              "code"
            );
        } else {
          var h = this.listConfig.get(this.tabKey);
          if (h) {
            var d = h.isStock;
            i(
              this.getListByConfig(h),
              this.tabKey,
              d ? "code" : r[this.tabKey]
            );
          }
        }
        return t;
      },
      reportHistoryBrow: function () {
        var e = { stocklist: [], positionlist: [], hasaddlist: [] };
        Array.isArray(this.searchHistory) &&
          this.searchResult.map(function (t, i) {
            e.stocklist.push(b.utils.getSymbol(t.market, t.scode)),
              e.positionlist.push(i + 1),
              e.hasaddlist.push(t.isChoose ? 1 : 0);
          }),
          m.StockBridge.report("base.search.card_version_list_rg_brow", {
            fchannel_id_fm_i: "IhE00p000l126",
            stocklist: e.stocklist.join(),
            positionlist: e.positionlist.join(),
            hasaddlist: e.hasaddlist.join(),
            foperation_purpose: "zixuan",
          });
      },
      initStatus: function () {
        var e = this,
          t = {
            autofocus: !0,
            inputValue: "",
            showClose: "hide",
            keyword: "",
            isSearching: !1,
            isSearchingNoData: !1,
            intention: "",
            hasSmartBoxValue: !1,
            dynamicRelatedModules: [],
            dynamicListMap: {},
          };
        Object.keys(t).forEach(function (i) {
          e[i] = t[i];
        }),
          this.setDynamicListConfig([]),
          this.switchTab("all"),
          this.switchTabFund("fund_all");
      },
      closeSearchResult: function () {
        this.initStatus(),
          this.queryHotStock(),
          this.getSearchHistory(),
          m.StockBridge.report("xcx_close_search_result");
      },
      addUserStock: function (e, i) {
        return p(
          this,
          null,
          t().mark(function r() {
            var n,
              s,
              o = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (null == (n = this.didAgreeUserAgreement)
                          ? void 0
                          : n.value) ||
                        "function" != typeof this.onCheckUserAgreementStatus
                      ) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        void this.onCheckUserAgreementStatus()
                      );
                    case 2:
                      (this.lastAddedStock = e),
                        (s = {
                          currStock: e,
                          currListType: i,
                          batchShow: this.isLite ? "directlyMove" : "move",
                        }),
                        Object.keys(s).forEach(function (e) {
                          o[e] = s[e];
                        });
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
      finishBatch: function (t, i) {
        var r = this,
          s =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (
          (("move" !== t && "directlyMove" !== t) ||
            (this.showOffSiteFundAuthModal = !!s.lctAuthPopup),
          "add" !== t)
        ) {
          if ("fail" !== i) {
            if (((this.batchShow = "close"), "success" !== i)) return;
            var o = this.currStock,
              a = o.scode,
              c = o.market,
              u = o.index;
            this.setSearchHistory(f(d({}, this.currStock), { isChoose: !0 }));
            var l = {
              fchannel_id_fm_i: "IhE00p000l126",
              stocklist: b.utils.getSymbol(c, a),
              positionlist: +u + 1,
              foperation_purpose: "zixuan",
            };
            if (
              ("default" !== this.searchScene &&
                this.userStock.splice(0, 0, this.currStock),
              Q.add(this.currStock.code),
              this.hqBridge.busEmit("toggleAdded"),
              m.StockBridge.busEmit("common-toggleAdded"),
              "remind" !== this.searchScene && !this.isSearching)
            )
              return (
                this.getSearchHistory(),
                void m.StockBridge.report(
                  "base.search.card_version_list_rg_sure_stock_add",
                  l
                )
              );
            var h = [];
            if ("fund" === this.currListType) h = this.searchFundResult;
            else {
              var p = this.listConfig.get(this.currListType);
              p && (h = this.getListByConfig(p));
            }
            var g = h.findIndex(function (e) {
              return e.scode === a && e.market === c;
            });
            g > -1 && this.$set(h, g, f(d({}, h[g]), { isChoose: !0 })),
              this.isSearching &&
                m.StockBridge.report(
                  "base.search.result_stock_add",
                  f(d({}, l), {
                    fchannel_id_fm_i: "IS000p000l126",
                    report_info: this.reportInfo,
                    module: this.currListType,
                    search_scene: this.inputConfirmed ? this.tabKey : "suggest",
                  })
                ),
              setTimeout(function () {
                var t,
                  i = n(r.listConfig);
                try {
                  for (i.s(); !(t = i.n()).done; ) {
                    var s = e(t.value, 2),
                      o = s[0],
                      u = s[1];
                    if (o !== r.currListType && "plate" !== o && u.isStock) {
                      var l =
                          "fund" === o
                            ? r.searchFundResult
                            : r.getListByConfig(u),
                        h = l.findIndex(function (e) {
                          return e.scode === a && e.market === c;
                        });
                      h <= -1 || r.$set(l, h, f(d({}, l[h]), { isChoose: !0 }));
                    }
                  }
                } catch (e) {
                  i.e(e);
                } finally {
                  i.f();
                }
              });
          }
        } else
          this.reqUserStock(function (e) {
            var t;
            0 === parseInt(e.retcode, 10) &&
              (r.groups =
                null == (t = null == e ? void 0 : e.grouplist)
                  ? void 0
                  : t.map(function (e) {
                      return null == e ? void 0 : e.groupinfo;
                    }));
          });
      },
      handleButtonClick: function (e) {
        var t;
        "searchinputai" === e &&
          m.StockBridge.report("jichu.search.ai_search_input_ai_ask_click", {
            report_info: this.reportInfo,
            searchfrom: this.pageSearchFrom,
          }),
          (this.isAINewUser = { isNewUser: !1, time: Date.now() }),
          m.StockBridge.setStorage(U, this.isAINewUser);
        var i = "forceSend",
          r = this.inputValue;
        if (
          (!r &&
            this.cachePlaceholder &&
            ((r = this.cachePlaceholder), (i = "sendToInput")),
          m.StockBridge.ENV === m.EnvTypeEnum.MP &&
            "app_lct" ===
              (null == (t = m.StockBridge.store) ? void 0 : t.lctfrom))
        ) {
          var n = "searchfrom="
              .concat(e, "&mainQuery=")
              .concat(encodeURIComponent(r), "&queryUsage=")
              .concat(i),
            s = "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(
                "https://wzq.tenpay.com/mp/v2/index.html#/pages/searchAi/main?".concat(
                  n
                )
              )
            );
          m.wx$1.navigateTo({ url: s });
        } else
          m.StockRouter.routeTo({
            name: "searchAi",
            query: { searchfrom: e, mainQuery: r, queryUsage: i },
          });
      },
      openPageWithUrl: function (e) {
        if (/http[s]{0,1}:\/\/([\w.]+\/?)\S*/.test(e))
          return N
            ? void m.StockBridge.openExtraWebview(e)
            : e.startsWith("".concat(location.origin).concat(location.pathname))
            ? void m.StockRouter.routeTo({ path: e.split("#").pop() })
            : void (window.location.href = e);
        N
          ? w.some(function (t) {
              return e.slice(1).startsWith(t);
            })
            ? m.wx$1.reLaunch({ url: e })
            : /^\/pages\//.test(e) && m.wx$1.navigateTo({ url: e })
          : m.StockRouter.routeTo({ path: e });
      },
      jumpToRank: function () {
        this.openPageWithUrl(
          "https://wzq.tenpay.com/mp/v2/index.html#/hot?tab=2"
        ),
          m.StockBridge.report("base.search.alltab_etf_ranking_more_click");
      },
      jumpToFuncDetail: function (e, t) {
        var i = d(
          {
            contentId: e.functionName,
            searchSource: "0",
            clickSerialNumber: t + 1,
            totalSerialNumber: this.searchFuncResult.length,
            searchText: this.keyword,
            search_scene: this.inputConfirmed ? this.tabKey : "suggest",
            module: "func",
            report_info: this.reportInfo,
          },
          e
        );
        if (
          (m.StockBridge.report(
            this.inputConfirmed
              ? "base.search.result_item_click"
              : "jichu.search.ai_search_suggest_item_click",
            i
          ),
          this.keyword && this.reportSearchBrow(),
          ["开户", "交易"].includes(e.plateName))
        )
          return (
            this.$emit("jumpToTradeFunc", e),
            void (
              "开户" === e.plateName &&
              m.StockBridge.report("base.search.func_new_account_click", {
                fchannel_id_fm_i: "IOy00p000a242",
              })
            )
          );
        this.isLite || this.openPageWithUrl(e.url);
      },
      jumpToDetail: function (e, t, i) {
        var r = e.market,
          n = e.scode,
          s = e.name,
          o = e.type,
          a = e.ischoose,
          c = e.stockType,
          u = e.noAdd,
          l = e.ishotstock,
          h = e.reportInfo,
          f = void 0 === h ? {} : h,
          p = String(r);
        if ("remind" !== this.searchScene) {
          if ("sqEdit" === this.searchScene)
            return (
              m.StockBridge.busEmit("market-sqStockPicked", {
                market: p,
                scode: n,
                name: s,
              }),
              this.isMP ? m.wx$1.navigateBack() : this.$router.back(),
              void this.$emit("sqEdit", { market: p, scode: n, name: s })
            );
          if (this.isSearching) {
            var g = b.utils.getSymbol(p, n),
              y = this.listConfig.get(i);
            if (y) {
              var v = y.limit,
                w = y.module,
                _ = this.getListByConfig(y),
                R = v,
                C = w,
                B = _.length;
              "all" === this.tabKey &&
                R > 0 &&
                (B = _.length > R ? R : _.length);
              var x = d(
                {
                  contentId: g,
                  searchText: this.keyword,
                  hasadd: a,
                  search_scene: this.onlyCorrect
                    ? "searchModuleAllGuess"
                    : this.tabKey,
                  module: C,
                  clickSerialNumber: +t + 1,
                  totalSerialNumber: B,
                  searchSource: "0",
                  report_info: this.reportInfo,
                },
                f
              );
              m.StockBridge.report(
                this.inputConfirmed
                  ? "base.search.result_item_click"
                  : "jichu.search.ai_search_suggest_item_click",
                x
              ),
                this.keyword && this.reportSearchBrow();
            }
          }
          if (
            ("Y" === l
              ? m.StockBridge.report(
                  "base.search.card_version_list_rg_click_stock",
                  { position: t + 1, stockid: b.utils.getSymbol(p, n) }
                )
              : "yy" !== i &&
                (this.setSearchHistory(e),
                "remind" === this.searchScene ||
                  this.isSearching ||
                  m.StockBridge.report(
                    "base.search.card_version_history_click",
                    { contentId: e.code }
                  )),
            "jj" === o)
          ) {
            var A = "FMlctW282010002";
            return (
              "history" === i
                ? (A = "FMlctW282010004")
                : "fund" === i &&
                  (A = this.isResortJJValid
                    ? this.resortJJFlag
                      ? "FMlctW282010006"
                      : "FMlctW282010001"
                    : "FMlctM288020001"),
              void k.openLctFundPage(n, A)
            );
          }
          var T;
          (T =
            "BK" === c && u
              ? this.isWzq
                ? {
                    path: "/plate/".concat(
                      "us" === (o || p) ? "601" : "400",
                      "/detail"
                    ),
                    query: { plateId: n },
                  }
                : {
                    name: this.isMP ? "plate-list" : "hotplate-list",
                    query: {
                      plate: "us" === (o || p) ? "601" : "400",
                      code: n,
                      name: s,
                    },
                  }
              : this.isWzq
              ? {
                  name: "HqStock",
                  params: { market: p, code: n, stockType: c },
                }
              : {
                  name: "stockdetail",
                  query: { market: p, scode: n, stockType: c },
                }),
            m.StockRouter.routeTo(T);
        } else {
          if (b.utils.isHSPlate(p) || "jj" === o) {
            var F = "暂不支持".concat(
              "jj" === o ? "场外基金" : "板块",
              "添加价格提醒"
            );
            return void (this.isMP
              ? m.wx$1.showModal({ content: F, showCancel: !1 })
              : this.$modal.alert({ content: F, confirmBtn: "我知道了" }));
          }
          this.isMP
            ? m.StockRouter.routeTo({
                name: "RemindSetting",
                query: {
                  market: S.getMarketNumberByName(p) || p,
                  scode: n,
                  stockName: encodeURIComponent(s),
                },
              })
            : (m.StockRouter.routeTo({
                path: "/remind/setting",
                query: {
                  market: p,
                  scode: n,
                  stockName: encodeURIComponent(s),
                },
              }),
              m.StockBridge.report(
                "remind.setting.stockpricetips_search_result_click",
                void 0,
                void 0,
                { yy_public_str1: { stockid: n } }
              ));
        }
      },
      jumpToAiDetail: function (e, t) {
        var i,
          r = {
            contentId: e.title,
            module: "guessquestion",
            clickSerialNumber: t + 1,
            totalSerialNumber: this.searchAiResult.length,
            searchText: this.keyword,
            search_scene: this.inputConfirmed ? this.tabKey : "suggest",
            subScene: e.subScene,
            report_info: this.reportInfo,
          };
        if (
          (m.StockBridge.report(
            this.inputConfirmed
              ? "base.search.result_item_click"
              : "jichu.search.ai_search_suggest_item_click",
            r
          ),
          this.keyword && this.reportSearchBrow(),
          (this.isAINewUser = { isNewUser: !1, time: Date.now() }),
          m.StockBridge.setStorage(U, this.isAINewUser),
          m.StockBridge.ENV === m.EnvTypeEnum.MP &&
            "app_lct" ===
              (null == (i = m.StockBridge.store) ? void 0 : i.lctfrom))
        ) {
          var n = "searchfrom=searchaiguess&mainQuery="
              .concat(encodeURIComponent(e.title), "&subScene=")
              .concat(e.subScene, "&subChannel=")
              .concat(e.subChannel),
            s = "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(
                "https://wzq.tenpay.com/mp/v2/index.html#/pages/searchAi/main?".concat(
                  n
                )
              )
            );
          m.wx$1.navigateTo({ url: s });
        } else
          m.StockRouter.routeTo({
            name: "searchAi",
            query: {
              searchfrom: "searchaiguess",
              mainQuery: e.title,
              subScene: e.subScene,
              subChannel: e.subChannel,
            },
          });
      },
      handleImgOcr: function () {
        m.StockBridge.report("base.search.img_ocr_click"),
          m.StockRouter.routeTo({ name: "SearchImgOcr" });
      },
      getValFromQuery: function () {
        var e, t;
        if (null == (e = this.queryData) ? void 0 : e.mainQuery) {
          (this.isAINewUser = { isNewUser: !1, time: Date.now() }),
            m.StockBridge.setStorage(U, this.isAINewUser);
          try {
            this.cachePlaceholder = decodeURIComponent(
              (null == (t = this.queryData) ? void 0 : t.mainQuery) || ""
            );
          } catch (e) {}
        }
      },
      toAics: function () {
        return p(
          this,
          null,
          t().mark(function e() {
            var i,
              r,
              n = this;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        p(
                          n,
                          null,
                          t().mark(function e() {
                            return t().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (this.isMP) {
                                        e.next = 9;
                                        break;
                                      }
                                      return (
                                        (e.prev = 1),
                                        (e.next = 4),
                                        m.StockBridge.privacyAgreement.check({
                                          scene: "ZXGH5_CommunityAgreementOnly",
                                        })
                                      );
                                    case 4:
                                      e.next = 9;
                                      break;
                                    case 6:
                                      return (
                                        (e.prev = 6),
                                        (e.t0 = e.catch(1)),
                                        e.abrupt("return", !1)
                                      );
                                    case 9:
                                      return e.abrupt("return", !0);
                                    case 10:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[1, 6]]
                            );
                          })
                        )
                      );
                    case 2:
                      if (e.sent) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      (i = {
                        searchText: this.keyword,
                        input_confirmed: this.inputConfirmed,
                      }),
                        "",
                        (r = this.onlyCorrect
                          ? "base.search.result_correct_empty_toai_click"
                          : "base.search.result_all_correct_toai_click"),
                        m.StockBridge.report(r, void 0, void 0, i),
                        m.StockBridge.openExtraWebview(
                          "https://wzq.tenpay.com/wzq/front/aics/#/aiserviceV2/home?channel=75&from_pagedo=1&random="
                            .concat(
                              +new Date(),
                              "&contextPath=aics-cloud&autoreply="
                            )
                            .concat(
                              encodeURIComponent(this.keyword),
                              "&entry=zxg_search"
                            )
                        );
                    case 7:
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
    },
  };
Array ||
  (
    m.resolveComponent("hot-search") +
    m.resolveComponent("list-search") +
    m.resolveComponent("page-footer") +
    m.resolveComponent("tabbar") +
    m.resolveComponent("QuickSearch") +
    m.resolveComponent("info-list-page") +
    m.resolveComponent("BubbleWzqxcx") +
    m.resolveComponent("batch") +
    m.resolveComponent("Popup") +
    m.resolveComponent("OffSiteFundAuthModal")
  )();
var Y = m._export_sfc(X, [
  [
    "render",
    function (e, t, i, r, n, s) {
      return m.e(
        { a: s.isMP },
        s.isMP
          ? {
              b: n.autofocus,
              c: s.renderPlaceholder,
              d: m.o(
                [
                  [
                    function (e) {
                      return (n.inputValue = e.detail.value);
                    },
                    999,
                  ],
                  [
                    function () {
                      return (
                        s.getSearchResult &&
                        s.getSearchResult.apply(s, arguments)
                      );
                    },
                    997,
                  ],
                ],
                1e3
              ),
              e: m.o(function () {
                return s.inputConfirm && s.inputConfirm.apply(s, arguments);
              }, 998),
              f: n.inputValue,
            }
          : {
              g: n.autofocus && s.isPrivacyAgreementAuthorized,
              h: s.renderPlaceholder,
              i: m.o(function () {
                return s.handleKeyUp && s.handleKeyUp.apply(s, arguments);
              }, 1001),
              j: m.o(
                [
                  [
                    function (e) {
                      return (n.inputValue = e.detail.value);
                    },
                    1004,
                  ],
                  [
                    function () {
                      return (
                        s.getSearchResult &&
                        s.getSearchResult.apply(s, arguments)
                      );
                    },
                    1002,
                  ],
                ],
                1005
              ),
              k: m.o(function () {
                return s.inputConfirm && s.inputConfirm.apply(s, arguments);
              }, 1003),
              l: n.inputValue,
            },
        {
          m: m.n(n.showClose),
          n: m.o(function () {
            return (
              s.closeSearchResult && s.closeSearchResult.apply(s, arguments)
            );
          }, 1006),
          o: n.showClose,
          p: m.o(function () {
            return s.handleImgOcr && s.handleImgOcr.apply(s, arguments);
          }, 1007),
          q: n.barConfig && "default" !== n.barConfig.type,
        },
        n.barConfig && "default" !== n.barConfig.type
          ? {
              r: m.o(function () {
                return s.yyConfirm && s.yyConfirm.apply(s, arguments);
              }, 1008),
            }
          : {
              s: m.n(n.showBubble ? "" : "hide-bubble"),
              t: m.o(function (e) {
                return s.handleButtonClick("searchinputai");
              }, 1009),
            },
        { v: m.n(s.isPc && "zxg-mp-pc"), w: !n.isSearching },
        n.isSearching
          ? m.e(
              { M: s.showTabBar },
              s.showTabBar
                ? {
                    N: m.o(s.switchTab, 1017),
                    O: m.p({ "tab-config": n.tabConfig, "tab-key": n.tabKey }),
                  }
                : {},
              {
                P: m.f(n.tabList, function (e, t, r) {
                  return m.e(
                    { a: "function" === e && n.searchFuncResult.length > 0 },
                    "function" === e && n.searchFuncResult.length > 0
                      ? {
                          b: m.o(s.jumpToFuncDetail, 1018, e),
                          c: "85dce9e0-5-" + r,
                          d: m.p({
                            "list-title": "功能服务",
                            "list-type": "func",
                            "list-data": n.searchFuncResult,
                            skin: i.skin,
                            keyword: n.keyword,
                          }),
                        }
                      : {},
                    { e: "rank" === e && n.searchRankResult.length > 0 },
                    "rank" === e && n.searchRankResult.length > 0
                      ? {
                          f: m.o(s.addUserStock, 1019, e),
                          g: m.o(s.jumpToDetail, 1020, e),
                          h: m.o(s.jumpToRank, 1021, e),
                          i: "85dce9e0-6-" + r,
                          j: m.p({
                            "list-title": n.listConfig.get("rank").name,
                            "list-type": "rank",
                            "list-data": n.searchRankResult,
                            skin: i.skin,
                            keyword: n.keyword,
                            "show-more-text": "查看完整榜单",
                            "list-limit": n.listConfig.get("rank").limit,
                          }),
                        }
                      : {},
                    { k: "stock" === e && n.searchResult.length > 0 },
                    "stock" === e && n.searchResult.length > 0
                      ? {
                          l: m.o(s.jumpToDetail, 1022, e),
                          m: m.o(s.addUserStock, 1023, e),
                          n: m.o(
                            function (e) {
                              return s.switchTab("stock", !0, !0);
                            },
                            1024,
                            e
                          ),
                          o: "85dce9e0-7-" + r,
                          p: m.p({
                            "list-type": "stock",
                            "list-title": "股票",
                            "list-data": n.searchResult,
                            keyword: n.keyword,
                            "list-limit": n.listConfig.get("stock").limit,
                            "is-folder": "remind" === n.searchScene,
                          }),
                        }
                      : {},
                    {
                      q:
                        s.isPrivacyAgreementAuthorized &&
                        "smartbox" === e &&
                        n.intention,
                    },
                    s.isPrivacyAgreementAuthorized &&
                      "smartbox" === e &&
                      n.intention
                      ? {
                          r: m.o(s.onFetchFinish, 1025, e),
                          s: m.o(s.onExpandBtclick, 1026, e),
                          t: "85dce9e0-8-" + r,
                          v: m.p({
                            "serach-value": n.keyword,
                            intention: n.intention,
                            "abt-module": n.abtModule,
                            "input-confirmed": n.inputConfirmed,
                          }),
                        }
                      : {},
                    {
                      w:
                        s.isPrivacyAgreementAuthorized &&
                        "aiGuess" === e &&
                        n.searchAiResult.length > 0,
                    },
                    s.isPrivacyAgreementAuthorized &&
                      "aiGuess" === e &&
                      n.searchAiResult.length > 0
                      ? {
                          x: m.o(s.jumpToAiDetail, 1027, e),
                          y: "85dce9e0-9-" + r,
                          z: m.p({
                            "list-type": "aiGuess",
                            "list-title": n.listConfig.get("aiGuess").name,
                            "list-data": n.searchAiResult,
                            keyword: n.keyword,
                          }),
                        }
                      : {},
                    { A: "sector" === e && n.searchPlateResult.length > 0 },
                    "sector" === e && n.searchPlateResult.length > 0
                      ? {
                          B: m.o(
                            function (e) {
                              return s.switchTab("plate", !0, !0);
                            },
                            1028,
                            e
                          ),
                          C: m.o(s.jumpToDetail, 1029, e),
                          D: m.o(s.addUserStock, 1030, e),
                          E: "85dce9e0-10-" + r,
                          F: m.p({
                            "list-type": "plate",
                            "list-title": "板块",
                            "list-data": n.searchPlateResult,
                            keyword: n.keyword,
                            "list-limit": n.listConfig.get("plate").limit,
                          }),
                        }
                      : {},
                    { G: "correct" === e && n.searchCorrectResult.length > 0 },
                    "correct" === e && n.searchCorrectResult.length > 0
                      ? {
                          H: m.o(s.jumpToDetail, 1031, e),
                          I: m.o(s.addUserStock, 1032, e),
                          J: m.o(s.toAics, 1033, e),
                          K: "85dce9e0-11-" + r,
                          L: m.p({
                            "list-type": "correct",
                            "list-title": s.onlyCorrect ? "" : "大家还在搜",
                            "list-data": n.searchCorrectResult,
                            keyword: n.keyword,
                          }),
                        }
                      : {},
                    { M: "fund" === e && s.searchCWJJResult.length > 0 },
                    "fund" === e && s.searchCWJJResult.length > 0
                      ? {
                          N: m.o(
                            function (e) {
                              return s.switchTab("fund", !0, !0);
                            },
                            1034,
                            e
                          ),
                          O: m.o(s.jumpToDetail, 1035, e),
                          P: m.o(s.addUserStock, 1036, e),
                          Q: "85dce9e0-12-" + r,
                          R: m.p({
                            "list-type": "fund",
                            "list-title": "场外基金",
                            "list-data": s.searchCWJJResult,
                            keyword: n.keyword,
                            "show-backend-fund-label": n.resortJJFlag,
                            "list-limit": n.listConfig.get("fund").limit,
                          }),
                        }
                      : {},
                    { S: "news" === e && n.searchInfoResult.length > 0 },
                    "news" === e && n.searchInfoResult.length > 0
                      ? {
                          T: m.o(
                            function (e) {
                              return s.switchTab("info", !0, !0);
                            },
                            1037,
                            e
                          ),
                          U: m.o(s.reportSearchBrow, 1038, e),
                          V: "85dce9e0-13-" + r,
                          W: m.p({
                            "list-type": "info",
                            "list-title": "资讯",
                            "list-data": n.searchInfoResult,
                            keyword: n.keyword,
                            "input-comfirmed": n.inputConfirmed,
                            "report-info": n.reportInfo,
                            "list-limit": n.listConfig.get("info").limit,
                          }),
                        }
                      : {},
                    {
                      X: m.f(
                        s.visibleDynamicModulesByTab(e),
                        function (e, t, i) {
                          return {
                            a: e.key,
                            b: m.o(s.jumpToDetail, 1039, e.key),
                            c: m.o(s.addUserStock, 1040, e.key),
                            d: m.o(
                              function (t) {
                                return s.handleDynamicModuleMore(e);
                              },
                              1041,
                              e.key
                            ),
                            e: "85dce9e0-14-" + r + "-" + i,
                            f: m.p({
                              "list-type": e.key,
                              "list-title": e.title,
                              "list-data": e.listData,
                              keyword: n.keyword,
                              "list-limit": e.listLimit,
                              "show-more-text": e.moreBtnText || !1,
                              "show-more-btn": e.showMoreBtn,
                            }),
                          };
                        }
                      ),
                      Y: e,
                      Z: m.o(
                        function (e) {
                          return s.handleScroll(!1);
                        },
                        1042,
                        e
                      ),
                    }
                  );
                }),
                Q: m.o(s.handleButtonClick, 1043),
                R: m.p({
                  "show-tips": s.onlyCorrect,
                  "no-data": n.isSearchingNoData && !n.hasSmartBoxValue,
                }),
                S: m.n(s.showTabBar ? "" : "no-tab"),
                T: m.o(function (e) {
                  return s.handleScroll(n.aiReported);
                }, 1044),
                U: "all" === n.tabKey,
                V: "stock" === n.tabKey,
              },
              "stock" === n.tabKey
                ? m.e(
                    { W: n.searchResult.length > 0 },
                    n.searchResult.length > 0
                      ? {
                          X: m.o(s.jumpToDetail, 1045),
                          Y: m.o(s.addUserStock, 1046),
                          Z: m.p({
                            "list-type": "stock",
                            "list-data": n.searchResult,
                            keyword: n.keyword,
                          }),
                        }
                      : {},
                    {
                      aa: m.o(s.handleButtonClick, 1047),
                      ab: m.p({
                        "is-limit": n.isStockLimit,
                        "no-data": !n.searchResult.length,
                      }),
                    }
                  )
                : {},
              { ac: "plate" === n.tabKey },
              "plate" === n.tabKey
                ? m.e(
                    { ad: n.searchPlateResult.length > 0 },
                    n.searchPlateResult.length > 0
                      ? {
                          ae: m.o(s.jumpToDetail, 1048),
                          af: m.o(s.addUserStock, 1049),
                          ag: m.p({
                            "list-type": "plate",
                            "list-data": n.searchPlateResult,
                            keyword: n.keyword,
                          }),
                        }
                      : {},
                    {
                      ah: m.o(s.handleButtonClick, 1050),
                      ai: m.p({
                        "is-limit": n.isPlateLimit,
                        "no-data": !n.searchPlateResult.length,
                        title: "板块",
                      }),
                    }
                  )
                : {},
              { aj: "fund" === n.tabKey },
              "fund" === n.tabKey
                ? m.e(
                    {
                      ak:
                        "fund" === n.tabKey &&
                        s.getRenderFundList("fund_all").listExisted.length > 0,
                    },
                    "fund" === n.tabKey &&
                      s.getRenderFundList("fund_all").listExisted.length > 0
                      ? {
                          al: m.o(s.switchTabFund, 1051),
                          am: m.p({
                            "tab-config": n.tabFundConfig,
                            "tab-key": n.tabFundKey,
                            "is-label-class": !0,
                          }),
                        }
                      : {},
                    {
                      an: m.f(
                        s.renderableFundDynamicModules,
                        function (e, t, i) {
                          return {
                            a: e.key,
                            b: m.o(s.jumpToDetail, 1052, e.key),
                            c: m.o(s.addUserStock, 1053, e.key),
                            d: m.o(
                              function (t) {
                                return s.handleDynamicModuleMore(e);
                              },
                              1054,
                              e.key
                            ),
                            e: "85dce9e0-21-" + i,
                            f: m.p({
                              "list-type": e.key,
                              "list-title": e.title,
                              "list-data": e.listData,
                              keyword: n.keyword,
                              "tab-key": n.tabKey,
                              "show-more-text": e.moreBtnText || !1,
                              "show-more-btn": e.showMoreBtn,
                            }),
                          };
                        }
                      ),
                      ao: s.getRenderFundList().fund.length > 0,
                    },
                    s.getRenderFundList().fund.length > 0
                      ? {
                          ap: m.o(s.jumpToDetail, 1055),
                          aq: m.o(s.addUserStock, 1056),
                          ar: m.p({
                            "list-type": "fund",
                            "list-title":
                              s.getRenderFundList().listExisted.length > 1
                                ? "全部基金"
                                : "",
                            "list-data": s.getRenderFundList().fund,
                            keyword: n.keyword,
                            "tab-key": n.tabKey,
                            "show-backend-fund-label": n.resortJJFlag,
                            "is-folder": !0,
                            "show-more-text": " ",
                            "list-limit": s.getRenderFundList().limitFund,
                          }),
                        }
                      : {},
                    { as: s.getRenderFundList().manager.length > 0 },
                    s.getRenderFundList().manager.length > 0
                      ? {
                          at: m.o(function (e) {
                            return s.switchTabFund("fund_manager");
                          }, 1057),
                          av: m.p({
                            "list-type": "manager",
                            "list-title":
                              s.getRenderFundList().listExisted.length > 1
                                ? "基金经理"
                                : "",
                            "list-data": s.getRenderFundList().manager,
                            keyword: n.keyword,
                            "report-info": n.reportInfo,
                            "list-limit": s.getRenderFundList().limitManager,
                          }),
                        }
                      : {},
                    {
                      aw: m.o(s.handleButtonClick, 1058),
                      ax: m.p({
                        "is-limit": n.isFundLimit,
                        "no-data":
                          0 === s.getRenderFundList().listExisted.length,
                        title: "基金",
                      }),
                      ay: m.n(
                        s.getRenderFundList("fund_all").listExisted.length >
                          0 && "list-wrapper-fund"
                      ),
                    }
                  )
                : {},
              { az: "info" === n.tabKey },
              "info" === n.tabKey
                ? {
                    aA: m.o(s.handleButtonClick, 1059),
                    aB: m.o(s.reportSearchBrow, 1060),
                    aC: m.p({
                      keyword: n.keyword,
                      "input-comfirmed": n.inputConfirmed,
                      "report-info": n.reportInfo,
                      "tab-key": n.tabKey,
                    }),
                  }
                : {}
            )
          : m.e(
              {
                x: "default" === n.searchScene,
                y: "default" === n.searchScene && n.hotStock.length,
              },
              "default" === n.searchScene && n.hotStock.length
                ? {
                    z: m.o(s.jumpToDetail, 1010),
                    A: m.p({ "hot-stock": n.hotStock, "group-id": s.groupId }),
                  }
                : {},
              { B: s.showSearchHistoryList },
              s.showSearchHistoryList
                ? {
                    C: m.o(s.jumpToDetail, 1011),
                    D: m.o(s.addUserStock, 1012),
                    E: m.o(s.removeSearchHistory, 1013),
                    F: m.p({
                      "list-data": n.searchHistory,
                      "list-title": "搜索历史",
                      "show-delete-btn": "default" === n.searchScene,
                      "is-folder": !0,
                      "list-type": "history",
                    }),
                  }
                : {},
              { G: "default" !== n.searchScene && n.userStock.length },
              "default" !== n.searchScene && n.userStock.length
                ? {
                    H: m.o(s.jumpToDetail, 1014),
                    I: m.o(s.addUserStock, 1015),
                    J: m.p({
                      "list-data": n.userStock,
                      "list-title": "自选列表",
                      "is-folder": !0,
                      "list-type": "userStock",
                    }),
                  }
                : {},
              {
                K: m.o(s.handleButtonClick, 1016),
                L: m.p({ "show-tips": !1, "no-data": s.notSearchingNoData }),
              }
            ),
        { aD: s.isMP && n.showBubble },
        s.isMP && n.showBubble
          ? {
              aE: m.p({
                premote: { bubbleConfig: n.bubbleConfig, ad_list: [{}] },
              }),
            }
          : {},
        { aF: "close" !== n.batchShow },
        "close" !== n.batchShow
          ? {
              aG: m.o(s.finishBatch, 1061),
              aH: m.p({
                show: n.batchShow,
                groups: n.groups,
                skin: i.skin,
                "cur-group-id": s.groupId,
                scodelist: [
                  "".concat(n.currStock.type, ":").concat(n.currStock.scode),
                ],
              }),
            }
          : {},
        { aI: n.showRemovePopup },
        n.showRemovePopup
          ? {
              aJ: m.o(s.cancelRemoveHistory, 1062),
              aK: m.o(s.confirmRemoveHistory, 1063),
              aL: m.p({
                title: "确认删除全部搜索历史?",
                "is-black-skin": "white" !== i.skin,
              }),
            }
          : {},
        { aM: n.showOffSiteFundAuthModal },
        n.showOffSiteFundAuthModal
          ? {
              aN: m.o(s.onOffSiteFundAuthConfirm, 1064),
              aO: m.o(s.onOffSiteFundAuthCancel, 1065),
              aP: m.o(s.onOffSiteFundAuthClose, 1066),
              aQ: m.p({ "last-added-stock": n.lastAddedStock }),
            }
          : {},
        {
          aR: m.n(s.theme),
          aS: m.n(s.isPc && "is-pc"),
          aT: m.n(!s.isMP && "is-h5"),
          aU: m.o(function () {
            return s.onTouchmove && s.onTouchmove.apply(s, arguments);
          }, 1067),
        }
      );
    },
  ],
  ["__scopeId", "data-v-85dce9e0"],
]);
wx.createComponent(Y);
