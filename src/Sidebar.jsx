import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiViewDashboard } from '@mdi/js';
import { mdiHome } from '@mdi/js';
import { mdiCardAccountDetails } from '@mdi/js';
import { mdiMessageReply } from '@mdi/js';
import { mdiHistory } from '@mdi/js';
import { mdiCalendarCheckOutline } from '@mdi/js';
import { mdiAccountGroup } from '@mdi/js';
import { mdiCog } from "@mdi/js";
import { mdiShieldCheck } from '@mdi/js';
import { mdiHelpCircle } from '@mdi/js';

const Sidebar = ({ className = '' }) => {
  const [iconSize, setIconSize] = useState(1.3);
  return <div className={`pl-10 pr-20 py-10 font-semibold text-xl text-white bg-sidebar-colour flex flex-col justify-start items-start gap-20 ${className}`}>
    <div className='flex items-center'>
      <Icon path={mdiViewDashboard} color='white' size={3} />
      <p className='text-3xl text-white font-[1000]'>Dashboard</p>
    </div>

    <div className='flex flex-col gap-5'>
      <div className='flex gap-2 items-center'>
        <Icon path={mdiHome} size={iconSize} /> <p>Home</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Icon path={mdiCardAccountDetails} size={iconSize} /><p>Profile</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Icon path={mdiMessageReply} size={iconSize} /> <p>Messages</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Icon path={mdiHistory} size={iconSize} /> <p>History</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Icon path={mdiCalendarCheckOutline} size={iconSize} /> <p>Tasks</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Icon path={mdiAccountGroup} size={iconSize} /> <p>Community</p>
      </div>
    </div>

    <div className='flex flex-col gap-5'>
      <div className='flex gap-2 items-center'>
        <Icon path={mdiCog} size={iconSize} /> <p>Setting</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Icon path={mdiHelpCircle} size={iconSize} /> <p>Support</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Icon path={mdiShieldCheck} size={iconSize} /> <p>Privacy</p>
      </div>
    </div>
  </div>
}


export default Sidebar;
