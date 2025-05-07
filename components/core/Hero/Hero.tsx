import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">
        Hello,
        <Image
          src="/images/personal.jpg"
          alt="logo"
          width={100}
          height={100}
          className="rounded-2xl inline mx-2 border-2 border-gray-300"
        />
        <span className="block sm:inline">I&apos;m Do Loi!</span>
      </h1>
      <p className="text-3xl font-normal">
        <span className="text-gray-500">I&apos;m a</span> Software engineer
        <span className="text-gray-500">
          <br /> with a passion for building{" "}
          <span className="text-orange-500">
            scalable and efficient systems.
          </span>
        </span>
      </p>
    </div>
  );
}
