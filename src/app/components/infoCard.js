export function InfoCard({ titleCard, todayInfo, numberInfo }) {
  return (
    <div className="flex bg-slate-200 rounded-lg p-8">
      <div className="flex flex-col gap-2">
        <span className="text-xl ">{titleCard}</span>
        <span className="text-sm text-slate-500">{todayInfo}</span>
        <span className="text-xl">{numberInfo}</span>
      </div>
      <div className="flex"></div>
    </div>
  );
}
