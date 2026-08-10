var e = require("../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js"),
  o = require("../../model/common/userNickNameHeadUrl.js"),
  a = require("../../service/aegis/platform/not-wujie.js"),
  s = require("../../stores/app/useMode.js"),
  i = require("../../filters/money.js"),
  c = require("../../composables/useShareSnapshot/index.js"),
  u = require("../../utils/getPlatform.js");
require("../../service/sdk/lib/api.js");
var l = require("../../service/sdk/platform/mp-weixin.js"),
  p = require("./constants.js"),
  h = require("./shareCardLayout.js"),
  f = require("./drawShareSnapshot.js"),
  m = u.getPlatform().isZxg,
  d = n.defineComponent({
    name: "LotteryShareDialog",
    props: {
      items: {
        type: Array,
        default: function () {
          return [];
        },
      },
      active: { type: Boolean, default: !1 },
      scene: { type: String, default: "" },
    },
    emits: ["back-share", "close-all"],
    setup: function (u, d) {
      var v = d.emit,
        g = n.storeToRefs(s.useModeStore()).simpleMode,
        _ = n.ref("微证券用户"),
        E = n.ref(p.IMAGES.defaultAvatar),
        T = n.ref(!1),
        R = null;
      function S(e) {
        return null == e || "" === e ? "--" : i.formatNoUnit(e, !1, 2);
      }
      function k(e) {
        return null == e || "" === e ? "--" : i.formatNoUnit(e, !1, 0);
      }
      var L = n.computed(function () {
          return n.dayjs().format("YYYY-MM-DD");
        }),
        x = n.computed(function () {
          return h.calcShareCardHeight(u.items.length);
        }),
        A = n.computed(function () {
          return u.items.length > 3;
        }),
        y = n.ref(0),
        I = n.ref(!1),
        C = n.computed(function () {
          return A.value && y.value > 1;
        }),
        w = n.computed(function () {
          return A.value && !I.value;
        }),
        N = n.debounce(function (e) {
          var t = (e && e.detail && e.detail.scrollTop) || 0;
          t + 10 < y.value && (I.value = !1), (y.value = t);
        }, 10),
        b = n.computed(function () {
          return g.value ? h.PRIMARY_SIMPLE : h.PRIMARY_CLASSIC;
        }),
        q = n.ref(p.getDefaultShareQrUrl()),
        O = c.useShareSnapshot({
          width: h.CARD_WIDTH,
          height: x,
          ready: T,
          watchSources: [
            function () {
              return u.items;
            },
            g,
          ],
          h5PreloadFonts: [
            "normal "
              .concat(h.TITLE_FONT_SIZE, "px ")
              .concat(h.TITLE_FONT_FAMILY),
            ""
              .concat(h.TITLE_FONT_WEIGHT, " ")
              .concat(h.TITLE_FONT_SIZE, "px ")
              .concat(h.TITLE_FONT_FAMILY),
          ],
          draw: function (e, t) {
            return f.makeDrawShareSnapshot({
              items: u.items,
              userNickName: _.value,
              userHeadUrl: E.value,
              todayDateText: L.value,
              simpleMode: g.value,
              primaryColor: b.value,
              subTitle: "好运如期而至，财富顺势启航",
              qrcodeURL: q.value,
              formatPrice: S,
              formatQty: k,
              onIconLoadError: function (e, t) {
                a.aegisReporter.reportEvent(
                  "LOTTERY_DIALOG_SHARE_ICON_LOAD_ERROR",
                  { ext1: e, ext4: t.message }
                );
              },
            })(e, t);
          },
          onError: function (e) {
            a.aegisReporter.reportEvent("LOTTERY_DIALOG_SHARE_CAPTURE_ERROR", {
              ext4: e.stack || e.message,
            });
          },
        }),
        U = O.snapshotUrl,
        M = O.capture,
        j = O.captureImmediate,
        D = O.reset,
        Y = O.error,
        H = n.computed(function () {
          return null !== Y.value;
        });
      function F() {
        r(
          t().mark(function e() {
            var r, n, s;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0), (e.next = 3), o.userNickNameHeadUrl()
                      );
                    case 3:
                      (r = e.sent),
                        (n = r.nickName),
                        (s = r.headUrl),
                        n &&
                          (_.value =
                            n.length > p.NICKNAME_MAX_LEN
                              ? "".concat(n.slice(0, p.NICKNAME_MAX_LEN), "...")
                              : n),
                        s &&
                          (E.value = s.startsWith("http://")
                            ? s.replace("http://", "https://")
                            : s),
                        (e.next = 12);
                      break;
                    case 9:
                      (e.prev = 9),
                        (e.t0 = e.catch(0)),
                        a.aegisReporter.reportEvent(
                          "LOTTERY_DIALOG_SHARE_USERINFO_ERROR",
                          {
                            ext4:
                              e.t0 instanceof Error
                                ? e.t0.stack || e.t0.message
                                : JSON.stringify(e.t0 || {}),
                          }
                        );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 9]]
            );
          })
        )(),
          (T.value = !0),
          (R = setTimeout(function () {
            T.value || (T.value = !0);
          }, 3e3));
      }
      return (
        n.onMounted(function () {
          u.items.length > 0 && F();
        }),
        n.watch(
          function () {
            return u.items;
          },
          function (e) {
            e.length > 0 && !R && !T.value && F();
          }
        ),
        n.watch([E, _], function (t, r) {
          e(t, 1), e(r, 1)[0];
          T.value && M();
        }),
        m &&
          (n.watch(
            function () {
              return u.active;
            },
            function (e) {
              e
                ? l.sdk.share({
                    action: "pop",
                    to: ["wx", "pyq", "qq", "qzone"],
                  })
                : (l.sdk.share({ action: "cancel" }), n.index.hideLoading());
            }
          ),
          l.sdk.shareAction(
            (function () {
              var e = r(
                t().mark(function e(r) {
                  var o, s, i;
                  return t().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!r.to) {
                              e.next = 20;
                              break;
                            }
                            if ((o = p.getZxgChannelShareQrUrl(r.to))) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return");
                          case 4:
                            return (
                              (q.value = o),
                              n.index.showLoading({ title: "加载中" }),
                              (e.prev = 5),
                              (e.next = 8),
                              j()
                            );
                          case 8:
                            (s = e.sent) &&
                              l.sdk.share({
                                action: "share",
                                type: "image",
                                to: r.to,
                                image_data: s,
                              }),
                              (e.next = 15);
                            break;
                          case 12:
                            (e.prev = 12),
                              (e.t0 = e.catch(5)),
                              l.sdk.share({
                                action: "share",
                                type: "image",
                                to: r.to,
                                image_data: "",
                              }),
                              v("back-share"),
                              a.aegisReporter.reportEvent(
                                "LOTTERY_DIALOG_SHARE_ZXG_CAPTURE_ERROR",
                                {
                                  ext1: r.to,
                                  ext4:
                                    e.t0 instanceof Error
                                      ? e.t0.stack || e.t0.message
                                      : String(e.t0),
                                }
                              );
                          case 15:
                            return (
                              (e.prev = 15), n.index.hideLoading(), e.finish(15)
                            );
                          case 18:
                            e.next = 21;
                            break;
                          case 20:
                            r.err_msg &&
                              (("onshareAction:ok" !== (i = r.err_msg) &&
                                "onshareAction:cancel" !== i &&
                                "onshareAction:fail" !== i) ||
                                v("back-share"));
                          case 21:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 12, 15, 18]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()
          )),
        n.onBeforeUnmount(function () {
          R && (clearTimeout(R), (R = null)),
            D(),
            m && l.sdk.share({ action: "cancel" }),
            N.cancel();
        }),
        {
          snapshotUrl: U,
          simpleMode: g,
          cardHeight: x,
          hasError: H,
          isZxg: m,
          isLongList: A,
          hasTopShadow: C,
          hasBottomShadow: w,
          onBack: function () {
            v("back-share");
          },
          onCloseAll: function () {
            v("close-all");
          },
          onRetryClick: function () {
            j().catch(function () {});
          },
          onContentScroll: N,
          onContentScrollToLower: function () {
            I.value = !0;
          },
        }
      );
    },
  }),
  v = n._export_sfc(d, [
    [
      "render",
      function (e, t, r, o, a, s) {
        return n.e(
          { a: e.active },
          e.active
            ? n.e(
                {
                  b: n.o(function () {
                    return e.onBack && e.onBack.apply(e, arguments);
                  }),
                  c: n.o(function () {
                    return e.onCloseAll && e.onCloseAll.apply(e, arguments);
                  }),
                  d: e.snapshotUrl,
                },
                e.snapshotUrl ? { e: e.snapshotUrl } : {},
                { f: !e.snapshotUrl },
                e.snapshotUrl
                  ? {}
                  : n.e(
                      { g: e.hasError },
                      e.hasError
                        ? {
                            h: n.o(function () {
                              return (
                                e.onRetryClick &&
                                e.onRetryClick.apply(e, arguments)
                              );
                            }),
                          }
                        : {}
                    ),
                {
                  i: e.isLongList ? 1 : "",
                  j: n.o(function () {
                    return (
                      e.onContentScroll && e.onContentScroll.apply(e, arguments)
                    );
                  }),
                  k: n.o(function () {
                    return (
                      e.onContentScrollToLower &&
                      e.onContentScrollToLower.apply(e, arguments)
                    );
                  }),
                  l: e.hasTopShadow ? 1 : "",
                  m: e.snapshotUrl && e.hasBottomShadow ? 1 : "",
                  n: !e.isZxg,
                },
                (e.isZxg, {}),
                { o: e.simpleMode ? 1 : "", p: e.isZxg ? 1 : "" }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-b1837407"],
  ]);
wx.createComponent(v);
