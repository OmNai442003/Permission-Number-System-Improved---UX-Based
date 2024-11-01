import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import DisplayCards from '../../components/DisplayCards/DisplayCards'
import './UserProfile.css'
import avtar from "../../assets/images/avtar.jpg"

function UserProfile() {

  useEffect

  return (
    <div>
      <header>
        <Navbar name={"Om"} stid={"302285569"} />
      </header>
      <section>
        <div className='displayName'>
         <div className='profileSection border border-secondary-subtle'>
          <img src={avtar} alt="user profile image" className='userImage' />
          <h1 className='profileText'>OM NAI</h1>
         </div>
        </div>
        <section className='container'>
          <DisplayCards name={"Student Id"} value={"302285569"}/>
          <DisplayCards name={"E-mail Id"} value={"om2003@mail.fresnostate.edu"}/>
          <DisplayCards name={"SSN"} value={"-"}/>
          <DisplayCards name={"Course"} value={"Masters Computer Science"}/>
          <DisplayCards name={"Gender"} value={"Male"}/>
          <DisplayCards name={"Bate Of Birth"} value={"01/01/1901"}/>
          <DisplayCards name={"Address"} value={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, porro."}/>
          <DisplayCards name={"Phone Number"} value={"(012) 345 6789"}/>
          <DisplayCards name={"Emergency Contact Number"} value={"(987) 654 3210"}/>
        </section>
      </section>
    </div>
  )
}

export default UserProfile