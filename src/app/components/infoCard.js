export function InfoCard({ titleCard, todayInfo, numberInfo, iconInfo: Icon }) {
  return (
    <div className="flex justify-between bg-slate-200 rounded-lg p-8 items-center gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-xl">{titleCard}</span>
        <span className="text-sm text-slate-500">{todayInfo}</span>
        <span className="text-xl">{numberInfo}</span>
      </div>
      <div>{Icon ? <Icon size={40} /> : <p>Ícone não encontrado</p>}</div>
    </div>
  );
}
