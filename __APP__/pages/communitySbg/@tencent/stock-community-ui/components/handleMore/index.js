var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  i = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  l = function (e, t, i) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  c = function (e, t, n) {
    return new Promise(function (i, a) {
      var o = function (e) {
          try {
            r(n.next(e));
          } catch (e) {
            a(e);
          }
        },
        s = function (e) {
          try {
            r(n.throw(e));
          } catch (e) {
            a(e);
          }
        },
        r = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(o, s);
        };
      r((n = n.apply(e, t)).next());
    });
  },
  u = require("../../utils/service/index.js"),
  h = require("../../../stock-community-base/utils/knife.js"),
  m = require("../../../stock-community-base/utils/api/index.js"),
  p = require("../../../stock-community-base/utils/mixins/checkComStatus.js"),
  d = require("../../../stock-community-base/utils/constant.js"),
  f = require("../../../../../../common/vendor.js"),
  g = require("../../../../vue-clipboard2/vue-clipboard.js");
f.Vue.use(g.VueClipboard);
var v = h.sdk,
  C = v.notify,
  b = v.openShareView,
  y = v.share,
  k = v.showModal,
  S = v.showCommunityComplaint,
  w = v.showToast,
  I = v.copyToPasteboard,
  x = v.reportAnalytics,
  _ = v.onFunctionButtonClick,
  D = v.getNetworkStatus,
  B = m.api.goPageCommon,
  q = (navigator && navigator.userAgent) || "",
  T = q && !!q.match(/\(i[^]+( U)? CPU.+Mac OS X/),
  O = {
    stock: {
      s1EventName: "shequ.shequ_dichengye.common_share_click_s1",
      s2EventName: "shequ.shequ_dichengye.common_share_click_s2",
      def: "4004000010",
      wx: "4004000011",
      pyq: "4004000012",
      qq: "4004000013",
      qzone: "4004000014",
      link: "4004000016",
    },
  },
  L = { detail: { link: "1000110004175" } },
  j = {
    comment: "内容不构成投资建议，投资者应独立决策并自行承担风险。",
    user: "如该用户违反社区规则，您可通过“举报”按钮进行投诉。",
  },
  U = "您的投诉已收到，我们会尽快审核处理~",
  P = "当前网络不可用，请检查你的网络设置",
  M = {
    name: "handleMore",
    mixins: [p.CheckStatusMixin],
    components: {
      listPop: function () {
        return "../listPop/index.js";
      },
    },
    inject: {
      newsCommentId: { default: "" },
      hqBridge: { default: {} },
      stockBridge: { default: {} },
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
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      pageType: { type: String, default: "" },
      hideSangedianIcon: { default: !1 },
      hack: { type: Boolean, default: !1 },
      subjectData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      showComplaintBanner: { type: Boolean, default: !1 },
      type: { type: String, default: "comment" },
      userID: { type: String, default: "comment" },
    },
    data: function () {
      return {
        menuList: [
          {
            id: "copyLink",
            showName: "复制链接",
            onTapMenu: this.onShareViewCopyLinkButtonClick,
          },
          {
            id: "complaint",
            showName: "投诉",
            onTapMenu: this.onShareViewComplaintButtonClick,
          },
          {
            id: "delete",
            showName: "删除",
            onTapMenu: this.onShareViewDeleteButtonClick,
          },
        ],
        buttons: [],
        userIllegalConfig: null,
        postIllegalConfig: null,
        isComplainUser: !1,
        platform: h.platform,
        gear: "wzq" === h.platform && window.innerWidth > 400,
        busInternal: {
          type: Object,
          default: function () {
            return {};
          },
        },
        showComplaintListPop: !1,
      };
    },
    created: function () {
      var e = this;
      "zxg" === h.platform &&
        this.hqBridge &&
        (this.hqBridge.busOn(
          "onShareViewCopyLinkButtonClick",
          this.onShareViewCopyLinkButtonClick
        ),
        this.hqBridge.busOn(
          "onShareViewComplaintButtonClick",
          this.onShareViewComplaintButtonClick
        ),
        this.hqBridge.busOn(
          "onShareViewBlackListButtonClick",
          this.onShareViewBlackListButtonClick
        ),
        this.hqBridge.busOn(
          "onShareViewCancelBlackListButtonClick",
          this.onShareViewCancelBlackListButtonClick
        ),
        this.hqBridge.busOn(
          "onShareViewDeleteButtonClick",
          this.onShareViewDeleteButtonClick
        ),
        this.hqBridge.busOn("onCommunityComplaint", this.handleComplaintItem),
        this.hqBridge.busOn("onCommunityComplaint", this.handleShareResult),
        this.hqBridge.busOn("onshareSelect", this.onshareSelect),
        this.hideSangedianIcon &&
          "detail" === this.pageType &&
          _(function () {
            e.handleShowMore();
          }));
    },
    computed: {
      shareH5Url: function () {
        var e = (this.itemData || {}).id,
          t = (this.subjectData || {}).id,
          n = e;
        return (
          t && "detail" === this.pageType && (n = t),
          d.shareH5(n, this.newsCommentId)
        );
      },
      illeagalmenuList: function () {
        return this.isComplainUser
          ? this.userIllegalConfig
          : this.postIllegalConfig;
      },
      complaintText: function () {
        return j[this.type] || "";
      },
    },
    methods: {
      getChannelMap: function () {
        return O[this.pageType];
      },
      setBusData: function (e) {
        var t = e.activeShareItem,
          n = void 0 === t ? {} : t,
          i = e.isShowComplaintToast,
          a = void 0 !== i && i,
          o = e.isShowDelToast,
          s = void 0 !== o && o,
          r = e.userID,
          l = void 0 === r ? "" : r,
          c = e.type,
          u = void 0 === c ? "" : c;
        (this.busInternal.activeShareItem = n),
          (this.busInternal.isShowComplaintToast = a),
          (this.busInternal.isShowDelToast = s),
          (this.busInternal.userID = l),
          (this.busInternal.type = u);
      },
      handleShowMore: function (e) {
        var n = e || {},
          c = n.isShowChannel,
          u = void 0 === c || c,
          h = n.isShowFunctions,
          m = void 0 === h || h;
        this.setBusData({
          activeShareItem: this.itemData,
          isShowComplaintToast: !1,
          isShowDelToast: !1,
        }),
          this.handleShare({ isShowChannel: u, isShowFunctions: m });
        var p,
          d = this.handleSheet();
        this.$emit(
          "tapMore",
          ((p = (function (e, n) {
            for (var i in n || (n = {})) s.call(n, i) && l(e, i, n[i]);
            if (o) {
              var a,
                c = t(o(n));
              try {
                for (c.s(); !(a = c.n()).done; ) {
                  i = a.value;
                  r.call(n, i) && l(e, i, n[i]);
                }
              } catch (e) {
                c.e(e);
              } finally {
                c.f();
              }
            }
            return e;
          })({}, this.itemData)),
          i(p, a({ actionSheet: d })))
        );
      },
      getComplainId: function () {
        var e = this.itemData || {},
          t = e.id,
          n = void 0 === t ? "" : t,
          i = e.comment_type,
          a = void 0 === i ? "" : i,
          o = n;
        if ("messageBox" === this.pageType) {
          var s =
            {
              comment_at: "id",
              retweet: "id",
              comment: "comment_id",
              comment_to: "comment_id",
            }[a] || "id";
          o = this.itemData[s];
        }
        return o;
      },
      closeComplaintPop: function () {
        this.showComplaintListPop = !1;
      },
      handleComplaintItem: function () {
        return c(this, arguments, function () {
          var t = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return e().mark(function i() {
            var a, o, s, r, l, c, m, p, f, g, v, C, b, y, k;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((l = n.clickEvent),
                      x("tl_jb_click"),
                      !1,
                      "messageBox" !== t.pageType)
                    ) {
                      e.next = 7;
                      break;
                    }
                    if (
                      ((c = t.itemData || {}),
                      (m = c.origin_msg_id),
                      (p =
                        (null == (a = t.busInternal)
                          ? void 0
                          : a.activeShareItem) || {}),
                      (f = p.origin_msg_id),
                      m === f)
                    ) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt("return");
                  case 7:
                    if (
                      (null ==
                      (s =
                        null == (o = t.busInternal)
                          ? void 0
                          : o.activeShareItem)
                        ? void 0
                        : s.id) !==
                        (null == (r = t.itemData) ? void 0 : r.id) &&
                      !t.isComplainUser
                    ) {
                      e.next = 36;
                      break;
                    }
                    return (
                      (g = t.getComplainId()),
                      (e.next = 11),
                      h.getStorage("illegalReport")
                    );
                  case 11:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 14;
                      break;
                    }
                    e.t0 = "{}";
                  case 14:
                    if (
                      ((v = e.t0),
                      (C = h.doJSONparse(v)),
                      (y = ""),
                      !t.isComplainUser)
                    ) {
                      e.next = 27;
                      break;
                    }
                    return (e.next = 20), D();
                  case 20:
                    if (!e.sent.isConnected) {
                      e.next = 24;
                      break;
                    }
                    (b = {
                      complained_user: t.busInternal.userID,
                      complain_type: l,
                    }),
                      u.complainUser(b),
                      (y = U),
                      (e.next = 25);
                    break;
                  case 24:
                    y = P;
                  case 25:
                    e.next = 34;
                    break;
                  case 27:
                    return (e.next = 29), D();
                  case 29:
                    if (!e.sent.isConnected) {
                      e.next = 33;
                      break;
                    }
                    (b = { id: g, type: l }),
                      u.illegalReport(b),
                      (C[g] = !0),
                      h.setStorage("illegalReport", JSON.stringify(C)),
                      t.$emit(
                        "tapIllegal",
                        "messageBox" === t.pageType ? t.itemData : { id: g }
                      ),
                      (y = U),
                      (e.next = 34);
                    break;
                  case 33:
                    y = P;
                  case 34:
                    5 === l &&
                      ((k = {
                        p_showNav: !0,
                        p_key: "com.tencent.shy.commentSystem",
                        p_url: "complaint-index?toast=".concat(
                          encodeURIComponent(y || U)
                        ),
                      }),
                      B({
                        url: d.toShyCommon(k),
                        eventName: "complaint",
                        instance: t,
                      })),
                      "wzq" === h.platform
                        ? w(y || U, t)
                        : (5 === l && "zxg" === h.platform) || w(y || U, t);
                  case 36:
                    t.busInternal.isShowComplaintToast = !1;
                  case 37:
                  case "end":
                    return e.stop();
                }
            }, i);
          })();
        });
      },
      onShareViewBlackListButtonClick: function () {
        var e = this;
        this.busInternal.activeShareItem.id === this.itemData.id &&
          k({ content: "拉黑后，你们将互不关注，且无法私信对方" }).then(
            function () {
              u.blacklistUser({
                action: 1,
                to_openid: e.itemData.user_id || e.itemData.from_user,
              }).then(function (t) {
                1 == +t.data &&
                  (w("拉黑成功"),
                  C("onMyFriendsListRefresh", {
                    is_blackList: 1,
                    module: !1,
                    userID: e.itemData.user_id,
                  }));
              });
            }
          );
      },
      onShareViewCancelBlackListButtonClick: function () {
        var e = this;
        this.busInternal.activeShareItem.id === this.itemData.id &&
          u
            .blacklistUser({
              action: 0,
              to_openid: this.itemData.user_id || this.itemData.from_user,
            })
            .then(function (t) {
              1 == +t.data &&
                (w("取消拉黑成功"),
                C("onMyFriendsListRefresh", {
                  is_blackList: 0,
                  module: !1,
                  userID: e.itemData.user_id,
                }));
            });
      },
      handleShareResult: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.channel,
          n = {
            wx: "fenxiangweixin",
            pyq: "fenxiangpengyouquan",
            qq: "fenxiangqq",
            qzone: "fenxiangkongjian",
          },
          i = this.getChannelMap();
        if (i) {
          var a = i.s2EventName,
            o = i[t];
          shy.reportAnalytics({
            eventName: a,
            dataObject: { id: this.itemData.id, fchannel_id_fm: o, channel: t },
          });
        } else x("".concat(this.reportPrefix, "_").concat(n[t]));
      },
      onShareViewCopyLinkButtonClick: function () {
        var e,
          t = this;
        if ("zxg" === h.platform) {
          if (this.busInternal.activeShareItem.id === this.itemData.id) {
            var n = this.getChannelMap(),
              i = null == (e = L[this.pageType]) ? void 0 : e.link,
              a = this.shareH5Url;
            if (n) {
              var o = n.link;
              (a = "".concat(a, "&fchannel_id_fm=").concat(o)),
                x({
                  eventName: n.s2EventName,
                  dataObject: { newsid: this.itemData.id, fchannel_id_fm: o },
                });
            } else i && (a = "".concat(a, "&fchannel_id_fm=").concat(i));
            this.$emit("copyLink"), I(a), w("复制链接成功");
          }
        } else
          "mini" === h.platform
            ? this.shareH5Url &&
              I(this.shareH5Url, function () {
                w("复制链接成功");
              })
            : this.$copyText(this.shareH5Url).then(function () {
                w("复制链接成功", t);
              });
      },
      getIllegalReasons: function () {
        return c(
          this,
          null,
          e().mark(function t() {
            var n,
              i,
              a,
              o,
              s,
              r,
              l,
              c = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        this.isComplainUser ||
                        (null ==
                        (i =
                          null == (n = this.busInternal)
                            ? void 0
                            : n.activeShareItem)
                          ? void 0
                          : i.id) ===
                          (null == (a = this.itemData) ? void 0 : a.id) ||
                        "zxg" !== h.platform
                      ) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (
                        !this[
                          (o = this.isComplainUser
                            ? "userIllegalConfig"
                            : "postIllegalConfig")
                        ]
                      ) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return");
                    case 5:
                      return (
                        (s = this.isComplainUser ? 1 : 0),
                        (e.next = 8),
                        u.getIllegalReasons({ reason_type: s })
                      );
                    case 8:
                      (r = e.sent).data &&
                        r.data.length &&
                        ((l = r.data).sort(function (e, t) {
                          return e.show_order - t.show_order;
                        }),
                        (this[o] = l.map(function (e, t) {
                          var n = {
                            title: e.reason,
                            enableforward: t === l.length - 1,
                            clickEvent: e.type,
                          };
                          return (
                            "wzq" === h.platform &&
                              (n.onTapMenu = c.handleComplaintItem),
                            n
                          );
                        })));
                    case 10:
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
      handleComplaintBanner: function () {
        var e, t;
        (null == (e = this.didAgreeUserAgreement) ? void 0 : e.value) ||
        "function" != typeof this.onCheckUserAgreementStatus
          ? ("comment" === this.type &&
              this.setBusData({ activeShareItem: this.itemData }),
            "user" === this.type && (t = { userID: this.userID, type: "user" }),
            this.onShareViewComplaintButtonClick(t),
            this.$emit("tapComplaint"))
          : this.onCheckUserAgreementStatus();
      },
      onShareViewComplaintButtonClick: function () {
        return c(this, arguments, function () {
          var t = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return e().mark(function i() {
            var a, o, s, r, l, c;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = n.type),
                      (l = n.userID),
                      "user" === r && t.setBusData({ userID: l, type: r }),
                      (t.isComplainUser =
                        "user" === t.busInternal.type && t.hack),
                      (e.next = 5),
                      t.getIllegalReasons()
                    );
                  case 5:
                    if ("zxg" !== h.platform) {
                      e.next = 12;
                      break;
                    }
                    if (
                      !(
                        (null ==
                        (o =
                          null == (a = t.busInternal)
                            ? void 0
                            : a.activeShareItem)
                          ? void 0
                          : o.id) ===
                          (null == (s = t.itemData) ? void 0 : s.id) ||
                        ("user" === t.busInternal.type && t.hack)
                      )
                    ) {
                      e.next = 10;
                      break;
                    }
                    if (
                      !t.busInternal.isShowComplaintToast &&
                      ("user" !== t.busInternal.type || t.hack)
                    ) {
                      e.next = 9;
                      break;
                    }
                    return e.abrupt("return");
                  case 9:
                    (t.busInternal.isShowComplaintToast = !0),
                      setTimeout(
                        function () {
                          S({
                            title: "选择投诉原因",
                            config:
                              t[
                                t.isComplainUser
                                  ? "userIllegalConfig"
                                  : "postIllegalConfig"
                              ],
                          });
                        },
                        T ? 300 : 0
                      );
                  case 10:
                    e.next = 13;
                    break;
                  case 12:
                    "mini" === h.platform
                      ? (6,
                        (c = []),
                        t.illeagalmenuList.forEach(function (e) {
                          var t = e.title;
                          c.length < 6 && c.push(t);
                        }),
                        S(c, function (e) {
                          var n = e.tapIndex;
                          if (n >= 0) {
                            var i = c[n];
                            t.handleComplaintItem(i);
                          }
                        }))
                      : "friends" === t.pageType
                      ? t.stockBridge.busEmit(
                          "community-commentMoreComplaint",
                          t.illeagalmenuList
                        )
                      : (t.showComplaintListPop = !0);
                  case 13:
                  case "end":
                    return e.stop();
                }
            }, i);
          })();
        });
      },
      onShareViewDeleteButtonClick: function () {
        var e,
          t = this;
        if ("messageBox" !== this.pageType) {
          if (this.busInternal.activeShareItem.id === this.itemData.id) {
            if (this.busInternal.isShowDelToast) return;
            this.busInternal.isShowDelToast = !0;
            var n = null == (e = this.itemData) ? void 0 : e.id;
            k({ content: "确定删除吗？" })
              .then(function () {
                u.deleteRssSubject(n).then(function () {}),
                  w("删除成功", t),
                  t.$emit("tapDeleteItem", { id: n });
              })
              .catch(function (e) {});
          }
        } else {
          var i = (this.itemData || {}).origin_msg_id,
            a = void 0 === i ? "" : i;
          this.busInternal.activeShareItem.origin_msg_id &&
            this.busInternal.activeShareItem.origin_msg_id === a &&
            this.$emit("tapDeleteItem", this.itemData);
        }
      },
      handleSheet: function () {
        var e = this;
        return this.menuList.filter(function (t) {
          return -1 !== e.buttons.indexOf(t.id);
        });
      },
      handleShare: function (e) {
        var t = e.isShowChannel,
          n = void 0 === t || t,
          i = e.isShowFunctions,
          a = void 0 === i || i,
          o = {
            to:
              ["news", "personal"].indexOf(this.pageType) > -1
                ? ["wx", "pyq", "qq", "qzone"]
                : ["gpq", "wx", "pyq", "qq", "qzone"],
            function: ["copyLink"],
            type: "onlyEvent",
            params: {},
            callback: function () {},
          };
        if (this.itemData.owner) {
          if (
            (o.function.push("delete"),
            this.itemData &&
              d.commentSpecialStatus.indexOf(+this.itemData.status) > -1)
          ) {
            var s = o.function.indexOf("copyLink");
            s > -1 && o.function.splice(s, 1);
          }
        } else {
          if (
            -1 !==
            [
              "stock",
              "topic",
              "strategy",
              "section",
              "news",
              "hyperLink",
              "detail",
              "personal",
            ].indexOf(this.pageType)
          ) {
            var r = this.itemData.block_user || 0;
            o.function.push(r ? "cancelBlacklist" : "blacklist");
          }
          o.function.push("complaint");
        }
        "messageBox" === this.pageType &&
          ((o.function = ["complaint", "delete"]), (o.to = [])),
          (this.buttons = o.function),
          "zxg" === h.platform &&
            (n || (o.to = []), a || (o.function = []), b(o, function () {}));
      },
      onshareSelect: function (e) {
        var t,
          n,
          i = this,
          a = e.channel,
          o = e.state;
        if (
          (null == (t = this.busInternal.activeShareItem) ? void 0 : t.id) ===
            (null == (n = this.itemData) ? void 0 : n.id) &&
          "success" === o
        ) {
          var s = this.getShareParams();
          "gpq" === a
            ? this.$emit("onHandleTurn")
            : y(a, "link", s, function () {
                u.getStaticNums({ ids: i.itemData.id })
                  .then(function (e) {
                    e.code;
                  })
                  .catch(function (e) {});
              });
        }
      },
      getShareParams: function () {
        var e,
          t = this.itemData;
        this.subjectData.id &&
          "detail" === this.pageType &&
          (t = this.subjectData);
        var n = t,
          i = n.content,
          a = n.title,
          o = n.showType,
          s = (n.newsContent, n.user_name),
          r = n.status,
          l = i || "";
        l =
          l
            .replace(/<[^>]+>|&[^>]+;/g, "")
            .replace(/\u0001|\u0002/g, "#")
            .replace(/\u001c<(3|4|5),(.+?):(.*?)>\u001c/g, "#$3#")
            .replace(/\u001c<(1|2),(.+?):(.*?)>\u001c/g, "@$3")
            .replace(/\u001f<(1),(.+?):(.*?):((.|\r|\n)*?)>\u001f/, "$4")
            .replace(/\u001f<(1),(.+?):((.|\r|\n)*?)>\u001f/g, "@$3") ||
          "【发表帖子】";
        var c = (l = Array.from(l).slice(0, 50).join("")).match(/\[(\S*)/)
          ? "".concat(l.match(/\[(\S*)/)[1], " ")
          : "";
        l = l.replace(c, "").replace(/\u001e/g, "");
        var u = a && "long" === o ? a : "你的好友邀请你一起看",
          h = "来自@".concat(s, "的帖子");
        [2, 3].indexOf(r) > -1 &&
          ((u = "很抱歉，该帖目前不支持浏览哦"),
          "long" === o && (h = "很抱歉，该帖目前不支持浏览哦"));
        var m = {
            title: u,
            summary: h,
            url: this.shareH5Url || "",
            iconUrl:
              "https://st.gtimg.com/design/ed6a092ef923f348025a4e00fd006f1e.png",
          },
          p = null == (e = L[this.pageType]) ? void 0 : e.link;
        return (
          p &&
            ((m.url = "".concat(this.shareH5Url, "&fchannel_id_fm=").concat(p)),
            (m.addition_share_report_info = { fchannel_id_fm: p })),
          m
        );
      },
      getMiniProgramTitle: function () {
        return ["分享股票圈帖子", "自在选股，轻松交流"][
          (10, 20, Math.round(10 * Math.random() + 10) % 2)
        ];
      },
    },
  };
Array || f.resolveComponent("listPop")();
var V = f._export_sfc(M, [
  [
    "render",
    function (e, t, n, i, a, o) {
      return f.e(
        { a: !n.hideSangedianIcon },
        n.hideSangedianIcon
          ? {}
          : {
              b: f.n(n.hack ? "hack" : ""),
              c: f.o(function () {
                return o.handleShowMore && o.handleShowMore.apply(o, arguments);
              }, 5783),
            },
        { d: n.showComplaintBanner },
        n.showComplaintBanner
          ? {
              e: f.t(o.complaintText),
              f: f.o(function () {
                return (
                  o.handleComplaintBanner &&
                  o.handleComplaintBanner.apply(o, arguments)
                );
              }, 5784),
              g: f.n(a.gear ? "size-special" : ""),
            }
          : {},
        { h: a.showComplaintListPop },
        a.showComplaintListPop
          ? {
              i: f.o(o.closeComplaintPop, 5785),
              j: f.p({ title: "请选择投诉原因", menuList: o.illeagalmenuList }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-e6de5b8b"],
]);
wx.createComponent(V);
