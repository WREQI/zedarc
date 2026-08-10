require("../../../../../@babel/runtime/helpers/Objectvalues");
var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../common/vendor.js"),
  n = function (t) {
    var n = t.url,
      o = (window && window.wx) || {};
    o && o.miniProgram
      ? o.miniProgram.navigateTo({ url: n })
      : e.wx$1 && e.wx$1.navigateTo({ url: n });
  },
  o = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        copyToPasteboard: function (t, n) {
          e.wx$1.setClipboardData({
            data: t,
            success: function (t) {
              n(t);
            },
          });
        },
        getNetworkStatus: function () {
          return new Promise(function (t, n) {
            try {
              e.wx$1.getNetworkType({
                success: function (e) {
                  var o = e.networkType;
                  "none" !== o || "unknown" !== o
                    ? t({ isConnected: !0 })
                    : n({});
                },
                fail: function () {
                  n({});
                },
              });
            } catch (t) {
              n({});
            }
          });
        },
        getStorage: function (t) {
          return new Promise(function (n) {
            e.wx$1.getStorage({
              key: t,
              success: function (t) {
                try {
                  var e = JSON.parse(t.data);
                  n(e);
                } catch (e) {
                  n(t.data);
                }
              },
              fail: function () {
                n(null);
              },
            });
          });
        },
        getUserInfo: function () {
          return new Promise(function (n) {
            return (
              (o = exports),
              null,
              (r = t().mark(function o() {
                var r, i, c, u;
                return t().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        for (
                          r = { check: 12, app: "wzq" },
                            i = [
                              "_qluin",
                              "_qlskey",
                              "_lastlogin",
                              "_srcuin",
                              "_cftuin",
                            ],
                            c = 0;
                          c < i.length;
                          c++
                        )
                          r[(u = i[c]).replace(/(_|d_)/, "")] =
                            e.wx$1.getStorageSync(u);
                        (r.openid = r.qluin), (r.fskey = r.qlskey), n(r);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, o);
              })),
              new Promise(function (t, e) {
                var n = function (t) {
                    try {
                      c(r.next(t));
                    } catch (t) {
                      e(t);
                    }
                  },
                  i = function (t) {
                    try {
                      c(r.throw(t));
                    } catch (t) {
                      e(t);
                    }
                  },
                  c = function (e) {
                    return e.done
                      ? t(e.value)
                      : Promise.resolve(e.value).then(n, i);
                  };
                c((r = r.apply(o, null)).next());
              })
            );
            var o, r;
          });
        },
        navigateTo: n,
        onClickLongClickPopupMenu: function () {},
        onShowLongClickPopupMenu: function () {},
        operateStock: function (t, n) {
          for (
            var o,
              r,
              i = JSON.stringify([
                {
                  code: t,
                  timestamp: new Date().getTime(),
                  grpid: "1",
                  act: n ? "sa" : "sd",
                },
              ]),
              c = {},
              u = ["_qluin", "_qlskey"],
              a = 0;
            a < u.length;
            a++
          ) {
            var s = u[a];
            c[s.replace(/(_|d_)/, "")] = e.wx$1.getStorageSync(s);
          }
          return (
            (o = c.qluin),
            (r = c.qlskey),
            e.StockBridge.request(
              "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq",
              "GET",
              {
                seq: i,
                check: 11,
                appid: "wx4ffb369b6881ee5e",
                openid: o,
                fskey: r,
              }
            )
          );
        },
        previewImage: function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.urls,
            o = t.currentIndex;
          return new Promise(function (t) {
            if (n && n.length > 0) {
              var r = n.map(function (t) {
                return t.replace(/^http:/, "https:");
              });
              e.wx$1.previewImage({ current: r[o], urls: r });
            }
            t(!0);
          });
        },
        reportAnalytics: function (t) {
          return new Promise(function (n) {
            var o = t.eventName,
              r = t.dataObject;
            o &&
              e.index.$emit("dataReport", {
                eventName: o,
                report_info: r || {},
                dataObject: r || {},
              }),
              n(t);
          });
        },
        requestWxFriendAuth: function () {},
        setBounces: function () {},
        setStorage: function (t, n) {
          var o = JSON.stringify(n);
          e.wx$1.setStorageSync(t, o);
        },
        setTitle: function () {},
        showCommunityComplaint: function (t, n) {
          e.wx$1.showActionSheet({
            itemList: t,
            success: function (t) {
              n(t);
            },
            fail: function (t) {
              n(t);
            },
          });
        },
        showKnowModal: function (t) {
          return new Promise(function (n, o) {
            e.wx$1.showModal({
              confirmText: t.confirmText || "确定",
              content: t.content,
              showCancel: !1,
              confirmColor: t.confirmColor || "#576B95",
              success: function (t) {
                t.confirm ? n(!0) : t.cancel && o(!1);
              },
              fail: function (t) {},
            });
          });
        },
        showModal: function (t) {
          return new Promise(function (n, o) {
            e.wx$1.showModal({
              title: t.title || "",
              content: t.content,
              success: function (t) {
                t.confirm ? n(!0) : t.cancel && o(!1);
              },
              fail: function (t) {},
            });
          });
        },
        showToast: function (t, n, o) {
          t &&
            e.wx$1.showToast({ title: t || "", icon: "none", duration: 2e3 });
        },
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  r = {
    wzq:
      -1 !== "".indexOf("micromessenger") &&
      -1 === location.href.indexOf("micro-app"),
    zxg: -1 !== "".indexOf("qqstock"),
    mini: -1 !== "".indexOf("miniProgram"),
    qqmac: location && location.href && -1 !== location.href.indexOf("qqmac"),
  };
