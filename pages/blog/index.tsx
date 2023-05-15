import { GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'
import Link from 'next/link'
import { getPostList } from '@/utils/posts'
<<<<<<< HEAD
export interface BlogListPageProps {
  posts: any[]
}

export default function BlogListPage({ posts }: BlogListPageProps) {
=======
export interface BlogListPage {
  posts: any[]
}

export default function BlogListPage({ posts }: BlogListPage) {
>>>>>>> ba562a2793d0929159b5ed115cd15874dc28026a
  // console.log('posts', posts)

  return (
    <div>
      <h1>Blog List Page</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} legacyBehavior>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

<<<<<<< HEAD
export const getStaticProps: GetStaticProps<BlogListPageProps> = async (
) => {
=======
export const getStaticProps: GetStaticProps<BlogListPage> = async () => {
>>>>>>> ba562a2793d0929159b5ed115cd15874dc28026a
  // server-side
  // build-time
  // console.log('static props')
  // const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  // const data = await response.json()
  // console.log(data)
<<<<<<< HEAD
  const data = await getPostList()
=======

  // convert markdown files into list of javascript object
  const data = await getPostList()

>>>>>>> ba562a2793d0929159b5ed115cd15874dc28026a
  return {
    props: {
      posts: data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  }
}
