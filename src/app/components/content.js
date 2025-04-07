"use client";
import { Dropdown, Input, Space } from "antd";
import {
  Bell,
  User,
  CircleGauge,
  WindArrowDown,
  SunriseIcon,
} from "lucide-react";
import { LocalInformationCard } from "./localInformationCard";
import { InfoCard } from "./infoCard";
import { DownOutlined } from "@ant-design/icons";
import SearchBarAndProfile from "./searchBarAndProfile";

export default function Content({ contentProps }) {

  const locationArray = contentProps.map((item) => item.location);
  const locationName = locationArray.map((item) => item.name);
  const currentTempInfo = contentProps.map((item) => item.current);
  const degreesInfo = currentTempInfo.map((item) => item.temp_c);
  const humidityInfo = currentTempInfo.map((item) => item.humidity);
  const windInfo = currentTempInfo.map((item) => item.wind_kph);
  const uvInfo = currentTempInfo.map((item) => item.uv);
  const pressureMb = currentTempInfo.map((item) => item.pressure_mb);
  const condition = currentTempInfo.map((item) => item.condition.text);
  console.log(contentProps, "console");
  return (
    <div className="flex flex-col w-[60%]">
      <SearchBarAndProfile/>
    
      <div className="flex p-10">
        <LocalInformationCard
          title={locationName}
          degrees={`${degreesInfo}º`}
          humidity={`${humidityInfo}%`}
          wind={`${windInfo}Km/h`}
        />
      </div>
      <div className="grid grid-cols-2 p-10 gap-8">
        <div>
          <InfoCard
            titleCard={"Vento"}
            todayInfo={"Velocidade do vento de hoje"}
            numberInfo={`${windInfo}Km/h`}
            iconInfo={CircleGauge}
          />
        </div>
        <div>
          <InfoCard
            titleCard={"Clima"}
            todayInfo={"Clima hoje"}
            numberInfo={condition}
          />
        </div>
        <div>
          <InfoCard
            titleCard={"Pressão"}
            todayInfo={"Pressão atmosférica hoje"}
            numberInfo={`${pressureMb} Mb/h`}
            iconInfo={WindArrowDown}
          />
        </div>
        <div>
          <InfoCard
            titleCard={"Raios UV"}
            todayInfo={"Raios UV hoje"}
            numberInfo={uvInfo}
            iconInfo={SunriseIcon}
          />
        </div>
      </div>
    </div>
  );
}
