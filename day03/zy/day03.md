## day03 

### 一.说出你对元素语义化的理解

#### 核心定义

元素语义化是指 **使用具有明确含义的 HTML 标签** 来构建页面结构，让标签本身能表达其包含内容的用途（而非仅用 `<div>` `<span>` 等无语义标签）。

#### 核心价值

1. **提高代码可读性**：开发者能快速通过标签判断内容结构（如 `<header>` 是头部、`<nav>` 是导航），便于团队协作和后期维护；
2. **优化 SEO**：搜索引擎（如百度、谷歌）能通过语义标签快速识别页面核心内容（如 `<article>` 是正文、`<h1>-<h6>` 是标题层级），提升页面搜索排名；
3. **增强 accessibility（无障碍）**：屏幕阅读器等辅助工具能通过语义标签解析页面结构，帮助视障用户更好地浏览内容。

#### 常见语义化标签及用途

| 标签        | 用途                                  | 替代方案（无语义）                              |
| ----------- | ------------------------------------- | ----------------------------------------------- |
| `<header>`  | 页面 / 区块的头部（含标题、Logo）     | `<div class="header">`                          |
| `<nav>`     | 导航栏（如菜单、链接列表）            | `<div class="nav">`                             |
| `<main>`    | 页面核心内容（唯一）                  | `<div class="main">`                            |
| `<article>` | 独立完整的内容（如文章、新闻）        | `<div class="article">`                         |
| `<section>` | 逻辑分区（如章节、模块）              | `<div class="section">`                         |
| `<footer>`  | 页面 / 区块的底部（含版权、联系方式） | `<div class="footer">`                          |
| `<h1>-<h6>` | 标题层级（h1 最高，h6 最低）          | `<div style="font-size:24px;font-weight:bold">` |
| `<p>`       | 段落文本                              | `<div>`                                         |
| `<ul>/<ol>` | 无序列表 / 有序列表                   | `<div>` 嵌套 `<span>`                           |

### 二.对SEO的理解

#### 核心定义

SEO（Search Engine Optimization，搜索引擎优化）是指 **通过优化网站结构、内容、技术等维度，提升网站在搜索引擎自然搜索结果中的排名**，从而获取更多免费、精准的流量。

#### 核心优化方向（前端视角）

1. **技术 SEO**：
   - 页面加载速度（优化图片大小、压缩 CSS/JS、减少 HTTP 请求）；
   - 响应式设计（适配移动端，搜索引擎优先收录移动端页面）；
   - 语义化 HTML（如前所述，帮助搜索引擎解析结构）；
   - 合理的 URL 结构（简洁、包含关键词，如 `https://xxx.com/article/css-basic` 而非 `https://xxx.com/?id=123`）；
   - 避免死链接、重复内容。
2. **内容 SEO**：
   - 核心关键词布局（标题 `<title>`、正文、图片 `alt` 属性中合理包含关键词）；
   - 内容质量（原创、有价值，避免堆砌关键词）；
   - 图片优化（添加 `alt` 属性描述图片内容，搜索引擎无法直接识别图片）。
3. **用户体验 SEO**：
   - 清晰的页面导航（方便用户和搜索引擎爬行）；
   - 低跳出率（用户进入页面后停留时间长、互动多，搜索引擎会判定页面有价值）。

#### 关键提醒

SEO 是长期优化过程，核心原则是 “以用户为中心”，而非单纯迎合搜索引擎规则。

### 三.什么是字符编码

#### 核心定义

字符编码是指 **将文字、符号（如中文、英文、特殊符号）转换为计算机能识别的二进制数据（0 和 1）的规则**，本质是 “文字与二进制的映射表”。

#### 常见字符编码及特点

| 编码格式 | 核心特点                                    | 适用场景                   |
| -------- | ------------------------------------------- | -------------------------- |
| ASCII    | 仅支持英文、数字、基础符号（共 128 个字符） | 早期英文网站（已淘汰）     |
| GB2312   | 支持简体中文（6763 个汉字）+ ASCII          | 早期中文网站（部分老系统） |
| GBK      | 兼容 GB2312，支持繁体中文、日文、韩文       | 中文 Windows 系统默认编码  |
| UTF-8    | 兼容 ASCII，支持全球所有字符（含多语言）    | 目前网页、APP 的主流编码   |

