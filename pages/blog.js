import Link from 'next/link.js';
import fs from 'fs';
import matter from 'gray-matter';

export async function getStaticProps() {
  const folder = 'posts'
  const files = fs.readdirSync(folder)
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`${folder}/${fileName}`, 'utf8')
    const { data: frontmatter } = matter(readFile)

    return {
      slug,
      frontmatter
    }
  })
  return {
    props: {
      posts
    }
  }
}
export default function Blog({ posts }) {

  return (
    <div className='text-text text-6xl pt-40 p-4'>
      {posts?.map(({ slug, frontmatter }) => (
        <div key={slug} className='mt-6'>
          <Link href={`/post/${slug}`}>
            <h1 className='text-text dark:text-bg text-4xl lg:text-6xl hover:text-secondary duration-200'>{frontmatter.title}</h1>
          </Link>
        </div>

      ))}
    </div>
  )
}


