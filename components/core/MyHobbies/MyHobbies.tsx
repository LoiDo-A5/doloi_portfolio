import CustomCard from "@/components/ui/CustomCard/CustomCard";
import Image from "next/image";

export default function MyHobbies() {
  return (
    <CustomCard title="My Hobbies">
      <Image
        src="/images/hobbies.webp"
        alt="My Hobbies"
        width={300}
        height={300}
        className="w-full h-full object-cover"
      />
    </CustomCard>
  );
}
