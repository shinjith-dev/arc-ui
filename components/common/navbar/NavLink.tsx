import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"

interface Props extends LinkProps {
  children: ReactNode;
  active?: boolean
}

export default function NavLink({ children, active = false, ...rest }: Props) {
  return (
    <Link className="group relative pb-1.5" {...rest}>
      {children}
      <span className={`h-0.5 bg-subtle w-0 block bottom-0 transition-all group-hover:w-full origin-center left-1/2 absolute -translate-x-1/2 ${active && "w-full"}`} />

    </Link>
  )
}
