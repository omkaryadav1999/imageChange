import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DeletData } from "../Action/Action";

function DisplayData() {
  const navigates = useNavigate();
  const doispatch = useDispatch();
  const storeData = useSelector((state) => state.Reducer);
  const handlePost = () => {
    navigates("/createPost");
  };

  const handleDelete = (id) => {
    doispatch(DeletData(id));
  };
  return (
    <>
      <div className="AddContainer">
        <p>Click on the button for the post</p>
        <button onClick={handlePost}>AddPost</button>
      </div>
      {storeData.map((item) => {
        const { id, data } = item;

        return (
          <div key={id}>
            {data.Title && <h5>{data.Title}</h5>}
            {data.image && (
              <img
                src={URL.createObjectURL(data.image)}
                style={{ height: "150px" }}
                alt="imges"
              />
            )}
            <br />
            <button>
              <NavLink to={`/editPage/${id}`} className="link">
                Edit
              </NavLink>
            </button>{" "}
            &nbsp;
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default DisplayData;
