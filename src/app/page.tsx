import Card from "@/components/elements/Card";
import ToolsIcon from "@/components/icons/tools-icon";
import WarningIcon from "@/components/icons/warning-icon";
import RentalTools from "@/components/modules/rental-tools";
import MissingItems from "@/components/modules/missing-items";
import RestockItems from "@/components/modules/restock-items";
import WorkOrderStatus from "@/components/modules/work-order-status";
import ReceptionSummary from "@/components/modules/reception-summary";
import ToolsAndEquipment from "@/components/modules/tools-and-equipment-availabilty";

export default function Home() {
  return (
    <main className="basis-full">
      <div className="mx-auto grid h-dvh max-w-7xl auto-rows-min grid-cols-5 gap-4 p-6">
        <Card span={3} title="Rental Tools" icon={<ToolsIcon />}>
          <RentalTools />
        </Card>

        <Card title="Work Order Status">
          <WorkOrderStatus />
        </Card>

        <Card title="Missing Items" icon={<WarningIcon />}>
          <MissingItems />
        </Card>

        <Card span={3} title="Tools and Equipments Available">
          <ToolsAndEquipment />
        </Card>

        <Card span={3} title="Restock Items">
          <RestockItems />
        </Card>

        <Card bordered={false} title="Reception Summary">
          <ReceptionSummary />
        </Card>
      </div>
    </main>
  );
}
