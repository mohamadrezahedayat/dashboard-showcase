import Image from "next/image";
import React from "react";
import DonutChart from "./donut";

const ToolsAndEquipment = () => {
  return (
    <div className="flex h-full flex-col justify-center gap-4">
      <div className="flex h-[60px] items-center justify-between ">
        <Image
          alt="Rental Items"
          src="/rental-items.png"
          width={68}
          height={60}
        />
        <h2>Rental Items</h2>
        <div className="h-[90px] w-[90px]">
          <DonutChart count={50} total={100} />
        </div>
      </div>
      <div className="flex h-[60px] items-center justify-between">
        <Image
          alt="Spare parts"
          src="/spare-parts.png"
          width={68}
          height={60}
        />
        <h2>Spare parts</h2>
        <div className="h-[90px] w-[90px]">
          <DonutChart count={75} total={100} />
        </div>
      </div>
    </div>
  );
};

export default ToolsAndEquipment;
