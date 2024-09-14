import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import ScaleLoader from "react-spinners/ScaleLoader";
import '../App.css'

function AirbnbYourRoom() {
  const [perNight, setPerNights] = useState(2683)
  const [nights, setNights] = useState(7)
  const totalCost = perNight * nights
  const [imageSrc, setImageSrc] = useState(null);
  let [color, setColor] = useState('#E31C5A');
  

  const handlePerNight = (e) => {
    setPerNights(e.target.value)
  }
  const handleNightChange = (e) => {
    setNights(e.target.value)
  }


  
  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Fetch banner data from the API
        const response = await fetch(`http://localhost:8000/api/banner/all`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch banner data");
        }

        const bannerData = await response.json();

        // Assuming image data is located in data.data.banners[0].image.data.data
        const imageDataArray = bannerData.data.banners[0].image.data.data;

        // Convert the array of bytes into a Uint8Array
        const uint8Array = new Uint8Array(imageDataArray);

        // Create a Blob from the Uint8Array
        const blob = new Blob([uint8Array], { type: bannerData.data.banners[0].image.contentType });

        // Convert Blob into a URL that can be used as the image src
        const imageUrl = URL.createObjectURL(blob);

        // Set the image source to the created URL
        setImageSrc(imageUrl);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  
  return (
    <section className='py-8 px-4'>

      <div className='myContainer mx-auto'>
        <div className="mapSection py-12 flex justify-between items-center max-[1200px]:flex-col max-[1200px]:gap-9">
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

        <div className='py-8'>
          <h3 className='font-semibold text-[2rem] text-center'>Airbnb it easily with Airbnb Setup</h3>
          
          {imageSrc ? (
            <img className='mt-9' src={imageSrc} alt="" />
          ) : (
            <ScaleLoader className='text-center mt-4'
            color={color}
            loading="true"
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          )
          }

          <div className="bannerDetails flex justify-between gap-16 mt-9">
            <div className="detailBox">
              <h5 className='font-semibold mb-2'>One-to-one guidance from a Superhost</h5>
              <p>We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.</p>
            </div>
            <div className="detailBox">
            <h5 className='font-semibold mb-2'>An experienced guest for your first booking</h5>
            <p>For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb.</p>
            </div>
            <div className="detailBox">
            <h5 className='font-semibold mb-2'>Specialised support from Airbnb</h5>
            <p>New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.</p>
            </div>
          </div>
        </div>
        

        <div className="airCover py-8">
          <h3 className='text-center font-semibold text-4xl'>Airbnb it with top‑to‑bottom protection</h3>
          <ul className=' flex flex-col gap-5 py-6 w-[65%] mx-auto'>
            <li>
              <ul className='flex justify-between'>
                <li className='basis-3/5'></li>
                <li className='basis-1/5 text-center text-xl'>Airbnb</li>
                <li className='basis-1/5 text-center text-xl'>Competitors</li>
              </ul>
            </li>

            <li>
              <ul className='flex justify-between py-4 border-t-[2px]'>
                <li className='basis-3/5'>
                  <h5 className='text-[100%] font-semibold mb-8'>Guest identity verification</h5>
                  <p className='text-[#6a6a6a]'>Our comprehensive verification system checks details such as name, address, government ID and more to confirm the identity of guests who book on Airbnb.</p>
                </li>
                <li className='basis-1/5 text-center'><i class="fa-solid fa-check text-4xl text-green-500"></i></li>
                <li className='basis-1/5 text-center'><i class="fa-solid fa-check text-4xl text-green-500"></i></li>
              </ul>
            </li>

            <li>
              <ul className='flex justify-between py-4 border-t-[2px]'>
                <li className='basis-3/5'>
                  <h5 className='text-xl font-semibold mb-8'>Reservation screening</h5>
                  <p className='text-[#6a6a6a]'>Our proprietary technology analyses hundreds of factors in each reservation and blocks certain bookings that show a high risk for disruptive parties and property damage.</p>
                </li>
                <li className='basis-1/5 text-center'><i class="fa-solid fa-check text-4xl text-green-500"></i></li>
                <li className='basis-1/5 text-center'><i className="fa-solid fa-xmark text-red-500 text-4xl" /></li>
              </ul>
            </li>

            <li>
              <ul className='flex justify-between py-4 border-t-[2px]'>
                <li className='basis-3/5'>
                  <h5 className='text-xl font-semibold mb-8'>$3m damage protection</h5>
                  <p className='text-[#6a6a6a]'>Airbnb reimburses you for damage caused by guests to your home and belongings and includes these specialised protections:</p>
                </li>
                <li className='basis-1/5 text-center'><i class="fa-solid fa-check text-4xl text-green-500"></i></li>
                <li className='basis-1/5 text-center'><i className="fa-solid fa-xmark text-red-500 text-4xl" /></li>
              </ul>
            </li>

            <li>
              <ul className='flex justify-between py-4  border-t'>
                <li className='basis-3/5'>
                  <h5 className='text-lg'>Art & valuables</h5>
                </li>
                <li className='basis-1/5 text-center'><i class="fa-solid fa-check text-4xl text-green-500"></i></li>
                <li className='basis-1/5 text-center'><i className="fa-solid fa-xmark text-red-500 text-4xl" /></li>
              </ul>
            </li>

            <li>
              <ul className='flex justify-between py-4  border-t'>
                <li className='basis-3/5'>
                  <h5 className='text-lg'>Auto & boat</h5>
                </li>
                <li className='basis-1/5 text-center'><i class="fa-solid fa-check text-4xl text-green-500"></i></li>
                <li className='basis-1/5 text-center'><i className="fa-solid fa-xmark text-red-500 text-4xl" /></li>
              </ul>
            </li>

            <li>
              <ul className='flex justify-between py-4  border-t'>
                <li className='basis-3/5'>
                  <h5 className='text-lg'>Pet damage</h5>
                </li>
                <li className='basis-1/5 text-center'><i class="fa-solid fa-check text-4xl text-green-500"></i></li>
                <li className='basis-1/5 text-center'><i className="fa-solid fa-xmark text-red-500 text-4xl" /></li>
              </ul>
            </li>

            <li>
              <ul className='flex justify-between py-4  border-t'>
                <li className='basis-3/5'>
                  <h5 className='text-lg'>Income loss</h5>
                </li>
                <li className='basis-1/5 text-center'><i class="fa-solid fa-check text-4xl text-green-500"></i></li>
                <li className='basis-1/5 text-center'><i className="fa-solid fa-xmark text-red-500 text-4xl" /></li>
              </ul>
            </li>

            <li>
              <ul className='flex justify-between py-4  border-t'>
                <li className='basis-3/5'>
                  <h5 className='text-lg'>Deep cleaning</h5>
                </li>
                <li className='basis-1/5 text-center'><i class="fa-solid fa-check text-4xl text-green-500"></i></li>
                <li className='basis-1/5 text-center'><i className="fa-solid fa-xmark text-red-500 text-4xl" /></li>
              </ul>
            </li>

            <li>
              <ul className='flex justify-between py-4 border-t-[2px]'>
                <li className='basis-3/5'>
                  <h5 className='text-xl font-semibold mb-8'>$1m USD liability insurance</h5>
                  <p className='text-[#6a6a6a]'>You’re protected in the rare event that a guest gets hurt or their belongings are damaged or stolen.</p>
                </li>
                <li className='basis-1/5 text-center'><i class="fa-solid fa-check text-4xl text-green-500"></i></li>
                <li className='basis-1/5 text-center'><i class="fa-solid fa-check text-4xl text-green-500"></i></li>
              </ul>
            </li>


            <li>
              <ul className='flex justify-between py-4 border-t-[2px]'>
                <li className='basis-3/5'>
                  <h5 className='text-xl font-semibold mb-8'>24-hour safety line</h5>
                  <p className='text-[#6a6a6a]'>If you ever feel unsafe, our app provides one-tap access to specially trained safety agents, day or night.</p>
                </li>
                <li className='basis-1/5 text-center'><i class="fa-solid fa-check text-4xl text-green-500"></i></li>
                <li className='basis-1/5 text-center'><i className="fa-solid fa-xmark text-red-500 text-4xl" /></li>
              </ul>
            </li>

            <p className='text-[#6a6a6a] border-t pt-4'>Comparison is based on public information and free offerings by top competitors as of 22/10. <Link to='/' className='text-black font-medium underline'>Find details and exclusions here.</Link></p>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default AirbnbYourRoom