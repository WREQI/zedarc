require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  i = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  s = function (e, n, t) {
    return n in e
      ? o(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[n] = t);
  },
  d = function (e, n) {
    for (var t in n || (n = {})) u.call(n, t) && s(e, t, n[t]);
    if (c) {
      var o,
        i = r(c(n));
      try {
        for (i.s(); !(o = i.n()).done; ) {
          t = o.value;
          l.call(n, t) && s(e, t, n[t]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  f = function (e, n) {
    return i(e, a(n));
  },
  p = function (e, n, t) {
    return new Promise(function (r, o) {
      var i = function (e) {
          try {
            c(t.next(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          try {
            c(t.throw(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
        };
      c((t = t.apply(e, n)).next());
    });
  },
  g = require("../../../../../common/vendor.js"),
  v = require("../../stock-community-ui/utils/service/index.js"),
  m = require("../utils/logger.js"),
  h = require("../../stock-community-base/utils/knife.js"),
  k = require("../../stock-news-core/utils/loginHelper.js"),
  y = require("../hooks/outter/useHalfEditor.js"),
  b = require("../utils/sceneHelper.js");
require("../../../js-cookie/src/js.cookie.js");
var x = require("../../stock-community-base/utils/api/index.js"),
  w = m.createLogger(),
  C = function (e, n) {
    return p(
      exports,
      null,
      t().mark(function r() {
        var o;
        return t().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.prev = 0),
                    (t.next = 3),
                    e.$sdk.chooseImage({
                      count: n,
                      sourceType: ["album", "camera"],
                    })
                  );
                case 3:
                  return (
                    (o = t.sent),
                    t.abrupt(
                      "return",
                      (w.log("chooseImage 返回 localIds:", o.localIds),
                      o.localIds || [])
                    )
                  );
                case 7:
                  if (
                    ((t.prev = 7),
                    (t.t0 = t.catch(0)),
                    w.error("微信图片选择失败：", t.t0),
                    !t.t0.errMsg ||
                      !t.t0.errMsg.toLowerCase().includes("cancel"))
                  ) {
                    t.next = 11;
                    break;
                  }
                  return t.abrupt("return", []);
                case 11:
                  if ("ECANCEL" !== t.t0.retcode) {
                    t.next = 13;
                    break;
                  }
                  return t.abrupt("return", []);
                case 13:
                  throw (
                    (g.StockBridge.toast("选择图片失败，请稍后重试", "none"),
                    t.t0)
                  );
                case 14:
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
  E = function (e, n, r) {
    return p(
      exports,
      null,
      t().mark(function o() {
        var i, a, c;
        return t().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (((t.prev = 0), n && 0 !== n.length)) {
                    t.next = 3;
                    break;
                  }
                  return t.abrupt("return", []);
                case 3:
                  (i = []), (a = 0);
                case 5:
                  if (!(a < n.length)) {
                    t.next = 19;
                    break;
                  }
                  return (t.next = 8), S(e, n[a]);
                case 8:
                  if (((c = t.sent), (t.t0 = null !== c), !t.t0)) {
                    t.next = 16;
                    break;
                  }
                  if ((i.push(c), (t.t1 = r), !t.t1)) {
                    t.next = 16;
                    break;
                  }
                  return (t.next = 16), r(c);
                case 16:
                  a++, (t.next = 5);
                  break;
                case 19:
                  return t.abrupt(
                    "return",
                    (w.log(
                      "串行上传完成: 成功 "
                        .concat(i.length, "/")
                        .concat(n.length, " 张")
                    ),
                    i)
                  );
                case 22:
                  throw (
                    ((t.prev = 22),
                    (t.t2 = t.catch(0)),
                    w.error("批量上传图片到微信服务器失败:", t.t2),
                    g.StockBridge.toast("批量上传图片失败", "none"),
                    t.t2)
                  );
                case 25:
                case "end":
                  return t.stop();
              }
          },
          o,
          null,
          [[0, 22]]
        );
      })
    );
  },
  S = function (e, n) {
    return p(
      exports,
      null,
      t().mark(function r() {
        var o;
        return t().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.prev = 0),
                    (t.next = 3),
                    e.$sdk.uploadImage({ localId: n, isShowProgressTips: 0 })
                  );
                case 3:
                  return (
                    (o = t.sent),
                    t.abrupt(
                      "return",
                      o.serverId
                        ? { localId: n, serverId: o.serverId }
                        : (w.error("微信服务器未返回图片地址"), null)
                    )
                  );
                case 7:
                  throw (
                    ((t.prev = 7),
                    (t.t0 = t.catch(0)),
                    w.error("微信图片上传失败：", t.t0),
                    t.t0)
                  );
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
  I = function (e, n) {
    return p(
      exports,
      null,
      t().mark(function r() {
        var o, i;
        return t().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  if (((r.prev = 0), n && 0 !== n.length)) {
                    r.next = 3;
                    break;
                  }
                  return r.abrupt("return", []);
                case 3:
                  return (
                    (o = n.map(function (n) {
                      return p(
                        exports,
                        null,
                        t().mark(function r() {
                          var o;
                          return t().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      (t.next = 3),
                                      T(e, n.serverId)
                                    );
                                  case 3:
                                    return (
                                      (o = t.sent),
                                      t.abrupt(
                                        "return",
                                        (w.log("获取图片信息成功:", o),
                                        f(d({}, n), {
                                          imageInfo: ""
                                            .concat(o.width, ",")
                                            .concat(o.height),
                                        }))
                                      )
                                    );
                                  case 7:
                                    return (
                                      (t.prev = 7),
                                      (t.t0 = t.catch(0)),
                                      t.abrupt(
                                        "return",
                                        (w.error("获取图片信息失败:", t.t0), n)
                                      )
                                    );
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
                    })),
                    (r.next = 6),
                    Promise.all(o)
                  );
                case 6:
                  return (
                    (i = r.sent),
                    r.abrupt("return", (w.log("已添加图片详细信息:", i), i))
                  );
                case 10:
                  return (
                    (r.prev = 10),
                    (r.t0 = r.catch(0)),
                    r.abrupt(
                      "return",
                      (w.error("批量添加图片信息失败:", r.t0), n)
                    )
                  );
                case 13:
                case "end":
                  return r.stop();
              }
          },
          r,
          null,
          [[0, 10]]
        );
      })
    );
  },
  T = function (e, n) {
    return p(
      exports,
      null,
      t().mark(function e() {
        return t().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), B(n);
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  },
  P = function (e) {
    return p(
      exports,
      null,
      t().mark(function n() {
        var r, o, i;
        return t().wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (n.prev = 0),
                    (r =
                      "https://wzq.tenpay.com/group/newstockgroup/commentPlat/putImagePlat"),
                    (o = f(d({}, k.getLoginParamsObject(r)), {
                      target: "pf",
                      type: "jssdk",
                      scene: "post",
                    })),
                    e.forEach(function (e, n) {
                      o["image_".concat(n + 1)] = e;
                    }),
                    (n.next = 5),
                    g.StockBridge.request(r, "POST", o)
                  );
                case 5:
                  return (
                    (i = n.sent),
                    n.abrupt("return", (w.log("上传到业务服务器成功:", i), i))
                  );
                case 9:
                  throw (
                    ((n.prev = 9),
                    (n.t0 = n.catch(0)),
                    w.error("上传到业务服务器失败:", n.t0),
                    n.t0)
                  );
                case 12:
                case "end":
                  return n.stop();
              }
          },
          n,
          null,
          [[0, 9]]
        );
      })
    );
  },
  H = function (e) {
    try {
      if (!e || !e.data) return w.warn("服务器返回数据为空"), [];
      var n = e.data,
        t = [];
      return (
        Object.keys(n)
          .filter(function (e) {
            return e.startsWith("image_");
          })
          .sort(function (e, n) {
            return (
              parseInt(e.replace("image_", ""), 10) -
              parseInt(n.replace("image_", ""), 10)
            );
          })
          .forEach(function (e) {
            t.push({ serverId: n[e] });
          }),
        w.log("提取到 ".concat(t.length, " 个图片链接:"), t),
        t
      );
    } catch (e) {
      return w.error("提取图片链接失败:", e), [];
    }
  },
  B = function (e) {
    return p(
      exports,
      null,
      t().mark(function n() {
        return t().wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return n.abrupt(
                  "return",
                  new Promise(function (n, t) {
                    try {
                      var r = new Image(),
                        o = !1,
                        i = setTimeout(function () {
                          o ||
                            ((o = !0),
                            (r.src = ""),
                            w.error("获取图片尺寸超时:", e),
                            t(new Error("获取图片尺寸超时")));
                        }, 5e3);
                      (r.onload = function () {
                        o ||
                          ((o = !0),
                          clearTimeout(i),
                          n({ width: r.width, height: r.height }));
                      }),
                        (r.onerror = function (e) {
                          o ||
                            ((o = !0),
                            clearTimeout(i),
                            w.error("加载图片失败:", e),
                            t(new Error("加载图片失败")));
                        }),
                        (r.src = e);
                    } catch (e) {
                      w.error("获取图片尺寸失败:", e), t(e);
                    }
                  })
                );
              case 1:
              case "end":
                return n.stop();
            }
        }, n);
      })
    );
  },
  _ = {
    chooseImage: function (e, r) {
      for (
        var o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), a = 2;
        a < o;
        a++
      )
        i[a - 2] = arguments[a];
      return p(exports, [e, r].concat(i), function (e, r) {
        var o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = o.onProgress,
          a = o.onError;
        return t().mark(function o() {
          var c, u, l, s, d;
          return t().wrap(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    return (o.prev = 0), (o.next = 3), C(e, r);
                  case 3:
                    if (
                      ((c = o.sent),
                      w.log("---上传图片开始---"),
                      w.log("选择图片结果:", c),
                      c && 0 !== c.length)
                    ) {
                      o.next = 6;
                      break;
                    }
                    return o.abrupt("return", []);
                  case 6:
                    return (
                      (o.next = 8),
                      E(e, c, function (e) {
                        return p(
                          exports,
                          null,
                          t().mark(function r() {
                            var o, c, u, l;
                            return t().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (!i) {
                                        t.next = 14;
                                        break;
                                      }
                                      return (
                                        (t.prev = 1),
                                        (t.next = 4),
                                        P([e.serverId])
                                      );
                                    case 4:
                                      (o = t.sent),
                                        (c = H(o)),
                                        (u = n(c, 1)),
                                        (l = u[0]) &&
                                          i({
                                            localId: e.localId,
                                            serverId: l.serverId,
                                            imageInfo: "640,320",
                                          }),
                                        (t.next = 14);
                                      break;
                                    case 11:
                                      (t.prev = 11),
                                        (t.t0 = t.catch(1)),
                                        w.error(
                                          "单张图片上传业务服务器失败:",
                                          t.t0
                                        ),
                                        a && a(t.t0);
                                    case 14:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              r,
                              null,
                              [[1, 11]]
                            );
                          })
                        );
                      })
                    );
                  case 8:
                    if (
                      ((u = o.sent),
                      w.log("上传到微信服务器结果:", u),
                      0 !== u.length)
                    ) {
                      o.next = 11;
                      break;
                    }
                    return o.abrupt("return", []);
                  case 11:
                    if (i) {
                      o.next = 24;
                      break;
                    }
                    return (
                      (l = u.map(function (e) {
                        return e.serverId;
                      })),
                      (o.next = 15),
                      P(l)
                    );
                  case 15:
                    return (
                      (s = o.sent),
                      (d = H(s)),
                      w.log("上传到自己服务器结果:", s),
                      (o.next = 20),
                      I(e, d)
                    );
                  case 20:
                    return (
                      (d = o.sent),
                      w.log("获取图片详细信息结果:", d),
                      w.log("---上传结束--"),
                      o.abrupt("return", d)
                    );
                  case 24:
                    return o.abrupt(
                      "return",
                      (w.log("---上传结束（流式模式）--"), [])
                    );
                  case 27:
                    throw (
                      ((o.prev = 27),
                      (o.t0 = o.catch(0)),
                      w.error("选择并上传图片失败:", o.t0),
                      o.t0)
                    );
                  case 30:
                  case "end":
                    return o.stop();
                }
            },
            o,
            null,
            [[0, 27]]
          );
        })();
      });
    },
    chooseImageSHY: function (e, n) {
      return p(
        exports,
        null,
        t().mark(function r() {
          return t().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return r.abrupt(
                    "return",
                    new Promise(function (r, o) {
                      shy.chooseImage(n, 2048, function (n) {
                        return p(
                          exports,
                          null,
                          t().mark(function i() {
                            var a, c, u, l, s, d;
                            return t().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (
                                        (w.log("chooseImageSHY:", n),
                                        (a = n.imageUrls),
                                        (c = n.data),
                                        a && a.length)
                                      ) {
                                        t.next = 4;
                                        break;
                                      }
                                      return t.abrupt(
                                        "return",
                                        void o(new Error("选择并上传图片失败"))
                                      );
                                    case 4:
                                      (u = []), (l = 0);
                                    case 6:
                                      if (!(l < a.length)) {
                                        t.next = 26;
                                        break;
                                      }
                                      if (
                                        ((s = { serverId: a[l] }), !c || !c[l])
                                      ) {
                                        t.next = 12;
                                        break;
                                      }
                                      (s.imageInfo = ""
                                        .concat(c[l].width, ",")
                                        .concat(c[l].height)),
                                        (t.next = 22);
                                      break;
                                    case 12:
                                      return (
                                        (t.prev = 12),
                                        (t.next = 15),
                                        T(e, s.serverId)
                                      );
                                    case 15:
                                      (d = t.sent),
                                        (s.imageInfo = ""
                                          .concat(d.width, ",")
                                          .concat(d.height)),
                                        (t.next = 22);
                                      break;
                                    case 19:
                                      (t.prev = 19),
                                        (t.t0 = t.catch(12)),
                                        (s.imageInfo = "640,320");
                                    case 22:
                                      u.push(s);
                                    case 23:
                                      l++, (t.next = 6);
                                      break;
                                    case 26:
                                      r(u);
                                    case 27:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              i,
                              null,
                              [[12, 19]]
                            );
                          })
                        );
                      });
                    })
                  );
                case 1:
                case "end":
                  return r.stop();
              }
          }, r);
        })
      );
    },
    previewImage: function (e, n, r) {
      return p(
        exports,
        null,
        t().mark(function o() {
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      (t.next = 3),
                      e.$sdk.previewImage({ current: n[r], urls: n })
                    );
                  case 3:
                    w.log("微信图片预览成功"), (t.next = 9);
                    break;
                  case 6:
                    throw (
                      ((t.prev = 6),
                      (t.t0 = t.catch(0)),
                      w.error("微信图片预览失败：", t.t0),
                      t.t0)
                    );
                  case 9:
                  case "end":
                    return t.stop();
                }
            },
            o,
            null,
            [[0, 6]]
          );
        })
      );
    },
    previewImageSHY: function (e, n, r) {
      return p(
        exports,
        null,
        t().mark(function e() {
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    new Promise(function (e, t) {
                      shy.previewImage(n, r, function () {
                        e(n);
                      });
                    })
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    },
  },
  j = function (e) {
    return p(
      exports,
      null,
      t().mark(function n() {
        return t().wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return n.abrupt(
                  "return",
                  new Promise(function (n, t) {
                    g.wx$1.chooseMedia({
                      count: e,
                      sourceType: ["album", "camera"],
                      mediaType: ["image"],
                      sizeType: ["original", "compressed"],
                      success: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          t = e.tempFiles,
                          r = void 0 === t ? [] : t,
                          o = r.filter(function (e) {
                            return !(
                              e.size > 7340032 &&
                              (g.StockBridge.toast(
                                "图片体积超过7M，请重新上传",
                                "none"
                              ),
                              1)
                            );
                          });
                        n(o);
                      },
                      fail: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          r = e.errMsg;
                        "chooseMedia:fail cancel" !== r
                          ? (g.StockBridge.toast(
                              "选择图片失败，请稍后重试",
                              "none"
                            ),
                            t(new Error(r)))
                          : n([]);
                      },
                    });
                  })
                );
              case 1:
              case "end":
                return n.stop();
            }
        }, n);
      })
    );
  },
  q = function (e, n) {
    return p(
      exports,
      null,
      t().mark(function r() {
        var o;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                if (n && 0 !== n.length) {
                  t.next = 2;
                  break;
                }
                return t.abrupt("return", []);
              case 2:
                return (
                  (o = n.map(function (n) {
                    return N(e, n);
                  })),
                  (t.next = 5),
                  Promise.all(o)
                );
              case 5:
                return t.abrupt(
                  "return",
                  t.sent.filter(function (e) {
                    return null !== e;
                  })
                );
              case 6:
              case "end":
                return t.stop();
            }
        }, r);
      })
    );
  },
  N = function (e, n) {
    return p(
      exports,
      null,
      t().mark(function e() {
        return t().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  "return",
                  new Promise(function (e, t) {
                    try {
                      var r =
                        "https://group.finance.qq.com/newstockgroup/commentPlat/putImagePlat";
                      g.wx$1.uploadFile({
                        url: r,
                        filePath: n.tempFilePath,
                        name: "image_1",
                        formData: d(
                          { target: "pf" },
                          k.getLoginParamsObject(r)
                        ),
                        success: function (t) {
                          try {
                            var r = JSON.parse(t.data || "{}").data.image_1;
                            r
                              ? e({
                                  localId: n.tempFilePath,
                                  serverId: r,
                                  tempFilePath: n.tempFilePath,
                                  size: n.size,
                                })
                              : (g.StockBridge.toast(
                                  "图片上传失败，请重试",
                                  "none"
                                ),
                                e(null));
                          } catch (n) {
                            g.StockBridge.toast("图片上传失败，请重试", "none"),
                              e(null);
                          }
                        },
                        fail: function (n) {
                          g.StockBridge.toast("图片上传失败，请重试", "none"),
                            e(null);
                        },
                      });
                    } catch (n) {
                      e(null);
                    }
                  })
                );
              case 1:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  },
  A = function (e) {
    return p(
      exports,
      null,
      t().mark(function n() {
        var r;
        return t().wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  if (((n.prev = 0), e && 0 !== e.length)) {
                    n.next = 3;
                    break;
                  }
                  return n.abrupt("return", []);
                case 3:
                  return (
                    (r = e.map(function (e) {
                      return p(
                        exports,
                        null,
                        t().mark(function n() {
                          var r, o;
                          return t().wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (
                                      (n.prev = 0),
                                      (r = e.tempFilePath),
                                      (n.next = 4),
                                      (function (e) {
                                        return p(
                                          exports,
                                          null,
                                          t().mark(function n() {
                                            return t().wrap(function (n) {
                                              for (;;)
                                                switch ((n.prev = n.next)) {
                                                  case 0:
                                                    return n.abrupt(
                                                      "return",
                                                      new Promise(function (
                                                        n,
                                                        t
                                                      ) {
                                                        g.wx$1.getImageInfo({
                                                          src: e,
                                                          success: function (
                                                            e
                                                          ) {
                                                            n(e);
                                                          },
                                                          fail: function (e) {
                                                            t(e);
                                                          },
                                                        });
                                                      })
                                                    );
                                                  case 1:
                                                  case "end":
                                                    return n.stop();
                                                }
                                            }, n);
                                          })
                                        );
                                      })(r)
                                    );
                                  case 4:
                                    return (
                                      (o = n.sent),
                                      n.abrupt(
                                        "return",
                                        f(d({}, e), {
                                          imageInfo: ""
                                            .concat(o.width, ",")
                                            .concat(o.height),
                                        })
                                      )
                                    );
                                  case 8:
                                    return (
                                      (n.prev = 8),
                                      (n.t0 = n.catch(0)),
                                      n.abrupt("return", e)
                                    );
                                  case 11:
                                  case "end":
                                    return n.stop();
                                }
                            },
                            n,
                            null,
                            [[0, 8]]
                          );
                        })
                      );
                    })),
                    (n.next = 6),
                    Promise.all(r)
                  );
                case 6:
                  return n.abrupt("return", n.sent);
                case 9:
                  return (
                    (n.prev = 9), (n.t0 = n.catch(0)), n.abrupt("return", e)
                  );
                case 12:
                case "end":
                  return n.stop();
              }
          },
          n,
          null,
          [[0, 9]]
        );
      })
    );
  },
  M = {
    chooseImage: function (e, n) {
      return p(
        exports,
        null,
        t().mark(function r() {
          var o, i;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.prev = 0), (t.next = 3), j(n);
                  case 3:
                    return (o = t.sent), (t.next = 6), q(e, o);
                  case 6:
                    return (i = t.sent), (t.next = 9), A(i);
                  case 9:
                    return t.abrupt("return", t.sent);
                  case 12:
                    throw ((t.prev = 12), (t.t0 = t.catch(0)), t.t0);
                  case 15:
                  case "end":
                    return t.stop();
                }
            },
            r,
            null,
            [[0, 12]]
          );
        })
      );
    },
    previewImage: function (e, n, t) {
      g.wx$1.previewImage({
        current: n[t],
        urls: n,
        success: function () {},
        fail: function (e) {},
      });
    },
  },
  V = m.createLogger(),
  K = m.createLogger(),
  O = m.createLogger(),
  L = function (e, n, t) {
    var r = e.user_id,
      o = void 0 === r ? "" : r,
      i = e.user_name,
      a = void 0 === i ? "" : i,
      c = t.content,
      u = void 0 === c ? "" : c,
      l = n.forwardContent,
      s = void 0 === l ? "" : l;
    return {
      forward: 1,
      forward_content: "<1,"
        .concat(o, ":")
        .concat(a, ":")
        .concat(u, "> ")
        .concat(s),
    };
  },
  F = function (e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      r = e.rootid,
      o = void 0 === r ? "" : r,
      i = e.id,
      a = void 0 === i ? "" : i,
      c = e.toOpenid,
      u = void 0 === c ? "" : c,
      l = e.touser,
      s = void 0 === l ? "" : l,
      d = e.content,
      f = void 0 === d ? "" : d,
      p = n.processedText,
      g = void 0 === p ? "" : p,
      v = n.atUserLinks,
      m = void 0 === v ? [] : v,
      h = {
        content: t
          ? ""
              .concat(g, "<1,")
              .concat(u, ":")
              .concat(s, "> ")
              .concat(f || "")
          : "".concat(g),
        parent_id: a || o,
        root_id: o || a,
        to_user: u || "",
      };
    return Array.isArray(m) && m.length > 0 && (h.link = JSON.stringify(m)), h;
  },
  z = function (e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      t = e.id,
      r = e.map_id,
      o = n.processedText,
      i = void 0 === o ? "" : o;
    return {
      content: i,
      news_id: t || "",
      map_id: r || (t ? "news_".concat(t) : ""),
    };
  },
  R = function (e, n) {
    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = arguments.length > 3 ? arguments[3] : void 0,
      o = t.processedText,
      i = void 0 === o ? "" : o,
      a = e.user_id,
      c = void 0 === a ? "" : a,
      u = e.user_name,
      l = void 0 === u ? "" : u,
      s = n.type4,
      d = n.replyUserName,
      f = void 0 === d ? "" : d,
      p = n.replyUserId,
      g = void 0 === p ? "" : p,
      v = n.replyContent,
      m = void 0 === v ? "" : v,
      h = {
        type: 14,
        content: "<1,"
          .concat(c, ":")
          .concat(l, ":")
          .concat(i || "转发", "> ")
          .concat(
            "turnReply" === s
              ? "<1,"
                  .concat(g, ":")
                  .concat(f, ":")
                  .concat(m || "转发", ">")
              : "",
            " "
          )
          .concat(r),
        news_id: n.id || "",
        map_id: "news_".concat(n.id),
      };
    return (
      "video" === n.post_scene &&
        ((h.type = 0), (h.content = i), n.link && (h.link = n.link)),
      "turnReply" === n.type4 && n.replyId && (h.news_id = n.replyId),
      h
    );
  },
  Y = {
    emojiArr: [
      "微笑",
      "撇嘴",
      "色",
      "发呆",
      "得意",
      "流泪",
      "害羞",
      "闭嘴",
      "睡",
      "大哭",
      "尴尬",
      "发怒",
      "调皮",
      "呲牙",
      "惊讶",
      "难过",
      "酷",
      "冷汗",
      "抓狂",
      "吐",
      "偷笑",
      "愉快",
      "白眼",
      "傲慢",
      "饥饿",
      "困",
      "惊恐",
      "流汗",
      "憨笑",
      "悠闲",
      "奋斗",
      "咒骂",
      "疑问",
      "嘘",
      "晕",
      "疯了",
      "衰",
      "骷髅",
      "敲打",
      "再见",
      "擦汗",
      "抠鼻",
      "鼓掌",
      "糗大了",
      "坏笑",
      "左哼哼",
      "右哼哼",
      "哈欠",
      "鄙视",
      "委屈",
      "快哭了",
      "阴险",
      "亲亲",
      "吓",
      "可怜",
      "菜刀",
      "西瓜",
      "啤酒",
      "篮球",
      "乒乓",
      "咖啡",
      "饭",
      "猪头",
      "玫瑰",
      "凋谢",
      "嘴唇",
      "爱心",
      "心碎",
      "蛋糕",
      "闪电",
      "炸弹",
      "刀",
      "足球",
      "瓢虫",
      "便便",
      "月亮",
      "太阳",
      "礼物",
      "拥抱",
      "强",
      "弱",
      "握手",
      "胜利",
      "抱拳",
      "勾引",
      "拳头",
      "差劲",
      "爱你",
      "NO",
      "OK",
      "爱情",
      "飞吻",
      "跳跳",
      "发抖",
      "怄火",
      "转圈",
      "磕头",
      "回头",
      "跳绳",
      "投降",
    ],
    semojiArr: [
      "s/呲牙",
      "s/流泪",
      "s/微笑",
      "s/得意",
      "s/撇嘴",
      "s/尴尬",
      "s/吃瓜",
      "s/发呆",
      "s/色",
      "s/大哭",
      "s/调皮",
      "s/强",
      "s/流汗",
      "s/抠鼻",
      "s/憨笑",
      "s/难过",
      "s/闭嘴",
      "s/害羞",
      "s/抱拳",
      "s/惊讶",
      "s/奋斗",
      "s/疑问",
      "s/抓狂",
      "s/白眼",
      "s/衰",
      "s/再见",
      "s/666",
      "s/愉快",
      "s/鄙视",
      "s/晕",
      "s/惊恐",
      "s/OK",
      "s/睡",
      "s/傲慢",
      "s/可怜",
      "s/鼓掌",
      "s/胜利",
      "s/爱心",
      "s/叹气",
      "s/困",
    ],
    comArr: ["呲牙", "流泪", "微笑", "撇嘴", "得意", "尴尬", "偷笑", "发呆"],
    gifArr: [
      {
        name: "暴富喷雾",
        gifid: "gif123y3suytaeil1626751389",
        picid: "dqc375tuuh1626778500",
      },
      {
        name: "财富密码",
        gifid: "gif123hti418abig1626751420",
        picid: "e1kzgu6e621626778748",
      },
      {
        name: "关灯吃面",
        gifid: "gif1234duwi1l8of1626751450",
        picid: "9nmqt0ig951626778766",
      },
      {
        name: "还不到底",
        gifid: "gif123tbg0stkcc21626751469",
        picid: "hhsaxgpqtg1626778782",
      },
      {
        name: "好棒棒",
        gifid: "gif123hflontjiob1626751435",
        picid: "zmwk43adun1626778826",
      },
      {
        name: "利好来了",
        gifid: "gif123hzng5pvql51626751499",
        picid: "zmwk43adun1626778826",
      },
      {
        name: "满仓涨停",
        gifid: "gif123npt3xveea51626751531",
        picid: "1yniiqxf341626778841",
      },
      {
        name: "牛皮牛皮",
        gifid: "gif123l0xwtcb9sn1626751560",
        picid: "hgwbs9mviw1626778855",
      },
      {
        name: "抢了个寂寞",
        gifid: "gif123l0cfdto1nn1626751598",
        picid: "lncktsioff1626778870",
      },
      {
        name: "我不玩了",
        gifid: "gif12307gp98rekr1626751616",
        picid: "i3bbz23x9q1626778883",
      },
      {
        name: "我就看看",
        gifid: "gif123zkoq2txl8o1626751632",
        picid: "vcsyyi54fg1626778898",
      },
      {
        name: "我来接盘",
        gifid: "gif123yycxxs9t6m1626751484",
        picid: "vm3wh4zebp1626778914",
      },
      {
        name: "谢谢老板",
        gifid: "gif123omrlvoc3rv1626751646",
        picid: "ryzfii2y551626778928",
      },
      {
        name: "一把梭",
        gifid: "gif123kqrcz4n6i31626751660",
        picid: "u5gj2mit0y1626778943",
      },
      {
        name: "涨停一堆",
        gifid: "gif123gztuzd5c2s1626751671",
        picid: "rqcrxg27uf1626778956",
      },
      {
        name: "中签符",
        gifid: "gif1238mbxxp45th1626751684",
        picid: "9rb4spgcrq1626778969",
      },
    ],
    addEmojiToText: function (n, t, r) {
      if ("string" != typeof t)
        throw new Error("Invalid inputText: must be a non-empty string");
      if ("string" != typeof n && "del" !== n)
        throw new Error('Invalid emoji: must be a string or "del"');
      var o = this.emojiArr,
        i = this.semojiArr,
        a = t,
        c = a.length,
        u = Math.max(0, Math.min(null != r ? r : c, c));
      if ("del" === n) {
        if (0 === u) return { text: a, cursor: u };
        var l = a.slice(0, u).match(/\[s?\/?\S{1,3}\]$/);
        if (l) {
          var s = l[0],
            d = s.slice(1, -1);
          if (new Set([].concat(e(o), e(i))).has(d)) {
            var f = s.length;
            return {
              text: (a = a.slice(0, u - f) + a.slice(u)),
              cursor: (u -= f),
            };
          }
        }
        (a = a.slice(0, u - 1) + a.slice(u)), (u -= 1);
      } else (a = a.slice(0, u) + n + a.slice(u)), (u += n.length);
      return { text: a, cursor: u };
    },
  },
  U = {},
  D = g._default().env.IS_ZXG,
  $ = m.createLogger();
