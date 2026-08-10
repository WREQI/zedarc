var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../@babel/runtime/helpers/typeof"),
  i = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  r = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  l = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  c = function (e, t, i) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  d = function (e, t) {
    for (var i in t || (t = {})) a.call(t, i) && c(e, i, t[i]);
    if (l) {
      var o,
        r = n(l(t));
      try {
        for (r.s(); !(o = r.n()).done; ) {
          i = o.value;
          u.call(t, i) && c(e, i, t[i]);
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    }
    return e;
  },
  m = function (e, t) {
    return r(e, s(t));
  },
  p = function (e, t, i) {
    return new Promise(function (n, o) {
      var r = function (e) {
          try {
            l(i.next(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          try {
            l(i.throw(e));
          } catch (e) {
            o(e);
          }
        },
        l = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(r, s);
        };
      l((i = i.apply(e, t)).next());
    });
  },
  h = require("../../../../../../common/vendor.js"),
  _ = require("../../../stock-video/api/request.js"),
  f = require("../../pages/information/mp.js"),
  v = require("../../../stock-news-base/service/news/gray.js"),
  g = new _.VideoAPI(),
  b = {
    name: "VideoList",
    components: {
      CustomVideo: function () {
        return "./customVideo.js";
      },
    },
    inject: { stockBridge: { default: {} } },
    props: ["isActive", "mpScrollHeight"],
    data: function () {
      return {
        isMute: !0,
        loaded: !1,
        loading: !1,
        feedsList: [],
        pullupText: "继续下拉查看更多",
        params: { page_num: 1, limit: 20, last_medias: [] },
        nextPageCursor: "",
        playVideo: [],
        collectReported: [],
        isFirstShow: !0,
        wntjTab: {},
        mpRefreshTriggered: !1,
        mpPullDisabled: !1,
        isFirstLoad: !0,
        skin:
          (void 0 !== h.wx$1 &&
            h.wx$1.getStorageSync &&
            h.wx$1.getStorageSync("user/skin")) ||
          "white",
      };
    },
    computed: {
      isMP: function () {
        return "mp" === this.stockBridge.ENV;
      },
      innerWidth: function () {
        return (
          (h.wx$1.getWindowInfo && h.wx$1.getWindowInfo()) ||
          h.wx$1.getSystemInfoSync()
        ).windowWidth;
      },
      winHeight: function () {
        return (
          (h.wx$1.getWindowInfo && h.wx$1.getWindowInfo()) ||
          h.wx$1.getSystemInfoSync()
        ).windowHeight;
      },
    },
    watch: {
      isActive: function (e) {
        e && this.onPullingDown(!0);
      },
    },
    created: function () {
      this.stockBridge.busOn("updateList", this.onPullingDown);
    },
    beforeDestroy: function () {
      this.stockBridge.busOff("updateList", this.onPullingDown);
    },
    activated: function () {
      this.updateVoiceControlSetting();
    },
    deactivated: function () {},
    mounted: function () {
      var e = this;
      this.$on("hook:activated", function () {
        return document.addEventListener("scroll", e.handleVideoCeiling);
      });
    },
    methods: {
      onActivated: function () {
        this.updateVoiceControlSetting();
      },
      onMpScroll: function (e) {
        this.$emit("onMpScroll", e),
          (this.scrollTop = e.detail.scrollTop),
          this.onScroll();
      },
      onShow: function () {
        return p(
          this,
          null,
          i().mark(function e() {
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (this.enterTime = Date.now()),
                        this.dataReport({
                          event: "information.video.tab.onShow",
                        }),
                        this.sendExposure(),
                        this.isFirstShow &&
                          (this.onPullingDown(!0),
                          this.onActivated(),
                          (this.isFirstShow = !1)),
                        this.updateVoiceControlSetting();
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      onHide: function () {
        var e = this;
        this.stockBridge.busEmit("growth-user.behavior.union", {
          type: "click",
          event: "watch_vedio",
          paused: !0,
        });
        var t = this;
        this.dataReport({ event: "information.video.tab.onHide" }),
          this.enterTime &&
            this.dataReport({
              event: "information.video.tab.stay_time",
              eventData: { stay_time: Date.now() - this.enterTime },
            }),
          this.playVideo.length &&
            this.playVideo.map(function (i, n) {
              var o = e.$refs["customVideo_".concat(i)];
              o && o[0] && (o[0].pauseVideo(), t.playVideo.splice(n, 1));
            });
      },
      onPullingDown: function () {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        t || this.dataReport({ event: "information.video.tab.pullDown" }),
          t || (this.mpRefreshTriggered = !0),
          this.load(!0)
            .then(function (t) {
              var i = t.hasMore,
                n = t.list;
              (e.hasMore = i),
                (e.feedsList = n),
                e.getPosiInfo(),
                (e.mpRefreshTriggered = !1),
                e.$emit("refreshListSuccess"),
                e.$nextTick(function () {
                  e.sendExposure();
                });
            })
            .catch(function (t) {
              e.mpRefreshTriggered = !1;
            });
      },
      onPullingUp: function () {
        var e = this;
        return this.loaded
          ? this.hasMore
            ? (this.dataReport({ event: "information.video.tab.reachBottom" }),
              new Promise(function (t, i) {
                e.load()
                  .then(function (i) {
                    if (i) {
                      var n = i.hasMore,
                        o = i.list;
                      (e.hasMore = n), (e.feedsList = o), e.getPosiInfo();
                    }
                    e.hasMore ? t() : t(!0), e.$emit("refreshListSuccess");
                  })
                  .catch(function (e) {
                    i(e);
                  });
              }))
            : Promise.resolve(!0)
          : Promise.resolve(!1);
      },
      onMpReachBottom: function () {
        this.onPullingUp();
      },
      updateComCount: function (e, t) {
        this.feedsList = this.feedsList.map(function (i) {
          return i.news_id === t && (i.comment_num = e), i;
        });
      },
      handleTapDetail: function (e) {
        return p(this, arguments, function (e) {
          var t = this,
            n = e.action,
            o = e.data,
            r = e.channel;
          return i().mark(function e() {
            var s, l, a, u, c, d, m, p, _, f, v;
            return i().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (l = o.news_type),
                      (a = o.news_id),
                      (u = o.is_subscribed),
                      (c = o.media_id),
                      (d = o.like_flag),
                      (m = null == (s = o.video_info) ? void 0 : s.course_id),
                      (p = [4, 14].indexOf(+l) >= 0),
                      (e.t0 = n),
                      (e.next =
                        "share" === e.t0
                          ? 4
                          : "comment" === e.t0
                          ? 6
                          : "detail" === e.t0
                          ? 8
                          : "subscribed" === e.t0
                          ? 11
                          : "like" === e.t0
                          ? 13
                          : "liveList" === e.t0
                          ? 15
                          : 17);
                    break;
                  case 4:
                    return t.setShareInfo(n, o, r), e.abrupt("break", 17);
                  case 6:
                    return (
                      t.$emit("tapDetail", { action: n, data: o }),
                      e.abrupt("break", 17)
                    );
                  case 8:
                    return (
                      (_ = ""),
                      p
                        ? 4 == +l
                          ? ((_ = t.getLiveUrl(o, r, "wzq.tenpay.com", !1)),
                            h.wx$1.navigateTo({
                              url: "/pages/additional/webview/index?url=".concat(
                                encodeURIComponent(_)
                              ),
                            }))
                          : ((_ = "/pages/live/liveDetail?id="
                              .concat(a, "&t=")
                              .concat(Date.now(), "&mute=")
                              .concat(t.isMute ? "1" : "0")),
                            t.stockBridge.routeTo({ url: _, path: _ }))
                        : m
                        ? ((f =
                            "https://wzq.tenpay.com/mp/v2/index.html#/information/courseDetail?id="
                              .concat(m, "&cid=")
                              .concat(a, "&t=")
                              .concat(Date.now())),
                          h.wx$1.navigateTo({
                            url: "/pages/additional/webview/index?url=".concat(
                              encodeURIComponent(f)
                            ),
                          }))
                        : ((v = "/pages/newsCon/video/videoDetail?id="
                            .concat(a, "&t=")
                            .concat(Date.now())),
                          t.stockBridge.routeTo({ url: v, path: v })),
                      e.abrupt("break", 17)
                    );
                  case 11:
                    return (
                      g
                        .videoSubcribe({ action: u ? 1 : 2, media_id: c })
                        .then(function (e) {
                          0 == +e.retcode &&
                            (t.feedsList = t.feedsList.map(function (e) {
                              return (
                                e.media_id === c && (e.is_subscribed = u), e
                              );
                            }));
                        })
                        .catch(function (e) {
                          o.is_subscribed = !u;
                        }),
                      e.abrupt("break", 17)
                    );
                  case 13:
                    return (
                      g
                        .videoLike({ like_op: d ? 1 : 0, news_id: a })
                        .then(function (e) {})
                        .catch(function (e) {}),
                      e.abrupt("break", 17)
                    );
                  case 15:
                    "https://wzq.tenpay.com/mp/v2/index.html#/information/liveList",
                      h.wx$1.navigateTo({
                        url: "/pages/additional/webview/index?url=".concat(
                          encodeURIComponent(
                            "https://wzq.tenpay.com/mp/v2/index.html#/information/liveList"
                          )
                        ),
                      });
                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e);
          })();
        });
      },
      handleMuteChange: function (e) {
        (this.isMute = !!e),
          this.stockBridge.setSession(
            "video_player_mute",
            this.isMute ? "1" : "0"
          );
      },
      updateVoiceControlSetting: function () {
        var e = this.stockBridge.getSession("video_player_mute");
        this.isMute = null == e || "1" === e;
      },
      handleNotify: function (e) {
        var t = this,
          i = e.action,
          n = e.data,
          o = this;
        switch (i) {
          case "play":
            this.playVideo
              .filter(function (e) {
                return e !== n;
              })
              .map(function (e, i) {
                var n = t.$refs["customVideo_".concat(e)];
                n && n[0] && (n[0].pauseVideo(), o.playVideo.splice(i, 1));
              }),
              this.playVideo.push(n);
            break;
          case "pause":
            this.playVideo = this.playVideo.filter(function (e) {
              return e !== n;
            });
        }
      },
      onScroll: function () {
        var e = this;
        this.isActive &&
          (this.judgeCeiling(),
          this.$nextTick(function () {
            e.sendExposure();
          }),
          this.playVideo.length && this.checkVideo());
      },
      checkVideo: h.debounce(function () {}, 300),
      checkHeightInWindow: function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          i = e;
        if (!e || !i.getBoundingClientRect) return !1;
        var n = i.getBoundingClientRect(),
          o = n.bottom,
          r = n.top,
          s = n.height,
          l = r,
          a = o,
          u = s;
        return (
          !(l < 0 && a < 0) &&
          ((a >= u * t && a < this.winHeight) ||
            (a > this.winHeight && l + u * t <= this.winHeight))
        );
      },
      sendExposure: function () {},
      setShareInfo: function () {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = i.news_id,
          r = i.news_type,
          s = (i.news_title, null == (e = i.video_info) ? void 0 : e.course_id),
          l = [4, 14].indexOf(+r) >= 0,
          a = "";
        a = l
          ? 4 == +r
            ? this.getLiveUrl(i, n, "wzq.tenpay.com", !1)
            : "/pages/live/liveDetail?id=".concat(o, "&t=").concat(Date.now())
          : s
          ? "https://wzq.tenpay.com/mp/v2/index.html#/information/courseDetail?id="
              .concat(s, "&cid=")
              .concat(o, "&t=")
              .concat(Date.now())
          : "/pages/newsCon/video/videoDetail?id="
              .concat(o, "&t=")
              .concat(Date.now());
        var u = m(d({}, i), { shareUrl: a, isLive: l });
        this.$emit("tapDetail", { action: t, data: u });
      },
      getLiveUrl: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = arguments.length > 2 ? arguments[2] : void 0,
          n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          o = e.id,
          r = (e.title, e.news_type),
          s = e.special_type,
          l = "";
        return (
          4 == +r
            ? 1 == +s
              ? ((l = "/information/liveCombine?id="
                  .concat(o, "&date=")
                  .concat(e.publish_time)),
                (l =
                  "https://wzq.tenpay.com/mp/v2/index.html#/information/liveCombine?id="
                    .concat(o, "&date=")
                    .concat(e.publish_time)))
              : ((l = "/information/liveSubject?t=".concat(Date.now())),
                (l =
                  "https://wzq.tenpay.com/mp/v2/index.html#/information/liveSubject?t=".concat(
                    Date.now()
                  )))
            : (l = "https://"
                .concat(
                  i || "gu.qq.com",
                  "/resources/shy/news/live/index.html#/detail?live_news_id="
                )
                .concat(o, "&fchannel_id_fm=")
                .concat(t.def || "")),
          n ? "".concat(l, "&__share_flag__=1") : l
        );
      },
      load: function (n) {
        return p(
          this,
          null,
          i().mark(function o() {
            var r, s, l, a, u, c, h, _;
            return i().wrap(
              function (o) {
                for (;;)
                  switch ((o.prev = o.next)) {
                    case 0:
                      if (!this.loading) {
                        o.next = 2;
                        break;
                      }
                      return o.abrupt("return", Promise.reject());
                    case 2:
                      return (
                        (this.loading = !0),
                        (s =
                          (null ==
                          (r = this.stockBridge.getStorage(
                            f.FEED_RECOM_SETTING_VAL
                          ))
                            ? void 0
                            : r.indexOf("confirm")) > -1),
                        (o.prev = 4),
                        (o.next = 7),
                        v.isNewsGrayUser("queryVideoList")
                      );
                    case 7:
                      if (!o.sent) {
                        o.next = 15;
                        break;
                      }
                      return (
                        n && (this.nextPageCursor = ""),
                        (a = {
                          limit: 20,
                          last_page_cursor: n ? "" : this.nextPageCursor,
                          recom_off: s ? "0" : "1",
                        }),
                        (o.next = 12),
                        (function (e) {
                          return p(
                            this,
                            null,
                            i().mark(function t() {
                              return i().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return t.abrupt(
                                        "return",
                                        v.newsRequest(
                                          "/zxg/news/news_feed/query_video_list",
                                          e
                                        )
                                      );
                                    case 1:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                        })(a)
                      );
                    case 12:
                      (l = o.sent), (o.next = 21);
                      break;
                    case 15:
                      return (
                        n
                          ? (this.params = {
                              page_num: 1,
                              limit: 20,
                              last_medias: [],
                              recom_off: s ? 0 : 1,
                            })
                          : (this.params.page_num += 1),
                        (o.t0 = function (e) {
                          var i, n, o, r, s;
                          if (!e) return e;
                          var l = null != (i = e.code) ? i : e.retcode,
                            a = "0" === String(l) || 0 === l,
                            u = null != (n = e.data) ? n : {},
                            c = Array.isArray(u.list) ? u.list : [],
                            p = d({}, e),
                            h = c.map(function (e) {
                              var i,
                                n,
                                o,
                                r,
                                s,
                                l,
                                a,
                                u,
                                c,
                                p,
                                h,
                                _,
                                f,
                                v,
                                g,
                                b,
                                w,
                                y,
                                S,
                                x,
                                k,
                                P,
                                C,
                                T,
                                D,
                                V,
                                j,
                                L,
                                M,
                                N,
                                R,
                                $,
                                q,
                                I,
                                A,
                                B,
                                O,
                                E,
                                z,
                                H,
                                U,
                                W,
                                F,
                                G,
                                Q,
                                J,
                                K,
                                X,
                                Y,
                                Z,
                                ee,
                                te,
                                ie,
                                ne,
                                oe,
                                re,
                                se,
                                le,
                                ae,
                                ue,
                                ce,
                                de,
                                me,
                                pe,
                                he,
                                _e,
                                fe,
                                ve,
                                ge,
                                be,
                                we = e.video_info,
                                ye = we && "object" == t(we) ? we : {},
                                Se = {};
                              if ("string" == typeof we && we) {
                                var xe = we.split("|");
                                Se = { video_id: xe[0], video_time: xe[1] };
                              }
                              var ke = String(
                                  null !=
                                    (o =
                                      null !=
                                      (n =
                                        null != (i = e.video_id)
                                          ? i
                                          : ye.video_id)
                                        ? n
                                        : Se.video_id)
                                    ? o
                                    : ""
                                ),
                                Pe = String(
                                  null !=
                                    (s =
                                      null != (r = ye.video_time)
                                        ? r
                                        : Se.video_time)
                                    ? s
                                    : ""
                                ),
                                Ce = String(
                                  null !=
                                    (a =
                                      null != (l = e.course_id)
                                        ? l
                                        : ye.course_id)
                                    ? a
                                    : ""
                                ),
                                Te =
                                  ke ||
                                  Pe ||
                                  Ce ||
                                  e.video_stand_img ||
                                  e.aspect ||
                                  we
                                    ? {
                                        video_id: ke,
                                        video_time: Pe,
                                        video_stand_img: String(
                                          null !=
                                            (c =
                                              null != (u = e.video_stand_img)
                                                ? u
                                                : ye.video_stand_img)
                                            ? c
                                            : ""
                                        ),
                                        aspect: String(
                                          null !=
                                            (h =
                                              null != (p = e.aspect)
                                                ? p
                                                : ye.aspect)
                                            ? h
                                            : ""
                                        ),
                                        course_id: Ce,
                                        course_title: String(
                                          null !=
                                            (f =
                                              null != (_ = e.course_title)
                                                ? _
                                                : ye.course_title)
                                            ? f
                                            : ""
                                        ),
                                        course_subtitle: String(
                                          null !=
                                            (g =
                                              null != (v = e.course_subtitle)
                                                ? v
                                                : ye.course_subtitle)
                                            ? g
                                            : ""
                                        ),
                                        course_type: Number(
                                          null !=
                                            (w =
                                              null != (b = e.course_type)
                                                ? b
                                                : ye.course_type)
                                            ? w
                                            : 0
                                        ),
                                      }
                                    : null,
                                De =
                                  e.live_info && "object" == t(e.live_info)
                                    ? e.live_info
                                    : {},
                                Ve =
                                  De.live && "object" == t(De.live)
                                    ? De.live
                                    : {},
                                je = Array.isArray(De.vod) ? De.vod : [],
                                Le = {
                                  live_id: String(
                                    null !=
                                      (S =
                                        null != (y = e.live_id)
                                          ? y
                                          : De.live_id)
                                      ? S
                                      : ""
                                  ),
                                  live_status: Number(
                                    null !=
                                      (k =
                                        null != (x = e.live_status)
                                          ? x
                                          : De.live_status)
                                      ? k
                                      : 0
                                  ),
                                  live_type: String(
                                    null !=
                                      (C =
                                        null != (P = e.live_type)
                                          ? P
                                          : De.live_type)
                                      ? C
                                      : ""
                                  ),
                                  participate_num: Number(
                                    null !=
                                      (D =
                                        null != (T = e.participate_num)
                                          ? T
                                          : De.participate_num)
                                      ? D
                                      : 0
                                  ),
                                  live_count: Number(
                                    null !=
                                      (j =
                                        null != (V = e.live_count)
                                          ? V
                                          : De.live_count)
                                      ? j
                                      : 0
                                  ),
                                  news_id: String(
                                    null !=
                                      (M =
                                        null != (L = De.news_id)
                                          ? L
                                          : e.news_id)
                                      ? M
                                      : ""
                                  ),
                                  viewer_icons_url: String(
                                    null !=
                                      (R =
                                        null != (N = e.viewer_icons_url)
                                          ? N
                                          : De.viewer_icons_url)
                                      ? R
                                      : ""
                                  ),
                                  live_public_img: String(
                                    null !=
                                      (q =
                                        null != ($ = e.live_public_img)
                                          ? $
                                          : De.live_public_img)
                                      ? q
                                      : ""
                                  ),
                                  live_public_thumbnail: String(
                                    null !=
                                      (A =
                                        null != (I = e.live_public_thumbnail)
                                          ? I
                                          : De.live_public_thumbnail)
                                      ? A
                                      : ""
                                  ),
                                  live: {
                                    rtmp: String(
                                      null != (B = Ve.rtmp) ? B : ""
                                    ),
                                    flv: String(null != (O = Ve.flv) ? O : ""),
                                    m3u8: String(
                                      null != (E = Ve.m3u8) ? E : ""
                                    ),
                                  },
                                  vod: je.map(function (e) {
                                    var t, i, n, o;
                                    return {
                                      video_url: String(
                                        null !=
                                          (t = null == e ? void 0 : e.video_url)
                                          ? t
                                          : ""
                                      ),
                                      start_time: Number(
                                        null !=
                                          (i =
                                            null == e ? void 0 : e.start_time)
                                          ? i
                                          : 0
                                      ),
                                      end_time: Number(
                                        null !=
                                          (n = null == e ? void 0 : e.end_time)
                                          ? n
                                          : 0
                                      ),
                                      file_size: Number(
                                        null !=
                                          (o = null == e ? void 0 : e.file_size)
                                          ? o
                                          : 0
                                      ),
                                    };
                                  }),
                                  extra_info: String(
                                    null != (z = De.extra_info) ? z : ""
                                  ),
                                },
                                Me =
                                  e.body_ext && "object" == t(e.body_ext)
                                    ? e.body_ext
                                    : {},
                                Ne = {
                                  mulit_title: Array.isArray(e.mulit_title)
                                    ? e.mulit_title
                                    : Array.isArray(Me.mulit_title)
                                    ? Me.mulit_title
                                    : [],
                                  short_titles: Array.isArray(e.short_titles)
                                    ? e.short_titles
                                    : Array.isArray(Me.short_titles)
                                    ? Me.short_titles
                                    : [],
                                };
                              return m(d({}, e), {
                                news_id: String(
                                  null != (H = e.news_id) ? H : ""
                                ),
                                column_id: String(
                                  null != (U = e.column_id) ? U : ""
                                ),
                                origin_id: String(
                                  null != (W = e.origin_id) ? W : ""
                                ),
                                news_title: String(
                                  null != (F = e.news_title) ? F : ""
                                ),
                                summary: String(
                                  null != (G = e.summary) ? G : ""
                                ),
                                label: String(null != (Q = e.label) ? Q : ""),
                                url: String(null != (J = e.url) ? J : ""),
                                focus_img: String(
                                  null != (K = e.focus_img) ? K : ""
                                ),
                                thumb_img: String(
                                  null != (X = e.thumb_img) ? X : ""
                                ),
                                media_id: Number(
                                  null != (Y = e.media_id) ? Y : 0
                                ),
                                media_name: String(
                                  null != (Z = e.media_name) ? Z : ""
                                ),
                                media_icon: String(
                                  null !=
                                    (te =
                                      null != (ee = e.media_icon_url)
                                        ? ee
                                        : e.media_icon)
                                    ? te
                                    : ""
                                ),
                                comment_id: String(
                                  null != (ie = e.comment_id) ? ie : ""
                                ),
                                comment_num: Number(
                                  null != (ne = e.comment_num) ? ne : 0
                                ),
                                comment_status: Number(
                                  null != (oe = e.comment_status) ? oe : 0
                                ),
                                is_subscribed: Number(
                                  null != (re = e.is_subscribed) ? re : 0
                                ),
                                like_flag: !!e.like_flag,
                                like_num: Number(
                                  null != (se = e.like_num) ? se : 0
                                ),
                                star_flag: !!e.star_flag,
                                play_num: Number(
                                  null != (le = e.play_num) ? le : 0
                                ),
                                flag_top: Number(
                                  null !=
                                    (ue =
                                      null != (ae = e.flag_top) ? ae : e.is_top)
                                    ? ue
                                    : 0
                                ),
                                charge_type: Number(
                                  null != (ce = e.charge_type) ? ce : 0
                                ),
                                flow_id: String(
                                  null != (de = e.flow_id) ? de : ""
                                ),
                                news_type: Number(
                                  null != (me = e.news_type) ? me : 0
                                ),
                                cont_type: Number(
                                  null != (pe = e.cont_type) ? pe : 0
                                ),
                                special_type: Number(
                                  null != (he = e.special_type) ? he : 0
                                ),
                                property: Number(
                                  null != (_e = e.property) ? _e : 0
                                ),
                                order: Number(null != (fe = e.order) ? fe : 0),
                                publish_status: Number(
                                  null != (ve = e.publish_status) ? ve : 0
                                ),
                                publish_time: Number(
                                  null != (ge = e.publish_time) ? ge : 0
                                ),
                                delete_flag: Number(
                                  null != (be = e.delete_flag) ? be : 0
                                ),
                                video_info: Te,
                                live_info: Le,
                                body_ext: Ne,
                              });
                            });
                          return m(d({}, p), {
                            code: a ? 0 : Number(null != l ? l : -1),
                            msg: String(
                              null != (r = null != (o = e.msg) ? o : e.retmsg)
                                ? r
                                : "ok"
                            ),
                            has_next: u.has_more ? 1 : 0,
                            next_page_cursor: String(
                              null != (s = u.next_page_cursor) ? s : ""
                            ),
                            videos: h,
                          });
                        }),
                        (o.next = 19),
                        g.getVideos(this.params)
                      );
                    case 19:
                      (o.t1 = o.sent), (l = (0, o.t0)(o.t1));
                    case 21:
                      if (((this.loading = !1), 0 == +l.code)) {
                        o.next = 23;
                        break;
                      }
                      return o.abrupt("return");
                    case 23:
                      return (
                        (this.loaded = !0),
                        (u = []),
                        (c = l.videos || []).forEach(function (e) {
                          if (
                            (u.push(e.media_name),
                            (e.id = e.news_id),
                            (e.commentid = e.comment_id),
                            e.video_info)
                          ) {
                            var i = "";
                            if (
                              ("object" == t(e.video_info)
                                ? (i = e.video_info.video_time)
                                : "string" == typeof e.video_info &&
                                  (i = e.video_info.split("|")[1]),
                              isNaN(+i))
                            )
                              e.video_time = i.slice(3);
                            else {
                              var n = parseInt(i / 60),
                                o = i % 60;
                              e.video_time = ""
                                .concat(n < 10 ? "0" : "")
                                .concat(n, ":")
                                .concat(o < 10 ? "0" : "")
                                .concat(o);
                            }
                          }
                        }),
                        (this.params.last_medias =
                          u.length > 5 ? u.splice(-5).join() : u.join()),
                        (this.nextPageCursor = l.next_page_cursor || ""),
                        (h = {
                          hasMore: 1 === l.has_next || !0 === l.has_next,
                          list: n ? c : [].concat(e(this.feedsList), e(c)),
                        }),
                        s &&
                          h.list.length &&
                          (_ = h.list.findIndex(function (e) {
                            return 0 == +e.flag_top;
                          })) >= 0 &&
                          h.list.splice(
                            _,
                            1,
                            m(d({}, h.list[_]), { showSpliter: !0 })
                          ),
                        o.abrupt("return", h)
                      );
                    case 31:
                      throw (
                        ((o.prev = 31),
                        (o.t2 = o.catch(4)),
                        (this.loading = !1),
                        o.t2)
                      );
                    case 34:
                    case "end":
                      return o.stop();
                  }
              },
              o,
              this,
              [[4, 31]]
            );
          })
        );
      },
      dataReport: function (e) {
        var t = e.event,
          i = void 0 === t ? "" : t,
          n = e.eventData,
          o = void 0 === n ? {} : n;
        this.stockBridge.report(i, o);
      },
      getPosiInfo: function () {
        var e = this,
          t = this.feedsList.findIndex(function (e) {
            return e.showSpliter;
          });
        this.$nextTick(function () {
          -1 !== t && e.getTabOffsetTop(t), e.judgeCeiling();
        });
      },
      getTabOffsetTop: function (e) {
        var t = this;
        h.wx$1
          .createSelectorQuery()
          .in(this)
          .select(".video-list-container >>> .common-spliter-content")
          .boundingClientRect()
          .select(".video-list-container >>> .video-list-content")
          .boundingClientRect()
          .exec(function (e) {
            var i = null == e ? void 0 : e[0],
              n = null == e ? void 0 : e[1];
            n && i && (t.wntjTab.top = i.top - n.top);
          });
      },
      handleVideoCeiling: function () {},
      judgeCeiling: function () {
        this.wntjTab.top && Math.abs(this.wntjTab.top) <= this.scrollTop
          ? (this.wntjTab.isCeiling = !0)
          : (this.wntjTab.isCeiling = !1),
          this.$emit("showVideoCeiling", this.wntjTab.isCeiling);
      },
      showProfilePop: function (e) {
        this.$emit("showProfilePop", e);
      },
    },
  };
Array ||
  (
    h.resolveComponent("CustomVideo") +
    h.resolveComponent("st-reach-bottom") +
    h.resolveComponent("st-pull-refresh")
  )();
var w = h._export_sfc(b, [
  [
    "render",
    function (e, t, i, n, o, r) {
      return h.e(
        { a: !r.isMP },
        r.isMP
          ? h.e(
              { i: r.isMP },
              r.isMP
                ? h.e(
                    { j: o.loaded && o.feedsList.length },
                    o.loaded && o.feedsList.length
                      ? {
                          k: h.f(o.feedsList, function (e, t, i) {
                            return {
                              a: h.sr(
                                "customVideo_" + e.news_id,
                                "dc8caed0-3-" + i,
                                { f: 1 }
                              ),
                              b: "customVideo_" + e.news_id,
                              c: "custom-video-item-" + t,
                              d: e.news_id,
                              e: h.o(
                                r.handleMuteChange,
                                2604,
                                "custom-video-item-" + t
                              ),
                              f: h.o(
                                r.handleTapDetail,
                                2605,
                                "custom-video-item-" + t
                              ),
                              g: h.o(
                                r.dataReport,
                                2606,
                                "custom-video-item-" + t
                              ),
                              h: h.o(
                                r.handleNotify,
                                2607,
                                "custom-video-item-" + t
                              ),
                              i: h.o(
                                r.showProfilePop,
                                2608,
                                "custom-video-item-" + t
                              ),
                              j: "dc8caed0-3-" + i,
                              k: h.p({
                                mute: o.isMute,
                                "item-data": e,
                                "inner-width": r.innerWidth,
                              }),
                              l: e.news_id,
                            };
                          }),
                        }
                      : {},
                    {
                      l: "".concat(i.mpScrollHeight, "px"),
                      m: !o.mpPullDisabled,
                      n: o.mpRefreshTriggered,
                      o: "black" === o.skin ? "white" : "black",
                      p: h.o(function (e) {
                        return r.onPullingDown();
                      }, 2609),
                      q: h.o(function () {
                        return r.onMpScroll && r.onMpScroll.apply(r, arguments);
                      }, 2610),
                      r: h.o(function () {
                        return (
                          r.onMpReachBottom &&
                          r.onMpReachBottom.apply(r, arguments)
                        );
                      }, 2611),
                    }
                  )
                : {}
            )
          : h.e(
              { b: o.loaded && o.feedsList.length },
              o.loaded && o.feedsList.length
                ? {
                    c: h.f(o.feedsList, function (e, t, i) {
                      return {
                        a: h.sr(
                          "customVideo_" + e.news_id,
                          "dc8caed0-2-" + i + ",dc8caed0-1",
                          { f: 1 }
                        ),
                        b: "customVideo_" + e.news_id,
                        c: "custom-video-item-" + t,
                        d: e.news_id,
                        e: h.o(
                          r.handleMuteChange,
                          2599,
                          "custom-video-item-" + t
                        ),
                        f: h.o(
                          r.handleTapDetail,
                          2600,
                          "custom-video-item-" + t
                        ),
                        g: h.o(r.dataReport, 2601, "custom-video-item-" + t),
                        h: h.o(r.handleNotify, 2602, "custom-video-item-" + t),
                        i: "dc8caed0-2-" + i + ",dc8caed0-1",
                        j: h.p({
                          mute: o.isMute,
                          "item-data": e,
                          "inner-width": r.innerWidth,
                        }),
                        k: e.news_id,
                      };
                    }),
                  }
                : {},
              {
                d: h.sr("reachBottom", "dc8caed0-1,dc8caed0-0"),
                e: h.p({ "on-reach-bottom": r.onPullingUp }),
                f: h.sr("videoScroll", "dc8caed0-0"),
                g: h.o(r.onPullingDown, 2603),
                h: h.p({ "loosing-text": o.pullupText }),
              }
            ),
        { s: h.n(r.isMP ? "mp" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-dc8caed0"],
]);
wx.createComponent(w);
