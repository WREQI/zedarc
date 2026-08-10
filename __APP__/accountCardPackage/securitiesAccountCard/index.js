Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0);
var e = require("../../accountCardPackage/@babel/runtime/helpers/slicedToArray");
require("../../accountCardPackage/@babel/runtime/helpers/Arrayincludes");
var t = require("../../accountCardPackage/@babel/runtime/helpers/regeneratorRuntime");
require("../../accountCardPackage/@babel/runtime/helpers/Objectvalues");
var n = require("../../accountCardPackage/@babel/runtime/helpers/typeof"),
  r = require("../../accountCardPackage/@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  o = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  l = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  f = function (e, t) {
    for (var n in t || (t = {})) s.call(t, n) && l(e, n, t[n]);
    if (u) {
      var i,
        o = r(u(t));
      try {
        for (o.s(); !(i = o.n()).done; ) {
          n = i.value;
          c.call(t, n) && l(e, n, t[n]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  p = function (e, t) {
    return o(e, a(t));
  },
  d = function (e, t, n) {
    return new Promise(function (r, i) {
      var o = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        a = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, a);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  h = (function (e, t) {
    return function () {
      return t || e((t = { exports: {} }).exports, t), t.exports;
    };
  })(function (i, o) {
    var a,
      l = "ACCOUNTCARD_NEED_TRADE_SESSION",
      h = "ACCOUNTCARD_NO_CURRENT_BROKER",
      g = { login: "登录失败 请稍候再试", reLogin: "登录态异常 请稍后再试" },
      v = (function () {
        function e(e) {
          void 0 === e && (e = {}),
            Object.defineProperty(this, "deps", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "scene", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "loginModel", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.scene = (null == e ? void 0 : e.scene) || ""),
            (this.deps =
              (null == e ? void 0 : e.deps) ||
              function () {
                return {};
              }),
            this.initModel(e);
        }
        return (
          Object.defineProperty(e.prototype, "getDefaultLoginErrorTip", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return g[e];
            },
          }),
          Object.defineProperty(e.prototype, "getLoginErrorTip", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              var n;
              try {
                var r =
                  null === (n = this.deps()) || void 0 === n
                    ? void 0
                    : n.resolveErrorTip;
                if ("function" == typeof r) {
                  var i = r(e, t);
                  if (i) return i;
                }
              } catch (e) {}
              return this.getDefaultLoginErrorTip(t);
            },
          }),
          e
        );
      })(),
      b =
        ((a = function (e, t) {
          return (a =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          a(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      y = function (e) {
        var t = e.code,
          n = e.msg,
          r = e.originErr,
          i = void 0 === r ? null : r,
          o = e.data,
          a = void 0 === o ? {} : o,
          u = e.from,
          s = void 0 === u ? "" : u,
          c = e.noRetry;
        return {
          retcode: String(t),
          retmsg: n,
          originErr: i,
          data: a,
          from: s,
          noRetry: c,
        };
      };
    function m(e) {
      var t = null;
      return (function (e) {
        function n() {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          var i = e.apply(this, n) || this;
          return t || ((t = i), i);
        }
        return b(n, e), n;
      })(e);
    }
    var w,
      O,
      E = function (e) {
        return new Promise(function (t, n) {
          wx.getStorage({
            key: e,
            success: function (e) {
              var n = e.data;
              try {
                "string" == typeof e.data && (n = JSON.parse(e.data));
              } catch (e) {}
              t(n);
            },
            fail: function () {
              t("");
            },
          });
        });
      },
      R = function (e, t) {
        return new Promise(function (n, r) {
          var i = JSON.stringify(t);
          wx.setStorage({
            key: e,
            data: i,
            success: function (e) {
              n(e);
            },
            fail: function (e) {
              r(e);
            },
          });
        });
      },
      _ = "mp_main",
      x = "mp_trade",
      S = "STATUS_CODE_ERROR",
      P = "RET_CODE_ERROR",
      C = "DATA_EMPTY_ERROR",
      T = "TRADE_GETCODE_NEED_LOGIN";
    ((O = w || (w = {}))[(O.TENPAY = 0)] = "TENPAY"),
      (O[(O.BROKER = 1)] = "BROKER");
    var I,
      j,
      k = /^510010\d\d$/,
      A = "accountcard://",
      L = function (e) {
        return E("".concat(A).concat(e));
      },
      N = function (e) {
        return E(e);
      },
      D = function (e, t) {
        return R("".concat(A).concat(e), t);
      },
      M = function () {
        return (M =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      },
      B = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            e.done
              ? i(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, u);
          }
          s((r = r.apply(e, t || [])).next());
        });
      },
      q = function (e, t) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: u(0), throw: u(1), return: u(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(o) {
          return function (u) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = t.call(e, a);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, u]);
          };
        }
      },
      G = ["_qluin", "_qlskey", "_lastlogin", "_srcuin", "_cftuin"],
      $ = 12096e5,
      U = (function () {
        function e(e) {
          Object.defineProperty(this, "scene", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "mpcard_main",
          }),
            Object.defineProperty(this, "deps", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "loginKeys", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            (this.deps = e.deps);
        }
        return (
          Object.defineProperty(e.prototype, "reportAdpt", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              var n,
                r,
                i = M(M({}, t), { loginScene: this.scene }),
                o = { ext4: JSON.stringify(i) };
              null ===
                (r =
                  null === (n = this.deps()) || void 0 === n
                    ? void 0
                    : n.aegis) ||
                void 0 === r ||
                r.reportEvent(e, o);
            },
          }),
          Object.defineProperty(e.prototype, "getcodeAdpt", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return this.getWxloginCode();
            },
          }),
          Object.defineProperty(e.prototype, "loginAdpt", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return new Promise(function (t, n) {
                wx.request({
                  url: "https://wzq.tenpay.com/cgi-bin/login.fcgi",
                  timeout: 15e3,
                  data: {
                    code: e.code,
                    code_from: "wxapp2",
                    xcxname: "wzqxcx",
                  },
                  method: "POST",
                  header: {
                    "content-type": "application/x-www-form-urlencoded",
                  },
                  enableHttp2: !0,
                  success: function (e) {
                    var r = e.data;
                    return "200" !== String(null == e ? void 0 : e.statusCode)
                      ? n(y({ code: S, msg: "请求状态码异常", originErr: e }))
                      : r
                      ? "0" !== (null == r ? void 0 : r.retcode)
                        ? n(y({ code: P, msg: "业务返回码异常", originErr: e }))
                        : t(r)
                      : n(y({ code: C, msg: "数据返回异常", originErr: e }));
                  },
                  fail: function (e) {
                    return n(
                      y({
                        code: null == e ? void 0 : e.errno,
                        msg: null == e ? void 0 : e.errMsg,
                        originErr: e,
                        from: "wx",
                      })
                    );
                  },
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "setLoginInfoAdpt", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return B(this, void 0, void 0, function () {
                var t, n, r, i, o;
                return q(this, function (a) {
                  switch (a.label) {
                    case 0:
                      (t = e), (n = 0), (a.label = 1);
                    case 1:
                      return n < G.length
                        ? ((i = (r = G[n]).replace(/(_|d_)/, "")),
                          (o =
                            decodeURIComponent(
                              String(null == t ? void 0 : t[i])
                            ) || ""),
                          "lastlogin" === i &&
                            !(null != t && t.onlyUpdateMemory) &&
                            (o = Date.now()),
                          (this.loginKeys[r] = o),
                          null != t && t.onlyUpdateMemory
                            ? [3, 3]
                            : [4, D(r, o)])
                        : [3, 4];
                    case 2:
                      a.sent(), (a.label = 3);
                    case 3:
                      return n++, [3, 1];
                    case 4:
                      return [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "getLoginInfoAdpt", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return B(this, void 0, void 0, function () {
                var t, n, r;
                return q(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (t = e || G), [4, this.innerGetLoginInfo(t)];
                    case 1:
                      return (
                        (n = i.sent()),
                        (r = new Date().getTime() - n.lastlogin >= $),
                        !!n.qluin && !!n.qlskey && !r
                          ? [2, n]
                          : [4, this.innerGetLoginInfo(t, "main")]
                      );
                    case 2:
                      return [2, i.sent()];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "isLoginAdpt", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return B(this, void 0, void 0, function () {
                var e, t, n;
                return q(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        r.trys.push([0, 4, , 5]), [4, this.getLoginInfoAdpt(G)]
                      );
                    case 1:
                      return (e = r.sent()).lastlogin
                        ? ((t = new Date().getTime() - e.lastlogin >= $),
                          (n = !!e.qluin && !!e.qlskey && !t) &&
                          0 === Object.keys(this.loginKeys).length
                            ? [
                                4,
                                this.setLoginInfoAdpt(
                                  M(M({}, e), { onlyUpdateMemory: !0 })
                                ),
                              ]
                            : [3, 3])
                        : [2, !1];
                    case 2:
                      r.sent(), (r.label = 3);
                    case 3:
                      return [2, n];
                    case 4:
                      return r.sent(), [2, !1];
                    case 5:
                      return [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "logoutAdpt", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {},
          }),
          Object.defineProperty(e.prototype, "innerGetLoginInfo", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              return (
                void 0 === t && (t = "card"),
                B(this, void 0, void 0, function () {
                  var n, r, i, o, a, u, s, c, l;
                  return q(this, function (f) {
                    switch (f.label) {
                      case 0:
                        (n = {}),
                          (r =
                            Array.isArray(e) &&
                            (null == e ? void 0 : e.length) > 0
                              ? e
                              : G),
                          (i = 0),
                          (f.label = 1);
                      case 1:
                        return i < r.length
                          ? ((o = r[i]),
                            (a = o.replace(/(_|d_)/, "")),
                            this.loginKeys[o]
                              ? ((n[a] = this.loginKeys[o]), [3, 6])
                              : [3, 2])
                          : [3, 7];
                      case 2:
                        return "main" !== t
                          ? [3, 4]
                          : ((u = n), (s = a), [4, N(o)]);
                      case 3:
                        return (u[s] = f.sent()), [3, 6];
                      case 4:
                        return (c = n), (l = a), [4, L(o)];
                      case 5:
                        (c[l] = f.sent()), (f.label = 6);
                      case 6:
                        return i++, [3, 1];
                      case 7:
                        return [2, n];
                    }
                  });
                })
              );
            },
          }),
          Object.defineProperty(e.prototype, "getWxloginCode", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return new Promise(function (e, t) {
                wx.login({
                  timeout: 5e3,
                  success: function (n) {
                    if (null != n && n.code) return e({ code: n.code });
                    t(
                      y({
                        code: "GET_WX_CODE_EMPTY_ERROR",
                        msg: "获取微信code异常",
                        originErr: n,
                        from: "wx",
                      })
                    );
                  },
                  fail: function (e) {
                    "request timeout" !== (null == e ? void 0 : e.errMsg)
                      ? t(
                          y({
                            code: "GET_WX_CODE_ERROR",
                            msg: "获取微信code异常",
                            originErr: e,
                            from: "wx",
                          })
                        )
                      : t(
                          y({
                            code: "GET_WX_CODE_TIMEOUT_ERROR",
                            msg: "获取微信code超时",
                            originErr: e,
                            from: "wx",
                          })
                        );
                  },
                });
              });
            },
          }),
          e
        );
      })(),
      F = function () {
        return (F =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      },
      K = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            e.done
              ? i(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, u);
          }
          s((r = r.apply(e, t || [])).next());
        });
      },
      z = function (e, t) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: u(0), throw: u(1), return: u(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(o) {
          return function (u) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = t.call(e, a);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, u]);
          };
        }
      },
      H = (function () {
        function e(e) {
          Object.defineProperty(this, "adapter", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "isLogining", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "loginPromise", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "isRelogining", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "reloginRetryTimes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "reloginPromise", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "replayQueue", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "retryLoginStoreKey", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BASELOGIN_RELOGIN_RETRY_TIMES",
            }),
            Object.defineProperty(this, "getcodeStoreKey", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BASELOGIN_CACHE_GETCODE",
            }),
            (this.adapter = null == e ? void 0 : e.adapter),
            this.initReloginRetryTimes();
        }
        return (
          Object.defineProperty(e.prototype, "logout", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return K(this, void 0, void 0, function () {
                var t;
                return z(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 2, , 3]),
                        [4, this.adapter.logoutAdpt(e)]
                      );
                    case 1:
                      return n.sent(), [3, 3];
                    case 2:
                      throw (
                        ((t = n.sent()),
                        this.reportEvent("BASELOGIN_LOGOUT_ERROR", {
                          error: t,
                        }),
                        t)
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "getcode", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              return K(this, void 0, void 0, function () {
                var n,
                  r,
                  i,
                  o,
                  a,
                  u,
                  s,
                  c = this;
                return z(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return (
                        (n = !(null == t || !t.isCache)),
                        (r = (null == t ? void 0 : t.expireTime) || 0),
                        (i = e),
                        [4, this.getStorage(this.getcodeStoreKey)]
                      );
                    case 1:
                      return (
                        (o = l.sent() || {}),
                        null != (a = (null == o ? void 0 : o[i]) || {}) &&
                        a.result &&
                        null != a &&
                        a.cacheTime &&
                        Date.now() - (null == a ? void 0 : a.cacheTime) < r
                          ? ((u = a.result),
                            (o[i] = null),
                            [4, this.setStorage(this.getcodeStoreKey, o)])
                          : [3, 3]
                      );
                    case 2:
                      return l.sent(), [2, Promise.resolve(u)];
                    case 3:
                      return (
                        delete (s = F({}, t)).isCache,
                        delete s.expireTime,
                        [
                          2,
                          this.adapter
                            .getcodeAdpt(e, s)
                            .then(function (e) {
                              return K(c, void 0, void 0, function () {
                                var t, r, a;
                                return z(this, function (u) {
                                  switch (u.label) {
                                    case 0:
                                      return (
                                        null != (t = F({}, e)) &&
                                          t.__servertime &&
                                          delete t.__servertime,
                                        n
                                          ? ((r = Date.now()),
                                            (o[i] = {
                                              result: t,
                                              cacheTime: r,
                                            }),
                                            [
                                              4,
                                              this.setStorage(
                                                this.getcodeStoreKey,
                                                o
                                              ),
                                            ])
                                          : [3, 2]
                                      );
                                    case 1:
                                      u.sent(),
                                        (a = Number(
                                          null == e ? void 0 : e.__servertime
                                        )) > 0 &&
                                          Math.abs(r - a) >= 432e5 &&
                                          this.reportEvent(
                                            "BASELOGIN_GETCODE_LOCALTIME_ERROR",
                                            {
                                              data: {
                                                localtime: r,
                                                servertime:
                                                  null == e
                                                    ? void 0
                                                    : e.__servertime,
                                              },
                                            }
                                          ),
                                        (u.label = 2);
                                    case 2:
                                      return [2, t];
                                  }
                                });
                              });
                            })
                            .catch(function (t) {
                              throw (
                                (c.reportEvent("BASELOGIN_GETCODE_ERROR", {
                                  error: t,
                                  data: { type: e },
                                }),
                                t)
                              );
                            }),
                        ]
                      );
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "isLogin", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              try {
                return this.adapter.isLoginAdpt(e);
              } catch (e) {
                return (
                  this.reportEvent("BASELOGIN_ISLOGIN_ERROR", { error: e }), !1
                );
              }
            },
          }),
          Object.defineProperty(e.prototype, "isBackendLoginExpired", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              try {
                var t = null == e ? void 0 : e.retcode,
                  n = null == e ? void 0 : e.rule;
                if (!t) return !1;
                if (/^510010\d\d$/.test(t)) return !0;
                if (n) {
                  if (n instanceof RegExp && null != n && n.test)
                    return n.test(t);
                  if (Array.isArray(n))
                    return (
                      (null == n ? void 0 : n.includes(String(t))) ||
                      (null == n ? void 0 : n.includes(Number(t)))
                    );
                  if ("string" == typeof n || "number" == typeof n)
                    return String(t) === String(n);
                }
                return !1;
              } catch (e) {
                return (
                  this.reportEvent("BASELOGIN_ISBACKENDLOGINEXPIRED_ERROR", {
                    error: e,
                  }),
                  !1
                );
              }
            },
          }),
          Object.defineProperty(e.prototype, "getLoginInfo", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              try {
                return this.adapter.getLoginInfoAdpt(e);
              } catch (e) {
                this.reportEvent("BASELOGIN_GETLOGININFO_ERROR", { error: e });
              }
            },
          }),
          Object.defineProperty(e.prototype, "setLoginInfo", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              try {
                return this.adapter.setLoginInfoAdpt(e);
              } catch (e) {
                this.reportEvent("BASELOGIN_SETLOGININFO_ERROR", { error: e });
              }
            },
          }),
          Object.defineProperty(e.prototype, "login", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return (
                this.isLogining ||
                  ((this.isLogining = !0),
                  (this.loginPromise = this.loginProcessCtrl(e))),
                this.loginPromise
              );
            },
          }),
          Object.defineProperty(e.prototype, "reLogin", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              return (
                e && this.replayQueue.push(e),
                this.isRelogining ||
                  ((this.isRelogining = !0),
                  (this.reloginPromise = this.reLoginProcessCtrl(t))),
                this.reloginPromise
              );
            },
          }),
          Object.defineProperty(e.prototype, "clearReloginRetryTimes", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return K(this, void 0, void 0, function () {
                return z(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.setReloginRetryTimes(!0)];
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "resetLoginingFlag", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              this.isLogining = !1;
            },
          }),
          Object.defineProperty(e.prototype, "getReloginRetryTimes", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return K(this, void 0, void 0, function () {
                var e;
                return z(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, 2, , 3]),
                        [
                          4,
                          this.getRetryTimesStorageImpl()(
                            this.retryLoginStoreKey
                          ),
                        ]
                      );
                    case 1:
                      return [2, t.sent() || this.reloginRetryTimes];
                    case 2:
                      return (
                        (e = t.sent()),
                        this.reportEvent(
                          "BASELOGIN_GETRELOGINRETRYTIMES_ERROR",
                          { error: e }
                        ),
                        [2, this.reloginRetryTimes]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "setReloginRetryTimes", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return (
                void 0 === e && (e = !1),
                K(this, void 0, void 0, function () {
                  var t, n;
                  return z(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          r.trys.push([0, 2, , 3]),
                          (t = e ? 0 : this.reloginRetryTimes + 1),
                          (this.reloginRetryTimes = t),
                          [
                            4,
                            this.setRetryTimesStorageImpl()(
                              this.retryLoginStoreKey,
                              t
                            ),
                          ]
                        );
                      case 1:
                        return r.sent(), [3, 3];
                      case 2:
                        return (
                          (n = r.sent()),
                          this.reportEvent(
                            "BASELOGIN_SETRELOGINRETRYTIMES_ERROR",
                            { error: n }
                          ),
                          [3, 3]
                        );
                      case 3:
                        return [2];
                    }
                  });
                })
              );
            },
          }),
          Object.defineProperty(e.prototype, "initReloginRetryTimes", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return K(this, void 0, void 0, function () {
                var e;
                return z(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, 2, , 3]),
                        [4, this.initReloginRetryTimesImpl()]
                      );
                    case 1:
                      return t.sent(), [3, 3];
                    case 2:
                      return (
                        (e = t.sent()),
                        this.reportEvent(
                          "BASELOGIN_INITRELOGINRETRYTIMES_ERROR",
                          { error: e }
                        ),
                        [3, 3]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "setRetryLoginStoreKey", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              this.retryLoginStoreKey = e;
            },
          }),
          Object.defineProperty(e.prototype, "setGetcodeStoreKey", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              this.getcodeStoreKey = e;
            },
          }),
          Object.defineProperty(e.prototype, "reportEvent", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              var n, r;
              try {
                null === (r = (n = this.adapter).reportAdpt) ||
                  void 0 === r ||
                  r.call(n, e, t);
              } catch (e) {}
            },
          }),
          Object.defineProperty(e.prototype, "loginStrategy", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return K(this, void 0, void 0, function () {
                return z(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.adapter.loginAdpt(e)];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "loginProcessCtrl", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return K(this, void 0, void 0, function () {
                var t, n, r;
                return z(this, function (i) {
                  switch (i.label) {
                    case 0:
                      i.trys.push([0, , 7, 8]),
                        (t = !(null == e || !e.noRetry)),
                        (n = 0),
                        (i.label = 1);
                    case 1:
                      if (!(n <= 1)) return [3, 6];
                      i.label = 2;
                    case 2:
                      return (
                        i.trys.push([2, 4, , 5]), [4, this.loginStrategy(e)]
                      );
                    case 3:
                      return [2, i.sent()];
                    case 4:
                      if (
                        ((r = i.sent()),
                        0 === n &&
                          !t &&
                          !(null != r && r.noRetry) &&
                          this.reportEvent("BASELOGIN_LOGIN_FIRST_ERROR", {
                            error: r,
                            data: {
                              retryTimes: n,
                              from: !(null == e || !e.from),
                            },
                          }),
                        t || 1 === n || (null != r && r.noRetry))
                      )
                        throw (
                          (this.reportEvent("BASELOGIN_LOGIN_ERROR", {
                            error: r,
                            data: {
                              retryTimes: n,
                              from: !(null == e || !e.from),
                            },
                          }),
                          r)
                        );
                      return [3, 5];
                    case 5:
                      return (n += 1), [3, 1];
                    case 6:
                      return [3, 8];
                    case 7:
                      return (this.isLogining = !1), [7];
                    case 8:
                      return [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "reLoginProcessCtrl", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t;
              return K(this, void 0, void 0, function () {
                var n, r, i, o;
                return z(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (n = this), [4, this.getReloginRetryTimes()];
                    case 1:
                      if (
                        ((n.reloginRetryTimes = a.sent()),
                        this.reloginRetryTimes >= 2)
                      )
                        throw (
                          ((r = {
                            retcode: "RELOGIN_RETRY_LIMIT",
                            retmsg: "重登次数已达上限",
                          }),
                          this.reportEvent("BASELOGIN_RELOGIN_RETRY_LIMIT", {
                            error: r,
                            data: { retryTimes: this.reloginRetryTimes },
                          }),
                          (this.replayQueue = []),
                          (this.isRelogining = !1),
                          r)
                        );
                      a.label = 2;
                    case 2:
                      return (
                        a.trys.push([2, 4, 5, 7]),
                        [
                          4,
                          this.login(
                            F({ noRetry: !0, from: "FROM_INNER_RELOGIN" }, e)
                          ),
                        ]
                      );
                    case 3:
                      for (
                        a.sent(), i = null;
                        (i =
                          null === (t = this.replayQueue) || void 0 === t
                            ? void 0
                            : t.shift());

                      )
                        "function" == typeof i && (null == i || i());
                      return [3, 7];
                    case 4:
                      throw (
                        ((o = a.sent()),
                        this.reportEvent("BASELOGIN_RELOGIN_ERROR", {
                          error: o,
                          data: { retryTimes: this.reloginRetryTimes },
                        }),
                        o)
                      );
                    case 5:
                      return (
                        (this.replayQueue = []),
                        [4, this.setReloginRetryTimes()]
                      );
                    case 6:
                      return a.sent(), (this.isRelogining = !1), [7];
                    case 7:
                      return [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "getStorage", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return K(this, void 0, void 0, function () {
                var t;
                return z(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 2, , 3]), [4, this.getStorageImpl(e)]
                      );
                    case 1:
                      return [2, n.sent()];
                    case 2:
                      return (
                        (t = n.sent()),
                        this.reportEvent("BASELOGIN_GETSTORAGE_ERROR", {
                          error: t,
                        }),
                        [3, 3]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "setStorage", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              return K(this, void 0, void 0, function () {
                var n;
                return z(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        r.trys.push([0, 2, , 3]), [4, this.setStorageImpl(e, t)]
                      );
                    case 1:
                      return r.sent(), [3, 3];
                    case 2:
                      return (
                        (n = r.sent()),
                        this.reportEvent("BASELOGIN_SETSTORAGE_ERROR", {
                          error: n,
                        }),
                        [3, 3]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            },
          }),
          e
        );
      })(),
      Y =
        ((j = function (e, t) {
          return (j =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          j(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      W = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            e.done
              ? i(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, u);
          }
          s((r = r.apply(e, t || [])).next());
        });
      },
      J = function (e, t) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: u(0), throw: u(1), return: u(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(o) {
          return function (u) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = t.call(e, a);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, u]);
          };
        }
      },
      V = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Y(t, e),
          Object.defineProperty(t.prototype, "getcode", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (t, n) {
              return W(this, void 0, void 0, function () {
                return J(this, function (r) {
                  return [2, e.prototype.getcode.call(this, t, n)];
                });
              });
            },
          }),
          Object.defineProperty(t.prototype, "setStorageImpl", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              return W(this, void 0, void 0, function () {
                return J(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, D(e, t)];
                    case 1:
                      return n.sent(), [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(t.prototype, "getStorageImpl", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return W(this, void 0, void 0, function () {
                return J(this, function (t) {
                  return [2, L(e)];
                });
              });
            },
          }),
          Object.defineProperty(t.prototype, "setRetryTimesStorageImpl", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return D;
            },
          }),
          Object.defineProperty(t.prototype, "getRetryTimesStorageImpl", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return L;
            },
          }),
          Object.defineProperty(t.prototype, "initReloginRetryTimesImpl", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return W(this, void 0, void 0, function () {
                return J(this, function (e) {
                  return this.clearReloginRetryTimes(), [2];
                });
              });
            },
          }),
          Object.defineProperty(t.prototype, "loginStrategy", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return W(this, void 0, void 0, function () {
                var e, t;
                return J(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.getcode(_)];
                    case 1:
                      return (e = n.sent()), [4, this.adapter.loginAdpt(e)];
                    case 2:
                      return (t = n.sent()), [4, this.setLoginInfo(t)];
                    case 3:
                      return n.sent(), [2];
                  }
                });
              });
            },
          }),
          t
        );
      })(H),
      Q =
        ((I = function (e, t) {
          return (I =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          I(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      X = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            e.done
              ? i(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, u);
          }
          s((r = r.apply(e, t || [])).next());
        });
      },
      Z = function (e, t) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: u(0), throw: u(1), return: u(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(o) {
          return function (u) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = t.call(e, a);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, u]);
          };
        }
      },
      ee = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return (
          Q(t, e),
          Object.defineProperty(t.prototype, "isLogin", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return this.loginModel.isLogin();
            },
          }),
          Object.defineProperty(t.prototype, "getLoginInfo", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return this.loginModel.getLoginInfo(e);
            },
          }),
          Object.defineProperty(t.prototype, "setLoginInfo", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return this.loginModel.setLoginInfo(e);
            },
          }),
          Object.defineProperty(t.prototype, "reLogin", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return X(this, void 0, void 0, function () {
                return Z(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.loginModel.reLogin(e)];
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(t.prototype, "login", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return X(this, void 0, void 0, function () {
                return Z(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.loginModel.login()];
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(t.prototype, "isBackendLoginExpired", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return this.loginModel.isBackendLoginExpired(e);
            },
          }),
          Object.defineProperty(t.prototype, "getcode", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              return this.loginModel.getcode(e, t);
            },
          }),
          Object.defineProperty(t.prototype, "initModel", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              this.loginModel = new V({ adapter: new U({ deps: this.deps }) });
            },
          }),
          (t = (function (e, t, r, i) {
            var o,
              a = arguments.length,
              u =
                a < 3
                  ? t
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(t, r))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              u = Reflect.decorate(e, t, r, i);
            else
              for (var s = e.length - 1; s >= 0; s--)
                (o = e[s]) &&
                  (u = (a < 3 ? o(u) : a > 3 ? o(t, r, u) : o(t, r)) || u);
            return a > 3 && u && Object.defineProperty(t, r, u), u;
          })([m], t))
        );
      })(v),
      te = function () {
        return (te =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      },
      ne = {};
    function re() {
      return te({}, ne);
    }
    var ie = "accountcard://",
      oe = function (e) {
        return E("".concat(ie).concat(re().code, "/").concat(e));
      },
      ae = function (e, t) {
        return R("".concat(ie).concat(re().code, "/").concat(e), t);
      };
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self && self;
    var ue = { exports: {} };
    !(function (e, t) {
      e.exports = (function () {
        var e = 6e4,
          t = 36e5,
          r = "millisecond",
          i = "second",
          o = "minute",
          a = "hour",
          u = "day",
          s = "week",
          c = "month",
          l = "quarter",
          f = "year",
          p = "date",
          d = "Invalid Date",
          h =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          g =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          v = {
            name: "en",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            ordinal: function (e) {
              var t = ["th", "st", "nd", "rd"],
                n = e % 100;
              return "[" + e + (t[(n - 20) % 10] || t[n] || t[0]) + "]";
            },
          },
          b = function (e, t, n) {
            var r = String(e);
            return !r || r.length >= t
              ? e
              : "" + Array(t + 1 - r.length).join(n) + e;
          },
          y = {
            s: b,
            z: function (e) {
              var t = -e.utcOffset(),
                n = Math.abs(t),
                r = Math.floor(n / 60),
                i = n % 60;
              return (t <= 0 ? "+" : "-") + b(r, 2, "0") + ":" + b(i, 2, "0");
            },
            m: function e(t, n) {
              if (t.date() < n.date()) return -e(n, t);
              var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                i = t.clone().add(r, c),
                o = n - i < 0,
                a = t.clone().add(r + (o ? -1 : 1), c);
              return +(-(r + (n - i) / (o ? i - a : a - i)) || 0);
            },
            a: function (e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
            },
            p: function (e) {
              return (
                { M: c, y: f, w: s, d: u, D: p, h: a, m: o, s: i, ms: r, Q: l }[
                  e
                ] ||
                String(e || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (e) {
              return void 0 === e;
            },
          },
          m = "en",
          w = {};
        w[m] = v;
        var O = "$isDayjsObject",
          E = function (e) {
            return e instanceof S || !(!e || !e[O]);
          },
          R = function e(t, n, r) {
            var i;
            if (!t) return m;
            if ("string" == typeof t) {
              var o = t.toLowerCase();
              w[o] && (i = o), n && ((w[o] = n), (i = o));
              var a = t.split("-");
              if (!i && a.length > 1) return e(a[0]);
            } else {
              var u = t.name;
              (w[u] = t), (i = u);
            }
            return !r && i && (m = i), i || (!r && m);
          },
          _ = function (e, t) {
            if (E(e)) return e.clone();
            var r = "object" == n(t) ? t : {};
            return (r.date = e), (r.args = arguments), new S(r);
          },
          x = y;
        (x.l = R),
          (x.i = E),
          (x.w = function (e, t) {
            return _(e, {
              locale: t.$L,
              utc: t.$u,
              x: t.$x,
              $offset: t.$offset,
            });
          });
        var S = (function () {
            function n(e) {
              (this.$L = R(e.locale, null, !0)),
                this.parse(e),
                (this.$x = this.$x || e.x || {}),
                (this[O] = !0);
            }
            var v = n.prototype;
            return (
              (v.parse = function (e) {
                (this.$d = (function (e) {
                  var t = e.date,
                    n = e.utc;
                  if (null === t) return new Date(NaN);
                  if (x.u(t)) return new Date();
                  if (t instanceof Date) return new Date(t);
                  if ("string" == typeof t && !/Z$/i.test(t)) {
                    var r = t.match(h);
                    if (r) {
                      var i = r[2] - 1 || 0,
                        o = (r[7] || "0").substring(0, 3);
                      return n
                        ? new Date(
                            Date.UTC(
                              r[1],
                              i,
                              r[3] || 1,
                              r[4] || 0,
                              r[5] || 0,
                              r[6] || 0,
                              o
                            )
                          )
                        : new Date(
                            r[1],
                            i,
                            r[3] || 1,
                            r[4] || 0,
                            r[5] || 0,
                            r[6] || 0,
                            o
                          );
                    }
                  }
                  return new Date(t);
                })(e)),
                  this.init();
              }),
              (v.init = function () {
                var e = this.$d;
                (this.$y = e.getFullYear()),
                  (this.$M = e.getMonth()),
                  (this.$D = e.getDate()),
                  (this.$W = e.getDay()),
                  (this.$H = e.getHours()),
                  (this.$m = e.getMinutes()),
                  (this.$s = e.getSeconds()),
                  (this.$ms = e.getMilliseconds());
              }),
              (v.$utils = function () {
                return x;
              }),
              (v.isValid = function () {
                return this.$d.toString() !== d;
              }),
              (v.isSame = function (e, t) {
                var n = _(e);
                return this.startOf(t) <= n && n <= this.endOf(t);
              }),
              (v.isAfter = function (e, t) {
                return _(e) < this.startOf(t);
              }),
              (v.isBefore = function (e, t) {
                return this.endOf(t) < _(e);
              }),
              (v.$g = function (e, t, n) {
                return x.u(e) ? this[t] : this.set(n, e);
              }),
              (v.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (v.valueOf = function () {
                return this.$d.getTime();
              }),
              (v.startOf = function (e, t) {
                var n = this,
                  r = !!x.u(t) || t,
                  l = x.p(e),
                  d = function (e, t) {
                    var i = x.w(
                      n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e),
                      n
                    );
                    return r ? i : i.endOf(u);
                  },
                  h = function (e, t) {
                    return x.w(
                      n
                        .toDate()
                        [e].apply(
                          n.toDate("s"),
                          (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)
                        ),
                      n
                    );
                  },
                  g = this.$W,
                  v = this.$M,
                  b = this.$D,
                  y = "set" + (this.$u ? "UTC" : "");
                switch (l) {
                  case f:
                    return r ? d(1, 0) : d(31, 11);
                  case c:
                    return r ? d(1, v) : d(0, v + 1);
                  case s:
                    var m = this.$locale().weekStart || 0,
                      w = (g < m ? g + 7 : g) - m;
                    return d(r ? b - w : b + (6 - w), v);
                  case u:
                  case p:
                    return h(y + "Hours", 0);
                  case a:
                    return h(y + "Minutes", 1);
                  case o:
                    return h(y + "Seconds", 2);
                  case i:
                    return h(y + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (v.endOf = function (e) {
                return this.startOf(e, !1);
              }),
              (v.$set = function (e, t) {
                var n,
                  s = x.p(e),
                  l = "set" + (this.$u ? "UTC" : ""),
                  d = ((n = {}),
                  (n[u] = l + "Date"),
                  (n[p] = l + "Date"),
                  (n[c] = l + "Month"),
                  (n[f] = l + "FullYear"),
                  (n[a] = l + "Hours"),
                  (n[o] = l + "Minutes"),
                  (n[i] = l + "Seconds"),
                  (n[r] = l + "Milliseconds"),
                  n)[s],
                  h = s === u ? this.$D + (t - this.$W) : t;
                if (s === c || s === f) {
                  var g = this.clone().set(p, 1);
                  g.$d[d](h),
                    g.init(),
                    (this.$d = g.set(p, Math.min(this.$D, g.daysInMonth())).$d);
                } else d && this.$d[d](h);
                return this.init(), this;
              }),
              (v.set = function (e, t) {
                return this.clone().$set(e, t);
              }),
              (v.get = function (e) {
                return this[x.p(e)]();
              }),
              (v.add = function (n, r) {
                var l,
                  p = this;
                n = Number(n);
                var d = x.p(r),
                  h = function (e) {
                    var t = _(p);
                    return x.w(t.date(t.date() + Math.round(e * n)), p);
                  };
                if (d === c) return this.set(c, this.$M + n);
                if (d === f) return this.set(f, this.$y + n);
                if (d === u) return h(1);
                if (d === s) return h(7);
                var g =
                    ((l = {}), (l[o] = e), (l[a] = t), (l[i] = 1e3), l)[d] || 1,
                  v = this.$d.getTime() + n * g;
                return x.w(v, this);
              }),
              (v.subtract = function (e, t) {
                return this.add(-1 * e, t);
              }),
              (v.format = function (e) {
                var t = this,
                  n = this.$locale();
                if (!this.isValid()) return n.invalidDate || d;
                var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                  i = x.z(this),
                  o = this.$H,
                  a = this.$m,
                  u = this.$M,
                  s = n.weekdays,
                  c = n.months,
                  l = n.meridiem,
                  f = function (e, n, i, o) {
                    return (e && (e[n] || e(t, r))) || i[n].slice(0, o);
                  },
                  p = function (e) {
                    return x.s(o % 12 || 12, e, "0");
                  },
                  h =
                    l ||
                    function (e, t, n) {
                      var r = e < 12 ? "AM" : "PM";
                      return n ? r.toLowerCase() : r;
                    };
                return r.replace(g, function (e, r) {
                  return (
                    r ||
                    (function (e) {
                      switch (e) {
                        case "YY":
                          return String(t.$y).slice(-2);
                        case "YYYY":
                          return x.s(t.$y, 4, "0");
                        case "M":
                          return u + 1;
                        case "MM":
                          return x.s(u + 1, 2, "0");
                        case "MMM":
                          return f(n.monthsShort, u, c, 3);
                        case "MMMM":
                          return f(c, u);
                        case "D":
                          return t.$D;
                        case "DD":
                          return x.s(t.$D, 2, "0");
                        case "d":
                          return String(t.$W);
                        case "dd":
                          return f(n.weekdaysMin, t.$W, s, 2);
                        case "ddd":
                          return f(n.weekdaysShort, t.$W, s, 3);
                        case "dddd":
                          return s[t.$W];
                        case "H":
                          return String(o);
                        case "HH":
                          return x.s(o, 2, "0");
                        case "h":
                          return p(1);
                        case "hh":
                          return p(2);
                        case "a":
                          return h(o, a, !0);
                        case "A":
                          return h(o, a, !1);
                        case "m":
                          return String(a);
                        case "mm":
                          return x.s(a, 2, "0");
                        case "s":
                          return String(t.$s);
                        case "ss":
                          return x.s(t.$s, 2, "0");
                        case "SSS":
                          return x.s(t.$ms, 3, "0");
                        case "Z":
                          return i;
                      }
                      return null;
                    })(e) ||
                    i.replace(":", "")
                  );
                });
              }),
              (v.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
              }),
              (v.diff = function (n, r, p) {
                var d,
                  h = this,
                  g = x.p(r),
                  v = _(n),
                  b = (v.utcOffset() - this.utcOffset()) * e,
                  y = this - v,
                  m = function () {
                    return x.m(h, v);
                  };
                switch (g) {
                  case f:
                    d = m() / 12;
                    break;
                  case c:
                    d = m();
                    break;
                  case l:
                    d = m() / 3;
                    break;
                  case s:
                    d = (y - b) / 6048e5;
                    break;
                  case u:
                    d = (y - b) / 864e5;
                    break;
                  case a:
                    d = y / t;
                    break;
                  case o:
                    d = y / e;
                    break;
                  case i:
                    d = y / 1e3;
                    break;
                  default:
                    d = y;
                }
                return p ? d : x.a(d);
              }),
              (v.daysInMonth = function () {
                return this.endOf(c).$D;
              }),
              (v.$locale = function () {
                return w[this.$L];
              }),
              (v.locale = function (e, t) {
                if (!e) return this.$L;
                var n = this.clone(),
                  r = R(e, t, !0);
                return r && (n.$L = r), n;
              }),
              (v.clone = function () {
                return x.w(this.$d, this);
              }),
              (v.toDate = function () {
                return new Date(this.valueOf());
              }),
              (v.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (v.toISOString = function () {
                return this.$d.toISOString();
              }),
              (v.toString = function () {
                return this.$d.toUTCString();
              }),
              n
            );
          })(),
          P = S.prototype;
        return (
          (_.prototype = P),
          [
            ["$ms", r],
            ["$s", i],
            ["$m", o],
            ["$H", a],
            ["$W", u],
            ["$M", c],
            ["$y", f],
            ["$D", p],
          ].forEach(function (e) {
            P[e[1]] = function (t) {
              return this.$g(t, e[0], e[1]);
            };
          }),
          (_.extend = function (e, t) {
            return e.$i || (e(t, S, _), (e.$i = !0)), _;
          }),
          (_.locale = R),
          (_.isDayjs = E),
          (_.unix = function (e) {
            return _(1e3 * e);
          }),
          (_.en = w[m]),
          (_.Ls = w),
          (_.p = {}),
          _
        );
      })();
    })(ue);
    var se = (function (e) {
      return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
    })(ue.exports);
    function ce(e) {
      if (e) {
        var t = [],
          n = {};
        if (
          0 !==
          (t = e
            .replace(/(Expires=[A-Za-z]{3}),/gi, "$1_")
            .split(",")
            .map(function (e) {
              return e.replace(/(Expires=[A-Za-z]{3})_/gi, "$1,");
            })).length
        )
          return (
            t.forEach(function (e) {
              var t = (function (e) {
                var t = e.split(";"),
                  n = {},
                  r = t.shift().split("=");
                if (!(r.length < 2))
                  return (
                    (n.name = r[0]),
                    (n.value = r[1]),
                    t.forEach(function (e) {
                      e.match(/^\s*Expires=/i) &&
                        (n.expires = se(e.split("=")[1]).format()),
                        e.match(/^\s*Max-age=/i) &&
                          (n.maxAge = +e.split("=")[1]),
                        e.match(/^\s*DOMAIN=/i) && (n.domain = e.split("=")[1]),
                        e.match(/^\s*PATH=/i) && (n.path = e.split("=")[1]);
                    }),
                    n
                  );
              })(e);
              t && t.name && ((t.name = t.name.trim()), (n[t.name] = t));
            }),
            n
          );
      }
    }
    var le = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            e.done
              ? i(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, u);
          }
          s((r = r.apply(e, t || [])).next());
        });
      },
      fe = function (e, t) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: u(0), throw: u(1), return: u(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(o) {
          return function (u) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = t.call(e, a);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, u]);
          };
        }
      },
      pe = "fe_now",
      de = [pe];
    function he(e) {
      return le(this, void 0, void 0, function () {
        var t, n, r, i, o, a, u;
        return fe(this, function (s) {
          switch (s.label) {
            case 0:
              return me(e, "Object") ? [4, be()] : [2, void 0];
            case 1:
              for (r in ((t = s.sent()), (n = {}), e))
                me(e[r], "Object")
                  ? ((i = e[r]),
                    (o = i.value),
                    (a = i.expires),
                    (u = i.maxAge),
                    (n[r] = ve({ name: r, value: o, expires: a, maxAge: u })))
                  : (n[r] = ve({ name: r, value: e[r] }));
              return (
                (n[pe] = ve({ name: pe, value: String(Date.now()) })),
                [4, ge(Object.assign({}, t, n))]
              );
            case 2:
              return s.sent(), [2];
          }
        });
      });
    }
    function ge(e) {
      return le(this, void 0, void 0, function () {
        return fe(this, function (t) {
          switch (t.label) {
            case 0:
              return t.trys.push([0, 2, , 3]), [4, ae("cookies", e)];
            case 1:
              return t.sent(), [3, 3];
            case 2:
              return t.sent(), [3, 3];
            case 3:
              return [2];
          }
        });
      });
    }
    function ve(e) {
      var t = e.name,
        n = e.value,
        r = e.expires,
        i = e.maxAge;
      return void 0 === t || void 0 === n
        ? {}
        : {
            name: t,
            value: n,
            expires: (r =
              r ||
              (function (e) {
                var t = 1e3 * (e || 31536e3);
                return se().add(t, "ms").format;
              })(i)),
          };
    }
    function be() {
      return le(this, void 0, void 0, function () {
        var e;
        return fe(this, function (t) {
          switch (t.label) {
            case 0:
              return t.trys.push([0, 2, , 3]), [4, oe("cookies")];
            case 1:
              return (e = t.sent()), [3, 3];
            case 2:
              return t.sent(), [3, 3];
            case 3:
              return me(e, "Object") || (e = {}), [4, ye(e)];
            case 4:
              return t.sent(), [2, e];
          }
        });
      });
    }
    function ye(e) {
      return le(this, void 0, void 0, function () {
        var t, n;
        return fe(this, function (r) {
          switch (r.label) {
            case 0:
              for (n in ((t = !1), e))
                se().isAfter(se(e[n].expires)) && ((t = !0), delete e[n]);
              return t ? [4, ge(Object.assign({}, e))] : [3, 2];
            case 1:
              r.sent(), (r.label = 2);
            case 2:
              return [2];
          }
        });
      });
    }
    function me(e, t) {
      return Object.prototype.toString.call(e) === "[object ".concat(t, "]");
    }
    var we,
      Oe,
      Ee = {
        setCookie: he,
        getCookie: function (e) {
          return (
            void 0 === e && (e = ""),
            le(this, void 0, void 0, function () {
              var t, n;
              return fe(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, be()];
                  case 1:
                    return (
                      (t = r.sent()),
                      (n = t[e]),
                      "",
                      [2, n ? decodeURIComponent(n.value) : ""]
                    );
                }
              });
            })
          );
        },
        getCookiesObj: function () {
          return le(this, void 0, void 0, function () {
            var e, t, n;
            return fe(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, be()];
                case 1:
                  for (n in ((e = r.sent()), (t = {}), e))
                    t[n] = decodeURIComponent(e[n].value);
                  return [2, t];
              }
            });
          });
        },
        getCookiesStr: function () {
          return le(this, void 0, void 0, function () {
            var e, t, n;
            return fe(this, function (r) {
              switch (r.label) {
                case 0:
                  return (e = []), [4, be()];
                case 1:
                  for (n in (t = r.sent()))
                    de.includes(n) ||
                      e.push("".concat(n, "=").concat(t[n].value));
                  return [2, e.join(";")];
              }
            });
          });
        },
        setCookieFromHeader: function (e) {
          return le(this, void 0, void 0, function () {
            var t;
            return fe(this, function (n) {
              switch (n.label) {
                case 0:
                  return (t = ce(e)) ? [4, he(t)] : [2];
                case 1:
                  return n.sent(), [2];
              }
            });
          });
        },
        removeCookie: function (e) {
          return le(this, void 0, void 0, function () {
            var t;
            return fe(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, be()];
                case 1:
                  return (
                    delete (t = n.sent())[e], [4, ge(Object.assign({}, t))]
                  );
                case 2:
                  return n.sent(), [2];
              }
            });
          });
        },
      },
      Re = function () {
        return (Re =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      },
      _e = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            e.done
              ? i(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, u);
          }
          s((r = r.apply(e, t || [])).next());
        });
      },
      xe = function (e, t) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: u(0), throw: u(1), return: u(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(o) {
          return function (u) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = t.call(e, a);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, u]);
          };
        }
      },
      Se = (function () {
        function e() {}
        return (
          Object.defineProperty(e.prototype, "get", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return Ee.getCookie(e);
            },
          }),
          Object.defineProperty(e.prototype, "getAll", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return Ee.getCookiesObj();
            },
          }),
          Object.defineProperty(e.prototype, "set", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t, n) {
              return _e(this, void 0, void 0, function () {
                var r;
                return xe(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return [
                        4,
                        Ee.setCookie(
                          ((r = {}), (r[e] = Re({ value: t }, n)), r)
                        ),
                      ];
                    case 1:
                      return i.sent(), [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "setAll", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return _e(this, void 0, void 0, function () {
                var t;
                return xe(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (t = {}),
                        e.forEach(function (e) {
                          var n = e.name,
                            r = e.value,
                            i = e.opts;
                          t[n] = Re({ value: r }, i);
                        }),
                        [4, Ee.setCookie(t)]
                      );
                    case 1:
                      return n.sent(), [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "remove", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return _e(this, void 0, void 0, function () {
                return xe(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, Ee.removeCookie(e)];
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "removeAll", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return _e(this, void 0, void 0, function () {
                var e, t, n, r, i;
                return xe(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [4, this.getAll()];
                    case 1:
                      for (n in ((e = o.sent()), (t = []), e)) t.push(n);
                      (r = 0), (o.label = 2);
                    case 2:
                      return r < t.length
                        ? ((i = t[r]), [4, this.remove(i)])
                        : [3, 5];
                    case 3:
                      o.sent(), (o.label = 4);
                    case 4:
                      return r++, [3, 2];
                    case 5:
                      return [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "getCookiesStr", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return _e(this, void 0, void 0, function () {
                return xe(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, Ee.getCookiesStr()];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "setCookieFromHeader", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return _e(this, void 0, void 0, function () {
                return xe(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, Ee.setCookieFromHeader(e)];
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            },
          }),
          e
        );
      })(),
      Pe = function () {
        return (Pe =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      },
      Ce = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            e.done
              ? i(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, u);
          }
          s((r = r.apply(e, t || [])).next());
        });
      },
      Te = function (e, t) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: u(0), throw: u(1), return: u(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(o) {
          return function (u) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = t.call(e, a);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, u]);
          };
        }
      },
      Ie = function (e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = t.length; i < o; i++)
            (r || !(i in t)) &&
              (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      },
      je = ["wzq_qluin", "wzq_qlskey", "wzq_qlappid"],
      ke = ["qluin", "qlskey", "qlappid"],
      Ae = (function () {
        function e(e) {
          Object.defineProperty(this, "scene", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "mpcard_trade",
          }),
            Object.defineProperty(this, "cookie", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new Se(),
            }),
            Object.defineProperty(this, "deps", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.deps = e.deps);
        }
        return (
          Object.defineProperty(e.prototype, "reportAdpt", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              var n,
                r,
                i = Pe(Pe({}, t), { loginScene: this.scene }),
                o = { ext4: JSON.stringify(i) };
              null ===
                (r =
                  null === (n = this.deps()) || void 0 === n
                    ? void 0
                    : n.aegis) ||
                void 0 === r ||
                r.reportEvent(e, o);
            },
          }),
          Object.defineProperty(e.prototype, "getcodeAdpt", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              return this.getBrokerCode(t);
            },
          }),
          Object.defineProperty(e.prototype, "loginAdpt", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return new Promise(function (t, n) {
                wx.request({
                  url: ""
                    .concat(e.domain, "/")
                    .concat("cgi-bin/mini_login.fcgi"),
                  timeout: 15e3,
                  data: { code: e.code, skey_sign: e.skeySign, checkLogin: !1 },
                  method: "POST",
                  header: {
                    "content-type": "application/x-www-form-urlencoded",
                  },
                  enableHttp2: !0,
                  success: function (e) {
                    var r = e.data;
                    return "200" !== String(null == e ? void 0 : e.statusCode)
                      ? n(y({ code: S, msg: "请求状态码异常", originErr: e }))
                      : r
                      ? "0" !== (null == r ? void 0 : r.retcode)
                        ? n(y({ code: P, msg: "业务返回码异常", originErr: e }))
                        : t(e)
                      : n(y({ code: C, msg: "数据返回异常", originErr: e }));
                  },
                  fail: function (e) {
                    return n(
                      y({
                        code: null == e ? void 0 : e.errno,
                        msg: null == e ? void 0 : e.errMsg,
                        originErr: e,
                        from: "wx",
                      })
                    );
                  },
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "setLoginInfoAdpt", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return Ce(this, void 0, void 0, function () {
                var t, n, r, i;
                return Te(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (
                        ((t = e.header),
                        (n = t["Set-Cookie"] || t["set-cookie"] || ""))
                      )
                        try {
                          (r = n.split(";,")),
                            ((i = r[0].split(";"))[0] = "h_spec=1"),
                            (n += ",".concat(i.join(";"), ";"));
                        } catch (e) {}
                      return [4, this.cookie.setCookieFromHeader(n)];
                    case 1:
                      return o.sent(), [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "getLoginInfoAdpt", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return Ce(this, void 0, void 0, function () {
                return Te(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.cookie.getCookiesStr()];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "isLoginAdpt", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return Ce(this, void 0, void 0, function () {
                var e;
                return Te(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.innerGetLoginInfo()];
                    case 1:
                      return (
                        (e = t.sent()),
                        [
                          2,
                          Object.values(ke).every(function (t) {
                            return !!e[t];
                          }) ||
                            Object.values(je).every(function (t) {
                              return !!e[t];
                            }),
                        ]
                      );
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "logoutAdpt", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {},
          }),
          Object.defineProperty(e.prototype, "innerGetLoginInfo", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return Ce(this, void 0, void 0, function () {
                var e, t, n, r, i, o;
                return Te(this, function (a) {
                  switch (a.label) {
                    case 0:
                      (e = {}),
                        (t = Ie(Ie([], je, !0), ke, !0)),
                        (n = 0),
                        (a.label = 1);
                    case 1:
                      return n < t.length
                        ? ((r = t[n]),
                          (i = e),
                          (o = r),
                          [4, this.cookie.get(r)])
                        : [3, 4];
                    case 2:
                      (i[o] = a.sent()), (a.label = 3);
                    case 3:
                      return n++, [3, 1];
                    case 4:
                      return [2, e];
                  }
                });
              });
            },
          }),
          Object.defineProperty(e.prototype, "getBrokerCode", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return new Promise(function (t, n) {
                wx.request({
                  url: "https://wzq.tenpay.com/cgi-bin/getcode.fcgi",
                  timeout: 8e3,
                  data: {
                    qluin: null == e ? void 0 : e.qluin,
                    qlskey: null == e ? void 0 : e.qlskey,
                    dealercode: null == e ? void 0 : e.dealercode,
                    dealer_domain: null == e ? void 0 : e.domain,
                    login_type: 0,
                    mini_type: 1,
                    skey_sign_ctl: 1,
                  },
                  method: "GET",
                  enableHttp2: !0,
                  success: function (e) {
                    var r,
                      i,
                      o = (e || {}).data;
                    if ("200" !== String(e.statusCode))
                      return n(
                        y({ code: S, msg: "请求状态码异常", originErr: e })
                      );
                    if (!o)
                      return n(
                        y({ code: C, msg: "数据返回异常", originErr: e })
                      );
                    if (null != o && o.retcode && k.test(o.retcode))
                      return n(
                        y({
                          code: T,
                          msg: "登陆态失效",
                          noRetry: !0,
                          originErr: e,
                        })
                      );
                    if ("0" !== (null == o ? void 0 : o.retcode))
                      return n(
                        y({ code: P, msg: "业务返回码异常", originErr: e })
                      );
                    if (null == o || !o.login_code)
                      return n(
                        y({
                          code: "GET_BROKER_CODE_ERROR",
                          msg: "获取券商侧code异常",
                          originErr: e,
                        })
                      );
                    var a =
                        (null === (r = null == e ? void 0 : e.header) ||
                        void 0 === r
                          ? void 0
                          : r.date) &&
                        new Date(
                          null === (i = null == e ? void 0 : e.header) ||
                          void 0 === i
                            ? void 0
                            : i.date
                        ).getTime(),
                      u = {
                        loginCode: o.login_code,
                        skeySign: o.skey_sign,
                        __servertime: a,
                      };
                    return t(u);
                  },
                  fail: function (e) {
                    if ("request timeout" !== (null == e ? void 0 : e.errMsg))
                      return n(
                        y({
                          code: "GET_BROKER_CODE_ERROR",
                          msg: "获取券商侧code异常",
                          originErr: e,
                          from: "wx",
                        })
                      );
                    n(
                      y({
                        code: "GET_BROKER_CODE_TIMEOUT_ERROR",
                        msg: "获取券商侧code超时",
                        originErr: e,
                        from: "wx",
                      })
                    );
                  },
                });
              });
            },
          }),
          e
        );
      })(),
      Le =
        ((Oe = function (e, t) {
          return (Oe =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          Oe(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      Ne = function () {
        return (Ne =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      },
      De = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            e.done
              ? i(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, u);
          }
          s((r = r.apply(e, t || [])).next());
        });
      },
      Me = function (e, t) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: u(0), throw: u(1), return: u(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(o) {
          return function (u) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = t.call(e, a);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, u]);
          };
        }
      },
      Be = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Le(t, e),
          Object.defineProperty(t.prototype, "getcode", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (t, n) {
              var r, i, o;
              return De(this, void 0, void 0, function () {
                var a, u;
                return Me(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return null !== (r = this.adapter.deps()) &&
                        void 0 !== r &&
                        r.mainLogin
                        ? [4, this.adapter.deps().mainLogin.isLogin()]
                        : [
                            2,
                            Promise.reject(
                              y({
                                code: "LACK_MAIN_DEPS",
                                msg: "缺少主站登陆依赖",
                              })
                            ),
                          ];
                    case 1:
                      return s.sent()
                        ? [3, 3]
                        : [
                            4,
                            null === (i = this.adapter.deps()) || void 0 === i
                              ? void 0
                              : i.mainLogin.login(),
                          ];
                    case 2:
                      s.sent(), (s.label = 3);
                    case 3:
                      return [
                        4,
                        null === (o = this.adapter.deps()) || void 0 === o
                          ? void 0
                          : o.mainLogin.getLoginInfo(),
                      ];
                    case 4:
                      return (
                        (a = s.sent()),
                        (u = decodeURIComponent(
                          (null == n ? void 0 : n.domain) || ""
                        )) && 0 === u.indexOf("https://")
                          ? (u = u.substring(8))
                          : u &&
                            0 === u.indexOf("http://") &&
                            (u = u.substring(7)),
                        [
                          2,
                          e.prototype.getcode.call(
                            this,
                            t,
                            Ne(Ne(Ne({}, n || {}), a), {
                              expireTime: 24e4,
                              dealercode: null == n ? void 0 : n.dealercode,
                              domain: u,
                            })
                          ),
                        ]
                      );
                  }
                });
              });
            },
          }),
          Object.defineProperty(t.prototype, "setStorageImpl", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              return De(this, void 0, void 0, function () {
                return Me(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, ae(e, t)];
                    case 1:
                      return n.sent(), [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(t.prototype, "getStorageImpl", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return De(this, void 0, void 0, function () {
                return Me(this, function (t) {
                  return [2, oe(e)];
                });
              });
            },
          }),
          Object.defineProperty(t.prototype, "setRetryTimesStorageImpl", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return ae;
            },
          }),
          Object.defineProperty(t.prototype, "getRetryTimesStorageImpl", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return oe;
            },
          }),
          Object.defineProperty(t.prototype, "initReloginRetryTimesImpl", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return De(this, void 0, void 0, function () {
                return Me(this, function (e) {
                  return [2];
                });
              });
            },
          }),
          Object.defineProperty(t.prototype, "loginStrategy", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return De(this, void 0, void 0, function () {
                var t, n, r;
                return Me(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return [4, this.getcode(x, e)];
                    case 1:
                      return (
                        (t = i.sent()),
                        -1 ===
                          (n = decodeURIComponent(e.domain)).indexOf("http") &&
                          (n = "https://".concat(n)),
                        [
                          4,
                          this.adapter.loginAdpt({
                            domain: n,
                            code: t.loginCode,
                            skeySign: t.skeySign,
                          }),
                        ]
                      );
                    case 2:
                      return (r = i.sent()), [4, this.setLoginInfo(r)];
                    case 3:
                      return i.sent(), [2];
                  }
                });
              });
            },
          }),
          t
        );
      })(H),
      qe =
        ((we = function (e, t) {
          return (we =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          we(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      Ge = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            e.done
              ? i(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, u);
          }
          s((r = r.apply(e, t || [])).next());
        });
      },
      $e = function (e, t) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: u(0), throw: u(1), return: u(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(o) {
          return function (u) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = t.call(e, a);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, u]);
          };
        }
      },
      Ue = (function (e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (
            Object.defineProperty(n, "hasClearFlags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            n
          );
        }
        return (
          qe(t, e),
          Object.defineProperty(t.prototype, "setBrokerBaseInfo", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              (function (e) {
                void 0 === e && (e = {}), (ne = te({}, e));
              })(e),
                e.code &&
                  !this.hasClearFlags[e.code] &&
                  (this.loginModel.clearReloginRetryTimes(),
                  (this.hasClearFlags[e.code] = !0));
            },
          }),
          Object.defineProperty(t.prototype, "getBrokerBaseInfo", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return re();
            },
          }),
          Object.defineProperty(t.prototype, "isLogin", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return this.loginModel.isLogin();
            },
          }),
          Object.defineProperty(t.prototype, "getLoginInfo", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return this.loginModel.getLoginInfo(e);
            },
          }),
          Object.defineProperty(t.prototype, "setLoginInfo", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return this.loginModel.setLoginInfo(e);
            },
          }),
          Object.defineProperty(t.prototype, "reLogin", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              return Ge(this, void 0, void 0, function () {
                return $e(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.loginModel.reLogin(e, t)];
                    case 1:
                      return n.sent(), [2];
                  }
                });
              });
            },
          }),
          Object.defineProperty(t.prototype, "login", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return Ge(this, void 0, void 0, function () {
                var t = this;
                return $e(this, function (n) {
                  return [
                    2,
                    new Promise(function (n, r) {
                      return Ge(t, void 0, void 0, function () {
                        var t,
                          i,
                          o = this;
                        return $e(this, function (a) {
                          switch (a.label) {
                            case 0:
                              return (
                                a.trys.push([0, 2, , 3]),
                                [4, this.loginModel.login(e)]
                              );
                            case 1:
                              return a.sent(), n(!0), [3, 3];
                            case 2:
                              return (
                                (t = a.sent()).retcode === T &&
                                null !== (i = this.deps()) &&
                                void 0 !== i &&
                                i.mainLogin
                                  ? this.deps()
                                      .mainLogin.reLogin(function () {
                                        return Ge(
                                          o,
                                          void 0,
                                          void 0,
                                          function () {
                                            return $e(this, function (t) {
                                              switch (t.label) {
                                                case 0:
                                                  return [
                                                    4,
                                                    this.login(e).catch(
                                                      function (e) {
                                                        return r(e);
                                                      }
                                                    ),
                                                  ];
                                                case 1:
                                                  return t.sent(), n(!0), [2];
                                              }
                                            });
                                          }
                                        );
                                      })
                                      .catch(function (e) {
                                        r(e);
                                      })
                                  : r(t),
                                [3, 3]
                              );
                            case 3:
                              return [2];
                          }
                        });
                      });
                    }),
                  ];
                });
              });
            },
          }),
          Object.defineProperty(t.prototype, "isBackendLoginExpired", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return this.loginModel.isBackendLoginExpired(e);
            },
          }),
          Object.defineProperty(t.prototype, "getcode", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              return this.loginModel.getcode(x, e);
            },
          }),
          Object.defineProperty(t.prototype, "initModel", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              this.loginModel = new Be({
                adapter: new Ae({ deps: this.deps }),
              });
            },
          }),
          (t = (function (e, t, r, i) {
            var o,
              a = arguments.length,
              u =
                a < 3
                  ? t
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(t, r))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              u = Reflect.decorate(e, t, r, i);
            else
              for (var s = e.length - 1; s >= 0; s--)
                (o = e[s]) &&
                  (u = (a < 3 ? o(u) : a > 3 ? o(t, r, u) : o(t, r)) || u);
            return a > 3 && u && Object.defineProperty(t, r, u), u;
          })([m], t))
        );
      })(v);
    function Fe(e) {
      return "[object String]" === Object.prototype.toString.call(e);
    }
    function Ke(e) {
      return new Promise(function (t) {
        wx.getStorage({
          key: e,
          success: function (e) {
            var n = null == e ? void 0 : e.data;
            t(n);
          },
          fail: function () {
            t("");
          },
        });
      });
    }
    i = (o = { exports: {} }).exports;
    !(function (e, t) {
      "object" == n(i) && void 0 !== o
        ? (o.exports = t())
        : "function" == typeof define && define.amd
        ? define(t)
        : ((e =
            "undefined" != typeof globalThis ? globalThis : e || self).Aegis =
            t());
    })(void 0, function () {
      Object.assign ||
        Object.defineProperty(Object, "assign", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function (e) {
            if (null == e)
              throw new TypeError("Cannot convert first argument to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++)
              if (null != (r = arguments[n]))
                for (
                  var r = Object(r),
                    i = Object.keys(Object(r)),
                    o = 0,
                    a = i.length;
                  o < a;
                  o++
                ) {
                  var u = i[o],
                    s = Object.getOwnPropertyDescriptor(r, u);
                  null != s && s.enumerable && (t[u] = r[u]);
                }
            return t;
          },
        });
      var e = function (t, n) {
          return (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array
              ? function (e, t) {
                  e.__proto__ = t;
                }
              : function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }))(t, n);
        },
        t = function () {
          return (t =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        };
      function r(e, t, n, r) {
        return new (n = n || Promise)(function (t, i) {
          function o(e) {
            try {
              u(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function u(e) {
            var r;
            e.done
              ? t(e.value)
              : ((r = e.value) instanceof n
                  ? r
                  : new n(function (e) {
                      e(r);
                    })
                ).then(o, a);
          }
          u((r = r.apply(e, [])).next());
        });
      }
      function i(e, t) {
        var n,
          r,
          i,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          },
          a = { next: u(0), throw: u(1), return: u(2) };
        return (
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function u(a) {
          return function (u) {
            var s = [a, u];
            if (n) throw new TypeError("Generator is already executing.");
            for (; o; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (i =
                      2 & s[0]
                        ? r.return
                        : s[0]
                        ? r.throw || ((i = r.return) && i.call(r), 0)
                        : r.next) &&
                    !(i = i.call(r, s[1])).done)
                )
                  return i;
                switch (((r = 0), (s = i ? [2 & s[0], i.value] : s)[0])) {
                  case 0:
                  case 1:
                    i = s;
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
                        (i = 0 < (i = o.trys).length && i[i.length - 1]) ||
                        (6 !== s[0] && 2 !== s[0])
                      )
                    ) {
                      o = 0;
                      continue;
                    }
                    if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3])))
                      o.label = s[1];
                    else if (6 === s[0] && o.label < i[1])
                      (o.label = i[1]), (i = s);
                    else {
                      if (!(i && o.label < i[2])) {
                        i[2] && o.ops.pop(), o.trys.pop();
                        continue;
                      }
                      (o.label = i[2]), o.ops.push(s);
                    }
                }
                s = t.call(e, o);
              } catch (e) {
                (s = [6, e]), (r = 0);
              } finally {
                n = i = 0;
              }
            if (5 & s[0]) throw s[1];
            return { value: s[0] ? s[1] : void 0, done: !0 };
          };
        }
      }
      function o() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        var r = Array(e),
          i = 0;
        for (t = 0; t < n; t++)
          for (var o = arguments[t], a = 0, u = o.length; a < u; a++, i++)
            r[i] = o[a];
        return r;
      }
      var a,
        u,
        s,
        c,
        l,
        f,
        p = {
          snapshootInfo: void 0,
          type: void 0,
          level: void 0,
          plugin: void 0,
        },
        d = {
          PV: "pv",
          AID: "aid",
          F_ID: "fId",
          ERROR: "error",
          DEVICE: "device",
          CLOSE: "close",
          PAGE_PERFORMANCE: "pagePerformance",
          WEB_VITALS: "webVitals",
          IE: "ie",
          SPA: "spa",
          API: "api",
          ASSET_SPEED: "assetSpeed",
          CUSTOM: "custom",
          SESSION: "session",
          BRIDGE_SPEED: "bridgeSpeed",
          LOAD_PACKAGE: "loadPackageSpeed",
          BLANK_SCREEN: "blankScreen",
          WEBSOCKET: "websocket",
        },
        h = ["level", "trace", "tag", "seq", "code"];
      ((q = a = a || {}).INFO = "info"),
        (q.ERROR = "error"),
        (q.SDK_ERROR = "sdk_error"),
        (q.PROMISE_ERROR = "promise_error"),
        (q.AJAX_ERROR = "ajax_error"),
        (q.SCRIPT_ERROR = "script_error"),
        (q.WEBSOCKET_ERROR = "websocket_error"),
        (q.IMAGE_ERROR = "image_error"),
        (q.CSS_ERROR = "css_error"),
        (q.MEDIA_ERROR = "media_error"),
        (q.REPORT = "report"),
        (q.RET_ERROR = "ret_error"),
        (q.BRIDGE_ERROR = "brige_error"),
        (q.BLANK_SCREEN = "blank_screen"),
        (q.CUSTOM_ERROR = "custom_error"),
        ((q = u = u || {}).NORMAL = "normal"),
        (q.PV = "pv"),
        (q.API = "api"),
        (q.CUSTOM_TIME = "custom_time"),
        (q.CUSTOM_EVENT = "custom_event"),
        (q.ASSETS_SPEED = "assets_speed"),
        (q.PAGE_PERFORMANCE = "page_performance"),
        (q.WEB_VITALS = "web_vitals"),
        (q.SDK_ERROR = "sdk_error"),
        (q.SESSION = "session"),
        (q.BRIDGE = "bridge"),
        (q.WEBSOCKET = "websocket"),
        ((q = s = s || {}).PROD = "production"),
        (q.DEV = "development"),
        (q.GRAY = "gray"),
        (q.PRE = "pre"),
        (q.DAILY = "daily"),
        (q.LOCAL = "local"),
        (q.TEST = "test"),
        (q.OTHER = "others"),
        ((q = c = c || {}).ON_NEW_AEGIS = "onNewAegis"),
        (q.ON_BEFORE_DESTROY = "onBeforeDestroy"),
        (q.ON_DESTROYED = "onDestroyed"),
        (q.ON_BEFORE_COLLECT = "onBeforeCollect"),
        (q.ON_COLLECTED = "onCollected"),
        (q.ON_BEFORE_PROCESS = "onBeforeProcess"),
        (q.ON_PROCESSED = "onProcessed"),
        (q.ON_BEFORE_SEND = "onBeforeSend"),
        (q.ON_SEND = "onSended"),
        ((q = l = l || {}).ON_REPORT = "onReport"),
        (q.BEFORE_REPORT_SPEED = "beforeReportSpeed"),
        (q.BEFORE_REPORT = "beforeReport"),
        (q.ON_BEFORE_REQUEST = "onBeforeRequest"),
        ((q = f = f || {}).init = "init"),
        (q.sampleChange = "sampleChange"),
        (q.destroy = "destroy"),
        (q.configChange = "configChange"),
        (q.errorOccurred = "errorOccurred"),
        (y.prototype.indexOf = function (e, t) {
          for (var n = 0; n < e.length; n++) if (e[n].callback === t) return n;
          return -1;
        }),
        (y.prototype.on = function (e, t, n) {
          var r;
          if ((void 0 === n && (n = 0), this))
            return (
              (r = this.eventsList[e]) ||
                ((this.eventsList[e] = []), (r = this.eventsList[e])),
              -1 === this.indexOf(r, t) &&
                r.push({ name: e, type: n || 0, callback: t }),
              this
            );
        }),
        (y.prototype.one = function (e, t) {
          this.on(e, t, 1);
        }),
        (y.prototype.remove = function (e, t) {
          if (this) {
            var n = this.eventsList[e];
            if (n) {
              if (t)
                return (
                  n.length && ((t = this.indexOf(n, t)), n.splice(t, 1)), this
                );
              try {
                delete this.eventsList[e];
              } catch (e) {}
            }
            return null;
          }
        }),
        (y.prototype.clear = function () {
          this.eventsList = {};
        });
      var g = y,
        v = { generateTraceId: m(16), generateSpanId: m(8) },
        b = Array(32);
      function y() {
        var e = this;
        (this.emit = function (t, n) {
          if (e) {
            var r;
            if (null != (i = e.eventsList[t]) && i.length)
              for (var i = i.slice(), o = 0; o < i.length; o++) {
                r = i[o];
                try {
                  var a = r.callback.apply(e, [n]);
                  if ((1 === r.type && e.remove(t, r.callback), !1 === a))
                    break;
                } catch (e) {
                  throw e;
                }
              }
            return e;
          }
        }),
          (this.eventsList = {});
      }
      function m(e) {
        return function () {
          for (var t = 0; t < 2 * e; t++)
            (b[t] = Math.floor(16 * Math.random()) + 48),
              58 <= b[t] && (b[t] += 39);
          return String.fromCharCode.apply(null, b.slice(0, 2 * e));
        };
      }
      function w(e) {
        if ("string" == typeof e) return e;
        try {
          return e instanceof Error
            ? (JSON.stringify(e, S()) || "undefined").replace(/"/gim, "")
            : JSON.stringify(e, S()) || "undefined";
        } catch (e) {
          return (
            "error happen when aegis stringify: \n " +
            e.message +
            " \n " +
            e.stack
          );
        }
      }
      function O(e) {
        if ("string" == typeof e) return e;
        try {
          return JSON.stringify(e, S()) || "undefined";
        } catch (e) {
          return (
            "error happen when aegis stringify: \n " +
            e.message +
            " \n " +
            e.stack
          );
        }
      }
      function E(e, t, n) {
        return r(void 0, 0, void 0, function () {
          return i(this, function (r) {
            switch (r.label) {
              case 0:
                return "function" != typeof e ? [3, 2] : [4, e.call(t, n, t)];
              case 1:
                return [2, r.sent()];
              case 2:
                return [2, n || []];
            }
          });
        });
      }
      function R(e, t) {
        if ("string" == typeof t) {
          var r = (t = t.split(".")).pop();
          if (r)
            return "object" ==
              n(
                (t = t.reduce(function (e, t) {
                  return null == e ? void 0 : e[t];
                }, e))
              )
              ? t[r]
              : t;
        }
      }
      function _(e) {
        return [
          a.ERROR,
          a.PROMISE_ERROR,
          a.AJAX_ERROR,
          a.SCRIPT_ERROR,
          a.IMAGE_ERROR,
          a.CSS_ERROR,
          a.MEDIA_ERROR,
          a.WEBSOCKET_ERROR,
          a.BRIDGE_ERROR,
          a.SDK_ERROR,
          a.BLANK_SCREEN,
        ].includes(e.level);
      }
      var x,
        S = function () {
          var e = new WeakSet();
          return function (t, r) {
            if (r instanceof Error)
              return (
                "Error.message: " + r.message + " \n  Error.stack: " + r.stack
              );
            if ("object" == n(r) && null !== r) {
              if (e.has(r)) return "[Circular " + (t || "root") + "]";
              e.add(r);
            }
            return r;
          };
        },
        P = function e(t) {
          for (var r = [], i = 1; i < arguments.length; i++)
            r[i - 1] = arguments[i];
          if (!r.length) return t;
          var a,
            u = r.shift();
          for (a in u)
            "object" == n(u[a]) &&
            null !== u[a] &&
            t.hasOwnProperty(a) &&
            "object" == n(t[a]) &&
            null !== t[a]
              ? e(t[a], u[a])
              : (t[a] = u[a]);
          return e.apply(void 0, o([t], r));
        },
        C =
          ((T.prototype.patch = function (e) {
            this.canUse(e) &&
              this.exist(e) &&
              (this.plugins.push(e),
              this.triggerInit(e),
              this.triggerOnNewAegis(e));
          }),
          (T.prototype.unPatch = function (e) {
            var t = this.plugins.indexOf(e);
            -1 !== t &&
              (this.plugins.splice(t, 1), 0 === this.plugins.length) &&
              this.uninstall(e);
          }),
          (T.prototype.uninstall = function (e) {
            var t;
            null != (t = null == (t = e.option) ? void 0 : t.destroy) &&
              t.call(e.option, this.aegis, this.getConfig(e));
          }),
          (T.prototype.walk = function (e) {
            var t = this;
            this.plugins.forEach(function (n) {
              t.canUse(n) && e(n, t.getConfig(n));
            });
          }),
          (T.prototype.canUse = function (e) {
            return !e || !(!(e = this.getConfig(e)) || "object" != n(e)) || !!e;
          }),
          (T.prototype.getConfig = function (e) {
            var t;
            return null != (t = null == (t = this.config) ? void 0 : t[e.name])
              ? t
              : null == (t = this.aegis.config)
              ? void 0
              : t[e.name];
          }),
          (T.prototype.exist = function (e) {
            return -1 === this.plugins.indexOf(e);
          }),
          (T.prototype.triggerInit = function (e) {
            var t;
            this.initializedPlugin[e.name] ||
              ((e.option.aegis = this.aegis),
              (e.aegis = this.aegis),
              (this.initializedPlugin[e.name] = !0),
              null == (t = null == (t = e.option) ? void 0 : t.init)) ||
              t.call(e.option, this.aegis, this.getConfig(e));
          }),
          (T.prototype.triggerOnNewAegis = function (e) {
            var t;
            E(this.aegis.config.onBeforeCollect, this.aegis),
              null != (t = null == (t = e.option) ? void 0 : t.onNewAegis) &&
                t.call(e.option, this.aegis, this.getConfig(e));
          }),
          T);
      function T(e, t) {
        (this.plugins = []),
          (this.initializedPlugin = {}),
          (this.aegis = e),
          (this.config = t);
      }
      function I(e) {
        return new Promise(function (n) {
          return Array.isArray(e)
            ? n(
                e.map(function (e) {
                  return (
                    (n = t(t({}, e), {
                      msg:
                        "string" == typeof e.msg
                          ? e.msg
                          : [].concat(e.msg).map(w).join(" "),
                    })),
                    h.forEach(function (e) {
                      n[e] || delete n[e];
                    }),
                    n
                  );
                  var n;
                })
              )
            : n([
                t(t({}, e), {
                  msg: "string" == typeof e.msg ? e.msg : w(e.msg),
                }),
              ]);
        });
      }
      function j(e) {
        if (Array.isArray(e) && 0 !== e.length)
          return function (t) {
            return new Promise(function (n) {
              !(function t(o, a) {
                return r(void 0, 0, void 0, function () {
                  var r;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return o < e.length ? [4, e[o](a)] : [3, 2];
                      case 1:
                        return (
                          (r = i.sent()).length
                            ? t(o + 1, r)
                            : null != n && n([]),
                          [3, 3]
                        );
                      case 2:
                        null != n && n(a), (i.label = 3);
                      case 3:
                        return [2];
                    }
                  });
                });
              })(0, t);
            });
          };
        throw new TypeError("createPipeline needs at least one function param");
      }
      function k(e, t) {
        Object.getOwnPropertyNames(e).forEach(function (n) {
          "function" == typeof e[n] &&
            "constructor" !== n &&
            (t
              ? (t[n] =
                  "sendPipeline" === n
                    ? function () {
                        return function () {};
                      }
                    : function () {})
              : (e[n] = function () {}));
        });
      }
      function A(e) {
        return Promise.resolve(e);
      }
      ((q = x = x || {})[(q.hasNotFetched = 0)] = "hasNotFetched"),
        (q[(q.fetching = 1)] = "fetching"),
        (q[(q.alreadyFetched = 2)] = "alreadyFetched");
      var L,
        N = {
          name: "sample",
          create: function (e) {
            function t() {
              (e.fetchSampleStatus = x.alreadyFetched),
                p.length && e.send(p.splice(0, p.length));
            }
            function n() {
              return (
                (e.fetchSampleStatus = x.fetching),
                new Promise(function (n) {
                  var r = Date.now();
                  e.request(
                    {
                      url:
                        R(e.config, "hostUrl.whiteListUrl") +
                        "?uid=" +
                        l +
                        "&topic=" +
                        e.config.id,
                      payload: {},
                      method: "GET",
                    },
                    function (i) {
                      var o,
                        a = (i = i.data || JSON.parse(i)).is_in_white_list,
                        u = void 0 === (s = i.sample_map) ? {} : s,
                        s = i.server_time,
                        l = i.start_server_time;
                      0 !== i.code
                        ? ((e.sampleMap = c), e.event.emit(f.sampleChange))
                        : ((e.isWhiteList = !!a),
                          a && e.config.whiteList
                            ? Object.keys(d).forEach(function (e) {
                                c[d[e]] = 1;
                              })
                            : ((o = {}),
                              Object.keys(u).forEach(function (e) {
                                o[
                                  e.replace(/(_\w)/g, function (e) {
                                    return e[1].toUpperCase();
                                  })
                                ] = u[e] / 100;
                              }),
                              P(c, o)),
                          (e.sampleMap = c),
                          e.event.emit(f.sampleChange),
                          (a =
                            ((i = Date.now()) - r - (Number(s) - Number(l))) /
                            2),
                          (l = Number(s) + a),
                          (e.serverTimeGap = Math.floor(l - i))),
                        t(),
                        n();
                    },
                    function () {
                      (e.sampleMap = c), e.event.emit(f.sampleChange), t(), n();
                    }
                  );
                })
              );
            }
            var o,
              a,
              u,
              s = Math.random(),
              c =
                ((a = e),
                (u = {}),
                Object.keys(d).forEach(function (e) {
                  e = d[e];
                  var t = R(a.config, "sample." + e);
                  u[e] = t;
                }),
                u),
              l = null == (o = e.config) ? void 0 : o.uid,
              p = [];
            return (
              e.event.on(f.configChange, function (e) {
                e.uid !== l && ((l = e.uid), n());
              }),
              function (t) {
                return new Promise(function (o) {
                  return r(void 0, 0, void 0, function () {
                    var r, a, u;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return x.alreadyFetched === e.fetchSampleStatus
                            ? ((r = e.sampleMap),
                              (a = e.config.forceReportErrorLog),
                              (u = t.filter(function (e) {
                                return (
                                  !e.plugin ||
                                  !(
                                    (!a || !_(e)) &&
                                    ((e = e.plugin === d.SPA ? d.PV : e.plugin),
                                    void 0 !== (e = r[e])) &&
                                    e < s
                                  )
                                );
                              })),
                              [2, o(u)])
                            : ((p = p.concat(t)),
                              x.hasNotFetched !== e.fetchSampleStatus
                                ? [3, 2]
                                : [4, n()]);
                        case 1:
                          return i.sent(), [2, o([])];
                        case 2:
                          return x.fetching === e.fetchSampleStatus
                            ? [2, o([])]
                            : [2];
                      }
                    });
                  });
                });
              }
            );
          },
        },
        D = {
          name: "format",
          create: function () {
            return I;
          },
        },
        M = {
          name: "lengthLimit",
          create: function (e) {
            return function (t) {
              return r(void 0, 0, void 0, function () {
                var n;
                return i(this, function (r) {
                  return (
                    (n = e.config),
                    (t = t.map(function (e) {
                      var t,
                        r = n.maxLength || 102400;
                      try {
                        if (!e.msg || e.msg.length <= r) return e;
                        e.msg =
                          null == (t = e.msg) ? void 0 : t.substring(0, r);
                      } catch (t) {
                        e.msg =
                          null == (r = w(e.msg))
                            ? void 0
                            : r.substring(0, n.maxLength);
                      }
                      return e;
                    })),
                    [2, Promise.resolve(t)]
                  );
                });
              });
            };
          },
        },
        B =
          (((q = L = L || {})[(q.ERROR = 0)] = "ERROR"),
          (q[(q.WARN = 1)] = "WARN"),
          (q[(q.INFO = 2)] = "INFO"),
          (q[(q.DEBUG = 3)] = "DEBUG"),
          (W.prototype.debug = function (e) {
            this.log(L.DEBUG, e);
          }),
          (W.prototype.info = function (e) {
            this.log(L.INFO, e);
          }),
          (W.prototype.warn = function (e) {
            this.log(L.WARN, e);
          }),
          (W.prototype.error = function (e) {
            this.log(L.ERROR, e);
          }),
          (W.prototype.log = function (e, t) {
            this.logLevel;
          }),
          W),
        q =
          ((Y.prototype.init = function () {
            var e = this;
            (this.logger = new B(
              this.config.env === s.PROD ? L.ERROR : L.DEBUG
            )),
              (this.pluginController = new C(this, this.config.plugin)),
              Y.installedPlugins.forEach(function (t) {
                e.pluginController.patch(t);
              }),
              this.event.emit(f.init);
          }),
          (Y.prototype.setConfig = function (e) {
            var n;
            return (
              P(this.config, e),
              this.tempContext.isInTempContext
                ? ((n = t({}, this.tempContext.originBean)),
                  (n = this.getNewBean(e, n)),
                  (this.tempContext.originBean = n))
                : this.extendBean(this.config),
              this.event.emit(f.configChange, e),
              E(this.config.onConfigChange, this),
              this.config
            );
          }),
          (Y.prototype.setTempConfig = function (e, n) {
            return r(this, 0, void 0, function () {
              return i(this, function (r) {
                switch (r.label) {
                  case 0:
                    (this.sendNow = !0),
                      (this.tempContext.isInTempContext = !0),
                      (this.tempContext.originBean = t({}, this.bean)),
                      this.extendBean(e),
                      (r.label = 1);
                  case 1:
                    return r.trys.push([1, 3, , 4]), [4, n()];
                  case 2:
                  case 3:
                    return r.sent(), [3, 4];
                  case 4:
                    return (
                      (this.tempContext.isInTempContext = !1),
                      (this.sendNow = !1),
                      this.extendBean(this.tempContext.originBean),
                      this.send(
                        this.tempContext.catchLogs.splice(
                          0,
                          this.tempContext.catchLogs.length
                        )
                      ),
                      [2]
                    );
                }
              });
            });
          }),
          (Y.use = function (e) {
            -1 === Y.installedPlugins.indexOf(e) && Y.installedPlugins.push(e);
          }),
          (Y.unuse = function (e) {
            -1 !== (e = Y.installedPlugins.indexOf(e)) &&
              Y.installedPlugins.splice(e, 1);
          }),
          (Y.prototype.sendCustomLogs = function (e, o, s) {
            return r(this, 0, void 0, function () {
              var r,
                c,
                l = this;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return this.canUseCustomPlugin()
                      ? [4, E(this.config.onBeforeCollect, this)]
                      : [2];
                  case 1:
                    return (
                      i.sent(),
                      (p = s),
                      (h = d.CUSTOM),
                      void 0 === (f = o) && (f = a.INFO),
                      void 0 === p && (p = u.NORMAL),
                      void 0 === h && (h = d.CUSTOM),
                      (r = e
                        .map(function (e) {
                          var r = "object" == n(e) ? e : { msg: e },
                            i = r.msg || "",
                            o = void 0;
                          return (
                            f === a.CUSTOM_ERROR && (o = i),
                            r instanceof Error && ((i = w(r)), (o = r.message)),
                            t(t({}, r), {
                              msg: i,
                              errorMsg: o,
                              level: null != f ? f : e.level,
                              type: null != p ? p : e.type,
                              plugin: null != h ? h : e.plugin,
                            })
                          );
                        })
                        .map(function (e) {
                          var n;
                          return t(t({}, e), {
                            aegisv2_goto: v.generateSpanId(),
                            timestamp: Date.now(),
                            snapshootInfo: O(
                              t(t({}, l.snapshootInfo), {
                                type: null != (n = e.type) ? n : u.NORMAL,
                                level: null != (n = e.level) ? n : a.INFO,
                                plugin: d.CUSTOM,
                              })
                            ),
                          });
                        })),
                      [4, E(this.config.onCollected, this, r)]
                    );
                  case 2:
                    return 0 < (r = i.sent()).length
                      ? this.tempContext.isInTempContext
                        ? [4, this.immediatelySend(r)]
                        : [3, 4]
                      : [3, 7];
                  case 3:
                    return (c = i.sent()), [3, 6];
                  case 4:
                    return [4, this.send(r)];
                  case 5:
                    (c = i.sent()), (i.label = 6);
                  case 6:
                    return [2, c];
                  case 7:
                    return [2];
                }
                var f, p, h;
              });
            });
          }),
          (Y.prototype.info = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return r(this, 0, void 0, function () {
              return i(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.sendCustomLogs(e, a.INFO)];
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (Y.prototype.report = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return r(this, 0, void 0, function () {
              return i(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.sendCustomLogs(e, a.REPORT)];
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (Y.prototype.error = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return r(this, 0, void 0, function () {
              return i(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.sendCustomLogs(e, a.CUSTOM_ERROR)];
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (Y.prototype.clearPluginCache = function () {
            this.pluginController.plugins.forEach(function (e) {
              var t;
              null != (t = null == (t = e.option) ? void 0 : t.clear) &&
                t.call(e.option, e);
            });
          }),
          (Y.prototype.clearThrottleCache = function () {
            (this.sendNow = !0), this.send([]), (this.sendNow = !1);
          }),
          (Y.prototype.reportEvent = function (e) {
            return r(this, 0, void 0, function () {
              var t;
              return i(this, function (n) {
                switch (n.label) {
                  case 0:
                    return e
                      ? (t =
                          "string" == typeof e
                            ? {
                                name: e,
                                msg: "report_event",
                                level: a.INFO,
                                plugin: d.CUSTOM,
                              }
                            : e).name
                        ? ("string" != typeof t.name &&
                            (this.logger.warn(
                              "reportEvent params name must be string"
                            ),
                            (t.name = String(t.name))),
                          [4, this.sendCustomLogs([t], a.INFO, u.CUSTOM_EVENT)])
                        : (this.logger.warn("reportEvent params error"), [2])
                      : [2];
                  case 1:
                    return n.sent(), [2];
                }
              });
            });
          }),
          (Y.prototype.canUseCustomPlugin = function () {
            var e;
            return (
              !1 !== (null == (e = this.config.plugin) ? void 0 : e[d.CUSTOM])
            );
          }),
          (Y.prototype.reportTime = function (e, t) {
            return r(this, 0, void 0, function () {
              return i(this, function (r) {
                switch (r.label) {
                  case 0:
                    return "object" != n(e) ? [3, 2] : [4, this.reportT(e)];
                  case 1:
                    return [2, r.sent()];
                  case 2:
                    return "string" != typeof e
                      ? (this.logger.warn(
                          "reportTime: first param must be a string"
                        ),
                        [2])
                      : "number" != typeof t
                      ? (this.logger.warn(
                          "reportTime: second param must be number"
                        ),
                        [2])
                      : t < 0 || 6e4 < t
                      ? (this.logger.warn(
                          "reportTime: duration must between 0 and 60000"
                        ),
                        [2])
                      : [4, this.submitCustomTime(e, t)];
                  case 3:
                    return r.sent(), [2];
                }
              });
            });
          }),
          (Y.prototype.reportT = function (e) {
            return r(this, 0, void 0, function () {
              var t, n, r;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (t = e.name),
                      (n = e.duration),
                      (r = (function (e, t) {
                        var n = {};
                        for (i in e)
                          Object.prototype.hasOwnProperty.call(e, i) &&
                            t.indexOf(i) < 0 &&
                            (n[i] = e[i]);
                        if (
                          null != e &&
                          "function" == typeof Object.getOwnPropertySymbols
                        )
                          for (
                            var r = 0, i = Object.getOwnPropertySymbols(e);
                            r < i.length;
                            r++
                          )
                            t.indexOf(i[r]) < 0 &&
                              Object.prototype.propertyIsEnumerable.call(
                                e,
                                i[r]
                              ) &&
                              (n[i[r]] = e[i[r]]);
                        return n;
                      })(e, ["name", "duration"])),
                      "string" != typeof t || "number" != typeof n
                        ? (this.logger.warn("reportTime: params error"), [2])
                        : n < 0 || 6e4 < n
                        ? (this.logger.warn(
                            "reportTime: duration must between 0 and 60000"
                          ),
                          [2])
                        : [4, this.submitCustomTime(t, n, r)]
                    );
                  case 1:
                    return [2, i.sent()];
                }
              });
            });
          }),
          (Y.prototype.time = function (e, t) {
            "string" == typeof e
              ? this.timeMap[e]
                ? this.logger.warn("Timer " + e + " already exists")
                : (this.timeMap[e] = { startTime: Date.now(), customParams: t })
              : this.logger.warn("time: first param must be a string");
          }),
          (Y.prototype.timeEnd = function (e, n) {
            return r(this, 0, void 0, function () {
              return i(this, function (r) {
                switch (r.label) {
                  case 0:
                    return "string" != typeof e
                      ? (this.logger.warn(
                          "timeEnd: first param must be a string"
                        ),
                        [2])
                      : this.timeMap[e]
                      ? [
                          4,
                          this.submitCustomTime(
                            e,
                            Date.now() - this.timeMap[e].startTime,
                            t(t({}, this.timeMap[e].customParams), n)
                          ),
                        ]
                      : [3, 2];
                  case 1:
                    return r.sent(), delete this.timeMap[e], [3, 3];
                  case 2:
                    this.logger.warn("Timer " + e + " does not exist"),
                      (r.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (Y.prototype.submitCustomTime = function (e, n, o) {
            return r(this, 0, void 0, function () {
              return i(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [
                      4,
                      this.sendCustomLogs(
                        [
                          t(
                            {
                              name: e,
                              duration: n,
                              msg: "custom_time",
                              plugin: d.CUSTOM,
                            },
                            o
                          ),
                        ],
                        a.INFO,
                        u.CUSTOM_TIME
                      ),
                    ];
                  case 1:
                    return r.sent(), [2];
                }
              });
            });
          }),
          (Y.prototype.updateSnapshootInfo = function (e) {
            P(this.snapshootInfo, e);
          }),
          (Y.prototype.extendBean = function (e) {
            (e = this.getNewBean(e, this.bean)), P(this.bean, e);
          }),
          (Y.prototype.generateRequestOptionsByLogs = function (e) {
            var n,
              r,
              i = this;
            (e = e.map(function (e) {
              var n = e.snapshootInfo;
              return {
                message: O(
                  t(t(t({}, e), p), {
                    timestamp: e.timestamp + i.serverTimeGap,
                  })
                ),
                fields: n,
              };
            })),
              (r = {}),
              e.forEach(function (e) {
                var t = e.fields;
                r[t] || (r[t] = { fields: e.fields, message: [] }),
                  r[t].message.push(e.message);
              }),
              (e = Object.keys(r).map(function (e) {
                return r[e];
              }));
            return {
              payload: {
                topic: this.bean.id || "",
                bean: t(t({}, this.bean), { id: void 0 }),
                ext: O((null == (n = this.config) ? void 0 : n.extField) || {}),
                scheme: "v2",
                d2: e,
              },
            };
          }),
          (Y.prototype.send = function (e, t, n) {
            var a,
              u,
              s,
              c,
              l = this;
            if (!this.tempContext.isInTempContext)
              return (
                this.sendPipeline ||
                  (this.sendPipeline = j([
                    ((s = []),
                    (u = this).event.on(f.destroy, function () {
                      s.length = 0;
                    }),
                    (c = !0),
                    function (e) {
                      return new Promise(function (t) {
                        var n;
                        !c ||
                        (null != (n = null == u ? void 0 : u.canProceedLogs) &&
                          n.call(u))
                          ? (0 < s.length &&
                              (e.push.apply(e, s), (s.length = 0)),
                            (c = !1),
                            t(e))
                          : ((s = s.concat(e)), t([]));
                      });
                    }),
                    N.create(this),
                    function (e) {
                      return r(l, 0, void 0, function () {
                        var t, n;
                        return i(this, function (r) {
                          switch (r.label) {
                            case 0:
                              return (
                                (n = (t = Promise).resolve),
                                [4, E(this.config.onBeforeSend, this, e)]
                              );
                            case 1:
                              return [2, n.apply(t, [r.sent()])];
                          }
                        });
                      });
                    },
                    function (e) {
                      return new Promise(function (r) {
                        if (0 === e.length) return r([]);
                        var i = l.generateRequestOptionsByLogs(e);
                        l.request(
                          i,
                          function () {
                            for (var n = [], i = 0; i < arguments.length; i++)
                              n[i] = arguments[i];
                            (l.failRequestCount = 0),
                              r(o(e, [{ isErr: !1, result: n }])),
                              null != t && t.apply(void 0, n);
                          },
                          function () {
                            for (var t = [], i = 0; i < arguments.length; i++)
                              t[i] = arguments[i];
                            60 <= ++l.failRequestCount && l.destroy(),
                              r(o(e, [{ isErr: !0, result: t }])),
                              null != n && n.apply(void 0, t);
                          }
                        );
                      });
                    },
                    function (e) {
                      return r(l, 0, void 0, function () {
                        var t, n;
                        return i(this, function (r) {
                          switch (r.label) {
                            case 0:
                              return (
                                (n = (t = Promise).resolve),
                                [4, E(this.config.onSended, this, e)]
                              );
                            case 1:
                              return [2, n.apply(t, [r.sent()])];
                          }
                        });
                      });
                    },
                  ])),
                this.sendPipeline(e)
              );
            (a = this.tempContext.catchLogs).push.apply(a, e);
          }),
          (Y.prototype.immediatelySend = function (e, t, n) {
            var a = this;
            return j([
              function (e) {
                return r(a, 0, void 0, function () {
                  var t, n;
                  return i(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          (n = (t = Promise).resolve),
                          [4, E(this.config.onBeforeSend, this, e)]
                        );
                      case 1:
                        return [2, n.apply(t, [r.sent()])];
                    }
                  });
                });
              },
              function (e) {
                return new Promise(function (r) {
                  if (0 === e.length) return r([]);
                  var i = a.generateRequestOptionsByLogs(e);
                  a.request(
                    i,
                    function () {
                      for (var n = [], i = 0; i < arguments.length; i++)
                        n[i] = arguments[i];
                      (a.failRequestCount = 0),
                        r(o(e, [{ isErr: !1, result: n }])),
                        null != t && t.apply(void 0, n);
                    },
                    function () {
                      for (var t = [], i = 0; i < arguments.length; i++)
                        t[i] = arguments[i];
                      60 <= ++a.failRequestCount && a.destroy(),
                        r(o(e, [{ isErr: !0, result: t }])),
                        null != n && n.apply(void 0, t);
                    }
                  );
                });
              },
              function (e) {
                return r(a, 0, void 0, function () {
                  var t, n;
                  return i(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          (n = (t = Promise).resolve),
                          [4, E(this.config.onSended, this, e)]
                        );
                      case 1:
                        return [2, n.apply(t, [r.sent()])];
                    }
                  });
                });
              },
            ])(e);
          }),
          (Y.prototype.ready = function (e, t, n) {
            throw new Error('You need to override "ready" method');
          }),
          (Y.prototype.request = function (e, t, n) {
            throw new Error('You need to override "request" method');
          }),
          (Y.prototype.sendSDKError = function (e) {
            return r(this, 0, void 0, function () {
              var n = this;
              return i(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [
                      4,
                      this.setTempConfig(
                        { id: "SDK-88b1f242f91b60885f0c" },
                        function () {
                          return n.sendCustomLogs(
                            [
                              t(t({}, e), {
                                errorToken: n.config.id,
                                aegisSDKVersion: "2.0.0",
                                errorConfig: O(n.config),
                              }),
                            ],
                            a.SDK_ERROR,
                            u.SDK_ERROR
                          );
                        }
                      ),
                    ];
                  case 1:
                    return r.sent(), [2];
                }
              });
            });
          }),
          (Y.prototype.destroy = function (e) {
            return (
              void 0 === e && (e = !1),
              r(this, 0, void 0, function () {
                var t, n, r;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return [4, E(this.config.onBeforeDestroy, this)];
                    case 1:
                      i.sent(),
                        -1 !== (t = Y.instances.indexOf(this)) &&
                          Y.instances.splice(t, 1),
                        (t = Y.installedPlugins.length - 1),
                        (i.label = 2);
                    case 2:
                      if (!(0 <= t)) return [3, 7];
                      i.label = 3;
                    case 3:
                      return (
                        i.trys.push([3, 4, , 6]),
                        (n = Y.installedPlugins[t]),
                        this.pluginController.unPatch(n),
                        [3, 6]
                      );
                    case 4:
                      return (
                        (n = i.sent()), [4, this.sendSDKError({ msg: w(n) })]
                      );
                    case 5:
                      return i.sent(), [3, 6];
                    case 6:
                      return t--, [3, 2];
                    case 7:
                      if ((this.event.emit("destroy"), this.event.clear(), e))
                        (o = this),
                          (a = Object.getOwnPropertyDescriptors(o)),
                          Object.keys(a).forEach(function (e) {
                            a[e].writable && (o[e] = null);
                          }),
                          Object.setPrototypeOf(this, null);
                      else {
                        for (
                          r = this;
                          r.constructor !== Object && k(r, this),
                            (r = Object.getPrototypeOf(r));

                        );
                        0 === Y.instances.length &&
                          (k(Object.getPrototypeOf(this).constructor), k(Y));
                      }
                      return E(this.config.onDestroyed, this), [2];
                  }
                  var o, a;
                });
              })
            );
          }),
          (Y.prototype.canProceedLogs = function () {
            return !0;
          }),
          (Y.version = "2.0.0"),
          (Y.instances = []),
          (Y.logLevel = a),
          (Y.environment = s),
          (Y.installedPlugins = []),
          Y);
      (H.prototype.getConfig = function () {
        var e;
        return null !=
          (e = null == (e = this.aegis.config) ? void 0 : e[this.name])
          ? e
          : null == (e = this.aegis.config)
          ? void 0
          : e[this.name];
      }),
        (H.prototype.publish = function (e, n) {
          var o;
          return r(this, 0, void 0, function () {
            var s,
              c,
              l,
              p,
              h,
              g = this;
            return i(this, function (b) {
              switch (b.label) {
                case 0:
                  return (s = n || this.aegis).pluginController.canUse(this)
                    ? ((c = (Array.isArray(e) ? e : [e]).map(function (e) {
                        var n = Date.now(),
                          r = g.name === d.API || g.name === d.PAGE_PERFORMANCE,
                          i = (null == s ? void 0 : s.snapshootInfo).action,
                          o = t({}, s.snapshootInfo);
                        return (
                          r &&
                            i &&
                            ((r =
                              n -
                              (null != (r = null == e ? void 0 : e.duration)
                                ? r
                                : 0)),
                            (null == i ? void 0 : i.timestamp) > r) &&
                            delete o.action,
                          t(t({}, e), {
                            plugin: g.name,
                            aegisv2_goto: v.generateSpanId(),
                            type: null != (i = e.type) ? i : u.NORMAL,
                            level: null != (r = e.level) ? r : a.INFO,
                            timestamp: n,
                            snapshootInfo: O(
                              t(t({}, o), {
                                type: null != (i = e.type) ? i : u.NORMAL,
                                level: null != (r = e.level) ? r : a.INFO,
                                plugin: g.name,
                              })
                            ),
                          })
                        );
                      })),
                      [4, E(s.config.onCollected, s, c)])
                    : [2, !1];
                case 1:
                  return 0 === (c = b.sent()).length
                    ? [2, !1]
                    : ((l = c.filter(_)).length &&
                        s.event.emit(f.errorOccurred, l),
                      null != (o = this.option.pipes) && o.length
                        ? (this.pipeline ||
                            ((l = this.option.pipes.map(function (e) {
                              return g.wrapPipe(e, s);
                            })),
                            (h = function (e) {
                              return r(g, 0, void 0, function () {
                                var t, n;
                                return i(this, function (r) {
                                  switch (r.label) {
                                    case 0:
                                      return (
                                        (n = (t = Promise).resolve),
                                        [4, E(s.config.onBeforeProcess, s, e)]
                                      );
                                    case 1:
                                      return [2, n.apply(t, [r.sent()])];
                                  }
                                });
                              });
                            }),
                            (p = function (e) {
                              return r(g, 0, void 0, function () {
                                var t, n;
                                return i(this, function (r) {
                                  switch (r.label) {
                                    case 0:
                                      return (
                                        (n = (t = Promise).resolve),
                                        [4, E(s.config.onProcessed, s, e)]
                                      );
                                    case 1:
                                      return [2, n.apply(t, [r.sent()])];
                                  }
                                });
                              });
                            }),
                            l.unshift(h),
                            l.push(p),
                            (h = function (e) {
                              return new Promise(function (t) {
                                s.send(e), t(e);
                              });
                            }),
                            l.push(h),
                            (this.pipeline = j(l))),
                          this.pipeline(c))
                        : s.send(c),
                      [2, !0]);
              }
            });
          });
        }),
        (H.prototype.wrapPipe = function (e, t) {
          var n, r, i, o;
          return "string" == typeof e
            ? null !=
              (i =
                null ==
                (i = t.pipes.find(function (t) {
                  return t.name === e;
                }))
                  ? void 0
                  : i.create(t))
              ? i
              : A
            : ((i = null != (i = e) ? i : {}),
              (n = i.name),
              (r = i.option),
              (i = i.create),
              "string" != typeof n
                ? e
                : ((o = t.pipes.find(function (e) {
                    return e.name === n;
                  })),
                  null !=
                  (i =
                    null != (i = null == i ? void 0 : i(t, r))
                      ? i
                      : null == o
                      ? void 0
                      : o.create(t, r))
                    ? i
                    : A));
        });
      var G,
        $,
        U = wx || qq,
        F = new H({
          name: d.AID,
          onNewAegis: function (e) {
            this.initAid(function (t) {
              (e.bean.aid = t), (e.config.aid = t);
            });
          },
          initAid: function (e) {
            U.getStorage({
              key: "AEGIS_ID",
              success: function (t) {
                e(t.data);
              },
              fail: function () {
                var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                  /[xy]/g,
                  function (e) {
                    var t = (16 * Math.random()) | 0;
                    return ("x" === e ? t : (3 & t) | 8).toString(16);
                  }
                );
                U.setStorage({
                  key: "AEGIS_ID",
                  data: t,
                  success: function () {
                    e(t);
                  },
                });
              },
            });
          },
        });
      function K(e) {
        var t = G.call(this, e) || this;
        try {
          t.init();
        } catch (e) {
          t.logger.warn(e),
            t.logger.info(
              "%cThe above error occurred in the process of initializing Aegis, which will affect your normal use of Aegis.\nIt is recommended that you contact us for feedback and thank you for your support."
            ),
            t.sendSDKError({ msg: w(e) });
        }
        return t;
      }
      function z() {
        this.constructor = $;
      }
      function H(e) {
        var t;
        (this.option = e),
          (this.name = e.name),
          (this.init = null == (t = e.init) ? void 0 : t.bind(this)),
          (this.onNewAegis =
            null == (t = e.onNewAegis) ? void 0 : t.bind(this)),
          (this.destroy = null == (t = e.destroy) ? void 0 : t.bind(this)),
          (this.option.$getConfig = this.getConfig.bind(this)),
          (this.option.publish = this.publish.bind(this));
      }
      function Y(e) {
        var t;
        (this.pipes = [N, D, M]),
          (this.fetchSampleStatus = x.hasNotFetched),
          (this.config = {
            id: "",
            uid: "",
            delay: 1e3,
            repeat: 60,
            sample: 1,
            env: "production",
            maxLength: 102400,
            whiteList: !0,
            hostUrl: {
              url: "https://galileotelemetry.tencent.com/collect",
              whiteListUrl:
                "https://galileotelemetry.tencent.com/aegiscontrol/whitelist",
            },
            plugin: {
              pv: !0,
              aid: !0,
              error: !0,
              device: !0,
              close: !0,
              pagePerformance: !0,
              webVitals: !0,
              custom: !0,
              fId: !1,
              ie: !1,
              spa: !1,
              api: !1,
              assetSpeed: !1,
              session: !1,
              websocket: !1,
              blankScreen: !1,
            },
            reportImmediately: !0,
            forceReportErrorLog: !1,
          }),
          (this.event = new g()),
          (this.bean = {}),
          (this.snapshootInfo = {}),
          (this.serverTimeGap = 0),
          (this.sampleMap = {}),
          (this.isWhiteList = !1),
          (this.tempContext = {
            isInTempContext: !1,
            catchLogs: [],
            originBean: {},
          }),
          (this.timeMap = {}),
          (this.failRequestCount = 0),
          (this.getNewBean = function (e, t) {
            var n;
            return {
              id: null != (n = e.id) ? n : t.id,
              uid: null != (n = e.uid) ? n : t.uid,
              version: null != (n = e.version) ? n : t.version,
              aid: null != (n = e.aid) ? n : t.aid,
              env: null != (n = e.env) ? n : t.env,
              platform: null != (n = e.platform) ? n : t.platform,
              netType: null != (n = e.netType) ? n : t.netType,
              vp: null != (n = e.vp) ? n : t.vp,
              sr: null != (n = e.sr) ? n : t.sr,
              sessionId: null != (n = e.sessionId) ? n : t.sessionId,
              from: null != (n = e.from) ? n : t.from,
              referer: null != (n = e.referer) ? n : t.referer,
            };
          }),
          (e.version = null != (t = e.version) ? t : "2.0.0"),
          (e.hostUrl =
            void 0 === (t = e.hostUrl)
              ? {}
              : "string" == typeof t
              ? { url: t }
              : t),
          this.setConfig(e),
          Y.instances.push(this),
          E(this.config.onNewAegis, this);
      }
      function W(e) {
        void 0 === e && (e = L.INFO), (this.logLevel = e);
      }
      return (
        (q =
          (e(($ = K), (q = G = q)),
          ($.prototype =
            null === q
              ? Object.create(q)
              : ((z.prototype = q.prototype), new z())),
          (K.prototype.request = function (e, t, n) {
            if (e && this.bean.id) {
              var r = e.payload,
                i = e.url;
              e = e.method;
              if ((i = i || R(this.config, "hostUrl.url"))) {
                var o = (a = this.config).onBeforeRequest,
                  a = void 0 === (a = a.enableHttp2) || a;
                if (
                  (o &&
                    (l.ON_BEFORE_REQUEST, c.ON_BEFORE_SEND, (r = o(r, this))),
                  !r)
                )
                  return;
                U.request({
                  url: i,
                  method: e || "POST",
                  enableHttp2: a,
                  data: r,
                  success: function (e) {
                    null != t && t(JSON.stringify(e.data));
                  },
                  fail: n,
                });
              }
            } else
              this.logger.error(
                "Invalid parameters or missing project ID, request forbidden"
              );
          }),
          K)).use(F),
        q
      );
    });
    var ze,
      He = (null == o.exports ? {} : o.exports).default || o.exports,
      Ye = ["btrace.qq.com/kvcollect", "fdc.tenpay.com"],
      We = ["wzqcf.gtimg.com/wuji", "wzqcfgtimgcom/wuji"],
      Je = ["sqt.gtimg.cn//", "pingtas.qq.com"];
    try {
      ze = new He({
        id: "SDK-0ba079ab7c290b01f3e9",
        hostUrl: { url: "https://galileotelemetry.tencent.com/collect" },
        delay: 2e3,
        enableHttp2: !0,
        setDataReportConfig: { disabled: !0 },
        onBeforeSend: function (e) {
          var t = [];
          return (
            e.forEach(function (e) {
              ("assetSpeed" === e.plugin &&
                Ye.some(function (t) {
                  var n;
                  return null == (n = e.url) ? void 0 : n.includes(t);
                })) ||
                ("api" === e.plugin &&
                  (("info" === e.level &&
                    Je.some(function (t) {
                      var n;
                      return null == (n = e.url) ? void 0 : n.includes(t);
                    })) ||
                    ("error" === e.level &&
                      e.duration < 1e3 &&
                      We.some(function (t) {
                        var n;
                        return null == (n = e.url) ? void 0 : n.includes(t);
                      })))) ||
                t.push(e);
            }),
            t
          );
        },
      });
    } catch (O) {
      ze = { reportEvent: function () {}, reportTime: function () {} };
    }
    function Ve() {
      return d(
        this,
        null,
        t().mark(function e() {
          var n;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.prev = 0), (e.next = 3), Ze.getLoginInfo();
                  case 3:
                    if ((n = e.sent) && n.qluin) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return");
                  case 6:
                    ze.setConfig({ uid: n.qluin }), (e.next = 11);
                    break;
                  case 9:
                    (e.prev = 9), (e.t0 = e.catch(0));
                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 9]]
          );
        })
      );
    }
    function Qe(e, n) {
      return d(
        this,
        null,
        t().mark(function r() {
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  try {
                    ze.reportEvent(f({ name: e }, n || {}));
                  } catch (e) {}
                case 1:
                case "end":
                  return t.stop();
              }
          }, r);
        })
      );
    }
    function Xe() {
      try {
        return new Date().getTime();
      } catch (e) {}
      return 0;
    }
    var Ze = new ee({
        deps: function () {
          return { aegis: ze };
        },
      }),
      et = new Ue({
        deps: function () {
          return { aegis: ze, mainLogin: Ze };
        },
      });
    function tt(e) {
      return e
        .replace(/\\x([0-9A-Fa-f]{2})/g, function () {
          var e = String.fromCharCode(parseInt(arguments[1], 16));
          return '"' === e ? "“" : e;
        })
        .replace("\n", " ")
        .replace(/\\“/g, "“")
        .replace(/\\/g, " ");
    }
    function nt(e, n) {
      var r = this;
      return new Promise(function (i, o) {
        return d(
          r,
          null,
          t().mark(function r() {
            var a;
            return t().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (r.next = 2), Ze.getLoginInfo();
                  case 2:
                    (a = r.sent),
                      wx.request({
                        url: e,
                        timeout: 8e3,
                        method: "POST",
                        header: {
                          "content-type": "application/x-www-form-urlencoded",
                          Cookie: "wzq_qluin="
                            .concat(a.qluin, ";wzq_qlskey=")
                            .concat(a.qlskey, ";"),
                        },
                        data: f(
                          { scenes: 5, xcxname: "zxg_xcx", come_from: 3 },
                          n || {}
                        ),
                        enableHttp2: !0,
                        success: function (r) {
                          return d(
                            this,
                            null,
                            t().mark(function a() {
                              var u,
                                s,
                                c = this;
                              return t().wrap(
                                function (a) {
                                  for (;;)
                                    switch ((a.prev = a.next)) {
                                      case 0:
                                        if (200 == +r.statusCode) {
                                          a.next = 2;
                                          break;
                                        }
                                        return a.abrupt(
                                          "return",
                                          o({
                                            retcode: "ACCOUNTCARD_STATUS_ERROR",
                                            errMsg: "系统繁忙，请稍后再试",
                                            statusCode: r.statusCode,
                                          })
                                        );
                                      case 2:
                                        u = r.data;
                                        try {
                                          Fe(u) &&
                                            ((s = tt(u)),
                                            (u = JSON.parse(s || u)));
                                        } catch (e) {}
                                        if (
                                          !Ze.isBackendLoginExpired(u || {})
                                        ) {
                                          a.next = 14;
                                          break;
                                        }
                                        return (
                                          (a.prev = 5),
                                          (a.next = 8),
                                          Ze.reLogin(function () {
                                            return d(
                                              c,
                                              null,
                                              t().mark(function r() {
                                                var a;
                                                return t().wrap(
                                                  function (t) {
                                                    for (;;)
                                                      switch (
                                                        (t.prev = t.next)
                                                      ) {
                                                        case 0:
                                                          return (
                                                            (t.prev = 0),
                                                            (t.next = 3),
                                                            nt(e, n)
                                                          );
                                                        case 3:
                                                          (a = t.sent),
                                                            i(a),
                                                            (t.next = 10);
                                                          break;
                                                        case 7:
                                                          (t.prev = 7),
                                                            (t.t0 = t.catch(0)),
                                                            o(t.t0);
                                                        case 10:
                                                        case "end":
                                                          return t.stop();
                                                      }
                                                  },
                                                  r,
                                                  null,
                                                  [[0, 7]]
                                                );
                                              })
                                            );
                                          })
                                        );
                                      case 8:
                                        a.next = 13;
                                        break;
                                      case 10:
                                        (a.prev = 10),
                                          (a.t0 = a.catch(5)),
                                          o(a.t0);
                                      case 13:
                                        return a.abrupt("return");
                                      case 14:
                                        return a.abrupt(
                                          "return",
                                          null != u &&
                                            u.retcode &&
                                            0 != +u.retcode
                                            ? o({
                                                retcode:
                                                  "ACCOUNTCARD_RETCODE_ERROR",
                                                retmsg: "系统繁忙，请稍后再试",
                                                originRetcode:
                                                  (null == u
                                                    ? void 0
                                                    : u.retcode) || "",
                                              })
                                            : i(u)
                                        );
                                      case 15:
                                      case "end":
                                        return a.stop();
                                    }
                                },
                                a,
                                null,
                                [[5, 10]]
                              );
                            })
                          );
                        },
                        fail: function (e) {
                          return o({
                            retcode:
                              (null == e ? void 0 : e.errno) ||
                              "ACCOUNTCARD_WX_ERROR",
                            retmsg:
                              (null == e ? void 0 : e.errMsg) || "未知错误",
                          });
                        },
                      });
                  case 4:
                  case "end":
                    return r.stop();
                }
            }, r);
          })
        );
      });
    }
    function rt(e, n) {
      var r = this;
      return new Promise(function (i, o) {
        return d(
          r,
          null,
          t().mark(function r() {
            var a;
            return t().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (r.next = 2), et.getLoginInfo();
                  case 2:
                    (a = r.sent),
                      wx.request({
                        url: e,
                        timeout: 8e3,
                        method: "POST",
                        header: {
                          "content-type": "application/x-www-form-urlencoded",
                          Cookie: a,
                        },
                        data: {
                          xcxname: "zxg_xcx",
                          come_from: 3,
                          plugin_flag: 1,
                          gm_flag: 0,
                        },
                        enableHttp2: !0,
                        success: function (r) {
                          return d(
                            this,
                            null,
                            t().mark(function a() {
                              var u,
                                s,
                                c,
                                f = this;
                              return t().wrap(
                                function (a) {
                                  for (;;)
                                    switch ((a.prev = a.next)) {
                                      case 0:
                                        if (200 == +r.statusCode) {
                                          a.next = 2;
                                          break;
                                        }
                                        return a.abrupt(
                                          "return",
                                          o({
                                            retcode: "ACCOUNTCARD_STATUS_ERROR",
                                            retmsg: "系统繁忙，请稍后再试",
                                            statusCode: r.statusCode,
                                          })
                                        );
                                      case 2:
                                        u = r.data;
                                        try {
                                          Fe(u) &&
                                            ((s = tt(u)),
                                            (u = JSON.parse(s || u)));
                                        } catch (e) {}
                                        if (
                                          null == u ||
                                          !u.retcode ||
                                          51088820 != +u.retcode
                                        ) {
                                          a.next = 6;
                                          break;
                                        }
                                        return a.abrupt(
                                          "return",
                                          o({ retcode: l, retmsg: "需要验密" })
                                        );
                                      case 6:
                                        if (
                                          !et.isBackendLoginExpired(u || {})
                                        ) {
                                          a.next = 17;
                                          break;
                                        }
                                        return (
                                          (c = et.getBrokerBaseInfo()),
                                          (a.prev = 8),
                                          (a.next = 11),
                                          et.reLogin(
                                            function () {
                                              return d(
                                                f,
                                                null,
                                                t().mark(function r() {
                                                  var a;
                                                  return t().wrap(
                                                    function (t) {
                                                      for (;;)
                                                        switch (
                                                          (t.prev = t.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              (t.prev = 0),
                                                              (t.next = 3),
                                                              rt(e, n)
                                                            );
                                                          case 3:
                                                            (a = t.sent),
                                                              i(a),
                                                              (t.next = 10);
                                                            break;
                                                          case 7:
                                                            (t.prev = 7),
                                                              (t.t0 =
                                                                t.catch(0)),
                                                              o(t.t0);
                                                          case 10:
                                                          case "end":
                                                            return t.stop();
                                                        }
                                                    },
                                                    r,
                                                    null,
                                                    [[0, 7]]
                                                  );
                                                })
                                              );
                                            },
                                            {
                                              dealercode: c.code,
                                              domain: c.domain,
                                            }
                                          )
                                        );
                                      case 11:
                                        a.next = 16;
                                        break;
                                      case 13:
                                        (a.prev = 13),
                                          (a.t0 = a.catch(8)),
                                          o(a.t0);
                                      case 16:
                                        return a.abrupt("return");
                                      case 17:
                                        return a.abrupt(
                                          "return",
                                          null != u &&
                                            u.retcode &&
                                            0 != +u.retcode
                                            ? o({
                                                retcode:
                                                  "ACCOUNTCARD_RETCODE_ERROR",
                                                retmsg: "系统繁忙，请稍后再试",
                                                originRetcode:
                                                  (null == u
                                                    ? void 0
                                                    : u.retcode) || "",
                                              })
                                            : i(u)
                                        );
                                      case 18:
                                      case "end":
                                        return a.stop();
                                    }
                                },
                                a,
                                null,
                                [[8, 13]]
                              );
                            })
                          );
                        },
                        fail: function (e) {
                          return o({
                            retcode:
                              (null == e ? void 0 : e.errno) ||
                              "ACCOUNTCARD_WX_ERROR",
                            retmsg:
                              (null == e ? void 0 : e.errMsg) || "未知错误",
                          });
                        },
                      });
                  case 4:
                  case "end":
                    return r.stop();
                }
            }, r);
          })
        );
      });
    }
    var it = {
        app_id: "",
        event_id: "",
        api_base: "https://pingtas.qq.com/webview/pingd",
        prefix: "_mta_",
        version: "1.3.10",
        stat_param: !0,
        getPagePath: function () {
          return "/";
        },
      },
      ot = null,
      at = null;
    function ut(e) {
      return new Promise(function (t, n) {
        wx.getStorage({
          key: e,
          success: function (e) {
            var n = e.data;
            t(n);
          },
          fail: function (e) {
            t("");
          },
        });
      });
    }
    function st(e, t) {
      return new Promise(function (n, r) {
        wx.setStorage({
          key: e,
          data: t,
          success: function (e) {
            n(e);
          },
          fail: function (e) {
            r(e);
          },
        });
      });
    }
    function ct() {
      return d(
        this,
        null,
        t().mark(function e() {
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.prev = 0), (e.t0 = ot), e.t0)) {
                      e.next = 6;
                      break;
                    }
                    return (e.next = 5), ut(it.prefix + "auid");
                  case 5:
                    ot = e.sent;
                  case 6:
                    return e.abrupt("return", ot);
                  case 9:
                    (e.prev = 9), (e.t1 = e.catch(0));
                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 9]]
          );
        })
      );
    }
    function lt() {
      return d(
        this,
        null,
        t().mark(function e() {
          var n;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (n = dt()),
                      (ot = n),
                      (e.next = 5),
                      st(it.prefix + "auid", n)
                    );
                  case 5:
                    return e.abrupt("return", n);
                  case 8:
                    (e.prev = 8), (e.t0 = e.catch(0));
                  case 10:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 8]]
          );
        })
      );
    }
    function ft() {
      try {
        return at;
      } catch (e) {}
    }
    function pt() {
      try {
        return (at = "s" + dt());
      } catch (e) {}
    }
    function dt(e) {
      for (var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], n = 10; 1 < n; n--) {
        var r = Math.floor(10 * Math.random()),
          i = t[r];
        (t[r] = t[n - 1]), (t[n - 1] = i);
      }
      for (n = r = 0; 5 > n; n++) r = 10 * r + t[n];
      return r + "" + +new Date();
    }
    function ht() {
      try {
        return it.getPagePath();
      } catch (e) {}
    }
    function gt() {
      return d(
        this,
        null,
        t().mark(function e() {
          var n, r;
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (r = function () {
                      return d(
                        this,
                        null,
                        t().mark(function e() {
                          var r;
                          return t().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), ct();
                                case 2:
                                  if (((r = e.sent), (e.t0 = r), e.t0)) {
                                    e.next = 9;
                                    break;
                                  }
                                  return (e.next = 7), lt();
                                case 7:
                                  (r = e.sent), (n.ty = 1);
                                case 9:
                                  return e.abrupt("return", r);
                                case 10:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                    }),
                    (n = {
                      dm: "wechat.apps.xx",
                      url: encodeURIComponent(ht() + bt(yt.Data.pageQuery)),
                      pvi: "",
                      si: "",
                      ty: 0,
                    }),
                    (e.next = 4),
                    r()
                  );
                case 4:
                  return (
                    (n.pvi = e.sent),
                    (n.si = ((i = void 0), (i = ft()) || (i = pt()), i)),
                    e.abrupt("return", n)
                  );
                case 7:
                case "end":
                  return e.stop();
              }
            var i;
          }, e);
        })
      );
    }
    function vt() {
      var e,
        t = yt.Data.userInfo,
        n = [];
      for (e in t) t.hasOwnProperty(e) && n.push(e + "=" + t[e]);
      return (
        (t = n.join(";")),
        {
          r2: it.app_id,
          r4: "wx",
          ext:
            "v=" +
            it.version +
            (null !== t && "" !== t ? ";ui=" + encodeURIComponent(t) : ""),
        }
      );
    }
    function bt(e) {
      if (!it.stat_param || !e) return "";
      e = (function (e) {
        if (1 > it.ignore_params.length) return e;
        var t,
          n = {};
        for (t in e) 0 <= it.ignore_params.indexOf(t) || (n[t] = e[t]);
        return n;
      })(e);
      var t,
        n = [];
      for (t in e) n.push(t + "=" + e[t]);
      return 0 < n.length ? "?" + n.join("&") : "";
    }
    var yt = {
        App: {
          init: function (e) {
            "appID" in e && (it.app_id = e.appID),
              "eventID" in e && (it.event_id = e.eventID),
              "ignoreParams" in e && (it.ignore_params = e.ignoreParams),
              "statParam" in e && (it.stat_param = e.statParam),
              pt();
            try {
              "lauchOpts" in e &&
                ((yt.Data.lanchInfo = e.lauchOpts),
                (yt.Data.lanchInfo.landing = 1));
            } catch (e) {}
          },
        },
        Event: {
          stat: function (e, n) {
            return d(
              this,
              null,
              t().mark(function r() {
                var i, o, a, u, s, c;
                return t().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if ("" == it.event_id) {
                          t.next = 12;
                          break;
                        }
                        return (i = []), (t.next = 4), gt();
                      case 4:
                        (o = t.sent),
                          (a = vt()),
                          (u = n.f_rdm_rurl || o.url),
                          (o.dm = "wxapps.click"),
                          (o.url = e),
                          (a.r2 = it.event_id),
                          (s = void 0 === n ? {} : n);
                        try {
                          a.r5 = encodeURIComponent(JSON.stringify(s));
                        } catch (e) {
                          a.r5 = e.toString();
                        }
                        for (
                          s = 0,
                            o = [o, a, {}, { rand: +new Date() }],
                            a = o.length;
                          s < a;
                          s++
                        )
                          for (c in o[s])
                            o[s].hasOwnProperty(c) &&
                              i.push(
                                c + "=" + (void 0 === o[s][c] ? "" : o[s][c])
                              );
                        i.push("rurl=".concat(u)),
                          wx.request({ url: it.api_base + "?" + i.join("&") });
                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, r);
              })
            );
          },
          pgv: function (e, n) {
            return d(
              this,
              null,
              t().mark(function r() {
                var i, o, a, u, s;
                return t().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if ("" == it.event_id) {
                          t.next = 11;
                          break;
                        }
                        return (i = []), (t.next = 4), gt();
                      case 4:
                        (o = t.sent),
                          (a = vt()),
                          (o.dm = "wzq.tenpay.com"),
                          (o.url = e),
                          (a.r2 = it.event_id),
                          (u = void 0 === n ? {} : n);
                        try {
                          a.ext = encodeURIComponent(JSON.stringify(u));
                        } catch (e) {
                          a.ext = e.toString();
                        }
                        for (
                          u = 0,
                            o = [o, a, {}, { rand: +new Date() }],
                            a = o.length;
                          u < a;
                          u++
                        )
                          for (s in o[u])
                            o[u].hasOwnProperty(s) &&
                              i.push(
                                s + "=" + (void 0 === o[u][s] ? "" : o[u][s])
                              );
                        i.push("rurl=".concat(mt)),
                          wx.request({ url: it.api_base + "?" + i.join("&") });
                      case 11:
                      case "end":
                        return t.stop();
                    }
                }, r);
              })
            );
          },
        },
        Data: { userInfo: null, lanchInfo: null, pageQuery: null },
      },
      mt = "",
      wt = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (e = e.toLowerCase()), (t.mtime = +new Date()), yt.Event.stat(e, t);
      };
    (function (e) {
      yt.App.init(e);
    })({
      appID: "500713203",
      eventID: "500713204",
      getPagePath: function () {
        return "accountCardPackage/securitiesAccountCard";
      },
    });
    var Ot = Date.now();
    var Et = {
        click: function (e) {
          return d(
            this,
            null,
            t().mark(function n() {
              var r, i;
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Ze.getLoginInfo();
                    case 2:
                      (r = t.sent),
                        (i = Object.assign(
                          {},
                          {
                            xcxopenid: r.srcuin,
                            fopenid: r.qluin,
                            fuin: r.cftuin,
                            fsession_key: "".concat(r.srcuin).concat(Ot),
                            fplatform: "mina",
                            fsrcsite: "wx_accountcard",
                            eventName: e,
                            src_site: "wx_accountcard",
                            src_platform: "mina",
                          }
                        )),
                        wt(e, i);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, n);
            })
          );
        },
      },
      Rt = {
        1e4: { domain: "wzq.citics.com" },
        10100: { domain: "wzq.chinalions.cn" },
        10200: { domain: "wzq.htsec.com" },
        10500: { domain: "wzq.gf.com.cn" },
        10800: { domain: "wzq.cms-cloud.com.cn" },
        10900: { domain: "wzq.guosen.com.cn" },
        11100: { domain: "wzq.csc108.com" },
        12800: { domain: "wzq.ciccwm.com" },
        15900: { domain: "wzq.gjzq.com.cn" },
        19e3: { domain: "wzq.cnht.com.cn" },
        19900: { domain: "wzq.zszq.com" },
      },
      _t = "0",
      xt = "1",
      St = {
        HASACCOUNT: "0",
        NOACCOUNT: "1",
        VERIFYING: "2",
        HASBUNDLE: "3",
        FAILED: "4",
      },
      Pt = 2;
    function Ct(e) {
      var t = e.dealer_list,
        n = e.highest_priority_dealer;
      return (
        !(!t || !n) &&
        t.some(function (e) {
          return n.dealer_code === e.id;
        })
      );
    }
    function Tt(e) {
      var t,
        n = e.bulletin,
        i = {},
        o = r(void 0 === n ? [] : n);
      try {
        for (o.s(); !(t = o.n()).done; ) {
          var a = t.value;
          i[a.dealercode] = f({}, a);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
      return i;
    }
    function It(e, n) {
      return d(
        this,
        null,
        t().mark(function r() {
          var i, o, a;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if ((i = e.highest_priority_dealer)) {
                    t.next = 3;
                    break;
                  }
                  return t.abrupt("return", !1);
                case 3:
                  return (
                    (t.next = 5),
                    Ke("pluginSafebox://".concat(i.dealer_code, "/status"))
                  );
                case 5:
                  if (((t.t0 = t.sent), t.t0)) {
                    t.next = 8;
                    break;
                  }
                  t.t0 = {};
                case 8:
                  if (((o = t.t0), !0 !== o.status)) {
                    t.next = 12;
                    break;
                  }
                  return t.abrupt("return", !0);
                case 12:
                  return (
                    (a = Tt(n)[i.dealer_code]),
                    t.abrupt("return", !!(a && +a.type & Pt))
                  );
                case 14:
                case "end":
                  return t.stop();
              }
          }, r);
        })
      );
    }
    function jt(e) {
      var t = e.highest_priority_dealer;
      return !!t && !![St.HASACCOUNT, St.HASBUNDLE].includes(t.userstate);
    }
    function kt(e) {
      return (function (e) {
        var t = e.dealer_list || [],
          n = (function (e) {
            var t = e.main_bind_list || [],
              n = {};
            return (
              t.forEach(function (e) {
                var t = e.dealer_code,
                  r = e.bind_status;
                n[t] = r;
              }),
              n
            );
          })(e);
        return t.filter(function (e) {
          return "1" === e.can_bind && (n[e.id] === _t || n[e.id] === xt);
        });
      })(e).length;
    }
    function At(e, t) {
      if (Rt[e] && Rt[e].domain) return "https://".concat(Rt[e].domain);
      var n = t.domain.find(function (t) {
        return t.dealercode === e;
      });
      return null == n ? void 0 : n.domain;
    }
    function Lt(e, n) {
      return d(
        this,
        null,
        t().mark(function r() {
          var i, o;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (((t.t0 = Ct(e) && jt(e)), !t.t0)) {
                    t.next = 5;
                    break;
                  }
                  return (t.next = 4), It(e, n);
                case 4:
                  t.t0 = !t.sent;
                case 5:
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  return (
                    (i = e.highest_priority_dealer),
                    (o = At(e.highest_priority_dealer.dealer_code, n)),
                    t.abrupt(
                      "return",
                      (o || Qe("ACCOUNTCARD_NODOMAIN"),
                      p(f({}, i), { domain: o }))
                    )
                  );
                case 8:
                  return t.abrupt("return", null);
                case 9:
                case "end":
                  return t.stop();
              }
          }, r);
        })
      );
    }
    function Nt() {
      return d(
        this,
        null,
        t().mark(function e() {
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    nt("https://wzq.tenpay.com/cgi-bin/ahead_info.fcgi")
                  );
                case 2:
                  return e.abrupt("return", e.sent);
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    }
    function Dt() {
      return d(
        this,
        null,
        t().mark(function e() {
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    nt(
                      "https://wzq.tenpay.com/cgi-bin/unity_account_info.fcgi",
                      { scene_status_flag: 4 }
                    )
                  );
                case 2:
                  return e.abrupt("return", e.sent);
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    }
    function Mt() {
      return d(
        this,
        null,
        t().mark(function e() {
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), Promise.all([Dt(), Nt()]);
                case 2:
                  return e.abrupt("return", e.sent);
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    }
    var Bt = (function (e) {
      return (
        (e.loading = "loading"),
        (e.nologin = "nologin"),
        (e.loaded = "loaded"),
        (e.error = "error"),
        e
      );
    })(Bt || {});
    function qt() {
      return d(
        this,
        null,
        t().mark(function e() {
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), Ze.login();
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    }
    function Gt(e) {
      return d(
        this,
        null,
        t().mark(function n() {
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.next = 2),
                    et.login({ domain: e.domain, dealercode: e.dealer_code })
                  );
                case 2:
                case "end":
                  return t.stop();
              }
          }, n);
        })
      );
    }
    function $t(e) {
      return d(
        this,
        null,
        t().mark(function n() {
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.next = 2),
                    rt(
                      "".concat(e.domain, "/").concat("cgi-bin/asset_info.fcgi")
                    )
                  );
                case 2:
                  return t.abrupt("return", t.sent);
                case 3:
                case "end":
                  return t.stop();
              }
          }, n);
        })
      );
    }
    var Ut = !1;
    Component({
      data: {
        totalAmount: "",
        todayEarnings: 0,
        securitiesName: "",
        securitiesCnt: 0,
        allSecuritiesEnterPath: "",
      },
      methods: {
        debug: function (e, t) {
          this.debugLog && this.debugLog(e, t || "");
        },
        init: function () {
          var n = this;
          try {
            if ((Ve(), Ut)) return;
            (Ut = !0), this.updateEnterPath("pages/index/trade");
            var i = Xe();
            !(function (n, r) {
              d(
                this,
                null,
                t().mark(function r() {
                  var i, o, a, u, s, c, f, p, d, g, v, b, y, m;
                  return t().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (i = { status: Bt.loading }),
                              (t.prev = 1),
                              (t.next = 4),
                              Ze.isLogin()
                            );
                          case 4:
                            if (((t.t0 = t.sent), t.t0)) {
                              t.next = 8;
                              break;
                            }
                            return (t.next = 8), qt();
                          case 8:
                            return Ve(), (t.next = 11), Mt();
                          case 11:
                            return (
                              (o = t.sent),
                              (a = e(o, 2)),
                              (u = a[0]),
                              (s = a[1]),
                              (t.next = 17),
                              Lt(u, s)
                            );
                          case 17:
                            if ((c = t.sent)) {
                              t.next = 20;
                              break;
                            }
                            throw { retcode: h, retmsg: "无当前券商" };
                          case 20:
                            return (
                              et.setBrokerBaseInfo({
                                code: c.dealer_code,
                                domain: c.domain,
                              }),
                              c.dealer_name &&
                                (i.securitiesName = c.dealer_name),
                              (f = kt(u)),
                              (i.securitiesCnt = f),
                              (i.allSecuritiesEnterPath =
                                "pages/profileCom/brokerAccount"),
                              (t.next = 26),
                              et.isLogin()
                            );
                          case 26:
                            if (((t.t1 = t.sent), t.t1)) {
                              t.next = 30;
                              break;
                            }
                            return (t.next = 30), Gt(c);
                          case 30:
                            return (t.next = 32), $t(c);
                          case 32:
                            (p = t.sent),
                              (d = p.fundsinfo),
                              (v = (g = void 0 === d ? {} : d).earn_val_today),
                              (b = void 0 === v ? 0 : v),
                              (y = g.total_money),
                              (m = void 0 === y ? 0 : y),
                              (i.totalAmount = 100 * +m),
                              (i.todayEarnings = 100 * +b),
                              (i.status = Bt.loaded),
                              (t.next = 51);
                            break;
                          case 42:
                            (t.prev = 42),
                              (t.t2 = t.catch(1)),
                              (t.t3 = null == t.t2 ? void 0 : t.t2.retcode),
                              (t.next = t.t3 === h || t.t3 === l ? 47 : 49);
                            break;
                          case 47:
                            return (
                              (i.status = Bt.nologin), t.abrupt("break", 50)
                            );
                          case 49:
                            i.status = Bt.error;
                          case 50:
                            (null == t.t2 ? void 0 : t.t2.retcode) !== l &&
                              Qe("ACCOUNT_CARD_ERROR", {
                                ext3: JSON.stringify(t.t2 || {}),
                              });
                          case 51:
                            n(i);
                          case 52:
                          case "end":
                            return t.stop();
                        }
                    },
                    r,
                    null,
                    [[1, 42]]
                  );
                })
              );
            })(function (e) {
              Ut = !1;
              var o = e,
                a = o.status,
                l = (function (e, t) {
                  var n = {};
                  for (var i in e)
                    s.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                  if (null != e && u) {
                    var o,
                      a = r(u(e));
                    try {
                      for (a.s(); !(o = a.n()).done; ) {
                        i = o.value;
                        t.indexOf(i) < 0 && c.call(e, i) && (n[i] = e[i]);
                      }
                    } catch (e) {
                      a.e(e);
                    } finally {
                      a.f();
                    }
                  }
                  return n;
                })(o, ["status"]);
              e.securitiesCnt && e.securitiesCnt > 1
                ? n.showField("securitiesCnt")
                : n.hideField("securitiesCnt"),
                e.securitiesName
                  ? n.showField("securitiesName")
                  : n.hideField("securitiesName"),
                n.setData(f({}, l)),
                a && n.updateStatus(a),
                (function (e, n) {
                  d(
                    this,
                    null,
                    t().mark(function r() {
                      return t().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              try {
                                ze.reportTime({ name: e, duration: n });
                              } catch (e) {}
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, r);
                    })
                  );
                })("ACCOUNT_CARD_LOADTIME", Xe() - i);
            }, this.debug);
          } catch (e) {
            this.updateStatus(Bt.error);
          }
        },
      },
      lifetimes: {
        attached: function () {
          this.init(), Et.click("account_card.securities.attached");
        },
      },
      pageLifetimes: {
        show: function () {
          this.init(), Et.click("account_card.securities.brow");
        },
      },
    });
  })();
exports.default = h;
