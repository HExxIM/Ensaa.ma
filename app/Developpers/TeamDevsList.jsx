//components
import DeveloppedCard from "./DeveloppedCard";
import { devs } from "../Database/Developpes";

//images

export default function TeamDevsList() {
  return devs.map((dev) => (
    <DeveloppedCard
      key={dev.name}
      image={dev.Image}
      name={dev.name}
      post={dev.post}
      alt={dev.name}
      description={dev.description}
    />
  ));
}
