var e = require("../../../../../../common/vendor.js"),
  t = require("../../utils/utils.js"),
  i = "drawBoard-linebox-flag",
  n = {
    components: {
      Popup: function () {
        return "./Popup.js";
      },
    },
    inject: ["skin"],
    props: { isEmpty: { type: Boolean, default: !0 } },
    data: function () {
      return {
        isShowTips: !e.StockBridge.getStorage(i),
        ratio: t.getPixelRatio(),
        targetTop: 0,
        currentMenu: {},
        shapes: t.SHAPES,
        popupShape: "",
        isShowClearPopup: !1,
      };
    },
    computed: {
      tipTop: function () {
        return 32 * this.shapes.length;
      },
      isMini: function () {
        return e.StockBridge.ENV === e.EnvTypeEnum.MP;
      },
    },
    mounted: function () {
      var e = this;
      (this.tipsTimer = setTimeout(function () {
        e.handleCloseTips();
      }, 5e3)),
        this.isMini ||
          document.addEventListener("click", this.handleBodyClick, !1),
        this.$nextTick(function () {
          e.updateContainerRect();
        });
    },
    destroyed: function () {
      this.isMini ||
        document.removeEventListener("click", this.handleBodyClick, !1),
        clearTimeout(this.tipsTimer),
        (this.tipsTimer = null);
    },
    methods: {
      handleSave: function () {
        this.handleCloseTips(), this.emitShape("save");
      },
      handleBodyClick: function () {
        this.popupShape = "";
      },
      handleChoose: function (t) {
        if ("clear" !== t.shape)
          return "video" === t.shape
            ? (e.StockBridge.report(
                "hq.stock_detail.drawboard_line_select_video"
              ),
              void e.StockRouter.routeTo({
                name: "informationDetail",
                query: {
                  id: "SN20220624173440804c41e6",
                  zxtype: 1,
                  articleStyle: "fullTeach",
                },
              }))
            : t.subs && t.subs.length
            ? this.popupShape === t.shape
              ? void (this.popupShape = "")
              : void (this.popupShape = t.shape)
            : void this.emitShape("select", t.shape);
        this.handleClearPopup(!0);
      },
      emitShape: function (e, t) {
        this.$emit(e, t), (this.popupShape = "");
      },
      handleCloseTips: function () {
        this.isShowTips &&
          (e.StockBridge.setStorage(i, "true"), (this.isShowTips = !1));
      },
      updateContainerRect: function () {
        var t = this;
        e.StockBridge.ENV === e.EnvTypeEnum.MP
          ? e.wx$1
              .createSelectorQuery()
              .in(this)
              .select(".line-box-container")
              .boundingClientRect(function (e) {
                t.containerBCR = e;
              })
              .exec()
          : (this.containerBCR = this.$refs.lineBox.getBoundingClientRect());
      },
      confirmClearPopup: function () {
        this.emitShape("select", "clear"), this.handleClearPopup(!1);
      },
      handleClearPopup: function (e) {
        this.isShowClearPopup = e;
      },
    },
  };
Array || e.resolveComponent("popup")();
var o = e._export_sfc(n, [
  [
    "render",
    function (t, i, n, o, s, p) {
      return e.e(
        {
          a: e.o(function () {
            return p.handleSave && p.handleSave.apply(p, arguments);
          }, 5224),
          b: e.f(s.shapes, function (t, i, o) {
            return e.e(
              {
                a:
                  t.subs &&
                  "url(https://st.gtimg.com/design/03fdd8dd289da1e4e0a4cc3b10399563.svg)",
                b: e.n("clear" === t.shape && n.isEmpty && "isEmpty"),
                c: "url(".concat(
                  "white" === p.skin ? t.iconWhite : t.iconBlack,
                  ")"
                ),
                d: e.t(t.text),
                e: s.popupShape === t.shape && t.subs,
              },
              s.popupShape === t.shape && t.subs
                ? {
                    f: e.f(t.subs, function (t, i, n) {
                      return {
                        a: "url(".concat(
                          "white" === p.skin ? t.iconWhite : t.iconBlack,
                          ")"
                        ),
                        b: e.t(t.text),
                        c: "sub-" + i,
                        d: e.o(
                          function (e) {
                            return p.emitShape("select", t.shape);
                          },
                          5225,
                          "sub-" + i
                        ),
                      };
                    }),
                  }
                : {},
              {
                g: "video" === t.shape && s.isShowTips,
                h: e.o(
                  function () {
                    return (
                      p.handleCloseTips && p.handleCloseTips.apply(p, arguments)
                    );
                  },
                  5226,
                  t.type
                ),
                i: t.type,
                j: e.o(
                  function (e) {
                    return p.handleChoose(t);
                  },
                  5227,
                  t.type
                ),
              }
            );
          }),
          c: s.isShowClearPopup && !n.isEmpty,
        },
        s.isShowClearPopup && !n.isEmpty
          ? {
              d: e.o(p.confirmClearPopup, 5228),
              e: e.o(function (e) {
                return p.handleClearPopup(!1);
              }, 5229),
              f: e.p({
                title: "删除后，将清空当前周期全部画线。确认删除吗？",
                "is-black-skin": "white" !== p.skin,
              }),
            }
          : {},
        { g: e.n("white" !== p.skin && "is-black") }
      );
    },
  ],
  ["__scopeId", "data-v-dba523ef"],
]);
wx.createComponent(o);
