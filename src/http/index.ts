import { rentalToolsData, restockItemsData, workOrderStatusData } from "@/data";
import { sleep } from "@/utils";

export const getRentalTools = async () => {
  await sleep(2500);
  return rentalToolsData;
};

export const getRestockItems = async () => {
  await sleep(2500);
  return restockItemsData;
};

export const getWorkOrderStatus = async () => {
  await sleep(2500);
  return workOrderStatusData;
};
