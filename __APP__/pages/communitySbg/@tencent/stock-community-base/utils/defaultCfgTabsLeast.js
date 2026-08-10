exports.defaultCfgTabs = {
  stock: [
    {
      tab_desc: "最新",
      tab_value: "latest",
      orders: [
        { order_desc: "按评论时间", order_value: "comment" },
        { order_desc: "按发帖时间", order_value: "time" },
      ],
    },
    {
      tab_desc: "最热",
      tab_value: "all",
      orders: [{ order_desc: "按热度排序", order_value: "score" }],
    },
    {
      tab_desc: "晒单",
      tab_value: "share",
      orders: [{ order_desc: "按评论时间", order_value: "comment" }],
    },
  ],
  topic: [
    {
      tab_desc: "热门",
      tab_value: "hot",
      orders: [
        { order_desc: "按评论时间", order_value: "hot_comment" },
        { order_desc: "按发帖时间", order_value: "hot_time" },
      ],
    },
    {
      tab_desc: "最新",
      tab_value: "newest",
      orders: [
        { order_desc: "按评论时间", order_value: "all_comment" },
        { order_desc: "按发帖时间", order_value: "all_time" },
      ],
    },
  ],
  index: [
    { tab_desc: "广场", tab_value: "square" },
    { tab_desc: "股友圈", tab_value: "friends" },
    { tab_desc: "晒单", tab_value: "share" },
  ],
  subject: [
    {
      tab_desc: "最新",
      tab_value: "all",
      orders: [
        { order_desc: "最热", order_value: "reply_active" },
        { order_desc: "最新", order_value: "reply_time" },
      ],
    },
  ],
};
