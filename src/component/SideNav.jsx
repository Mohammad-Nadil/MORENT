import React from 'react'

const SideNav = () => {
  return (
    <div className=' p-8 font-jakarta font-semibold text-primary-text ' >
        <div className='flex flex-col gap-y-7' >
            <p>TYPE</p>
            <div className='flex items-center gap-x-2 ' >
                <input type="checkbox" className='w-5 h-5 ' name="Sport" id="sport"  />
                <label htmlFor="sport"> Sport <span className='text-secondary-text'>(10)</span></label>
            </div>
            <div className='flex items-center gap-x-2 ' >
                <input type="checkbox" className='w-5 h-5 ' name="SUV" id="SUV"  />
                <label htmlFor="SUV"> SUV  <span className='text-secondary-text'>(12)</span></label>
            </div>
            <div className='flex items-center gap-x-2 ' >
                <input type="checkbox" className='w-5 h-5 ' name="mvp" id="mvp"  />
                <label htmlFor="mvp"> MPV  <span className='text-secondary-text'>(16)</span></label>
            </div>
            <div className='flex items-center gap-x-2 ' >
                <input type="checkbox" className='w-5 h-5 ' name="Sedan" id="Sedan"  />
                <label htmlFor="Sedan"> Sedan  <span className='text-secondary-text'>(20)</span></label>
            </div>
            <div className='flex items-center gap-x-2 ' >
                <input type="checkbox" className='w-5 h-5 ' name="Coupe" id="Coupe"  />
                <label htmlFor="Coupe"> Coupe  <span className='text-secondary-text'>(14)</span></label>
            </div>
            <div className='flex items-center gap-x-2 ' >
                <input type="checkbox" className='w-5 h-5 ' name="Hatchback" id="Hatchback"  />
                <label htmlFor="Hatchback"> Hatchback  <span className='text-secondary-text'>(14)</span></label>
            </div>
        </div>
    </div>
  )
}

export default SideNav
