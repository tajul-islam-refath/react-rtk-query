import React from "react";
import { useCreatePostMutation } from "../services/posts";

const PostCreate = () => {
  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target["title"].value);
    try {
      await createPost({ title: e.target["title"].value }).unwrap();
      alert("Created successfully!");
      e.target.reset();
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };
  return (
    <div className="my-10">
      <form onSubmit={handleSubmit} className="flex items-center gap-10">
        <input
          type="text"
          className="border border-green-300 py-2 px-4 rounded-md"
          placeholder="Enter title"
          name="title"
        />
        <button type="submit" className="border border-black py-1 px-6">
          {isLoading ? " Loading..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
