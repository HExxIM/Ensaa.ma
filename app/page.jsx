//Components
import HeroSection from "./Components/Sections/Home/Hero/Hero";
import InfosContainer from "./Components/UI/InfosContainer/InfosContainer";

//svg
import EnsaLogo from "../public/svg/EnsaLogo.svg";
import ADELogo from "../public/svg/ADELogo.svg";

export default function Home() {
	const sectionInfos = [
		{
			title:'Ensa agadir',
			logo: EnsaLogo,
			text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.',
		},
		{
			title:'Dreamers',
			logo: ADELogo,
			text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.',
		},
		{
			title:'ADE',
			logo: ADELogo,
			text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.',
		},
	]
	return (
		<>
			{/* Hero */}
			<HeroSection />
			{/* ensa */}
			<InfosContainer title={sectionInfos[0].title} text={sectionInfos[0].text} logo={sectionInfos[0].logo}/>
			{/* dreamers */}
			<InfosContainer title={sectionInfos[1].title} text={sectionInfos[1].text} logo={sectionInfos[1].logo}/>
			{/* ade */}
			<InfosContainer title={sectionInfos[2].title} text={sectionInfos[2].text} logo={sectionInfos[2].logo}/>
			{/* clubs */}
		</>
	);
}
