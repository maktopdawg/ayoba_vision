import React from 'react'

const ChatSidebar = () => {
  return (
    <section className='w-64 h-full border bg-gray-200 rounded-lg p-3'>
        <div>
            <input type="text" placeholder='search...' className='p-1 bg-transparent text-center border-b-black border text-black' />
        </div>
    </section>
  )
}

export default ChatSidebar