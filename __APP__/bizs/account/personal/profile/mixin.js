var t = require("../../../../common/vendor.js"),
  i = {
    props: { value: { type: Boolean, required: !0 } },
    data: function () {
      return { isShow: !1, item: { data: {} }, formData: {}, formList: [] };
    },
    created: function () {
      this.isShow = this.value;
    },
    methods: {
      setItem: function (t, i, e) {
        (this.item = t),
          (this.formData = i),
          (this.formList = e),
          this.setData(i);
      },
      setData: function (t) {},
      resetData: function () {},
      showToast: function (i) {
        t.index.showToast({ title: i, icon: "none" });
      },
      commitData: function (t) {
        this.$emit("changeData", t);
      },
    },
    computed: {
      title: function () {
        return this.item.title || "";
      },
      placeholder: function () {
        return "function" == typeof this.item.data.placeholder
          ? this.item.data.placeholder(this.formData)
          : this.item.data.placeholder;
      },
    },
    watch: {
      value: function (t) {
        this.isShow = t;
      },
      isShow: function (t) {
        this.$emit("input", t);
      },
    },
  };
exports.ProfileComponentMixin = i;
