var e = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = function (e, n, t) {
    return new Promise(function (r, u) {
      var a = function (e) {
          try {
            i(t.next(e));
          } catch (e) {
            u(e);
          }
        },
        o = function (e) {
          try {
            i(t.throw(e));
          } catch (e) {
            u(e);
          }
        },
        i = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, o);
        };
      i((t = t.apply(e, n)).next());
    });
  },
  u = require("../../../../../common/vendor.js"),
  a = "https://wzq.tenpay.com",
  o = "".concat(a, "/svr/stock/wzq_stock_adapter/save_user_record"),
  i = "".concat(a, "/svr/stock/wzq_stock_adapter/get_user_record");
function c() {
  return r(
    this,
    null,
    t().mark(function e() {
      var n, r, a;
      return t().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.prev = 0),
                  (n = "https://wzq.tenpay.com/cgi-bin/userinfo.fcgi?t=".concat(
                    Date.now()
                  )),
                  (r = { dealer: 1, detail: 1 }),
                  u.StockBridge.ENV === u.EnvTypeEnum.MP &&
                    void 0 !== u.wx$1 &&
                    ((r.qluin = u.wx$1.getStorageSync("_qluin")),
                    (r.qlskey = u.wx$1.getStorageSync("_qlskey"))),
                  (e.next = 5),
                  u.StockBridge.request(n, u.RequestTypeEnum.GET, r)
                );
              case 5:
                return (
                  (a = e.sent),
                  e.abrupt("return", (null == a ? void 0 : a.data) || a)
                );
              case 9:
                return (
                  (e.prev = 9), (e.t0 = e.catch(0)), e.abrupt("return", null)
                );
              case 12:
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
var s = {
    1: "id_card",
    2: "id_card",
    9: "id_card",
    3: "personal_info",
    4: "video_record",
    5: "bank_card",
    6: "password",
    7: "risk_assessment",
    8: "submit_confirm",
    10: "face_recognition",
  },
  l = {
    id_card: "身份证环节",
    personal_info: "个人信息环节",
    video_record: "视频录制环节",
    bank_card: "银行卡环节",
    password: "密码设置环节",
    risk_assessment: "风险测评环节",
    submit_confirm: "提交确认环节",
    face_recognition: "人脸识别环节",
  };
function p() {
  return u.StockBridge.ENV === u.EnvTypeEnum.MP;
}
function d() {
  var e = u.ref(!1),
    a = u.ref(""),
    d = u.ref(!1),
    f = null;
  function v() {
    return r(
      this,
      null,
      t().mark(function e() {
        return t().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  "return",
                  p()
                    ? (function () {
                        try {
                          return (null == f ? void 0 : f.openid)
                            ? f.openid
                            : u.wx$1.getStorageSync("_qluin") || "";
                        } catch (e) {
                          return "";
                        }
                      })()
                    : getOpenidInH5()
                );
              case 1:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  }
  var m = "",
    h = "",
    g = "",
    b = "";
  function k() {
    return r(
      this,
      null,
      t().mark(function e() {
        var n;
        return t().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.prev = 0), (e.next = 3), c();
                case 3:
                  return (
                    (n = e.sent), e.abrupt("return", n ? ((f = n), n) : null)
                  );
                case 7:
                  return (
                    (e.prev = 7), (e.t0 = e.catch(0)), e.abrupt("return", null)
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
  }
  function _() {
    return r(
      this,
      null,
      t().mark(function e() {
        var a, o, i, c, l;
        return t().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    (function () {
                      return r(
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
                                      ((e.prev = 0),
                                      !(r = u.StockBridge.tradeFunc))
                                    ) {
                                      e.next = 8;
                                      break;
                                    }
                                    return (e.next = 5), r.fetchBrokerInfo();
                                  case 5:
                                    (e.t0 =
                                      (null == (n = r.getApplyList)
                                        ? void 0
                                        : n.call(r)) || []),
                                      (e.next = 9);
                                    break;
                                  case 8:
                                    e.t0 = null;
                                  case 9:
                                    return e.abrupt("return", e.t0);
                                  case 12:
                                    return (
                                      (e.prev = 12),
                                      (e.t1 = e.catch(0)),
                                      e.abrupt("return", null)
                                    );
                                  case 15:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 12]]
                          );
                        })
                      );
                    })()
                  );
                case 3:
                  if ((a = e.sent)) {
                    e.next = 6;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 6:
                  if (
                    0 !==
                    (o = a.filter(function (e) {
                      var n = String(e.apply_step || "");
                      return n && "0" !== n && s[n];
                    })).length
                  ) {
                    e.next = 9;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 9:
                  return (
                    o.sort(function (e, n) {
                      var t = Number(e.modify_time) || 0;
                      return (Number(n.modify_time) || 0) - t;
                    }),
                    (i = n(o, 1)),
                    (c = i[0]),
                    (m = String(c.code || "")),
                    (h = String(c.name || "")),
                    (g = String(c.apply_step || "")),
                    (l = (function () {
                      var e = u.StockBridge.tradeFunc;
                      return (
                        (e &&
                          "function" == typeof e.getApplyProcessList &&
                          e.getApplyProcessList()) ||
                        []
                      );
                    })().find(function (e) {
                      return String(e.code) === m;
                    })),
                    e.abrupt(
                      "return",
                      ((b = String(
                        (null == l ? void 0 : l.remain_steps) || ""
                      )),
                      !0)
                    )
                  );
                case 16:
                  return (
                    (e.prev = 16), (e.t0 = e.catch(0)), e.abrupt("return", !1)
                  );
                case 19:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[0, 16]]
        );
      })
    );
  }
  function y() {
    return r(
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
                    (e.next = 3),
                    (function (e) {
                      return r(
                        this,
                        null,
                        t().mark(function e() {
                          return t().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    "return",
                                    u.StockBridge.request(
                                      i,
                                      u.RequestTypeEnum.GET,
                                      { biz_key: "first_open_account_survey" }
                                    )
                                  );
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                    })()
                  );
                case 3:
                  return (
                    (n = e.sent),
                    e.abrupt("return", !(null == n ? void 0 : n.exists))
                  );
                case 7:
                  return (
                    (e.prev = 7), (e.t0 = e.catch(0)), e.abrupt("return", !1)
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
  }
  var w = null,
    x = null,
    S = "__survey_dismissed__";
  function q() {
    return r(
      this,
      null,
      t().mark(function o() {
        var i, c, l, p, h, b;
        return t().wrap(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  if (u.StockBridge.getStorage(S) || e.value || !d.value) {
                    o.next = 40;
                    break;
                  }
                  return (o.prev = 1), (o.next = 4), Promise.all([k(), _()]);
                case 4:
                  if (
                    ((i = o.sent), (c = n(i, 2)), (l = c[0]), (p = c[1]), l)
                  ) {
                    o.next = 10;
                    break;
                  }
                  return o.abrupt("return");
                case 10:
                  return (
                    (o.next = 12),
                    (function () {
                      return r(
                        this,
                        null,
                        t().mark(function e() {
                          var n, r, a;
                          return t().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      u.Wuji.get({
                                        appid: "act",
                                        schemaid: "yy_config",
                                        filter: encodeURIComponent(
                                          "yy_key = 'yy_apply_survey_switch'"
                                        ),
                                      })
                                    );
                                  case 3:
                                    return (
                                      (n = e.sent),
                                      (r = n.code),
                                      (a = n.data),
                                      e.abrupt(
                                        "return",
                                        200 == +r && a && a.length > 0
                                          ? JSON.parse(a[0].jval)
                                          : null
                                      )
                                    );
                                  case 9:
                                    return (
                                      (e.prev = 9),
                                      (e.t0 = e.catch(0)),
                                      e.abrupt("return", null)
                                    );
                                  case 12:
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
                    })()
                  );
                case 12:
                  if ((h = o.sent)) {
                    o.next = 15;
                    break;
                  }
                  return o.abrupt("return");
                case 15:
                  return (
                    (b = Number(h.mpzxg) || 0),
                    (o.t0 = function (e, n) {
                      return (
                        !(!e || n <= 0) &&
                        (n >= 100 ||
                          (function (e) {
                            for (var n = 5381, t = 0; t < e.length; t++)
                              n = ((n << 5) + n + e.charCodeAt(t)) >>> 0;
                            return n;
                          })(e) %
                            100 <
                            n)
                      );
                    }),
                    (o.next = 19),
                    v()
                  );
                case 19:
                  if (((o.t1 = o.sent), (o.t2 = b), (0, o.t0)(o.t1, o.t2))) {
                    o.next = 23;
                    break;
                  }
                  return o.abrupt("return");
                case 23:
                  if (p) {
                    o.next = 25;
                    break;
                  }
                  return o.abrupt("return");
                case 25:
                  if (1 === Number(null == f ? void 0 : f.user_new_days)) {
                    o.next = 27;
                    break;
                  }
                  return o.abrupt("return");
                case 27:
                  if (Boolean(g)) {
                    o.next = 29;
                    break;
                  }
                  return o.abrupt("return");
                case 29:
                  if (
                    (function () {
                      if (!g) return !1;
                      var e = s[g];
                      return !!e && ((a.value = e), !0);
                    })()
                  ) {
                    o.next = 31;
                    break;
                  }
                  return o.abrupt("return");
                case 31:
                  return (o.next = 33), y();
                case 33:
                  if (o.sent) {
                    o.next = 35;
                    break;
                  }
                  return o.abrupt("return");
                case 35:
                  (e.value = !0),
                    u.StockBridge.mtaReport({
                      busi: "trade",
                      routeName: "applyindex",
                      eventName: "account_opening_questionnaire_brow",
                      params: { step: a.value, broker_code: m },
                    }),
                    (o.next = 40);
                  break;
                case 38:
                  (o.prev = 38), (o.t3 = o.catch(1));
                case 40:
                case "end":
                  return o.stop();
              }
          },
          o,
          null,
          [[1, 38]]
        );
      })
    );
  }
  return (
    u.onMounted(function () {
      p() ||
        ("undefined" != typeof document &&
          ((w = function () {
            "visible" === document.visibilityState && ((d.value = !0), q());
          }),
          document.addEventListener("visibilitychange", w)),
        "undefined" != typeof window &&
          ((x = function (e) {
            (e.persisted ||
              (window.performance &&
                2 === window.performance.navigation.type)) &&
              ((d.value = !0), q());
          }),
          window.addEventListener("pageshow", x)));
    }),
    u.onBeforeUnmount(function () {
      w &&
        "undefined" != typeof document &&
        (document.removeEventListener("visibilitychange", w), (w = null)),
        x &&
          "undefined" != typeof window &&
          (window.removeEventListener("pageshow", x), (x = null));
    }),
    {
      isShowSurvey: e,
      currentSurveyStep: a,
      tryShowSurvey: q,
      onPageShow: function () {
        (d.value = !0), q();
      },
      submitSurvey: function (n) {
        return r(
          this,
          null,
          t().mark(function i() {
            var c;
            return t().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return (
                        (i.prev = 0),
                        (c = JSON.stringify({
                          broker: {
                            remainSteps: b
                              ? b.split(",").filter(Boolean).length
                              : 0,
                            brokerCode: m,
                            brokerName: h,
                            statData: "",
                          },
                          stepName: l[a.value] || "",
                          reasonList: n.tags || [],
                          otherRemark: n.content || "",
                          userAgent: "",
                        })),
                        (i.next = 4),
                        (function (e, n) {
                          return r(
                            this,
                            null,
                            t().mark(function e() {
                              return t().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return e.abrupt(
                                        "return",
                                        u.StockBridge.request(
                                          o,
                                          u.RequestTypeEnum.POST,
                                          {
                                            biz_key:
                                              "first_open_account_survey",
                                            record_data: n,
                                          },
                                          {
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                            },
                                          }
                                        )
                                      );
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                        })(0, c)
                      );
                    case 4:
                      (e.value = !1),
                        u.StockBridge.setStorage(S, "1"),
                        p()
                          ? u.wx$1.showToast({
                              title: "感谢反馈",
                              icon: "success",
                              duration: 2e3,
                            })
                          : u.StockBridge.toast(
                              '<div style="display:flex;flex-direction:column;align-items:center;"><img src="https://st.gtimg.com/design/6d6a2a4f2ecee7470c64359adbb0d037.png" style="width:1.1733rem;height:1.1733rem;" /><div style="margin-top:.1067rem;text-align:center;">感谢反馈，我们会持续优化</div></div>',
                              "none",
                              {
                                contentStyle: {
                                  width: "128px",
                                  padding: "16px 16px",
                                  background: "rgba(0, 0, 0, .6)",
                                },
                              }
                            ),
                        (i.next = 12);
                      break;
                    case 9:
                      (i.prev = 9),
                        (i.t0 = i.catch(0)),
                        p()
                          ? u.wx$1.showToast({
                              title: "提交失败",
                              icon: "none",
                              duration: 2e3,
                            })
                          : u.StockBridge.toast("提交失败，请重试", "none");
                    case 12:
                    case "end":
                      return i.stop();
                  }
              },
              i,
              null,
              [[0, 9]]
            );
          })
        );
      },
      closeSurvey: function () {
        (e.value = !1), u.StockBridge.setStorage(S, "1");
      },
    }
  );
}
var f = {
    bank_card: [
      "银行卡没在身边",
      "担心信息安全",
      "还没想好要不要开户",
      "现在没时间",
      "其他",
    ],
    id_card: [
      "识别总是失败",
      "身份证不在身边",
      "身份证已过期",
      "现在没时间",
      "其他",
    ],
    personal_info: [
      "要填的内容太多",
      "有些信息看不懂填写要求",
      "不想填某些隐私信息",
      "一会儿再提交",
      "其他",
    ],
    face_recognition: [
      "多次尝试均失败",
      "拍摄环境不合适",
      "摄像头有问题",
      "现在不方便露脸",
      "其他",
    ],
    video_record: [
      "不知道怎么录制",
      "录了几次都没通过",
      "周围环境不合适",
      "其他",
    ],
    password: ["不清楚密码用途", "怕设置后记不住", "一会儿再提交", "其他"],
    risk_assessment: [
      "题目太专业、难懂",
      "题目太多了",
      "不明白做测评目的",
      "一会儿再提交",
      "其他",
    ],
    submit_confirm: [
      "想核对填写信息",
      "想看开户协议",
      "还在犹豫要不要开",
      "一会儿再提交",
      "其他",
    ],
  },
  v = u.defineComponent({
    name: "SurveyQuestionnaire",
    setup: function () {
      var n = this,
        a = d(),
        o = a.isShowSurvey,
        i = a.currentSurveyStep,
        c = a.onPageShow,
        s = a.submitSurvey,
        l = a.closeSurvey,
        p = u.ref(!0),
        v = u.ref([]),
        m = u.ref(""),
        h = null,
        g = !1,
        b = u.computed(function () {
          return o.value;
        }),
        k = u.computed(function () {
          var e = i.value;
          return e && f[e] ? f[e] : f.bank_card;
        }),
        _ = u.computed(function () {
          return v.value.length > 0 || m.value.trim().length > 0;
        });
      return (
        u.onBeforeUnmount(function () {
          h && (clearTimeout(h), (h = null));
        }),
        {
          isVisible: b,
          showContent: p,
          selectedTags: v,
          inputValue: m,
          isFormValid: _,
          computedTags: k,
          handleTagClick: function (e) {
            var n = v.value.indexOf(e);
            n > -1 ? v.value.splice(n, 1) : v.value.push(e);
          },
          handleInput: function (e) {
            var n = e.target;
            n.value.length >= 200 &&
              u.StockBridge.toast("最多输入200字", "none"),
              (m.value = n.value.slice(0, 200));
          },
          handleSubmit: function () {
            return r(
              n,
              null,
              t().mark(function n() {
                return t().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (!_.value) {
                          n.next = 6;
                          break;
                        }
                        return (
                          (n.next = 3),
                          s({ tags: e(v.value), content: m.value })
                        );
                      case 3:
                        u.StockBridge.mtaReport({
                          busi: "trade",
                          routeName: "applyindex",
                          eventName: "account_opening_questionnaire_click",
                          params: {
                            tags: v.value.join(","),
                            has_content: m.value ? "1" : "0",
                          },
                        }),
                          (n.next = 7);
                        break;
                      case 6:
                        u.StockBridge.toast(
                          "请至少选择一个选项或填写反馈",
                          "none"
                        );
                      case 7:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
          },
          handleMaskClose: function () {
            g ||
              ((g = !0),
              (p.value = !1),
              (h = setTimeout(function () {
                l(),
                  (v.value = []),
                  (m.value = ""),
                  (p.value = !0),
                  (g = !1),
                  (h = null);
              }, 300)),
              u.StockBridge.mtaReport({
                busi: "trade",
                routeName: "applyindex",
                eventName: "account_opening_questionnaire_close",
              }));
          },
          onPageShow: c,
        }
      );
    },
  }),
  m = u._export_sfc(v, [
    [
      "render",
      function (e, n, t, r, a, o) {
        return u.e(
          { a: e.isVisible },
          e.isVisible
            ? {
                b: u.o(function () {
                  return (
                    e.handleMaskClose && e.handleMaskClose.apply(e, arguments)
                  );
                }, 3416),
                c: u.f(e.computedTags, function (n, t, r) {
                  return {
                    a: u.t(n),
                    b: n,
                    c: e.selectedTags.includes(n) ? 1 : "",
                    d: u.o(
                      function (t) {
                        return e.handleTagClick(n);
                      },
                      3417,
                      n
                    ),
                  };
                }),
                d: e.inputValue,
                e: u.o(function () {
                  return e.handleInput && e.handleInput.apply(e, arguments);
                }, 3418),
                f: u.t(e.inputValue.length),
                g: e.inputValue.length >= 200 ? 1 : "",
                h: e.isFormValid ? 1 : "",
                i: u.o(function () {
                  return e.handleSubmit && e.handleSubmit.apply(e, arguments);
                }, 3419),
                j: u.n(
                  e.showContent
                    ? "questionnaire-mask__content--up"
                    : "questionnaire-mask__content--down"
                ),
                k: u.o(function () {}, 3420),
                l: u.n(
                  e.showContent
                    ? "questionnaire-mask--in"
                    : "questionnaire-mask--out"
                ),
                m: u.o(function () {
                  return (
                    e.handleMaskClose && e.handleMaskClose.apply(e, arguments)
                  );
                }, 3421),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-b3f780ae"],
  ]);
wx.createComponent(m);
