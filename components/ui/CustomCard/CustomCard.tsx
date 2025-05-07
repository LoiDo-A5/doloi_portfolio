import { Card } from "flowbite-react";
import clsx from "clsx";
export default function CustomCard({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={clsx(
        "relative flex flex-col gap-4 !bg-gray-100 py-8 px-4 border-3 !border-white shadow-xl my-8 w-full",
        className
      )}
    >
      <h1 className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs w-[120px] p-2 rounded-2xl bg-white mb-4 shadow-xl text-center">
        {title}
      </h1>
      {children}
    </Card>
  );
}
