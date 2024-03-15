import React, { useState } from "react";
import { BiHeart, BiChat, BiShareAlt } from "react-icons/bi";
import "./styles.css";

const data = [
  {
    username: "Harsha",
    profile: "https://source.unsplash.com/400x400/?man",
    title: "Sustainable nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt asperiores corrupti animi veniam, ullam ducimus soluta quam. Natus, earum sed!",
  },
  {
    username: "Vardhan",
    profile: "https://source.unsplash.com/400x400/?woman",
    title: "Sustainable nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt asperiores corrupti animi veniam, ullam ducimus soluta quam. Natus, earum sed!",
  },
  {
    username: "Vardhan",
    profile: "https://source.unsplash.com/400x400/?woman",
    title: "Sustainable nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt asperiores corrupti animi veniam, ullam ducimus soluta quam. Natus, earum sed!",
  }
  // Other data objects
];

const Card = ({ userData }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState(0);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="cursor-pointer w-3/12 border border-gray-300 rounded m-10">
      <div className="flex items-center gap-10 p-15">
        <div className="w-30 h-30">
          <img src={userData.profile} alt="profile" className="rounded-full h-10 w-10" />
        </div>
        <div className="name">
          <p className="text-black text-16">{userData.username}</p>
        </div>
      </div>

      <div className="p-15">
        <div className="font-semibold">
          <p>{userData.title}</p>
        </div>
        <div className="text-gray-600">
          <p className="overflow-hidden clamp-2">{userData.description}</p>
        </div>
        <div className="flex justify-around mt-10">
          <button className={`bg-white border-none`} onClick={handleLike}>
            <BiHeart className={liked ? "text-orange-500 animate-heart" : ""} />
          </button>
          <button className="bg-white border-none" onClick={() => setComment(comment + 1)}>
            <BiChat />
          </button>
          <button className="bg-white border-none">
            <BiShareAlt />
          </button>
        </div>
        <div className="flex justify-around">
          <p className="text-10 font-semibold text-sm">{likes}</p>
          <p className="text-10 font-semibold text-sm">{comment}</p>
          <p className="text-10 font-semibold"></p>
        </div>
      </div>
    </div>
  );
};

const CardsContainer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item, index) => (
        <Card key={index} userData={item} />
      ))}
    </div>
  );
};

export default CardsContainer;
