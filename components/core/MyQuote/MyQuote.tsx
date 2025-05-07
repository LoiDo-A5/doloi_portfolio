import CustomCard from "@/components/ui/CustomCard/CustomCard";

export default function MyQuote() {
  return (
    <CustomCard title="My Quote">
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          &quot;The only person you should try to be better than is the person you were yesterday.&quot;
        </p>
      </div>
    </CustomCard>
  );
}
