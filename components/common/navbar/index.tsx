'use client'
import { volkhov } from "@/lib/fonts";
import Link from "next/link";
import { useRef } from "react";
import Image from 'next/image'
import avatar from '@/assets/icons/avatar.svg'
import search from '@/assets/icons/search.svg'
import NavLink from "./NavLink";

const links: string[] = ["Home", "Products", "Cart", "Wishlist", "Notification"]

export default function Navbar() {
  const active = useRef(0)

  return (
    <nav className="container py-14">
      <div className="flex gap-56 items-center text-subtle">
        <Link href={'/'} className={`${volkhov.className} text-5xl text-[52px]`}>
          ARC
        </Link>

        <div className="flex gap-16">
          <div className="relative">
            <label htmlFor="global-search" className="absolute top-2 left-2.5">
              <Image height={20} width={20} src={search} alt="search" />
            </label>
            <input className="pr-3 pl-9 py-1 border rounded-xl border-border placeholder:text-muted" placeholder="Search here..." />
          </div>

          <ul className="flex self-end gap-12">
            {links.map((l, index) => <li key={l} className={`${active.current === index ? "font-semibold" : "font-normal"}`}><NavLink href={"/"} active={index === active.current}>{l}</NavLink></li>)}
          </ul>

          <Image src={avatar} height={35} width={35} alt="avatar" />
        </div>
      </div>
    </nav>
  )
}
