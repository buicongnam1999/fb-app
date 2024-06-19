import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export const Like = ({ data, onLike }: props) => {
  return (
    <div>
      <div className="grid grid-cols-3">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            onLike(data?.like + 1, data?.id);
          }}
        >
          <FontAwesomeIcon icon={faCoffee} />
        </div>
        <div style={{ cursor: "pointer" }}>{data?.like} like</div>
        <div style={{ cursor: "pointer" }}>
          {data?.comments.length} comments
        </div>
      </div>
    </div>
  );
};
