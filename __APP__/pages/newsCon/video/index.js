var e = require("../../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  r = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  d = function (e, t, i) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  c = function (e, t) {
    for (var i in t || (t = {})) u.call(t, i) && d(e, i, t[i]);
    if (a) {
      var o,
        r = n(a(t));
      try {
        for (r.s(); !(o = r.n()).done; ) {
          i = o.value;
          l.call(t, i) && d(e, i, t[i]);
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    }
    return e;
  },
  h = function (e, t) {
    return r(e, s(t));
  },
  p = function (e, t, i) {
    return new Promise(function (n, o) {
      var r = function (e) {
          try {
            a(i.next(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          try {
            a(i.throw(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(r, s);
        };
      a((i = i.apply(e, t)).next());
    });
  },
  m = require("../../../common/vendor.js"),
  f = require("../@tencent/stock-video/api/request.js"),
  v = require("../@tencent/stock-news-base/service/news/gray.js"),
  _ = require("../@tencent/stock-news-core/utils/shy/index.js"),
  y = require("../@tencent/stock-sq/src/utils/mixins/securityCheck/index.js"),
  g = require("../@tencent/stock-halfscreen-editor/hooks/outter/useHalfEditor.js"),
  w = function (e) {
    return !0 === e || 1 === e || "1" === e ? 1 : 0;
  },
  S = function (e, t) {
    var i, n, o, r, s, a, u, l, d, c, h, p, m;
    if (!e) return null;
    if ("string" == typeof e) {
      var f = e.split("|");
      return {
        video_id: String(null != (i = f[0]) ? i : ""),
        video_time: String(null != (n = f[1]) ? n : ""),
        video_stand_img: "",
        aspect: String(null != (o = null == t ? void 0 : t.aspect) ? o : ""),
        course_id: "",
        course_title: "",
        course_subtitle: "",
        course_type: 0,
      };
    }
    return {
      video_id: String(null != (r = e.video_id) ? r : ""),
      video_time: String(null != (s = e.video_time) ? s : ""),
      video_stand_img: String(
        null !=
          (u =
            null != (a = e.video_stand_img)
              ? a
              : null == t
              ? void 0
              : t.video_stand_img)
          ? u
          : ""
      ),
      aspect: String(
        null != (d = null != (l = e.aspect) ? l : null == t ? void 0 : t.aspect)
          ? d
          : ""
      ),
      course_id: String(null != (c = e.course_id) ? c : ""),
      course_title: String(null != (h = e.course_title) ? h : ""),
      course_subtitle: String(null != (p = e.course_subtitle) ? p : ""),
      course_type: Number(null != (m = e.course_type) ? m : 0),
    };
  },
  b = function (e) {
    var t, i, n, o, r, s, a, u, l;
    if (!e) return e;
    var d = null != (t = e.code) ? t : e.retcode,
      p = "0" === String(d),
      m = null != (i = e.data) ? i : {},
      f = Array.isArray(m.list) ? m.list : [],
      v = c({}, e),
      _ = f.map(function (e) {
        return (function (e) {
          var t, i, n, o, r, s, a, u, l, d, p, m, f, v, _, y, g, b;
          return h(c({}, e), {
            news_id: String(
              null != (t = null == e ? void 0 : e.news_id) ? t : ""
            ),
            news_title: String(
              null != (i = null == e ? void 0 : e.news_title) ? i : ""
            ),
            news_type: Number(
              null != (n = null == e ? void 0 : e.news_type) ? n : 0
            ),
            summary: String(
              null != (o = null == e ? void 0 : e.summary) ? o : ""
            ),
            thumb_img: String(
              null != (r = null == e ? void 0 : e.thumb_img) ? r : ""
            ),
            focus_img: String(
              null != (s = null == e ? void 0 : e.focus_img) ? s : ""
            ),
            video_info: S(null == e ? void 0 : e.video_info, e),
            media_id: Number(
              null != (a = null == e ? void 0 : e.media_id) ? a : 0
            ),
            media_name: String(
              null != (u = null == e ? void 0 : e.media_name) ? u : ""
            ),
            media_icon: String(
              null !=
                (d =
                  null != (l = null == e ? void 0 : e.media_icon_url)
                    ? l
                    : null == e
                    ? void 0
                    : e.media_icon)
                ? d
                : ""
            ),
            is_subscribed: w(null == e ? void 0 : e.is_subscribed),
            label: String(null != (p = null == e ? void 0 : e.label) ? p : ""),
            comment_id: String(
              null != (m = null == e ? void 0 : e.comment_id) ? m : ""
            ),
            comment_status: Number(
              null != (f = null == e ? void 0 : e.comment_status) ? f : 0
            ),
            comment_num: Number(
              null != (v = null == e ? void 0 : e.comment_num) ? v : 0
            ),
            like_num: Number(
              null != (_ = null == e ? void 0 : e.like_num) ? _ : 0
            ),
            like_flag: w(null == e ? void 0 : e.like_flag),
            charge_type: Number(
              null != (y = null == e ? void 0 : e.charge_type) ? y : 0
            ),
            recall_type: String(
              null != (g = null == e ? void 0 : e.recall_type) ? g : ""
            ),
            flow_id: String(
              null != (b = null == e ? void 0 : e.flow_id) ? b : ""
            ),
          });
        })(e);
      }),
      y = (function (e) {
        var t, i;
        if (e)
          return {
            valid: Number(null != (t = e.valid) ? t : 0),
            activity_stage: Number(null != (i = e.activity_stage) ? i : 0),
          };
      })(null != (n = e.news_right) ? n : m.news_right);
    return c(
      h(c({}, v), {
        code: p ? 0 : Number(null != d ? d : -1),
        msg: String(
          null != (r = null != (o = e.msg) ? o : e.retmsg) ? r : "ok"
        ),
        column_id: String(
          null != (a = null != (s = m.column_id) ? s : e.column_id) ? a : ""
        ),
        has_next: m.has_more ? 1 : 0,
        next_page_cursor: String(
          null != (l = null != (u = m.next_page_cursor) ? u : m.last_stand)
            ? l
            : ""
        ),
        videos: _,
      }),
      y ? { news_right: y } : {}
    );
  },
  T = function (e) {
    return !0 === e || 1 === e || "1" === e ? 1 : 0;
  },
  I = function (e, t) {
    var i, n, o, r, s, a, u, l, d, c, h, p, m;
    if (!e) return null;
    if ("string" == typeof e) {
      var f = e.split("|");
      return {
        video_id: String(null != (i = f[0]) ? i : ""),
        video_time: String(null != (n = f[1]) ? n : ""),
        video_stand_img: "",
        aspect: String(null != (o = null == t ? void 0 : t.aspect) ? o : ""),
        course_id: "",
        course_title: "",
        course_subtitle: "",
        course_type: 0,
      };
    }
    return {
      video_id: String(null != (r = e.video_id) ? r : ""),
      video_time: String(null != (s = e.video_time) ? s : ""),
      video_stand_img: String(
        null !=
          (u =
            null != (a = e.video_stand_img)
              ? a
              : null == t
              ? void 0
              : t.video_stand_img)
          ? u
          : ""
      ),
      aspect: String(
        null != (d = null != (l = e.aspect) ? l : null == t ? void 0 : t.aspect)
          ? d
          : ""
      ),
      course_id: String(null != (c = e.course_id) ? c : ""),
      course_title: String(null != (h = e.course_title) ? h : ""),
      course_subtitle: String(null != (p = e.course_subtitle) ? p : ""),
      course_type: Number(null != (m = e.course_type) ? m : 0),
    };
  },
  k = function (e) {
    var t, i, n, o, r, s, a, u, l;
    if (!e) return e;
    var d = null != (t = e.code) ? t : e.retcode,
      p = "0" === String(d),
      m = null != (i = e.data) ? i : {},
      f = Array.isArray(m.list) ? m.list : [],
      v = c({}, e),
      _ = f.map(function (e) {
        return (function (e) {
          var t, i, n, o, r, s, a, u, l, d, p, m, f, v, _, y, g, w;
          return h(c({}, e), {
            news_id: String(
              null != (t = null == e ? void 0 : e.news_id) ? t : ""
            ),
            news_title: String(
              null != (i = null == e ? void 0 : e.news_title) ? i : ""
            ),
            news_type: Number(
              null != (n = null == e ? void 0 : e.news_type) ? n : 0
            ),
            summary: String(
              null != (o = null == e ? void 0 : e.summary) ? o : ""
            ),
            thumb_img: String(
              null != (r = null == e ? void 0 : e.thumb_img) ? r : ""
            ),
            focus_img: String(
              null != (s = null == e ? void 0 : e.focus_img) ? s : ""
            ),
            video_info: I(null == e ? void 0 : e.video_info, e),
            media_id: Number(
              null != (a = null == e ? void 0 : e.media_id) ? a : 0
            ),
            media_name: String(
              null != (u = null == e ? void 0 : e.media_name) ? u : ""
            ),
            media_icon: String(
              null !=
                (d =
                  null != (l = null == e ? void 0 : e.media_icon_url)
                    ? l
                    : null == e
                    ? void 0
                    : e.media_icon)
                ? d
                : ""
            ),
            is_subscribed: T(null == e ? void 0 : e.is_subscribed),
            label: String(null != (p = null == e ? void 0 : e.label) ? p : ""),
            comment_id: String(
              null != (m = null == e ? void 0 : e.comment_id) ? m : ""
            ),
            comment_status: Number(
              null != (f = null == e ? void 0 : e.comment_status) ? f : 0
            ),
            comment_num: Number(
              null != (v = null == e ? void 0 : e.comment_num) ? v : 0
            ),
            like_num: Number(
              null != (_ = null == e ? void 0 : e.like_num) ? _ : 0
            ),
            like_flag: T(null == e ? void 0 : e.like_flag),
            charge_type: Number(
              null != (y = null == e ? void 0 : e.charge_type) ? y : 0
            ),
            recall_type: String(
              null != (g = null == e ? void 0 : e.recall_type) ? g : ""
            ),
            flow_id: String(
              null != (w = null == e ? void 0 : e.flow_id) ? w : ""
            ),
          });
        })(e);
      }),
      y = (function (e) {
        var t, i;
        if (e)
          return {
            valid: Number(null != (t = e.valid) ? t : 0),
            activity_stage: Number(null != (i = e.activity_stage) ? i : 0),
          };
      })(null != (n = e.news_right) ? n : m.news_right);
    return c(
      h(c({}, v), {
        code: p ? 0 : Number(null != d ? d : -1),
        msg: String(
          null != (r = null != (o = e.msg) ? o : e.retmsg) ? r : "ok"
        ),
        column_id: String(
          null != (a = null != (s = m.column_id) ? s : e.column_id) ? a : ""
        ),
        has_next: m.has_more ? 1 : 0,
        next_page_cursor: String(
          null != (l = null != (u = m.next_page_cursor) ? u : m.last_stand)
            ? l
            : ""
        ),
        videos: _,
      }),
      y ? { news_right: y } : {}
    );
  },
  C = new f.VideoAPI(),
  P = "videodetail-lastplay-videoid",
  x = {
    name: "VideoList",
    components: {
      videoPlayer: function () {
        return "../@tencent/stock-news/src/components/videoPlayerMask.js";
      },
      mpPlayer: function () {
        return "../../information/components/mpPlayer.js";
      },
      NewsComList: function () {
        return "../../newsSbg/@tencent/stock-sq/src/source/NewsComList/index.js";
      },
      replyBox: function () {
        return "../newsDetail/replybox.js";
      },
      HalfEditor: function () {
        return "../../halfScreenEditor/@tencent/stock-halfscreen-editor/components/halfscreen-editor.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWhhbGZzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvaGFsZnNjcmVlbi1lZGl0b3IudnVl;
          }
        );
      },
    },
    mixins: [y.securityCheck],
    inject: {
      onCheckUserAgreementStatus: { default: function () {} },
      didAgreeUserAgreement: { default: {} },
    },
    setup: function (e, t) {
      var i = m.getCurrentInstance().proxy || m.getCurrentInstance(),
        n = "news",
        o = g.useHalfEditor(i, e, t, n, {
          postSuccessFunc: function (e) {
            i.updateComList(e);
          },
        });
      return c({ pageType: n }, o);
    },
    props: {
      newsId: { type: String, default: "" },
      TagId: { type: String, default: "111" },
      dataType: { type: String, default: "" },
      currentType: { type: String, default: "" },
      keepVideoAlive: { type: Boolean, default: !1 },
      bottomInset: { type: Number, default: 0 },
      isSharePage: { type: Boolean, default: !1 },
      isIphoneX: { type: Boolean, default: !1 },
      stockId: { type: String, default: "" },
    },
    data: function () {
      return {
        isMP: !0,
        hasMore: !0,
        showShare: !1,
        videoList: [],
        currentIndex: 0,
        loaded: !1,
        reportPrefix: "information.videodetail",
        height: this.wrapHeight(),
        refreshing: !1,
        showRefreshBar: !1,
        styleClass: { height: this.wrapHeight() },
        beginScore: 0,
        isShowComment: !1,
        currentItem: "",
        bottomBar: { type: "none", title: "评论" },
        showGoing: !1,
        forbidComment: !1,
        isHorizontalVideo: !0,
        playerReady: !1,
        playing: !1,
        ceradeTime: "",
        playerLayout: {
          width: this.wrapWidth(),
          height: this.wrapWidth() / 1.78,
        },
        playerOptions: { hideCtrls: !0 },
        isShowPlayer: !1,
        curPlayVid: null,
        pauseEventReported: !1,
        startType: 1,
        networkType: "",
        userinfo: {},
        swiperTouchStartY: -1,
      };
    },
    computed: {
      swiper: function () {
        var e;
        return null == (e = this.$refs.listSwiper) ? void 0 : e.swiper;
      },
      showSubscribe: function () {
        return "recommend" === this.dataType;
      },
      videoInfo: function () {
        if (this.currentItem) return { videoInfo: this.currentItem.video_info };
      },
      videoInfoMp: function () {
        var e = {};
        return this.currentItem
          ? (e = {
              video_id: this.currentItem.video_info.video_id,
              thumb_img: this.currentItem.video_info.video_stand_img,
            })
          : e;
      },
    },
    watch: {
      currentType: function (e) {
        this.videoList.length &&
          (e !== this.dataType
            ? ((this.isShowComment = !1), this.pauseVideo())
            : ((this.currentItem = m.cloneDeep(
                this.videoList[this.currentIndex]
              )),
              this.setShareInfo()));
      },
      newsId: function (e) {
        this.onPullDown(!1);
      },
    },
    created: function () {
      try {
        var e = this.$route.query.t;
        this.ceradeTime = e;
      } catch (e) {}
      this.getAuth(), this.onPullDown(!0);
    },
    activated: function () {
      if (this.dataType == this.currentType) {
        try {
          var e = this.$route.query.t;
          this.ceradeTime = e;
        } catch (e) {}
        this.ceradeTime && this.ceradeTime !== t
          ? ((this.ceradeTime = t),
            (this.isShowComment = !1),
            (this.swiper.activeIndex = 0),
            this.swiper.slideTo(0, 0))
          : (this.currentIndex !== this.swiper.activeIndex &&
              ((this.swiper.activeIndex = this.currentIndex),
              this.swiper.slideTo(this.currentIndex, 0)),
            (this.ceradeTime = t),
            this.currentItem && this.playVideo()),
          (this.pauseEventReported = !1),
          this.onShowHalfEditor(this);
      }
    },
    deactivated: function () {
      (this.isShowComment = !1),
        this.playing &&
          (this.handleReport({ event: "information.videodetail.video_pause" }),
          (this.pauseEventReported = !0),
          this.pauseVideo()),
        this.keepVideoAlive || (this.isShowPlayer = !1),
        this.onHideHalfEditor && this.onHideHalfEditor(this);
    },
    mounted: function () {
      var e = this;
      this.isMP ||
        (_.shy.subscribe("newSubject", this.updateComList),
        _.shy.subscribe("updateTimeline", this.updateComList),
        _.shy.subscribe(
          "updateTimelineAfterDeleteRssSubject",
          this.updateComList
        )),
        this.$nextTick(function () {
          e.isShowPlayer = !0;
        });
    },
    beforeDestroy: function () {
      this.isMP ||
        (_.shy.unsubscribe("newSubject", this.updateComList),
        _.shy.unsubscribe("updateTimeline", this.updateComList),
        _.shy.unsubscribe(
          "updateTimelineAfterDeleteRssSubject",
          this.updateComList
        ));
    },
    methods: {
      shareAppMessage: function () {
        var e = this.currentItem,
          t = e.news_id,
          i = e.news_title,
          n = e.focus_img;
        return {
          title: decodeURIComponent((i || "").replace(/%/g, "%25")),
          imageUrl: n,
          path: "pages/newsCon/video/videoDetail?id=".concat(t, "&from=share"),
          success: function (e) {},
          fail: function (e) {},
        };
      },
      shareTimeline: function () {
        var e = this.currentItem,
          t = e.news_id,
          i = e.news_title,
          n = e.focus_img;
        return {
          title: decodeURIComponent((i || "").replace(/%/g, "%25")),
          imageUrl: n,
          query: "newsId=".concat(t, "&from=share"),
          success: function (e) {},
          fail: function (e) {},
        };
      },
      getPlayerId: function () {
        return "player_".concat(this.TagId);
      },
      onVisible: function () {
        this.updateComList();
      },
      getVideoPlayerRef: function () {
        return this.$refs["player_".concat(this.TagId)];
      },
      getLoginInfo: function () {
        var e = C.getLoginData(),
          t = e.check;
        return { app: e.app, openid: e.openid, fskey: e.fskey, check: t };
      },
      getAuth: function () {
        var e = this.getLoginInfo(),
          t = e.openid,
          i = e.fskey;
        t &&
          i &&
          (this.userinfo = {
            zappid: "zxg",
            check: 11,
            qlskey: i,
            qluin: t,
            qlappid: "wx4ffb369b6881ee5e",
            appid: "wx4ffb369b6881ee5e",
            openid: t,
            fskey: i,
            platform:
              m.wx$1.getSystemInfoSync().system.indexOf("iOS") >= 0 ? 1 : 2,
          });
      },
      switchVideo: function (e) {
        var t = this;
        (this.currentIndex = e),
          (this.currentItem = m.cloneDeep(this.videoList[e])),
          this.setShareInfo(),
          this.$nextTick(function () {
            t.playerReady && t.autoPlayCheck();
          }),
          this.currentIndex >= this.videoList.length - 2 &&
            this.onReachListBottom(),
          this.currentItem.isExposure ||
            ((this.currentItem.isExposure = !0),
            this.videoList.map(function (e) {
              e.news_id === t.currentItem.news_id && (e.isExposure = !0);
            }),
            this.handleReport({
              event: "information.videodetail.".concat(
                this.dataType,
                ".exposure"
              ),
            }));
      },
      onSwiperChange: function (e) {
        var t = e.detail.current;
        this.switchVideo(t);
      },
      onSwiperTransition: function (e) {
        this.playing && this.pauseVideo();
        var t = e.detail.dy;
        0 === this.currentIndex &&
          this.swiperTouchStartY >= 0 &&
          t < -50 &&
          (this.showRefreshBar = !0);
      },
      onSwiperTouchStart: function (e) {
        if (!(e.changedTouches.length < 1)) {
          var t = e.changedTouches[0].pageY;
          this.swiperTouchStartY = t;
        }
      },
      onSwiperTouchMove: function (e) {
        e.changedTouches.length < 1 ||
          e.changedTouches[0].pageY - this.swiperTouchStartY < 50 ||
          (this.showRefreshBar = !0);
      },
      onSwiperTouchEnd: function (e) {
        (this.swiperTouchStartY = -1),
          0 === this.currentIndex &&
            this.showRefreshBar &&
            this.startPullDownRefresh();
      },
      startPullDownRefresh: function () {
        this.onPullDown();
      },
      stopPullDownRefresh: function () {
        (this.refreshing = !1), (this.showRefreshBar = !1);
      },
      isCanShowVideoMp: function () {
        return this.loaded && this.isMP;
      },
      wrapWidth: function () {
        return m.wx$1.getSystemInfoSync().windowWidth;
      },
      wrapHeight: function () {
        return m.wx$1.getSystemInfoSync().windowHeight;
      },
      resetData: function () {
        (this.loaded = !1), (this.isShowComment = !1), this.onPullDown(!0);
      },
      onPullDown: function () {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.refreshing ||
          (t ||
            this.reportData({
              eventName: "information.videodetail.".concat(
                this.dataType,
                ".list.onpulldown"
              ),
            }),
          (this.beginScore = this.showSubscribe && this.loaded ? -1 : 0),
          (this.refreshing = !0),
          this.load(!0)
            .then(function (t) {
              e.stopPullDownRefresh();
              var i = t.hasMore,
                n = t.beginScore,
                o = t.list;
              ("recommend" === e.currentType && 0 === o.length) ||
                ((e.hasMore = i),
                (e.beginScore = n),
                (e.videoList = o),
                (e.currentItem = m.cloneDeep(o[0])),
                (e.isHorizontalVideo = +e.currentItem.video_info.aspect > 1),
                (e.playerLayout = h(c({}, e.playerLayout), {
                  height: e.isHorizontalVideo
                    ? e.playerLayout.width / +e.currentItem.video_info.aspect
                    : "100%",
                })),
                e.dataType == e.currentType && e.setShareInfo());
            })
            .catch(function (t) {
              e.stopPullDownRefresh();
            }));
      },
      reportData: function (e) {
        m.Request.reportMTAData(e);
      },
      onReachListBottom: function () {
        var e = this;
        this.hasMore &&
          (this.reportData({
            eventName: "information.videodetail.".concat(
              this.dataType,
              ".list.onreachbottom"
            ),
          }),
          this.load()
            .then(function (t) {
              var i = t.hasMore,
                n = t.beginScore,
                o = t.list;
              (e.hasMore = i), (e.beginScore = n), (e.videoList = o);
            })
            .catch(function (e) {}));
      },
      commentReport: function (e) {
        var t = {
          eventName: "string" == typeof e ? e : e.event,
          data: { dataType: this.dataType },
        };
        "string" != typeof e && (t = e), this.reportData(t);
      },
      setCommentCount: function (e) {
        var t = this.currentItem,
          i = t.news_id,
          n = t.comment_num;
        e &&
          +n != +e &&
          ((this.currentItem.comment_num = +e),
          (this.videoList = this.videoList.map(function (t) {
            return t.news_id === i && (t.comment_num = e), t;
          })));
      },
      onTapMore: function (e) {
        var t = (e || {}).actionSheet;
        if (t && t.length) {
          var i = [];
          t.forEach(function (e) {
            var t = e.showName;
            i.push(t);
          }),
            m.wx$1.showActionSheet({
              itemList: i,
              success: function (e) {
                e.tapIndex >= 0 && (0, t[e.tapIndex].onTapMenu)();
              },
              fail: function (e) {},
            });
        }
      },
      setShareInfo: function () {
        this.currentItem;
      },
      load: function (t) {
        var n = this;
        if (this.loading) return Promise.reject();
        this.loading = !0;
        var o = 1;
        try {
          var r = m.wx$1.getStorageSync("personalized_news_setting");
          r && "1" === r && (o = r ? 0 : 1);
        } catch (e) {}
        return new Promise(function (r, s) {
          var a = {
              video_id: n.newsId,
              beginScore: n.beginScore,
              limit: 10,
              type: 8,
              last_medias: [],
              recom_off: o,
            },
            u = "follow" === n.dataType ? "getFollowVideo" : "getVideoInfo";
          !t &&
            "follow" !== n.dataType &&
            n.videoList.length &&
            n.videoList.map(function (e, t) {
              t >= n.videoList.length - 6 && a.last_medias.push(e.media_name);
            });
          var l = "follow" === n.dataType;
          p(
            n,
            null,
            i().mark(function e() {
              var n, r;
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          v.isNewsGrayUser(
                            l ? "querySubMediaVideoList" : "queryVideoInfo"
                          )
                        );
                      case 2:
                        if (!e.sent) {
                          e.next = 5;
                          break;
                        }
                        return (
                          (n = {
                            video_id: this.newsId,
                            type: 8,
                            limit: 10,
                            recom_off: String(o),
                            last_page_cursor: t
                              ? ""
                              : String(this.beginScore || ""),
                          }),
                          e.abrupt(
                            "return",
                            l
                              ? (function (e) {
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
                                                  "/zxg/news/news_feed/query_sub_media_video_list",
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
                                })(n)
                              : (function (e) {
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
                                                  "/zxg/news/news_feed/query_video_info",
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
                                })(n)
                          )
                        );
                      case 5:
                        return (e.next = 7), C[u](a);
                      case 7:
                        return (
                          (r = e.sent), e.abrupt("return", l ? b(r) : k(r))
                        );
                      case 9:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          )
            .then(function (i) {
              if (((n.loading = !1), 0 == +i.code)) {
                n.loaded = !0;
                var o = i.videos || [],
                  s = {
                    hasMore: 1 === i.has_next,
                    beginScore: i.next_page_cursor,
                    list: t ? o : [].concat(e(n.videoList), e(o)),
                  };
                s.list.map(function (e, t) {
                  (e.playTime = 0),
                    (e.id = e.news_id),
                    (e.commentid = e.comment_id),
                    (e.media_icon_url = e.media_icon),
                    (e.autoPlay =
                      t === n.currentIndex && n.dataType === n.currentType);
                }),
                  r(s);
              }
            })
            .catch(function (e) {
              (n.loading = !1), s(e);
            });
        });
      },
      updateComList: function () {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        setTimeout(function () {
          var i = e.$refs["newsCommentList_".concat(e.dataType)];
          i && i.updateComList(t);
        }, 300);
      },
      playVideo: function () {
        var e = this,
          t = this.currentItem.video_info;
        this.isHorizontalVideo = +t.aspect > 1;
        var i = this.curPlayVid && this.curPlayVid === t.video_id,
          n = this.getVideoPlayerRef();
        n &&
          this.$nextTick(function () {
            i
              ? n.play()
              : (n.play({ vid: t.video_id }), (e.curPlayVid = t.video_id));
          });
      },
      playTimeUpdate: function (e) {
        var t = e.playtime,
          i = this.currentItem.news_id;
        this.videoList = this.videoList.map(function (e) {
          return e.news_id === i && (e.playTime = t), e;
        });
      },
      pauseVideo: function () {
        this.getVideoPlayerRef() &&
          (this.getVideoPlayerRef().pause(), (this.playing = !1));
      },
      setStartPlayTime: function (e) {
        var t = this.currentItem.news_id;
        this.videoList = this.videoList.map(function (i) {
          return i.news_id === t && (i.startPlayTime = e), i;
        });
      },
      updateStartType: function (e) {
        (m.wx$1.getStorageSync(P) || "") === e
          ? (this.startType = 2)
          : ((this.startType = 1), m.wx$1.setStorageSync(P, e));
      },
      onPlayStateChange: function (e) {
        var t = e.status,
          i = (e.vid, this.currentItem.news_id),
          n = Date.now();
        switch (t) {
          case "ready":
            this.playerReady = !0;
            break;
          case "playing":
            (this.playing = !0),
              (this.pauseEventReported = !1),
              this.setStartPlayTime(n),
              this.updateStartType(i),
              this.handleReport({
                event: "information.videodetail.video_play",
              }),
              this.handleReportPlay(i);
            break;
          case "pause":
            (this.playing = !1),
              this.pauseEventReported ||
                this.handleReport({
                  event: "information.videodetail.video_pause",
                });
            break;
          case "end":
          case "ended":
            (this.playing = !1),
              this.pauseEventReported ||
                this.handleReport({
                  event: "information.videodetail.video_pause",
                }),
              (this.videoList = this.videoList.map(function (e) {
                return e.news_id === i && (e.playTime = 0), e;
              }));
        }
      },
      handleSeekTime: function (e) {
        var t = e.data,
          i = (void 0 === t ? {} : t).playTime;
        isNaN(i) || (this.getVideoPlayerRef().seek(i), this.playVideo());
      },
      checkPlay: function (e) {
        var t = this,
          i = e.data,
          n = void 0 === i ? {} : i,
          o = e.action,
          r = void 0 === o ? "" : o;
        this.playing = "play" === r;
        var s = n.news_id,
          a = n.playTime,
          u = n.played,
          l = void 0 !== u && u;
        this.videoList.find(function (e) {
          if (e.news_id === s) return (e.playTime = a), (e.played = l), e;
        }),
          this.$nextTick(function () {
            t.playing ? t.playVideo() : t.pauseVideo();
          });
      },
      layoutPlayer: function () {
        var e = this.currentItem.video_info.aspect;
        (this.isHorizontalVideo = +e > 1),
          (this.playerLayout = {
            width: "100%",
            height: this.isHorizontalVideo
              ? this.wrapWidth() / +e + "px"
              : "100%",
          });
      },
      autoPlayCheck: m.debounce(function () {
        this.layoutPlayer(), this.playVideo();
      }, 600),
      goAppStock: function (e) {
        this.$cApi.goAppStock(e, this);
      },
      onPutComment: function (e) {
        var t = {
          type: "detail",
          id: null == e ? void 0 : e.id,
          touser: null == e ? void 0 : e.user_name,
          post_scene: "video",
        };
        this.openEditor(t);
      },
      goEdit: function () {
        var e = this.currentItem,
          t = e.news_id,
          i = e.news_type;
        this.openEditor({ id: t, news_type: i, type: "video" }),
          this.reportData({
            eventName: "information.videodetail.".concat(
              this.dataType,
              ".list.bottom_bar_click"
            ),
            newsId: t,
          });
      },
      handleCloseComment: function () {
        this.isShowComment = !this.isShowComment;
      },
      handleTapAction: function () {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this.didAgreeUserAgreement.value) {
          var i = t.action,
            n = t.data,
            o = void 0 === n ? {} : n;
          switch (i) {
            case "like":
              this.securityCheck({ eventName: "putLike" })
                .then(function () {
                  e.handleLikeAction(t);
                })
                .catch(function () {});
              break;
            case "comment":
              this.securityCheck({ eventName: "putSubject" })
                .then(function () {
                  (e.isShowComment = !e.isShowComment),
                    (e.forbidComment =
                      !!o.comment_status && 1 == +o.comment_status),
                    e.$emit("tapAction", t);
                })
                .catch(function () {});
              break;
            case "subscribe":
              this.securityCheck({ eventName: "tapFollow" })
                .then(function () {
                  e.handleSubscribeAction(t);
                })
                .catch(function () {});
              break;
            case "turn":
              this.setShareInfo(o), this.$emit("tapAction", t);
              break;
            default:
              this.$emit("tapAction", t);
          }
        } else this.onCheckUserAgreementStatus();
      },
      handleLikeAction: function () {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = (t.action, t.data),
          n = void 0 === i ? {} : i,
          o = n.news_id,
          r = 0;
        (this.videoList = this.videoList.map(function (e) {
          return (
            o === e.news_id &&
              ((e.like_flag = !e.like_flag),
              (r = e.like_flag),
              e.like_flag ? (e.like_num += 1) : (e.like_num -= 1)),
            e
          );
        })),
          C.videoLike({ like_op: r ? 1 : 0, news_id: o })
            .then(function (t) {
              e.isMP
                ? m.StockBridge.busEmit("updateList", { news_id: o })
                : _.shy.notify("updateList", { news_id: o });
            })
            .catch(function (e) {}),
          this.$emit(
            "dataReport",
            "information.videodetail.video_" + (n.like_flag ? "like" : "unlike")
          );
      },
      handleSubscribeAction: function () {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = (t.action, t.data),
          n = void 0 === i ? {} : i,
          o = n.news_id,
          r = n.media_id,
          s = 0;
        (this.videoList = this.videoList.map(function (e) {
          return (
            o === e.news_id &&
              ((e.is_subscribed = !e.is_subscribed), (s = e.is_subscribed)),
            e
          );
        })),
          C.videoSubcribe({ action: s ? 1 : 2, media_id: r })
            .then(function (t) {
              e.isMP
                ? m.StockBridge.busEmit("updateList", { news_id: o })
                : _.shy.notify("updateList", { news_id: o });
            })
            .catch(function (e) {});
      },
      handleReportPlay: function (e) {
        var t = { type: "play", ids: e };
        C.queryStaticNums(t)
          .then(function (e) {
            e.code;
          })
          .catch(function (e) {});
      },
      handleReport: function () {
        return p(this, arguments, function () {
          var e = this,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return i().mark(function n() {
            var o, r, s, a, u;
            return i().wrap(function (i) {
              for (;;)
                switch ((i.prev = i.next)) {
                  case 0:
                    if (
                      ((o = t.event),
                      (r = e.videoList.find(function (t) {
                        return t.video_id === e.currentItem.video_id;
                      })))
                    ) {
                      i.next = 3;
                      break;
                    }
                    return i.abrupt("return");
                  case 3:
                    (s = r.video_info.video_time
                      ? (r.playTime / +r.video_info.video_time).toFixed(6)
                      : 0),
                      (a = Date.now()),
                      (u = {
                        newsid: r.news_id,
                        start_type: e.startType,
                        fitemId: r.news_id,
                        flowId: r.flowId || "",
                        recallType: r.recallType || "",
                        fitemType: r.news_type,
                        fsessionId: "",
                        fsceneType: "videoDetail",
                        currentPage: "video_detail",
                        factionTime: a,
                        fpositionId: e.currentIndex,
                        fVideoUrl:
                          (r.video_info && r.video_info.video_id) || "",
                        playTime: r.playTime || 0,
                        playPercent: s > 1 ? 1 : s,
                        watchTime: r.startPlayTime ? a - r.startPlayTime : 0,
                      }),
                      e.reportData(c({ eventName: o }, u));
                  case 5:
                  case "end":
                    return i.stop();
                }
            }, n);
          })();
        });
      },
      showProfilePop: function (e) {
        this.$emit("showProfilePop", e);
      },
    },
  };
Array ||
  (
    m.resolveComponent("videoPlayer") +
    m.resolveComponent("mp-player") +
    m.resolveComponent("NewsComList") +
    m.resolveComponent("replyBox") +
    m.resolveComponent("HalfEditor")
  )();
var L = m._export_sfc(x, [
  [
    "render",
    function (e, t, i, n, o, r) {
      var s;
      return m.e(
        { a: o.showRefreshBar },
        (o.showRefreshBar, {}),
        { b: r.isCanShowVideoMp() },
        r.isCanShowVideoMp()
          ? {
              c: m.f(o.videoList, function (e, t, i) {
                return {
                  a: m.sr("player_" + e.news_id, "a42c9cec-0-" + i, { f: 1 }),
                  b: "player_" + e.news_id,
                  c: e.news_id,
                  d: m.o(r.handleTapAction, 1654, e.news_id),
                  e: m.o(r.handleSeekTime, 1655, e.news_id),
                  f: m.o(r.checkPlay, 1656, e.news_id),
                  g: m.o(r.commentReport, 1657, e.news_id),
                  h: "a42c9cec-0-" + i,
                  i: m.p({
                    "item-data": e,
                    "current-index": o.currentIndex,
                    index: t,
                    "play-status": o.playing,
                    "show-subscribe": r.showSubscribe,
                  }),
                  j: t,
                };
              }),
              d: o.currentIndex,
              e: m.o(function () {
                return r.onSwiperChange && r.onSwiperChange.apply(r, arguments);
              }, 1658),
              f: m.o(function () {
                return (
                  r.onSwiperTransition &&
                  r.onSwiperTransition.apply(r, arguments)
                );
              }, 1659),
              g: m.o(function () {
                return (
                  r.onSwiperTouchStart &&
                  r.onSwiperTouchStart.apply(r, arguments)
                );
              }, 1660),
              h: m.o(function () {
                return (
                  r.onSwiperTouchMove && r.onSwiperTouchMove.apply(r, arguments)
                );
              }, 1661),
              i: m.o(function () {
                return (
                  r.onSwiperTouchEnd && r.onSwiperTouchEnd.apply(r, arguments)
                );
              }, 1662),
            }
          : {},
        { j: "follow" == i.currentType && o.loaded && !o.videoList.length },
        "follow" == i.currentType && o.loaded && !o.videoList.length
          ? {
              k: m.o(function (e) {
                return r.handleTapAction({ action: "recommend" });
              }, 1663),
              l: m.s(o.styleClass),
            }
          : {},
        { m: o.isMP && !!o.currentItem && o.isShowPlayer },
        o.isMP && o.currentItem && o.isShowPlayer
          ? {
              n: m.sr(r.getPlayerId(), "a42c9cec-1"),
              o: r.getPlayerId(),
              p: o.playing ? "1" : "0",
              q: m.n(o.isHorizontalVideo ? "horizontalVideo" : "verticalVideo"),
              r: m.o(r.onPlayStateChange, 1664),
              s: m.p({
                layout: o.playerLayout,
                TagId: i.TagId,
                data: r.videoInfoMp,
                "network-type": o.networkType,
                "report-prefix": o.reportPrefix,
                "stock-id": i.stockId,
                "news-id": null == (s = o.currentItem) ? void 0 : s.news_id,
              }),
            }
          : {},
        { t: m.s(o.styleClass), v: o.isShowComment && o.currentItem },
        o.isShowComment && o.currentItem
          ? m.e(
              {
                w: m.o(function () {
                  return (
                    r.handleCloseComment &&
                    r.handleCloseComment.apply(r, arguments)
                  );
                }, 1665),
                x: m.o(function () {
                  return (
                    r.handleCloseComment &&
                    r.handleCloseComment.apply(r, arguments)
                  );
                }, 1666),
                y: o.currentItem.comment_num,
              },
              o.currentItem.comment_num
                ? { z: m.t(o.currentItem.comment_num) }
                : {},
              {
                A: m.sr("newsCommentList_" + i.dataType, "a42c9cec-2"),
                B: "newsCommentList_" + i.dataType,
                C: m.o(r.setCommentCount, 1667),
                D: m.o(r.onPutComment, 1668),
                E: m.o(r.onTapMore, 1669),
                F: m.o(r.showProfilePop, 1670),
                G: m.p({
                  "page-type": n.pageType,
                  "p-userinfo": o.userinfo,
                  "news-id": o.currentItem.news_id,
                  "news-info": o.currentItem,
                  "main-app": this,
                }),
                H: o.isShowComment,
              },
              o.isShowComment
                ? {
                    I: m.sr("reply", "a42c9cec-3"),
                    J: m.o(r.goEdit, 1671),
                    K: m.p({
                      type: "newsDetail",
                      "report-prefix": o.reportPrefix,
                      "bottom-bar": o.bottomBar,
                      "forbid-comment": o.forbidComment,
                      "is-share-page": i.isSharePage,
                      "is-iphone-x": i.isIphoneX,
                      "bottom-inset": i.bottomInset,
                    }),
                  }
                : {},
              { L: i.bottomInset + 50 + "px" }
            )
          : {},
        { M: e.isShowHalfEditor },
        e.isShowHalfEditor
          ? {
              N: m.sr("halfEditor", "a42c9cec-4"),
              O: m.o(e.hideHalfEditor, 1672),
              P: m.p({ "query-editor": e.queryHalfEditor }),
            }
          : {},
        { Q: m.n(i.dataType), R: i.bottomInset + "px" }
      );
    },
  ],
  ["__scopeId", "data-v-a42c9cec"],
]);
wx.createComponent(L);
