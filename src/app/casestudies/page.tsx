
import React, { Suspense } from 'react'
import CaseStudy from './CaseStudy'

function CaseStudyLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fffdf5]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-lg text-gray-600">Loading case study...</p>
      </div>
    </div>
  )
}

function page() {
  return (
    <div>
      <Suspense fallback={<CaseStudyLoading />}>
        <CaseStudy/>
      </Suspense>
    </div>
  )
}

export default page