import Card from "../components/Card";
import WarningIcon from "@/components/icons/warning-icon";
import ToolsIcon from "@/components/icons/tools-icon";

export default function Home() {
  return (
    <main className="basis-full">
      <div className="mx-auto grid h-dvh max-w-7xl auto-rows-min grid-cols-3 gap-4 p-6">
        <Card span={2} title="Rental Tools" icon={<ToolsIcon/>}>
          content
        </Card>
        <Card title="Work Order Status">content</Card>
        <Card title="Missing Items" icon={<WarningIcon/>}>content</Card>
        <Card span={2} title="Tools and Equipments Available">
          content
        </Card>
        <Card span={2} title="Restock Items">
          content
        </Card>
        <Card bordered={false} title="Reception Summary">
          content
        </Card>
      </div>
    </main>
  );
}
