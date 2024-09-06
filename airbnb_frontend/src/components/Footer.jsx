import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-[#f7f7f7] pt-6 border border-t px-4  w-full'>
      <div className='myContainer mx-auto'>
        <div className="footerLinks flex justify-start gap-40 text-[#222] text-sm leading-6 max-md:flex-col max-md:px-4 max-md:gap-5 border-b pb-6">
          <ul>
            <li className='font-medium'>Support</li>
            <li className='hover:underline'><Link to='/'>Help Center</Link></li>
            <li className='hover:underline'><Link to='/'>AirCover</Link></li>
            <li className='hover:underline'><Link to='/'>Anti-discrimination</Link></li>
            <li className='hover:underline'><Link to='/'>Disability support</Link></li>
            <li className='hover:underline'><Link to='/'>Cancellation options</Link></li>
            <li className='hover:underline'><Link to='/'>Report neighbourhood concern</Link></li>
          </ul>

          <ul>
            <li className='font-medium'>Hosting</li>
            <li className='hover:underline'><Link to='/'>Airbnb your home</Link></li>
            <li className='hover:underline'><Link to='/'>AirCover for Hosts</Link></li>
            <li className='hover:underline'><Link to='/'>Hosting resources</Link></li>
            <li className='hover:underline'><Link to='/'>Community forum</Link></li>
            <li className='hover:underline'><Link to='/'>Hosting responsibly</Link></li>
            <li className='hover:underline'><Link to='/'>Join a free Hosting class</Link></li>
          </ul>

          <ul>
            <li className='font-medium'>Airbnb</li>
            <li className='hover:underline'><Link to='/'>Newsroom</Link></li>
            <li className='hover:underline'><Link to='/'>New features</Link></li>
            <li className='hover:underline'><Link to='/'>Careers</Link></li>
            <li className='hover:underline'><Link to='/'>Investors</Link></li>
            <li className='hover:underline'><Link to='/'>Airbnb.org emergency stays</Link></li>
            
          </ul>
        </div>

        <div className="copyRight flex justify-between py-6 text-[#222] max-md:flex-col-reverse max-md:gap-3 max-md:items-center max-md:text-center">
          <div className="leftFooter flex text-[0.9rem] gap-3 max-md:flex-col max-md:gap-1">
            <ul>
              <li className='max-md:basis-full'>© 2024 Airbnb, Inc.</li>
            </ul>
            <ul className='flex gap-3'>
              <li><Link>Privacy</Link></li>
              <li><Link>Terms</Link></li>
              <li><Link>Sitemap</Link></li>
              <li><Link>Company details</Link></li>
            </ul>
          </div>


          <div className="rightFooter flex gap-3 max-md:flex-col max-md:gap-1 max-md:items-center">
            <ul className='flex gap-3'>
              <li><Link><i className='fa-solid fa-globe' /> English(IN)</Link></li>
              <li><Link><i class="fa-solid fa-indian-rupee-sign" /> INR</Link></li>
            </ul>
            <div className='max-sm:hidden'>
              <ul className="socailLinks flex gap-3">
                <li className=''><Link className='text-white text-[0.9rem] px-1 bg-[#222]'><i class="fa-brands fa-facebook-f" /></Link></li>
                <li className=''><Link className='text-white text-[0.9rem] px-1 bg-[#222]'><i class="fa-brands fa-x-twitter"/></Link></li>
                <li className=''><Link className='text-white text-[0.9rem] px-1 bg-[#222]'><i class="fa-brands fa-instagram" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer