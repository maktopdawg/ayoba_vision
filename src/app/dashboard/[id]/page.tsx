import Header from '@/components/Header';
import React from 'react'

type Props = {}

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className='w-full p-6'>
      <Header page={"Dashboard"} />

      <main className='w-full border h-[90vh] rounded-lg bg-gray-200'>

      </main>
    </div>
  )
}

export default page