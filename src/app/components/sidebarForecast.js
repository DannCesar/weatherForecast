export function SidebarForecast({ contentProps }) {
  return (
    <div className="flex-col p-6 w-[220px] border-l-2 border-gray cursor-pointer">
      <span>{contentProps?.map((item) => item.name)}</span>
    </div>
  );
}
