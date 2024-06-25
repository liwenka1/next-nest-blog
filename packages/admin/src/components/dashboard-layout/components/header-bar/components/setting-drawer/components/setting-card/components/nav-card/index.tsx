import { ShodowButton, SvgIcon } from '@/components/ui'
import { themePresetsColors } from '@/config/theme'
import { useSettingStore } from '@/stores'

import { ThemeNavLatout } from '#/enum'

const NavCard = () => {
  const { themePresets, setSetting } = useSettingStore()
  const NavCardList = [
    {
      title: 'Layout',
      comp: (
        <>
          <ShodowButton
            className="h-[64px]"
            onClick={() => {
              setSetting('themeNavLatout', ThemeNavLatout.Inline)
              setSetting('collapsed', false)
            }}
          >
            <div className="flex h-full w-[32px] flex-col gap-[4px] p-[6px]">
              <div
                className="h-[10px] w-[10px] flex-shrink-0 rounded-full"
                style={{ backgroundColor: themePresetsColors[themePresets] }}
              />
              <div
                className="h-[4px] w-full flex-shrink-0 rounded opacity-50"
                style={{ backgroundColor: themePresetsColors[themePresets] }}
              />
              <div
                className="h-[4px] max-w-[14px] flex-shrink-0 rounded opacity-20"
                style={{ backgroundColor: themePresetsColors[themePresets] }}
              />
            </div>
            <div className="h-full w-full flex-1 flex-grow p-[6px]">
              <div
                className="h-full w-full rounded opacity-20"
                style={{ backgroundColor: themePresetsColors[themePresets] }}
              />
            </div>
          </ShodowButton>
          <ShodowButton
            className="h-[64px] flex-col"
            onClick={() => setSetting('themeNavLatout', ThemeNavLatout.Horizontal)}
          >
            <div className="flex h-[22px] w-full items-center gap-[4px] p-[6px]">
              <div
                className="h-[10px] w-[10px] flex-shrink-0 rounded-full"
                style={{ backgroundColor: themePresetsColors[themePresets] }}
              />
              <div
                className="h-[4px] w-[16px] flex-shrink-0 rounded opacity-50"
                style={{ backgroundColor: themePresetsColors[themePresets] }}
              />
              <div
                className="h-[4px] w-full max-w-[10px] flex-shrink-0 rounded opacity-20"
                style={{ backgroundColor: themePresetsColors[themePresets] }}
              />
            </div>
            <div className="h-full w-full flex-1 flex-grow p-[6px]">
              <div
                className="h-full w-full rounded opacity-20"
                style={{ backgroundColor: themePresetsColors[themePresets] }}
              />
            </div>
          </ShodowButton>
          <ShodowButton
            className="h-[64px]"
            onClick={() => {
              setSetting('themeNavLatout', ThemeNavLatout.Inline)
              setSetting('collapsed', true)
            }}
          >
            <div className="flex h-full flex-col gap-[4px] p-[6px]">
              <div
                className="h-[10px] w-[10px] flex-shrink-0 rounded-full"
                style={{ backgroundColor: themePresetsColors[themePresets] }}
              />
              <div
                className="h-[4px] w-full flex-shrink-0 rounded opacity-50"
                style={{ backgroundColor: themePresetsColors[themePresets] }}
              />
              <div
                className="h-[4px] w-full flex-shrink-0 rounded opacity-20"
                style={{ backgroundColor: themePresetsColors[themePresets] }}
              />
            </div>
            <div className="h-full w-full flex-1 flex-grow p-[6px]">
              <div
                className="h-full w-full rounded opacity-20"
                style={{ backgroundColor: themePresetsColors[themePresets] }}
              />
            </div>
          </ShodowButton>
        </>
      )
    },
    {
      title: 'Color',
      comp: (
        <>
          <ShodowButton className="h-[56px] gap-[12px]">
            <SvgIcon name="ic-sidebar-filled" size={24} color={themePresetsColors[themePresets]} />
            <span>integrate</span>
          </ShodowButton>
          <ShodowButton className="h-[56px] gap-[12px]">
            <SvgIcon name="ic-sidebar-outline" size={24} color={themePresetsColors[themePresets]} />
            <span>apparent</span>
          </ShodowButton>
        </>
      )
    }
  ]

  return (
    <>
      {NavCardList.map((item) => (
        <>
          <span className="text-xs font-[600] text-[#637381]">{item.title}</span>
          <div className="mt-[12px] flex gap-[12px]">{item.comp}</div>
        </>
      ))}
    </>
  )
}

export default NavCard