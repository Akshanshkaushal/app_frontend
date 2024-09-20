import React, { useState, useEffect } from "react";
import { dummyMovies, dummyTvShows } from '../../dummyData';

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

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching comments
    const dummyComments = [
      { id: 1, user: 'User1', content: 'Great movie!', timestamp: '2 hours ago', replies: [] },
      { id: 2, user: 'User2', content: 'I loved the plot twists.', timestamp: '1 hour ago', replies: [] },
      { id: 3, user: 'User3', content: 'The acting was superb.', timestamp: '30 minutes ago', replies: [] },
    ];
    setComments(dummyComments);

    // Simulate fetching posts
    setPosts([...dummyMovies, ...dummyTvShows]);
  }, [postId]);

  return (
    <div className="w-full ">
      <div className="overflow-auto h-[14rem]">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <CommentBox />
    </div>
  );
};

export default Comments;


