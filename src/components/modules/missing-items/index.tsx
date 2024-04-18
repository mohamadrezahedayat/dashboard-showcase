import Avatar from "@/components/elements/Avatar";
import Button from "@/components/elements/Button";
import Cheap from "@/components/elements/Cheap";
import Table from "@/components/elements/Table";
import { getRentalTools } from "@/http";

const columns = [
  "Tool ref.",
  "Team Member",
  "",
];

const MissingItems = async() => {
  const data = await getRentalTools();
  return (
    <Table columns={columns}>
      {data.map((item) => (
        <tr
          key={item.order}
          className="h-11 border-b-[1px] border-neutral-200 last-of-type:border-b-0"
        >
          <td>
            <Cheap>{item.toolRef}</Cheap>
          </td>
          <td>
            <div className="flex gap-2.5 font-semibold text-neutral-500">
              <Avatar seed={item.order} />
              {item.teamMember}
            </div>
          </td>
         
          <td>
            <Button>Details</Button>
          </td>
        </tr>
      ))}
    </Table>
  );
}

export default MissingItems