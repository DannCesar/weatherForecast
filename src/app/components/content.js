"use client";
import { Input } from "antd";
import { Bell, User } from "lucide-react";

export function Content({contentProps}) {
  const { Search } = Input;
  return (
    <div className="flex justify-between w-[60%] cursor-pointer">
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
  );
}
