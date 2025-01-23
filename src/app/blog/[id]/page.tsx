import Link from "next/link";

export default function Blog({ blog }: any) {
  return (
    <div className="w-[20rem] h-[15rem] mx-auto bg-white shadow-lg rounded-lg overflow-hidden border flex flex-col">
      <div className="p-4 flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 truncate">
          {blog.title}
        </h2>
        <p className="text-gray-600 mt-2 line-clamp-3">{blog.body}</p>
      </div>

      <div className="p-4 bg-gray-100 text-sm text-right">
        <span className="text-gray-500">User ID: {blog.id}</span>
      </div>
      <Link
        className="px-2 py-1 bg-blue-600 text-white font-bold"
        href={{
          pathname: `blog/${blog.id}/details/${blog.id}`,
        }}
      >
        Deatils
      </Link>
    </div>
  );
}
