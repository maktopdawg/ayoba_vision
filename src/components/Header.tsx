import React from 'react'

interface HeaderProps {
    page: string
}

const Header = ( { page }: HeaderProps ) => {
  return (
    <section className='w-full border h-[3rem] mb-2 rounded-lg bg-gray-200 flex items-center justify-between'>
        <section className='flex items-center w-full h-full'>
          <h1 className='font-bold uppercase p-2 text-1xl'>{page}</h1>
        </section>

        <section className='flex'>
          {/* <h1 className='font-bold uppercase p-2 text-1xl'>Dashboard</h1> */}
        </section>
    </section>
  )
}

export default Header