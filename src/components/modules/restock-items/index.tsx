import Button from "@/components/elements/Button";
import Table from "@/components/elements/Table";
import Cheap from "@/components/elements/Cheap";
import Flag from "@/components/elements/Flag";
import { getRestockItems } from "@/http";

const columns = ["Tool ref.", "Tool/Equipment", "Stock Status", ""];
const RestockItems = async () => {
  const data = await getRestockItems();
  return (
    <Table columns={columns} className="[&_th:nth-child(2)]:text-center">
      {data.map((item) => (
        <tr
          key={item.toolRef}
          className="h-11 border-b-[1px] border-neutral-200 last-of-type:border-b-0"
        >
          <td>
            <Cheap>{item.toolRef}</Cheap>
          </td>
          <td className="text-center font-semibold text-neutral-500">
            {item.toolOrEquipment}
          </td>
          <td>
            <div className="flex items-center gap-2.5 font-semibold text-neutral-500">
              <Flag color={item.status === "Low" ? "var(--clr-orange)" : "var(--clr-red)"} />
              {item.status}
            </div>
          </td>
          <td>
            <Button>Details</Button>
          </td>
        </tr>
      ))}
    </Table>
  );
};

export default RestockItems;
