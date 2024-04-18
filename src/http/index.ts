import { rentalToolsData } from "@/data";
import { sleep } from "@/utils";

export const getRentalTools = async () => {
  await sleep(2500);
  return rentalToolsData;
};