#### 前端应用关键

- 网页必须在 `<head>` 中声明字符编码，否则可能出现 “乱码”：

  html

  ```html
  <meta charset="UTF-8"> <!-- 全球通用，必写 -->
  ```

  

- 原因：若网页文件保存为 UTF-8 格式，但浏览器按 GBK 解析，会因 “映射规则不匹配” 导致文字显示为乱码（如 “中文” 变成 “???¤?”）。

### 四.css编写样式的方法以及应用场景

CSS 编写样式有 3 种核心方法，优先级：**行内样式 > 内部样式表 > 外部样式表**（优先级可通过 `!important` 强制提升，但不推荐滥用）。

| 编写方法         | 实现方式                                                | 优点                               | 缺点                         | 应用场景                               |
| ---------------- | ------------------------------------------------------- | ---------------------------------- | ---------------------------- | -------------------------------------- |
| 行内样式（内联） | 直接在 HTML 标签的 `style` 属性中写样式                 | 编写快、优先级最高（针对性修改）   | 代码冗余、维护困难、无法复用 | 单个元素临时样式调整（如特殊文字颜色） |
| 内部样式表       | 在 HTML 的 `<style>` 标签中写样式（通常在 `<head>` 内） | 样式与 HTML 文件一体，无需额外请求 | 样式无法跨页面复用           | 单个页面的样式（如简单静态页）         |
| 外部样式表       | 单独创建 `.css` 文件，通过 `<link>` 引入 HTML           | 样式复用性强、维护方便、结构清晰   | 需要额外 HTTP 请求（可优化） | 多页面网站（如企业官网、电商平台）     |

#### 代码示例

1. 行内样式：

   html

   ```html
   <h1 style="color: red; font-size: 24px;">标题</h1>
   ```

   

2. 内部样式表：

   html

   ```html
   <head>
     <style>
       h1 { color: red; font-size: 24px; }
     </style>
   </head>
   ```

   

3. 外部样式表：

   - 新建 `style.css` 文件：`h1 { color: red; font-size: 24px; }`
   - HTML 引入：`<link rel="stylesheet" href="style.css">`

### 五.最常见的css样式及作用

以下是前端开发中高频使用的 CSS 样式，按 “布局 - 样式 - 交互” 分类：

#### 1. 布局相关（控制元素位置和尺寸）

| 样式属性         | 作用                             | 常用值                                                       |
| ---------------- | -------------------------------- | ------------------------------------------------------------ |
| `width`/`height` | 控制元素宽度 / 高度              | `px`（固定）、`%`（自适应）、`auto`（默认）                  |
| `margin`         | 元素外部间距（上下左右）         | `margin: 10px;`（四向）、`margin: 10px 20px;`（上下 / 左右） |
| `padding`        | 元素内部间距（内容与边框之间）   | 取值规则同`margin`                                           |
| `display`        | 控制元素显示模式（核心布局属性） | `block`（块级）、`inline`（行内）、`inline-block`（行内块）、`flex`（弹性布局） |
| `float`          | 让元素浮动（早期布局方式）       | `left`（左浮）、`right`（右浮）、`none`（默认）              |
| `position`       | 控制元素定位方式                 | `static`（默认）、`relative`（相对定位）、`absolute`（绝对定位）、`fixed`（固定定位） |

#### 2. 样式相关（控制元素外观）

