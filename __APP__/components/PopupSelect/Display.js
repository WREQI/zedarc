var e = require("../../@babel/runtime/helpers/slicedToArray");
require("../../app.js");
var t = require("../../common/vendor.js"),
  n = { downY: 10, leftX: 10, rightX: 10, upY: 10 },
  i = {
    props: {
      popupId: { type: String, default: "popup-text" },
      text: { type: String, default: "" },
      showIcon: { type: Boolean, default: !0 },
    },
    data: function () {
      return {};
    },
    emits: ["click"],
    methods: {
      handleClick: function (i) {
        var o = this;
        if (this.showIcon) {
          var c = t.index.createSelectorQuery().in(this),
            r = new Promise(function (e) {
              c.selectViewport()
                .boundingClientRect(function (t) {
                  e(t);
                })
                .exec();
            }),
            u = new Promise(function (e) {
              c.select(".".concat(i))
                .boundingClientRect(function (t) {
                  e(t);
                })
                .exec();
            });
          Promise.all([r, u])
            .then(function (t) {
              var i = e(t, 2),
                c = i[0],
                r = i[1];
              c && r
                ? o.$emit("click", {
                    downY: r.top + r.height + 16,
                    leftX: r.left,
                    rightX: c.width - r.right,
                    upY: r.top - 16,
                  })
                : o.$emit("click", n);
            })
            .catch(function () {
              o.$emit("click", n);
            });
        }
      },
    },
  },
  o = t._export_sfc(i, [
    [
      "render",
      function (e, n, i, o, c, r) {
        return t.e({ a: t.t(i.text), b: i.showIcon }, (i.showIcon, {}), {
          c: t.n(i.popupId),
          d: t.o(function (e) {
            return r.handleClick(i.popupId);
          }),
        });
      },
    ],
    ["__scopeId", "data-v-47242ec4"],
  ]);
wx.createComponent(o);
