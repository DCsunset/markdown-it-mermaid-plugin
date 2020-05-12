const MarkdownIt = require('markdown-it');

const renderer = new MarkdownIt()
	.use(require('../index'));

console.log(renderer.render(`
\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
		C-->D;
\`\`\`
`));
