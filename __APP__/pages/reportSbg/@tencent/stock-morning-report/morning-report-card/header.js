var e,
  t,
  i = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  d = function (e, t, i) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  u = require("../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  h = require("../morning-report-card.js"),
  l = require("../../../../../common/vendor.js"),
  p = require("../utils/mpBrow.js"),
  b = {
    name: "MorningReportHeader",
    directives: { "observe-visibility": u.ObserveVisibility },
    components: {
      SpeechEntry: function () {
        return "./speech/SpeechEntry.js";
      },
    },
    inject: { env: { default: {} } },
    props: [
      "hasSubscribed",
      "subscribedCount",
      "wzqConfig",
      "speechInfo",
      "speech_ids",
      "theme",
      "newsData",
      "newsId",
      "aiPodcast",
    ],
    data: function () {
      var e = this;
      return {
        tzrlContent: null,
        tzrlId: "",
        tzrlText: "",
        zbgdText: "",
        headerObserveConf: {
          callback: function (t, i) {
            return e.visibilityChanged(t, i);
          },
          once: !0,
          intersection: { threshold: 0.5 },
        },
        isAPP: this.env.IS_ZXG,
      };
    },
    computed: {
      useNewStyle: function () {
        return !0;
      },
      date: function () {
        if (this.newsData) {
          var e = this.newsData.publish_time,
            t = new Date(1e3 * e),
            i = "".concat(t.getMonth() + 1).slice(-2);
          return ""
            .concat(t.getFullYear(), "年")
            .concat(i, "月")
            .concat("".concat(t.getDate()).slice(-2), "日");
        }
        return "";
      },
      yearAndMonth: function () {
        if (this.newsData) {
          var e = this.newsData.publish_time,
            t = new Date(1e3 * e),
            i = "0".concat(t.getMonth() + 1).slice(-2);
          return "".concat(t.getFullYear(), ".").concat(i);
        }
        return "";
      },
    },
    watch: {
      newsData: {
        immediate: !0,
        handler: function (e) {
          if (e) {
            var t = e.briefContent.find(function (e) {
              return "投资日历" === e.groupName;
            });
            if (t)
              try {
                var i = t.secondaryDir[0].contentArr[0];
                (this.tzrlContent = i),
                  (this.tzrlText = h.itemContent(i)),
                  (this.tzrlId = h.getContentId(i));
              } catch (e) {}
          }
        },
      },
    },
    mounted: function () {
      this.mpObserveVisibility(".header-guide", this.visibilityChanged);
    },
    beforeDestroy: function () {
      this.mpDisobserveVisibility();
    },
    methods:
      ((e = (function (e, t) {
        for (var n in t || (t = {})) c.call(t, n) && d(e, n, t[n]);
        if (o) {
          var r,
            s = i(o(t));
          try {
            for (s.s(); !(r = s.n()).done; ) {
              n = r.value;
              a.call(t, n) && d(e, n, t[n]);
            }
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }
        }
        return e;
      })({}, p.mutations)),
      (t = {
        visibilityChanged: function (e) {
          e &&
            l.StockBridge.report(
              "news.detail.morningreportcard_header_visited",
              { newsid: this.newsId }
            );
        },
        onSubscribe: function () {
          var e = this.hasSubscribed
            ? "news.detail.brief_wechat_subscribe_close"
            : "news.detail.brief_wechat_subscribe_open";
          l.StockBridge.report(e, { newsid: this.newsId }),
            this.$emit("subscribe", !this.hasSubscribed);
        },
        goToNews: function (e) {
          this.$emit("wzqKeepPos"),
            l.StockBridge.report("news.detail.header_click", {
              newsid: this.newsId,
            }),
            h.jumpToDetail(e, this);
        },
      }),
      r(e, s(t))),
  };
Array ||
  (l.resolveComponent("SpeechEntry") + l.resolveComponent("SpeechMorning"))();
var f = l._export_sfc(b, [
  [
    "render",
    function (e, t, i, n, r, s) {
      return l.e(
        { a: !r.isAPP },
        r.isAPP
          ? {}
          : l.e(
              { b: null !== i.hasSubscribed },
              null !== i.hasSubscribed
                ? l.e(
                    { c: i.hasSubscribed },
                    i.hasSubscribed
                      ? { d: l.t(i.subscribedCount) }
                      : { e: l.t(i.subscribedCount) }
                  )
                : {},
              {
                f: l.o(function () {
                  return s.onSubscribe && s.onSubscribe.apply(s, arguments);
                }, 3408),
              }
            ),
        {
          g: l.t(i.newsData.title.split("|")[1]),
          h: l.t(s.date),
          i: i.speechInfo,
        },
        i.speechInfo
          ? l.e(
              { j: s.useNewStyle },
              s.useNewStyle
                ? {
                    k: l.p({
                      "speech-info": i.speechInfo,
                      "original-id": i.newsData.id,
                      title: i.newsData.title,
                      "speech-ids": i.speech_ids
                        ? decodeURIComponent(i.speech_ids)
                        : i.newsData.id,
                      theme: i.theme,
                      "wzq-config": i.wzqConfig,
                      "ai-podcast": i.aiPodcast,
                    }),
                  }
                : {
                    l: l.p({
                      "speech-info": i.speechInfo,
                      "original-id": i.newsData.id,
                      title: i.newsData.title,
                      "speech-ids": i.speech_ids
                        ? decodeURIComponent(i.speech_ids)
                        : i.newsData.id,
                      theme: i.theme,
                      "wzq-config": i.wzqConfig,
                    }),
                  }
            )
          : {},
        {
          m: l.n(
            s.useNewStyle ? "speech-wrapper--column" : "speech-wrapper--row"
          ),
        }
      );
    },
  ],
  ["__scopeId", "data-v-0dfa2185"],
]);
wx.createComponent(f);
