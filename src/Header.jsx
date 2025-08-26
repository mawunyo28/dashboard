import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { mdiBellRingOutline } from "@mdi/js";
import profilePic from './assets/profile-pic.png';


const ProfilePic = ({ className = " ", size = 'medium' }) => {
  const sizeMap = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-20 h-20',
  }
  console.log(className);
  return <div className={className}>

    <img src={profilePic} alt="Profile Pic" className={`${sizeMap[size]}rounded-full object-cover`} />
  </div>

}

const Button = ({ className, children }) => {
  return <button className={`text-[1.5rem] bg-button-colour  px-8 py-1 text-white  rounded-full shadow-lg cursor-pointer ${className}`}>
    {children}
  </button>
}


const Header = ({ className }) => {
  return <div className={`shadow-md bg-white flex flex-col gap-10  px-8 py-4 ${className}`}>

    {/* Top */}
    <div className='flex items-center justify-between'>
      {/* Left Side */}
      <div className='flex justify-between  items-center'>
        <Icon path={mdiMagnify} size={1} />
        <div className='w-96 h-8 ml-8 bg-slate-200  rounded-full'></div>
      </div>

      {/* Right Side */}
      <div className='flex justify-between items-center'>
        <Icon path={mdiBellRingOutline} size={1} />
        <ProfilePic className='mx-8' />
        <div className='font-bold text-center'>Mawunyo Hafoba</div>
      </div>
    </div>

    {/* Bottom */}
    <div className=" flex justify-between items-center">
      <div className='flex'>
        <ProfilePic className='mr-6' size='large' />
        <div className='flex flex-col '>
          <p className='text-lg font-semibold'>Hi there,</p>
          <p className='font-bold text-center text-3xl'>Mawunyo Hafoba (@mawunyo28)</p>
        </div>
      </div>

      <div className='flex justify-between gap-5'>
        <Button>Next</Button>
        <Button>Upload</Button>
        <Button>Share</Button>
      </div>
    </div>

  </div>
}


export default Header;
