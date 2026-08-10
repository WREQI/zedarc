var e = require("../../../../../../common/vendor.js"),
  n = {
    data: function () {
      return {
        delItem: null,
        editItem: null,
        newSessionName: "",
        delPopVisible: !1,
        renamePopVisible: !1,
        placeholder: "请输入对话名称",
      };
    },
    methods: {
      preventEvent: function () {},
      isShowPop: function () {
        return this.delPopVisible || this.renamePopVisible;
      },
      showDelSession: function (e) {
        (this.delItem = e), (this.delPopVisible = !0);
      },
      toggleDelPop: function (e) {
        (this.delPopVisible = e), e || (this.delItem = null);
      },
      showRenameSession: function (e) {
        var n = this;
        (this.renamePopVisible = !0),
          e &&
            e.title &&
            ((this.editItem = e), (this.newSessionName = e.title)),
          this.$nextTick(function () {
            n.$refs.renameSessionInput && n.$refs.renameSessionInput.focus();
          });
      },
      toggleRenamePop: function (e) {
        (this.renamePopVisible = e), e || (this.editItem = null);
      },
      renameSession: function () {
        var n, t, i;
        (null == (n = this.newSessionName) ? void 0 : n.trim())
          ? (null == (t = this.editItem) ? void 0 : t.bad_flag)
            ? e.StockBridge.toast("该对话不支持修改标题")
            : this.$emit(
                "renameSession",
                this.editItem,
                null == (i = this.newSessionName) ? void 0 : i.trim()
              )
          : e.StockBridge.toast("请输入对话名称");
      },
      delSession: function () {
        this.$emit("delSession", this.delItem);
      },
      close: function (e) {
        "rename" === e
          ? ((this.renamePopVisible = !1),
            (this.editItem = null),
            (this.newSessionName = ""))
          : "delete" === e &&
            ((this.delPopVisible = !1), (this.delItem = null));
      },
    },
  },
  t = e._export_sfc(n, [
    [
      "render",
      function (n, t, i, o, s, l) {
        return e.e(
          { a: s.delPopVisible },
          s.delPopVisible
            ? {
                b: e.o(function (e) {
                  return l.close("delete");
                }, 5423),
                c: e.o(function () {
                  return l.delSession && l.delSession.apply(l, arguments);
                }, 5424),
                d: e.o(function () {
                  return l.preventEvent && l.preventEvent.apply(l, arguments);
                }, 5425),
                e: e.o(function () {
                  return l.preventEvent && l.preventEvent.apply(l, arguments);
                }, 5426),
                f: e.o(function () {
                  return l.preventEvent && l.preventEvent.apply(l, arguments);
                }, 5427),
              }
            : {},
          { g: s.renamePopVisible },
          s.renamePopVisible
            ? {
                h: s.placeholder,
                i: s.newSessionName,
                j: e.o(function (e) {
                  return (s.newSessionName = e.detail.value);
                }, 5428),
                k: e.o(function (e) {
                  return l.close("rename");
                }, 5429),
                l: e.o(function () {
                  return l.renameSession && l.renameSession.apply(l, arguments);
                }, 5430),
                m: e.o(function () {
                  return l.preventEvent && l.preventEvent.apply(l, arguments);
                }, 5431),
                n: e.o(function () {
                  return l.preventEvent && l.preventEvent.apply(l, arguments);
                }, 5432),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-110a8277"],
  ]);
wx.createComponent(t);
