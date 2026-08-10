var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  i = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  c = function (e, t, i) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  l = function (e, t, n) {
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
  h = require("../../utils/service/index.js"),
  u = require("../../../../stock-community-base/utils/knife.js"),
  p = require("../../../../stock-community-base/utils/api/index.js"),
  m = require("../../../../stock-community-base/utils/mixins/checkComStatus.js"),
  d = require("../../../../stock-community-base/utils/constant.js"),
  f = require("../../../../../../../common/vendor.js"),
  S = require("../../../../../vue-clipboard2/vue-clipboard.js");
f.Vue.use(S.VueClipboard);
var g = u.sdk,
  v = g.notify,
  y = (g.openShareView, g.share),
  k = g.showModal,
  C = g.showCommunityComplaint,
  w = g.showToast,
  _ = g.showToastSuccess,
  b = g.copyToPasteboard,
  x = g.reportAnalytics,
  B = g.onFunctionButtonClick,
  D = g.getNetworkStatus,
  I = p.api.goPageCommon,
  U = (navigator && navigator.userAgent) || "",
  T = U && !!U.match(/\(i[^]+( U)? CPU.+Mac OS X/),
  q = {
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
  j = { detail: { link: "1000110004175" } },
  N = {
    comment: "内容不构成投资建议，投资者应独立决策并自行承担风险。",
    user: "如该用户违反社区规则，您可通过“举报”按钮进行投诉。",
  },
  O = "您的投诉已收到，我们会尽快审核处理~",
  L = "当前网络不可用，请检查你的网络设置",
  P = {
    name: "handleMore",
    mixins: [m.CheckStatusMixin],
    components: {
      listPop: function () {
        return "../listPop/index.js";
      },
    },
    inject: { newsCommentId: { default: "" } },
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      pageType: { type: String, default: "" },
      BUS: {
        type: Object,
        default: function () {
          return {};
        },
      },
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
        platform: u.platform,
        gear: "wzq" === u.platform && window.innerWidth > 400,
        showComplaintListPop: !1,
        isAPP: "zxg" === u.platform,
        isTapNavMore: !1,
      };
    },
    created: function () {
      var e = this;
      "zxg" === u.platform &&
        this.BUS.$on &&
        (this.BUS.$on(
          "onShareViewCopyLinkButtonClick",
          this.onShareViewCopyLinkButtonClick
        ),
        this.BUS.$on(
          "onShareViewComplaintButtonClick",
          this.onShareViewComplaintButtonClick
        ),
        this.BUS.$on(
          "onShareViewBlackListButtonClick",
          this.onShareViewBlackListButtonClick
        ),
        this.BUS.$on(
          "onShareViewCancelBlackListButtonClick",
          this.onShareViewCancelBlackListButtonClick
        ),
        this.BUS.$on(
          "onShareViewDeleteButtonClick",
          this.onShareViewDeleteButtonClick
        ),
        this.BUS.$on("onCommunityComplaint", this.handleComplaintItem),
        this.BUS.$on("onCommunityComplaint", this.handleShareResult),
        this.BUS.$on("onshareSelect", this.onshareSelect),
        this.hideSangedianIcon &&
          "detail" === this.pageType &&
          B(function () {
            (e.isTapNavMore = !0), e.handleShowMore();
          }));
    },
    computed: {
      shareH5Url: function () {
        var e = this.itemData.id,
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
        return N[this.type] || "";
      },
      colorStyle: function () {
        return this.isAPP ? { color: "#7a8499" } : {};
      },
    },
    methods: {
      getChannelMap: function () {
        return q[this.pageType];
      },
      setBusData: function (e) {
        var t = e.activeShareItem,
          n = void 0 === t ? {} : t,
          i = e.isShowComplaintToast,
          a = void 0 !== i && i,
          o = e.isShowDelToast,
          s = void 0 !== o && o,
          r = e.userID,
          c = void 0 === r ? "" : r,
          l = e.type,
          h = void 0 === l ? "" : l;
        (this.BUS.activeShareItem = n),
          (this.BUS.isShowComplaintToast = a),
          (this.BUS.isShowDelToast = s),
          (this.BUS.userID = c),
          (this.BUS.type = h);
      },
      handleShowMore: function (e) {
        f.StockBridge.setSession("TopicAreaShareData", {});
        var n = e || {},
          l = n.isShowChannel,
          h = void 0 === l || l,
          u = n.isShowFunctions,
          p = void 0 === u || u;
        this.setBusData({
          activeShareItem: this.itemData,
          isShowComplaintToast: !1,
          isShowDelToast: !1,
        }),
          this.handleShare({ isShowChannel: h, isShowFunctions: p });
        var m,
          d = this.handleSheet();
        this.$emit(
          "tapMore",
          ((m = (function (e, n) {
            for (var i in n || (n = {})) s.call(n, i) && c(e, i, n[i]);
            if (o) {
              var a,
                l = t(o(n));
              try {
                for (l.s(); !(a = l.n()).done; ) {
                  i = a.value;
                  r.call(n, i) && c(e, i, n[i]);
                }
              } catch (e) {
                l.e(e);
              } finally {
                l.f();
              }
            }
            return e;
          })({}, this.itemData)),
          i(m, a({ actionSheet: d })))
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
        return l(this, arguments, function () {
          var t = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return e().mark(function i() {
            var a, o, s, r, c, l, p, m, f, S, g, v, y, k, C;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((c = n.clickEvent),
                      x("tl_jb_click"),
                      !1,
                      "messageBox" !== t.pageType)
                    ) {
                      e.next = 7;
                      break;
                    }
                    if (
                      ((l = t.itemData || {}),
                      (p = l.origin_msg_id),
                      (m =
                        (null == (a = t.BUS) ? void 0 : a.activeShareItem) ||
                        {}),
                      (f = m.origin_msg_id),
                      p === f)
                    ) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt("return");
                  case 7:
                    if (
                      (null ==
                      (s = null == (o = t.BUS) ? void 0 : o.activeShareItem)
                        ? void 0
                        : s.id) !==
                        (null == (r = t.itemData) ? void 0 : r.id) &&
                      !t.isComplainUser
                    ) {
                      e.next = 36;
                      break;
                    }
                    return (
                      (S = t.getComplainId()),
                      (e.next = 11),
                      u.getStorage("illegalReport")
                    );
                  case 11:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 14;
                      break;
                    }
                    e.t0 = "{}";
                  case 14:
                    if (
                      ((g = e.t0),
                      (v = u.doJSONparse(g)),
                      (k = ""),
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
                    (y = { complained_user: t.BUS.userID, complain_type: c }),
                      h.complainUser(y),
                      (k = O),
                      (e.next = 25);
                    break;
                  case 24:
                    k = L;
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
                    (y = { id: S, type: c }),
                      h.illegalReport(y),
                      (v[S] = !0),
                      u.setStorage("illegalReport", JSON.stringify(v)),
                      t.$emit(
                        "tapIllegal",
                        "messageBox" === t.pageType ? t.itemData : { id: S }
                      ),
                      (k = O),
                      (e.next = 34);
                    break;
                  case 33:
                    k = L;
                  case 34:
                    5 === c &&
                      ((C = {
                        p_showNav: !0,
                        p_key: "com.tencent.shy.commentSystem",
                        p_url: "complaint-index?toast=".concat(
                          encodeURIComponent(k || O)
                        ),
                      }),
                      I({
                        url: d.toShyCommon(C),
                        eventName: "complaint",
                        instance: t,
                      })),
                      "wzq" === u.platform
                        ? _(k || O, t, 150)
                        : (5 === c && "zxg" === u.platform) || w(k || O, t);
                  case 36:
                    t.BUS.isShowComplaintToast = !1;
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
        this.BUS.activeShareItem.id === this.itemData.id &&
          k({ content: "拉黑后，你们将互不关注，且无法私信对方" }).then(
            function () {
              h.blacklistUser({
                action: 1,
                to_openid: e.itemData.user_id || e.itemData.from_user,
              }).then(function (t) {
                1 == +t.data &&
                  (w("拉黑成功"),
                  v("onMyFriendsListRefresh", {
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
        this.BUS.activeShareItem.id === this.itemData.id &&
          h
            .blacklistUser({
              action: 0,
              to_openid: this.itemData.user_id || this.itemData.from_user,
            })
            .then(function (t) {
              1 == +t.data &&
                (w("取消拉黑成功"),
                v("onMyFriendsListRefresh", {
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
        if ("zxg" === u.platform) {
          if (this.BUS.activeShareItem.id === this.itemData.id) {
            var n = this.getChannelMap(),
              i = null == (e = j[this.pageType]) ? void 0 : e.link,
              a = this.shareH5Url;
            if (n) {
              var o = n.link;
              (a = "".concat(a, "&fchannel_id_fm=").concat(o)),
                x({
                  eventName: n.s2EventName,
                  dataObject: { newsid: this.itemData.id, fchannel_id_fm: o },
                });
            } else i && (a = "".concat(a, "&fchannel_id_fm=").concat(i));
            this.$emit("copyLink"), b(a), w("复制链接成功");
          }
        } else
          "mini" === u.platform
            ? this.shareH5Url &&
              b(this.shareH5Url, function () {
                w("复制链接成功");
              })
            : this.$copyText(this.shareH5Url).then(function () {
                w("复制链接成功", t);
              });
      },
      getIllegalReasons: function () {
        return l(
          this,
          null,
          e().mark(function t() {
            var n,
              i,
              a,
              o,
              s,
              r,
              c,
              l = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        this.isComplainUser ||
                        (null ==
                        (i =
                          null == (n = this.BUS) ? void 0 : n.activeShareItem)
                          ? void 0
                          : i.id) ===
                          (null == (a = this.itemData) ? void 0 : a.id) ||
                        "zxg" !== u.platform
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
                        h.getIllegalReasons({ reason_type: s })
                      );
                    case 8:
                      (r = e.sent).data &&
                        r.data.length &&
                        ((c = r.data).sort(function (e, t) {
                          return e.show_order - t.show_order;
                        }),
                        (this[o] = c.map(function (e, t) {
                          var n = {
                            title: e.reason,
                            enableforward: t === c.length - 1,
                            clickEvent: e.type,
                          };
                          return (
                            "wzq" === u.platform &&
                              (n.onTapMenu = l.handleComplaintItem),
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
        var e;
        "comment" === this.type &&
          this.setBusData({ activeShareItem: this.itemData }),
          "user" === this.type && (e = { userID: this.userID, type: "user" }),
          this.onShareViewComplaintButtonClick(e),
          this.$emit("tapComplaint");
      },
      onShareViewComplaintButtonClick: function () {
        return l(this, arguments, function () {
          var t = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return e().mark(function i() {
            var a, o, s, r, c, l;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = n.type),
                      (c = n.userID),
                      "user" === r && t.setBusData({ userID: c, type: r }),
                      (t.isComplainUser = "user" === t.BUS.type && t.hack),
                      (e.next = 5),
                      t.getIllegalReasons()
                    );
                  case 5:
                    if ("zxg" !== u.platform) {
                      e.next = 12;
                      break;
                    }
                    if (
                      !(
                        (null ==
                        (o = null == (a = t.BUS) ? void 0 : a.activeShareItem)
                          ? void 0
                          : o.id) ===
                          (null == (s = t.itemData) ? void 0 : s.id) ||
                        ("user" === t.BUS.type && t.hack)
                      )
                    ) {
                      e.next = 10;
                      break;
                    }
                    if (
                      !t.BUS.isShowComplaintToast &&
                      ("user" !== t.BUS.type || t.hack)
                    ) {
                      e.next = 9;
                      break;
                    }
                    return e.abrupt("return");
                  case 9:
                    (t.BUS.isShowComplaintToast = !0),
                      setTimeout(
                        function () {
                          C({
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
                    "mini" === u.platform || "wzq" === u.platform
                      ? (6,
                        (l = []),
                        t.illeagalmenuList.forEach(function (e) {
                          var t = e.title;
                          l.length < 6 && l.push(t);
                        }),
                        C(
                          l,
                          function (e) {
                            var n = e.tapIndex;
                            if (n >= 0) {
                              var i = l[n];
                              t.handleComplaintItem(i);
                            }
                          },
                          t
                        ))
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
          if (this.BUS.activeShareItem.id === this.itemData.id) {
            if (this.BUS.isShowDelToast) return;
            this.BUS.isShowDelToast = !0;
            var n = null == (e = this.itemData) ? void 0 : e.id;
            k({ content: "确定删除吗？" })
              .then(function () {
                h.deleteRssSubject(n).then(function () {}),
                  w("删除成功", t),
                  t.$emit("tapDeleteItem", { id: n });
              })
              .catch(function (e) {});
          }
        } else {
          var i = (this.itemData || {}).origin_msg_id,
            a = void 0 === i ? "" : i;
          this.BUS.activeShareItem.origin_msg_id &&
            this.BUS.activeShareItem.origin_msg_id === a &&
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
            2 === this.itemData.status ||
              3 === this.itemData.status ||
              1e3 === this.itemData.status)
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
        if (
          ("messageBox" === this.pageType &&
            ((o.function = ["complaint", "delete"]), (o.to = [])),
          (this.buttons = o.function),
          "zxg" === u.platform)
        ) {
          var c = o.to.indexOf("pyq") + 1;
          o.to.splice(c, 0, "yb"),
            n || (o.to = []),
            a || (o.function = []),
            d.commentSpecialStatus.includes(this.itemData.status)
              ? this.hideSangedianIcon && !this.isTapNavMore
                ? (this.checkSubjectStatus(this.itemData, "turn"),
                  (this.isTapNavMore = !1))
                : ((o.to = []), shy.openShareView(o, function () {}))
              : shy.openShareView(o, function () {});
        }
      },
      onTopicAreaShareSelect: function (e, t, n) {
        if ("wx" === e.channel && t && n) {
          var i = {
              url: "qqstock://SHY?info=".concat(
                encodeURIComponent(
                  JSON.stringify({
                    p_key: "com.tencent.shy.share_snapshot",
                    p_url: "index?render=news&info="
                      .concat(t, "&share=")
                      .concat(n),
                    showNav: !1,
                  })
                )
              ),
              height: 0,
              coverColor: "#00000000",
              backgroundColor: "#00000000",
            },
            a = "qqstock://SDModal?info=".concat(
              encodeURIComponent(JSON.stringify(i))
            );
          shy.navigateTo({ url: a });
        }
      },
      onshareSelect: function (t) {
        return l(
          this,
          null,
          e().mark(function n() {
            var i, a, o, s, r, c, l, h, u, p;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((s = this),
                        (r = t.channel),
                        (c = t.state),
                        "topic" !== this.pageType)
                      ) {
                        e.next = 13;
                        break;
                      }
                      return (
                        (e.prev = 2),
                        (e.next = 5),
                        f.StockBridge.getSession("TopicAreaShareData")
                      );
                    case 5:
                      if (!((l = e.sent) && Object.keys(l).length > 0)) {
                        e.next = 9;
                        break;
                      }
                      return (
                        f.StockBridge.setSession("TopicAreaShareData", {}),
                        "success" === c &&
                          ((h = l.snapInfo),
                          (u = l.shareInfo),
                          h && u && this.onTopicAreaShareSelect(t, h, u)),
                        e.abrupt("return")
                      );
                    case 9:
                      e.next = 13;
                      break;
                    case 11:
                      (e.prev = 11), (e.t0 = e.catch(2));
                    case 13:
                      if (
                        (null == (i = this.BUS.activeShareItem)
                          ? void 0
                          : i.id) ===
                          (null == (a = this.itemData) ? void 0 : a.id) &&
                        "success" === c
                      ) {
                        e.next = 15;
                        break;
                      }
                      return e.abrupt("return");
                    case 15:
                      (p = this.getShareParams()),
                        (e.t1 = r),
                        (e.next =
                          "gpq" === e.t1 ? 19 : "wx" === e.t1 ? 21 : 23);
                      break;
                    case 19:
                      return this.$emit("onHandleTurn"), e.abrupt("break", 24);
                    case 21:
                      return (
                        this.shareToMinigram(),
                        this.shareStatic(),
                        e.abrupt("break", 24)
                      );
                    case 23:
                      isNaN(this.itemData.retweet_count) ||
                        (this.itemData.retweet_count += 1),
                        "yb" === r &&
                          ((p.aiContext = null != (o = p.url) ? o : ""),
                          (p.aiContextType = "link"),
                          (p.prompt =
                            "请提炼该内容的核心观点，要求回答简明扼要，输出的结论不超过300个字。")),
                        y(r, "link", p, function () {
                          s.shareStatic();
                        });
                    case 24:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this,
              [[2, 11]]
            );
          })
        );
      },
      getPostId: function () {
        var e = this.itemData.id,
          t = (this.subjectData || {}).id,
          n = e;
        return t && "detail" === this.pageType && (n = t), n;
      },
      shareToMinigram: function () {
        var e,
          t,
          n,
          i = this.itemData,
          a = i.id,
          o = i.showType,
          s = i.title,
          r = i.user_image,
          c = i.from_user_image,
          l = i.user_name,
          h = i.from_user_name,
          u = i.sub_content,
          p = i.content,
          m = i.like_num,
          d = encodeURIComponent(
            JSON.stringify({
              summary: "long" === o ? u : this.parseShareContent(p, 60),
              avatar: c || r,
              user: h || l,
              likeNum: m,
              publish_time: this.itemData.created_at,
            })
          ),
          f = window.__moduleName__ || "com.tencent.shy.commentSystem",
          S = null == (e = j[this.pageType]) ? void 0 : e.link,
          g = encodeURIComponent(
            JSON.stringify({
              to: "wx",
              type: "miniProgram",
              userName: "gh_71365cb35ad5",
              path: "/pages/comment/detailView/main?nid="
                .concat(a, "&fchannel_id_fm=")
                .concat(S),
              url: "".concat(this.shareH5Url, "&fchannel_id_fm=").concat(S),
              title: "long" === o ? s : "我发现这篇帖子不错，一起来看看",
              addition_share_report_info: {
                postid: this.getPostId(),
                fchannel_id_fm: S,
                from: ""
                  .concat(f)
                  .concat(
                    (null ==
                    (n =
                      null == (t = null == location ? void 0 : location.hash)
                        ? void 0
                        : t.split("?")[0])
                      ? void 0
                      : n.substring(1)) || "/index"
                  ),
              },
            })
          ),
          v = {
            url: "qqstock://SHY?info=".concat(
              encodeURIComponent(
                JSON.stringify({
                  p_key: "com.tencent.shy.share_snapshot",
                  p_url: "index?render=sq&info=".concat(d, "&share=").concat(g),
                  showNav: !1,
                })
              )
            ),
            height: 0,
            coverColor: "#00000000",
            backgroundColor: "#00000000",
          },
          y = "qqstock://SDModal?info=".concat(
            encodeURIComponent(JSON.stringify(v))
          );
        shy.navigateTo({ url: y });
      },
      shareStatic: function () {
        h.getStaticNums({ ids: this.itemData.id })
          .then(function (e) {
            e.code;
          })
          .catch(function (e) {});
      },
      getShareParams: function () {
        var e,
          t = this.itemData;
        this.subjectData.id &&
          "detail" === this.pageType &&
          (t = this.subjectData);
        var n = t,
          i = n.title,
          a = n.showType,
          o = n.user_name,
          s = n.status,
          r = i && "long" === a ? i : "你的好友邀请你一起看",
          c = "来自@".concat(o, "的帖子");
        [2, 3].indexOf(s) > -1 &&
          ((r = "很抱歉，该帖目前不支持浏览哦"),
          "long" === a && (c = "很抱歉，该帖目前不支持浏览哦"));
        var l = {
            title: r,
            summary: c,
            url: this.shareH5Url || "",
            iconUrl:
              "https://st.gtimg.com/design/ed6a092ef923f348025a4e00fd006f1e.png",
          },
          h = null == (e = j[this.pageType]) ? void 0 : e.link;
        return (
          h &&
            ((l.url = "".concat(this.shareH5Url, "&fchannel_id_fm=").concat(h)),
            (l.addition_share_report_info = { fchannel_id_fm: h })),
          l
        );
      },
      parseShareContent: function (e, t) {
        var n = e || "";
        n =
          n
            .replace(/\u0001|\u0002/g, "#")
            .replace(/\u001c<(3|4|5),(.+?):(.*?)>\u001c/g, "#$3#")
            .replace(/\u001c<(1|2),(.+?):(.*?)>\u001c/g, "@$3")
            .replace(/\u001f<(1),(.+?):(.*?):((.|\r|\n)*?)>\u001f/, "$4")
            .replace(/\u001f<(1),(.+?):((.|\r|\n)*?)>\u001f/g, "@$3")
            .replace(/<[^>]+>|&[^>]+;/g, "") || "【发表帖子】";
        var i = (n = Array.from(n).slice(0, t).join("")).match(/\u001e\[(\S*)/)
          ? "".concat(n.match(/\u001e\[(\S*)/)[1], " ")
          : "";
        return (n = n.replace(i, "").replace(/\u001e/g, ""));
      },
    },
  };
Array || f.resolveComponent("listPop")();
var M = f._export_sfc(P, [
  [
    "render",
    function (e, t, n, i, a, o) {
      return f.e(
        { a: !n.hideSangedianIcon },
        n.hideSangedianIcon
          ? {}
          : {
              b: f.n(n.hack ? "hack" : ""),
              c: f.s(o.colorStyle),
              d: f.o(function () {
                return o.handleShowMore && o.handleShowMore.apply(o, arguments);
              }, 4896),
            },
        { e: "wzq" === a.platform && n.showComplaintBanner },
        "wzq" === a.platform && n.showComplaintBanner
          ? {
              f: f.t(o.complaintText),
              g: f.o(function () {
                return (
                  o.handleComplaintBanner &&
                  o.handleComplaintBanner.apply(o, arguments)
                );
              }, 4897),
              h: f.n(a.gear ? "size-special" : ""),
            }
          : {},
        { i: a.showComplaintListPop },
        a.showComplaintListPop
          ? {
              j: f.o(o.closeComplaintPop, 4898),
              k: f.p({ title: "请选择投诉原因", menuList: o.illeagalmenuList }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-79bb70e2"],
]);
wx.createComponent(M);
