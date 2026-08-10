var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, a) {
    return new Promise(function (i, n) {
      var r = function (e) {
          try {
            o(a.next(e));
          } catch (e) {
            n(e);
          }
        },
        s = function (e) {
          try {
            o(a.throw(e));
          } catch (e) {
            n(e);
          }
        },
        o = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(r, s);
        };
      o((a = a.apply(e, t)).next());
    });
  },
  a = require("../../../../../../../common/vendor.js"),
  i = require("../../mixins/guess-page-mixin.js"),
  n = {
    name: "OpinionItem",
    components: {
      OpinionNiuAnimation: function () {
        return "./niu-animation.js";
      },
    },
    props: {
      itemData: { type: Object, required: !0 },
      index: { type: Number, default: 0 },
      type: { type: String, default: "" },
      topicId: { type: String, default: "" },
      TDate: { type: String, default: "" },
      commentId: { type: String, default: "" },
      beforeTapLike: { type: Function, default: null },
    },
    data: function () {
      var e = parseInt(this.itemData.likeNum, 10);
      return {
        selected: !!this.itemData.likeId,
        num: Number.isNaN(e) ? 0 : e,
        DEFAULT_AVATAR:
          "https://st.gtimg.com/design/f15ea1c32f0fd0254a70e99823a9e642.png",
        SELECTED_IMG:
          "https://st.gtimg.com/design/c1e6b21ad97eeeb7e64a3662d1dc7d3c.png",
        LIKE_DEFAULT_IMG:
          "https://st.gtimg.com/design/f23a4e989d5cd0f810478782a5bfc946.png",
        avatarFail: !0,
        avatarTryTime: 0,
        avatarTimer: null,
        isTapLike: !1,
        isLikePosting: !1,
        likeAnimateTimer: null,
      };
    },
    computed: {
      contents: function () {
        var e = Array.isArray(this.itemData.contents)
          ? this.itemData.contents.slice()
          : [];
        return (
          this.itemData.postImage &&
            e.length <= 0 &&
            e.push({ image: this.itemData.postImage, type: "image" }),
          e.length &&
            "topic" !== e[0].type &&
            e.unshift({ text: "猜涨跌活动", type: "topic" }),
          e
        );
      },
      likeUsers: function () {
        return Array.isArray(this.itemData.likeUsers)
          ? this.itemData.likeUsers.slice(0, 3)
          : [];
      },
    },
    beforeDestroy: function () {
      this.clearAvatarTimer(), this.clearLikeAnimateTimer();
    },
    methods: {
      clearAvatarTimer: function () {
        this.avatarTimer &&
          (clearTimeout(this.avatarTimer), (this.avatarTimer = null));
      },
      onAvatarLoad: function () {
        (this.avatarFail = !1), this.clearAvatarTimer();
      },
      onAvatarError: function () {
        var e = this;
        this.clearAvatarTimer(),
          this.avatarTryTime < 3
            ? (this.avatarTimer = setTimeout(function () {
                e.$refs.avatarImg &&
                  (e.$refs.avatarImg.src =
                    e.itemData.userImage || e.DEFAULT_AVATAR),
                  (e.avatarTryTime += 1);
              }, 100))
            : (this.avatarFail = !0);
      },
      clearLikeAnimateTimer: function () {
        this.likeAnimateTimer &&
          (clearTimeout(this.likeAnimateTimer), (this.likeAnimateTimer = null));
      },
      triggerLikeAnimation: function () {
        var e = this;
        this.clearLikeAnimateTimer(),
          (this.isTapLike = !0),
          (this.likeAnimateTimer = setTimeout(function () {
            e.isTapLike = !1;
          }, 850));
      },
      getLikeUserImage: function (e) {
        return (
          (null == e ? void 0 : e.user_image) ||
          (null == e ? void 0 : e.userImage) ||
          this.DEFAULT_AVATAR
        );
      },
      goPersonPage: function () {
        a.StockBridge.report("comment_goPersonPage");
      },
      putRssLike: function (i) {
        return t(this, arguments, function (t) {
          var i = t.attitude,
            n = t.publishId,
            r = t.nickname,
            s = t.avatar_url;
          return e().mark(function t() {
            var o, c, u, m, p, l;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (o = getApp()),
                        12,
                        (c = a.index.getStorageSync("_qluin") || ""),
                        (u = Date.now()),
                        (m = ""
                          .concat(
                            o.globalData.CGI_PREFIX,
                            "zxg/commentPlat/rssService/putRssLike2?check="
                          )
                          .concat(12, "&app=wzq&openid=")
                          .concat(c, "&_=")
                          .concat(u)),
                        e.abrupt(
                          "return",
                          a.StockBridge.request(m, "POST", {
                            attitude: i,
                            publish_id: n,
                          })
                        )
                      );
                    case 5:
                      throw (
                        ((e.prev = 5),
                        (e.t0 = e.catch(0)),
                        new Error("小程序点赞请求失败: ".concat(e.t0.message)))
                      );
                    case 8:
                      return (
                        (p = ""),
                        (e.prev = 9),
                        (e.next = 12),
                        require
                          .async(
                            "../../../../../../indexSbg/js-cookie/src/js.cookie.js"
                          )
                          .then(function (e) {
                            return e.js_cookie;
                          })
                      );
                    case 12:
                      (l = e.sent.default),
                        (p =
                          "zxg/commentPlat/rssService/putRssLike2?check=12&app=wzq&openid=".concat(
                            l.get("wzq_qluin") || ""
                          )),
                        (e.next = 19);
                      break;
                    case 16:
                      throw (
                        ((e.prev = 16),
                        (e.t1 = e.catch(9)),
                        new Error(
                          "微信 H5 点赞请求失败: ".concat(e.t1.message)
                        ))
                      );
                    case 19:
                      return e.abrupt(
                        "return",
                        a.StockBridge.request(p, "POST", {
                          attitude: i,
                          publish_id: n,
                          nickname: r || "",
                          avatar_url: s || "",
                        })
                      );
                    case 20:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [
                [0, 5],
                [9, 16],
              ]
            );
          })();
        });
      },
      goDetailPage: function () {
        var e = this;
        a.StockBridge.report("shequ_caizhangdie_guandian_guandianxiangqing"),
          setTimeout(function () {
            var t = "".concat(e.itemData.id, "&showGoing=true");
            a.StockRouter.routeTo({
              name: "actWebview",
              query: {
                url: encodeURIComponent(
                  "https://wzq.tenpay.com/mp/v2/index.html#/comment/detail/detail?nid=".concat(
                    t
                  )
                ),
              },
            });
          }, 100);
      },
      tapLike: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var n, r, s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!this.isLikePosting) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (!this.beforeTapLike) {
                        e.next = 13;
                        break;
                      }
                      return (e.prev = 3), (e.next = 6), this.beforeTapLike();
                    case 6:
                      if (e.sent) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return");
                    case 8:
                      e.next = 13;
                      break;
                    case 10:
                      return (
                        (e.prev = 10), (e.t0 = e.catch(3)), e.abrupt("return")
                      );
                    case 13:
                      return (
                        (n = this.selected),
                        (r = this.num),
                        (this.isLikePosting = !0),
                        (this.selected = !this.selected),
                        (this.num = Math.max(
                          0,
                          this.num + (this.selected ? 1 : -1)
                        )),
                        this.triggerLikeAnimation(),
                        (e.prev = 15),
                        (s = n ? 0 : -1),
                        "",
                        "",
                        !i.IS_MINIPROGRAM && i.IS_ZXG,
                        (e.next = 21),
                        this.putRssLike({
                          attitude: s,
                          publishId: this.itemData.id,
                          nickname: "",
                          avatar_url: "",
                        })
                      );
                    case 21:
                      a.StockBridge.report(
                        "shequ_caizhangdie_guandian_dianzan"
                      ),
                        (e.next = 27);
                      break;
                    case 24:
                      (e.prev = 24),
                        (e.t1 = e.catch(15)),
                        (this.selected = n),
                        (this.num = r),
                        this.triggerLikeAnimation();
                    case 27:
                      return (
                        (e.prev = 27), (this.isLikePosting = !1), e.finish(27)
                      );
                    case 30:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [
                [3, 10],
                [15, 24, 27, 30],
              ]
            );
          })
        );
      },
    },
  };
