var e = require("../../../../../../common/vendor.js"),
  t = e._export_sfc(
    {
      name: "YaowenFeedbackDialog",
      inject: { stockBridge: { default: {} } },
      data: function () {
        return {
          dialogWidth: 300,
          tagList: ["内容相似度高", "内容不相关", "内容质量差", "感觉到打扰"],
          checkTagList: [],
          localChecked: !1,
        };
      },
      created: function () {
        this.stockBridge.report(
          "news.zixuntab_yaowentab.feedback_dlg_exposure"
        );
      },
      watch: {},
      computed: {
        tagRowLength: function () {
          return this.tagList.length / 2;
        },
      },
      methods: {
        tagColumnLength: function (e) {
          return e === this.tagRowLength
            ? this.tagList.length % 2 == 0
              ? 2
              : 1
            : 2;
        },
        tagIndex: function (e, t) {
          return 2 * (e - 1) + (t - 1);
        },
        onSelectedTag: function (e) {
          this.$set(this.checkTagList, e, !this.checkTagList[e]);
        },
        onCheckButtonClick: function () {
          this.localChecked = !this.localChecked;
        },
        onHide: function () {
          this.$emit("onHide"),
            this.stockBridge.report(
              "news.zixuntab_yaowentab.feedback_dlg_cancel_click"
            );
        },
        onConfirm: function () {
          this.$emit("onConfirm", { checked: this.localChecked }),
            this.stockBridge.report(
              "news.zixuntab_yaowentab.feedback_dlg_confirm_click"
            ),
            this.localChecked &&
              this.stockBridge.report(
                "news.zixuntab_yaowentab.feedback_dlg_close_all"
              ),
            this.stockBridge.report(
              "news.zixuntab_yaowentab.feedback_dlg_reason",
              {
                check1: this.checkTagList[0] ? "1" : 0,
                check2: this.checkTagList[1] ? "1" : 0,
                check3: this.checkTagList[2] ? "1" : 0,
                check4: this.checkTagList[3] ? "1" : 0,
              }
            );
        },
        nothingHappened: function () {},
      },
    },
    [
      [
        "render",
        function (t, n, c, i, o, a) {
          return {
            a: e.f(a.tagRowLength, function (t, n, c) {
              return {
                a: e.f(a.tagColumnLength(t), function (n, c, i) {
                  return {
                    a: e.t(o.tagList[a.tagIndex(t, n)]),
                    b: n,
                    c: e.n(
                      o.checkTagList[a.tagIndex(t, n)] ? "selected" : "unselect"
                    ),
                    d: e.o(
                      function (e) {
                        return a.onSelectedTag(a.tagIndex(t, n));
                      },
                      2629,
                      n
                    ),
                  };
                }),
                b: t,
              };
            }),
            b: e.n(o.localChecked ? "ic_checked" : "ic_check"),
            c: e.o(function () {
              return (
                a.onCheckButtonClick && a.onCheckButtonClick.apply(a, arguments)
              );
            }, 2630),
            d: e.o(function () {
              return a.onHide && a.onHide.apply(a, arguments);
            }, 2631),
            e: e.o(function () {
              return a.onConfirm && a.onConfirm.apply(a, arguments);
            }, 2632),
            f: e.o(function () {
              return a.nothingHappened && a.nothingHappened.apply(a, arguments);
            }, 2633),
          };
        },
      ],
      ["__scopeId", "data-v-d3746d57"],
    ]
  );
wx.createComponent(t);
