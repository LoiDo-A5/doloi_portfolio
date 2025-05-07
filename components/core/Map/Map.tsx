import CustomCard from "@/components/ui/CustomCard/CustomCard";
import Image from "next/image";
export default function Map() {
  return (
    <CustomCard title="My Map" className="p-0">
      <Image
        src="/images/map.jpg"
        alt="Map"
        width={320}
        height={300}
        className="w-full h-[300px] object-cover"
      />
    </CustomCard>
  );
}
