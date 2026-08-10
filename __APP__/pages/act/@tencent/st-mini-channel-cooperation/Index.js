var e = require("../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  o = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  u = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  p = function (e, t) {
    for (var n in t || (t = {})) c.call(t, n) && u(e, n, t[n]);
    if (a) {
      var o,
        i = r(a(t));
      try {
        for (i.s(); !(o = i.n()).done; ) {
          n = o.value;
          s.call(t, n) && u(e, n, t[n]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  l = function (e, t) {
    return o(e, i(t));
  },
  f = function (e, t, r) {
    return new Promise(function (n, o) {
      var i = function (e) {
          try {
            c(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          try {
            c(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(i, a);
        };
      c((r = r.apply(e, t)).next());
    });
  },
  g = require("../../../../common/vendor.js"),
  d = { headers: { "Content-Type": "application/json" }, forceCallback: !0 },
  b = "https://".concat(
    "mp" !== g.StockBridge.ENV ? location.host : "wzq.tenpay.com",
    "/"
  ),
  m = "zxgxcx",
  v = { ineligibility: 0, normal: 1, received: 2 },
  h = ["ineligibility", "normal", "received"],
  y = "channel_cooperation",
  w = {
    templateId:
      "w7J3XRq7QWXgHAYF6eASEXpXU_4gly016xICl3TRz6Q,2P-qd_fykwKPONTwWvd5wyPc83-_WV3hkexSACF7s34,Ules4Gf-OofCmhgqldm1eeeBNdxPiVhNpByVWvoxYRo",
    rule: '<p>本活动由中国工商银行、中国银行主办。券商服务由合作券商提供。技术服务由腾讯微证券提供。</p><p>本活动所指银证签约即投资者交易结算资金第三方存管业务，投资者进行证券交易时，交易结算资金由三方存管银行进行存管和管理，并由银行负责资金的安全和监管。</p><p>绑卡页面出现<strong>得20元立减金</strong>标识则代表用户享有奖励资格。本活动仅限微信支付已绑定中国工商银行/中国银行一类借记卡，且未绑定过银证账户的用户可参与。过往已激活过、本次重新绑定的用户无法获得奖励。</p><p>用户需从本活动页面点击"点此签约 解锁福利"按钮参与活动，并在点击后7日内成功提交所有信息、完成银行卡绑定，方可获得奖励；</p><p>本次活动奖品为20元微信支付立减金券，消费满20.01元可用；</p><p>微信支付立减金券有效期可在券详情页面查看，需在券显示有效期内使用，过期自动失效；</p><p>使用微信支付缴费，优惠券在支付页面选择使用，选择使用后将自动抵扣；</p><p>该券可通过微信「我-订单与卡包-优惠券」进行查看与使用卡券；</p><p>立减金仅限商业支付时使用，转账、理财等少数特定商户不可使用;</p><p>多张立减金可在单笔微信支付订单中一起使用，但当用户的立减金超过8张时，系统会选取其中一部分使用，不保证在一张订单中全部使用;</p><p>退款规则:如在券有效期内，当订单部分退款时，立减金资金按比例退还给用户，用户可继续使用。如在券有效期内用户再次部分退款至整单退完，则会将立减金剩余部分退还给用户，用户可继续使用。如券已过期，立减金将不退还给用户;</p><p>用户如对本次活动有任何疑问，可联系活动主办方客服。活动中如对工商银行三方存管业务有疑问，请致电服务热线95588；如对中国银行三方存管业务疑问，请致电服务热线95566；如对招商证券账户业务相关疑问请致电服务热线95565。</p>',
    channel: "twenty_continue_mini",
    button: {
      normal: { text: "点此签约 解锁福利", bgColor: "btn-red" },
      received: { text: "点此签约 解锁福利", bgColor: "btn-red" },
      ineligibility: { text: "点此签约 解锁福利", bgColor: "btn-gray" },
    },
    broker: "10800",
    stat: "",
    otherActivity: {
      img: "https://res-cdn.tencentwm.com/17036828327914115.png",
      title: "福利中心更多活动火热进行中，快来参加吧",
      jumplink:
        "https://wzq.tenpay.com/activity/page/welwareCenterNew/#/index?stat_data=",
    },
    popConfig: {
      received: {
        desc: "您已获得20元微信立减金，请前往微信「我-订单与卡包-优惠券」中查看~请注意在有效期内使用",
        type: "received",
        btnText: "去微证券领更多福利",
      },
      ineligibility: {
        desc: "抱歉，您不符合参加活动条件！<br/>本次无法获得20元微信立减金",
        type: "ineligibility",
        btnText: "去微证券领更多福利",
      },
    },
    joinedConfig: {
      header:
        "https://st.gtimg.com/design/f1c2740f1de1677ec99ef88b563354c6.png",
    },
    showJoined: 0,
    uiConfig: {
      header:
        "https://st.gtimg.com/design/f1c2740f1de1677ec99ef88b563354c6.png",
      award: "https://st.gtimg.com/design/555cd8940a26e61e354e1fbee906bf39.png",
      flow: "https://st.gtimg.com/design/200d5a4136c0d8c65c65e2bfb8867da0.png",
      bank: "https://st.gtimg.com/design/70adb1186258e8508b604675ea435d80.png",
    },
    shareConfig: { title: "工行、中行特邀用户专享福利" },
    desc: "20元微信立减金",
  },
  _ = {
    components: {
      rule: function () {
        return "./components/rule.js";
      },
      headerImg: function () {
        return "./components/headerImg.js";
      },
      applyButton: function () {
        return "./components/applyButton.js";
      },
      finishPopup: function () {
        return "./components/finishPopup.js";
      },
      errorPopup: function () {
        return "./components/errorPopup.js";
      },
    },
    props: { stat: { type: String, default: "" } },
    setup: function (r, n) {
      var o = this,
        i = n.emit,
        a = g.inject("stockBridge"),
        c = g.inject("mpReporter"),
        s = g.getCurrentInstance().proxy || g.getCurrentInstance(),
        u = g.ref({ act_status: "" }),
        m = g.ref({}),
        _ = g.computed(function () {
          return (
            +u.value.act_status === v.ineligibility ||
            +u.value.act_status === v.received
          );
        }),
        x = g.computed(function () {
          return +u.value.act_status === v.received && m.value.showJoined;
        });
      function C() {
        return f(
          this,
          null,
          t().mark(function e() {
            var n, o, a, c;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (n = g.wx$1.getStorageSync(y)) &&
                          (m.value = JSON.parse(n)),
                        (e.next = 5),
                        g.Wuji.get({
                          appid: "act",
                          schemaid: "channel_cooperation",
                          filter: encodeURIComponent(
                            'stat=["'.concat(r.stat, '"]')
                          ),
                        })
                      );
                    case 5:
                      if (
                        ((o = e.sent),
                        (a = o.data),
                        200 == +o.code && a && a.length)
                      ) {
                        e.next = 10;
                        break;
                      }
                      throw new Error(
                        "Wuji data is empty, stat: ".concat(r.stat)
                      );
                    case 10:
                      ((c = a[0] || {}).rule = JSON.parse(c.rule).content),
                        (m.value = c),
                        i("message", m.value.shareConfig),
                        g.wx$1.setStorageSync(y, JSON.stringify(c)),
                        (e.next = 17);
                      break;
                    case 14:
                      (e.prev = 14),
                        (e.t0 = e.catch(0)),
                        (m.value = w),
                        i("message", m.value.shareConfig),
                        N("WZQMINI-WUJI-FAIL", { ext2: JSON.stringify(e.t0) });
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 14]]
            );
          })
        );
      }
      function j() {
        return f(
          this,
          null,
          t().mark(function e() {
            var r;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        g.StockBridge.request(
                          b +
                            "svr/activity/simple_activity/guide_choose_bank_home",
                          g.RequestTypeEnum.GET,
                          d
                        )
                          .then(function (e) {
                            return e;
                          })
                          .catch(function (e) {
                            return e;
                          })
                      );
                    case 3:
                      return (
                        (r = e.sent), e.abrupt("return", ((u.value = r), r))
                      );
                    case 7:
                      (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        S(),
                        P("error_popup_brow"),
                        N("WZQMINI-CHANNEL-HOME-FAIL", {
                          ext2: JSON.stringify(e.t0),
                        });
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
      function S(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = {},
          o = "";
        e === h[u.value.act_status]
          ? ((n = (m.value.popConfig && m.value.popConfig[e]) || {}),
            (o = m.value.otherActivity.jumplink))
          : ((n = {
              btnText: "立即前往",
              desc: t
                ? "".concat(t, "，如有疑问，请联系客服")
                : "活动开小差了，如有疑问，请联系客服",
            }),
            (o =
              "https://wzq.tenpay.com/wzq/aics-cloud/xiaomi/page.do?channel=17&entry=zxg_applet&tochat=1&stat_data=")),
          s.$refs.errorPopup &&
            s.$refs.errorPopup.showPopup(
              l(p({ type: e }, n), {
                btnFn: function () {
                  P("".concat(e, "_popup_click")),
                    g.wx$1.navigateTo({
                      url: "/pages/act/webview/main?url=".concat(
                        encodeURIComponent(o + r.stat)
                      ),
                    });
                },
              })
            );
      }
      function P(e, t) {
        a &&
          a.report &&
          a.report("yy.".concat(m.value.channel, ".").concat(e), t);
      }
      function N(e, t) {
        c &&
          c.reportEvent &&
          c.reportEvent(
            e,
            l(p({}, t), { ext1: r.stat, ext3: m.value.channel })
          );
      }
      return (
        g.onMounted(function () {
          return f(
            o,
            null,
            t().mark(function r() {
              var n, o, i, a, c, u, p;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0), (t.next = 3), Promise.all([j(), C()])
                        );
                      case 3:
                        if (
                          ((n = t.sent),
                          (o = e(n, 1)),
                          (i = o[0]),
                          (c = (a = i || {}).retcode),
                          (u = a.retmsg),
                          (p = a.act_status),
                          0 == +c)
                        ) {
                          t.next = 12;
                          break;
                        }
                        return t.abrupt(
                          "return",
                          void (function (e, t) {
                            1079604118 == +e
                              ? (s.$refs.finishPopup &&
                                  s.$refs.finishPopup.open(),
                                P("finish_popup_brow"))
                              : (S("error", t), P("error_popup_brow")),
                              N("WZQMINI-CHANNEL-HOME-FAIL", { ext2: t });
                          })(+c, u)
                        );
                      case 12:
                        _.value && (S(h[p]), P("".concat(h[p], "_popup_brow"))),
                          P("page_brow"),
                          (t.next = 18);
                        break;
                      case 15:
                        (t.prev = 15),
                          (t.t0 = t.catch(0)),
                          N("WZQMINI-CHANNEL-FAIL", {
                            ext2: JSON.stringify(t.t0),
                          });
                      case 18:
                      case "end":
                        return t.stop();
                    }
                },
                r,
                null,
                [[0, 15]]
              );
            })
          );
        }),
        {
          homeData: u,
          wujiConfig: m,
          received: x,
          reportData: P,
          aegisReporterFn: N,
        }
      );
    },
  };
Array ||
  (
    g.resolveComponent("headerImg") +
    g.resolveComponent("applyButton") +
    g.resolveComponent("rule") +
    g.resolveComponent("finishPopup") +
    g.resolveComponent("errorPopup")
  )();
var x = g._export_sfc(_, [
  [
    "render",
    function (e, t, r, n, o, i) {
      return g.e(
        { a: n.wujiConfig.uiConfig },
        n.wujiConfig.uiConfig
          ? g.e(
              {
                b: g.p({ received: n.received, config: n.wujiConfig }),
                c: n.wujiConfig.uiConfig.award,
              },
              n.wujiConfig.uiConfig.award
                ? { d: n.wujiConfig.uiConfig.award }
                : {},
              { e: "" !== n.homeData.act_status },
              "" !== n.homeData.act_status
                ? {
                    f: g.o(n.reportData, 1234),
                    g: g.o(n.aegisReporterFn, 1235),
                    h: g.p({
                      actStatus: n.homeData.act_status,
                      subscribeStatus: n.homeData.subscribe_status,
                      stat: r.stat,
                      config: n.wujiConfig,
                    }),
                  }
                : {},
              {
                i: g.p({ config: n.wujiConfig }),
                j: g.sr("finishPopup", "6872e77a-3"),
                k: g.o(n.reportData, 1236),
                l: g.p({ data: n.wujiConfig.otherActivity, stat: r.stat }),
                m: g.sr("errorPopup", "6872e77a-4"),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-6872e77a"],
]);
wx.createComponent(x);
var C = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.DEFAULTBROKER = "10800"),
  (exports.DEFAULT_TMPLIDS = [
    "w7J3XRq7QWXgHAYF6eASEXpXU_4gly016xICl3TRz6Q",
    "2P-qd_fykwKPONTwWvd5wyPc83-_WV3hkexSACF7s34",
    "Ules4Gf-OofCmhgqldm1eeeBNdxPiVhNpByVWvoxYRo",
  ]),
  (exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LW1pbmktY2hhbm5lbC1jb29wZXJhdGlvbi9JbmRleC52dWU =
    C),
  (exports.SUBSCRIBE_STATE = { unsubscribe: 0, subscribe: 1 }),
  (exports.USER_STATE = v),
  (exports.USER_STATE_MAP = h),
  (exports.openSubscribe = function (e) {
    var t = p({ source: m, business: "act_open_account" }, e);
    return g.StockBridge.request(
      b + "svr/user/user_service/user_open_subscribe",
      g.RequestTypeEnum.POST,
      t,
      d
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  }),
  (exports.querySubscribe = function (e) {
    var t = { source: m, templates: e };
    return g.StockBridge.request(
      b + "svr/user/user_service/query_open_subscribe",
      g.RequestTypeEnum.POST,
      t,
      d
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  });
