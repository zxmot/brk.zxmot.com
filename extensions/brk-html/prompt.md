帮我写一个组件：<input/>

## 语法设置

我使用的框架是一个 jsx 语法的封装，其中通过自定义样式创建组件的是语法是 brk.html

以下是一份示例代码：

```typescript jsx
const MineHtmlPageOrComponent = () => {

	return (
		<brk.html>
			<style>{styling}</style>
			<div css="height: 64px">
				页面的标题栏
			</div>
			<div cls="body">
				<h1>
					Hello World
				</h1>
				<div>
					正常的HTML，但使用 "cls" 简写代替 "class"，也不用 "className" 因为名字太长了
				</div>
			</div>
			<footer>
				<div>
					用 css 属性，可以直接写行内样式，不用 style
				</div>
			</footer>
		</brk.html>
	);
};

const styling = `/* 这里放 CSS 样式表 */
:host { /* 这里可以设置变量，但需要使用 :host 代替 :root */
	--main-color: #36f;
}
.root { }
.body { }
footer { }
`;
```

有几处替换更改需要注意：

```text
- :host <= :root
- <div cls="类样式名" <= className=""
- <div css="行内样式" <= style=""
```
