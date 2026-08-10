require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  a = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  s = function (t, e, a) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[e] = a);
  },
  c = function (t, n) {
    for (var a in n || (n = {})) o.call(n, a) && s(t, a, n[a]);
    if (u) {
      var r,
        c = e(u(n));
      try {
        for (c.s(); !(r = c.n()).done; ) {
          a = r.value;
          i.call(n, a) && s(t, a, n[a]);
        }
      } catch (t) {
        c.e(t);
      } finally {
        c.f();
      }
    }
    return t;
  },
  l = function (t, e) {
    return a(t, r(e));
  },
  f = require("./index.js"),
  d = require("../../../../../../common/vendor.js"),
  v = function () {
    var t, e, n;
    return "mp" === (null == (t = d.StockBridge) ? void 0 : t.ENV)
      ? c(
          {},
          null ==
            (n = null == (e = d.StockBridge) ? void 0 : e.getCurRouteInfo())
            ? void 0
            : n.query
        )
      : c(
          {},
          (function () {
            var t = location.href,
              e = {},
              n = [],
              a = t.split("?");
            if (1 === a.length) return e;
            (a = a.slice(1)).forEach(function (t) {
              n = n.concat(t.split("&"));
            });
            for (var r = null, u = 0; u < n.length; u++)
              if ((r = n[u].split("="))[0].length > 0) {
                var o = n[u].substring(r[0].length + 1);
                -1 !== o.indexOf("#") && (o = o.split("#")[0]),
                  (e[r[0]] = decodeURIComponent(o));
              }
            return e;
          })()
        );
  },
  p = "1" === v().lite,
  k = {
    inject: { stockBridge: { default: {} } },
    props: { config: { type: Object, default: function () {} } },
    setup: function (e, n) {
      var a = n.emit,
        r = d.getCurrentInstance().proxy || d.getCurrentInstance(),
        u = d.ref(0),
        o = d.ref(0),
        i = d.ref(0),
        s = d.ref(2),
        k = d.ref("继续下个任务"),
        m = d.ref(""),
        g = d.ref("下个任务"),
        y = d.ref(0),
        _ = d.ref([]),
        h = d.ref(!1),
        w = d.ref(!1),
        C = d.ref(!1),
        T = d.ref(!1),
        b = d.ref({}),
        x = d.ref(""),
        B = d.ref("新手"),
        D = d.ref(!1);
      "mp" === r.stockBridge.ENV
        ? (D.value = !1)
        : (D.value = d.dist.detect().env.IS_LITE_MODE);
      function O() {
        (C.value = !0),
          setTimeout(function () {
            (h.value = !1), a("closeDonePop");
          }, 340);
      }
      function E() {
        a("drawCash", { package_name: x.value });
      }
      return (
        "",
        (function () {
          return (
            (n = this),
            null,
            (a = t().mark(function () {
              var n, a, r, v, p, C, T, D, O, E, j, F, I, P, S, q, L, N, R, A;
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = e.config || {}),
                        (v =
                          null == (n = r.task_list)
                            ? void 0
                            : n.filter(function (t) {
                                return "new" === t.package_name;
                              })[0]),
                        (p =
                          null == (a = r.task_list)
                            ? void 0
                            : a.filter(function (t) {
                                return "pro" === t.package_name;
                              })[0]),
                        (C = null == v ? void 0 : v.status),
                        (T = null == p ? void 0 : p.status),
                        (D = v.tasks.filter(function (t) {
                          return 1 === t.status;
                        })),
                        (O = p.tasks.filter(function (t) {
                          return 1 === t.status;
                        })),
                        (E = 0),
                        D.forEach(function (t) {
                          E = parseFloat(t.reward_desc.replace("元", "")) + E;
                        }),
                        (j = 0),
                        O.forEach(function (t) {
                          j = parseFloat(t.reward_desc.replace("元", "")) + j;
                        }),
                        (t.next = 7),
                        f.getNewCustomConf()
                      );
                    case 7:
                      (F = t.sent),
                        !C || (C && O.length > 0 && !T)
                          ? C
                            ? ((u.value = j.toFixed(2)),
                              (i.value = O.length),
                              (o.value = 5 - O.length),
                              (s.value = 3),
                              (x.value = p.package_name),
                              (I = p.tasks.filter(function (t) {
                                return 0 === t.status;
                              })[0]),
                              (P = F.filter(function (t) {
                                return t.tid === I.tid;
                              })[0]),
                              (b.value = l(c(c({}, P), I), {
                                tasktype: "custom",
                                actid: "",
                              })),
                              (g.value = "下个任务：".concat(P.desc)),
                              (k.value = "继续下个任务"),
                              (S = p.tasks),
                              (_.value = S.sort(function (t, e) {
                                return e.status - t.status;
                              })))
                            : ((u.value = E.toFixed(2)),
                              (i.value = D.length),
                              (o.value = 5 - D.length),
                              (s.value = 2),
                              (x.value = v.package_name),
                              (q = v.tasks.filter(function (t) {
                                return 0 === t.status;
                              })[0]),
                              (L = F.filter(function (t) {
                                return t.tid === q.tid;
                              })[0]),
                              (b.value = l(c(c({}, L), q), {
                                tasktype: "custom",
                                actid: "",
                              })),
                              (g.value = "下个任务：".concat(L.desc)),
                              (k.value = "继续下个任务"),
                              (N = v.tasks),
                              (_.value = N.sort(function (t, e) {
                                return e.status - t.status;
                              })))
                          : (C || T) &&
                            ((y.value = 1),
                            C && !T
                              ? ((s.value = 2),
                                (g.value = "继续完成进阶任务，奖励3元红包"),
                                (k.value = "继续进阶任务"),
                                (R = p.tasks.filter(function (t) {
                                  return 0 === t.status;
                                })[0]),
                                (A = F.filter(function (t) {
                                  return t.tid === R.tid;
                                })[0]),
                                (b.value = l(c(c({}, A), R), {
                                  tasktype: "custom",
                                  actid: "",
                                })),
                                (m.value = 1 === v.status ? "直接提现" : ""),
                                (x.value = v.package_name))
                              : ((s.value = 3),
                                (g.value = ""),
                                (k.value = 1 === p.status ? "提现红包" : ""),
                                (x.value = p.package_name),
                                (m.value = "返回"),
                                (B.value = "进阶"))),
                        (h.value = !0),
                        setTimeout(function () {
                          w.value = !0;
                        }, 300),
                        d.nextTick$1(function () {});
                    case 10:
                    case "end":
                      return t.stop();
                  }
              }, r);
            })),
            new Promise(function (t, e) {
              var r = function (t) {
                  try {
                    o(a.next(t));
                  } catch (t) {
                    e(t);
                  }
                },
                u = function (t) {
                  try {
                    o(a.throw(t));
                  } catch (t) {
                    e(t);
                  }
                },
                o = function (e) {
                  return e.done
                    ? t(e.value)
                    : Promise.resolve(e.value).then(r, u);
                };
              o((a = a.apply(n, null)).next());
            })
          );
          var n, a;
        })(),
        {
          popStatus: y,
          undoneTaskCount: o,
          doneTaskCount: i,
          canDrawCoin: s,
          firstBtnText: k,
          secBtnText: m,
          nextTaskDesc: g,
          curCoin: u,
          taskList: _,
          readyFlag: h,
          maskAppear: w,
          maskDisappear: C,
          close: O,
          showFlowerLottie: T,
          firstBtnClick: function () {
            var t, e;
            (null == (t = k.value) ? void 0 : t.includes("继续"))
              ? (r.stockBridge.report(
                  "yy.custom_task.do_task."
                    .concat(x.value, "_")
                    .concat(b.value.tid)
                ),
                r.stockBridge.ENV === d.EnvTypeEnum.MP
                  ? r.stockBridge.busEmit(
                      "growth-custom-task-on",
                      l(c({ actid: "", tasktype: "custom" }, b.value), {
                        done: !1,
                        visible: !0,
                      })
                    )
                  : (function (t) {
                      var e = t.conf,
                        n =
                          p && e.link_lite_undone
                            ? e.link_lite_undone
                            : e.link_undone,
                        a = {
                          act_id: t.id,
                          act_tid: t.tid,
                          act_actid: t.actid,
                          stat_data: v().stat || v().stat_data || "",
                          act_url: encodeURIComponent(location.href),
                          act_tasktype: "custom",
                        },
                        r = d.dist.urltools.param.make(a);
                      setTimeout(function () {
                        (null == window ? void 0 : window.$location) &&
                          (window.$location.href = "".concat(n, "?").concat(r));
                      }, 300);
                    })(b.value))
              : (null == (e = k.value) ? void 0 : e.includes("提现")) && E(),
              O();
          },
          secBtnClick: function () {
            var t;
            (null == (t = m.value) ? void 0 : t.includes("提现")) && E(), O();
          },
          doneTaskType: B,
          lite: D,
        }
      );
    },
  },
  m = d._export_sfc(k, [
    [
      "render",
      function (t, e, n, a, r, u) {
        return d.e(
          { a: a.readyFlag },
          a.readyFlag
            ? d.e(
                {
                  b: a.showFlowerLottie,
                  c: d.n(1 === a.popStatus ? "all-done" : ""),
                  d: d.o(function () {
                    return a.close && a.close.apply(a, arguments);
                  }, 3247),
                  e: 0 === a.popStatus,
                },
                0 === a.popStatus
                  ? {
                      f: d.t(a.curCoin),
                      g: d.t(a.undoneTaskCount),
                      h: d.t(a.canDrawCoin),
                      i: d.f(a.taskList, function (t, e, n) {
                        return d.e(
                          { a: t.status },
                          t.status ? { b: d.t(t.reward_desc) } : {},
                          { c: e, d: d.n(t.status ? "red" : "empty") }
                        );
                      }),
                      j: d.n(a.doneTaskCount >= 1 ? "activated" : ""),
                      k: d.f(4, function (t, e, n) {
                        return {
                          a: t + "line",
                          b: d.n(e <= a.doneTaskCount - 2 ? "activated" : ""),
                          c: t + "dot",
                          d: d.n(e <= a.doneTaskCount - 2 ? "activated" : ""),
                          e: e,
                        };
                      }),
                    }
                  : {
                      l: d.t(a.doneTaskType),
                      m: d.t(a.canDrawCoin),
                      n: d.t(a.canDrawCoin),
                    },
                { o: a.nextTaskDesc },
                a.nextTaskDesc ? { p: d.t(a.nextTaskDesc) } : {},
                {
                  q: d.t(a.firstBtnText),
                  r: d.o(function () {
                    return (
                      a.firstBtnClick && a.firstBtnClick.apply(a, arguments)
                    );
                  }, 3248),
                  s: a.secBtnText,
                },
                a.secBtnText
                  ? {
                      t: d.t(a.secBtnText),
                      v: d.o(function () {
                        return (
                          a.secBtnClick && a.secBtnClick.apply(a, arguments)
                        );
                      }, 3249),
                    }
                  : {},
                {
                  w: a.maskAppear ? 1 : "",
                  x: a.maskDisappear ? 1 : "",
                  y: a.lite ? "" : 1,
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-adf8dd21"],
  ]);
wx.createComponent(m);