| 样式属性        | 作用                | 常用值                                                       |
| --------------- | ------------------- | ------------------------------------------------------------ |
| `color`         | 文字颜色            | 十六进制（`#ff0000`）、RGB（`rgb(255,0,0)`）、英文（`red`）  |
| `font-size`     | 文字大小            | `px`（固定）、`rem`（自适应）                                |
| `font-weight`   | 文字粗细            | `normal`（默认）、`bold`（粗体）、`100-900`（数值）          |
| `background`    | 背景（颜色 / 图片） | `background-color: #f5f5f5;`、`background-image: url("img.jpg");` |
| `border`        | 元素边框            | `border: 1px solid #ccc;`（宽度 + 样式 + 颜色）              |
| `border-radius` | 圆角（常用美化）    | `5px`（固定）、`50%`（圆形）                                 |
| `text-align`    | 文字对齐方式        | `left`（默认）、`center`（居中）、`right`（右对齐）          |

#### 3. 交互相关（控制元素状态）

| 样式属性             | 作用                     | 常用场景                                                  |
| -------------------- | ------------------------ | --------------------------------------------------------- |
| `cursor`             | 鼠标悬浮时的指针样式     | `pointer`（手型，用于按钮 / 链接）、`default`（默认箭头） |
| `hover` 伪类         | 鼠标悬浮时的元素样式     | 按钮变色、链接下划线显示                                  |
| `display: none`      | 隐藏元素（不占页面空间） | 弹窗默认隐藏、条件性显示内容                              |
| `visibility: hidden` | 隐藏元素（占页面空间）   | 临时隐藏但保留布局位置                                    |

### 六.自行查找两个案例练习html+css



#### 案例 1：个人简介卡片（基础布局 + 样式）

**需求**：制作一个居中显示的个人简介卡片，包含头像、姓名、简介文本，hover 时轻微放大。

**代码实现**：



```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>个人简介卡片</title>
  <style>
    /* 全局样式重置（避免默认边距） */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    /* 页面居中（让卡片在屏幕中间） */
    body {
      background-color: #f5f5f5;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    /* 卡片样式 */
    .card {
      width: 300px;
      background-color: white;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1); /* 阴影增强立体感 */
      transition: transform 0.3s ease; /* 过渡动画 */
    }
    /* 卡片hover效果 */
    .card:hover {
      transform: scale(1.05); /* 放大1.05倍 */
    }
    /* 头像样式 */
    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%; /* 圆形头像 */
      object-fit: cover; /* 避免图片拉伸 */
      border: 3px solid #42b983; /* 绿色边框 */
      margin-bottom: 15px;
    }
    /* 姓名样式 */
    .name {
      font-size: 22px;
      color: #333;
      margin-bottom: 8px;
    }
    /* 简介样式 */
    .intro {
      font-size: 14px;
      color: #666;
      line-height: 1.6; /* 行高增强可读性 */
    }
  </style>
</head>
<body>
  <div class="card">
    <img src="https://picsum.photos/200" alt="个人头像" class="avatar">
    <h2 class="name">张三</h2>
    <p class="intro">前端开发学习者，热爱技术、喜欢分享。擅长HTML、CSS、JavaScript，致力于打造美观且实用的网页。</p>
  </div>
</body>
</html>
```

**核心知识点**：flex 布局（居中）、border-radius（圆角）、box-shadow（阴影）、hover 伪类、transition（过渡动画）。

#### 案例 2：响应式导航栏（适配移动端 + PC 端）

