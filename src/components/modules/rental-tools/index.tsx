import Avatar from "@/components/elements/Avatar";
import Button from "@/components/elements/Button";
import Cheap from "@/components/elements/Cheap";
import Flag from "@/components/elements/Flag";
import { getRentalTools } from "@/http";

const RentalTools = async () => {
  const data = await getRentalTools();
  return (
    <table className="w-full text-left text-sm text-neutral-400">
      <thead className="h-8 border-b-[1px] border-neutral-200 ">
        <tr>
          <th>Work Order</th>
          <th>Tool ref.</th>
          <th>Team Member</th>
          <th>Status</th>
          <th>Duration</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.order}
            className="h-11 border-b-[1px] border-neutral-200 last-of-type:border-b-0"
          >
            <td>{String(item.order).padStart(2, "0")}</td>
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
              <div className="flex items-center gap-2.5 font-semibold text-neutral-500">
                <Flag
                  color={
                    item.status === "Completed"
                      ? "#68CD34"
                      : item.status === "In Progress"
                        ? "#0879FF"
                        : "#F82715"
                  }
                />
                {item.status}
              </div>
            </td>
            <td>{item.duration}</td>
            <td>
              <Button>Details</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RentalTools;
