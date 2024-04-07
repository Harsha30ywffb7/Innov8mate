import React, { useState } from "react";
import { BiHeart, BiChat, BiShareAlt } from "react-icons/bi";
import { Link } from "react-router-dom";


const Card = (props) => {

  console.log(props.allIdeasData.userUniqueId);
  const [likes, setLikes] = useState(props.allIdeasData.likes);
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
    <div className="cursor-pointer w-4/12 border border-gray-300 rounded-md m-10 shadow-md">
      <div className="flex gap-5 p-2">
        <div className="w-15 h-20 ml-2">
          <img src='https://source.unsplash.com/400x400/?random' alt="profile" className="rounded-full h-10 w-10" />
        </div>
        <div className="ml-3">
          <p className="text-slate-500 text-md text-sm ">{'@'}{props.allIdeasData.userUniqueId}</p>
          <p className="text-md font-semibold">{props.allIdeasData.title}</p>
        </div>
      </div>

      <div className="p-5">
        <div className="text-gray-600">
          <p className="text-sm px-4 overflow-hidden clamp-2">{props.allIdeasData.description}</p>
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
          <Link to={`/pitchideas/idea/${props.allIdeasData._id}`}>
            <button className="rounded-md py-1 px-1 text-white bg-orange-500">
              View More
            </button>
          </Link>
        </div>
        <div className="flex ">
          <p className="text-10 ml-9 mr-9 text-sm">{likes}{ }</p>
          <p className="text-10 ml-9 text-sm">{comment}{ }</p>
          
        </div>
      </div>
    </div>
  );
};

const CardsContainer = (props) => {
  
  return (
    <div className="flex justify-center flex-wrap">
      {props.allIdeasData.map((item, index) => (
        
          <Card key={index} props={item} allIdeasData={item} />
       
      ))}
    </div>
  );
};

export default CardsContainer;


// const data = [
//   {
//     username: "Harsha",
//     profile: "https://source.unsplash.com/400x400/?man",
//     title: "Sustainable nature",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt asperiores corrupti animi veniam, ullam ducimus soluta quam. Natus, earum sed!",
//   },
//   {
//     username: "Vardhan",
//     profile: "https://source.unsplash.com/400x400/?woman",
//     title: "Sustainable nature",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt asperiores corrupti animi veniam, ullam ducimus soluta quam. Natus, earum sed!",
//   },
//   {
//     username: "Vardhan",
//     profile: "https://source.unsplash.com/400x400/?woman",
//     title: "Sustainable nature",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt asperiores corrupti animi veniam, ullam ducimus soluta quam. Natus, earum sed!",
//   }
//   // Other data objects
// ];
