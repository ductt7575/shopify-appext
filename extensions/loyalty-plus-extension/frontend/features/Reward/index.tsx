import { TFeature } from '@LoyaltyPlus/constant'
import { HeaderFeature } from '@LoyaltyPlus/features/WidgetPopup/components/WidgetHeader'

export const Reward = ({
  title,
  onFeatureClick
}: {
  title: string
  onFeatureClick: (feature: TFeature | null) => void
}) => {
  const listToEarning = [
    {
      label: 'Up to $300 off',
      description: 'Expire after 2 weeks',
      point: '30 points',
      btn: 'Redeem',
      url: '#'
    },
    {
      label: 'Up to $300 off',
      description: 'Expire after 2 weeks',
      point: '30 points',
      btn: 'Redeem',
      url: '#'
    },
    {
      label: 'Up to $300 off',
      description: 'Expire after 2 weeks',
      point: '30 points',
      btn: 'Redeem',
      url: '#'
    }
  ]

  return (
    <div className="tw-animate-slide-left">
      <HeaderFeature title={title} onFeatureClick={onFeatureClick} />

      <div className="tw-flex tw-flex-col tw-gap-[12px] tw-items-center tw-px-[16px]">
        {listToEarning &&
          listToEarning.map((item, index) => {
            return (
              <div
                className="tw-w-full tw-flex tw-px-[16px] tw-py-[12px] tw-justify-between tw-items-center tw-gap-[8px] tw-bg-[#f5f5f5] tw-rounded-[8px]"
                key={`${item.label}-${index}`}
              >
                <div className="tw-flex tw-flex-col">
                  <div className="tw-text-[13px] tw-font-[650] tw-text-[#303030] tw-leading-[16px]">
                    {item.label}
                  </div>
                  <div className="tw-text-[12px] tw-font-[450] tw-text-[#808089] tw-leading-[20px]">
                    {item.description}
                  </div>
                  <div className="tw-text-[14px] tw-pt-[8px] tw-font-[650] tw-text-[#bb254a] tw-leading-normal">
                    {item.point}
                  </div>
                </div>
                <a
                  href={item.url}
                  className="tw-font-[500] tw-text-[13px] tw-border-[1px] tw-border-[#bb254a] tw-text-[#bb254a] tw-text-center tw-px-[8px] tw-py-[6px] tw-rounded-[8px]"
                >
                  {item.btn}
                </a>
              </div>
            )
          })}
      </div>
    </div>
  )
}
