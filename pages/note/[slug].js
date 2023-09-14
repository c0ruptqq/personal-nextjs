import fs from 'fs'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import mk from '../../katex/katex'
import { globSync } from 'glob'

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
var md = new MarkdownIt({
  ...DEFAULT_OPTIONS.mkit,
  ...mkit
})
md
  .use(mk, {
    ...DEFAULT_OPTIONS.katex,
    ...katex
  })

export async function getStaticPaths() {
  const files = globSync('posts/notes/*.md')
  const paths = files.map((path) => ({
    params: {
      slug: path.replace('posts/notes/', '').replace('.md', '')

    }
  }))
  return {
    paths,
    fallback: false
  }
}
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
