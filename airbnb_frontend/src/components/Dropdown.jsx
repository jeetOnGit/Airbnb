import React, { useState } from 'react'

function DropDown() {
  const dropDownData = [
    {
      heading:"Is my place right for Airbnb?",
      subHeading:"Airbnb guests are interested in all kinds of places. We have listings for tiny homes, cabins, tree houses and more. Even a spare room can be a great place to stay."
    },
    {
      heading:"Do I have to host all the time?",
      subHeading:"Not at all – you control your calendar. You can host once a year, a few nights a month or more often."
    },
    {
      heading:"How much should I interact with guests?",
      subHeading:"It’s up to you. Some Hosts prefer to message guests only at key moments – like sending a short note when they check in – while others also enjoy meeting their guests in person. You’ll find a style that works for you and your guests."
    },
    {
      heading:"Any tips on being a great Airbnb Host?",
      subHeading:"Getting the basics down goes a long way. Keep your place clean, respond to guests promptly and provide necessary amenities like fresh towels. Some Hosts like adding a personal touch such as putting out fresh flowers or sharing a list of local places to explore – but it’s not required. Read on for more hosting tips"
    },
    {
      heading:"What are Airbnb’s fees?",
      subHeading:"Airbnb typically collects a flat service fee of 3% of the reservation subtotal when you get paid. We also collect a fee from guests when they book. In many areas Airbnb also collects and pays sales and tourism taxes automatically on your behalf. Learn more about fees"
    }
  ]
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  
  return (
      <>
      <ul className='flex flex-col gap-3'>
      {dropDownData.map((drops, index)=>(
         <li>
            <div className='flex flex-col gap-3'>
              <div className="heading flex justify-between border-b pb-6 cursor-pointer" onClick={() => toggleDropdown(index)}>
                <h5 className='text-xl'>{drops.heading}</h5>
                { activeDropdown === index ? <i className="fa-solid fa-angle-up" /> : <i className="fa-solid fa-angle-down" /> }
                {/* {
                  activeDropdown === index ? (
                    <h5 className='text-xl'>{drops.heading}</h5>
                    <i className="fa-solid fa-angle-up" onClick={() => toggleDropdown(index)}/>
                  ) : (
                      <h5 className='text-xl'>{drops.heading}</h5>
                    <i className="fa-solid fa-angle-up" onClick={() => toggleDropdown(index)}/>
                  )
                } */}
              </div>
              <div className="dropPara">
                { activeDropdown === index &&
                  <p className='text-[#6a6a6a]'>{drops.subHeading}</p>
                }
              </div>
            </div>
         </li>
        ))}
      </ul>
        
      </>
  )
}

export default DropDown