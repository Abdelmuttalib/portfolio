import { useRouter } from "next/router";

import UnstyledLink from "@/components/links/UnstyledLink";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const links = [
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Blog",
    link: "/blog",
  },
];

export default function Header() {
  const { pathname } = useRouter();
  return (
    <header className="sticky top-3 z-50">
      <div className="layout flex h-16 w-full items-center justify-between rounded-lg bg-white/40 px-8 backdrop-blur-md">
        <UnstyledLink
          href="/"
          openNewTab={pathname !== "/"}
          className="hover:decoration-primary-600 text-lg font-bold hover:underline hover:decoration-2 hover:underline-offset-2"
        >
          Abdelmuttalib Ahmed
        </UnstyledLink>
        <nav>
          <ul className="flex items-center justify-between space-x-4">
            {links.map(({ label, link }) => (
              <UnstyledLink
                key={label}
                href={link}
                className={cn(
                  "rounded  px-1.5 py-0.5 font-medium text-[#111] hover:underline hover:decoration-[#1c1c1c] hover:decoration-2",
                  pathname === link
                    ? "underline decoration-[#1c1c1c] decoration-2"
                    : ""
                )}
              >
                {label}
              </UnstyledLink>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
