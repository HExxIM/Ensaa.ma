import styles from './page.module.css';
import Image from 'next/image';

//components
import EmptyState from "../Components/Sections/EmptyState/EmptyState";
import MemberCard from '../Components/UI/MemberCard/MemberCard';

//images 
import shapeBlur from "../../public/images/shapeBlur.webp";
import Hassan from '../../public/images/Hassan.png';
import Abdelhamid from '../../public/images/Abdelhamid.png';
import Attik from '../../public/images/Attik.png';
import Ayoub from '../../public/images/Ayoub.png';
import Baroudi from '../../public/images/Baroudi.png';
import Founani from '../../public/images/Founani.png';
import Ibtissam from '../../public/images/Ibtissam.png';
import Imad from '../../public/images/Imad.png';
import Khalid from '../../public/images/Khalid.png';
import Malak from '../../public/images/Malak.png';
import Mehdi from '../../public/images/Mehdi.png';
import Mouad from '../../public/images/Mouad.png';
import Salma from '../../public/images/Salma.png';
import Samira from '../../public/images/Samira.png';
import Somaya from '../../public/images/Somaya.png';
import Wissal from '../../public/images/Wissal.png';
import zakaria from '../../public/images/zakaria.png';

export default function page() {
  const members = [
    {
      name:'Hassan elqadi',
      Image: Hassan,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Mouad,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Founani,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Ayoub,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Ibtissam,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Baroudi,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Attik,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: zakaria,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Imad,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Khalid,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Malak,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Wissal,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Samira,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Mehdi,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Somaya,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Abdelhamid,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Salma,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
  ];

  const membersList1 = members.slice(0, 8).map((member)=>(
    <MemberCard 
      image={member.Image} 
      name={member.name} 
      post={member.post} 
      description={member.description}
    />
  ));
  const membersList2 = members.slice(8).map((member)=>(
    <MemberCard 
      image={member.Image} 
      name={member.name} 
      post={member.post} 
      description={member.description}
    />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.cardsList1}>
          {membersList1}
        </div>
        <div className={styles.cardsList2}>
          {membersList2}
        </div>
      </div>
      <Image src={shapeBlur} className={styles.blurBottom}></Image>
      <Image src={shapeBlur} className={styles.blurTop}></Image>
    </div>
  )
}
