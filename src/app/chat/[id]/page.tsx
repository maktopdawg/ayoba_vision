import ChatSidebar from '@/components/ChatSidebar';
import Header from '@/components/Header';
import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className='h-full w-full p-6'>
      <Header page={`Business Chat With ${id}`} />

      <div className='flex items-center w-full h-[90vh] gap-4'>
        <ChatSidebar />

        <section className='w-full h-full flex gap-3 border bg-gray-200 rounded-lg p-2'>
          <section className='w-full border border-black h-full'>
            Section for chat messages
          </section>

          <section className='w-[30%] h-full border border-black'>
            Section to display customer profile
          </section>
        </section>
      </div>
    </div>
  )
}

export default page