function G() {
  var e = g.StockBridge.ENV === g.EnvTypeEnum.MP,
    n = g.ref(0),
    t = function (n) {
      return function () {
        if (!e) return n.apply(void 0, arguments);
      };
    },
    r = g.ref(0),
    o = g.ref(200),
    i = g.ref(0),
    a = g.computed(function () {
      return r.value > 0 && r.value === o.value;
    }),
    c = g.computed(function () {
      return $.log("isNeedKbHeight", U.ios), !!D || U.ios;
    }),
    u = function (e) {
      (r.value = e),
        (o.value = Math.max(e, 200)),
        $.log("设置键盘高度 updateKeyboardState", {
          current: r.value,
          max: o.value,
          opacity: i.value,
        });
    },
    l = function () {
      (r.value = 0),
        $.log("键盘高度归0 resetKeyboardState", {
          current: r.value,
          max: o.value,
          opacity: i.value,
        });
    },
    s = t(function (e) {
      var t,
        r = U.ios ? window.innerHeight : Math.max(window.innerHeight, n.value),
        o = (null == (t = window.visualViewport) ? void 0 : t.height) || r,
        a = r - o,
        c = document.documentElement.clientHeight || document.body.clientHeight;
      $.log("visualViewport resize", {
        innerHeight: r,
        newHeight: o,
        keyboardHeight: a,
        resizeHeight: c,
      }),
        a > 50
          ? ($.log("键盘弹出", { keyboardHeight: a }), u(a))
          : ($.log("键盘收起"), l()),
        setTimeout(function () {
          $.log("显示输入框"), (i.value = 1);
        }, 50);
    }),
    d = t(function (e) {
      $.log("输入框隐藏，等待键盘高度变化回调=== bindfocusH5 === inputRef:", e),
        (i.value = 0),
        g.StockBridge.ENV === g.EnvTypeEnum.SHY_NATIVE
          ? (i.value = 1)
          : setTimeout(function () {
              0 === i.value &&
                ($.log(
                  "没收到键盘回调，手动计算键盘高度=== calculateInitialKeyboardHeight ==="
                ),
                s());
            }, 100);
    }),
    f = t(function (e) {
      $.log("失去焦点=== bindblurH5 === inputRef:", e), l();
    }),
    p = t(function () {
      g.StockBridge.ENV === g.EnvTypeEnum.SHY_NATIVE
        ? shy.on("onKeyboardHeightChange", function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            if (e && void 0 !== e.height) {
              var n = e.height;
              $.log("键盘高度变化回调", { keyboardHeight: n }),
                n > 50
                  ? ($.log("键盘弹出", { keyboardHeight: n }), u(n))
                  : ($.log("键盘收起"), l());
            }
          })
        : window.visualViewport &&
          (window.visualViewport.addEventListener("resize", s),
          $.log("已注册 visualViewport 监听"));
    }),
    v = t(function () {
      g.StockBridge.ENV === g.EnvTypeEnum.SHY_NATIVE ||
        (window.visualViewport &&
          window.visualViewport.removeEventListener("resize", s));
    });
  return (
    g.onMounted(function () {
      e ||
        ((n.value = window.innerHeight),
        $.log("onMounted window.innerHeight:", window.innerHeight),
        p());
    }),
    g.onUnmounted(v),
    {
      isNeedKbHeight: c,
      h5KeyboardHeightMax: o,
      h5ContentOpacity: i,
      isH5KeyboardShowing: a,
      bindfocusH5: d,
      bindblurH5: f,
    }
  );
}
var Z = m.createLogger(),
  W = m.createLogger();
