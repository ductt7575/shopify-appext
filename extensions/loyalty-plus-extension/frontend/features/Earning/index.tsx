import { HeaderFeature } from "@LoyaltyPlus/features/WidgetPopup/components/WidgetHeader";
import { TFeature } from "@LoyaltyPlus/constant";

export const Earning = ({
  title,
  onFeatureClick,
}: {
  title: string;
  onFeatureClick: (feature: TFeature | null) => void;
}) => {
  const listToEarning = [
    {
      label: "Place an order",
      point: "1 point per 1₫ spent",
      btn: "Buy now",
      url: "#",
    },
    {
      label: "Complete profile",
      point: "100 points",
      btn: "Join now",
      url: "#",
    },
    {
      label: "Create account",
      point: "2,002 points",
      btn: "Update",
      url: "#",
    },
  ];

  return (
    <div className="tw-animate-slide-left">
      <HeaderFeature title={title} onFeatureClick={onFeatureClick} />

      <div className="tw-flex tw-flex-col tw-gap-[12px] tw-items-center tw-px-[16px]">
        {listToEarning &&
          listToEarning.map((item) => {
            return (
              <div
                className="tw-w-full tw-flex tw-px-[16px] tw-py-[12px] tw-justify-between tw-items-center tw-gap-[8px] tw-bg-[#f5f5f5] tw-rounded-[8px]"
                key={item.label}
              >
                <div className="tw-flex tw-flex-col">
                  <div className="tw-text-[13px] tw-font-[650] tw-text-[#303030] tw-leading-normal">
                    {item.label}
                  </div>
                  <div className="tw-text-[14px] tw-font-[650] tw-text-[#bb254a] tw-leading-normal">
                    {item.point}
                  </div>
                </div>
                <a
                  href={item.url}
                  className="tw-min-w-[100px] tw-font-[500] tw-text-[13px] tw-border-[1px] tw-border-[#bb254a] tw-text-[#bb254a] tw-text-center tw-p-[7px] tw-rounded-[8px]"
                >
                  {item.btn}
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};
