import React from "react";

const BookingComponent = () => {
  return (
    <div className="   flex flex-col justify-around items-center bg-slate-700 min-h-screen  chef-bg  ">
      <h1 className=" text-6xl sm:text-7xl text-white font-bold mt-32 px-20 text-shadow">
        Book Your Spot
      </h1>
      <form className=" booking-form">
        <label>Name</label>
        <input type="text" name="name" />
      </form>
      <div className="bottom-fade"></div>
    </div>
  );
};

export default BookingComponent;
