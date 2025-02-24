import { MapPin } from "lucide-react";
export function LocalInformationCard({ title, degrees }) {
  return (
    <div className="flex flex-col w-[100%] bg-blue-200 rounded-lg  text-sky-700">
      <div className="flex items-center p-4 gap-2">
        <MapPin />
        <span className="text-2xl">{title}</span>
      </div>
      <span className="text-5xl p-4 ml-10">{degrees}</span>
    </div>
  );
}
