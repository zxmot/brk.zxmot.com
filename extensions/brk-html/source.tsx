// ©2026 09-22 18:08
import {brk} from '@/brk';

brk.html = (props, children) => {
	const div = <div {...props}/>; // 创建一个空白的 div
	const root = div.attachShadow({mode: 'open'});
	internal.appendChild(root, children); // 将内部组件变成 Shadow DOM 的一部分
	return div;
};
