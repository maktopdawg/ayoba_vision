import Link from 'next/link';
import React from 'react'
import { MdChatBubbleOutline } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoAnalyticsOutline } from "react-icons/io5";

import { BsChatLeft } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";

interface linksInterface {
  title: string
  link: string
  icon: any
}

const links: linksInterface[] = [
  {
    title: "dashboard",
    link: "/dashboard/ayoba_vision",
    icon: <BsGrid size={17} color="white" fontWeight={'bold'} />
  },
  {
    title: "chat",
    link: "/chat",
    icon: <BsChatLeft size={17} color="white" fontWeight={"bold"} />
  },
  {
    title: "analytics",
    link: "/analytics",
    icon: <BsBarChart size={17} color="white" fontWeight={"bold"} />
  },
]

const Sidebar = () => {
  return (
    <nav className='w-[4rem] bg-[#0076FF] h-[100vh] p-6 flex flex-col items-center'>
      <section className='mb-12 w-[2.2rem] h-[2.2rem] border flex items-center justify-center text-white rounded-[50%]'>
        AY
      </section>

      <section className='flex flex-col gap-7 w-full items-center justify-center'>
        {links.map((item, index) => (
          <li key={index} title={item.title} className=''>
            <Link href={item.link}>{item.icon}</Link>
          </li>
        ))}
      </section>
    </nav>
  )
}

export default Sidebar