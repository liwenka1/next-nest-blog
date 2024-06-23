import { ModeCard, NavCard, PresetsCard } from './components'

const SettingCard = () => {
  const CardList = [
    {
      title: 'Nav',
      comp: <NavCard />
    },
    {
      title: 'Presets',
      comp: <PresetsCard />
    }
  ]

  return (
    <div className="flex flex-col gap-[48px]">
      <ModeCard />
      {CardList.map((item) => (
        <div className="relative flex flex-col gap-[20px] rounded-[16px] border border-solid px-[16px] pb-[16px] pt-[32px]">
          <span className="absolute top-[-12px] rounded-[176px] bg-black px-[10px] text-white">{item.title}</span>
          {item.comp}
        </div>
      ))}
    </div>
  )
}

export default SettingCard
