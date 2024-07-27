import ChatSidebar from '@/components/ChatSidebar'
import React from 'react'
import Header from '@/components/Header'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='h-full w-full p-6'>
      <Header page={"Chat"} />

      <div className='flex items-center w-full h-[90vh] gap-4'>
        <ChatSidebar />

        <section className='w-full h-full border bg-gray-200 rounded-lg p-2'>
          Select any contact to chat with
        </section>
      </div>
    </div>
  )
}

export default page