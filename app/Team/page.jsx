import styles from './page.module.css'

//components
import EmptyState from "../Components/Sections/EmptyState/EmptyState";
import MemberCard from '../Components/UI/MemberCard/MemberCard';

//images 
import Hassan from '../../public/images/Hassan.png'

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
      Image: Hassan,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Hassan,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Hassan,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Hassan,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Hassan,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Hassan,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Hassan,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Hassan,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Hassan,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Hassan,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Hassan,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Hassan,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Hassan,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Hassan,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Hassan,
      post: 'UX/UI Designer',
      description: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    },
    {
      name:'Hassan elqadi',
      Image: Hassan,
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
      <div className={styles.cardsList}>
        {membersList1}
      </div>
      <div className={styles.cardsList}>
        {membersList2}
      </div>
    </div>
  )
}
