import React, { useState } from 'react'
import '../App.css'

function AirbnbYourRoom() {
  const [perNight, setPerNights] = useState(2683)
  const [nights, setNights] = useState(7)
  const totalCost = perNight * nights

  const handlePerNight = (e) => {
    setPerNights(e.target.value)
  }
  const handleNightChange = (e) => {
    setNights(e.target.value)
  }


  return (
    <section className='py-8 px-4'>

      <div className='myContainer mx-auto'>
        <div className="mapSection flex justify-between items-center max-[1200px]:flex-col max-[1200px]:gap-9">
          <div className="hotelValue text-center mx-auto w-[50%] max-[1200px]:w-full">
            <div className='w-[]'>
              <p className='text-[3rem] leading-none font-medium '><span className='redText'>Airbnb it.<br/></span>You could earn <span className='text-[68px]'><br />₹{totalCost}</span></p>
              <p className='mt-3'><span className='underline font-medium'><button onChange={handlePerNight}>{nights}</button> nights</span> at an estimated ₹2,683 a night</p>
            </div>

            <div className="rateSlider my-5 leading-8">
              <input className='bg-black rangeSlider appearance-none cursor-pointer relative overflow-visible max-[1200px]:w-[90%]' type="range" name="nightSlider" id="" min='1' max='30' value={nights} onChange={handleNightChange} style={{background: `linear-gradient(to right, #222 ${((nights - 1) / 29) * 100}%, #ddd ${((nights - 1) / 29) * 100}%)`
              }} />
              <p className='underline text-[#6a6a6a]'>Learn how we estimate your earnings</p>
            </div>

            <button className='flex justify-start items-center gap-3 border rounded-full ps-5 w-[22rem] mx-auto py-1 max-[1200px]:w-[90%]'>
              <div>
                <i className="fa-solid fa-magnifying-glass text-[#E31C5A]" />
              </div>
              <div className='text-start'>
                <p className='font-semibold'>Kolkata</p>
                <p>Entire place • 2 bedroom</p>
              </div>
            </button>
          </div>

          <div className="mapBox w-[50%] h-[600px] max-[1200px]:w-full">
            <iframe className='w-full h-full rounded-xl' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77491009404!2d77.3012573757849!3d12.954459540834812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1725290522929!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AirbnbYourRoom