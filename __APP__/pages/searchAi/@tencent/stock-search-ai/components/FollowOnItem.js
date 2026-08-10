var e = require("../../../../../@babel/runtime/helpers/typeof"),
  s = require("../../../../../common/vendor.js"),
  t = require("../hooks/useComponentConfigHooks.js"),
  n = {
    name: "FollowOnItem",
    props: {
      guessObj: { required: !0, type: Array },
      theme: { required: !0, type: String },
      sessionId: { required: !1, type: String, default: "" },
      requestId: { required: !1, type: String, default: "" },
      serverMessageCode: { required: !1, type: Number, default: 0 },
    },
    computed: {
      isNewUserXuanGuFollowOn: function () {
        return (
          null != this.guessObj &&
          this.guessObj.every(function (s) {
            return "object" == e(s) && null !== s && !Array.isArray(s);
          }) &&
          0 === this.serverMessageCode
        );
      },
      isMbtiXuanGuFollowOn: function () {
        return (
          null != this.guessObj &&
          this.guessObj.every(function (s) {
            return "object" == e(s) && null !== s && !Array.isArray(s);
          }) &&
          this.serverMessageCode === t.SERVER_CODE_MBTI_ANSWER
        );
      },
    },
    data: function () {
      return {
        isMP: !0,
        type: "bottomType",
        FOLLOW_ON_NORMAL_TYPE: 0,
        FOLLOW_ON_MBTI_TYPE: 1,
        FOLLOW_ON_NEW_USER_TYPE: 2,
      };
    },
    created: function () {
      if (
        this.isNewUserXuanGuFollowOn &&
        null != this.guessObj &&
        Array.isArray(this.guessObj)
      ) {
        var e = this.guessObj
          .map(function (e) {
            return e.showQuery;
          })
          .join(",");
        s.StockBridge.report("base.ai_search.xuangu_recomend_card_brow", {
          requestid: this.requestId,
          session: this.sessionId,
          contentId: e,
        });
      }
    },
    methods: {
      onTapGuessQuestion: function (e, t, n) {
        2 === t
          ? (this.$emit("tap-new-user-guess-question", e),
            s.StockBridge.report(
              "base.ai_search.xuangu_recomend_card_item_click",
              {
                requestid: this.requestId,
                session: this.sessionId,
                contentId: null == e ? void 0 : e.showQuery,
              }
            ))
          : 1 === t
          ? this.$emit("tap-mbti-guess-question", e)
          : this.$emit("tap-guess-question", e, n + 1);
      },
    },
  },
  r = s._export_sfc(n, [
    [
      "render",
      function (e, t, n, r, u, o) {
        return s.e(
          { a: o.isNewUserXuanGuFollowOn },
          o.isNewUserXuanGuFollowOn
            ? {
                b: s.f(n.guessObj, function (e, t, n) {
                  return {
                    a: s.t(e.showQuery),
                    b: s.o(
                      function (s) {
                        return o.onTapGuessQuestion(
                          e,
                          u.FOLLOW_ON_NEW_USER_TYPE
                        );
                      },
                      4822,
                      t
                    ),
                    c: t,
                  };
                }),
                c: s.n("skin-".concat(n.theme)),
              }
            : {
                d: s.f(n.guessObj, function (e, t, n) {
                  return s.e(
                    o.isMbtiXuanGuFollowOn
                      ? {
                          a: s.t(e.query),
                          b: s.o(
                            function (s) {
                              return o.onTapGuessQuestion(
                                e,
                                u.FOLLOW_ON_MBTI_TYPE
                              );
                            },
                            4823,
                            t
                          ),
                        }
                      : {
                          c: s.t(e),
                          d: s.o(
                            function (s) {
                              return o.onTapGuessQuestion(
                                e,
                                u.FOLLOW_ON_NORMAL_TYPE,
                                t
                              );
                            },
                            4824,
                            t
                          ),
                        },
                    { e: t }
                  );
                }),
                e: o.isMbtiXuanGuFollowOn,
                f: s.n("skin-".concat(n.theme)),
              }
        );
      },
    ],
    ["__scopeId", "data-v-0ae685ae"],
  ]);
wx.createComponent(r);
