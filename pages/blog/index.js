import React from 'react';
import PostsList from '../../components/PostsList';

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
    <div>
      <h1>Blog page</h1>
      <PostsList posts={posts} />
    </div>
  );
}
export default Blog;
