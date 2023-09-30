import fs from 'fs'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import mk from '../../../katex/katex'
import { globSync } from 'glob'
import mkitMermaid from '../../../katex/mermaid'



const DEFAULT_OPTIONS = {
  mkit: {
    html: true,
    xhtmlOut: true,
    breaks: false,
    langPrefix: 'language-',
    linkify: true,
    typographer: true,
    quotes: '“”‘’',
  },
  katex: {
    'throwOnError': false,
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
  .use(mkitMermaid)


export async function getStaticPaths() {
  const files = globSync('posts/notes/phys/*.md')
  const paths = files.map((path) => ({
    params: {
      slug: path.replace('posts/notes/phys/', '').replace('.md', '')

    }
  }))
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/notes/phys/${slug}.md`, 'utf8')
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
      <div className='prose-sm lg:prose-xl prose mx-auto pt-40 p-4 katex'>
        <h1 className='text-text dark:text-bg prose-h'>{frontmatter.title}</h1>
        <div className='text-text dark:text-bg' dangerouslySetInnerHTML={{ __html: md.render(content) }} />
      </div>
    </>
  )
}
