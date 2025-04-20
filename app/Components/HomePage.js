import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
      <div className="h-screen bg-cover bg-center animate-bg-cycle">
          <div className="flex items-center justify-center h-full bg-[#0A0A0A] bg-opacity-10">
          <div className="text-center text-white px-6">
              <h1 className="text-5xl font-semibold">Welcome to SSS College</h1>
              <p className="text-lg mt-4">Empowering the future with quality education</p>
              <Link href="/enroll" className="mt-6 inline-block bg-[hsl(275,88%,45%)] text-white py-2 px-6 rounded-lg hover:bg-[hsl(275,88%,55%)]">
              Enroll Now
              </Link>
         </div>
      </div>
   </div>
  )
}

export default HomePage