import React from "react";

function TypeCard({ icon: Icon, title, total }) {
  return (
    <div className="bg-ra-lightgreen p-4 rounded-lg w-full">
      <div className="border-2 border-dotted border-ra-darkgreen p-2 hover:bg-ra-darkgreen bg-white text-ra-darkgreen hover:text-white flex flex-col items-center justify-center gap-2">
        <div className="w-[80px] h-[80px] rounded-full flex items-center  text-ra-darkgreen justify-center border border-dotted border-ra-darkgreen bg-ra-lightgreen">
          <Icon />
        </div>
        <span className="font-bold text-xl">{title}</span>
        <span className="text-lg">{total} Properties</span>
      </div>
    </div>
  );
}

export default TypeCard;
