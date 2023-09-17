import Link from 'next/link.js';
import matter from 'gray-matter';
import fs from 'fs';
import { globSync } from 'glob'
import Head from 'next/head';

export async function getStaticProps() {
  const files = globSync('posts/notes/*.md')
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '').match(/([^\/]*)\/*$/)[1]
    const readFile = fs.readFileSync(fileName, 'utf8')
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
export default function Notes({ posts }) {

  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>
      <div className='text-text text-6xl pt-40 p-4'>
        {posts?.map(({ slug, frontmatter }) => (
          <div key={slug} className='mt-6'>
            <Link href={`note/${slug}`}>
              <h1 className='text-text dark:text-bg text-4xl lg:text-6xl hover:text-secondary duration-200'>{frontmatter.title}</h1>
            </Link>
          </div>

        ))}
      </div>
    </>
  )
}


