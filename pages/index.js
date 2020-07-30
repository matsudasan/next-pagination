import Head from 'next/head'
import fetch from "node-fetch";
import { useState } from 'react';
import Pagination from '../components/Pagination';
import Post from '../components/Post';

export default function Home({ posts }) {

  //現在のページ
  const [currentPage, setCurrentPage] = useState(1);

  //ページごとの投稿数
  const [postsPerPage] = useState(10);

  // Get current posts
  //ページの最後の投稿　1ページ目の場合　1×10
  const indexOfLastPost = currentPage * postsPerPage;

  //ページ最初の投稿　1ページ目の場合　10-10
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  //ページの投稿内容
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <Head>
        <title>投稿一覧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>投稿一覧:{posts.length}件</h1>
        <h2>{currentPage}ページ目({indexOfFirstPost+1}~{indexOfLastPost}件表示)</h2>
        <Post posts={currentPosts} />
      </main>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />

      <style style jsx global>{`
      ul{
        list-style:none;
        padding:0;
      }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: { posts }
  }
}
