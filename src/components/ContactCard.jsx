import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function ContactCard() {
  return (
    <div className="md:m-10">
      <div className="bg-ra-lightgreen p-5 rounded-lg w-full">
        <div className="border-2 border-dotted border-ra-darkgreen p-5 bg-white text-gray-500 grid md:grid-cols-2">
          <div className="">
            <img
              src="/contactimg.jpeg"
              alt=""
              className="h-[50vh] w-[90%] object-cover"
            />
          </div>
          <div
            className="flex flex-col items-start md:justify-center mt-10 md:mt-0 gap-4 md:p-10 w-[80%]"
            data-aos="fade-left"
          >
            <h1 className="font-bold text-3xl text-ra-text">
              Contact With Our Certified Agent
            </h1>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="flex items-center justify-start gap-3">
              <button className="bg-ra-darkgreen w-full md:w-[60%] h-[70px] text-white font-bold p-5 flex items-center justify-center gap-1 rounded shadow">
                <PhoneIcon className="text-white" />
                Make A Call
              </button>
              <button className="bg-ra-text w-full md:w-[60%] h-[70px] text-white font-bold p-5 flex items-center justify-center gap-1 rounded shadow">
                <CalendarMonthIcon className="text-white" />
                 Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
