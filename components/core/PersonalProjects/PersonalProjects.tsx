import CustomCard from "@/components/ui/CustomCard/CustomCard";
import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  image: string;
  live: string;
  description: string;
  github?: string;
  links?: {
    title: string;
    url: string;
  }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nike UI",
    image: "/images/nike.jpeg",
    live: "https://clone.hthanhlong97.ca/",
    description: "A clone of the Nike website",
    links: [
      {
        title: "Frontend",
        url: "https://github.com/hthanhlong/nike-clone",
      },
    ],
  },
  {
    id: 3,
    title: "Chat App",
    image: "/images/chat-app.jpeg",
    live: "https://www.discoverourstory.link/",
    description: "A chat app",
    links: [
      {
        title: "Frontend",
        url: "https://github.com/LoiDo-A5/discover-our-story-chat-frontend",
      },
      {
        title: "Backend",
        url: "https://github.com/LoiDo-A5/discover-our-story-chat-backend",
      },
      {
        title: "App",
        url: "https://github.com/LoiDo-A5/discover-our-story-chat-app",
      },
    ],
  },
];

export default function PersonalProjects() {
  return (
    <CustomCard title="Personal Projects" className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {projects.map((project) => (
          <Card className="w-full text-center p-2 border-0" key={project.title}>
            <Link href={project.live} target="_blank">
              <Image
                src={project.image}
                alt={project.title}
                width={200}
                height={200}
                className="w-full h-full object-cover hover:opacity-80 transition-all duration-300 cursor-pointer"
              />
            </Link>
            <h1 className="text-sm lg:text-xs">{project.title}</h1>
            {project.links && project.links.length > 0 && (
              <div className="flex gap-2 justify-center items-center bg-gray-100 py-1 rounded-lg">
                {project.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition-all"
                  >
                    <Image
                      src="/github.svg"
                      alt="flag"
                      width={24}
                      height={24}
                    />
                  </Link>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </CustomCard>
  );
}