function J(e, n, t, r) {
  t.emit;
  var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
    i = g.ref(!1),
    a = g.StockBridge.ENV === g.EnvTypeEnum.MP,
    c = a ? g.ref(!0) : g.ref(!1),
    u = g.ref(-1),
    l = G(),
    s = l.isNeedKbHeight,
    d = l.h5KeyboardHeightMax,
    f = l.h5ContentOpacity,
    p = l.isH5KeyboardShowing,
    v = l.bindfocusH5,
    m = l.bindblurH5,
    h = (function () {
      var e = g.StockBridge.ENV === g.EnvTypeEnum.MP,
        n = function (n) {
          return function () {
            if (e) return n.apply(void 0, arguments);
          };
        },
        t = g.ref(200),
        r = g.ref(0),
        o = g.computed(function () {
          return r.value > 0;
        }),
        i = function (e) {
          (r.value = e),
            e > 0 && (t.value = Math.max(e, 200)),
            Z.log("updateKeyboardState", {
              height: e,
              current: r.value,
              max: t.value,
            });
        },
        a = function () {
          (r.value = 0),
            Z.log("resetKeyboardState", {
              mpKeyboardHeightCurrent: r.value,
              mpKeyboardHeightMax: t.value,
            });
        },
        c = function (e) {
          Z.log("键盘高度变化：", e);
          var n = e.height;
          n > 0 ? i(n) : a();
        },
        u = n(function (e) {
          Z.log("=== bindfocusMP ===", e);
        }),
        l = n(function (e) {
          Z.log("=== bindblurMP ===", e);
        }),
        s = n(function () {
          g.wx$1.onKeyboardHeightChange(c), Z.log("已注册键盘高度监听");
        }),
        d = n(function () {
          g.wx$1.offKeyboardHeightChange(c), Z.log("已移除键盘高度监听");
        });
      return (
        g.onMounted(function () {
          s();
        }),
        g.onUnmounted(function () {
          d();
        }),
        {
          mpKeyboardHeightCurrent: r,
          mpKeyboardHeightMax: t,
          isMPKeyboardShowing: o,
          bindfocusMP: u,
          bindblurMP: l,
          updateKeyboardState: i,
          resetKeyboardState: a,
        }
      );
    })(),
    k = h.mpKeyboardHeightMax,
    y = h.mpKeyboardHeightCurrent,
    x = (h.isMPKeyboardShowing, h.bindfocusMP),
    w = h.bindblurMP,
    C = g.computed(function () {
      var e = 0;
      if (a)
        return (
          (e = i.value || c.value ? k.value : y.value),
          W.log("emojiPanelHeight", {
            showEmojiPanel: i.value,
            focus: c.value,
            height: e,
            mpKeyboardHeightMax: k.value,
            mpKeyboardHeightCurrent: y.value,
          }),
          e
        );
      var n;
      return (
        (n = i.value || (p.value && s.value) ? d.value : 0),
        W.log("emojiPanelHeight", {
          height: n,
          h5ContentOpacity: f.value,
          h5KeyboardHeightMax: d.value,
          showEmojiPanel: i.value,
          isH5KeyboardShowing: p.value,
          isNeedKbHeight: s.value,
        }),
        n
      );
    }),
    E = function () {
      var n = e.$refs.editorInputRef;
      return W.log("键盘refs:", n), n;
    },
    S = function (e) {
      var n = E(),
        t = T();
      W.log("设置键盘焦点状态 status:", e, " 当前状态isFocus:", t),
        t !== e &&
          (a ||
            (e
              ? g.StockBridge.ENV === g.EnvTypeEnum.SHY_NATIVE
                ? shy.invoke("showKeyboard", { enabled: !0 }, function () {
                    null == n || n.focus();
                  })
                : null == n || n.focus()
              : null == n || n.blur()),
          (c.value = e));
    },
    I = function (e) {
      var n, t;
      W.log("从事件保存光标位置:", u.value),
        a && void 0 !== (null == (n = e.detail) ? void 0 : n.cursor)
          ? (u.value = e.detail.cursor)
          : void 0 !== (null == (t = e.target) ? void 0 : t.selectionStart) &&
            (u.value = e.target.selectionStart);
    },
    T = function () {
      if (a) return c.value;
      var e = E(),
        n = e && document.activeElement === e;
      return W.log("=== isFocused ===", n), n;
    },
    P = function () {
      return u.value >= 0 ? u.value : r.value.length;
    },
    H = function (e) {
      i.value = e;
    },
    B = function () {
      "hidden" === (null == document ? void 0 : document.visibilityState) &&
        S(!1);
    };
  return (
    g.onMounted(function () {
      W.log("onMounted"),
        a ||
          null == document ||
          document.addEventListener("visibilitychange", B),
        setTimeout(function () {
          S(!0);
        }, 50);
    }),
    g.onUnmounted(function () {
      W.log("onUnmounted"),
        a ||
          null == document ||
          document.removeEventListener("visibilitychange", B);
    }),
    {
      showEmojiPanel: i,
      focus: c,
      cursorPosition: u,
      emojiPanelHeight: C,
      h5ContentOpacity: f,
      bindfocus: function (e) {
        I(e);
        var n = g.StockBridge.ENV === g.EnvTypeEnum.SHY_NATIVE ? 200 : 100;
        W.log("获得焦点的回调=== bindfocus ===", e, " timer:", n),
          setTimeout(function () {
            H(!1);
          }, n),
          a ? x(e) : v(e),
          (c.value = !0);
      },
      bindblur: function (e) {
        W.log("失去焦点的回调=== bindblur ===", e),
          I(e),
          a
            ? w(e)
            : setTimeout(function () {
                m(e);
              }, 0),
          (c.value = !1);
      },
      onInput: function (e) {
        var n, t;
        W.log("onInput", e);
        try {
          var i = (function (e, n) {
            return b.atUserHelper.isAtSymbolInput(e, n);
          })(e, (null == r ? void 0 : r.value) || "");
          r &&
            (r.value =
              (null == (n = e.detail) ? void 0 : n.value) ||
              (null == (t = null == e ? void 0 : e.target)
                ? void 0
                : t.value) ||
              ""),
            I(e),
            i && o && (W.log("检测到@符号输入，触发@人功能"), o());
        } catch (e) {
          W.error("onInput error", e);
        }
      },
      onClickKeyBoard: function () {
        W.log("onClickKeyBoard 表情键盘状态:", i.value),
          i.value ? S(!0) : (H(!0), S(!1));
      },
      setFocusStatus: S,
      getCursorPosition: P,
      setCursorPosition: function (e) {
        (u.value = e), W.log("设置光标位置:", e);
      },
      updateCursorPosition: function () {
        var e;
        W.log("updateCursorPosition");
        var n = P();
        null == (e = E()) || e.setSelectionRange(n, n);
      },
      adjustTextareaHeight: function () {
        var e = E();
        e &&
          e.scrollHeight &&
          ((e.style.height = "1px"),
          (e.style.height = "".concat(e.scrollHeight, "px")),
          W.log("textarea高度调整为:", e.scrollHeight));
      },
      showEmojiPanelEx: function () {
        H(!0);
      },
    }
  );
}
var Q = x.api.goPageCommon,
  X = m.createLogger(),
  ee = m.createLogger(),
  ne = g.StockBridge.ENV === g.EnvTypeEnum.MP,
  te = "stock-halfscreen-editor-fake-input",
  re = m.createLogger(),
  oe = m.createLogger();
