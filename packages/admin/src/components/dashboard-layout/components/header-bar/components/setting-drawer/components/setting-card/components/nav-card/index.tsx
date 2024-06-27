import { ShodowButton, SvgIcon } from '@/components/ui'
import { themePresetsColors } from '@/config/theme'
import { useSettingStore } from '@/stores'

import { ThemeNavLatout, ThemeNavColor } from '#/enum'

const NavCard = () => {
  const { themePresets, themeNavLatout, collapsed, themeNavColor, setSetting } = useSettingStore()
  const themeNavLatoutStyle = (latout: ThemeNavLatout, isCollapsed?: boolean) => {
    if (
      (latout === ThemeNavLatout.Horizontal && latout === themeNavLatout) ||
      (latout === themeNavLatout && isCollapsed === collapsed)
    ) {
      return { backgroundColor: themePresetsColors[themePresets] }
    } else {
      return { backgroundColor: '#919EAB' }
    }
  }
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
                style={themeNavLatoutStyle(ThemeNavLatout.Inline, false)}
              />
              <div
                className="h-[4px] w-full flex-shrink-0 rounded opacity-50"
                style={themeNavLatoutStyle(ThemeNavLatout.Inline, false)}
              />
              <div
                className="h-[4px] max-w-[14px] flex-shrink-0 rounded opacity-20"
                style={themeNavLatoutStyle(ThemeNavLatout.Inline, false)}
              />
            </div>
            <div className="h-full w-full flex-1 flex-grow p-[6px]">
              <div
                className="h-full w-full rounded opacity-20"
                style={themeNavLatoutStyle(ThemeNavLatout.Inline, false)}
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
                style={themeNavLatoutStyle(ThemeNavLatout.Horizontal)}
              />
              <div
                className="h-[4px] w-[16px] flex-shrink-0 rounded opacity-50"
                style={themeNavLatoutStyle(ThemeNavLatout.Horizontal)}
              />
              <div
                className="h-[4px] w-full max-w-[10px] flex-shrink-0 rounded opacity-20"
                style={themeNavLatoutStyle(ThemeNavLatout.Horizontal)}
              />
            </div>
            <div className="h-full w-full flex-1 flex-grow p-[6px]">
              <div
                className="h-full w-full rounded opacity-20"
                style={themeNavLatoutStyle(ThemeNavLatout.Horizontal)}
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
                style={themeNavLatoutStyle(ThemeNavLatout.Inline, true)}
              />
              <div
                className="h-[4px] w-full flex-shrink-0 rounded opacity-50"
                style={themeNavLatoutStyle(ThemeNavLatout.Inline, true)}
              />
              <div
                className="h-[4px] w-full flex-shrink-0 rounded opacity-20"
                style={themeNavLatoutStyle(ThemeNavLatout.Inline, true)}
              />
            </div>
            <div className="h-full w-full flex-1 flex-grow p-[6px]">
              <div
                className="h-full w-full rounded opacity-20"
                style={themeNavLatoutStyle(ThemeNavLatout.Inline, true)}
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
          <ShodowButton
            className="h-[56px] gap-[12px]"
            shadow={themeNavColor === ThemeNavColor.Integrate}
            onClick={() => {
              setSetting('themeNavColor', ThemeNavColor.Integrate)
            }}
          >
            <SvgIcon
              name="ic-sidebar-filled"
              size={24}
              color={themeNavColor === ThemeNavColor.Integrate ? themePresetsColors[themePresets] : ''}
            />
            <span>Integrate</span>
          </ShodowButton>
          <ShodowButton
            className="h-[56px] gap-[12px]"
            shadow={themeNavColor === ThemeNavColor.Apparent}
            onClick={() => {
              setSetting('themeNavColor', ThemeNavColor.Apparent)
            }}
          >
            <SvgIcon
              name="ic-sidebar-outline"
              size={24}
              color={themeNavColor === ThemeNavColor.Apparent ? themePresetsColors[themePresets] : ''}
            />
            <span>Apparent</span>
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
