import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface Props extends LinkProps {
  children: ReactNode;
  active?: boolean;
}

export default function NavLink({ children, active = false, ...rest }: Props) {
  return (
    <Link className="group relative pb-1.5" {...rest}>
      {children}
      <span
        className={`absolute bottom-0 left-1/2 block h-0.5 w-0 origin-center -translate-x-1/2 bg-subtle transition-all group-hover:w-full ${active && "w-full"}`}
      />
    </Link>
  );
}
