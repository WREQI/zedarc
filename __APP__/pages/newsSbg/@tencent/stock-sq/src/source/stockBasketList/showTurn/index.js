var t = require("../../../../../../../../common/vendor.js"),
  e = {
    name: "showTurn",
    components: {
      avatorCard: function () {
        return "../avatorCard/index.js";
      },
      showMore: function () {
        return "../../showMore/index.js";
      },
      longContent: function () {
        return "../longContent/index.js";
      },
      shortContent: function () {
        return "../shortContent/index.js";
      },
      otherSource: function () {
        return "../../otherSource/index.js";
      },
      itemImage: function () {
        return "../itemImage/index.js";
      },
      showTurnNum: function () {
        return "../../showTurnNum/index.js";
      },
    },
    inject: { platformType: { default: "" } },
    props: {
      pageType: { type: String, require: !1 },
      showType: { type: String, default: "short" },
      disabled: { type: Boolean, default: !0 },
      turnLog: {
        type: Array,
        default: function () {
          return [];
        },
      },
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      showTurnNum: { type: Boolean, default: !1 },
      allowLike: { type: Boolean, default: !0 },
    },
    data: function () {
      return { isShort: ["short", "reply", "turnNews", "turn", "share"] };
    },
    computed: {
      platformClass: function () {
        return this.platformType;
      },
    },
    methods: {
      tapTurnContent: function (t, e) {
        this.$emit("tapTurnContent", { eventName: t, eventData: e });
      },
      initShowMore: function () {
        var t, e, n;
        null == (n = null == (t = this.$refs) ? void 0 : t.showMore) ||
          n.initShowMore(null == (e = this.$refs) ? void 0 : e.turnLog);
      },
      toggleShow: function (t) {
        this.$emit("toggleShow", t);
      },
      tapDetail: function (t) {
        this.$emit("tapDetail", t);
      },
      tapContent: function (t) {
        this.$emit("tapContent", t);
      },
      tapPerson: function (t) {
        var e = t.currentTarget.dataset.personid;
        e && this.tapTurnContent("tapPerson", e);
      },
    },
  };
Array ||
  (
    t.resolveComponent("shortContent") +
    t.resolveComponent("showMore") +
    t.resolveComponent("avatorCard") +
    t.resolveComponent("longContent") +
    t.resolveComponent("itemImage") +
    t.resolveComponent("otherSource") +
    t.resolveComponent("showTurnNum")
  )();
var n = t._export_sfc(e, [
  [
    "render",
    function (e, n, o, r, a, i) {
      return t.e(
        {
          a:
            "edit" === o.showType ||
            ("list" === o.showType && o.turnLog.length > 1),
        },
        "edit" === o.showType || ("list" === o.showType && o.turnLog.length > 1)
          ? {
              b: t.f(o.turnLog, function (e, n, r) {
                return t.e(
                  {
                    a:
                      "edit" === o.showType || ("list" === o.showType && n > 0),
                  },
                  "edit" === o.showType || ("list" === o.showType && n > 0)
                    ? t.e(
                        {
                          b: t.t(e.user_name),
                          c: t.o(function () {
                            return (
                              i.tapPerson && i.tapPerson.apply(i, arguments)
                            );
                          }, 4292),
                          d: e.user_id,
                          e: e.replyTo,
                        },
                        e.replyTo
                          ? {
                              f: t.t(e.replyTo.text),
                              g: t.o(function () {
                                return (
                                  i.tapPerson && i.tapPerson.apply(i, arguments)
                                );
                              }, 4293),
                              h: e.from_user,
                            }
                          : {},
                        {
                          i: "d2d3af79-0-" + r,
                          j: t.p({ disabled: o.disabled, itemData: e }),
                        }
                      )
                    : {}
                );
              }),
              c: t.sr("showMore", "d2d3af79-1"),
              d: t.o(i.initShowMore, 4294),
              e: t.p({ showType: "turnLog" }),
              f: o.disabled ? 1 : "",
            }
          : {},
        { g: "removed" !== o.itemData.showType },
        "removed" !== o.itemData.showType
          ? t.e(
              {
                h: t.o(function (t) {
                  return i.tapTurnContent("tapPerson", t);
                }, 4295),
                i: t.p({
                  disabled: o.disabled,
                  itemData: o.itemData,
                  isShowTag: o.itemData.url,
                  pageType: o.pageType,
                }),
                j: -1 !== a.isShort.indexOf(o.itemData.showType),
              },
              -1 !== a.isShort.indexOf(o.itemData.showType)
                ? {
                    k: t.o(function (t) {
                      return i.tapTurnContent("tapDetail", o.itemData);
                    }, 4296),
                    l: t.o(function (t) {
                      return i.tapTurnContent("toggleShow", t);
                    }, 4297),
                    m: t.o(function (t) {
                      return i.tapTurnContent("tapContent", t);
                    }, 4298),
                    n: t.p({
                      pageType: o.pageType,
                      itemData: o.itemData,
                      fromType: "turnShort",
                    }),
                  }
                : {},
              { o: "long" === o.itemData.showType },
              "long" === o.itemData.showType
                ? {
                    p: t.o(function (t) {
                      return i.tapTurnContent("tapDetail", o.itemData);
                    }, 4299),
                    q: t.o(function (t) {
                      return i.tapTurnContent("toggleShow", t);
                    }, 4300),
                    r: t.p({ itemData: o.itemData }),
                  }
                : {},
              {
                s: t.o(function (t) {
                  return i.tapTurnContent("tapImage", t);
                }, 4301),
                t: t.p({ isTurnBox: !0, itemData: o.itemData }),
                v:
                  -1 !==
                  ["turnNews", "short", "share"].indexOf(o.itemData.showType),
              },
              -1 !== ["turnNews", "short", "share"].indexOf(o.itemData.showType)
                ? {
                    w: t.o(function (t) {
                      return i.tapTurnContent("goSharePage", t);
                    }, 4302),
                    x: t.o(function (t) {
                      return i.tapTurnContent("tapOtherSource", t);
                    }, 4303),
                    y: t.p({ itemData: o.itemData }),
                  }
                : {},
              { z: o.showTurnNum },
              o.showTurnNum
                ? { A: t.p({ itemData: o.itemData, allowLike: o.allowLike }) }
                : {},
              {
                B: t.o(function (t) {
                  return i.tapTurnContent("tapDetail", o.itemData);
                }, 4304),
              }
            )
          : {},
        { C: "removed" === o.itemData.showType },
        "removed" === o.itemData.showType ? { D: t.t(o.itemData.content) } : {},
        { E: t.n(i.platformClass), F: t.n(o.pageType) }
      );
    },
  ],
  ["__scopeId", "data-v-d2d3af79"],
]);
wx.createComponent(n);
