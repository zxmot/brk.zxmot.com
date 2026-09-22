// ©2026 09-22 16:35
import {brk} from '@/brk';

// 几处更改需要注意：
// :host <= :root
// <div cls="类样式名" <= className=""
// <div css="行内样式" <= style=""
const Template = () => {

	return (
		<div cls="root">
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
		</div>
	);
};

// 我该如何提供一份AI提示词，让AI可以帮我写自带丰富样式的组件？比如提供一份模板？
brk.html = (props, children) => {
	const div = <div {...props}/>; // 创建一个空白的 div
	const root = div.attachShadow({mode: 'open'});
	internal.appendChild(root, children);
	return div;
};


const styling = `
/* 这里放 CSS 样式表 */
:host {
	/* 这里可以设置变量，但需要使用 :host 代替 :root */
	--main-color: #36f;
}
.root { }
.body { }
footer { }
`;

// or HTML or Styles // <ayu.html> styling></ayu.html>
brk.shadow = (
	{div = (<div/>), styles}, child,
) => {
	const root = div.attachShadow({mode: 'open'});
	if (styles) {
		const style = document.createElement('style');
		style.textContent = styles;
		root.append(style);
	}
	appendChild(root, child);
	// if (div.shadowRoot === root) {alert('true ' + (typeof root));}
	return div;
};

const shadowing = (
	div: HTMLDivElement, // root dom
	css: string,
) => {
	const root = div.attachShadow({mode: 'open'});
	const style = document.createElement('style');
	root.append(root);
};


const DemoApp = (
	{name, title, menus},
) => (
	<brk.shadow styles={`
/* 这里是 css 语法，但要用 :host 代替 :root */
:host {
	--c-line:   #e5e7eb;
	--max-w:    1080px;
}
.header {
	border-bottom: 1px solid var(--c-line);
}
.header .container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 60px;
}
.main {
	max-width: var(--max-w);
	margin: 0 auto;
	padding: 48px 24px;
}
	`}>
		<header cls="header">
			<div cls="container">
				<a href="#" cls="logo">{name}</a>
				<nav cls="nav">
					{menus.map(item => (
						<a href={item.href}>{item.name}</a>
					))}
				</nav>
			</div>
		</header>

		<main cls="main">
			<div cls="placeholder">
				<h1>{title}</h1>
			</div>
		</main>


	</brk.shadow>
);