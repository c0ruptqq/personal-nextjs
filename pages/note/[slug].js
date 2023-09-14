import fs from 'fs'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import mk from '../katex/katex'
import blockUml from '../katex/blockPlantuml'
import codeUml from '../katex/plantuml'
import image from '../katex/image'
import emoji from 'markdown-it-emoji'
import taskLists from 'markdown-it-task-lists'
import footnote from 'markdown-it-footnote'
import markdownDeflist from 'markdown-it-deflist'
import markdownImSize from '../katex/markdown-it-imsize'
import mkitMermaid from '../katex/mermaid'
//import chart from '../katex/chart'
import diagram, { renderDiagram } from '../katex/diagram'
import flowchart, { renderFlowchart } from '../katex//flowchart'
import dot, { renderDot } from '../katex/dot'
import markdownItToc from 'markdown-it-toc-done-right'

import { globSync } from 'glob'
const anchorSymbol = '<svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'



const DEFAULT_OPTIONS = {
  mkit: {
    // Enable HTML tags in source
    html: true,
    // Use '/' to close single tags (<br />).
    // This is only for full CommonMark compatibility.
    xhtmlOut: true,
    // Convert '\n' in paragraphs into <br>
    breaks: false,
    // CSS language prefix for fenced blocks. Can be
    // useful for external highlighters.
    langPrefix: 'language-',
    // Autoconvert URL-like text to links
    linkify: true,
    // Enable some language-neutral replacement + quotes beautification
    typographer: true,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '“”‘’',
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externally.
    // If result starts with <pre... internal wrapper is skipped.
  },
  katex: {
    'throwOnError': true,
    'errorColor': ' #cc0000'
  },
  uml: {},
  toc: {
    listType: 'ul'
  }
}

const mkit = {}
const katex = {}
const uml = {}
const hideYamlMeta = 1
const sequenceDiagrams = {}
const flowchartDiagrams = {}
const toc = {}
var md = new MarkdownIt({
  ...DEFAULT_OPTIONS.mkit,
  ...mkit
})
// if (hideYamlMeta === 1) {
//   md.use(meta([['---', '\\.\\.\\.'], ['---', '\\.\\.\\.']]))
// }
md
  .use(mk, {
    ...DEFAULT_OPTIONS.katex,
    ...katex
  })
  .use(blockUml, {
    ...DEFAULT_OPTIONS.uml,
    ...uml
  })
  .use(codeUml, {
    ...DEFAULT_OPTIONS.uml,
    ...uml
  })
  .use(emoji)
  .use(taskLists)
  .use(markdownDeflist)
  .use(footnote)
  .use(image)
  .use(markdownImSize)
  //.use(linenumbers)
  .use(mkitMermaid)
  //.use(chart.chartPlugin)
  .use(diagram, {
    ...sequenceDiagrams
  })
  .use(flowchart, flowchartDiagrams)
  .use(dot)
  //.use(markdownItAnchor, {
  //  permalink: true,
  //  permalinkBefore: true,
  //  permalinkSymbol: anchorSymbol,
  //  permalinkClass: 'anchor'
  //})
  .use(markdownItToc, {
    ...DEFAULT_OPTIONS.toc,
    ...toc
  })

export async function getStaticPaths() {
  const files = globSync('posts/**/*.md')
  console.log(files)
  const paths = files.map((path) => ({
    params: {
      slug: path.replace('posts/notes/', '').replace('.md', '')

    }
  }))
  console.log(paths)
  return {
    paths,
    fallback: true
  }
}

//export async function getStaticPaths() {
//  const files = fs.readdirSync('posts')
//  const paths = files.map((fileName) => ({
//    params: {
//      slug: fileName.replace('.md', '')
//    }
//  }))
//  console.log(paths)
//  return {
//    paths,
//    fallback: false
//  }
//}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/notes/${slug}.md`, 'utf8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content
    }
  }
}
export default function PostPage({ frontmatter, content }) {
  return (
    <>
      <div className='prose-sm prose mx-auto pt-40 p-4 katex'>
        <h1 className='text-text dark:text-bg prose-h'>{frontmatter.title}</h1>
        <div className='text-text' dangerouslySetInnerHTML={{ __html: md.render(content) }} />
      </div>
    </>
  )
}