function ie(n) {
  var r = this,
    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    i = arguments.length > 2 ? arguments[2] : void 0,
    a = i.emit,
    c = b.useContentManager(n, o, { emit: a }),
    u = c.displayText,
    l = c.insertStock,
    s = c.insertTopic,
    m = c.insertAt,
    k = c.removeAtBeforeCursor,
    x = c.getSubmitContent,
    w = c.getFirstStockId,
    C = c.getFirstTopicId,
    E = c.setCursorMethods,
    S = (function () {
      var e = g.ref(0),
        n = g.ref(!1);
      return {
        disablePageScroll: function () {
          ne ||
            (ee.log("禁用页面滚动"),
            n.value
              ? ee.log("页面滚动 already disabled")
              : ((n.value = !0),
                (e.value =
                  window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop),
                (document.body.style.overflow = "hidden"),
                (document.body.style.position = "fixed"),
                (document.body.style.width = "100%"),
                (document.body.style.top = -e.value + "px"),
                ee.log("禁用页面滚动，记录位置:", e.value)));
        },
        resetPageScroll: function () {
          ne ||
            (ee.log("恢复页面滚动"),
            !1 !== n.value
              ? ((n.value = !1),
                (document.body.style.overflow = "auto"),
                (document.body.style.position = "static"),
                (document.body.style.top = "auto"),
                window.scrollTo(0, e.value),
                ee.log("恢复页面滚动，恢复位置:", e.value))
              : ee.log("页面滚动 already enabled"));
        },
      };
    })(),
    I = S.disablePageScroll,
    T = S.resetPageScroll,
    P = (function () {
      var e = g.StockBridge.ENV === g.EnvTypeEnum.MP,
        n = function () {
          return e ? null : document.getElementById(te);
        };
      return {
        insertFakeInput: function () {
          if (e) return null;
          var t = n();
          if (t) return t;
          var r = document.createElement("input");
          return (
            (r.type = "text"),
            (r.id = te),
            (r.style.position = "absolute"),
            (r.style.width = "0"),
            (r.style.height = "0"),
            (r.style.opacity = "0"),
            document.body.appendChild(r),
            r
          );
        },
        removeFakeInput: function () {
          if (!e) {
            var t = n();
            t && t.remove();
          }
        },
        focusFakeInput: function () {
          if (e) return !1;
          var t = n();
          return !!t && (t.focus(), !0);
        },
      };
    })(),
    H = P.insertFakeInput,
    B = P.removeFakeInput,
    j = P.focusFakeInput,
    q = J(n, 0, { emit: a }, u, function () {
      Z(!1);
      var e = b.sceneHelper.getSceneParamsScene(o.queryEditor);
      Te(e), g.StockBridge.report("".concat(y.HalfEditorPrefix, ".at_input"));
    }),
    N = q.showEmojiPanel,
    A = q.onClickKeyBoard,
    U = q.getCursorPosition,
    D = q.setCursorPosition,
    $ = q.updateCursorPosition,
    G = q.onInput,
    Z = q.setFocusStatus,
    W = q.adjustTextareaHeight,
    ie = q.showEmojiPanelEx;
  E(U, D);
  var ae = g.computed(function () {
      return o.queryEditor.touser
        ? "回复 ".concat(decodeURIComponent(o.queryEditor.touser), "：")
        : "写评论";
    }),
    ce = g.computed(function () {
      return h.platform;
    }),
    ue = g.computed(function () {
      return o.queryEditor;
    }),
    le = g.computed(function () {
      return "turn" === o.queryEditor.action;
    }),
    se = g.computed(function () {
      return "detail" === o.queryEditor.type;
    }),
    de = g.computed(function () {
      return "reply" === o.queryEditor.type2;
    }),
    fe = g.computed(function () {
      return se.value && !de.value;
    }),
    pe = g.computed(function () {
      return se.value || le.value ? 1 : 9;
    }),
    ge =
      g.StockBridge.ENV === g.EnvTypeEnum.MP ||
      g.StockBridge.ENV === g.EnvTypeEnum.SHY_NATIVE,
    ve = function () {
      oe.log("afterSelectCallback"),
        ge || j(),
        setTimeout(function () {
          $(), ge || Z(!0);
        }, 100);
    },
    me = (function (n, r, o, i) {
      var a = this,
        c = g.ref([]),
        u = function (e) {
          g.StockBridge.toast(e, "none");
        },
        l = function (n) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (n && 0 !== n.length) {
            var r = n.map(function (e) {
                return {
                  localId: e.localId,
                  serverId: e.serverId,
                  imageInfo: e.imageInfo,
                  tempFilePath: e.tempFilePath,
                };
              }),
              o = t ? [] : c.value;
            (c.value = [].concat(e(o), e(r))), V.log("图片选择成功:", c.value);
          }
        };
      return {
        imageSelectList: c,
        selectGif: function (n) {
          var t = 1 === i;
          if ((V.log("选择GIF", n), !t && c.value.length >= i))
            u("最多只能上传".concat(i, "张图片"));
          else {
            var r = {
              serverId: n.localId,
              staticImgId: n.showId,
              imageInfo: n.imageInfo,
            };
            t && (c.value = []), (c.value = [].concat(e(c.value), [r]));
          }
        },
        delPicture: function (e) {
          var n = e.index;
          c.value.splice(n, 1);
        },
        onClickAlbum: function () {
          return p(
            a,
            null,
            t().mark(function r() {
              var o, a, s, d;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if ((o = 1 === i) || !(c.value.length >= i)) {
                          t.next = 5;
                          break;
                        }
                        u("最多只能上传".concat(i, "张图片")), (t.next = 29);
                        break;
                      case 5:
                        if (
                          ((t.prev = 5),
                          (a = o ? i : i - c.value.length),
                          g.StockBridge.ENV !== g.EnvTypeEnum.MP)
                        ) {
                          t.next = 14;
                          break;
                        }
                        return (t.next = 10), M.chooseImage(n, a);
                      case 10:
                        (s = t.sent), l(s, o), (t.next = 24);
                        break;
                      case 14:
                        if (g.StockBridge.ENV !== g.EnvTypeEnum.SHY_NATIVE) {
                          t.next = 21;
                          break;
                        }
                        return (t.next = 17), _.chooseImageSHY(n, a);
                      case 17:
                        (d = t.sent), l(d, o), (t.next = 24);
                        break;
                      case 21:
                        return (
                          (t.next = 23),
                          _.chooseImage(n, a, {
                            onProgress: function (n) {
                              V.log("图片上传进度:", n);
                              var t = o ? [] : c.value;
                              c.value = [].concat(e(t), [
                                {
                                  localId: n.localId,
                                  serverId: n.serverId,
                                  imageInfo: n.imageInfo,
                                },
                              ]);
                            },
                            onError: function (e) {
                              V.error("图片上传失败:", e),
                                u("图片上传失败，请重试");
                            },
                          })
                        );
                      case 23:
                        V.log("图片全部上传完成:", c.value);
                      case 24:
                        t.next = 29;
                        break;
                      case 26:
                        (t.prev = 26),
                          (t.t0 = t.catch(5)),
                          V.error("图片选择失败:", t.t0),
                          u("图片选择失败，请重试");
                      case 29:
                      case "end":
                        return t.stop();
                    }
                },
                r,
                null,
                [[5, 26]]
              );
            })
          );
        },
        getSelectImageData: function () {
          var e = {};
          return (
            c.value.forEach(function (n, t) {
              (e["image_".concat(t + 1)] = n.serverId),
                (e["image_".concat(t + 1, "_prop")] = n.imageInfo);
            }),
            e
          );
        },
      };
    })(n, 0, 0, pe.value),
    he = me.imageSelectList,
    ke = me.selectGif,
    ye = me.delPicture,
    be = me.onClickAlbum,
    xe = me.getSelectImageData,
    we = (function (e, n, t, r, o) {
      var i = function (e) {
        K.log("handleSelect", e);
        try {
          var n = e.topic || e.topicName || "";
          n && r(e.topicId || "", n), o && o();
        } catch (e) {
          K.error("handleSelect error", e);
        }
      };
      return (
        g.onMounted(function () {
          K.log("onMounted"),
            g.StockBridge.ENV === g.EnvTypeEnum.SHY_NATIVE
              ? shy.subscribeNotification("community-topicPicked", "", i, !1)
              : g.StockBridge.busOn("community-topicPicked", i);
        }),
        g.onUnmounted(function () {
          K.log("onUnmounted"),
            g.StockBridge.ENV === g.EnvTypeEnum.SHY_NATIVE ||
              g.StockBridge.busOff("community-topicPicked", i);
        }),
        {
          onClickTopic: function () {
            g.StockBridge.ENV === g.EnvTypeEnum.SHY_NATIVE
              ? shy.navigateTo({
                  url: "qqstock://stockhybrid/com.tencent.shy.editor_select_pages/topic",
                  type: "present",
                })
              : g.StockRouter.routeTo({ name: "topicCircle" });
          },
        }
      );
    })(0, 0, 0, s, ve),
    Ce = we.onClickTopic,
    Ee = (function (e, n, t, r, o) {
      var i = g.ref(""),
        a = g.ref(""),
        c = function (e) {
          var n;
          O.log("handleSelect", e);
          try {
            if (e.name) {
              e.symbol
                ? (i.value = e.symbol)
                : (i.value =
                    ""
                      .concat(
                        null !=
                          (n = {
                            0: "sz",
                            1: "sh",
                            2: "hk",
                            3: "us",
                            fu: "fu",
                            bj: "bj",
                          }[e.market])
                          ? n
                          : e.market
                      )
                      .concat(e.scode) || ""),
                (a.value = e.name),
                r(i.value, a.value);
            }
            o && o();
          } catch (e) {
            O.error("handleSelect error", e);
          }
        };
      return (
        g.onMounted(function () {
          O.log("onMounted"),
            g.StockBridge.ENV === g.EnvTypeEnum.SHY_NATIVE
              ? shy.subscribeNotification(
                  "market-sqStockPicked",
                  "com.tencent.shy.stock_select",
                  c
                )
              : g.StockBridge.busOn("market-sqStockPicked", c);
        }),
        g.onUnmounted(function () {
          O.log("onUnmounted"),
            g.StockBridge.ENV === g.EnvTypeEnum.SHY_NATIVE ||
              g.StockBridge.busOff("market-sqStockPicked", c);
        }),
        {
          symbol: i,
          stockName: a,
          onClickStock: function () {
            O.log("onClickKeyStock"),
              g.StockBridge.ENV === g.EnvTypeEnum.SHY_NATIVE
                ? shy.navigateTo({
                    url: "qqstock://stockhybrid/com.tencent.shy.stock_select/stock-select?scene=2&source=sqEdit&searchType=sqEdit",
                    type: "present",
                  })
                : g.StockRouter.routeTo({ name: "stockselect" });
          },
        }
      );
    })(0, 0, 0, l, ve),
    Se = Ee.onClickStock,
    Ie = b.useFriendsSelect(
      n,
      o,
      { emit: a },
      function (e, n) {
        var t = k(),
          r = (t.success, t.newCursorPos);
        m(e, n, r);
      },
      ve
    ),
    Te = Ie.onClickAt,
    Pe = {
      handleEmojiSelect: function (e, n, t) {
        var r = Y.addEmojiToText(e, n, t);
        return r ? { text: r.text, cursor: r.cursor } : { text: n, cursor: t };
      },
    },
    He = Pe.handleEmojiSelect,
    Be = (function () {
      var e = g.ref(""),
        n = g.ref({});
      return {
        setTransferData: function (t) {
          var r = t.originalContent,
            o = t.transferContent;
          re.log("setTransferData originalContent", r, "transferContent", o),
            (e.value = r),
            (n.value = o);
        },
        getTransferData: function () {
          var e, t;
          return null != (t = null == (e = n.value) ? void 0 : e.content)
            ? t
            : "";
        },
      };
    })(),
    _e = Be.setTransferData,
    je = Be.getTransferData,
    qe = (function (e, n, t) {
      var r = g.ref(!1);
      return {
        isTurnToFriendCircle: r,
        onClickCheckBox: function () {
          g.StockBridge.report(
            "".concat(y.HalfEditorPrefix, ".friend_checkbox_click")
          ),
            (r.value = !r.value);
        },
      };
    })(),
    Ne = qe.isTurnToFriendCircle,
    Ae = qe.onClickCheckBox,
    Me = (function (e, n, r) {
      var o = this,
        i = g.ref({ user_image: "", user_id: "", user_name: "" });
      return (
        g.onMounted(function () {
          p(
            o,
            null,
            t().mark(function e() {
              var n;
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ("" !== i.value.user_id) {
                          e.next = 11;
                          break;
                        }
                        return (
                          (e.prev = 1), (e.next = 4), v.getUserSocialData()
                        );
                      case 4:
                        0 === (n = e.sent).code && (i.value = n.data),
                          (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          X.error("获取用户头像失败", e.t0);
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
        }),
        {
          onClickHeadImg: function () {
            var n = {
              eventName: "person",
              userId: (null == i ? void 0 : i.value.user_id) || "",
              instance: e,
            };
            Q(n);
          },
          userInfo: i,
        }
      );
    })(n),
    Ve = Me.userInfo,
    Ke = Me.onClickHeadImg,
    Oe = g.computed(function () {
      return (
        Ve.value.user_image ||
        "https://st.gtimg.com/design/374f66b04aedd22bd7ac8225ec3a14c2.png"
      );
    }),
    Le = g.computed(function () {
      if (le.value) return !1;
      var e = u.value.trim().length > 0,
        n = he.value.length > 0;
      return !(e || n);
    });
  g.watch(
    function () {
      return u.value;
    },
    function () {
      setTimeout(function () {
        W();
      }, 300);
    }
  );
  var Fe = function (e) {
      "function" == typeof e.preventDefault && e.preventDefault(),
        "function" == typeof e.stopPropagation && e.stopPropagation();
    },
    ze = function (e) {
      oe.error("点击关闭 hideEditor", e), a("onHide");
    },
    Re = function (e) {
      g.StockBridge.toast(e, "none", { duration: 1e3 });
    },
    Ye = !1,
    Ue = function e() {
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      return p(r, [].concat(i), function () {
        var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return t().mark(function i() {
          var a, c, u;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (a = nn(o.queryEditor, n)),
                      oe.log("获取回复数据：", a),
                      (t.prev = 2),
                      r && (a.ticket = r),
                      (t.next = 6),
                      v.putComment(a)
                    );
                  case 6:
                    (c = t.sent),
                      oe.log("回复结果", c),
                      (u = c.data),
                      0 === c.code
                        ? (Re("发帖成功", "success"), rn(a, u))
                        : -1001 === c.code
                        ? We(function (t) {
                            e(n, t);
                          })
                        : Re(c.msg || "发帖失败", "fail"),
                      (t.next = 15);
                    break;
                  case 12:
                    (t.prev = 12),
                      (t.t0 = t.catch(2)),
                      oe.log("回复失败：", t.t0),
                      Re(t.t0.msg || "回复失败", "fail");
                  case 15:
                  case "end":
                    return t.stop();
                }
            },
            i,
            null,
            [[2, 12]]
          );
        })();
      });
    },
    De = function e() {
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      return p(r, [].concat(i), function () {
        var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return t().mark(function i() {
          var a, c, u;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (a = Xe(o.queryEditor, n)),
                      oe.log("获取回帖数据：", a),
                      (t.prev = 2),
                      r && (a.ticket = r),
                      (t.next = 6),
                      v.putSubject(a)
                    );
                  case 6:
                    (c = t.sent),
                      oe.log("回帖结果：", c),
                      (u = c.data),
                      0 === c.code
                        ? (g.StockBridge.ENV === g.EnvTypeEnum.SHY_NATIVE
                            ? Re(
                                "帖子已发布，系统会持续关注是否违规~",
                                "success"
                              )
                            : Re("发帖成功", "success"),
                          tn(a, u))
                        : -1001 === c.code
                        ? We(function (t) {
                            e(n, t);
                          })
                        : Re(c.msg || "发帖失败", "fail"),
                      (t.next = 15);
                    break;
                  case 12:
                    (t.prev = 12),
                      (t.t0 = t.catch(2)),
                      oe.log("发帖失败：", t.t0),
                      Re(t.t0.msg || "发帖失败", "fail");
                  case 15:
                  case "end":
                    return t.stop();
                }
            },
            i,
            null,
            [[2, 12]]
          );
        })();
      });
    },
    $e = function e() {
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      return p(r, [].concat(i), function () {
        var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return t().mark(function i() {
          var a, c, u;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (a = en(o.queryEditor, n)),
                      oe.log("获取转发数据：", a),
                      (t.prev = 2),
                      r && (a.ticket = r),
                      (t.next = 6),
                      v.putSubject(a)
                    );
                  case 6:
                    (c = t.sent),
                      oe.log("转发结果：", c),
                      (u = c.data),
                      0 === c.code
                        ? (Re("转发成功", "success"), tn(a, u))
                        : -1001 === c.code
                        ? We(function (t) {
                            e(n, t);
                          })
                        : Re(c.msg || "转发失败", "fail"),
                      (t.next = 15);
                    break;
                  case 12:
                    (t.prev = 12),
                      (t.t0 = t.catch(2)),
                      oe.log("转发失败：", t.t0),
                      Re(t.t0.msg || "转发失败", "fail");
                  case 15:
                  case "end":
                    return t.stop();
                }
            },
            i,
            null,
            [[2, 12]]
          );
        })();
      });
    },
    Ge = function () {},
    Ze = function (e) {
      var n = e.ticket,
        t = e.status;
      oe.log("onSecurityCodeSuccess", n, t),
        "success" === t && (Ge(n), (Ge = function () {}));
    },
    We = function (e) {
      var n;
      if (g.StockBridge.ENV === g.EnvTypeEnum.SHY_NATIVE) {
        (Ge = e),
          g.StockBridge.ENV === g.EnvTypeEnum.SHY_NATIVE &&
            shy.subscribeNotification(
              "securityCode",
              "com.tencent.shy.securityCode",
              Ze
            );
        var t = {
            url: "qqstock://SHY?info=".concat(
              encodeURIComponent(
                JSON.stringify({
                  p_key: "com.tencent.shy.securityCode",
                  p_url: "index?from=semiEditor",
                  showNav: !1,
                })
              )
            ),
            height:
              (null == (n = window.screen) ? void 0 : n.height) ||
              window.innerHeight,
            coverColor: "#00000000",
            backgroundColor: "#00000000",
          },
          r = "qqstock://SDModal?info=".concat(
            encodeURIComponent(JSON.stringify(t))
          );
        shy.navigateTo({ url: r });
      }
    },
    Je = function () {
      var e = xe();
      return f(d({}, e), { type: e && Object.keys(e).length ? 4 : 1 });
    },
    Qe = function (e) {
      return { stock_id: w() || e.symbol || "", topics: C() || "" };
    },
    Xe = function (e, n) {
      var t = d(d(d({}, n), Je()), Qe(e)),
        r = x(!1),
        o = b.sceneHelper.getSceneParams(e);
      return (t = d(d(d({}, t), z(e, r)), o));
    },
    en = function (e, n) {
      var t = d(d(d({}, n), Je()), Qe(e)),
        r = x(!1),
        o = b.sceneHelper.getSceneParams(e);
      return (
        (t = d(d(d({}, t), R(Ve.value, e, r, je())), o)),
        "turnReply" === e.type4 && (t.news_id = e.replyId),
        t
      );
    },
    nn = function (e, n) {
      var t = d(d({}, n), Je()),
        r = x(!0);
      return (
        (t = d(d({}, t), F(e, r, de.value))),
        Ne.value && (t = d(d({}, t), L(Ve.value, e, t))),
        t
      );
    },
    tn = function (e, n) {
      (e.subject_id = n),
        (e.comment_id = n),
        (e.pageType = o.queryEditor.pageType);
      var t = f(d({}, e), {
        isTurn: "turn" === o.queryEditor.action,
        isTurnReply: "turnReply" === o.queryEditor.type4,
      });
      oe.log("发帖成功通知", t),
        y.NotifyHelper.publishPostNotify(t),
        setTimeout(function () {
          ze();
        }, 1e3);
    },
    rn = function (e, n) {
      (e.commentid = n),
        (e.comment_id = n),
        (e.pageType = o.queryEditor.pageType);
      var t = f(d({}, e), { isReply: se.value, isReplyReply: de.value });
      y.NotifyHelper.publishCommentNotify(t), ze();
    };
  return (
    g.onMounted(function () {
      oe.log("onMounted"),
        !se.value &&
          o.queryEditor.symbol &&
          o.queryEditor.name &&
          ((o.queryEditor.name = decodeURIComponent(o.queryEditor.name)),
          l(o.queryEditor.symbol, o.queryEditor.name),
          g.nextTick$1(function () {
            $();
          })),
        !se.value &&
          o.queryEditor.topicId &&
          o.queryEditor.topic &&
          ((o.queryEditor.topic = decodeURIComponent(o.queryEditor.topic)),
          s(o.queryEditor.topicId, o.queryEditor.topic),
          g.nextTick$1(function () {
            $();
          }));
      var e = b.sceneHelper.getSceneParamsScene(o.queryEditor);
      g.StockBridge.report("".concat(y.HalfEditorPrefix, ".page_brow"), e),
        H(),
        I();
    }),
    g.onUnmounted(function () {
      oe.log("onUnmounted"),
        B(),
        g.nextTick$1(function () {
          T();
        });
    }),
    (function () {
      var e = o.queryEditor,
        n = e.type,
        t = e.id,
        r = e.map_id,
        i = e.newsId;
      (o.queryEditor.id = t || i || ""),
        "news" !== n ||
          (null == r ? void 0 : r.startsWith("news_")) ||
          (o.queryEditor.map_id = "");
    })(),
    d(
      {
        imageSelectList: he,
        isTurnToFriendCircle: Ne,
        query: ue,
        isTransfer: le,
        isReply: se,
        isMainReply: fe,
        replyText: u,
        showEmojiPanel: N,
        sendBtnDisable: Le,
        headImageUrl: Oe,
        placeholder: ae,
        platformClass: ce,
        onPublish: function () {
          return p(
            r,
            null,
            t().mark(function e() {
              var n, r, o;
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (g.StockBridge.report(
                            "".concat(y.HalfEditorPrefix, ".publish_click")
                          ),
                          !Le.value && !Ye)
                        ) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        return (
                          (Ye = !0),
                          (n = {}),
                          (e.prev = 4),
                          (e.next = 7),
                          v.getPreSendInfo({ parent_id: "" })
                        );
                      case 7:
                        (r = e.sent),
                          (o = r.data),
                          (n = o),
                          oe.log("获取发帖token成功 sendTokenObj：", n),
                          (e.next = 15);
                        break;
                      case 12:
                        return (
                          (e.prev = 12),
                          (e.t0 = e.catch(4)),
                          e.abrupt(
                            "return",
                            (oe.log("获取发帖token失败 error：", e.t0),
                            Re(
                              "获取发帖token失败 error： ".concat(e.t0),
                              "fail"
                            ),
                            void (Ye = !1))
                          )
                        );
                      case 15:
                        if (((e.prev = 15), !se.value)) {
                          e.next = 21;
                          break;
                        }
                        return (e.next = 19), Ue(n);
                      case 19:
                        e.next = 28;
                        break;
                      case 21:
                        if (!le.value) {
                          e.next = 26;
                          break;
                        }
                        return (e.next = 24), $e(n);
                      case 24:
                        e.next = 28;
                        break;
                      case 26:
                        return (e.next = 28), De(n);
                      case 28:
                        return (e.prev = 28), (Ye = !1), e.finish(28);
                      case 31:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [4, 12],
                  [15, , 28, 31],
                ]
              );
            })
          );
        },
        onClickHeadImgContainer: function () {
          setTimeout(function () {
            T(), Ke();
          }, 100),
            g.StockBridge.report(
              "".concat(y.HalfEditorPrefix, ".headimg_click")
            ),
            setTimeout(function () {
              ze();
            }, 1e3);
        },
        onClickKBContainer: function (e) {
          Fe(e),
            A(),
            g.StockBridge.report(
              "".concat(y.HalfEditorPrefix, ".keyboard_click")
            );
        },
        onClickAlbumContainer: function (e) {
          Fe(e), Z(!1);
          var n = g.StockBridge.getPlatform().isAndroid;
          ([g.EnvTypeEnum.WZQ, g.EnvTypeEnum.WZQ_LITE].includes(
            g.StockBridge.ENV
          ) &&
            n) ||
            ie(),
            setTimeout(function () {
              be();
            }, 100),
            g.StockBridge.report("".concat(y.HalfEditorPrefix, ".album_click"));
        },
        onClickStockContainer: function (e) {
          Fe(e),
            g.StockBridge.report("".concat(y.HalfEditorPrefix, ".stock_click")),
            ie(),
            Z(!1),
            setTimeout(function () {
              T(), Se();
            }, 100);
        },
        onClickAtContainer: function (e) {
          Fe(e), ie(), Z(!1);
          var n = b.sceneHelper.getSceneParamsScene(o.queryEditor);
          setTimeout(function () {
            T(), Te(n);
          }, 100),
            g.StockBridge.report("".concat(y.HalfEditorPrefix, ".at_click"), n);
        },
        onClickTopicContainer: function (e) {
          Fe(e),
            g.StockBridge.report("".concat(y.HalfEditorPrefix, ".topic_click"));
          var n = C();
          (null == n ? void 0 : n.length) > 0
            ? g.StockBridge.toast("只能选择一个话题", "none")
            : (ie(),
              Z(!1),
              setTimeout(function () {
                T(), Ce();
              }, 100));
        },
        onFunctionAreaTouch: function (e) {
          Fe(e), oe.log("功能区域空白区域被点击，阻止失焦");
        },
        selectEmoji: function (e) {
          var n = U(),
            t = He(e, u.value, n);
          (u.value = t.text),
            D(t.cursor),
            oe.log("selectEmoji cursorP:", n, "result.cursor:", t.cursor);
        },
        selectGif: ke,
        delPicture: ye,
        onThumbBlankArea: function () {
          g.StockBridge.report("".concat(y.HalfEditorPrefix, ".blank_click"));
        },
        onClickCheckBoxContainer: function (e) {
          Fe(e), Ae();
        },
        setTransferData: _e,
        hideEditor: ze,
        onInput: G,
        onShow: function () {
          if ((oe.log("onShow"), ge)) {
            var e = g.StockBridge.ENV === g.EnvTypeEnum.MP ? 200 : 100;
            setTimeout(function () {
              Z(!0);
            }, e);
          }
          g.nextTick$1(function () {
            I();
          });
        },
        onHide: function () {
          oe.log("onHide");
        },
      },
      q
    )
  );
}
var ae = g._default().env.IS_ZXG,
  ce = m.createLogger(),
  ue = {
    name: "HalfscreenEditor",
    components: {
      ThumbImageView: function () {
        return "./thumbImage/thumbImageView.js";
      },
      EmojiPanel: function () {
        return "./emoji-panel/emojiPanel.js";
      },
      handleTransfer: function () {
        return "../../../../newsSbg/@tencent/stock-sq/src/source/handleTransfer/index.js";
      },
    },
    props: {
      queryEditor: {
        type: Object,
        default: function () {
          return {};
        },
      },
      userinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      showMask: { type: Boolean, default: !0 },
    },
    setup: function (e, n) {
      var t,
        r = n.emit,
        o = g.getCurrentInstance().proxy || g.getCurrentInstance(),
        i = g.StockBridge.ENV === g.EnvTypeEnum.MP,
        a = ["mpwzq", "wzqlight"].includes("mpweapp"),
        c = g.ref("light");
      try {
        var u =
          i && (null == (t = g.wx$1) ? void 0 : t.getStorageSync("user/skin"));
        u && (c.value = u);
      } catch (e) {
        ce.error("获取主题失败", e);
      }
      var l = ie(o, e, { emit: r }),
        s = g.computed(function () {
          return l.showEmojiPanel.value || l.emojiPanelHeight.value;
        });
      return f(
        d({ isMp: i, isLite: a, isApp: ae, theme: c, showPanel: s }, l),
        {
          onShow: function () {
            ce.log("onShow"), l.onShow();
          },
          onHide: function () {
            ce.log("onHide"), l.onHide();
          },
        }
      );
    },
  };
