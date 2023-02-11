import React from 'react'
import './listing.css'

// imported icons ===========>
import {AiFillHeart} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'

// imported Images ===========>
import img from '../../../Assets/image (1).png'
import img1 from '../../../Assets/image (9).png'
import img2 from '../../../Assets/image (8).png'
import img3 from '../../../Assets/image (10).png'
import user1 from '../../../Assets/user (1).png'
import user2 from '../../../Assets/user (2).png'
import user3 from '../../../Assets/user (3).png'
import user4 from '../../../Assets/user (4).png'

const Listing = () => {
  return (
    <div className='lisitingSection'>

      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className="icon"/>
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon"/>
          <img src={img} alt="Image Name" />
          <h3>Soap</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon"/>
          <img src={img1} alt="Image Name" />
          <h3>Toothpaste</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon"/>
          <img src={img2} alt="Image Name" />
          <h3>Face Mask</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon"/>
          <img src={img3} alt="Image Name" />
          <h3>Skin Whitening</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className="icon"/>
             </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Image" />
              <img src={user2} alt="User Image" />
              <img src={user3} alt="User Image" />
              <img src={user4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                1223 product sold <br />
                <small>
                  25 Sellers <span className="date">5 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>


        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className="icon"/>
             </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user3} alt="User Image" />
              <img src={user1} alt="User Image" />
              <img src={user4} alt="User Image" />
              <img src={user2} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                3512 Product sold <br />
                <small>
                  19 Sellers <span className="date">30 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing