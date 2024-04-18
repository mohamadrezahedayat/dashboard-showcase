import Image from "next/image";

const ReceptionSummary = () => {
  return (
    <div className="flex h-full flex-col justify-center gap-4">
      <div className="flex h-[60px] items-center justify-between ">
        <Image
          alt="Packages Received"
          src="/received-pkg.png"
          width={68}
          height={60}
        />
        <h2>Packages Received</h2>
        <span>10</span>
      </div>
      <div className="flex h-[60px] items-center justify-between">
        <Image
          alt="Processed Packages"
          src="/processed-pkg.png"
          width={68}
          height={60}
        />
        <h2>Processed Packages</h2>
        <span>10</span>
      </div>
    </div>
  );
};

export default ReceptionSummary;
