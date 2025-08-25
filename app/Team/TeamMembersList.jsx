//components
import MemberCard from "../Components/UI/MemberCard";
import { membersDreamers, membersIgniters } from "../Database/memberTeam";

function TeamMembers1() {
  return membersIgniters.map((member) => (
    <MemberCard
      key={member.name}
      image={member.Image}
      name={member.name}
      post={member.post}
      alt={member.name}
      description={member.description}
      linkedin={member.linkedin}
    />
  ));
}

function TeamMembers2() {
  return membersDreamers.map((member) => (
    <MemberCard
      key={member.name}
      image={member.Image}
      name={member.name}
      post={member.post}
      alt={member.name}
      description={member.description}
      linkedin={member.linkedin}
    />
  ));
}

export { TeamMembers1, TeamMembers2 };
