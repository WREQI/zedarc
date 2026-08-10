var e = require("../utils/envUtils.js"),
  t = require("../../../../../common/vendor.js"),
  n = new Set(),
  i = {
    name: "DisLikeSelectDialog",
    props: {
      theme: { required: !0, type: String },
      isMP: { required: !0, type: Boolean, default: !1 },
    },
    data: function () {
      return {
        isLight: e.IS_LITE_MODE,
        reasonArray: [
          { name: "题文不相符", index: 0, show: !0, selected: !1 },
          { name: "信息有错误", index: 1, show: !0, selected: !1 },
          { name: "分析不合理", index: 2, show: !0, selected: !1 },
          { name: "答案较冗长", index: 3, show: !0, selected: !1 },
        ],
      };
    },
    computed: {
      submitBgStyle: function () {
        return this.hasSelectReason
          ? "submitBtnSelected"
          : "submitBtnUnSelected";
      },
      hasSelectReason: function () {
        var e = !1;
        return (
          this.reasonArray.forEach(function (t) {
            t.selected && (e = !0);
          }),
          e
        );
      },
      closeIconImage: function () {
        return "white" === this.theme
          ? "https://st.gtimg.com/design/a05dd675db4d105dbed144444d77da6a.png"
          : "https://st.gtimg.com/design/3a44df884c45e8c4b183c6518f499537.png";
      },
    },
    methods: {
      clickItem: function (e) {
        (this.reasonArray[e].selected = !this.reasonArray[e].selected),
          this.reasonArray[e].selected
            ? n.add(this.reasonArray[e].name)
            : n.delete(this.reasonArray[e].name);
      },
      closeCurDialog: function () {
        this.setAllToDefault(), this.$emit("cancel-feedback");
      },
      getElementsNextInnex: function (e) {
        return e + 1 < this.reasonArray.length ? this.reasonArray[e + 1] : "";
      },
      getVisibleAttr: function (e) {
        return e ? "visible" : "hidden";
      },
      getBgAttr: function (e) {
        return e ? "reasonItemSelect" : "reasonItemNormal";
      },
      setAllToDefault: function () {
        n.clear(),
          this.reasonArray.forEach(function (e) {
            e.selected = !1;
          });
      },
      clickMainSubmit: function () {
        if (n.size > 0) {
          var e = Array.from(n).join("|");
          this.setAllToDefault(), this.$emit("submit-unlike", e);
        }
      },
      clickMainComplaint: function () {
        this.$emit("submit-complaint");
      },
    },
  },
  r = t._export_sfc(i, [
    [
      "render",
      function (e, n, i, r, s, o) {
        return {
          a: t.o(function () {
            return o.closeCurDialog && o.closeCurDialog.apply(o, arguments);
          }, 4779),
          b: o.closeIconImage,
          c: t.o(function () {
            return o.closeCurDialog && o.closeCurDialog.apply(o, arguments);
          }, 4780),
          d: t.f(s.reasonArray, function (e, n, i) {
            return t.e(
              { a: n % 2 == 0 },
              n % 2 == 0
                ? {
                    b: t.t(e.name),
                    c: t.n(o.getBgAttr(e.selected)),
                    d: t.o(
                      function (e) {
                        return o.clickItem(n);
                      },
                      4781,
                      n
                    ),
                    e: t.t(o.getElementsNextInnex(n).name),
                    f: t.n(o.getVisibleAttr(o.getElementsNextInnex(n).show)),
                    g: t.n(o.getBgAttr(o.getElementsNextInnex(n).selected)),
                    h: t.o(
                      function (e) {
                        return o.clickItem(n + 1);
                      },
                      4782,
                      n
                    ),
                  }
                : {},
              { i: n }
            );
          }),
          e: t.n(o.submitBgStyle),
          f: t.o(function () {
            return o.clickMainSubmit && o.clickMainSubmit.apply(o, arguments);
          }, 4783),
          g: t.o(function () {
            return (
              o.clickMainComplaint && o.clickMainComplaint.apply(o, arguments)
            );
          }, 4784),
          h: t.n(s.isLight ? "light" : ""),
          i: t.n("skin-".concat(i.theme)),
        };
      },
    ],
    ["__scopeId", "data-v-732b1922"],
  ]);
wx.createComponent(r);
