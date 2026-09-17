# 内容设计 —— 技术文档站的目录结构

## 不要演示

```text
brk-docs/
├── index.md                       # 首页
│
├── guide/
│   ├── getting-started.md         # 环境准备 / esbuild 配置 / 第一个页面
│   ├── philosophy.md              # 设计哲学（核心页）
│   ├── jsx.md                     # cls / css / clk + 标签解析规则
│   ├── page-contract.md           # export const page = { vino }
│   ├── rendering.md               # 渲染一次 + 手动更新（replaceChildren）
│   ├── context.md                 # ctx 模式 / 父子通信
│   └── multiple-pages.md          # 多页容器 / 覆盖 brk.opens
│
├── api/
│   ├── index.md                   # brk 总览表
│   ├── components.md              # card / icon
│   ├── navigation.md              # opens / _open
│   ├── loading.md                 # _load
│   ├── network.md                 # _json / _post / _edit
│   └── cache.md                   # v / weak
│
├── architecture/
│   ├── init-runtime.md            # init.js 与 globalThis._brk_
│   ├── server-driven-bootstrap.md # 服务端只产引导配置
│   ├── no-vdom.md                 # 为什么没有虚拟 DOM
│   ├── page-module-protocol.md    # page.mjs 模块协议
│   └── size-budget.md             # 为什么必须 <10kb
│
├── recipes/
│   ├── multi-app-shell.md         # 微前端外壳（MultiplePagesApp 案例）
│   ├── replace-pattern.md         # 锚点 + replaceChildren 实战
│   └── override-init.md           # 用你自己的 init/brk.js 完全替换
│
├── extensions/                    # 占位，后续填
│   ├── overview.md
│   ├── webcomponent.md
│   └── component-libraries.md
│
├── compare/
│   ├── vs-react.md
│   └── vs-qiankun.md
│
├── faq.md
├── roadmap.md
├── contributing.md
└── changelog.md
```

## 初始版

```text
brk-docs/
├── index.md                          # 首页：Hero + 一句话定位 + 3 行代码 demo
│
├── guide/                            # 指南（主线）
│   ├── getting-started.md            # 快速开始：init.js → page.vino → 跑起来
│   ├── philosophy.md                 # 设计哲学：渲染一次 / 无 vdom / 框架不做调度
│   ├── jsx.md                        # JSX 语法：cls / css / clk + 标签解析规则
│   ├── page-contract.md              # 页面契约：export const page = { vino }
│   ├── rendering.md                  # 渲染与更新：replaceChildren / 锚点模式
│   ├── context.md                    # 父子通信：ctx 模式 vs React ref
│   └── multiple-pages.md             # 多页容器：父页面模式 / 覆盖 brk.opens
│
├── api/                              # API 参考（brk 命名空间）
│   ├── index.md                      # brk 总览表（一张表看全部）
│   ├── components.md                 # card / icon
│   ├── navigation.md                 # opens / _open
│   ├── loading.md                    # _load
│   ├── network.md                    # _json / _post / _edit
│   └── cache.md                      # v / weak
│
├── architecture/                     # 架构原理（给贡献者/深度用户）
│   ├── init-runtime.md               # init.js：jsx + brk 如何注入 globalThis
│   ├── server-driven-bootstrap.md    # 服务端只产引导配置
│   ├── no-vdom.md                    # 为什么没有虚拟 DOM
│   ├── page-module-protocol.md       # page.mjs 模块协议
│   └── size-budget.md                # 为什么必须 <10kb
│
├── extensions/                       # 扩展机制（待你补充）
│   ├── overview.md                   # brk._load 挂载到 brk 的协议
│   ├── component-libraries.md        # 扩展组件库
│   ├── webcomponent.md               # ⏳ 与 WebComponent 生态互动
│   └── ecosystem.md                  # 全局单例：同功能只加载一次
│
├── recipes/                          # 实战
│   ├── multi-app-shell.md            # 微前端外壳（你给的 MultiplePagesApp）
│   ├── tab-switching.md              # 多页切换 + 状态保留策略
│   └── focus-preserve.md             # 手动更新时如何保住焦点/滚动
│
├── compare/
│   ├── vs-react.md
│   ├── vs-vue.md
│   └── vs-qiankun.md                 # 与主流微前端方案对比
│
├── faq.md
├── roadmap.md                        # ⏳ 待补：WebComponent 等
├── contributing.md
└── changelog.md
```