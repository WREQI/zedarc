require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e,
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  n = function (e, t, r) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  s = require("../../../../../common/vendor.js"),
  c = require("../api/index.js"),
  u = require("../node-modules/@tencent/st-tools/dist/index.js"),
  l = {};
(e = l),
  Object.defineProperty(e, "__esModule", { value: !0 }),
  (e.SIGN_KEY = void 0),
  (e.SIGN_KEY = {
    stock: "EE530E7508AB5831978E6006381898E9",
    mpweapp: "B833418A24C7EC2E5A534348665B9B0C",
    mpwzq: "98FA47ACCCEC0A3C5A4768991E1D9113",
    h5: "98FA47ACCCEC0A3C5A4768991E1D9113",
    df: "34C0A93DF3AD73D4307E468317380146",
    zxgh5: "9c8e247b438b7d0ae845f9931810a387",
    wzq_snp: "15b3a7844a6d44115f4b52c8aa3cc36e",
    wzqxcx: "68cae00479351606086e78d754042961",
    mini_h5: "cedc068249f7041d474b638038b13b8f",
    light_h5: "5b566bb10c9999cf25c8e53127c075f4",
    i_ask: "E3164D66F12E3A29A8C08530215B4FD8",
    xuanji: "cf1f3fd583d54b656f67bf2ee4e939fa",
    wzq_analyse: "01d16d0a381fbda39775faa1dff16446",
    GUOSEN: "15c752a9e8b7d04d638ad229cbe084e2",
    ZHONGXINJIANTOU: "c65bb114387a9315e9ec0cf2764884d9",
    DAFENG: "9fbf6158eca46d1fe6eeb487abf9ce6b",
  }),
  (e.default = e.SIGN_KEY);
