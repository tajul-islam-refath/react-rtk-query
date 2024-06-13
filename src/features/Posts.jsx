import { useState } from "react";
import { useDeletePostMutation, useGetPostsQuery } from "../services/posts";

const Posts = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useGetPostsQuery(page);

  const [deletePost, { isLoading: isDeleteLoading }] = useDeletePostMutation();

  console.log(data);
  if (isLoading) {
    <div>Loading...</div>;
  }

  if (isError) {
    <div>Error: {error}</div>;
  }

  const handleDelete = async (id) => {
    try {
      await deletePost(id).unwrap();
      alert("Delete post successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Page No. {page}</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="text-left">ID</th>
            <th className="text-left">Title</th>
            <th className="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((post) => (
            <tr>
              <td>{post?.id}</td>
              <td>{post?.title}</td>
              <td>
                <button
                  className="bg-yellow-400 text-white py-1 px-4"
                  onClick={() => handleDelete(post.id)}>
                  {isDeleteLoading ? "Deleting..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center gap-10 mt-4">
        {page !== 1 && (
          <button
            className="bg-black text-white py-1 px-4"
            onClick={() => setPage(page - 1)}>
            Prev
          </button>
        )}
        {data?.pages != page && (
          <button
            className="bg-black text-white py-1 px-4"
            onClick={() => setPage(page + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Posts;
