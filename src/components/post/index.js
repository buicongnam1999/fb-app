import React from "react";
import { Avatar } from "../avatar/index";
import { Like } from "../like/index";

interface IPostProps {
  data: any;
  onClick: Function;
}

export const Post = ({ data, onClick }: IPostProps) => {
  return (
    <div
      style={{ height: "300px" }}
      className="avatar"
      onClick={() => {
        onClick(data);
      }}
    >
      <Avatar data={data} />
      <div style={{ textAlign: "left" }}>{data?.time}</div>
      <h1>{data?.title}</h1>

      <Like data={data} />
    </div>
  );
};
