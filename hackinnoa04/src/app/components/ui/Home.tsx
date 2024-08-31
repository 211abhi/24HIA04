import React from 'react'
import PatientForm from "@/app/components/ui/PatientForm";
import Link from 'next/link';
import Image from 'next/image';

export default function Homepage() {
  return (
    <div className='flex overflow-x-hidden items-center justify-center max-h-screen h-screen'>
        <div className="left-sect space-y-3 ">
            <h2 className='text-xl'>AppName</h2>
            <PatientForm />
            <h6 className='text-gray-600 text-xs '>&copy Team Quantammania HI24A04</h6>
            <p>
            <Link href="/?admin=true" className="text-green-500">Admin</Link> 
            </p>
        </div>
        <div className="right-sect">
            {/* <div className="imageToBeUsed ">
                <Image
                 src='/hackinnoa04/src/app/components/img.jpg'
                 layout='fill'
                 alt='patient'
                 className='side-img'
                />
            </div>
                <h5>Hey</h5> */}
        </div>
    </div>
  )
}

 