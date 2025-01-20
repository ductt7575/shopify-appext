import IconChevronRight from '@LoyaltyPlus/assets/svg/Icon-chevron-right.svg'
import IconSales from '@LoyaltyPlus/assets/svg/Icon-sales.svg'
import IconSalesBg from '@LoyaltyPlus/assets/svg/Icon-sales-bg.svg'

import { Skeleton } from './Skeleton'

export const DetailReward = ({ title }: { title: string }) => {
  return (
    <>
      <div class="tw-flex tw-gap-[8px] tw-p-[16px]">
        <div class="back-button tw-cursor-pointer">
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
      <div className="tw-px-[12px]">
        <div className="tw-bg-[#efefef] tw-rounded-e-[4px] tw-flex">
          <div
            className="tw-w-[80px] tw-h-[94px] tw-flex tw-items-center tw-justify-center tw-bg-cover"
            style={{
              backgroundImage: `url(${IconSalesBg})`
            }}
          >
            <div className="tw-flex tw-flex-col tw-items-center tw-gap-[4px]">
              <img
                className="tw-w-[40px] tw-h-[40px]"
                src={IconSales}
                alt="icon-sales"
              />
              <p className="tw-text-center tw-text-[8px] tw-text-white">
                Amount discount
              </p>
            </div>
          </div>

          <div className="tw-flex-1 tw-flex tw-gap-[4px] tw-flex-col tw-justify-center tw-px-[12px]">
            <p className="tw-text-[14px] tw-font-[650] tw-text-[#bb254a]">
              30 points
            </p>
            <p className="tw-text-[13px] tw-font-[650] tw-text-[#212121] tw-leading-[12px]">
              Up to $300 off
            </p>
            <p className="tw-text-[12px] tw-text-[#303030]">
              Expire after 2 weeks
            </p>
          </div>
        </div>
      </div>
      <Skeleton />
    </>
  )
}
