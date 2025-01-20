import { TFeature } from '@LoyaltyPlus/constant'
import { HeaderFeature } from '@LoyaltyPlus/features/WidgetPopup/components/WidgetHeader'

export const Referral = ({
  title,
  onFeatureClick
}: {
  title: string
  onFeatureClick: (feature: TFeature | null) => void
}) => {
  const POINTS = 500
  return (
    <div className="tw-animate-slide-left">
      <HeaderFeature title={title} onFeatureClick={onFeatureClick} />
      <div className="tw-px-[16px]">
        <p className="tw-text-[13px] tw-leading-[20px] tw-text-[#303030]">
          For each friend who uses your referral link to sign up and place an
          order:
        </p>
        <ul className="tw-list-disc tw-pt-[12px] tw-pl-[16px] tw-pb-[20px]">
          <li className="tw-text-[13px] tw-leading-[20px] tw-text-[#303030]">
            You will get {POINTS} points
          </li>
          <li className="tw-text-[13px] tw-leading-[20px] tw-text-[#303030]">
            Your friend will get 50 points
          </li>
        </ul>
        <div className="tw-rounded-[12px] tw-border-[1px] tw-border-[#e3e3e3] tw-bg-[#f7f7f7] tw-px-[12px] tw-pt-[12px] tw-pb-[16px]">
          <p className="tw-text-[12px] tw-text-[#616161] tw-leading-[20px] tw-mb-[8px]">
            Sign in to the referral link and start earning rewards!
          </p>
          <button className="tw-w-full tw-bg-[#bb254a] tw-text-[14px] tw-text-white tw-p-[5px] tw-rounded-full">
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
}
