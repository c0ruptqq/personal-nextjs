import mermaid from 'mermaid';
/*
 * global mermaid
*/
export function mermaidChart(code) {
  try {
    // eslint-disable-next-line
    // Had to modify katex.css and add 'position: static;' to override default svg fomating
    mermaid.parse(code)
    return `<div class="mermaid">${code}</div>`
  } catch ({ str, hash }) {
    return `<pre>${str} ${code}</pre>`
  }
}

export default function MermaidPlugin(md) {
  const origin = md.renderer.rules.fence.bind(md.renderer.rules)
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx]
    const code = token.content.trim()
    if (typeof token.info === 'string' && token.info.trim() === 'mermaid') {
      return mermaidChart(code)
    }
    const firstLine = code.split(/\n/)[0].trim()
    if (firstLine === 'gantt' ||
      firstLine === 'sequenceDiagram' ||
      firstLine === 'erDiagram' ||
      firstLine.match(/^graph (?:TB|BT|RL|LR|TD);?$/)) {
      return mermaidChart(code)
    }
    return origin(tokens, idx, options, env, slf)
  }
}
