require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/typeof"),
  r = Object.defineProperty,
  i = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  u = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  s = function (e, t, n) {
    return new Promise(function (r, i) {
      var a = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        o = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, o);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  c = require("../../../../../../common/vendor.js"),
  f = {},
  d = (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var i = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 0))
    );
  })([
    function (e, t, r) {
      var i =
          "function" == typeof Symbol && "symbol" == n(Symbol.iterator)
            ? function (e) {
                return n(e);
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : n(e);
              },
        a = r(1);
      e.exports = function (t, n) {
        var r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          o =
            "object" ===
              ("undefined" == typeof document ? "undefined" : i(document)) &&
            "string" == typeof document.cookie,
          u =
            "object" === (void 0 === t ? "undefined" : i(t)) &&
            "object" === (void 0 === n ? "undefined" : i(n)) &&
            void 0 !== e,
          s = (!o && !u) || (o && u),
          c = function (e) {
            if (u) {
              var r = t.headers.cookie || "";
              return (
                e &&
                  (r = (r = n.getHeaders())["set-cookie"]
                    ? r["set-cookie"]
                        .map(function (e) {
                          return e.split(";")[0];
                        })
                        .join(";")
                    : ""),
                r
              );
            }
            if (o) return document.cookie || "";
          },
          f = function (e, t) {
            if (!t) return e;
            try {
              return JSON.parse(e);
            } catch (t) {
              return e;
            }
          },
          d = {
            parseJSON: r,
            set: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : { path: "/" };
              if (!s)
                if (
                  ((t =
                    "object" === (void 0 === t ? "undefined" : i(t))
                      ? JSON.stringify(t)
                      : t),
                  u)
                ) {
                  var o = (function () {
                    var e = n.getHeader("Set-Cookie");
                    return (e = "string" == typeof e ? [e] : e) || [];
                  })();
                  o.push(a.serialize(e, t, r)),
                    (function (e) {
                      n.setHeader("Set-Cookie", e);
                    })(o);
                } else document.cookie = a.serialize(e, t, r);
            },
            setAll: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              s ||
                (Array.isArray(e) &&
                  e.forEach(function (e) {
                    var t = e.name,
                      n = void 0 === t ? "" : t,
                      r = e.value,
                      i = void 0 === r ? "" : r,
                      a = e.opts,
                      o = void 0 === a ? { path: "/" } : a;
                    d.set(n, i, o);
                  }));
            },
            get: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { fromRes: !1, parseJSON: d.parseJSON };
              if (s) return "";
              var n = a.parse(c(t.fromRes))[e];
              return f(n, t.parseJSON);
            },
            getAll: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { fromRes: !1, parseJSON: d.parseJSON };
              if (s) return {};
              var t = a.parse(c(e.fromRes));
              for (var n in t) t[n] = f(t[n], e.parseJSON);
              return t;
            },
            remove: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { path: "/" };
              s || ((t.expires = new Date(0)), d.set(e, "", t));
            },
            removeAll: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { path: "/" };
              if (!s) {
                var t = a.parse(c());
                for (var n in t) d.remove(n, e);
              }
            },
            nodeCookie: a,
          };
        return d;
      };
    },
    function (e, t, n) {
      function r(e, t) {
        try {
          return t(e);
        } catch (t) {
          return e;
        }
      }
      /*!
       * cookie
       * Copyright(c) 2012-2014 Roman Shtylman
       * Copyright(c) 2015 Douglas Christopher Wilson
       * MIT Licensed
       */ (t.parse = function (e, t) {
        if ("string" != typeof e)
          throw new TypeError("argument str must be a string");
        for (
          var n = {}, a = t || {}, u = e.split(o), s = a.decode || i, c = 0;
          c < u.length;
          c++
        ) {
          var f = u[c],
            d = f.indexOf("=");
          if (!(d < 0)) {
            var p = f.substr(0, d).trim(),
              l = f.substr(++d, f.length).trim();
            '"' == l[0] && (l = l.slice(1, -1)),
              null == n[p] && (n[p] = r(l, s));
          }
        }
        return n;
      }),
        (t.serialize = function (e, t, n) {
          var r = n || {},
            i = r.encode || a;
          if ("function" != typeof i)
            throw new TypeError("option encode is invalid");
          if (!u.test(e)) throw new TypeError("argument name is invalid");
          var o = i(t);
          if (o && !u.test(o)) throw new TypeError("argument val is invalid");
          var s = e + "=" + o;
          if (null != r.maxAge) {
            var c = r.maxAge - 0;
            if (isNaN(c)) throw new Error("maxAge should be a Number");
            s += "; Max-Age=" + Math.floor(c);
          }
          if (r.domain) {
            if (!u.test(r.domain))
              throw new TypeError("option domain is invalid");
            s += "; Domain=" + r.domain;
          }
          if (r.path) {
            if (!u.test(r.path)) throw new TypeError("option path is invalid");
            s += "; Path=" + r.path;
          }
          if (r.expires) {
            if ("function" != typeof r.expires.toUTCString)
              throw new TypeError("option expires is invalid");
            s += "; Expires=" + r.expires.toUTCString();
          }
          if (
            (r.httpOnly && (s += "; HttpOnly"),
            r.secure && (s += "; Secure"),
            r.sameSite)
          )
            switch (
              "string" == typeof r.sameSite
                ? r.sameSite.toLowerCase()
                : r.sameSite
            ) {
              case !0:
                s += "; SameSite=Strict";
                break;
              case "lax":
                s += "; SameSite=Lax";
                break;
              case "strict":
                s += "; SameSite=Strict";
                break;
              case "none":
                s += "; SameSite=None";
                break;
              default:
                throw new TypeError("option sameSite is invalid");
            }
          return s;
        });
      var i = decodeURIComponent,
        a = encodeURIComponent,
        o = /; */,
        u = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    },
  ]),
  p =
    (c.commonjsGlobal && c.commonjsGlobal.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(f, "__esModule", { value: !0 });
var l = p(d),
  v = (function () {
    function e(e, t) {
      this.cookie = (0, l.default)(e, t);
    }
    return (
      (e.prototype.get = function (e, t) {
        return this.cookie.get(e, t);
      }),
      (e.prototype.getAll = function (e) {
        return this.cookie.getAll(e);
      }),
      (e.prototype.set = function (e, t, n) {
        this.cookie.set(e, t, n);
      }),
      (e.prototype.setAll = function (e) {
        this.cookie.setAll(e);
      }),
      (e.prototype.remove = function (e, t) {
        this.cookie.remove(e, t);
      }),
      (e.prototype.getCookiesStr = function () {
        var e = [],
          t = this.getAll();
        for (var n in t) e.push("".concat(n, "=").concat(t[n]));
        return e.join(";");
      }),
      e
    );
  })(),
  h = new (f.default = v)(),
  b = {
    name: "Navbar",
    props: {
      defaultActiveTab: { type: String, default: "" },
      hasAccount: { type: Boolean, default: !0 },
      redPointShowArr: {
        type: Array,
        default: function () {
          return [];
        },
      },
      preloadIcons: {
        type: Array,
        default: function () {
          return [];
        },
      },
      tabList: {
        type: Array,
        default: function () {
          return c.defaultTabList;
        },
      },
      grayTabList: {
        type: Array,
        default: function () {
          return c.defaultGrayTabList;
        },
      },
      needGray: { type: Boolean, default: !1 },
      grayStr: { type: String, default: "" },
      wujiCfg: {
        type: Object,
        default: function () {
          return { appid: "base", schemaid: "navbar_gray", rowid: 1 };
        },
      },
      wujiSdk: { type: Object, default: null },
      skin: { type: String, default: "white" },
      navbarVersion: { type: String, default: "v1" },
      applyTabConfig: { type: Object, default: c.applyTabConfig },
      skinTabConfig: { type: Object, default: c.skinTabConfig },
      mpStyle: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        navs: c.defaultTabList.map(function (e) {
          return e;
        }),
        curActiveTab: "",
        isGrayUser: !1,
        redPointTabs: [],
      };
    },
    watch: {
      isGrayUser: {
        handler: function (e) {
          if (
            ((this.navs = this.tabList.map(function (e) {
              return e;
            })),
            e)
          ) {
            var t = this.navs.find(function (e) {
                return "apply" === e.id;
              }),
              n = this.grayTabList.map(function (e) {
                return e;
              });
            if (t) {
              var r = n.findIndex(function (e) {
                return "asset" === e.id;
              });
              n.splice(r, 1, t);
            }
            this.navs = n;
          }
          this.navs = this.navs.sort(function (e, t) {
            return e.pos - t.pos;
          });
        },
        immediate: !0,
      },
      hasAccount: {
        handler: function () {
          this.updateAssetTab();
        },
        immediate: !0,
      },
      redPointShowArr: function (e) {
        this.redPointTabs = e;
      },
      defaultActiveTab: {
        handler: function (e) {
          this.curActiveTab = e;
        },
        immediate: !0,
      },
      skin: {
        handler: function () {
          this.updateSkinTabs();
        },
        immediate: !0,
      },
    },
    created: function () {
      return s(
        this,
        null,
        t().mark(function e() {
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.prev = 0), !this.needGray)) {
                      e.next = 7;
                      break;
                    }
                    if (this.wujiSdk) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt("return");
                  case 4:
                    this.judgeGrayUser(), (e.next = 8);
                    break;
                  case 7:
                    this.$emit("judgeGrayUser", this.isGrayUser);
                  case 8:
                    e.next = 12;
                    break;
                  case 10:
                    (e.prev = 10), (e.t0 = e.catch(0));
                  case 12:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this,
            [[0, 10]]
          );
        })
      );
    },
    methods: {
      updateAssetTab: function () {
        var e = this.hasAccount,
          t = c.defaultTabList.find(function (e) {
            return "asset" === e.id;
          });
        e || (t = this.applyTabConfig);
        var n = this.navs.find(function (e) {
            return "asset" === e.id;
          }),
          r = n ? "asset" : "apply";
        ((n && !e) || (!n && e)) && this.updateTab(r, t), this.updateSkinTabs();
      },
      clickTab: function (e, t) {
        (this.curActiveTab = e), this.$emit("clickTab", e, t);
      },
      updateTab: function (e, t) {
        var n = this.navs.findIndex(function (t) {
          return t.id === e;
        });
        -1 !== n &&
          ((t.pos && t.pos === this.navs[n].pos) || (t.pos = this.navs[n].pos),
          this.navs.splice(n, 1, t));
      },
      updateSkinTabs: function () {
        var t = this,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          r = n;
        0 === n.length && (r = this.skinTabConfig[this.skin] || []),
          r.forEach(function (n) {
            var r = n.id,
              s = t.navs.find(function (e) {
                return e.id === r;
              }),
              c = (function (t, n) {
                for (var r in n || (n = {})) a.call(n, r) && u(t, r, n[r]);
                if (i) {
                  var s,
                    c = e(i(n));
                  try {
                    for (c.s(); !(s = c.n()).done; ) {
                      r = s.value;
                      o.call(n, r) && u(t, r, n[r]);
                    }
                  } catch (e) {
                    c.e(e);
                  } finally {
                    c.f();
                  }
                }
                return t;
              })({}, s);
            (c.iconLink =
              n.iconLink || (null == s ? void 0 : s.iconLink) || ""),
              (c.activeIconLink =
                n.activeIconLink ||
                (null == s ? void 0 : s.activeIconLink) ||
                ""),
              t.updateTab(r, c);
          });
      },
      getCurTab: function () {
        var e = this;
        return this.navs.find(function (t) {
          return t.id === e.curActiveTab;
        });
      },
      judgeGrayUser: function () {
        return s(
          this,
          null,
          t().mark(function e() {
            var n, r;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = this.grayStr),
                        (e.t0 = void 0 === this.grayStr),
                        !e.t0)
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 5), this.getWujiData();
                    case 5:
                      n = e.sent;
                    case 6:
                      (r = h.get("wzq_qluin")) &&
                        ((this.isGrayUser = n.includes(
                          r.slice(-1).toLowerCase()
                        )),
                        this.$emit("judgeGrayUser", this.isGrayUser));
                    case 8:
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
      getWujiData: function () {
        return s(
          this,
          null,
          t().mark(function e() {
            var n, r;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        this.wujiSdk.get({
                          appid: this.wujiCfg.appid,
                          schemaid: this.wujiCfg.schemaid,
                          rowid: this.wujiCfg.rowid,
                        })
                      );
                    case 3:
                      return (
                        (r = e.sent),
                        e.abrupt(
                          "return",
                          null == (n = null == r ? void 0 : r.data)
                            ? void 0
                            : n.grayStr
                        )
                      );
                    case 7:
                      return (
                        (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        e.abrupt("return", "")
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 7]]
            );
          })
        );
      },
    },
  },
  y = c._export_sfc(b, [
    [
      "render",
      function (e, t, n, r, i, a) {
        return {
          a: c.f(i.navs, function (e, t, n) {
            return {
              a: c.n(i.redPointTabs.includes(e.id) ? "tab-red-dot" : ""),
              b: i.curActiveTab === e.id ? e.activeIconLink : e.iconLink,
              c: c.t(e.name),
              d: t,
              e: c.n(i.curActiveTab === e.id ? "active" : ""),
              f: c.o(
                function (n) {
                  return a.clickTab(e.id, t);
                },
                1610,
                t
              ),
            };
          }),
          b: c.n("skin-".concat(n.skin)),
          c: c.n(n.navbarVersion),
          d: c.n(n.mpStyle && "mp-navbar-wrap"),
        };
      },
    ],
    ["__scopeId", "data-v-d26801e0"],
  ]);
wx.createComponent(y);
