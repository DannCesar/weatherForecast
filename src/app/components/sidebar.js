import {
  LayoutDashboard,
  Cloud,
  MapIcon,
  LocateIcon,
  CalendarDays,
  Settings,
  LogOut,
} from "lucide-react";

export function Sidebar() {
  return (
    <div className="flex-col p-6 w-[220px] border-r-2 border-gray cursor-pointer">
      <div className="flex gap-2 mb-32">
        <Cloud />
        <h1>Weather Forescast</h1>
      </div>

      <div className="flex gap-4 mt-10 text-sm">
        <LayoutDashboard size={20} />
        <span>Dashboard</span>
      </div>
      <div className="flex gap-4 mt-10 text-sm">
        <MapIcon size={20} />
        <span>Map</span>
      </div>
      <div className="flex gap-4 mt-10 text-sm">
        <LocateIcon size={20} />
        <span>Saved Location</span>
      </div>
      <div className="flex gap-4 mt-10 text-sm">
        <CalendarDays size={20} />
        <span>Calendar</span>
      </div>
      <div className="flex gap-4 mt-10 text-sm">
        <Settings size={20} />
        <span>Settings</span>
      </div>
      <div className="flex gap-4 mt-[440px] text-sm">
        <LogOut size={20} />
        <span>Log Out</span>
      </div>
    </div>
  );
}