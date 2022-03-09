import Link from "next/link";

interface IFloatingButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function FloatingButton({children, href}:IFloatingButtonProps) {
  return (
    <Link href={href}>
      <a className="fixed bottom-24 right-5 text-white bg-orange-400 rounded-full p-3 shadow-xl hover:bg-orange-500">
        {children}
      </a>
    </Link>
  );
}