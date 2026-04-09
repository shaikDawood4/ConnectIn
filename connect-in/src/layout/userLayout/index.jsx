import React from 'react'
import Navbar from '@/Components/Navbar'
function UserLayout({children}) {
  return (
    <div>
        <Navbar>

        </Navbar>
        <div>{children}</div>
      
    </div>
  )
}

export default UserLayout
