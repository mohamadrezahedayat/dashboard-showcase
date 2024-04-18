import { IRestockItems } from "@/models/restock-items.model";

const restockItemsData: IRestockItems[] = [
  {
    toolRef: 6465,
    toolOrEquipment: "Screws",
    status: "Low",
  },
  {
    toolRef: 5665,
    toolOrEquipment: "Wires (electrical)",
    status: "None",
  },
  {
    toolRef: 1755,
    toolOrEquipment: "Bolts",
    status: "None",
  },
];

export default restockItemsData;
