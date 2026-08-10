var e = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  i = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = function (e, t) {
    for (var o in t || (t = {})) u.call(t, o) && c(e, o, t[o]);
    if (a) {
      var i,
        r = n(a(t));
      try {
        for (r.s(); !(i = r.n()).done; ) {
          o = i.value;
          s.call(t, o) && c(e, o, t[o]);
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    }
    return e;
  },
  p = function (e, t, n) {
    return new Promise(function (o, i) {
      var r = function (e) {
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
          return e.done ? o(e.value) : Promise.resolve(e.value).then(r, a);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  d = require("../../../../../../common/vendor.js"),
  m = require("../../../st-status/mp/config.js"),
  f = require("../../../stock-community-ui/utils/service/index.js"),
  v = require("../../../stock-community-base/utils/commentFilter.js"),
  g = require("../../../stock-community-base/utils/knife.js"),
  h = require("../../../stock-community-base/utils/api/index.js"),
  b = require("../../../stock-community-base/utils/privacyCheck.js"),
  y = h.api.goPageCommon,
  k = g.sdk,
  w = k.showToast,
  P = k.getUserInfo,
  x = "WZQ_FEEDBACK_BUBBLE_DATE",
  _ = d.defineComponent({
    components: {
      FeedbackMultiList: function () {
        return "../../components/FeedbackMultiList/mp.js";
      },
      replyBox: function () {
        return "../../components/replyBox/index.js";
      },
      dropdownVue: function () {
        return "../../components/FeedbackMultiList/dropdown.js";
      },
      status: function () {
        return "../../../../../../node-modules/@tencent/st-status/mp/index.js";
      },
      topicArea: function () {
        return "../../components/FeedbackArea/index.js";
      },
      ProfilePop: function () {
        return "../../../../../communitySbg/@tencent/stock-community-ui/components/profilePop/index.js";
      },
    },
    props: { pageType: { type: String, default: "" } },
    setup: function (n) {
      var o = this,
        a = d.getCurrentInstance().proxy || d.getCurrentInstance(),
        u = (function (n, o) {
          var i = g.IsMINAPP,
            r = d.inject("stockBridge"),
            a = d.inject("didAgreeUserAgreement", { value: !0 }),
            u = d.inject("onCheckUserAgreementStatus", function () {}),
            s = "shequ.uni_stock_comment_detail",
            c = d.ref({}),
            m = d.ref({}),
            h = d.ref(!1),
            k = d.ref(!1),
            x = d.ref(!1),
            _ = d.ref(null),
            T = {},
            C = d.ref(""),
            D = d.ref(!1),
            L = d.ref(!1),
            I =
              "topic" === (null == n ? void 0 : n.pageType) ||
              "newbie" === (null == n ? void 0 : n.pageType)
                ? "newest"
                : "latest",
            E = [],
            S = {},
            j = d.ref(""),
            F = d.ref(""),
            O = d.ref(0),
            A = d.ref(0),
            M = d.ref(""),
            R = d.ref({}),
            N = d.ref([]),
            $ = d.ref(!1),
            q = d.ref(null),
            U = function () {
              return p(
                exports,
                null,
                t().mark(function e() {
                  var o, i;
                  return t().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.t0 =
                                c.value &&
                                c.value.openid &&
                                c.value.zxg_openid),
                              e.t0)
                            ) {
                              e.next = 5;
                              break;
                            }
                            return (e.next = 4), P();
                          case 4:
                            c.value = e.sent;
                          case 5:
                            if (
                              c.value &&
                              c.value.openid &&
                              !(c.value.openid.length <= 0)
                            ) {
                              e.next = 18;
                              break;
                            }
                            return (o = n.mpReLogin), (e.next = 9), o();
                          case 9:
                            if (!e.sent) {
                              e.next = 18;
                              break;
                            }
                            return (e.prev = 10), (e.next = 13), P();
                          case 13:
                            (c.value = e.sent), (e.next = 18);
                            break;
                          case 16:
                            (e.prev = 16), (e.t1 = e.catch(10));
                          case 18:
                            return (
                              (e.next = 20),
                              f.getUserSocialData(c.value).catch(function () {})
                            );
                          case 20:
                            (i = e.sent),
                              (m.value = (null == i ? void 0 : i.data) || {}),
                              (c.value.zxg_openid = m.value.user_id);
                          case 22:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[10, 16]]
                  );
                })
              );
            },
            B = function (e) {
              if ("string" == typeof e) r.report(e);
              else {
                var t = e || {},
                  n = t.eventName,
                  o = t.data;
                r.report(n, l({}, o));
              }
            },
            G = function () {
              d.StockBridge.busOff("community-updateProfileDefault", U);
            },
            H = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              W(e);
            },
            z = function (e) {
              V({
                itemId: e,
                cb: function (e) {
                  if (e.content && !(e.content.length <= 0)) {
                    for (var t = 0, n = 0; n < E.length; n++) {
                      var i = E[n];
                      "relatedTopic" === i.type || 1 == +i.vorder
                        ? (t = n + 1)
                        : 1 === i.top_tag && (t += 1);
                    }
                    E.splice(t, 0, e),
                      o.$nextTick(function () {
                        o.switchToCommentTab && o.switchToCommentTab();
                      });
                  }
                },
              });
            },
            V = function (n, o) {
              var i = n.itemId,
                r = n.newsCommentId,
                a = n.cb,
                u = new Promise(function (e) {
                  f.getCommentDetail({ subjectId: i, newsCommentId: r }).then(
                    function (t) {
                      var n = t.data;
                      v.CommentFilter(n, !1, !1, c.value).then(function (t) {
                        e(t.commentsData[0]);
                      });
                    }
                  );
                }),
                s = new Promise(function (e) {
                  f.commentListPlatContent({
                    subjectId: i,
                    first: !0,
                    begin: "",
                  }).then(function (n) {
                    return p(
                      exports,
                      null,
                      t().mark(function o() {
                        var i;
                        return t().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (i = n.data),
                                  v.CommentFilter(i).then(function (t) {
                                    e(t.commentsData);
                                  });
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, o);
                      })
                    );
                  });
                });
              Promise.all([u, s]).then(function (t) {
                var n = e(t, 2),
                  o = n[0],
                  i = n[1],
                  r = Object.assign({}, o);
                r.commentsTail || (r.commentsTail = { cnt: "0" }),
                  (r.commentsTail.list = i.filter(function (e) {
                    return -1 === [1, 2].indexOf(e.check_label);
                  })),
                  a && a(r);
              });
            },
            W = function (e) {
              var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                n = e.parent_id || e.id || "",
                o = e.comment_id || "";
              if (n) {
                var i = function (e, t) {
                    if (e && g.isArray(e))
                      for (var o = 0; o < e.length; o++) {
                        var i = e[o];
                        if (g.isObject(i) && i.id) {
                          if ("follow" === t.type || "follow" === t.nType)
                            i.user_id === t.to_openid &&
                              a({ item: i, post: t });
                          else if (i.id === n) {
                            u({ list: e, item: i, post: t, index: o });
                            break;
                          }
                        } else if (g.isArray(i))
                          for (var r = 0; r < i.length; r++) {
                            var s = i[r];
                            if ("follow" === t.type)
                              s.user_id === t.to_openid &&
                                a({ item: s, post: t });
                            else if (s.id === n) {
                              u({ list: i, item: s, post: t, index: r });
                              break;
                            }
                          }
                      }
                  },
                  a = function (e) {
                    var t = e.item,
                      n = e.post;
                    t.isFollow = n.isFollow;
                  },
                  u = function (e) {
                    var t = e.list,
                      n = e.item,
                      o = e.post,
                      i = e.index;
                    if ("complaint" === o.type) t.splice(i, 1);
                    else if ("comment" === o.type)
                      n.comment_num = o.comment_num;
                    else if ("like" === o.type)
                      (n.like_num = o.like_num), (n.like_id = o.like_id || "");
                    else {
                      var r = {
                        retweet_count: o.retweet_count || "",
                        like_num: o.like_num || "",
                        like_id: o.like_id || "",
                        commentsTail: o.commentsTail,
                      };
                      Object.assign(n, r);
                    }
                  };
                t
                  ? V({
                      itemId: n,
                      newsCommentId: o,
                      cb: function (t) {
                        var n = Object.assign({}, e, t);
                        i(E, n),
                          "function" == typeof K && K(n),
                          r.busEmit("community-commentChanged");
                      },
                    })
                  : i(E, e);
              }
            },
            K = function (e) {
              if (e) {
                var t = e || {},
                  n = t.user_id,
                  o = t.isFollow;
                E.map(function (e) {
                  return e.user_id === n && (e.isFollow = o), e;
                }),
                  r.busEmit("community-updateUserAsset");
              }
            };
          return {
            isMiniApp: i,
            showCzdMod: h,
            isKzz: k,
            reportPrefix: s,
            userinfo: c,
            personInfo: m,
            forbidComment: x,
            replyRef: _,
            didAgreeUserAgreement: a,
            onCheckUserAgreementStatus: u,
            isDataReady: D,
            showEmpty: L,
            topic: M,
            topicDescription: j,
            topicImgurl: F,
            topicCommentNum: O,
            topicViewNum: A,
            voteInfo: R,
            getPersonInfo: U,
            goToPersonal: function () {
              return p(
                exports,
                null,
                t().mark(function e() {
                  var n;
                  return t().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!b.isH5Native) {
                            e.next = 7;
                            break;
                          }
                          return (e.next = 3), b.sqPrivacyCheck();
                        case 3:
                          if (e.sent) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          e.next = 9;
                          break;
                        case 7:
                          if (
                            (null == a ? void 0 : a.value) ||
                            "function" != typeof u
                          ) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt("return", void u());
                        case 9:
                          r.report("".concat(s, ".head_click")),
                            (n = {
                              eventName: "person",
                              userId: m.value.user_id || "",
                              instance: o,
                            }),
                            y(n);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
            },
            gotoPersonList: function (e) {
              var t =
                "https://wzq.tenpay.com/mp/v2/index.html?lite=1#/personal/list?type="
                  .concat(e, "&userId=")
                  .concat(c.value.zxg_openid || "");
              r.openExtraWebview(t);
            },
            setGuessInfo: function (e) {
              var t = e || {},
                n = t.can_show,
                o = t.is_kzz;
              (h.value = 1 == +n), (k.value = 1 == +o);
            },
            commentReport: B,
            goEdit: function () {
              return p(
                exports,
                null,
                t().mark(function e() {
                  var i, c, l, p, m, f, v;
                  return t().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!b.isH5Native) {
                            e.next = 7;
                            break;
                          }
                          return (e.next = 3), b.sqPrivacyCheck();
                        case 3:
                          if (e.sent) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          e.next = 9;
                          break;
                        case 7:
                          if (
                            (null == a ? void 0 : a.value) ||
                            "function" != typeof u
                          ) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt("return", void u());
                        case 9:
                          if (!x.value) {
                            e.next = 11;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            void r.toast("暂不开放评论")
                          );
                        case 11:
                          (i = n.symbol),
                            (c = void 0 === i ? "" : i),
                            (l = n.stockName),
                            (p = void 0 === l ? "" : l),
                            (m = n.topicId),
                            (f = "timeline"),
                            (v = ""),
                            c && p
                              ? (v = "/pages/comment/edit/edit?type="
                                  .concat(f, "&symbol=")
                                  .concat(c, "&name=")
                                  .concat(p, "&placeholder=谈谈我的想法"))
                              : m &&
                                M.value &&
                                (v = "/pages/comment/edit/edit?type="
                                  .concat(f, "&topicId=")
                                  .concat(m, "&topic=")
                                  .concat(M.value)),
                            d.wx$1.navigateTo({ url: v }),
                            o.$emit("goEdit"),
                            r.report("".concat(s, ".comment_edit"), {
                              stockid: c || "",
                              topicid: m || "",
                            });
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
            },
            onPutComment: function (e, t) {
              var i = e.id,
                r = e.user_name,
                a = e.showType,
                u = void 0 === a ? "" : a,
                s = e.content,
                c = void 0 === s ? "" : s,
                l = "stocklist";
              "index" === (null == n ? void 0 : n.pageType) &&
                (l = 0 === t ? "squarelist" : "friendslist");
              var p = { type: "detail", id: i, touser: r, post_scene: l };
              "index" === (null == n ? void 0 : n.pageType) &&
                "turn" === u &&
                (p.forwardContent = encodeURIComponent(c) || ""),
                o.$emit("goEdit", p);
            },
            getListFinished: function (e) {
              var t,
                i = e.getRes,
                r = void 0 === i ? {} : i,
                a = e.isFirst;
              if (((D.value = !0), a)) {
                if (null === r) return void (L.value = !0);
                var u = r.data;
                if (
                  "topic" === (null == n ? void 0 : n.pageType) ||
                  "newbie" === (null == n ? void 0 : n.pageType)
                ) {
                  (j.value = (null == u ? void 0 : u.description) || ""),
                    (F.value =
                      (null == u ? void 0 : u.imgurl_large) ||
                      (null == u ? void 0 : u.imgurl) ||
                      "https://st.gtimg.com/design/52b95c010b6a5e5255c1d92a9e4653c9.5x.png"),
                    (O.value = null == u ? void 0 : u.count),
                    (A.value = (null == u ? void 0 : u.view_num) || 0),
                    (R.value =
                      ((null == (t = null == u ? void 0 : u.vote_info)
                        ? void 0
                        : t.length) &&
                        (null == u ? void 0 : u.vote_info[0])) ||
                      {});
                  var s = R.value;
                  (null == s ? void 0 : s.vote_items) &&
                    (null == s ? void 0 : s.vote_items.length) &&
                    B("shequ_huati_vote_show"),
                    (M.value = (null == u ? void 0 : u.topic) || ""),
                    (N.value =
                      (null == u ? void 0 : u.top_related_stocks) || []);
                  var c = D.value && (!F.value || !j.value);
                  o.$emit("handleTopicEmpty", c);
                }
              }
            },
            onTapFollow: function (e) {
              var t = e.text,
                n = e.itemData;
              w(t);
              var o = n || {},
                i = o.user_id,
                a = o.isFollow;
              E.map(function (e) {
                return e.user_id === i && (e.isFollow = a), e;
              }),
                r.busEmit("community-updateUserAsset");
            },
            renderFinished: function (e) {
              var t = e.listData,
                n = (e.isFirst, e.noNetwork, e.commentStatus);
              (x.value = 1 == +n), (S[I] = t), (E = S[I] || []);
            },
            onTapDetail: function (e) {
              T = e;
            },
            onTapPerson: function (e) {
              T = e;
            },
            changePageTo: function (e) {
              E = S[(I = e)] || [];
            },
            addEventListeners: function () {
              G(), d.StockBridge.busOn("community-updateProfileDefault", U);
            },
            removeEventListeners: G,
            loadMore: function () {
              o.$refs.stockList && o.$refs.stockList.loadMore();
            },
            addNewSubject: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              "index" !== (null == n ? void 0 : n.pageType)
                ? (e.post && (e = e.post), e.subject_id && z(e.subject_id))
                : setTimeout(function () {
                    var e, t, n, i;
                    null ==
                      (t = null == (e = o.$refs) ? void 0 : e.stockList) ||
                      t.squareStockListStartPullRefresh(),
                      null ==
                        (i = null == (n = o.$refs) ? void 0 : n.stockList) ||
                        i.refreshAllStockList();
                  }, 800);
            },
            updateTimeLine: H,
            checkAndUpdateSubject: function () {
              !T || !T.id || T.id.length <= 0 || (H(T), (T = {}));
            },
            mpOnPageScroll: function (e) {
              o.$refs.stockList && o.$refs.stockList.mpOnPageScroll(e);
            },
            replyBoxText: C,
            selectTabChanged: function (e) {
              C.value = "share" !== e ? "谈谈我的想法..." : "晒持仓，秀操作...";
            },
            goFeecbackEdit: function (e) {
              return p(
                exports,
                null,
                t().mark(function n() {
                  var i;
                  return t().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!b.isH5Native) {
                            t.next = 7;
                            break;
                          }
                          return (t.next = 3), b.sqPrivacyCheck();
                        case 3:
                          if (t.sent) {
                            t.next = 5;
                            break;
                          }
                          return t.abrupt("return");
                        case 5:
                          t.next = 9;
                          break;
                        case 7:
                          if (
                            (null == a ? void 0 : a.value) ||
                            "function" != typeof u
                          ) {
                            t.next = 9;
                            break;
                          }
                          return t.abrupt("return", void u());
                        case 9:
                          if (!x.value) {
                            t.next = 11;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            void r.toast("暂不开放评论")
                          );
                        case 11:
                          (i = {
                            type: "timeline",
                            topicId: e,
                            topic: M.value,
                          }),
                            o.$emit("goEdit", i),
                            r.report("".concat(s, ".comment_edit"), {
                              topicid: e || "",
                            });
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  }, n);
                })
              );
            },
            goSquareEdit: function () {
              return p(
                exports,
                null,
                t().mark(function e() {
                  return t().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!b.isH5Native) {
                            e.next = 7;
                            break;
                          }
                          return (e.next = 3), b.sqPrivacyCheck();
                        case 3:
                          if (e.sent) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          e.next = 9;
                          break;
                        case 7:
                          if (
                            (null == a ? void 0 : a.value) ||
                            "function" != typeof u
                          ) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt("return", void u());
                        case 9:
                          x.value
                            ? r.toast("暂不开放评论")
                            : ("/pages/comment/edit/edit?post_scene=square&symbol=sh000001&action=fatie",
                              d.wx$1.navigateTo({
                                url: "/pages/comment/edit/edit?post_scene=square&symbol=sh000001&action=fatie",
                              }),
                              o.$emit("goEdit"));
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
            },
            onActiveChange: function () {
              var e,
                t,
                n,
                i,
                r =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
              r
                ? (W(T),
                  null == (i = null == (n = o.$refs) ? void 0 : n.stockList) ||
                    i.onMultiListShow())
                : null == (t = null == (e = o.$refs) ? void 0 : e.stockList) ||
                  t.onMultiListHide();
            },
            resetData: function () {
              (h.value = !1),
                (k.value = !1),
                (x.value = !1),
                (_.value = null),
                (D.value = !1),
                (L.value = !1),
                (j.value = ""),
                (F.value = ""),
                (O.value = 0),
                (A.value = 0),
                (M.value = ""),
                (R.value = {}),
                (N.value = []);
            },
            topRelatedStocks: N,
            onMpShow: function () {
              var e, t;
              null == (t = null == (e = o.$refs) ? void 0 : e.stockList) ||
                t.onMultiListShow();
            },
            onMpHide: function () {
              var e, t;
              null == (t = null == (e = o.$refs) ? void 0 : e.stockList) ||
                t.onMultiListHide();
            },
            resetDataWhenRouteChanged: function () {
              o.$refs.stockList &&
                o.$refs.stockList.resetDataWhenRouteChanged();
            },
            showProfilePop: function (e) {
              ($.value = !0), (q.value = e);
            },
            isShowProfilePop: $,
            profilePopParams: q,
            hideProfilePop: function () {
              ($.value = !1), (q.value = null);
            },
          };
        })(n, a),
        s = (function (e, t) {
          var n = d.inject("stockBridge"),
            o = null,
            i = d.ref(!1),
            r = !1;
          return {
            showCommentGuide: i,
            showCommentGuideModel: function () {
              try {
                var e = new Date().toLocaleDateString();
                if (e === n.getStorage(x)) return;
                n.setStorage(x, e),
                  (i.value = !0),
                  o && clearTimeout(o),
                  (o = setTimeout(function () {
                    i.value = !1;
                  }, 5e3));
              } catch (e) {}
            },
            hideCommentGuide: function () {
              o && clearTimeout(o), (i.value = !1);
            },
            switchToCommentTab: function () {
              var e;
              null == (e = t.$refs.stockList) || e.switchTab(1);
            },
            checkAndUpdateFeedback: function () {
              var e;
              t.checkAndUpdateSubject(),
                r
                  ? null == (e = t.$refs.stockList) || e.getFeedbackData()
                  : (r = !0);
            },
          };
        })(0, a),
        c = d.computed(function () {
          return u.isDataReady.value
            ? m.COMMON_PAGE_STATUS.ERROR
            : m.COMMON_PAGE_STATUS.LOADING;
        }),
        h = d.computed(function () {
          return m.COMMON_PAGE_ERROR.EMPTY;
        }),
        k = d.computed(function () {
          return m.COMMON_CONTENT_POSITION.TOP;
        });
      d.onBeforeMount(function () {
        return p(
          o,
          null,
          t().mark(function e() {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    u.getPersonInfo();
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      }),
        d.onMounted(function () {
          u.addEventListeners();
        }),
        d.onUnmounted(function () {
          u.removeEventListeners();
        });
      var _,
        T = d.ref(null),
        C = d.ref(0),
        D = d.ref(""),
        L = d.ref([]);
      return (
        (_ = l(l({}, u), s)),
        i(
          _,
          r({
            updateList: function () {
              a.$refs.stockList && a.$refs.stockList.onPullingDown();
            },
            pageStatus: c,
            errorType: h,
            statusPosition: k,
            topicVoteNum: C,
            getFeedbackFinished: function (e) {
              var t = e.topic_id,
                n = e.topic_info,
                o = e.votes_num,
                i = e.announcement,
                r = e.announcement_detail;
              if (t && n) {
                (T.value = t),
                  (u.showEmpty.value = !1),
                  (u.isDataReady.value = !0);
                var a = n.topic,
                  s = n.topic_description,
                  c = n.imgurl,
                  l = n.count;
                (u.topicDescription.value = s),
                  (u.topicImgurl.value = c),
                  (u.topic.value = a),
                  (u.topicCommentNum.value = l),
                  (C.value = o),
                  (D.value = i),
                  (L.value = r);
              }
            },
            topicId: T,
            goFeecbackEdit: function () {
              u.goFeecbackEdit(T.value);
            },
            announcementTitle: D,
            announcementDetail: L,
            calculateMultiListHeight: function () {
              var e, t;
              a.$refs.stockList &&
                (null ==
                  (t = (e = a.$refs.stockList).calculateMpSwiperHeight) ||
                  t.call(e));
            },
          })
        )
      );
    },
  });
Array ||
  (
    d.resolveComponent("topicArea") +
    d.resolveComponent("FeedbackMultiList") +
    d.resolveComponent("replyBox") +
    d.resolveComponent("dropdownVue") +
    d.resolveComponent("status") +
    d.resolveComponent("ProfilePop")
  )();
var T = d._export_sfc(_, [
  [
    "render",
    function (e, t, n, o, i, r) {
      return d.e(
        { a: e.isDataReady && e.topicDescription && e.topicImgurl },
        e.isDataReady && e.topicDescription && e.topicImgurl
          ? {
              b: d.sr("topicArea", "be3d2a49-0"),
              c: d.o(e.commentReport, 1493),
              d: d.p({
                "topic-id": e.topicId,
                topic: e.topic,
                description: e.topicDescription,
                imgurl: e.topicImgurl,
                "announcement-title": e.announcementTitle,
                "announcement-detail": e.announcementDetail,
                "topic-comment-num": e.topicCommentNum,
                "topic-view-num": e.topicViewNum,
                "topic-vote-num": e.topicVoteNum,
                "is-mini-app": e.isMiniApp,
              }),
            }
          : {},
        {
          e: d.sr("stockList", "be3d2a49-1"),
          f: d.o(e.getFeedbackFinished, 1494),
          g: d.o(e.commentReport, 1495),
          h: d.o(e.onTapDetail, 1496),
          i: d.o(e.changePageTo, 1497),
          j: d.o(e.onPutComment, 1498),
          k: d.o(e.onTapFollow, 1499),
          l: d.o(e.onTapPerson, 1500),
          m: d.o(e.renderFinished, 1501),
          n: d.o(e.showCommentGuideModel, 1502),
          o: d.o(e.showProfilePop, 1503),
          p: d.p({
            "page-type": e.pageType,
            userinfo: e.userinfo,
            "m-id": e.topicId,
            "topic-id": e.topicId,
          }),
          q: e.isDataReady && !e.showEmpty,
        },
        e.isDataReady && !e.showEmpty
          ? {
              r: d.sr("replyRef", "be3d2a49-2"),
              s: d.o(e.goFeecbackEdit, 1504),
              t: d.o(e.goToPersonal, 1505),
              v: d.o(e.showProfilePop, 1506),
              w: d.p({
                "page-type": e.pageType,
                "report-prefix": e.reportPrefix,
                "forbid-comment": e.forbidComment,
                userinfo: e.personInfo,
                "enable-pyq": !1,
              }),
            }
          : {},
        { x: e.isDataReady && !e.showEmpty, y: !e.isDataReady },
        e.isDataReady
          ? {}
          : {
              z: d.p({
                type: e.pageStatus,
                "error-type": e.errorType,
                "show-error-img": !0,
                "show-error-tips": !0,
                "show-btn": !1,
                position: e.statusPosition,
              }),
            },
        { A: e.isDataReady && e.showEmpty },
        e.isDataReady && e.showEmpty
          ? {
              B: d.p({
                type: e.pageStatus,
                "error-type": e.errorType,
                "show-error-img": !0,
                "show-error-tips": !0,
                "error-tips": "话题不见了，去看看其他帖子吧",
                "show-btn": !1,
                position: e.statusPosition,
              }),
            }
          : {},
        { C: e.showCommentGuide },
        e.showCommentGuide
          ? {
              D: d.o(function () {
                return (
                  e.hideCommentGuide && e.hideCommentGuide.apply(e, arguments)
                );
              }, 1507),
            }
          : {},
        { E: e.isShowProfilePop && e.profilePopParams },
        e.isShowProfilePop && e.profilePopParams
          ? {
              F: d.o(e.hideProfilePop, 1508),
              G: d.p({
                pageType: e.pageType,
                userStateData: e.profilePopParams.userStateData,
                content: e.profilePopParams.content,
                defaultHeadImage: e.profilePopParams.defaultHeadImage,
                defaultNickname: e.profilePopParams.defaultNickname,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-be3d2a49"],
]);
wx.createComponent(T);
