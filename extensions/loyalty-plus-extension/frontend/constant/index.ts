export const FEATURE = {
  EARN_POINT: 'EARN_POINT',
  REDEEM_POINT: 'REDEEM_POINT',
  REFERRAL_PROGRAM: 'REFERRAL_PROGRAM',
  MEMBER_TIER: 'MEMBER_TIER'
} as const

export type TFeature = (typeof FEATURE)[keyof typeof FEATURE]
