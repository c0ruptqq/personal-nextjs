import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'

export async function getStaticPaths() {
  const files = fs.readdirSync('posts')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf8')
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
      <div className='prose-sm lg:prose-base mx-auto pt-40 p-4 katex'>
        <h1 className='text-text dark:text-bg prose-h'>{frontmatter.title}</h1>
        <div className='text-text' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </>
  )
}
