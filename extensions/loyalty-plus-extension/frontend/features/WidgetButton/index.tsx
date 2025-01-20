import IconButton from '@LoyaltyPlus/assets/svg/Icon-loyalty.svg'

interface IProps {
  onClick: () => void
}

export const WidgetButton = (props: IProps) => {
  const { onClick } = props

  return (
    <div
      onClick={onClick}
      className="tw-h-[56px] tw-select-none tw-bg-[#BB254A] tw-max-w-[324px] tw-w-[136px] tw-cursor-pointer tw-px-[16px] tw-py-[8px] tw-rounded-full tw-text-white tw-absolute tw-bottom-0 tw-right-0 tw-z-[999] tw-flex tw-items-center tw-gap-[4px] tw-shadow-[0_4px_46.3px_rgba(0,0,0,0.25)]"
    >
      <img src={IconButton} alt="icon-button" class="tw-w-[38px] tw-h-[38px]" />
      <span class="tw-overflow-hidden font-sans tw-font-[450] tw-text-white tw-block tw-whitespace-nowrap tw-overflow-ellipsis tw-text-[14px]">
        Rewards
      </span>
    </div>
  )
}
