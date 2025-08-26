import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { mdiBellRingOutline } from "@mdi/js";
import Button from './Button';
import ProfilePic from './ProfilePic'
import { useState } from "react";



const Header = ({ className }) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }
  return <div className={`shadow-md bg-white flex flex-col gap-10  px-8 py-4 ${className}`}>

    {/* Top */}
    <div className='flex items-center justify-between'>
      {/* Left Side */}
      <div className='flex justify-between  items-center'>
        <Icon path={mdiMagnify} size={1} />
        <input className='w-[45rem] h-8 ml-8 bg-slate-200 px-5  rounded-full' type='text' value={inputValue} onChange={handleChange} />
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
          <p className='font-bold text-3xl'>Mawunyo Hafoba (@mawunyo28)</p>
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
