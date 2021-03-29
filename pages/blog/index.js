import React from 'react';
import PostsList from '../../components/PostsList';
import styles from '../../styles/Home.module.css';

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=8'
  );
  const posts = await res.json();
  return {
    props: { posts },
  };
};
function Blog({ posts }) {
  console.log(posts);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog Posts</h1>
      <PostsList posts={posts} style={{ marginTop: '30px' }} />
    </div>
  );
}
export default Blog;
