var t = require("../../../../../../@babel/runtime/helpers/defineProperty"),
  e = require("../../../../../../common/vendor.js"),
  i = {
    props: ["type", "data"],
    computed: {
      auditList: function () {
        return this.data.audit_detail_list
          ? this.data.audit_detail_list
          : this.data.audit_detail
          ? [this.data.audit_detail]
          : [];
      },
    },
    created: function () {
      this.folded = this.auditList.map(function (e, i) {
        return t({}, i, !0);
      });
    },
    data: function () {
      return { folded: {} };
    },
    methods: {
      toggleFold: function (t) {
        this.$set(this.folded, t, !this.folded[t]);
      },
    },
  },
  d = e._export_sfc(i, [
    [
      "render",
      function (t, i, d, a, n, o) {
        return e.e(
          { a: o.auditList },
          o.auditList
            ? {
                b: e.f(o.auditList, function (t, i, d) {
                  return e.e(
                    { a: e.t(t.time), b: t.title && t.content },
                    t.title && t.content
                      ? e.e(
                          { c: e.t(t.title), d: n.folded[i] },
                          (n.folded[i], {}),
                          {
                            e: e.t(t.content),
                            f: n.folded[i] ? "" : 1,
                            g: e.o(
                              function (t) {
                                return o.toggleFold(i);
                              },
                              3741,
                              t.time + t.title
                            ),
                          }
                        )
                      : {},
                    { h: t.time + t.title }
                  );
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-652e38ae"],
  ]);
wx.createComponent(d);