Array ||
  (
    g.resolveComponent("ThumbImageView") +
    g.resolveComponent("handleTransfer") +
    g.resolveComponent("EmojiPanel")
  )();
var le = g._export_sfc(ue, [
  [
    "render",
    function (e, n, t, r, o, i) {
      return g.e(
        {
          a: g.o(function () {
            return e.hideEditor && e.hideEditor.apply(e, arguments);
          }, 1450),
          b: g.o(function () {
            return e.hideEditor && e.hideEditor.apply(e, arguments);
          }, 1451),
          c: g.o(function () {}, 1452),
          d: e.headImageUrl,
          e: g.o(function () {
            return (
              e.onClickHeadImgContainer &&
              e.onClickHeadImgContainer.apply(e, arguments)
            );
          }, 1453),
          f: r.isMp,
        },
        r.isMp
          ? {
              g: e.replyText,
              h: e.cursorPosition,
              i: e.placeholder,
              j: e.focus,
              k: -1,
              l: g.o(function () {
                return e.bindfocus && e.bindfocus.apply(e, arguments);
              }, 1454),
              m: g.o(function () {
                return e.bindblur && e.bindblur.apply(e, arguments);
              }, 1455),
              n: g.o(function () {
                return e.onInput && e.onInput.apply(e, arguments);
              }, 1456),
            }
          : {
              o: e.h5ContentOpacity,
              p: e.placeholder,
              q: -1,
              r: g.o(function () {
                return e.bindfocus && e.bindfocus.apply(e, arguments);
              }, 1457),
              s: g.o(function () {
                return e.bindblur && e.bindblur.apply(e, arguments);
              }, 1458),
              t: g.o(
                [
                  [
                    function (n) {
                      return (e.replyText = n.detail.value);
                    },
                    1460,
                  ],
                  [
                    function () {
                      return e.onInput && e.onInput.apply(e, arguments);
                    },
                    1459,
                  ],
                ],
                1461
              ),
              v: e.replyText,
            },
        { w: e.imageSelectList.length },
        e.imageSelectList.length
          ? {
              x: g.o(e.delPicture, 1462),
              y: g.o(e.onThumbBlankArea, 1463),
              z: g.p({ "image-list": e.imageSelectList }),
            }
          : {},
        { A: e.isTransfer },
        e.isTransfer
          ? { B: g.o(e.setTransferData, 1464), C: g.p({ options: e.query }) }
          : {},
        { D: e.isReply },
        e.isReply
          ? g.e(
              {
                E: g.n(e.showEmojiPanel ? "keyboard" : "emoji"),
                F: g.o(function () {
                  return (
                    e.onClickKBContainer &&
                    e.onClickKBContainer.apply(e, arguments)
                  );
                }, 1465),
                G: g.o(function () {
                  return (
                    e.onClickKBContainer &&
                    e.onClickKBContainer.apply(e, arguments)
                  );
                }, 1466),
                H: g.o(function () {
                  return (
                    e.onClickAlbumContainer &&
                    e.onClickAlbumContainer.apply(e, arguments)
                  );
                }, 1467),
                I: g.o(function () {
                  return (
                    e.onClickAlbumContainer &&
                    e.onClickAlbumContainer.apply(e, arguments)
                  );
                }, 1468),
                J: g.o(function () {
                  return (
                    e.onClickAtContainer &&
                    e.onClickAtContainer.apply(e, arguments)
                  );
                }, 1469),
                K: g.o(function () {
                  return (
                    e.onClickAtContainer &&
                    e.onClickAtContainer.apply(e, arguments)
                  );
                }, 1470),
                L: e.isMainReply,
              },
              e.isMainReply
                ? {
                    M: g.n(
                      e.isTurnToFriendCircle
                        ? r.isLite
                          ? "turn-checked-red"
                          : "turn-checked"
                        : "no-turn"
                    ),
                    N: g.o(function () {
                      return (
                        e.onClickCheckBoxContainer &&
                        e.onClickCheckBoxContainer.apply(e, arguments)
                      );
                    }, 1471),
                    O: g.o(function () {
                      return (
                        e.onClickCheckBoxContainer &&
                        e.onClickCheckBoxContainer.apply(e, arguments)
                      );
                    }, 1472),
                    P: g.o(function () {
                      return (
                        e.onClickCheckBoxContainer &&
                        e.onClickCheckBoxContainer.apply(e, arguments)
                      );
                    }, 1473),
                    Q: g.o(function () {
                      return (
                        e.onClickCheckBoxContainer &&
                        e.onClickCheckBoxContainer.apply(e, arguments)
                      );
                    }, 1474),
                    R: g.o(function () {
                      return (
                        e.onClickCheckBoxContainer &&
                        e.onClickCheckBoxContainer.apply(e, arguments)
                      );
                    }, 1475),
                    S: g.o(function () {
                      return (
                        e.onClickCheckBoxContainer &&
                        e.onClickCheckBoxContainer.apply(e, arguments)
                      );
                    }, 1476),
                  }
                : {}
            )
          : {
              T: g.n(e.showEmojiPanel ? "keyboard" : "emoji"),
              U: g.o(function () {
                return (
                  e.onClickKBContainer &&
                  e.onClickKBContainer.apply(e, arguments)
                );
              }, 1477),
              V: g.o(function () {
                return (
                  e.onClickKBContainer &&
                  e.onClickKBContainer.apply(e, arguments)
                );
              }, 1478),
              W: g.o(function () {
                return (
                  e.onClickAlbumContainer &&
                  e.onClickAlbumContainer.apply(e, arguments)
                );
              }, 1479),
              X: g.o(function () {
                return (
                  e.onClickAlbumContainer &&
                  e.onClickAlbumContainer.apply(e, arguments)
                );
              }, 1480),
              Y: g.o(function () {
                return (
                  e.onClickStockContainer &&
                  e.onClickStockContainer.apply(e, arguments)
                );
              }, 1481),
              Z: g.o(function () {
                return (
                  e.onClickStockContainer &&
                  e.onClickStockContainer.apply(e, arguments)
                );
              }, 1482),
              aa: g.o(function () {
                return (
                  e.onClickAtContainer &&
                  e.onClickAtContainer.apply(e, arguments)
                );
              }, 1483),
              ab: g.o(function () {
                return (
                  e.onClickAtContainer &&
                  e.onClickAtContainer.apply(e, arguments)
                );
              }, 1484),
              ac: g.o(function () {
                return (
                  e.onClickTopicContainer &&
                  e.onClickTopicContainer.apply(e, arguments)
                );
              }, 1485),
              ad: g.o(function () {
                return (
                  e.onClickTopicContainer &&
                  e.onClickTopicContainer.apply(e, arguments)
                );
              }, 1486),
            },
        {
          ae: g.n(r.isLite ? "red-bg" : ""),
          af: g.n(e.sendBtnDisable ? "disable" : ""),
          ag: g.o(function () {
            return e.onPublish && e.onPublish.apply(e, arguments);
          }, 1487),
          ah: g.o(function () {
            return e.onPublish && e.onPublish.apply(e, arguments);
          }, 1488),
          ai: g.o(function () {
            return (
              e.onFunctionAreaTouch && e.onFunctionAreaTouch.apply(e, arguments)
            );
          }, 1489),
          aj: g.o(function () {
            return (
              e.onFunctionAreaTouch && e.onFunctionAreaTouch.apply(e, arguments)
            );
          }, 1490),
          ak: e.emojiPanelHeight,
        },
        e.emojiPanelHeight
          ? {
              al: g.o(e.selectEmoji, 1491),
              am: g.o(e.selectGif, 1492),
              an: g.p({ "show-emoji-panel": e.emojiPanelHeight > 0 }),
            }
          : {},
        {
          ao: g.n(r.isApp ? "emoji-container" : ""),
          ap: e.emojiPanelHeight + "px",
          aq: g.n(e.platformClass),
          ar: g.n(r.showPanel ? "" : "safe-area"),
          as: g.n(t.showMask ? "show-mask" : ""),
          at: r.theme,
        }
      );
    },
  ],
  ["__scopeId", "data-v-112ea49a"],
]);
wx.createComponent(le);
var se = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWhhbGZzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvaGFsZnNjcmVlbi1lZGl0b3IudnVl =
  se),
  (exports.albumHelpH5 = _),
  (exports.albumHelpMp = M),
  (exports.emoji = Y);
