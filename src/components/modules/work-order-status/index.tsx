import { getWorkOrderStatus } from "@/http";
import WorkOrderChart from "./chart";

const WorkOrderStatus = async () => {
  const data = await getWorkOrderStatus();
  return <WorkOrderChart data={data} />;
};

export default WorkOrderStatus;
