import { Avatar } from "../avatar";
import { Like } from "../like";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// interface IDetailProps {
//   data: any;
//   onLike: (value: number, id: number) => void;
//   onComment: (value: number, id: number) => void;
// }

export const Detail = (props) => {
  const [comment, setComment] = useState("");

  const onAddComment = () => {
    props.onComment(comment, props.data.id);
    setComment("");
  };

  return (
    <div>
      <Avatar data={props.data} />
      <div>{props.data?.content ?? ""}</div>
      <div>
        <Like data={props.data} onLike={props.onLike} />
      </div>
      {props.data?.comments?.map((comment) => {
        return (
          <div>
            <Avatar data={comment} />
            <div>{comment?.text}</div>
          </div>
        );
      })}
      <div>
        <input
          type="text"
          value={comment}
          placeholder="Mời nhập comment"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <FontAwesomeIcon icon={faCoffee} onClick={onAddComment} />
      </div>
    </div>
  );
};
