import { AdminInfo } from '@/types'
import React from 'react'

type adminInfoProps = {
  adminInfo:AdminInfo;
}

const Admin:React.FC<adminInfoProps> = ({adminInfo}) => {
  return (
    <div>
      <h1>{adminInfo.id}</h1>
      <h1>{adminInfo.name}</h1>
      <h1>{adminInfo.email}</h1>
      <h1>{adminInfo.role}</h1>
      <h1>{adminInfo.lastLoggedIn.toLocaleString()}</h1>
    </div>
  )
}

export default Admin