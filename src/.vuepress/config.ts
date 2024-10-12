import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/mybooks/",

  lang: "zh-CN",
  title: "我的书库",
  description: "我的书库",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
