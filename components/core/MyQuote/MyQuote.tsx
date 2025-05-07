import CustomCard from "@/components/ui/CustomCard/CustomCard";

export default function MyQuote() {
  return (
    <CustomCard title="My Quote">
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          &quot;The beautiful thing about learning is that nobody can take it
          away from you&quot;
        </p>
        <p className="text-sm text-right">--- B.B King</p>
      </div>
    </CustomCard>
  );
}