**代码实现**：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>响应式图文卡片列表</title>
  <style>
    /* 全局样式重置：清除默认边距、统一盒模型 */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Microsoft YaHei", sans-serif; /* 统一字体 */
    }

    /* 页面背景与容器居中 */
    body {
      background-color: #f8f9fa;
      padding: 40px 20px; /* 上下内边距，左右留空白 */
    }

    /* 标题样式 */
    .section-title {
      text-align: center;
      color: #333;
      font-size: 28px;
      margin-bottom: 30px;
      font-weight: 600;
    }

    /* 卡片列表容器：Grid布局核心 */
    .card-list {
      max-width: 1200px; /* 限制最大宽度，避免PC端过宽 */
      margin: 0 auto; /* 水平居中 */
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* 响应式列数：最小280px/列，自动填充 */
      gap: 25px; /* 卡片之间的间距（水平+垂直） */
    }

    /* 单个卡片样式 */
    .card {
      background-color: white;
      border-radius: 10px; /* 圆角美化 */
      overflow: hidden; /* 裁剪溢出内容（如图片圆角） */
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); /* 轻微阴影，增强层次感 */
      transition: all 0.3s ease; /* 过渡动画：hover时平滑变化 */
    }

    /* 卡片hover交互效果 */
    .card:hover {
      transform: translateY(-8px); /* 向上浮8px */
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12); /* 阴影加深，增强立体感 */
    }

    /* 卡片图片样式 */
    .card-img {
      width: 100%; /* 图片宽度自适应卡片 */
      height: 180px; /* 固定图片高度，保证统一 */
      object-fit: cover; /* 图片裁剪填充，不拉伸（关键） */
    }

    /* 卡片内容区域（文字部分） */
    .card-content {
      padding: 20px; /* 内边距，避免文字贴边 */
    }

    /* 卡片标题 */
    .card-title {
      font-size: 18px;
      color: #222;
      margin-bottom: 10px;
      white-space: nowrap; /* 不换行 */
      overflow: hidden; /* 隐藏溢出文字 */
      text-overflow: ellipsis; /* 溢出部分显示省略号 */
    }

    /* 卡片简介 */
    .card-desc {
      font-size: 14px;
      color: #666;
      line-height: 1.6; /* 行高，增强可读性 */
      margin-bottom: 15px;
      display: -webkit-box; /* 适配webkit内核浏览器 */
      -webkit-line-clamp: 2; /* 限制显示2行 */
      -webkit-box-orient: vertical;
      overflow: hidden; /* 溢出隐藏 */
    }

    /* 卡片日期 */
    .card-date {
      font-size: 12px;
      color: #999;
    }
  </style>
</head>
<body>
  <h2 class="section-title">最新资讯</h2>

  <div class="card-list">
    <!-- 卡片1 -->
    <div class="card">
      <img src="https://picsum.photos/600/400?random=1" alt="前端技术发展趋势" class="card-img">
      <div class="card-content">
        <h3 class="card-title">2025年前端技术发展趋势：AI与跨端开发成主流</h3>
        <p class="card-desc">随着大模型技术普及，AI辅助开发工具将大幅提升效率，跨端框架（如Flutter、React Native）将进一步统一移动端与PC端开发。</p>
        <span class="card-date">2025-11-09</span>
      </div>
    </div>

    <!-- 卡片2 -->
    <div class="card">
      <img src="https://picsum.photos/600/400?random=2" alt="CSS Grid布局教程" class="card-img">
      <div class="card-content">
        <h3 class="card-title">CSS Grid布局实战：3分钟实现响应式卡片列表</h3>
        <p class="card-desc">Grid布局是CSS3核心布局技术，支持二维布局（行+列），比Flex更适合复杂排版，一行代码即可实现响应式适配。</p>
        <span class="card-date">2025-11-08</span>
      </div>
    </div>

    <!-- 卡片3 -->
    <div class="card">
      <img src="https://picsum.photos/600/400?random=3" alt="Web性能优化技巧" class="card-img">
      <div class="card-content">
        <h3 class="card-title">Web性能优化实战：从10秒加载到1秒的秘诀</h3>
        <p class="card-desc">通过图片压缩、代码分割、缓存策略、CDN加速等手段，可大幅提升网页加载速度，优化用户体验与SEO排名。</p>
        <span class="card-date">2025-11-07</span>
      </div>
    </div>

    <!-- 卡片4 -->
    <div class="card">
      <img src="https://picsum.photos/600/400?random=4" alt="语义化HTML实践" class="card-img">
      <div class="card-content">
        <h3 class="card-title">语义化HTML的5个核心原则与实际应用</h3>
        <p class="card-desc">合理使用header、nav、article等语义标签，不仅提升代码可读性，还能优化SEO和无障碍访问，是前端开发的基础素养。</p>
        <span class="card-date">2025-11-06</span>
      </div>
    </div>
  </div>
</body>
</html>
```

