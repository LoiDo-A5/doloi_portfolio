"use client";

export default function Connect() {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/loi-do-codechill/", "_blank");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:items-center w-full my-8">
      <button
        onClick={handleClick}
        className="bg-black text-white px-4 py-2 rounded-3xl w-[140px] lg:w-[250px] mr-4 hover:bg-gray-800 transition-all duration-300 cursor-pointer"
      >
        Book a call
      </button>
      <p className="text-lg lg:text-xl font-light">
        Feel free to explore my portfolio and get in touch with me. <br /> I
        would love to connect!
      </p>
    </div>
  );
}
