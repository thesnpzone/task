import React from "react";
import userImg from "../assets/Img/userImg.jpg";

const ProfileCard = () => {
  return (
    <div
      className="card p-3"
      style={{ maxWidth: "700px", borderRadius: "15px" }}
    >
      <div className="d-flex align-item-center">
        <img
          src={userImg}
          alt="ProfileImg"
          className="rounded-circle mr-4 img-fluid"
          style={{ width: "90px", height: "90px", objectFit: "cover" }}
        />
        <div className="">
          <h5 className="mb-1">Hii, Reader</h5>
          <p className="mb-0" style={{ fontFamily: "Outfit" }}>
            Here, Your News!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
