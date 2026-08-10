var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  i = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  u = function (e, r) {
    for (var u in r || (r = {})) a.call(r, u) && i(e, u, r[u]);
    if (n) {
      var s,
        c = t(n(r));
      try {
        for (c.s(); !(s = c.n()).done; ) {
          u = s.value;
          o.call(r, u) && i(e, u, r[u]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return e;
  },
  s = function (e, t, r) {
    return new Promise(function (n, a) {
      var o = function (e) {
          try {
            u(r.next(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          try {
            u(r.throw(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, i);
        };
      u((r = r.apply(e, t)).next());
    });
  },
  c = require("../../../../../../common/vendor.js"),
  l = require("../../../../detail.js"),
  d = require("../../util/helperUtil.js"),
  h = {
    name: "BasketBar",
    inject: {
      stockBridge: { default: function () {} },
      onCheckUserAgreementStatus: {
        default: function () {
          return function () {};
        },
      },
      didAgreeUserAgreement: {
        default: function () {
          return { value: !0 };
        },
      },
    },
    props: {
      reportPrefix: { type: String, default: "" },
      isSharePage: { type: Boolean, default: !1 },
      showAdd: { type: Boolean, default: !0 },
      basket: { type: Object, default: function () {} },
      commentCount: { type: Number, default: 0 },
    },
    setup: function (t, r) {
      var n = (function (t, r) {
        var n = c.inject("stockBridge"),
          a = c.inject("hqBridge"),
          o = c.ref(t.basket);
        c.watch(
          function () {
            return t.basket;
          },
          function (e) {
            o.value = e;
          }
        );
        var i = c.computed(function () {
            var e, t;
            return !!(null == (t = null == (e = o.value) ? void 0 : e.userData)
              ? void 0
              : t.watched);
          }),
          u = c.computed(function () {
            var e, t;
            return !!(null == (t = null == (e = o.value) ? void 0 : e.userData)
              ? void 0
              : t.tips);
          }),
          d = c.computed(function () {
            var e, t, r;
            return !(
              !(null == (e = o.value) ? void 0 : e.info) ||
              0 !==
                (null == (r = null == (t = o.value) ? void 0 : t.info)
                  ? void 0
                  : r.showType)
            );
          }),
          h = c.computed(function () {
            var e,
              t = null == (e = o.value.userData) ? void 0 : e.watchedNum;
            return t < 0 && (t = 0), (t > 99 ? "99+" : t) || "加自选";
          }),
          m = c.computed(function () {
            var e,
              t = null == (e = o.value.userData) ? void 0 : e.shareNum;
            return t < 0 && (t = 0), (t > 99 ? "99+" : t) || "分享";
          }),
          f = c.computed(function () {
            var e,
              t = null == (e = o.value.userData) ? void 0 : e.tipsNum;
            return (!t || t < 0) && (t = 0), (t > 99 ? "99+" : t) || "订阅";
          });
        function p() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "none";
          null == n || n.toast(e, t);
        }
        function v() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t = arguments.length > 1 ? arguments[1] : void 0;
          null == a || a.busEmit(e, t);
        }
        return {
          basketData: o,
          isBasketAdded: i,
          isBasketSubscribed: u,
          isBasketCommon: d,
          addTitle: h,
          subScribeTitle: f,
          shareTitle: m,
          refreshData: function () {
            !(function () {
              s(this, arguments, function () {
                return e().mark(function t() {
                  var r;
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (o.value) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return", !1);
                        case 2:
                          return (
                            (e.next = 4),
                            l.getBasketDetail({ id: o.value.info.id })
                          );
                        case 4:
                          0 === (r = e.sent).code && (o.value = r.data.detail);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, t);
                })();
              });
            })();
          },
          barAddBasket: function (t) {
            return s(
              this,
              null,
              e().mark(function r() {
                var n, a, i, u, s;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), l.updateBasketWatched(t);
                      case 2:
                        return (
                          (i = e.sent),
                          (u = i.data),
                          (s = i.code),
                          e.abrupt(
                            "return",
                            0 === s &&
                              0 ===
                                (null ==
                                (a =
                                  null == (n = null == u ? void 0 : u.record)
                                    ? void 0
                                    : n[0])
                                  ? void 0
                                  : a.code)
                              ? ((o.value.userData.watched = !0),
                                (o.value.userData.watchedNum += 1),
                                p("添加成功，可在「自选>股单」中查看"),
                                v("toggleAdded", "basket"),
                                !0)
                              : (p("添加股单失败code:".concat(s)), !1)
                          )
                        );
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, r);
              })
            );
          },
          barDelBasket: function (t) {
            return s(
              this,
              null,
              e().mark(function r() {
                var n, a, i, u, s;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), l.updateBasketDel(t);
                      case 2:
                        return (
                          (i = e.sent),
                          (u = i.data),
                          (s = i.code),
                          e.abrupt(
                            "return",
                            0 === s &&
                              0 ===
                                (null ==
                                (a =
                                  null == (n = null == u ? void 0 : u.record)
                                    ? void 0
                                    : n[0])
                                  ? void 0
                                  : a.code)
                              ? ((o.value.userData.watched = !1),
                                (o.value.userData.watchedNum -= 1),
                                p("该股单已移除"),
                                v("toggleAdded", "basket"),
                                !0)
                              : (p("添加股单失败code:".concat(s)), !1)
                          )
                        );
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, r);
              })
            );
          },
          updateShareNum: function (t) {
            return s(
              this,
              null,
              e().mark(function t() {
                var r;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          l.updateShare({ news_id: o.value.info.id })
                        );
                      case 2:
                        (r = e.sent),
                          0 === r.code && (o.value.userData.shareNum += 1);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
          },
        };
      })(t);
      return u({}, n);
    },
    mounted: function () {
      this.reportData(
        this.getReportFullName("bottomadd_brow"),
        u({}, this.getReportCommonData())
      );
    },
    methods: {
      numberFormat: d.numberFormat,
      shareSuccess: function () {
        this.updateShareNum();
      },
      reportData: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.stockBridge.report(e, t);
      },
      isAgreeUserAgreementStatus: function () {
        var e;
        return null == (e = this.didAgreeUserAgreement) ? void 0 : e.value;
      },
      getReportCommonData: function () {
        return {
          gdid: this.basketData.info.id,
          fchannel_id_fm_i: "IfS00p000l146",
          watchlist_id: this.basketData.info.id || "",
          hasaddlist: this.isBasketAdded ? 1 : 0,
          foperation_purpose: "watchlist_zixuan",
        };
      },
      getReportFullName: function (e) {
        return "".concat(this.reportPrefix, ".").concat(e);
      },
      onClickBasketAdd: function () {
        return s(
          this,
          null,
          e().mark(function t() {
            var r, n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = this.basketData.userData.watched
                          ? "bottomadd_cancel"
                          : "bottomadd_add"),
                        this.reportData(
                          this.getReportFullName(n),
                          u({}, this.getReportCommonData())
                        ),
                        (null == (r = this.didAgreeUserAgreement)
                          ? void 0
                          : r.value) ||
                          "function" != typeof this.onCheckUserAgreementStatus)
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void this.onCheckUserAgreementStatus()
                      );
                    case 3:
                      if ((!1, !this.basketData.userData.watched)) {
                        e.next = 10;
                        break;
                      }
                      return (
                        (e.next = 7),
                        this.barDelBasket({ id: this.basketData.info.id })
                      );
                    case 7:
                      (e.t0 = e.sent), (e.next = 13);
                      break;
                    case 10:
                      return (
                        (e.next = 12),
                        this.barAddBasket({ id: this.basketData.info.id })
                      );
                    case 12:
                      e.t0 = e.sent;
                    case 13:
                      e.t0 &&
                        this.$emit("operateBasketSuccess", this.basketData);
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      onClickShare: function () {
        var e;
        this.reportData(
          this.getReportFullName("bottom_bar_share_click"),
          u({}, this.getReportCommonData())
        ),
          (null == (e = this.didAgreeUserAgreement) ? void 0 : e.value) ||
          "function" != typeof this.onCheckUserAgreementStatus
            ? this.$emit("tapShare", {})
            : this.onCheckUserAgreementStatus();
      },
      onClickSubscribe: function () {
        var e,
          t = this.basketData.userData.tips
            ? "bottom_bar_unsubscribe_click"
            : "bottom_bar_subscribe_click";
        this.reportData(
          this.getReportFullName(t),
          u({}, this.getReportCommonData())
        ),
          (null == (e = this.didAgreeUserAgreement) ? void 0 : e.value) ||
          "function" != typeof this.onCheckUserAgreementStatus
            ? this.$emit("tapSubscribe", this.basketData)
            : this.onCheckUserAgreementStatus();
      },
      onClickComment: function () {
        var e;
        this.reportData(
          this.getReportFullName("bottom_bar_pos_click"),
          u({}, this.getReportCommonData())
        ),
          (null == (e = this.didAgreeUserAgreement) ? void 0 : e.value) ||
          "function" != typeof this.onCheckUserAgreementStatus
            ? this.forbidComment
              ? this.stockBridge.toast("暂不开放评论")
              : ((this.isCommentBtnClicked = !0),
                this.$emit("tapComment", { number: this.commentCnt }))
            : this.onCheckUserAgreementStatus();
      },
    },
  },
  m = c._export_sfc(h, [
    [
      "render",
      function (e, t, r, n, a, o) {
        return c.e(
          { a: r.showAdd },
          r.showAdd
            ? {
                b: c.n(e.isBasketAdded ? "added" : ""),
                c: c.t(e.addTitle),
                d: c.o(function () {
                  return (
                    o.onClickBasketAdd && o.onClickBasketAdd.apply(o, arguments)
                  );
                }, 2205),
              }
            : {},
          { e: o.isAgreeUserAgreementStatus() },
          o.isAgreeUserAgreementStatus()
            ? {
                f: c.t(e.shareTitle),
                g: c.o(function () {
                  return o.onClickShare && o.onClickShare.apply(o, arguments);
                }, 2206),
              }
            : {
                h: c.t(e.shareTitle),
                i: c.o(function () {
                  return o.onClickShare && o.onClickShare.apply(o, arguments);
                }, 2207),
              },
          { j: r.commentCount },
          r.commentCount ? { k: c.t(o.numberFormat(r.commentCount)) } : {},
          {
            l: c.o(function () {
              return o.onClickComment && o.onClickComment.apply(o, arguments);
            }, 2208),
            m: c.n(r.isSharePage ? "is-share-page" : ""),
          }
        );
      },
    ],
    ["__scopeId", "data-v-ba684092"],
  ]);
wx.createComponent(m);
