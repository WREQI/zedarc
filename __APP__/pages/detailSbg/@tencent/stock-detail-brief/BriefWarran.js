var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("api/index.js"),
  r = require("../../../../common/vendor.js"),
  a = {
    zqdm: "证券代码",
    zqmc: "证券名称",
    xgzc: "相关资产",
    fxr: "发行机构",
    xz: "证券性质",
    jsfs: "结算方式",
    xqjg: "行权价格",
    xqbl: "行权比例",
    fxsl: "发行数量",
    ssrq: "上市日期",
    zhjyr: "最后交易",
    dqr: "到期日期",
    syts: "剩余天数",
  },
  n = {
    sjgg: "有效杠杆",
    ggbl: "杠杆比例",
    yj: "溢价",
    dcz: "对冲值",
    mrsjzsh: "每日时间损失消耗",
    ysbf: "引伸波幅",
    ysbfmgd: "引伸波幅敏感度",
    jzzk: "价值状况",
    dhd: "打和点",
    jhl: "街货量",
    jhzb: "街货占比",
  },
  c = {
    props: ["scode"],
    components: {},
    data: function () {
      return { briefData: [], tecData: [] };
    },
    created: function () {
      this.getData();
    },
    methods: {
      getData: function () {
        return (
          (c = this),
          null,
          (s = e().mark(function () {
            var c, s, i, o, u, f, d;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.getWorranBrief(r.StockBridge, this.scode)
                      );
                    case 2:
                      for (i in ((c = e.sent), (s = []), a))
                        (o = { name: a[i] || "--", value: c[i] || "--" }),
                          s.push(o);
                      for (f in ((u = []), n))
                        (d = {
                          name: n[f],
                          value: ("—" !== c[f] && c[f]) || "--",
                        }),
                          u.push(d);
                      (this.briefData = s),
                        (this.tecData = u),
                        this.$emit("loaded");
                    case 8:
                    case "end":
                      return e.stop();
                  }
              },
              u,
              this
            );
          })),
          new Promise(function (e, t) {
            var r = function e(r) {
                try {
                  n(s.next(r));
                } catch (e) {
                  t(e);
                }
              },
              a = function (e) {
                try {
                  n(s.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              n = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(r, a);
              };
            n((s = s.apply(c, null)).next());
          })
        );
        var c, s;
      },
    },
  },
  s = r._export_sfc(c, [
    [
      "render",
      function (e, t, a, n, c, s) {
        return r.e(
          {
            a: r.f(c.briefData, function (e, t, a) {
              return { a: r.t(e.name), b: r.t(e.value), c: e.name };
            }),
            b: c.tecData,
          },
          (c.tecData, {}),
          { c: c.tecData },
          (c.tecData, {}),
          {
            d: r.f(c.tecData, function (e, t, a) {
              return { a: r.t(e.name), b: r.t(e.value), c: e.name };
            }),
          }
        );
      },
    ],
    ["__scopeId", "data-v-a2fb50d0"],
  ]);
wx.createComponent(s);
