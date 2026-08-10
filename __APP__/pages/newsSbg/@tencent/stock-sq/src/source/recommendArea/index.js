var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../utils/service/index.js"),
  n = require("../../../../stock-community-base/utils/knife.js"),
  i = require("../../../../stock-community-base/utils/api/index.js"),
  o = require("../../utils/mixins/securityCheck/index.js"),
  s = require("../../../../../../../common/vendor.js"),
  r = require("../../../../stock-community-base/utils/constant.js"),
  c = n.sdk,
  a = c.getUserInfo,
  u = c.reportAnalytics,
  l = (c.navigateTo, i.api.goPageCommon),
  p = {
    name: "recommand-area",
    options: { styleIsolation: "shared" },
    mixins: [o.securityCheck],
    components: {
      recommendItem: function () {
        return "../recommendItem/index.js";
      },
    },
    props: {
      pageSource: { type: String, default: 0 },
      pageSize: { type: Number, default: 6 },
      recoCeiling: { type: Boolean, default: !1 },
      pageType: { type: String, default: "friends" },
    },
    data: function () {
      return {
        peopleList: [],
        hasMore: !1,
        loading: !1,
        userinfo: {},
        pageNo: 1,
        cancelSelect: [],
        users: [],
        IsMINA:
          (window && "miniprogram" === window.__wxjs_environment) ||
          /miniProgram/.test((navigator && navigator.userAgent) || ""),
        isLiteMode: n.IS_LITE_MODE,
      };
    },
    computed: {
      isBatch: function () {
        return 6 === this.pageSize;
      },
    },
    methods: {
      toggleCheck: function (e) {
        this.cancelSelect.includes(e)
          ? (this.cancelSelect = this.cancelSelect.filter(function (t) {
              return t !== e;
            }))
          : this.cancelSelect.push(e);
      },
      recommendFollow: function (e) {
        this.$emit("recommendFollow", e);
      },
      toRecommendList: function () {
        s.StockBridge.routeTo({
          url: "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(
              "https://wzq.tenpay.com/mp/v2/index.html#/community/hotFans"
            )
          ),
        });
      },
      tapPerson: function (e) {
        var t = ""
          .concat(r.prefix[this.pageType], ".")
          .concat(r.moduleName, ".avator_tap");
        this.$emit("commentReport", t),
          l({
            url: r.toPerson(e),
            eventName: "person",
            userId: e,
            instance: this,
          }),
          u({ eventName: t });
      },
      followUsers: function () {
        var e = this;
        this.securityCheck({ eventName: "tapFollow" }).then(function () {
          e.peopleList.forEach(function (t) {
            e.cancelSelect.includes(t.openid) || e.users.push(t.openid);
          }),
            e.$emit("batchFollowUser", e.users.join(","));
        });
      },
      getNewList: function () {
        var e = this,
          n = {
            page_type: this.pageSource,
            page_no: this.pageNo || 1,
            page_size: this.pageSize,
          };
        this.loading ||
          ((this.loading = !0),
          t
            .getRecommendList(n, this.userinfo)
            .then(function (t) {
              var n = t.code,
                i = t.data,
                o = void 0 === i ? {} : i,
                s = o.has_more,
                r = o.list,
                c = void 0 === r ? [] : r;
              (e.loading = !1),
                0 === n &&
                  ((e.peopleList = c.slice(0, e.pageSize)),
                  e.$emit("recommendAreaRendered", e.peopleList),
                  (e.hasMore = s),
                  e.hasMore || (e.pageNo = 0));
            })
            .catch(function (e) {})
            .finally(function () {
              e.loading = !1;
            }));
      },
      changeList: function () {
        this.loading || ((this.pageNo += 1), this.getNewList(), this.reset());
      },
      reset: function () {
        this.cancelSelect = [];
      },
    },
    created: function () {
      return (
        (t = this),
        null,
        (n = e().mark(function t() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), a(!0);
                  case 2:
                    (this.userinfo = e.sent), this.getNewList();
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            t,
            this
          );
        })),
        new Promise(function (e, i) {
          var o = function (e) {
              try {
                r(n.next(e));
              } catch (e) {
                i(e);
              }
            },
            s = function (e) {
              try {
                r(n.throw(e));
              } catch (e) {
                i(e);
              }
            },
            r = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(o, s);
            };
          r((n = n.apply(t, null)).next());
        })
      );
      var t, n;
    },
  };
Array || s.resolveComponent("recommendItem")();
var m = s._export_sfc(p, [
  [
    "render",
    function (e, t, n, i, o, r) {
      return s.e(
        { a: o.peopleList.length && !o.IsMINA && !o.isLiteMode },
        !o.peopleList.length || o.IsMINA || o.isLiteMode
          ? {}
          : s.e(
              {
                b: s.o(function () {
                  return (
                    r.toRecommendList && r.toRecommendList.apply(r, arguments)
                  );
                }, 5880),
                c: o.hasMore || 6 === n.pageSize,
              },
              o.hasMore || 6 === n.pageSize
                ? {
                    d: s.o(function () {
                      return r.changeList && r.changeList.apply(r, arguments);
                    }, 5881),
                  }
                : {},
              {
                e: s.n(n.recoCeiling ? "ceiling" : ""),
                f: s.n(r.isBatch ? "isBatch" : ""),
                g: s.f(o.peopleList, function (e, t, n) {
                  return {
                    a: s.o(
                      function (t) {
                        return r.toggleCheck(e.openid);
                      },
                      5882,
                      t
                    ),
                    b: s.o(
                      function (e) {
                        return r.tapPerson(e);
                      },
                      5883,
                      t
                    ),
                    c: s.o(
                      function (e) {
                        return r.recommendFollow(e);
                      },
                      5884,
                      t
                    ),
                    d: "72c00df7-0-" + n,
                    e: s.p({
                      check: !o.cancelSelect.includes(e.openid),
                      itemData: e,
                      batch: r.isBatch,
                    }),
                    f: t,
                  };
                }),
                h: r.isBatch,
              },
              r.isBatch
                ? {
                    i: s.o(function () {
                      return r.followUsers && r.followUsers.apply(r, arguments);
                    }, 5885),
                  }
                : {},
              { j: s.n(r.isBatch ? "" : "nobatch") }
            )
      );
    },
  ],
  ["__scopeId", "data-v-72c00df7"],
]);
wx.createComponent(m);
