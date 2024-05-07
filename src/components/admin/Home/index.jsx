import React from 'react'
import BoxMade from './ChildHome/BoxMade'
import ApexCharts from './ChildHome/ApexCharts'
import RoundedCharts from './ChildHome/RoundedCharts'
import XaxisChart from './ChildHome/XaxisChart'

function AdminHome() {
  return (
    <div className='bg-gradient-color min-h-screen'>
      <BoxMade></BoxMade>
      <div className='flex-none lg:flex'>
      <ApexCharts></ApexCharts>
      {/* <RoundedCharts></RoundedCharts> */}
      <XaxisChart></XaxisChart>
      </div>
    </div>
  )
}

export default AdminHome