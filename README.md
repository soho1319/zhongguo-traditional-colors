# 中国传统配色

一个用于展示、学习和复用中华传统色的开放项目。当前仓库收录 538 张传统色色卡图片，每张色卡包含色名、HEX、RGB、CMYK、配色推荐和气质关键词；后续计划扩展到 700+ 张，并持续补充来源说明和色彩知识。

在线访问：

```text
https://nevertoday.github.io/zhongguo-traditional-colors/
```

完整图片包：

```text
https://github.com/nevertoday/zhongguo-traditional-colors/releases/tag/v0.1.0
```

## 项目定位

中国传统色不只是一组漂亮色值，也连接着器物、织染、矿物颜料、诗词意象、节气物候和审美秩序。本项目希望把这些资料整理成一个可以直接浏览、下载、引用和二次开发的公共色彩资料馆。

适合用于：

- 设计灵感、品牌配色、界面主题和视觉实验。
- 传统文化、色彩教育、美术教学和内容创作。
- 前端项目、素材站、颜色工具和开放数据整理。
- 色名、色值、配色关系和视觉语气的持续校勘。

## 功能亮点

- 零依赖静态站点：`index.html` 可部署到 GitHub Pages。
- 真实色卡图库：按批次加载，支持单张预览和下载。
- 全量打包下载：浏览器端生成 ZIP，也可用脚本生成 Release 附件。
- 色彩知识科普：用简洁内容解释传统色的文化和设计使用边界。
- 可扩展资产清单：新增图片后运行脚本即可更新页面数据。

## 快速开始

```bash
npm run manifest
npm run start
```

然后访问：

```text
http://localhost:5173
```

也可以直接部署到 GitHub Pages。为了让浏览器端 ZIP 打包正常读取图片，请通过本地服务器或线上静态站访问，不建议直接用 `file://` 打开。

GitHub 发布步骤见 [docs/github-publishing.md](docs/github-publishing.md)。

## 图片下载

页面中的“生成 ZIP”按钮会读取 `images/` 下全部图片并在浏览器中生成：

```text
zhongguo-traditional-colors-images.zip
```

维护者也可以在本地生成下载包：

```bash
npm run package:images
```

生成文件位于：

```text
downloads/zhongguo-traditional-colors-images.zip
```

由于图片资产约 709MB，不建议把 ZIP 文件直接提交到 GitHub 仓库。更适合把它作为 GitHub Release 附件上传。

## 更新图片清单

新增、删除或替换 `images/` 中的图片后，运行：

```bash
npm run manifest
```

这会重新生成：

```text
assets/data/images.js
```

页面会自动使用新的数量、大小和文件列表。

## 目录结构

```text
.
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── data/images.js
│   └── js/app.js
├── images/
├── scripts/
│   ├── build-manifest.mjs
│   └── package-images.mjs
├── docs/
│   ├── github-publishing.md
│   └── image-packaging.md
├── CONTRIBUTING.md
└── LICENSE
```

## 路线图

- 将色卡从 538 张扩展到 700+ 张。
- 为色名、色值和配色推荐补充更清晰的来源与校勘记录。
- 增加按色系、气质、用途和关键词筛选。
- 输出更适合开发者复用的 JSON 数据格式。
- 增补可访问性对比、印刷注意事项和教学素材。

## 贡献

欢迎提交 Issue 或 Pull Request。新增色卡、修正色值、补充来源、优化页面和完善文档都很有价值。开始前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可

本项目使用 [MIT License](LICENSE) 开源。

请注意：传统色色值在不同资料、屏幕、印刷和材质中可能存在差异。本项目提供的是开放整理和学习资料，实际生产使用前应结合媒介校验。
