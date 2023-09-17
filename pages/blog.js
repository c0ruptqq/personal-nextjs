import Link from 'next/link.js';
import matter from 'gray-matter';
import fs from 'fs';
import Head from 'next/head';
export async function getStaticProps() {
  const folder = 'posts'
  const files = fs.readdirSync(folder).filter(f => f.includes(".md"))
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
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <div className='text-text text-6xl pt-40 p-4'>
        <Link href={`notes`}>
          <h1 className='text-text dark:text-bg text-4xl lg:text-6xl hover:text-secondary duration-200'>Notes</h1>
        </Link>
        {posts?.map(({ slug, frontmatter }) => (
          <div key={slug} className='mt-6'>

            <Link href={`post/${slug}`}>
              <h1 className='text-text dark:text-bg text-4xl lg:text-6xl hover:text-secondary duration-200'>{frontmatter.title}</h1>
            </Link>
          </div>

        ))}
      </div>
    </>
  )
}


