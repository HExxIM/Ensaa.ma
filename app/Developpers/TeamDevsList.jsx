//components
import MemberCard from "../Components/UI/MemberCard";
import { devs } from "../Database/Developpes";

//images

export default function TeamDevsList() {
  return devs.map((dev) => (
    <MemberCard
      key={dev.name}
      image={dev.Image}
      name={dev.name}
      post={dev.post}
      linkedin={dev.linkedin}
      alt={dev.name}
      description={dev.description}
    />
  ));
}
