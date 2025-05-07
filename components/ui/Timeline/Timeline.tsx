import { experience } from "./_data";

import clsx from "clsx";
export default function Timeline() {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {experience.map((item) => (
        <li className="mb-2 ms-4" key={item.id}>
          <div
            className={clsx(
              "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-200",
              item.id === 1 && "dark:!bg-gray-500"
            )}
          ></div>
          <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-800">
            {item.title}
          </time>
          <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
            {item.description}
          </p>
          <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
            {item.location}
          </p>
        </li>
      ))}
    </ol>
  );
}
