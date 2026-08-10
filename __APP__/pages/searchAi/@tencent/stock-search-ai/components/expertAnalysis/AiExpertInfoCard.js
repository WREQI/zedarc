var e = require("../../../../../../common/vendor.js"),
  o = e.defineComponent({
    name: "AiExpertInfoCard",
    props: {
      expert: { type: Object, required: !0 },
      bordered: { type: Boolean, default: !0 },
      showFollow: { type: Boolean, default: !1 },
      isFollowed: { type: Boolean, default: !1 },
    },
    emits: ["follow-click"],
    setup: function (o, t) {
      var l = t.emit;
      return {
        displayTags: e.computed(function () {
          return (o.expert.tags || []).slice(0, 3);
        }),
        onFollowClick: function () {
          l("follow-click");
        },
      };
    },
  }),
  t = e._export_sfc(o, [
    [
      "render",
      function (o, t, l, r, a, n) {
        return e.e(
          { a: o.expert.avatar },
          o.expert.avatar ? { b: o.expert.avatar, c: o.expert.name } : {},
          { d: e.t(o.expert.name), e: o.expert.field },
          o.expert.field
            ? e.e(
                { f: o.expert.icon },
                o.expert.icon ? { g: o.expert.icon, h: o.expert.field } : {},
                { i: e.t(o.expert.field) }
              )
            : {},
          { j: o.displayTags && o.displayTags.length },
          o.displayTags && o.displayTags.length
            ? {
                k: e.f(o.displayTags, function (t, l, r) {
                  return e.e(
                    { a: e.t(t), b: l < o.displayTags.length - 1 },
                    (o.displayTags.length, {}),
                    { c: l }
                  );
                }),
              }
            : {},
          { l: o.showFollow },
          o.showFollow
            ? e.e({ m: !o.isFollowed }, (o.isFollowed, {}), {
                n: e.t(o.isFollowed ? "已关注" : "关注"),
                o: o.isFollowed ? 1 : "",
                p: e.o(function () {
                  return o.onFollowClick && o.onFollowClick.apply(o, arguments);
                }, 5030),
              })
            : {},
          { q: o.bordered ? 1 : "" }
        );
      },
    ],
    ["__scopeId", "data-v-7cb9caf8"],
  ]);
wx.createComponent(t);
