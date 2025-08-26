import profilePic from './assets/profile-pic.png';

const ProfilePic = ({ className = " ", size = 'medium' }) => {
  const sizeMap = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-20 h-20',
  };
  console.log(className);
  return <div className={className}>

    <img src={profilePic} alt="Profile Pic" className={`${sizeMap[size]}rounded-full object-cover`} />
  </div>;

};


export default ProfilePic;
