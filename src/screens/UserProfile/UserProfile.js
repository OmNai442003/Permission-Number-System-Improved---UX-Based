import Navbar from '../../components/Navbar/Navbar'
import DisplayCards from '../../components/DisplayCards/DisplayCards'
import './UserProfile.css'
import avtar from "../../assets/images/avtar.jpg"
import { useLocation } from 'react-router-dom';

function UserProfile() {
  const location = useLocation();
  const { userInfo } = location.state;
  return (
    <div>
      <header>
        <Navbar name={userInfo.name} stid={userInfo.id} />
      </header>
      <section>
        <div className='displayName'>
          <div className='profileSection border border-secondary-subtle'>
            <img src={avtar} alt="user profile image" className='userImage' />
            <h1 className='profileText'>{userInfo.name}</h1>
          </div>
        </div>
        <section className='container'>
          <DisplayCards name={"Student Id"} value={userInfo.id} />
          <DisplayCards name={"Major"} value={userInfo.major} />
          <DisplayCards name={"E-mail Id"} value={userInfo.emailId} />
          <DisplayCards name={"SSN"} value={userInfo.ssn} />
          <DisplayCards name={"Course"} value={userInfo.course} />
          <DisplayCards name={"Gender"} value={userInfo.gender} />
          <DisplayCards name={"Bate Of Birth"} value={userInfo.dateOfBirth} />
          <DisplayCards name={"Address"} value={userInfo.address} />
          <DisplayCards name={"Phone Number"} value={userInfo.phoneNumber} />
          <DisplayCards name={"Emergency Contact Number"} value={userInfo.emergencycontactnumber} />
        </section>
      </section>
    </div>
  )
}

export default UserProfile