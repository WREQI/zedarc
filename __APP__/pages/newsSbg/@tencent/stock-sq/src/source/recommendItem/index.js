var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../utils/mixins/securityCheck/index.js"),
  n = require("../../../../stock-community-base/utils/privacyCheck.js"),
  a = require("../../../../../../../common/vendor.js"),
  i = {
    name: "recommend-item",
    options: { styleIsolation: "shared" },
    mixins: [t.securityCheck],
    components: {
      BaseImage: function () {
        return "../baseImage/index.js";
      },
    },
    props: {
      itemData: { type: Object, default: function () {} },
      batch: { type: Boolean, default: !0 },
      check: { type: Boolean, default: !0 },
    },
    data: function () {
      return { followed: !1, imageRefreshFlag: !0 };
    },
    watch: {
      itemData: function (e, t) {
        var n = this;
        e.openid !== t.openid &&
          ((this.followed = !1),
          (this.imageRefreshFlag = !1),
          this.$nextTick(function () {
            n.imageRefreshFlag = !0;
          }));
      },
    },
    methods: {
      tapPerson: function (e) {
        this.$emit("tapPerson", e);
      },
      handleFollow: function () {
        return (
          (t = this),
          null,
          (a = e().mark(function t() {
            var a,
              i = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.t0 = n.isH5Native), !e.t0)) {
                        e.next = 5;
                        break;
                      }
                      return (e.next = 4), n.sqPrivacyCheck();
                    case 4:
                      e.t0 = !e.sent;
                    case 5:
                      if (!e.t0) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return");
                    case 7:
                      (a = this.followed ? "tapUnfollow" : "tapFollow"),
                        this.securityCheck({ eventName: a }).then(function () {
                          (i.followed = !i.followed),
                            i.$emit("recommendFollow", {
                              status: i.followed,
                              toOpenid: i.itemData.openid,
                            });
                        });
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })),
          new Promise(function (e, n) {
            var i = function (e) {
                try {
                  r(a.next(e));
                } catch (e) {
                  n(e);
                }
              },
              o = function (e) {
                try {
                  r(a.throw(e));
                } catch (e) {
                  n(e);
                }
              },
              r = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(i, o);
              };
            r((a = a.apply(t, null)).next());
          })
        );
        var t, a;
      },
      toggleCheck: function () {
        this.$emit("toggleCheck");
      },
    },
    computed: {
      userType: function () {
        var e;
        return (null == (e = this.itemData) ? void 0 : e.vip_type) || "";
      },
      select: function () {
        return !!this.check;
      },
      virtualText: function () {
        var e = this.itemData,
          t = e.show,
          n = e.like,
          a = e.reply,
          i = e.post;
        return (
          [
            "",
            "TA共收到".concat(a, "条回复"),
            "TA共发布".concat(i, "条帖子"),
            "TA共获得".concat(n, "个点赞"),
          ][+t] || ""
        );
      },
    },
    created: function () {},
  };
Array ||
  (a.resolveComponent("BaseImage") + a.resolveComponent("st-checkbox"))();
var o = a._export_sfc(i, [
  [
    "render",
    function (e, t, n, i, o, r) {
      return a.e(
        { a: o.imageRefreshFlag },
        o.imageRefreshFlag
          ? {
              b: a.p({
                shape: "circular",
                src: n.itemData.user_image,
                backgrounColor: "DCDFE6",
                defaultImg:
                  "https://st.gtimg.com/design/10525daa2d7765232c6ef9580c98c364.png",
              }),
            }
          : {},
        {
          c: a.n(1001 === r.userType ? "personal vip" : ""),
          d: a.n(1002 === r.userType ? "enterprise vip" : ""),
          e: a.t(n.itemData.user_name),
          f: r.userType,
        },
        (r.userType, {}),
        {
          g: a.t(n.itemData.user_desc),
          h:
            n.itemData.fans_num >= 100 ||
            (n.itemData.fans_num + "").includes("万"),
        },
        n.itemData.fans_num >= 100 || (n.itemData.fans_num + "").includes("万")
          ? { i: a.t(n.itemData.fans_num) }
          : {},
        {
          j:
            (n.itemData.fans_num >= 100 ||
              (n.itemData.fans_num + "").includes("万")) &&
            r.virtualText,
        },
        ((n.itemData.fans_num >= 100 ||
          (n.itemData.fans_num + "").includes("万")) &&
          r.virtualText,
        {}),
        { k: r.virtualText },
        r.virtualText ? { l: a.t(r.virtualText) } : {},
        {
          m: a.o(function (e) {
            return r.tapPerson(n.itemData.openid);
          }, 5909),
          n: n.batch,
        },
        n.batch
          ? {
              o: a.p({ value: n.check, size: "big" }),
              p: a.o(function () {
                return r.toggleCheck && r.toggleCheck.apply(r, arguments);
              }, 5910),
            }
          : a.e({ q: !o.followed }, (o.followed, {}), {
              r: a.t(o.followed ? "已关注" : "关注"),
              s: a.o(function () {
                return r.handleFollow && r.handleFollow.apply(r, arguments);
              }, 5911),
              t: a.n(o.followed ? "followed" : ""),
            }),
        { v: a.n(n.batch ? "batch" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-f949f37e"],
]);
wx.createComponent(o);
