import Card from "../components/elements/Card";
import WarningIcon from "@/components/icons/warning-icon";
import ToolsIcon from "@/components/icons/tools-icon";
import RentalTools from "@/components/modules/rental-tools";
import MissingItems from "@/components/modules/missing-items";
import ToolsAndEquipment from "@/components/modules/tools-and-equipment-availabilty";
import RestockItems from "@/components/modules/restock-items";
import WorkOrderStatus from "@/components/modules/work-order-status";

export default function Home() {
  return (
    <main className="basis-full">
      <div className="bg-primary/10 mx-auto grid h-dvh max-w-7xl auto-rows-min grid-cols-3 gap-4 p-6">
        <Card span={2} title="Rental Tools" icon={<ToolsIcon />}>
          <RentalTools />
        </Card>

        <Card title="Work Order Status">
          <WorkOrderStatus />
        </Card>

        <Card title="Missing Items" icon={<WarningIcon />}>
          <MissingItems />
        </Card>

        <Card span={2} title="Tools and Equipments Available">
          <ToolsAndEquipment />
        </Card>

        <Card span={2} title="Restock Items">
          <RestockItems />
        </Card>

        <Card bordered={false} title="Reception Summary">
          <RentalTools />
        </Card>
      </div>
    </main>
  );
}
