
import React from "react";
// import './styles/reviews.css';

const profiles = [
  { profile: "https://source.unsplash.com/720x720/?billgates", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error saepe distinctio quasi " },
  { profile: "https://source.unsplash.com/400x400/?man", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error saepe distinctio quasi fugiat quis magni nam neque, delectus ab omnis dolorum odio possimus! Et sapiente iste perspiciatis itaque dicta culpa" },
  { profile: "https://source.unsplash.com/400x400/?billgates", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
  { profile: "https://source.unsplash.com/400x400/?elonmusk", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error saepe distinctio quasi fugiat quis magni nam neque" }
];

const ReviewsCard = (props) => {
  return (
    <div className="flex justify-between bg-slate-50">
      <div className="shadow-lg  border-2 border-gray-300 rounded-lg overflow-hidden text-left p-5">

        <div className="flex">
          <div className="mr-5">
            <img
              src={props.profile} alt="user profile" className="w-10 h-10 rounded-full"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">HarshaVardhan</p>
            <p className="text-sm font-normal text-gray-500 mt-1">@harshavardhan</p>
          </div>
        </div>
        <div className="">
          <p className="mt-8 content text-sm text-slate-700 leading-tight">{`"`}{props.content}{`"`}</p>
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

