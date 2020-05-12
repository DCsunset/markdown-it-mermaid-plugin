function mermaidPlugin(md) {
	const origRule = md.renderer.rules.fence.bind(md.renderer.rules);
	md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
		const token = tokens[idx];
		if (token.info === 'mermaid') {
			const code = token.content.trim();
			return `<div class="mermaid">${code}</div>`;
		}
		
		// Other languages
		return origRule(tokens, idx, options, env, slf);
	};
}

module.exports = mermaidPlugin;
