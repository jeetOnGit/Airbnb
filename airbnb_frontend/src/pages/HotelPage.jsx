import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import "../App.css";
function HotelPage() {
  const { hotelID } = useParams(); // Retrieve hotelId from the URL
  const [hotel, setHotel] = useState("");
  useEffect(() => {
    fetch(`https://airbnb-dl81.onrender.com/api/products/${hotelID}`)
      .then((response) => response.json())
      .then((data) => setHotel(data?.data?.product))
      //   .then(data => console.log(data?.data?.product.name))
      .catch((error) => console.error("Error fetching hotel:", error));
  }, [hotelID]);

  return (
    <div>
      <div className="myContainer mx-auto px-4 text-[#222]">
        <div className="hotelTag flex justify-between items-center py-3">
          <div>
            <h1 className="text-[1.6rem] font-semibold">Connect with beauty forevr</h1>
          </div>
          <div>
            <ul className="flex justify-between items-center gap-3">
              <li className=""><Link to='/'><i class="fa-solid fa-arrow-up-from-bracket" /> <span className="underline">Share</span></Link></li>
              <li><Link to='/'><i class="fa-regular fa-heart" /> <span className="underline">Save</span></Link></li>
            </ul>
          </div>
        </div>
        <div className="imageBox h-[600px] rounded bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${hotel.imageUrl})` }}>
        </div>
        <div className="flex justify-between py-4">
          <div className="hotelData px-4 w-[60%]">
            <div className="hotelName pb-4">
              <h4 className="text-[1.5rem]">{hotel.name}</h4>
              <p className="text-[0.99rem] text-[#666]">2 single beds - Private attached bathroom</p>
            </div>
            <div className="hostDetails flex gap-2 pb-4">
                <div className="hostImg bg-[#000] w-[50px] h-[50px] rounded-full"><img src="images/user.jpg" alt="" /></div>
                <div>
                    <h5>Azar Saheeb</h5>
                    <p className="text-[#666]">SuperHost - 8 years Hosting</p>
                </div>
            </div>

            <ul className="featureList py-6  border-y">
                <li className="flex items-center gap-7">
                    <div><i class="fa-solid fa-utensils text-[1.5rem]" /></div>
                    <div>
                        <h5 className="text-[1.1rem] font-medium">Room in a villa</h5>
                        <p className="text-[0.9rem] text-[#666]">Your own room in a home, plus access to shared spaces.</p>
                    </div>
                </li>

                <li className="flex items-center gap-7">
                    <div><i class="fa-brands fa-slideshare text-[1.5rem]" /></div>
                    <div>
                        <h5 className="text-[1.1rem] font-medium">Shared common spaces</h5>
                        <p className="text-[0.9rem] text-[#666]">You’ll share parts of the home.</p>
                    </div>
                </li>

                <li className="flex items-center gap-7">
                    <div><i class="fa-solid fa-shower text-[1.5rem]" /></div>
                    <div>
                        <h5 className="text-[1.1rem] font-medium">Free cancellation before 9 Feb</h5>
                        <p className="text-[0.9rem] text-[#666]">Get a full refund if you change your mind.</p>
                    </div>
                </li>
            </ul>

            <div className="aboutHotel">
                <p className="py-4 text-[0.9rem]">Some info has been automatically translated. <Link to='/' className="font-semibold underline">Show original</Link></p>
                <div className="aboutPara">
                    <h5 className="text-[1.4rem] font-semibold">About this place</h5>
                    <p className="py-3 text-[0.9rem]">This very atypical 110 m2 apartment is located in the heart of the Croix Rousse district, classified as a UNESCO heritage site . The metro is 5 minutes walk, and you will find all shops and restaurants nearby.
                    This apartment is ideally placed to visit Lyon but also for business trips ( it is in particular located a 10 minute walk from the INSPE)</p>
                </div>
            </div>

            <div className="bedroomDetails py-6  border-y">
            <h2 className="text-[1.3rem] font-semibold">Where you'll sleep</h2>
                <div className="roomDetails border flex justify-between flex-col px-3 py-4 rounded w-[200px] gap-3 mt-5">
               
                    <div className="roomImg"><i className="fa-solid fa-bed text-[1.4rem]" /></div>
                    <div className="roomDetails">
                        <h6 className="font-medium">Bedroom area</h6>
                        <p className="text-[0.9rem] ">2 single beds</p>
                    </div>
                </div>
            </div>

            <div className="whatYouGet border-b py-6">
                <h2 className="text-[1.3rem] font-semibold">What this place offers</h2>
                <ul className="py-3 grid grid-cols-2 gap-y-4 mt-4">
                    <li className="flex gap-3">
                        <div className="freebieIcon"><i class="text-[1.3rem] fa-solid fa-lock" /></div>
                        <div className=""><p>Lock on bedroom door</p></div>
                    </li>

                    <li className="flex gap-3">
                        <div className="freebieIcon"><i class="text-[1.3rem] fa-solid fa-paw" /></div>
                        <div className=""><p>Pets allowed</p></div>
                    </li>

                    <li className="flex gap-3">
                        <div className="freebieIcon"><i class="text-[1.3rem] fa-solid fa-fan" /></div>
                        <div className=""><p>Dryer</p></div>
                    </li>

                    <li className="flex gap-3">
                        <div className="freebieIcon"><i class="text-[1.3rem] fa-solid fa-cart-flatbed-suitcase" /></div>
                        <div className=""><p>Luggage drop-off allowed</p></div>
                    </li>

                    <li className="flex gap-3">
                        <div className="freebieIcon"><i class="text-[1.3rem] fa-brands fa-slideshare" /></div>
                        <div className=""><p>Shared patio or balcony</p></div>
                    </li>

                    <li className="flex gap-3">
                        <div className="freebieIcon"><i class="text-[1.3rem] fa-solid fa-wifi" /></div>
                        <div className=""><p>Wifi</p></div>
                    </li>
                </ul>

                <button className="border border-[#222] font-medium py-2 px-4 rounded my-3">Show all 12 amentities</button>
            </div>

            <div className="calendar">
                
            </div>
          </div>

          <div className="priceDetails border rounded-xl w-[30%] px-4 py-3 h-fit">
            <h3 className="text-[1.3rem] font-medium">${hotel.price}<span className="text-[0.99rem] font-normal">night</span></h3>
            <button className="bg-[#FF385C] text-white py-2 rounded w-full my-3">Reserve</button>
            <p className="text-center text-[0.9rem]">You won't be charged yet</p>

            <ul className="py-6 flex flex-col gap-3 border-b">
              <li>
                <div className="flex justify-between">
                  <p>₹4,435 x 5 nights</p>
                  <p>₹22,174</p>
                </div>
              </li>

              <li>
                <div className="flex justify-between">
                  <p>Airbnb service fee</p>
                  <p>₹900</p>
                </div>
              </li>
            </ul>

            <div className="total py-4 font-semibold">
                <div className="flex justify-between">
                  <p>Total before tax</p>
                  <p>₹22,174</p>
                </div>
            </div>
          </div>
        </div>

        <div className="ratingSectionWrapper">
          <div className="favRating w-[30%] mx-auto text-center my-3">
            <h2 className="text-[7rem] font-semibold">4.8</h2>
            <p className="font-semibold text-[1.5rem]">Guest favourite</p>
            <p className="text-[#666]">One of the most loved homes on Airbnb based on ratings, reviews and reliability</p>
          </div>

          <div className="py-5">
            <ul className="flex justify-around font-medium">
              <li>Overall rating</li>
              <li>Cleanliness</li>
              <li>Accuracy</li>
              <li>Check-in</li>
              <li>Communication</li>
              <li>Location</li>
              <li>Value</li>
            </ul>
          </div>

          <div className="feedbacks">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelPage;
