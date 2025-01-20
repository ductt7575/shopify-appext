import IconChevronRight from '@LoyaltyPlus/assets/svg/Icon-chevron-right.svg'
import { TFeature } from '@LoyaltyPlus/constant'
export const HeaderFeature = ({
  title,
  onFeatureClick
}: {
  title: string
  onFeatureClick: (feature: TFeature | null) => void
}) => {
  return (
    <div class="tw-flex tw-gap-[8px] tw-p-[16px]">
      <div
        class="back-button tw-cursor-pointer"
        onClick={() => onFeatureClick(null)}
      >
        <img
          class="tw-rotate-180"
          alt="icon-chevron-right"
          src={IconChevronRight}
        />
      </div>
      <p className="tw-font-[600] tw-text-[16px] tw-leading-[20px] tw-text-[#303030]">
        {title}
      </p>
    </div>
  )
}
