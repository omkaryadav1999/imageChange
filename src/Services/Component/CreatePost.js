import React, { useState } from "react";
import { ActionData } from "../Action/Action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [data, setData] = useState({});
  const dispatach = useDispatch();
  const naviagtes = useNavigate();

  const handleChange = (e) => {
    const title = e.target.name;
    setData((old) => {
      return { ...old, [title]: e.target.value };
    });
  };

  const handleGetImg = (e) => {
    const image = e.target.name;
    setData((old) => {
      return { ...old, [image]: e.target.files[0] };
    });
  };

  const SubmitData = () => {
    dispatach(ActionData(data));
    naviagtes("/");
  };
  return (
    <div className="mainContainer">
      <h1>Add Post</h1>
      <form onSubmit={SubmitData}>
        <label>
          {" "}
          Title:
          <input
            type="text"
            placeholder="Enter The Title"
            onChange={handleChange}
            name="Title"
          />
        </label>
        <br />
        <br />
        <label>
          Image:
          <input
            type="file"
            accept="image/*"
            placeholder="Photo"
            name="image"
            onChange={handleGetImg}
          />
        </label>
        <br /> <br />
        <input type="submit" /> &nbsp;&nbsp;
        <button onClick={() => naviagtes("/")}>canclePost</button>
      </form>
    </div>
  );
}

export default CreatePost;
