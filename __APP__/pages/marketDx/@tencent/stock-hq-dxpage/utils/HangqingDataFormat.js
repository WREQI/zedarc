var t,
  e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = Object.defineProperty,
  a = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  c = function (t, e, r) {
    return e in t
      ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r);
  },
  f = function (t, e, r) {
    return new Promise(function (i, a) {
      var o = function (t) {
          try {
            s(r.next(t));
          } catch (t) {
            a(t);
          }
        },
        n = function (t) {
          try {
            s(r.throw(t));
          } catch (t) {
            a(t);
          }
        },
        s = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(o, n);
        };
      s((r = r.apply(t, e)).next());
    });
  },
  d = require("../../../../../common/vendor.js"),
  g = require("../../stock-hq-data/index.js"),
  u = require("./common.js"),
  m = d.getApiFullUrl("ifzqfinance", d.API_HOST_ENUM.PROXY_QQ),
  p = {
    hsNewStock: {
      appUrlKey: "hsNewStock",
      fullUrl: "".concat(m, "/stock/notice/ipo/search"),
    },
    hsNewBond: {
      appUrlKey: "hsNewBond",
      fullUrl: "".concat(m, "/stock/notice/NewConvertibleBond/getCalendarList"),
    },
    stockPerformanceList: {
      appUrlKey: "stockPerformanceList",
      fullUrl: "".concat(m, "/appstock/app/subNewStock/periodRank"),
    },
    bondPerformanceList: {
      appUrlKey: "bondPerformanceList",
      fullUrl: "".concat(
        m,
        "/stock/notice/NewConvertibleBond/getPerformanceList"
      ),
    },
    usNewStock: {
      appUrlKey: "usNewStock",
      fullUrl: "".concat(m, "/appstock/us/ipo/getIpo2"),
    },
  },
  h = function (t, e, i, a) {
    return f(
      exports,
      null,
      r().mark(function o() {
        var n, s, l, c, f, d, g;
        return r().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0),
                    (n = t.ENV),
                    (s = t.getUrl),
                    (l = t.request),
                    (f = (c = p[i]).appUrlKey),
                    (d = c.fullUrl),
                    (g = "app" === n ? s(f) : d),
                    (r.next = 4),
                    l(g, a, e)
                  );
                case 4:
                  return r.abrupt("return", r.sent);
                case 7:
                  (r.prev = 7), (r.t0 = r.catch(0));
                case 9:
                case "end":
                  return r.stop();
              }
          },
          o,
          null,
          [[0, 7]]
        );
      })
    );
  },
  k = {
    wzq: {
      itemTitle: "今日新债",
      title: ["发行价", "参考上市价", "参考收益率"],
      datasource: ["fxj", "predictPrice", "predictProfitRate"],
      tipConfig: [!1, !0, !0],
    },
    def: {
      itemTitle: "今日申购",
      title: ["正股价", "转股价", "上市日期"],
      datasource: ["underlying_price", "zgj", "fssrq"],
    },
  },
  j = {
    wzq: {
      title: ["发行价", "参考上市价", "顶格中签率"],
      datasource: ["fxj", "predictPrice", "dgzql"],
      tipConfig: [!1, !1, !0, !0],
    },
    def: {
      title: ["正股价", "转股价", "中签率"],
      datasource: ["underlying_price", "zgj", "zql"],
    },
  },
  y = {
    wzq: {
      itemTitle: "待申购新债",
      title: ["发行价", "参考上市价", "申购日期"],
      datasource: ["fxj", "predictPrice", "sgrq"],
      tipConfig: [!1, !1, !0, !1],
    },
    def: {
      itemTitle: "即将发行",
      title: ["正股价", "转股价", "申购日期"],
      datasource: ["underlying_price", "zgj", "sgrq"],
    },
  },
  b = {
    wzq: {
      title: ["参考上市价", "中签公布", "上市日期"],
      datasource: ["predictPrice", "zqgb", "ssrq"],
      tipConfig: [!1, !0, !1, !1],
    },
    def: {
      title: ["正股价", "中签公布", "上市日期"],
      datasource: ["underlying_price", "zqgb", "ssrq"],
    },
  },
  v = { wzq: { itemTitle: "今日新股" }, def: { itemTitle: "今日申购" } };
