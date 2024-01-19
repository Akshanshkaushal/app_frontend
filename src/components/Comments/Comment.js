import { useState, useRef, useEffect } from "react";
import Action from "./Action";
import { ReactComponent as DownArrow } from "../../assets/images/down-arrow.svg";
import { ReactComponent as UpArrow } from "../../assets/images/up-arrow.svg";

const Comment = ({
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
  comment,
}) => {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [editMode]);

  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };

  const onAddComment = () => {
    if (editMode) {
      handleEditNode(comment.id, inputRef?.current?.innerText);
    } else {
      setExpand(true);
      handleInsertNode(comment.id, input);
      setShowInput(false);
      setInput("");
    }

    if (editMode) setEditMode(false);
  };

  const handleDelete = () => {
    handleDeleteNode(comment.id);
  };

  return (
    <div className="">

<div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
        {comment.id === 1 ? (
          <>
            <input
              type="text"
              className="inputContainer__input first_input"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type..."
            />

            <Action
              className="reply comment"
              type="COMMENT"
              handleClick={onAddComment}
            />
          </>
        ) : (
          <>
            <span
              contentEditable={editMode}
              suppressContentEditableWarning={editMode}
              ref={inputRef}
              style={{ wordWrap: "break-word" }}
            >
              {comment.name}
            </span>

            <div style={{ display: "flex", marginTop: "5px" }}>
              {editMode ? (
                <>
                  <Action
                    className="reply"
                    type="SAVE"
                    handleClick={onAddComment}
                  />
                  <Action
                    className="reply"
                    type="CANCEL"
                    handleClick={() => {
                      if (inputRef.current)
                        inputRef.current.innerText = comment.name;
                      setEditMode(false);
                    }}
                  />
                </>
              ) : (
                <>
                  <Action
                    className="reply"
                    type={
                      <>
                        {expand ? (
                          <UpArrow width="10px" height="10px" />
                        ) : (
                          <DownArrow width="10px" height="10px" />
                        )}{" "}
                        REPLY
                      </>
                    }
                    handleClick={handleNewComment}
                  />
                  <Action
                    className="reply"
                    type="EDIT"
                    handleClick={() => {
                      setEditMode(true);
                    }}
                  />
                  <Action
                    className="reply"
                    type="DELETE"
                    handleClick={handleDelete}
                  />
                </>
              )}
            </div>
          </>
        )}
      </div>

   <div className=" overflow-y-auto " style={{ display: expand ? "block" : "none", paddingLeft: 25  }}>
        {showInput && (
          <div className="inputContainer">
            <input
              type="text"
              className="inputContainer__input"
              autoFocus
              onChange={(e) => setInput(e.target.value)}
            />
            <Action className="reply" type="REPLY" handleClick={onAddComment} />
            <Action
              className="reply"
              type="CANCEL"
              handleClick={() => {
                setShowInput(false);
                if (!comment?.items?.length) setExpand(false);
              }}
            />
          </div>
        )}

        {comment?.items?.slice().reverse().map((cmnt) => {
          return (
            <Comment
              key={cmnt.id}
              handleInsertNode={handleInsertNode}
              handleEditNode={handleEditNode}
              handleDeleteNode={handleDeleteNode}
              comment={cmnt}
            />
          );
        })}
      </div>

    

   
    </div>
  );
};

export default Comment;
