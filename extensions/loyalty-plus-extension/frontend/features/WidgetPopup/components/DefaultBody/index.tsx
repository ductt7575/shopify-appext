import IconChevronRight from "@LoyaltyPlus/assets/svg/Icon-chevron-right.svg";
import { TFeature } from "@LoyaltyPlus/constant";
interface IProps {
  listFeatures: { name: string; icon: string; type: TFeature }[];
  onFeatureClick: (feature: TFeature) => void;
  setTitle: (title: string) => void;
  isFirstRender: boolean;
}

export const DefaultBody = ({
  listFeatures,
  onFeatureClick,
  setTitle,
  isFirstRender,
}: IProps) => (
  <div
    className={`${
      isFirstRender ? "" : "tw-animate-slide-right"
    } tw-px-[20px] tw-py-[24px] tw-flex tw-flex-col tw-gap-[20px] tw-flex-1`}
  >
    <div className="tw-request-sign-in tw-flex tw-flex-col tw-items-center tw-gap-[12px]">
      <p className="tw-m-0 tw-text-[13px] tw-font-[450] tw-leading-[20px] tw-text-[#BB254A] tw-text-center">
        Join our program to get attractive rewards!
      </p>
      <div className="tw-group-sign-in-btn tw-flex tw-gap-[12px]">
        <a
          href="#"
          className="tw-flex tw-px-[16px] tw-py-[4px] tw-justify-center tw-items-center tw-border-0 tw-bg-[#BB254A] tw-text-white tw-rounded-[999px] tw-no-underline"
        >
          JOIN
        </a>
        <a
          href="#"
          className="tw-flex tw-px-[16px] tw-py-[4px] tw-justify-center tw-items-center tw-border tw-border-[#BB254A] tw-bg-transparent tw-text-[#BB254A] tw-rounded-[36px] tw-no-underline"
        >
          SIGN IN
        </a>
      </div>
    </div>

    <div className="tw-flex tw-flex-col tw-gap-[8px] tw-items-center">
      {listFeatures.map((feature, index) => (
        <div
          key={index}
          onClick={() => {
            onFeatureClick(feature.type);
            setTitle(feature.name);
          }}
          className="tw-flex tw-justify-between tw-items-center tw-w-full tw-px-[12px] tw-py-[12px] tw-border tw-border-[#cccccc] tw-rounded-[8px] tw-cursor-pointer"
        >
          <div className="tw-flex tw-gap-[4px] tw-items-center">
            <img src={feature.icon} alt={feature.name} />
            <span className="tw-text-[14px] tw-leading-[20px] tw-font-[550] tw-capitalize">
              {feature.name}
            </span>
          </div>
          <img src={IconChevronRight} alt="IconChevronRight" />
        </div>
      ))}
      <a
        href="#"
        className="tw-pt-[16px] tw-text-[13px] tw-font-[450] tw-leading-[20px] tw-inline-flex tw-items-center tw-justify-center tw-gap-[4px] tw-no-underline tw-text-[#BB254A]"
      >
        <span>Go to Loyalty page</span> -&gt;
      </a>
    </div>
  </div>
);
