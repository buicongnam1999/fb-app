import "./App.css";
import { useState, useEffect } from "react";
import dataJson from "./data.json";
import { Post } from "./components/post";
import { Detail } from "./components/detail";

function App() {
  const [datas, setDatas] = useState(dataJson?.data);
  const [chooseItem, setChooseItem] = useState(null);
  const [isDisplayScroll, setIsDisplayScroll] = useState(false);

  const onHandleLike = (numberLike, id) => {
    const newDatas = datas?.map((data) => {
      if (data?.id === id) {
        return {
          ...data,
          like: numberLike,
        };
      }

      return data;
    });

    setDatas(newDatas);
    setChooseItem({
      ...chooseItem,
      like: numberLike,
    });
  };

  const onHandleComment = (comment, id) => {
    const newDatas = datas?.map((data) => {
      if (data?.id === id) {
        return {
          ...data,
          comments: [
            ...data?.comments,
            {
              comment_id: data?.comments + 1,
              img: "https://www.w3schools.com/images/w3schools_green.jpg",
              fullname: "Thảo béo",
              text: comment,
            },
          ],
        };
      }

      return data;
    });

    setDatas(newDatas);
    setChooseItem({
      ...chooseItem,
      comments: [
        ...chooseItem?.comments,
        {
          comment_id: chooseItem?.comments + 1,
          img: "https://www.w3schools.com/images/w3schools_green.jpg",
          fullname: "Thảo béo",
          text: comment,
        },
      ],
    });
  };

  useEffect(() => {
    if (!chooseItem) {
      setChooseItem(dataJson?.data?.[0]);
    }
  }, [chooseItem]);

  return (
    <div className="App">
      <div className="flex">
        <div
          style={{
            height: "500px",
            overflowY: isDisplayScroll ? "auto" : "hidden",
            overflowX: "hidden",
          }}
          onMouseOver={() => setIsDisplayScroll(true)}
          onMouseOut={() => setIsDisplayScroll(false)}
        >
          {datas?.map((data) => {
            return <Post key={data?.id} data={data} onClick={setChooseItem} />;
          })}
        </div>
        <div>
          <Detail
            data={chooseItem}
            onLike={onHandleLike}
            onComment={onHandleComment}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
