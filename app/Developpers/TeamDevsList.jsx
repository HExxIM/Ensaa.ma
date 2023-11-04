//components
import MemberCard from "../Components/UI/MemberCard";
import { devs } from "../Database/TeamDevsList";

//images

export default function TeamDevsList() {
  return devs.map((dev) => (
    <MemberCard
      key={dev.name}
      image={dev.Image}
      name={dev.name}
      post={dev.post}
      alt={dev.name}
      description={dev.description}
    />
  ));
}
