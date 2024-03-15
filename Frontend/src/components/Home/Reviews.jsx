
import React from "react";
// import './styles/reviews.css';

const profiles = [
  { profile: "https://source.unsplash.com/400x400/?actor", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error saepe distinctio quasi " },
  { profile: "https://source.unsplash.com/400x400/?samantha", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error saepe distinctio quasi fugiat quis magni nam neque, delectus ab omnis dolorum odio possimus! Et sapiente iste perspiciatis itaque dicta culpa" },
  { profile: "https://source.unsplash.com/400x400/?billgates", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
  { profile: "https://source.unsplash.com/400x400/?elonmusk", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error saepe distinctio quasi fugiat quis magni nam neque" }
];

const ReviewsCard = (props) => {
  return (
    // <div className="relative border-2 border-gray-300 rounded-lg ">
    //   <div className="absolute left-1/2 transform -translate-x-1/2 -t-5 w-24 h-24 border-gray-400 rounded-full ">
    //     <img src={props.profile} alt="user profile" className="w-full h-full object-cover rounded-full" />
    //   </div>
    //   <div className="p-6">
    //     <p className="mt-8">{props.content}</p>
    //   </div>
    // </div>

    <div className="reviews-container">
      <div className="reviewCard relative border-2 border-gray-300 rounded-lg overflow-hidden">
        <div className="profile absolute -top-15 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-gray-400 rounded-full bg-white">
          <img
            src={props.profile}
            alt="user profile"
            className="absolute inset-0 w-full h-full object-cover rounded-full -top-15"
          />
        </div>
        <div className="content p-6">
          <p className="mt-8">{props.content}</p>
        </div>
      </div>
    </div>

  );
};

const Reviews = () => {
  return (
    <div className=" mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {profiles.map((eachProfile, index) => (
        <ReviewsCard key={index} profile={eachProfile.profile} content={eachProfile.content} />
      ))}
    </div>
  );
};

export default Reviews;

