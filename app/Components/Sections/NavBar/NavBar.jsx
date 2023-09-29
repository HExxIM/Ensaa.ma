import Link from "next/link";

//svgs
import dreamersLogo from "../../../../public/svg/dreamersLogo.svg"

export default function NavBar() {
  const NavElements = [
    {
      title: "Home",
      path: '/',
    },
    {
      title: "News",
      path: '/News',
    },
    {
      title: "Clubs",
      path: '/Clubs',
    },
    {
      title: "Press",
      path: '/Press',
    },
  ];

  const NavList = NavElements.map((Element)=>(
    <Link href={Element.path} key={Element.title}>{Element.title}</Link>
  ))

  return (
    <div>
      <div>{dreamersLogo}</div>
      <div>{NavList}</div>
      <div>

      </div>
    </div>
  )
}
