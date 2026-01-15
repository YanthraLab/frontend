import Link from "next/link";

interface LinkItem {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: LinkItem[];
}

export const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h4 className="font-semibold mb-4 text-cyan-600 dark:text-cyan-500">
        {title}
      </h4>
      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
