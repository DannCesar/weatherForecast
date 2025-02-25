"use client";
import { Input } from "antd";
import { Bell, User } from "lucide-react";
import { LocalInformationCard } from "./localInformationCard";

export function Content({ contentProps }) {
  const { Search } = Input;
  const locationArray = contentProps.map((item) => item.location);
  const locationName = locationArray.map((item) => item.name);
  const currentTempInfo = contentProps.map((item) => item.current);
  const degreesInfo = currentTempInfo.map((item) => item.temp_c);
  const humidityInfo = currentTempInfo.map((item) => item.humidity);

  return (
    <div className="flex flex-col w-[60%]">
      <div className="flex justify-between  cursor-pointer">
        <div className="flex  p-6 w-[60%]">
          <Search placeholder="Buscar" />
        </div>
        <div className="flex p-6  gap-8">
          <div className="flex p-2 ">
            <Bell />
          </div>
          <div className="flex items-center justify-center bg-blue-300 h-10 w-10 rounded-3xl">
            <User />
          </div>
        </div>
      </div>
      <div className="flex p-10">
        <LocalInformationCard
          title={locationName}
          degrees={`${degreesInfo}º`}
          humidity={`${humidityInfo}%`}
        />
      </div>
    </div>
  );
}