var h = {
    inject: ["hqBridge", "IS_ZXG", "isMpZxg", "isLite"],
    data: function () {
      return {
        curCourse: null,
        liveData: null,
        isLive: !1,
        isCourse: !1,
        newsImage: "",
      };
    },
    created: function () {
      this.getData();
    },
    computed: {
      isWZQ: function () {
        return "wzq" === this.hqBridge.ENV;
      },
      supportETFDetail: function () {
        if (this.IS_ZXG && navigator) {
          var e = u.dist.detect(navigator.userAgent).platformVersion;
          return !u.lt(e, "11.12.0");
        }
        return !0;
      },
    },
    methods: {
      gotoTeachPage: function () {
        if (this.supportETFDetail) {
          if (this.isWZQ)
            this.hqBridge.routeTo({ path: "/information/etfteach" });
          else {
            this.hqBridge.openExtraWebview(
              "https://wzq.tenpay.com/mp/v2/index.html#/information/etfteach"
            );
          }
          this.hqBridge.report("hq.etfpage.teach_block_gotopage");
        }
      },
      jumpToLive: function () {
        var e = this.liveData.live_news_id;
        if (this.isWZQ)
          this.hqBridge.routeTo({
            path: "/information/liveDetail?id=".concat(e),
          });
        else {
          var t =
            "https://wzq.tenpay.com/mp/v2/index.html?lite=1#/information/liveDetail?id=".concat(
              e
            );
          this.hqBridge.openExtraWebview(t);
        }
        this.hqBridge.report("hq.etfpage.teach_block_live_click");
      },
      jumpRelatedCourse: function () {
        this.hqBridge.report("hq.etfpage.teach_block_course_click");
        var e,
          t = this.curCourse,
          i = t.news_id,
          r = t.articletype,
          a = t.video_info.course_id;
        if (
          ((e = a
            ? "https://wzq.tenpay.com/mp/v2/index.html#/information/courseDetail?id="
                .concat(a, "&cid=")
                .concat(i)
            : "https://wzq.tenpay.com/mp/v2/index.html#/information/videoDetail?id="
                .concat(i, "&type=")
                .concat(r)),
          this.IS_ZXG)
        ) {
          var o = a
            ? "/information/courseDetail?id=".concat(a, "&cid=").concat(i)
            : "/information/videoDetail?id=".concat(i, "&type=").concat(r);
          this.hqBridge.routeTo({ path: o });
        } else this.hqBridge.openExtraWebview(e);
      },
      updateAssetUrlProtocol: function (e) {
        return String(e).replace("http://", "https://");
      },
      getData: function () {
        var e = this,
          i = (function () {
            var e = "wzq",
              t = l.SIGN_KEY.wzq_snp,
              i = Math.floor(Math.random() * Math.floor(1e4)),
              r = s.md5Module(e + t + i);
            return {
              zappid: e,
              sign: r,
              nonce: i,
              queryStr: "zappid="
                .concat(e, "&sign=")
                .concat(r, "&nonce=")
                .concat(i),
            };
          })(),
          u = i.zappid,
          h = i.sign,
          d = i.nonce;
        c.api
          .getSubjectInfo(this.hqBridge, {
            news_id: "TN20240123112908790b439e",
            zappid: u,
            sign: h,
            nonce: d,
          })
          .then(function (i) {
            var s = null == i ? void 0 : i.news_info;
            s &&
              s.id_list &&
              s.id_list.length &&
              s.id_list.forEach(function (i) {
                var s = i.section,
                  c = i.news_list;
                if (s.includes("直播")) {
                  if (c && c.length) {
                    var u = c[0],
                      l = u.news_id,
                      h = u.title,
                      d = u.time,
                      p = u.extra_info,
                      f = u.thumbnails_qqnews;
                    e.liveData = (function (e, i) {
                      for (var s in i || (i = {}))
                        a.call(i, s) && n(e, s, i[s]);
                      if (r) {
                        var c,
                          u = t(r(i));
                        try {
                          for (u.s(); !(c = u.n()).done; ) {
                            s = c.value;
                            o.call(i, s) && n(e, s, i[s]);
                          }
                        } catch (e) {
                          u.e(e);
                        } finally {
                          u.f();
                        }
                      }
                      return e;
                    })(
                      {
                        live_news_id: l,
                        live_public_img: e.updateAssetUrlProtocol(f[0]),
                        title: h,
                        publish_time: d,
                      },
                      p
                    );
                  }
                } else (s.includes("投教课") || s.includes("视频")) && ((e.curCourse = c[0] || {}), (e.curCourse.timeformat = e.formateTime(e.curCourse.time) || ""));
                e.hasLiveData(),
                  (e.isCourse =
                    e.curCourse &&
                    e.curCourse.video_info &&
                    e.curCourse.video_info.course_id),
                  (e.newsImage = e.updateAssetUrlProtocol(e.getNewsImage())),
                  (e.curCourse || e.isLive) &&
                    e.hqBridge.report("hq.etfpage.teach_block_show");
              });
          });
      },
      getNewsImage: function () {
        if (!this.curCourse) return "";
        if (this.isCourse && this.curCourse.video_info.course_thumb_image)
          return this.curCourse.video_info.course_thumb_image;
        var e = this.curCourse.thumbnails;
        return Array.isArray(e) && e.length && e[0];
      },
      formateTime: function (e) {
        var t = new Date().getTime(),
          i = new Date().setHours(0, 0, 0, 0),
          r = new Date(e && e.replace(/-/g, "/")).getTime(),
          a = t - r;
        return a > 0 && a < 36e5
          ? parseInt(a / 6e4) > 0
            ? "".concat(parseInt(a / 6e4), "分钟前")
            : "刚刚"
          : a > 36e5 && a < 72e5
          ? "1小时前"
          : a > 72e5 && r > i
          ? e && e.split(" ")[1]
            ? e.split(" ")[1].substr(0, 5)
            : "2小时前"
          : 72e5 < a && r > i
          ? "".concat(e.split(" ")[1].substr(0, 5))
          : new Date(r).getFullYear() === new Date().getFullYear()
          ? ""
              .concat(e.split(" ")[0].substr(5, 5).replace("-", "月"), "日 ")
              .concat(e.split(" ")[1].substr(0, 5))
          : ""
              .concat(e.split(" ")[0].substr(0, 4), "年")
              .concat(e.split(" ")[0].substr(5, 5).replace("-", "月"), "日");
      },
      hasLiveData: function () {
        if (this.liveData) {
          var e = (this.liveData && this.liveData.live) || null,
            t =
              (this.liveData && this.liveData.vod && this.liveData.vod[0]) ||
              null;
          21 == +this.liveData.live_status && e && (this.isLive = e.m3u8),
            22 == +this.liveData.live_status &&
              t &&
              (this.isLive = t.video_url);
        } else this.isLive = !1;
      },
    },
  },
  d = s._export_sfc(h, [
    [
      "render",
      function (e, t, i, r, a, o) {
        return s.e(
          { a: a.curCourse || a.isLive },
          a.curCourse || a.isLive
            ? s.e(
                { b: o.supportETFDetail },
                (o.supportETFDetail, {}),
                {
                  c: s.n(o.isWZQ ? "teach-block-title-wzq" : ""),
                  d: s.o(function (e) {
                    return o.gotoTeachPage();
                  }, 3569),
                  e: a.isLive,
                },
                a.isLive
                  ? {
                      f: s.t(a.liveData.title),
                      g: a.liveData.live_public_img,
                      h: s.o(function (e) {
                        return o.jumpToLive();
                      }, 3570),
                    }
                  : s.e(
                      {
                        i: s.t(a.curCourse.title),
                        j: s.t(a.curCourse.media_name),
                        k: s.t(a.curCourse.timeformat),
                        l: a.isCourse,
                      },
                      (a.isCourse, {}),
                      {
                        m: a.newsImage,
                        n: s.o(function (e) {
                          return o.jumpRelatedCourse();
                        }, 3571),
                      }
                    ),
                {
                  o: s.n(o.isWZQ ? "teach-block-content-wzq" : ""),
                  p: o.isLite ? 1 : "",
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-644145a2"],
  ]);
wx.createComponent(d);
