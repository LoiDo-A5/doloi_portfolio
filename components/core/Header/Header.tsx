import Image from "next/image";
import Link from "next/link";

const linkedinUrl = "https://www.linkedin.com/in/loi-do-codechill/";

export default function Header() {
  return (
    <div className="flex items-center justify-between mb-10">
      <h1 className="text-xs lg:text-base underline">doloicodechill@gmail.com</h1>
      <div className="flex items-center gap-2">
        {/* <Image
          className="cursor-pointer hover:scale-110 transition-all duration-300"
          src="/download.svg"
          alt="logo"
          width={24}
          height={24}
        /> */}
        <Link
          href={linkedinUrl}
          target="_blank"
          className="cursor-pointer hover:scale-110 transition-all duration-300"
        >
          <Image src="/linkedin.svg" alt="logo" width={32} height={32} />
        </Link>
      </div>
    </div>
  );
}
