export const Role = {
  SEEKER: "SEEKER",
  SCHOLAR: "SCHOLAR",
  ADMIN: "ADMIN",
} as const;

export type Role = (typeof Role)[keyof typeof Role];

export const DoorCategory = {
  METAPHYSICS: "METAPHYSICS",
  MYSTICISM: "MYSTICISM",
  FAMILY: "FAMILY",
  ARTS: "ARTS",
  SOCIETY: "SOCIETY",
  SCIENCE_RELIGION: "SCIENCE_RELIGION",
  DEVOTIONAL: "DEVOTIONAL",
  SCHOLARS: "SCHOLARS",
  SEEKERS_PATH: "SEEKERS_PATH",
} as const;

export type DoorCategory = (typeof DoorCategory)[keyof typeof DoorCategory];
