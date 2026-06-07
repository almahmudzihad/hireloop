import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar'
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div>
        <DashboardSidebar />
        {children}
    </div>
  )
}

export default DashboardLayout