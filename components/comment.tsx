"use client"

import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { MovieComment } from "@/interface/movie"
import { useState } from "react";

type commentProps = {
  initialComments: MovieComment[]
}

export const CommentComponent = ({initialComments}: commentProps) => {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState("")
  const handlePublish = () => {
    if (newComment.trim() === '') return

    const now = new Date();
    const datetime = now.toISOString().slice(0, 16).replace('T', ' ')

    const newCommentObject = {
      dateTime: datetime,
      content: newComment,
    }

    setComments([newCommentObject, ...comments])
    setNewComment('')
  };

  return (
    <div>
      <div className="p-4">
        <Textarea
          fullWidth
          placeholder="Enter your text here..."
          className="mb-4"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <div className="flex justify-end mt-2">
          <Button color="primary" onClick={handlePublish}>
            Publish
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-md">
            <div className="text-sm text-gray-500">{comment.dateTime}</div>
            <div className="mt-2 text-base">{comment.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
