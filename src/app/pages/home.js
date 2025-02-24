"use client";
import { Sidebar } from "../components/sidebar";
import { Content } from "../components/content";
import { SidebarForecast } from "../components/sidebarForecast";
import { useEffect, useState } from "react";
import { consumptionApiForecast } from "@/api/api";

export default function Home() {
  const [infoWeather, setInfoWeather] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await consumptionApiForecast();
        setInfoWeather([data]);
      } catch (error) {
        alert("Erro ao carregar dados");
      }
    }
    fetchData();
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <Content contentProps={infoWeather} />
      <SidebarForecast contentProps={infoWeather} />
    </div>
  );
}
