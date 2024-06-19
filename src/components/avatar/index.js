import React from "react";

interface IAvatarProps {
  data: any;
}

export const Avatar = ({ data }: IAvatarProps) => {
  return (
    <div style={{ width: "100%" }}>
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <div className="flex">
          <div className="">
            <img src={data?.img} placeholder="Anh" />
          </div>
          <div>{data?.fullname ?? ""}</div>
        </div>

        <div className="float-right">{data?.status}</div>
      </div>
    </div>
  );
};
