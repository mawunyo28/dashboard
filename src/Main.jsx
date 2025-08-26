import { mdiStarPlusOutline } from '@mdi/js';
import { Icon } from '@mdi/react';
import { mdiEyePlusOutline } from '@mdi/js';
import { mdiSourceFork } from '@mdi/js';
import ProfilePic from './ProfilePic.jsx'

const Card = () => {
  return <div className='  border-l-10 border-orange-300 bg-white shadow-xl px-4 py-6 rounded-2xl' >
    <p className='text-2xl font-semibold  text-gray-700'>Super Cool Project</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse omnis, eum itaque dignissimos, deserunt fuga sequi voluptatibus, quas libero soluta cum temporibus accusamus eius! Voluptate, inventore. Illo, odio ipsa!</p>
    <div className='flex justify-end gap-4'>
      <Icon className='cursor-pointer' path={mdiStarPlusOutline} size={1} />
      <Icon className='cursor-pointer' path={mdiEyePlusOutline} size={1} />
      <Icon className='cursor-pointer' path={mdiSourceFork} size={1} />

    </div>
  </div>
}

const AnnouncementCard = () => {
  return <div className='flex flex-col gap-4'>
    <p className='text-2xl font-semibold'>Announcement</p>
    <div className="px-8 flex flex-col gap-4 justify-center items-center py-4 shadow-2xl bg-white rounded-2xl">
      <AnnouncementItem />
      <AnnouncementItem />
      <AnnouncementItem />
    </div>

  </div>
}

const AnnouncementItem = () => {
  return <div className='flex flex-col gap-1'>
    <p className='font-semibold text-lg'>Site Maintenance</p>
    <p className='font-thin text-md text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro impedit modi?
    </p>
    <div className='border-b-1 border-zinc-500'></div>
  </div>
}

const TrendingCard = () => {
  return <div className='flex flex-col gap-4'>
    <p className='text-2xl font-semibold'>Trending</p>
    <div className='flex flex-col bg-white shadow-xl px-8 py-4 rounded-2xl gap-4'>
      <TrendingItem />
      <TrendingItem />
      <TrendingItem />
    </div>

  </div>
}

const TrendingItem = () => {
  return <div className='flex gap-4'>
    <ProfilePic />
    <div className='flex flex-col'>
      <p className='font-semibold'>@mawunyo28</p>
      <p className='font-thin text-lg text-gray-700'>Vibe Coder</p>
    </div>
  </div>
}

const Main = ({ cards, className = "" }) => {
  console.log(cards);
  return <div className={`grid grid-cols-[6fr_2fr]  gap-10 px-10 py-8 ${className}`}>
    <div className='col-start-1 col-end-2 flex flex-col  gap-4'>
      <p className='text-2xl font-semibold'>Your Projects</p>
      <div className='grid grid-cols-2 grid-rows-2 gap-10'>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>

    <div className='col-start-2 col-end-3 flex flex-col  gap-10 '>
      <AnnouncementCard />
      <TrendingCard />
    </div>
  </div>
}


export default Main;
