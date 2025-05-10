import React from 'react'
import ItemPage from './ItemPage'
import SimilarPage from './SimilarPage'
import OpinionPage from './OpinionPage'

export default function MainPage() {
  return (
    <div className="bg-dark">
      <div className='w-[1200px] mx-auto'>
        <div className="">
          <ItemPage></ItemPage>
          <h1 className='text-3xl font-semibold text-white mb-4 mt-8'>Podobne przedmioty:</h1>
          <div className="flex gap-6 flex-wrap">
            <SimilarPage></SimilarPage>
            <SimilarPage></SimilarPage>
            <SimilarPage></SimilarPage>
          </div>
          <h1 className='text-3xl font-semibold text-white mb-4 mt-8'>Opinie:</h1>
          <div className="flex flex-col gap-2">
            <OpinionPage></OpinionPage>
            <OpinionPage></OpinionPage>
            <OpinionPage></OpinionPage>
          </div>
        </div>
      </div>
    </div>
  )
}
