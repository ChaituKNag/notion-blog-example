import { useEffect, useState } from "react";

const Post = ({ post }) => {

  const title = post?.properties?.Name?.title[0]?.plain_text;

  return <div>
    <p>{title}</p>
  </div>
}

export default function App() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    // getPosts().then((resp) => {
    //   console.log(resp);
    // });

    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      })
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {posts && posts.map((post) => <Post post={post} key={post.id}/>)}
    </div>
  );
}