function z(e, r, i, a) {
  return "hs" === r && "stock" === i
    ? (function (e, r) {
        if ("sgrq" === r) {
          var i = e.sgrq;
          if (!i || 0 === i.length) return null;
          i.forEach(function (t) {
            (t.listName = t.name),
              (t.listTag = N(t.symbol)),
              (t.listCode = t.sgdm),
              (t.market = "hs"),
              (t.type = "stock"),
              (t.isPurchase = "1"),
              (t.colorList = [!1, !1, !1]),
              t.sgsx && (t.sgsxformatdata = "".concat(t.sgsx, "万股"));
          });
          var a = (v[t] || v.def).itemTitle;
          return {
            key: r,
            data: i,
            itemTitle: void 0 === a ? "" : a,
            yijiandaxin: !0,
            dataConfig: ["price", "syl", "sgsxformatdata"],
            titleName: "申购代码",
            titleConfig: ["发行价", "发行市盈率", "申购上限"],
            reportName: "available_subscription_tab_new_stock",
          };
        }
        if ("ssrq" === r) {
          var o = e.ssrq;
          return o && 0 !== o.length
            ? (o.forEach(function (t) {
                (t.listName = t.name),
                  (t.listTag = N(t.symbol)),
                  (t.listCode = t.symbol.slice(2)),
                  (t.market = "hs"),
                  (t.type = "stock"),
                  (t.toToDetail = !0);
              }),
              {
                key: r,
                data: o,
                itemTitle: "今日上市",
                dataConfig: [["currentPrice", "price"], "zgzdf", "zgsy"],
                titleName: "股票代码",
                titleConfig: ["现价/发行价", "今日最高涨幅", "每签最高获利"],
              })
            : null;
        }
        if ("zqh" === r) {
          var n = e.zqh;
          return n && 0 !== n.length
            ? (n.forEach(function (t) {
                (t.listName = t.name),
                  (t.listTag = N(t.symbol)),
                  (t.listCode = t.symbol.slice(2)),
                  (t.market = "hs"),
                  (t.type = "stock");
              }),
              {
                key: r,
                data: n,
                itemTitle: "今日公布中签",
                dataConfig: ["price", "syl", "wszql"],
                titleName: "股票代码",
                titleConfig: ["发行价", "发行市盈率", "中签率"],
                reportName: "today_announcement_new_stock",
              })
            : null;
        }
        if ("jjfx" === r) {
          var s = e.jjfx;
          return s && 0 !== s.length
            ? (s.forEach(function (t) {
                (t.listName = t.name),
                  (t.listTag = N(t.symbol)),
                  (t.listCode = t.sgdm),
                  (t.market = "hs"),
                  (t.type = "stock"),
                  (t.syl && "" !== t.syl) || (t.syl = "--");
              }),
              {
                key: r,
                data: s,
                itemTitle: "即将发行",
                dataConfig: ["price", "syl", "sgrq"],
                titleName: "申购代码",
                titleConfig: [
                  "发行价",
                  "wzq" === t ? "发行/行业市盈率" : "发行市盈率",
                  "申购日期",
                ],
                reportName: "pending_subscription_tab_new_stock",
              })
            : null;
        }
        if ("sgok" === r) {
          var l = e.sgok;
          return l && 0 !== l.length
            ? (l.forEach(function (t) {
                (t.listName = t.name),
                  (t.listTag = N(t.symbol)),
                  (t.listCode = t.symbol.slice(2)),
                  (t.route = t.symbol),
                  (t.market = "hs"),
                  (t.type = "stock");
              }),
              {
                key: r,
                data: l,
                itemTitle: "未上市",
                dataConfig: ["price", "zqh", "ssrq"],
                titleName: "股票代码",
                titleConfig: ["发行价", "中签公布", "上市日期"],
                reportName: "not_go_public_new_stock",
              })
            : null;
        }
      })(e, a)
    : "hs" === r && "bond" === i
    ? (function (e, r) {
        if (!e) return null;
        if ("jrsg" === r) {
          var i = e.jrsg;
          if (!i || 0 === i.length) return null;
          var a = new Date().getFullYear();
          i.forEach(function (t) {
            var e = t.predict_price,
              r = t.predict_profit_rate,
              i = t.ssrq;
            (t.listName = t.name),
              (t.listTag = N(t.symbol)),
              (t.listCode = t.sgdm),
              (t.zgj = parseFloat(t.zgj).toFixed(2)),
              (t.sgsx = "".concat(t.sgsx, "张")),
              (t.market = "hs"),
              (t.type = "bond"),
              (t.isPurchase = "1");
            var o = (i = i || "--").indexOf(a) >= 0;
            (t.fssrq = o ? i.substring(String(a).length + 1) : i),
              (t.predictPrice = u.formatNum(e, 3)),
              (t.predictProfitRate = u.formatNum(r, 2, "%", !0)),
              (t.colorList = [!1, !1, !0]);
          });
          var o = k[t] || k.def,
            n = o.itemTitle,
            s = void 0 === n ? "" : n,
            l = o.datasource,
            c = void 0 === l ? [] : l,
            f = o.title,
            d = void 0 === f ? [] : f,
            m = o.tipConfig;
          return {
            key: r,
            data: i,
            itemTitle: s,
            yijiandaxin: !0,
            dataConfig: c,
            titleName: "申购代码",
            titleConfig: d,
            tipConfig: void 0 === m ? [] : m,
            reportName: "available_subscription_tab_new_bond",
          };
        }
        if ("jrss" === r) {
          var p = e.jrss;
          return p && 0 !== p.length
            ? (p.forEach(function (t) {
                var e = t.price,
                  r = t.fxj;
                (t.listName = t.name),
                  (t.listTag = N(t.symbol)),
                  (t.listCode = t.symbol.slice(2)),
                  (t.zgj = parseFloat(t.zgj).toFixed(2)),
                  (t.zql = "".concat(parseFloat(t.zql).toFixed(4), "%")),
                  (t.zgzdf = isNaN(parseFloat(t.zgzdf))
                    ? "--"
                    : "".concat(parseFloat(100 * t.zgzdf).toFixed(2), "%")),
                  (t.mqzghl = t.mqzghl > 0 ? "+".concat(t.mqzghl) : t.mqzghl),
                  (t.price = e || "--"),
                  (t.fxj = r || "--"),
                  (t.market = "hs"),
                  (t.type = "bond"),
                  (t.toToDetail = !0);
              }),
              {
                key: r,
                data: p,
                itemTitle: "今日上市",
                dataConfig: [["price", "fxj"], "zgzdf", "mqzghl"],
                titleName: "债券代码",
                titleConfig: ["现价/发行价", "今日最高涨幅", "每签最高获利"],
              })
            : null;
        }
        if ("jrgbzq" === r) {
          var h = e.jrgbzq;
          if (!h || 0 === h.length) return null;
          h.forEach(function (t) {
            var e = t.zql_raw,
              r = t.predict_price;
            (t.listName = t.name),
              (t.listTag = N(t.symbol)),
              (t.listCode = t.symbol.slice(2)),
              t.zgj && "" !== t.zgj
                ? (t.zgj = parseFloat(t.zgj).toFixed(2))
                : (t.zgj = "--"),
              (t.market = "hs"),
              (t.type = "bond"),
              (t.zql = "".concat(t.zql, "%")),
              (t.predictPrice = u.formatNum(r, 3)),
              isNaN(e) || (e *= 1e3),
              (t.dgzql = u.formatNum(e, 2, "%", !1, !0));
          });
          var v = j[t] || j.def,
            z = v.datasource,
            q = void 0 === z ? [] : z,
            C = v.title,
            x = void 0 === C ? [] : C,
            _ = v.tipConfig;
          return {
            key: r,
            data: h,
            itemTitle: "今日公布中签",
            dataConfig: q,
            titleName: "债券代码",
            titleConfig: x,
            tipConfig: void 0 === _ ? [] : _,
            reportName: "today_announcement_new_bond",
          };
        }
        if ("jjfx" === r) {
          var T = e.jjfx;
          if (!T || 0 === T.length) return null;
          T.forEach(function (t) {
            var e = t.predict_price,
              r = t.bidder_num,
              i = t.underlying_name,
              a = t.bond_num,
              o = t.bidder_profit,
              n = t.underlying_code;
            (t.listName = t.name),
              (t.listTag = N(t.symbol)),
              (t.listCode = t.sgdm),
              (t.zgj = t.zgj ? parseFloat(t.zgj).toFixed(2) : ""),
              (t.market = "hs"),
              (t.type = "bond"),
              (t.predictPrice = u.formatNum(e, 3));
            var s = i || "--",
              l = g.utils.bigNumberToText(r, "股") || "--股",
              c = "".concat(a || "--", "张"),
              f = u.formatNum(o, 2, "%", !0);
            t.bidder = {
              title: [s, "配售可转债", "参考收益率"],
              data: [l, c, f],
              code: n,
            };
          });
          var w = y[t] || y.def,
            P = w.itemTitle,
            S = void 0 === P ? "" : P,
            O = w.datasource,
            E = void 0 === O ? [] : O,
            U = w.title,
            F = void 0 === U ? [] : U,
            D = w.tipConfig;
          return {
            key: r,
            data: T,
            itemTitle: S,
            dataConfig: E,
            titleName: "申购代码",
            titleConfig: F,
            tipConfig: void 0 === D ? [] : D,
            reportName: "pending_subscription_tab_new_bond",
          };
        }
        if ("wss" === r) {
          var L = e.wss;
          if (!L || 0 === L.length) return null;
          L.forEach(function (t) {
            var e = t.predict_price;
            (t.listName = t.name),
              (t.listTag = N(t.symbol)),
              (t.listCode = t.symbol.slice(2)),
              (t.market = "hs"),
              (t.type = "bond"),
              (t.predictPrice = u.formatNum(e, 3));
          });
          var H = b[t] || b.def,
            B = H.datasource,
            I = void 0 === B ? [] : B,
            K = H.title,
            R = void 0 === K ? [] : K,
            A = H.tipConfig;
          return {
            key: r,
            data: L,
            itemTitle: "未上市",
            dataConfig: I,
            titleName: "债券代码",
            titleConfig: R,
            tipConfig: void 0 === A ? [] : A,
            reportName: "not_go_public_new_bond",
          };
        }
      })(e, a)
    : "hk" === r && "stock" === i
    ? (function (t, e) {
        if ("sgrq" === e) {
          var r = t.sgrq;
          return r && 0 !== r.length
            ? (r.forEach(function (t) {
                (t.listName = t.gpmc),
                  (t.listTag = "2"),
                  (t.listCode = t.gpdm),
                  (t.market = "hk");
                var e = t.zgj.split("~");
                (t.zgj = e.join("\n~")), (t.type = "stock");
              }),
              {
                key: e,
                data: r,
                itemTitle: "今日申购",
                dataConfig: ["zgj", "rcf", "ssrq"],
                titleName: "股票代码",
                titleConfig: ["招股价", "入场费", "上市日期"],
              })
            : null;
        }
        if ("ssrq" === e) {
          var i = t.ssrq;
          return i && 0 !== i.length
            ? (i.forEach(function (t) {
                (t.listName = t.gpmc),
                  (t.listTag = "2"),
                  (t.listCode = t.gpdm),
                  (t.market = "hk");
                var e = t.zgj.split("~");
                (t.zgj = e.join("\n~")),
                  (t.type = "stock"),
                  (t.symbol = "hk".concat(t.gpdm)),
                  (t.toToDetail = !0);
              }),
              {
                key: e,
                data: i,
                itemTitle: "今日上市",
                dataConfig: [["currentPrice", "zgj"], "zgzdf", "zgsy"],
                titleName: "股票代码",
                titleConfig: ["现价/招股价", "今日最高涨幅", "每签最高获利"],
              })
            : null;
        }
        if ("jjfx" === e) {
          var a = t.jjfx;
          return a && 0 !== a.length
            ? (a.forEach(function (t) {
                (t.listName = t.gpmc),
                  (t.listTag = "2"),
                  (t.listCode = t.gpdm),
                  (t.market = "hk");
                var e = t.zgj.split("~");
                (t.zgj = e.join("\n~")), (t.type = "stock");
              }),
              {
                key: e,
                data: a,
                itemTitle: "即将发行",
                dataConfig: ["zgj", "msgs", "sgrq"],
                titleName: "股票代码",
                titleConfig: ["招股价", "每手股数", "申购日期"],
              })
            : null;
        }
        if ("jjss" === e) {
          var o = t.jjss;
          return o && 0 !== o.length
            ? (o.forEach(function (t) {
                (t.listName = t.gpmc),
                  (t.listTag = "2"),
                  (t.listCode = t.gpdm),
                  (t.market = "hk");
                var e = t.zgj.split("~");
                (t.zgj = e.join("\n~")), (t.type = "stock");
              }),
              {
                key: e,
                data: o,
                itemTitle: "未上市",
                dataConfig: ["zgj", "msgs", "ssrq"],
                titleName: "股票代码",
                titleConfig: ["招股价", "每手股数", "上市日期"],
              })
            : null;
        }
      })(e, a)
    : void 0;
}
function N(t) {
  return { sz: "0", sh: "1" }[t.slice(0, 2)];
}
(exports.formatHKStockData = function (t) {
  var e = (t || {}).data;
  return {
    sgrq: z(e, "hk", "stock", "sgrq"),
    ssrq: z(e, "hk", "stock", "ssrq"),
    zqh: z(e, "hk", "stock", "jjfx"),
    jjss: z(e, "hk", "stock", "jjss"),
  };
}),
  (exports.formatHSBondData = function (t) {
    var e = (t || {}).data;
    return {
      sgrq: z(e, "hs", "bond", "jrsg"),
      ssrq: z(e, "hs", "bond", "jrss"),
      zqh: z(e, "hs", "bond", "jrgbzq"),
      jjfx: z(e, "hs", "bond", "jjfx"),
      sgok: z(e, "hs", "bond", "wss"),
    };
  }),
  (exports.formatHSStockData = function (t) {
    var e = (t || {}).data,
      r = void 0 === e ? {} : e;
    return {
      sgrq: z(r, "hs", "stock", "sgrq"),
      ssrq: z(r, "hs", "stock", "ssrq"),
      zqh: z(r, "hs", "stock", "zqh"),
      jjfx: z(r, "hs", "stock", "jjfx"),
      sgok: z(r, "hs", "stock", "sgok"),
    };
  }),
  (exports.formatUSStockData = function (t) {
    var r = ((null == t ? void 0 : t.data) || []).data,
      i = d.cloneDeep(r);
    return (
      r.forEach(function (t, r) {
        (t.listName = t.Name),
          (t.listTag = "3"),
          (t.listCode = t.Identifier),
          (t.market = "us"),
          (t.type = "stock");
        var f,
          d = t.Name,
          g = t.Identifier,
          u = t.PriceRange,
          m = t.SizeSharesOffer,
          p = t.ListingDate;
        if (
          ((i[r] =
            ((f = (function (t, r) {
              for (var i in r || (r = {})) s.call(r, i) && c(t, i, r[i]);
              if (n) {
                var a,
                  o = e(n(r));
                try {
                  for (o.s(); !(a = o.n()).done; ) {
                    i = a.value;
                    l.call(r, i) && c(t, i, r[i]);
                  }
                } catch (t) {
                  o.e(t);
                } finally {
                  o.f();
                }
              }
              return t;
            })({}, i[r])),
            a(
              f,
              o({
                listName: d,
                listTag: "US",
                listCode: g,
                market: "us",
                type: "stock",
                list0: u,
                list1: m,
                list2: p,
              })
            ))),
          t.OfferPrice.includes("~"))
        ) {
          var h = t.OfferPrice.split("~");
          t.OfferPrice = h;
        }
      }),
      {
        key: {
          data: r,
          initialData: i,
          dataConfig: ["OfferPrice", "SizeSharesOffer", "ListingDate"],
          titleName: "股票名称",
          titleConfig: [
            "发行价",
            ["发行量", "(百万)"],
            ["上市日期", "(美东时间)"],
          ],
        },
      }
    );
  }),
  (exports.getHSNewBond = function (t, e) {
    return h(t, e, "hsNewBond");
  }),
  (exports.getHSNewBondPurchase = function (t, e) {
    return h(t, e, "bondPerformanceList", "POST");
  }),
  (exports.getHSNewStock = function (t, e) {
    return h(t, e, "hsNewStock");
  }),
  (exports.getHSNewStockPurchase = function (t, e) {
    return h(t, e, "stockPerformanceList", "POST");
  }),
  (exports.getMarketState = function (t, e) {
    for (
      var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), o = 2;
      o < i;
      o++
    )
      a[o - 2] = arguments[o];
    return f(exports, [t, e].concat(a), function (t, e) {
      var i =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return r().mark(function a() {
        var o, n, s, l, c, f;
        return r().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return (
                  (o = e.market),
                  (n = e.encode),
                  (s = void 0 === n ? "" : n),
                  (l = "fu" === o ? "globalCommodityStat" : "marketStat"),
                  (c = d.getApiFullUrl(
                    "".concat(s, "/?q=").concat(l, "&fmt=json"),
                    d.API_HOST_ENUM.SQT
                  )),
                  (r.next = 4),
                  t.request(c)
                );
              case 4:
                return (
                  (f = r.sent), r.abrupt("return", i.needProcess ? f[l][0] : f)
                );
              case 6:
              case "end":
                return r.stop();
            }
        }, a);
      })();
    });
  }),
  (exports.getUSNewStock = function (t, e) {
    return h(t, e, "usNewStock");
  }),
  (exports.setEnv = function (e) {
    t = e;
  });
