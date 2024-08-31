import React from 'react'
import PatientForm from "@/app/components/ui/PatientForm";

export default function Homepage() {
  return (
    <div className='flex items-center justify-center h-screen w-screen spa'>
        <div className="left-sect space-y-3 ">
            <h2 className='text-xl'>AppName</h2>
            <PatientForm />
            <h6 className='text-gray-600 text-xs '>&copy Team Quantammania HI24A04</h6>
        </div>
        {/* <div className="right-sect">
            <div className="imageToBeUsed border-2 h-[300px] w-[300px]">
                <h5>Hey</h5>
            </div>
        </div> */}
    </div>
  )
}

 