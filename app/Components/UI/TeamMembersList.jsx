//components
import MemberCard from "./MemberCard/MemberCard";

//images
import Hassan from "../../../public/images/Hassan.png";
import Abdelhamid from "../../../public/images/Abdelhamid.png";
import Attik from "../../../public/images/Attik.png";
import Ayoub from "../../../public/images/Ayoub.png";
import Baroudi from "../../../public/images/Baroudi.png";
import Founani from "../../../public/images/Founani.png";
import Ibtissam from "../../../public/images/Ibtissam.png";
import Imad from "../../../public/images/Imad.png";
import Khalid from "../../../public/images/Khalid.png";
import Malak from "../../../public/images/Malak.png";
import Mehdi from "../../../public/images/Mehdi.png";
import Mouad from "../../../public/images/Mouad.png";
import Salma from "../../../public/images/Salma.png";
import Samira from "../../../public/images/Samira.png";
import Somaya from "../../../public/images/Somaya.png";
import Wissal from "../../../public/images/Wissal.png";
import zakaria from "../../../public/images/zakaria.png";

function generateMembersData() {
  const members = [
    {
      name: "Malak Bourrich",
      Image: Malak,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },
    {
      name: "Abdelhamid ElBannani",
      Image: Abdelhamid,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },
    {
      name: "Ayoub Bahti",
      Image: Ayoub,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },
    {
      name: "Mouad Benlamine",
      Image: Mouad,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },
    {
      name: "mohamed Elfounani",
      Image: Founani,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },
    {
      name: "Imad Aouragh",
      Image: Imad,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },
    {
      name: "Samira Errai",
      Image: Samira,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },
    {
      name: "Khalid Et-tazy",
      Image: Khalid,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },

    {
      name: "Soumaya Arouch",
      Image: Somaya,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },
    {
      name: "Wissal Benider",
      Image: Wissal,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },
    {
      name: "Mohamed Baroudi",
      Image: Baroudi,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },
    {
      name: "Hassan elqadi",
      Image: Hassan,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },
    {
      name: "Ibtissam Massa",
      Image: Ibtissam,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },
    {
      name: "Zakaria Ahrbil",
      Image: zakaria,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },
    {
      name: "Manal Attik",
      Image: Attik,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },
    {
      name: "Mehdi Abouelmouahib",
      Image: Mehdi,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },
    {
      name: "Salma Mahmoud",
      Image: Salma,
      post: "UX/UI Designer",
      description:
        "UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.",
    },
  ];

  return members;
}

export function getMembersList1() {
  const members = generateMembersData();
  return members
    .slice(0, 8)
    .map((member) => (
      <MemberCard
        key={member.name}
        image={member.Image}
        name={member.name}
        post={member.post}
        description={member.description}
      />
    ));
}

export function getMembersList2() {
  const members = generateMembersData();
  return members
    .slice(8)
    .map((member) => (
      <MemberCard
        key={member.name}
        image={member.Image}
        name={member.name}
        post={member.post}
        description={member.description}
      />
    ));
}
