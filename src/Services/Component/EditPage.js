import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { EditedData } from "../Action/Action";

function EditPage() {
  const naviagtes = useNavigate();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.Reducer);
  const postId = useParams();
  const post = storeData.find((item) => {
    return item.id === postId.id;
  });
  const [image, setImg] = useState(post.data.image);
  const [Title, setTitle] = useState(post.data.Title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeImg = (e) => {
    let file = e.target.files[0];
    setImg(file);
  };

  const submitData = () => {
    const newObj = {
      postId,
      data: {
        image,
        Title
      }
    };
    dispatch(EditedData(newObj));
    naviagtes("/");
  };
  return (
    <div>
      <h2>Edit Data</h2>
      <form onSubmit={submitData}>
        <label htmlFor="Ttile">
          Title:
          <input type="text" id="title" value={Title} onChange={handleChange} />
          <br />
          <br />
          <label>
            Image:
            <input
              type="file"
              accept="image/*"
              placeholder="Photo"
              name="image"
              onChange={handleChangeImg}
            />
          </label>
          <br />
          <br />
          <input type="submit" /> &nbsp;
          <button>cancle post</button>
        </label>
      </form>
    </div>
  );
}

export default EditPage;
