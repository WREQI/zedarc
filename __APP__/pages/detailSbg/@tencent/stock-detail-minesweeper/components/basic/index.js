var a = require("../../../../../../common/vendor.js");
Array ||
  (
    a.resolveComponent("BasicCompDR") +
    a.resolveComponent("BasicCompST") +
    a.resolveComponent("BasicCompOR") +
    a.resolveComponent("BasicCompAD") +
    a.resolveComponent("BasicCompGW") +
    a.resolveComponent("BasicCompFE") +
    a.resolveComponent("BasicCompPC") +
    a.resolveComponent("BasicCompFF") +
    a.resolveComponent("BasicCompBU") +
    a.resolveComponent("BasicCompRA") +
    a.resolveComponent("BasicCompIT") +
    a.resolveComponent("BasicCompZ") +
    a.resolveComponent("BasicCompBL") +
    a.resolveComponent("BasicCompFD") +
    a.resolveComponent("BasicCompES") +
    a.resolveComponent("foldBar")
  )();
var t = a._export_sfc(
  {
    name: "MineSweeping-Basic",
    inject: ["themeColor"],
    props: ["data", "stockData", "mpscrollTop"],
    components: {
      foldBar: function () {
        return "../foldBar.js";
      },
      BasicCompDR: function () {
        return "./basicCompDR.js";
      },
      BasicCompST: function () {
        return "./basicCompST.js";
      },
      BasicCompOR: function () {
        return "./basicCompOR.js";
      },
      BasicCompAD: function () {
        return "./basicCompAD.js";
      },
      BasicCompGW: function () {
        return "./basicCompGW.js";
      },
      BasicCompFE: function () {
        return "./basicCompFE.js";
      },
      BasicCompPC: function () {
        return "./basicCompPC.js";
      },
      BasicCompFF: function () {
        return "./basicCompFF.js";
      },
      BasicCompBU: function () {
        return "./basicCompBU.js";
      },
      BasicCompRA: function () {
        return "./basicCompRA.js";
      },
      BasicCompIT: function () {
        return "./basicCompIT.js";
      },
      BasicCompZ: function () {
        return "./basicCompZ.js";
      },
      BasicCompBL: function () {
        return "./basicCompBL.js";
      },
      BasicCompFD: function () {
        return "./basicCompFD.js";
      },
      BasicCompES: function () {
        return "./basicCompES.js";
      },
    },
    data: function () {
      return {
        label: [
          {
            type: "退市风险",
            data: "delisting_risk",
            comp: "BasicCompDR",
            label: "finDR",
          },
          {
            type: "ST风险",
            data: "st_risk",
            comp: "BasicCompST",
            label: "finST",
          },
          {
            type: "业绩",
            data: "operation_result",
            comp: "BasicCompOR",
            label: "finOR",
          },
          {
            type: "审计意见",
            data: "audit",
            comp: "BasicCompAD",
            label: "finAD",
          },
          {
            type: "商誉",
            data: "goodwill",
            comp: "BasicCompGW",
            label: "finGW",
          },
          {
            type: "财务费用",
            data: "financial_expenses",
            comp: "BasicCompFE",
            label: "finFE",
          },
          {
            type: "扣非净利润",
            data: "profit_cut",
            comp: "BasicCompPC",
            label: "finPC",
          },
          {
            type: "现金流",
            data: "fund_flow",
            comp: "BasicCompFF",
            label: "finFF",
          },
          {
            type: "主营业务",
            data: "core_business",
            comp: "BasicCompBU",
            label: "finBU",
          },
          {
            type: "应收帐款",
            data: "receivable_account",
            comp: "BasicCompRA",
            label: "finRA",
          },
          {
            type: "存货",
            data: "inventory",
            comp: "BasicCompIT",
            label: "finIT",
          },
          { type: "Z值", data: "z_value", comp: "BasicCompZ", label: "finZ" },
          {
            type: "不良贷款率",
            data: "bad_loan",
            comp: "BasicCompBL",
            label: "finBL",
          },
          {
            type: "基本面恶化",
            data: "fundmental",
            comp: "BasicCompFD",
            label: "finFD",
          },
          {
            type: "估值",
            data: "estimate",
            comp: "BasicCompES",
            label: "finES",
          },
        ],
      };
    },
  },
  [
    [
      "render",
      function (t, o, p, e, c, m) {
        return a.e(
          { a: p.data },
          p.data
            ? {
                b: a.f(c.label, function (o, e, m) {
                  return a.e(
                    { a: "BasicCompDR" === o.comp && p.data[o.data] },
                    "BasicCompDR" === o.comp && p.data[o.data]
                      ? {
                          b: "56f26b0f-1-" + m + ",56f26b0f-0-" + m,
                          c: a.p({ type: o.label, data: p.data[o.data] }),
                        }
                      : "BasicCompST" === o.comp && p.data[o.data]
                      ? {
                          e: "56f26b0f-2-" + m + ",56f26b0f-0-" + m,
                          f: a.p({ type: o.label, data: p.data[o.data] }),
                        }
                      : "BasicCompOR" === o.comp && p.data[o.data]
                      ? {
                          h: "56f26b0f-3-" + m + ",56f26b0f-0-" + m,
                          i: a.p({ type: o.label, data: p.data[o.data] }),
                        }
                      : "BasicCompAD" === o.comp && p.data[o.data]
                      ? {
                          k: "56f26b0f-4-" + m + ",56f26b0f-0-" + m,
                          l: a.p({ type: o.label, data: p.data[o.data] }),
                        }
                      : "BasicCompGW" === o.comp && p.data[o.data]
                      ? {
                          n: "56f26b0f-5-" + m + ",56f26b0f-0-" + m,
                          o: a.p({ type: o.label, data: p.data[o.data] }),
                        }
                      : "BasicCompFE" === o.comp && p.data[o.data]
                      ? {
                          q: "56f26b0f-6-" + m + ",56f26b0f-0-" + m,
                          r: a.p({ type: o.label, data: p.data[o.data] }),
                        }
                      : "BasicCompPC" === o.comp && p.data[o.data]
                      ? {
                          t: "56f26b0f-7-" + m + ",56f26b0f-0-" + m,
                          v: a.p({ type: o.label, data: p.data[o.data] }),
                        }
                      : "BasicCompFF" === o.comp && p.data[o.data]
                      ? {
                          x: "56f26b0f-8-" + m + ",56f26b0f-0-" + m,
                          y: a.p({ type: o.label, data: p.data[o.data] }),
                        }
                      : "BasicCompBU" === o.comp && p.data[o.data]
                      ? {
                          A: "56f26b0f-9-" + m + ",56f26b0f-0-" + m,
                          B: a.p({ type: o.label, data: p.data[o.data] }),
                        }
                      : "BasicCompRA" === o.comp && p.data[o.data]
                      ? {
                          D: "56f26b0f-10-" + m + ",56f26b0f-0-" + m,
                          E: a.p({ type: o.label, data: p.data[o.data] }),
                        }
                      : "BasicCompIT" === o.comp && p.data[o.data]
                      ? {
                          G: "56f26b0f-11-" + m + ",56f26b0f-0-" + m,
                          H: a.p({ type: o.label, data: p.data[o.data] }),
                        }
                      : "BasicCompZ" === o.comp && p.data[o.data]
                      ? {
                          J: "56f26b0f-12-" + m + ",56f26b0f-0-" + m,
                          K: a.p({ type: o.label, data: p.data[o.data] }),
                        }
                      : "BasicCompBL" === o.comp && p.data[o.data]
                      ? {
                          M: "56f26b0f-13-" + m + ",56f26b0f-0-" + m,
                          N: a.p({ type: o.label, data: p.data[o.data] }),
                        }
                      : "BasicCompFD" === o.comp && p.data[o.data]
                      ? {
                          P: "56f26b0f-14-" + m + ",56f26b0f-0-" + m,
                          Q: a.p({ type: o.label, data: p.data[o.data] }),
                        }
                      : "BasicCompES" === o.comp && p.data[o.data]
                      ? {
                          S: "56f26b0f-15-" + m + ",56f26b0f-0-" + m,
                          T: a.p({ type: o.label, data: p.data[o.data] }),
                        }
                      : {},
                    {
                      d: "BasicCompST" === o.comp && p.data[o.data],
                      g: "BasicCompOR" === o.comp && p.data[o.data],
                      j: "BasicCompAD" === o.comp && p.data[o.data],
                      m: "BasicCompGW" === o.comp && p.data[o.data],
                      p: "BasicCompFE" === o.comp && p.data[o.data],
                      s: "BasicCompPC" === o.comp && p.data[o.data],
                      w: "BasicCompFF" === o.comp && p.data[o.data],
                      z: "BasicCompBU" === o.comp && p.data[o.data],
                      C: "BasicCompRA" === o.comp && p.data[o.data],
                      F: "BasicCompIT" === o.comp && p.data[o.data],
                      I: "BasicCompZ" === o.comp && p.data[o.data],
                      L: "BasicCompBL" === o.comp && p.data[o.data],
                      O: "BasicCompFD" === o.comp && p.data[o.data],
                      R: "BasicCompES" === o.comp && p.data[o.data],
                      U: a.sr(
                        p.data[o.data].tag.tag_name_eng,
                        "56f26b0f-0-" + m,
                        { f: 1 }
                      ),
                      V: e,
                      W: p.data[o.data].tag.tag_name_eng,
                      X: a.n(e === c.label.length - 1 ? "last" : ""),
                      Y: a.o(
                        function (a) {
                          return t.$emit("foldChange");
                        },
                        2889,
                        e
                      ),
                      Z: "56f26b0f-0-" + m,
                      aa: a.p({
                        title: o.type,
                        type: o.label,
                        data: p.data[o.data],
                        mpscrollTop: p.mpscrollTop,
                      }),
                    }
                  );
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-56f26b0f"],
  ]
);
wx.createComponent(t);
