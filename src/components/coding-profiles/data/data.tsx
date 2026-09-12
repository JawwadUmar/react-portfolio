import { SiLeetcode, SiGeeksforgeeks, SiCodeforces } from "react-icons/si";
import { IconType } from "react-icons";

export interface CodingProfile {
  id: string | number;
  name: string;
  logo: IconType;
  username: string;
  profileUrl: string;
  metadata?: {
    label: string;
    value: string;
  }[];
}

export const codingProfilesData: CodingProfile[] = [
  {
    id: 1,
    name: "LeetCode",
    logo: SiLeetcode,
    username: "Jae_", // To be updated by user
    profileUrl: "https://leetcode.com/u/Jae_/",
    metadata: [
      { label: "Problems Solved", value: "1200+" },
      { label: "Contest Rating", value: "1761" },
      { label: "Longest Streak", value: "900+ days" },
    ],
  },
  {
    id: 2,
    name: "GeeksforGeeks",
    logo: SiGeeksforgeeks,
    username: "fahadmallick99", // To be updated by user
    profileUrl: "https://www.geeksforgeeks.org/profile/fahadmallick99",
    metadata: [
      { label: "Problems Solved", value: "700+" },
      { label: "Coding Score", value: "2400+" },
      { label: "Longest Streak", value: "517 days" },
    ],
  },
  {
    id: 3,
    name: "Codeforces",
    logo: SiCodeforces,
    username: "Jae_", // To be updated by user
    profileUrl: "https://codeforces.com/profile/jae_",
    metadata: [
      { label: "Problems Solved", value: "450+" },
      { label: "Rating", value: "1482" },
      { label: "Title", value: "Specialist" },
      
    ],
  },
];

