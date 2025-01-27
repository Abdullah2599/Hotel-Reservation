import React, { useState } from 'react'
import CheckIn from './CheckIn'
import CheckOut from './CheckOut'
import AdultDropdown from './AdultDropdown'
import KidsDropdown from './KidsDropdown'

function BookForm() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState('');

  return (
    <form className='h-[300px] w-full lg:h-[70px]'>
      <div className='flex flex-col w-full h-full lg:flex-row'>
        <div className='flex-1 border-r'>
        <CheckIn startDate={checkInDate} setStartDate={setCheckInDate} />
        </div>
        <div className='flex-1 border-r'>
        <CheckOut endDate={checkOutDate} setEndDate={setCheckOutDate} />
        </div>
        <div className='flex-1 border-r'>
        <AdultDropdown value={adults} setValue={setAdults} />
        </div>
        <div className='flex-1 border-r'>
        <KidsDropdown value={kids} setValue={setKids} />
        </div>
        <button className='btn btn-primary' type='submit'>Check Now</button>
      </div>
      
    </form>
  )
}

export default BookForm
