import { WorkStatus } from "./work-status.model";

export interface IRentalTool {
  order: number;
  toolRef: number;
  teamMember: string;
  status: WorkStatus;
  duration: string;
}
