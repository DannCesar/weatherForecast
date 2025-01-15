import { Sidebar } from "../components/sidebar";
import { Content } from "../components/content";
import { SidebarForecast } from "../components/sidebarForecast";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Content />
      <SidebarForecast />
    </div>
  );
}
