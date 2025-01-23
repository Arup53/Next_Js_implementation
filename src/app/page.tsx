import Blog from "./blog/[id]/page";

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface BlogPropType {
  blog: Post;
}

export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await data.json();

  return (
    <>
      <h3 className="text-4xl text-center font-bold p-4 my-4">Blogs</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 my-4 overflow-hidden">
        {posts.slice(0, 6).map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
}