Object.values(r).forEach(function (t, e) {
  t && Object.keys(r)[e];
});
var i = "mini",
  c = o,
  u = function () {
    return {
      width: screen.width || window.innerWidth,
      ratio: window.devicePixelRatio,
    };
  },
  a = function (t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  },
  s = function (t) {
    return "[object Object]" === Object.prototype.toString.call(t);
  },
  l = function (t) {
    var e = t;
    try {
      e = decodeURIComponent(t);
    } catch (t) {}
    return e;
  };
(exports.IS_LCT_XCX = !1),
  (exports.IS_LITE_MODE = !1),
  (exports.IS_WZQ_XCX = !1),
  (exports.IS_ZXG_XCX_ALLH5 = !1),
  (exports.IsMINAPP = !0),
  (exports.buildUrl = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = Object.keys(e)
        .filter(function (t) {
          return "" !== e[t] && void 0 !== e[t];
        })
        .map(function (t) {
          return ""
            .concat(encodeURIComponent(t), "=")
            .concat(encodeURIComponent(e[t]));
        });
    return t + (n.length ? "?".concat(n.join("&")) : "");
  }),
  (exports.doDecodeURI = l),
  (exports.doEncodeURI = function (t) {
    return l(t), encodeURIComponent(t);
  }),
  (exports.doHTMLDecode = function (t) {
    var e = { lt: "<", gt: ">", nbsp: " ", amp: "&", quot: '"' };
    return t.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (t, n) {
      return e[n];
    });
  }),
  (exports.doJSONparse = function (t) {
    if (!t) return "";
    var e = t;
    try {
      e = JSON.parse(t);
    } catch (t) {}
    return e;
  }),
  (exports.enableBasketList = function () {
    var t;
    return (
      !!(null == (t = null == document ? void 0 : document.location)
        ? void 0
        : t.href) && document.location.href.indexOf("lite=1") > 0
    );
  }),
  (exports.formatView = function (t) {
    if (
      (function (t) {
        return (
          "number" == typeof t ||
          "[object Number]" ===
            (function (t) {
              return null === t
                ? void 0 === t
                  ? "[object Undefined]"
                  : "[object Null]"
                : toString.call(t);
            })(t)
        );
      })(+t)
    )
      return +t >= 1e4 ? "".concat((+t / 1e4).toFixed(1), "万") : t;
  }),
  (exports.getCurrentStyle = function (t, e) {
    return t.currentStyle ? t.currentStyle[e] : getComputedStyle(t, !1)[e];
  }),
  (exports.getStorage = function (t) {
    return new Promise(function (e) {
      e((localStorage && localStorage.getItem(t)) || null);
    });
  }),
  (exports.getUrlParams = function (t, e, n) {
    var o;
    if (t)
      return "wzq" === e
        ? t.$route.query || {}
        : "web" === e
        ? t.$root.$children[0].params || {}
        : t.$root.params || {};
    for (
      var r =
          (null == (o = document.location.href.split("?")[1])
            ? void 0
            : o.split("&")) || [],
        i = null,
        c = {},
        u = 0;
      u < r.length;
      u++
    )
      if ((i = r[u].split("="))[0].length > 0) {
        var a = r[u].substring(i[0].length + 1);
        c[i[0]] = l(a);
      }
    return c;
  }),
  (exports.isArray = a),
  (exports.isNull = function (t) {
    var e = {}.toString;
    return !!(
      !t ||
      "[object Null]" === e.call(t) ||
      "[object Undefined]" === e.call(t) ||
      (a(t) && !t.length) ||
      (s(t) &&
        "{}" ===
          (function (t) {
            var e = t;
            try {
              e = JSON.stringify(t);
            } catch (t) {}
            return e;
          })(t))
    );
  }),
  (exports.isObject = s),
  (exports.isString = function (t) {
    return "[object String]" === Object.prototype.toString.call(t);
  }),
  (exports.navigateTo = n),
  (exports.platform = i),
  (exports.sdk = c),
  (exports.serializeObject = function (t) {
    if ("string" == typeof t) return t;
    var e = [],
      n = function (t) {
        return encodeURIComponent(t);
      };
    return (
      Object.keys(t).forEach(function (o) {
        null === t[o] || "" === t[o]
          ? e.push("".concat(n(o), "="))
          : void 0 !== t[o] &&
            "" !== t[o] &&
            e.push("".concat(n(o), "=").concat(n(t[o])));
      }),
      e.join("&")
    );
  }),
  (exports.setStorage = function (t, e) {
    localStorage && localStorage.setItem(t, e);
  }),
  (exports.toHttps = function (t) {
    return "string" != typeof t || t.length <= 0
      ? ""
      : t.trim().replace(/^http:\/\//, "https://");
  }),
  (exports.transformByDPR = function (t) {
    var e = u().ratio;
    return (
      (t = (t / 750) * u().width),
      0 === (t = Math.floor(t + 1e-4)) ? (1 === e ? 1 : 0.5) : t
    );
  });
