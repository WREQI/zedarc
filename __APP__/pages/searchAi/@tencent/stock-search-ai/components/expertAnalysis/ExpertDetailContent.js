var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../common/vendor.js"),
  n = t.defineComponent({
    name: "ExpertDetailContent",
    components: {
      OpinionBanner: function () {
        return "./OpinionBanner.js";
      },
      MetricsCard: function () {
        return "./MetricsCard.js";
      },
      AiExpertInfoCard: function () {
        return "./AiExpertInfoCard.js";
      },
      MarkdownRenderer: function () {
        return "../../../stock-ai-markdown/components/markdown-renderer/wrap.js";
      },
    },
    props: {
      expert: { type: Object, required: !0 },
      detail: {
        type: Object,
        default: function () {
          return { sections: [] };
        },
      },
      symbol: { type: String, default: "" },
    },
    emits: ["follow-click", "follow-change"],
    setup: function (n, o) {
      var r = this,
        i = o.emit,
        c = t.ref(!!n.expert.isFollowed);
      t.watch(
        function () {
          return n.expert.isFollowed;
        },
        function (e) {
          c.value = !!e;
        }
      );
      var a = t.computed(function () {
        return n.expert.investmentConclusion || "";
      });
      return {
        isFollowed: c,
        investmentConclusion: a,
        onFollowClick: function () {
          return (
            (o = r),
            null,
            (a = e().mark(function () {
              var o, r, a, s, l, p, d, u, f, m, k;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = !c.value),
                          t.StockBridge.report(
                            r
                              ? "hq.stockdetail.ai_expert_attention_click"
                              : "hq.stockdetail.ai_interpret_cancel_follow_expert_click",
                            { related_stockid: n.symbol, expertid: n.expert.id }
                          ),
                          i("follow-click", n.expert),
                          (a = c.value),
                          (c.value = !a),
                          (e.prev = 4),
                          (s = (function () {
                            var e = t.StockBridge.ENV === t.EnvTypeEnum.MP;
                            return {
                              check: 11,
                              appid: e
                                ? "wx4ffb369b6881ee5e"
                                : "wx9cf8c670ebd68ce4",
                              openid:
                                (e
                                  ? t.StockBridge.getStorage("_qluin")
                                  : t.StockBridge.getCookie("wzq_qluin")) || "",
                              fskey:
                                (e
                                  ? t.StockBridge.getStorage("_qlskey")
                                  : t.StockBridge.getCookie("wzq_qlskey")) ||
                                "",
                            };
                          })()),
                          (l = s.openid),
                          (p = s.fskey),
                          (d = s.check),
                          (u = s.appid),
                          (f =
                            "https://snp.tenpay.com/cgi-bin/snp/userapi/subMediaByScene?openid="
                              .concat(l, "&fskey=")
                              .concat(p, "&check=")
                              .concat(d, "&appid=")
                              .concat(u)),
                          (m = {
                            scene_id: "stock_analysis",
                            media_ids: [n.expert.id],
                            action: r ? 1 : 2,
                            openid: l,
                          }),
                          (e.next = 14),
                          t.StockBridge.request(f, t.RequestTypeEnum.POST, m, {
                            forceCallback: !0,
                            headers: { "Content-Type": "application/json" },
                          })
                        );
                      case 14:
                        if (!(k = e.sent) || 0 == +k.code) {
                          e.next = 17;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          ((c.value = a),
                          void (
                            a || t.StockBridge.toast("关注失败，请重试", "none")
                          ))
                        );
                      case 17:
                        a ||
                          t.StockBridge.toast(
                            "关注成功！后续将为您解锁更多专属内容",
                            "none"
                          ),
                          t.StockBridge.busEmit(
                            "common-ai-expert-follow-change",
                            {
                              expertId: null == (o = n.expert) ? void 0 : o.id,
                              isFollowed: c.value,
                            }
                          ),
                          (e.next = 23);
                        break;
                      case 20:
                        (e.prev = 20),
                          (e.t0 = e.catch(4)),
                          (c.value = a),
                          a || t.StockBridge.toast("关注失败，请重试", "none");
                      case 23:
                      case "end":
                        return e.stop();
                    }
                },
                a,
                null,
                [[4, 20]]
              );
            })),
            new Promise(function (e, t) {
              var n = function e(n) {
                  try {
                    i(a.next(n));
                  } catch (e) {
                    t(e);
                  }
                },
                r = function (e) {
                  try {
                    i(a.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                i = function (t) {
                  return t.done
                    ? e(t.value)
                    : Promise.resolve(t.value).then(n, r);
                };
              i((a = a.apply(o, null)).next());
            })
          );
          var o, a;
        },
      };
    },
  });
Array ||
  (
    t.resolveComponent("AiExpertInfoCard") +
    t.resolveComponent("OpinionBanner") +
    t.resolveComponent("MetricsCard") +
    t.resolveComponent("MarkdownRenderer")
  )();
var o = t._export_sfc(n, [
  [
    "render",
    function (e, n, o, r, i, c) {
      return t.e(
        {
          a: t.o(e.onFollowClick, 5535),
          b: t.p({
            expert: e.expert,
            bordered: !1,
            "show-follow": !0,
            "is-followed": e.isFollowed,
          }),
          c: e.expert.opinion || e.investmentConclusion,
        },
        e.expert.opinion || e.investmentConclusion
          ? {
              d: t.p({
                "rating-label": e.expert.ratingLabel,
                "rating-class": e.expert.ratingClass,
                summary: e.expert.opinion,
                detail: e.investmentConclusion,
              }),
            }
          : {},
        {
          e: t.f(e.detail.sections, function (e, n, o) {
            return t.e(
              {
                a: t.t(e.title),
                b: "metrics" === e.type && e.metrics && e.metrics.length,
              },
              "metrics" === e.type && e.metrics && e.metrics.length
                ? { c: "0c3f7bfd-2-" + o, d: t.p({ metrics: e.metrics }) }
                : {},
              { e: e.content },
              e.content
                ? { f: "0c3f7bfd-3-" + o, g: t.p({ content: e.content }) }
                : {},
              { h: n }
            );
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-0c3f7bfd"],
]);
wx.createComponent(o);
