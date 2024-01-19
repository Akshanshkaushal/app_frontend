import React, { useState, useEffect } from "react";

const Comment = ({ comment }) => (
    <div className=" ml-2 ">
  <div className="bg-gray-100 p-4 mb-4 border rounded-lg">
    <div className="flex items-center justify-between mb-2">
      <span className="text-gray-700 font-bold text-sm">{comment.user}</span>
      <span className="text-gray-500 text-sm">{comment.timestamp}</span>
    </div>
    <p className="text-gray-800 text-sm">{comment.content}</p>
  </div>
  <div className="mt-2 ml-6">
      {comment.replies.length > 0 &&
        comment.replies.map((reply) => (
          <Comment key={reply.id} comment={reply} />
        ))}
    </div>
    </div>
);

const CommentBox = () => (
  <div className="bg-gray-100 p-4 border w-full rounded-3xl flex flex-row">
    <textarea
      className="w-full h-10 p-2 resize-none outline-none"
      placeholder="Add a comment..."
    ></textarea>
    <button className=" bg-blue-500 rounded-4xl text-white px-4 py-2">
       +
    </button>
  </div>
);

const Comments = ({ postId}) => {
  const [comments, setComments] = useState([]);
  const jwttoken = localStorage.getItem('jwttoken');
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://techsnap-pe2v.onrender.com/posts/feed?page=${page}`);
        const data = await response.json();
        setPosts((prevPosts) => [...prevPosts, ...data.results]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]);


  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://techsnap-pe2v.onrender.com/posts/get_comments?id=${postId}`,
          {
            headers: {
              Authorization: `Token ${jwttoken}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setComments(data.data.replies);
        
        } else {
          console.error("Failed to fetch comments");
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [postId, jwttoken]);

  return (
    <div className="w-full ">
    <div className="overflow-auto h-[14rem]">
      {comments.length > 0 &&
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
        </div>
      <CommentBox />
    </div>
  );
};

export default Comments;
