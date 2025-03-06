"use client";
import { MapPin, Droplet } from "lucide-react";
import Clock from "./clock";
import CurrentDate from "./currentDate";
export function LocalInformationCard({ title, dateInfo, degrees, humidity }) {
  return (
    <div className="flex flex-col w-[100%] bg-blue-200 rounded-lg  text-sky-700 p-8">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center p-2 gap-2">
          <MapPin size={20} />
          <span className="text-2xl">{title}</span>
        </div>
        <div className="flex items-center gap-4 text-xl">
          <CurrentDate />
          <Clock />
        </div>
      </div>
      <span className="text-4xl p-4 ml-10">{degrees}</span>
      <div className="flex p-4">
        <Droplet size={16} />
        <span className="text-xs">{humidity}</span>
      </div>
    </div>
  );
}
