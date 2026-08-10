var t = require("../../../../../../common/vendor.js"),
  e = {
    name: "showTurn",
    components: {
      avatorCard: function () {
        return "../avatorCard/index.js";
      },
      longContent: function () {
        return "../longContent/index.js";
      },
      shortContent: function () {
        return "../shortContent/index.js";
      },
      otherSource: function () {
        return "../otherSource/index.js";
      },
      itemImage: function () {
        return "../itemImage/index.js";
      },
    },
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
    computed: {},
    methods: {
      tapTurnContent: function (t, e) {
        this.$emit("tapTurnContent", { eventName: t, eventData: e });
      },
      initShowMore: function () {
        this.$refs.showMore.initShowMore(this.$refs.turnLog);
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
    t.resolveComponent("avatorCard") +
    t.resolveComponent("longContent") +
    t.resolveComponent("itemImage") +
    t.resolveComponent("otherSource")
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
                          }, 5708),
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
                              }, 5709),
                              h: e.from_user,
                            }
                          : {},
                        {
                          i: "f56657e9-0-" + r,
                          j: t.p({
                            disabled: o.disabled,
                            itemData: e,
                            itemType: "turn",
                          }),
                        }
                      )
                    : {}
                );
              }),
              c: o.disabled ? 1 : "",
            }
          : {},
        { d: "removed" !== o.itemData.showType },
        "removed" !== o.itemData.showType
          ? t.e(
              {
                e: t.o(function (t) {
                  return i.tapTurnContent("tapPerson", t);
                }, 5710),
                f: t.p({
                  disabled: o.disabled,
                  itemData: o.itemData,
                  isShowTag: o.itemData.url,
                  pageType: o.pageType,
                }),
                g: -1 !== a.isShort.indexOf(o.itemData.showType),
              },
              -1 !== a.isShort.indexOf(o.itemData.showType)
                ? {
                    h: t.o(function (t) {
                      return i.tapTurnContent("tapDetail", o.itemData);
                    }, 5711),
                    i: t.o(function (t) {
                      return i.tapTurnContent("toggleShow", t);
                    }, 5712),
                    j: t.o(function (t) {
                      return i.tapTurnContent("tapContent", t);
                    }, 5713),
                    k: t.p({
                      itemData: o.itemData,
                      fromType: "turnShort",
                      itemType: "turn",
                    }),
                  }
                : {},
              { l: "long" === o.itemData.showType },
              "long" === o.itemData.showType
                ? { m: t.p({ itemType: "turn", itemData: o.itemData }) }
                : {},
              {
                n: t.o(function (t) {
                  return i.tapTurnContent("tapImage", t);
                }, 5714),
                o: t.p({ isTurnBox: !0, itemData: o.itemData }),
                p:
                  -1 !==
                  ["turnNews", "short", "share"].indexOf(o.itemData.showType),
              },
              -1 !== ["turnNews", "short", "share"].indexOf(o.itemData.showType)
                ? {
                    q: t.o(function (t) {
                      return i.tapTurnContent("goSharePage", t);
                    }, 5715),
                    r: t.o(function (t) {
                      return i.tapTurnContent("tapOtherSource", t);
                    }, 5716),
                    s: t.p({ itemData: o.itemData }),
                  }
                : {},
              {
                t: t.o(function (t) {
                  return i.tapTurnContent("tapDetail", o.itemData);
                }, 5717),
              }
            )
          : {},
        { v: "removed" === o.itemData.showType },
        "removed" === o.itemData.showType ? { w: t.t(o.itemData.content) } : {}
      );
    },
  ],
  ["__scopeId", "data-v-f56657e9"],
]);
wx.createComponent(n);
