import CallCenterForm from '@/components/CallCenterForm'
import CallCenterHero from '@/components/CallCenterHero'
import CallCenterPlans from '@/components/CallCenterPlans'
import React from 'react'

const CallCenter = () => {
  return (
    <div className=' flex flex-col '>
      <CallCenterHero/>
      <CallCenterPlans/>
      <CallCenterForm/>
    </div>
  )
}

export default CallCenter