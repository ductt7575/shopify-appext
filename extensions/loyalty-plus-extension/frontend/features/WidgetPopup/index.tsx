import IconEarn from "@LoyaltyPlus/assets/svg/icon-earn.svg";
import IconRedeem from "@LoyaltyPlus/assets/svg/icon-redeem.svg";
import IconReferral from "@LoyaltyPlus/assets/svg/icon-referral.svg";
import IconPointHistory from "@LoyaltyPlus/assets/svg/icon-point-history.svg";
import IconCancel from "@LoyaltyPlus/assets/svg/Icon-cancel.svg";
import { useState } from "preact/hooks";
import { FEATURE, TFeature } from "@LoyaltyPlus/constant";
import { Earning } from "@LoyaltyPlus/features/Earning";
import { Reward } from "@LoyaltyPlus/features/Reward";
import { DefaultBody } from "./components/DefaultBody";
import { Referral } from "@LoyaltyPlus/features/Referral";
import { MemberTier } from "@LoyaltyPlus/features/MemberTier";

interface IProps {
  onClose: () => void;
  isClosing: boolean;
}

export const WidgetPopup = ({ onClose, isClosing }: IProps) => {
  const [activeComponent, setActiveComponent] = useState<TFeature | null>(null);
  const [title, setTitle] = useState<string>("");
  const [isFirstRender, setIsFirstRender] = useState(true);

  const listFeatures = [
    { name: "Earn points", icon: IconEarn, type: FEATURE.EARN_POINT },
    { name: "Redeem points", icon: IconRedeem, type: FEATURE.REDEEM_POINT },
    {
      name: "Referral program",
      icon: IconReferral,
      type: FEATURE.REFERRAL_PROGRAM,
    },
    { name: "Member tier", icon: IconPointHistory, type: FEATURE.MEMBER_TIER },
  ];

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case FEATURE.EARN_POINT:
        return <Earning title={title} onFeatureClick={setActiveComponent} />;
      case FEATURE.REDEEM_POINT:
        return <Reward title={title} onFeatureClick={setActiveComponent} />;
      case FEATURE.REFERRAL_PROGRAM:
        return <Referral title={title} onFeatureClick={setActiveComponent} />;
      case FEATURE.MEMBER_TIER:
        return <MemberTier title={title} onFeatureClick={setActiveComponent} />;
      case null:
      default:
        return (
          <DefaultBody
            listFeatures={listFeatures}
            onFeatureClick={(feature) => {
              setActiveComponent(feature);
              setIsFirstRender(false);
            }}
            setTitle={setTitle}
            isFirstRender={isFirstRender}
          />
        );
    }
  };

  return (
    <div
      className={`mb:tw-w-[324px] tw-bg-[#BB254A] h-sm:tw-w-full tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center mb:tw-rounded-[24px] tw-absolute h-sm:tw-h-screen h-sm:tw-bottom-[-72px] h-sm:tw-rounded-none h-sm:tw-right-[-22px] mb:tw-bottom-[64px] mb:tw-right-0 tw-bottom-[-72px] tw-right-[-22px] tw-z-[1000] mb:tw-h-[570px] tw-h-screen tw-transform-none tw-shadow-[0_4px_46.3px_rgba(0,0,0,0.25)] tw-overflow-hidden ${
        isClosing ? "tw-animate-popup-close" : "tw-animate-popup-open"
      }`}
    >
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full tw-h-[102px] tw-px-[24px] tw-py-[18px]">
        <p className="tw-text-[20px] tw-font-[650] tw-leading-[24px] tw-tracking-[-0.2px] tw-text-white">
          Loyalty program
        </p>
      </div>
      <div className="tw-bg-white tw-rounded-tl-[24px] tw-rounded-tr-[24px] tw-flex-1 tw-w-full">
        {renderActiveComponent()}
      </div>

      <div className="tw-flex tw-w-full tw-px-[4px] tw-py-[16px] tw-justify-center tw-items-center tw-gap-[4px] tw-bg-[#F3F3F3] tw-border-[#F3F3F3]">
        <p className="tw-m-0 tw-text-[12px] tw-leading-[20px] tw-text-[#616161]">
          We reward with
        </p>
        <a
          target="_blank"
          href="https://apps.shopify.com/oneloyalty"
          className="tw-text-[12px] tw-font-[650] tw-leading-[20px] tw-text-[#BB254A] tw-cursor-pointer tw-no-underline"
        >
          LoyaltyPlus
        </a>
      </div>
      <div
        className="tw-absolute tw-top-[18px] tw-right-[18px] tw-cursor-pointer tw-text-white tw-w-[18px] tw-h-[20px] hover:tw-w-[18px] hover:tw-h-[20px] hover:tw-scale-110 tw-transition-all"
        onClick={onClose}
      >
        <img src={IconCancel} alt="IconCancel" className="w-full h-full" />
      </div>
    </div>
  );
};
