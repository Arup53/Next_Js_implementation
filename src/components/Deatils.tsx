"use client";
// import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface dataType {
  title: string;
  body: string;
  id: number;
}

export default function Details() {
  const [data, setData] = useState<dataType>();
  const [isLoading, setLoading] = useState(true);
  const { detailId: id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [id]);

  if (isLoading)
    return (
      <p className="h-[20rem] flex justify-center items-center">Loading...</p>
    );

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold text-gray-800 mb-2">{data?.title}</h2>
      <p className="text-gray-600 text-sm mb-4">{data?.body}</p>
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <span>ID: {data?.id}</span>
      </div>
    </div>
  );
}
