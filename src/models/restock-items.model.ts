import { StockStatus } from "./stock-status.model";

export interface IRestockItems {
  toolRef: number;
  toolOrEquipment: string;
  status: StockStatus;
}