Array || a.resolveComponent("OpinionNiuAnimation")();
var r = a._export_sfc(n, [
  [
    "render",
    function (e, t, i, n, r, s) {
      return a.e(
        {
          a: !r.avatarFail,
          b: i.itemData.userImage || r.DEFAULT_AVATAR,
          c: a.o(function () {
            return s.onAvatarLoad && s.onAvatarLoad.apply(s, arguments);
          }, 4459),
          d: a.o(function () {
            return s.onAvatarError && s.onAvatarError.apply(s, arguments);
          }, 4460),
          e: r.avatarFail,
        },
        r.avatarFail ? { f: r.DEFAULT_AVATAR } : {},
        {
          g: r.avatarFail ? 1 : "",
          h: a.t(i.itemData.userName),
          i: "comment" !== i.itemData.type,
        },
        "comment" !== i.itemData.type ? { j: a.t(i.itemData.formatTime) } : {},
        { k: i.itemData.id },
        i.itemData.id
          ? a.e(
              {
                l: a.f(s.contents, function (e, t, i) {
                  return a.e(
                    { a: "stock" === e.type && e.symbol },
                    "stock" === e.type && e.symbol
                      ? { b: a.t(e.text), c: a.t(e.symbolShow), d: a.n(e.type) }
                      : "emoji" === e.type
                      ? {
                          f: a.n("epage-".concat(e.emojiPage)),
                          g: a.n("eid-".concat(e.emojiId)),
                          h: e.emojiName,
                        }
                      : "topic" === e.type
                      ? { j: a.t(e.text), k: a.n(e.type) }
                      : "strategy" === e.type
                      ? { m: a.t(e.text), n: a.n(e.type) }
                      : "atPerson" === e.type
                      ? { p: a.t(e.text), q: a.n(e.type) }
                      : "live" === e.type
                      ? { s: a.t(e.text), t: a.n(e.type) }
                      : "plain-br" === e.type || "image" === e.type
                      ? {}
                      : { x: a.t(e.text), y: a.n(e.type) },
                    {
                      e: "emoji" === e.type,
                      i: "topic" === e.type,
                      l: "strategy" === e.type,
                      o: "atPerson" === e.type,
                      r: "live" === e.type,
                      v: "plain-br" === e.type,
                      w: "image" === e.type,
                      z: "contents-".concat(t),
                    }
                  );
                }),
                m: a.o(function () {
                  return s.goDetailPage && s.goDetailPage.apply(s, arguments);
                }, 4461),
                n: s.likeUsers.length,
              },
              s.likeUsers.length
                ? {
                    o: a.f(s.likeUsers, function (e, t, a) {
                      return { a: s.getLikeUserImage(e), b: e.user_id };
                    }),
                  }
                : {},
              {
                p: a.sr("niu", "57ad2638-0"),
                q: a.p({
                  "is-tap": r.isTapLike,
                  selected: r.selected,
                  num: r.num,
                  "default-icon": r.LIKE_DEFAULT_IMG,
                  "selected-icon": r.SELECTED_IMG,
                }),
                r: a.o(function () {
                  return s.tapLike && s.tapLike.apply(s, arguments);
                }, 4462),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-57ad2638"],
]);
wx.createComponent(r);
