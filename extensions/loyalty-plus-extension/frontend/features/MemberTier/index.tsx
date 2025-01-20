import { HeaderFeature } from "@LoyaltyPlus/features/WidgetPopup/components/WidgetHeader";
import { TFeature } from "@LoyaltyPlus/constant";
import { useState } from "react";

export const MemberTier = ({
  title,
  onFeatureClick,
}: {
  title: string;
  onFeatureClick: (feature: TFeature | null) => void;
}) => {
  const [activeTier, setActiveTier] = useState<string | null>("Bronze");
  const tiers = [
    {
      name: "Bronze",
      description:
        "Welcome to the starting tier! With the Bronze membership, enjoy essential perks to kickstart your shopping journey. Earn points effortlessly and get a 5% discount on every purchase!",
    },
    {
      name: "Silver",
      description:
        "The Gold tier offers premium privileges! Collect 5,000 points to enjoy a 15% discount, free shipping, and special gifts curated just for our valued members.",
    },
    {
      name: "Gold",
      description:
        "Step into a world of greater rewards with the Silver tier! Accumulate 1,000 points to upgrade and unlock a 10% discount along with exclusive benefits just for you.",
    },
    {
      name: "Platinum",
      description:
        "Reserved for our most loyal customers, the Platinum tier delivers ultimate perks! With 10,000 points, unlock a 20% discount, nationwide free shipping, and VIP gifts tailored exclusively for you. ",
    },
  ];
  return (
    <div className="tw-animate-slide-left">
      <HeaderFeature title={title} onFeatureClick={onFeatureClick} />
      <div className="tw-px-[16px] tw-mb-[12px]">
        <div className="tw-flex tw-flex-col tw-items-center tw-text-center tw-gap-y-[14px] tw-px-[24px] tw-py-[32px] tw-border-[1px] tw-border-[#e3e3e3] tw-rounded-[12px]">
          <p className="tw-text-[14px] tw-leading-[16px] tw-font-[450] tw-text-[#303030]">
            Please sign in to view your current member tier.
          </p>
          <a
            href="#"
            className="tw-text-[#bb254a] tw-border-[1px] tw-border-[#bb254a] tw-leading-none tw-p-[8px] tw-rounded-[8px] tw-w-[100px] tw-font-[14px]"
          >
            Sign in
          </a>
        </div>
      </div>
      <div>
        <ul className="tw-flex tw-justify-center tw-list-none tw-py-[8px] tw-mx-[8px] tw-overflow-x-auto tw-relative tw-scrollbar-none tw-scrollbar">
          {tiers.map((tier) => (
            <li
              key={tier.name}
              className={`tw-cursor-pointer tw-transition-all tw-duration-300 tw-text-center ${
                activeTier === tier.name
                  ? "tw-text-[#bb254a]"
                  : "tw-text-[#303030]"
              }`}
              onClick={() => setActiveTier(tier.name)}
              style={{
                width: `${100 / tiers.length}%`,
              }}
            >
              {tier.name}
            </li>
          ))}
          <span
            className="tw-absolute tw-bottom-0 tw-left-0 tw-h-[2px] tw-bg-[#bb254a] tw-transition-transform tw-duration-300"
            style={{
              width: `${100 / tiers.length}%`,
              transform: `translateX(${tiers.findIndex((t) => t.name === activeTier) * 100}%)`,
            }}
          />
        </ul>
        <div className="tw-mt-[12px]">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`tw-px-[16px] ${
                activeTier === tier.name ? "tw-block" : "tw-hidden"
              }`}
            >
              {tier.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
