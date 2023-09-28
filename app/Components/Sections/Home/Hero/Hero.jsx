import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";
//svgs
import moonLogo from "../../../../../public/svg/moonLogo.svg";
import playIcon from "../../../../../public/svg/playIcon.svg";
import discordLogo from "../../../../../public/svg/discordLogo.svg";
import instaLogo from "../../../../../public/svg/instaLogo.svg";
import XLogo from "../../../../../public/svg/XLogo.svg";
import facebookLogo from "../../../../../public/svg/facebookLogo.svg";

export default function HeroSection() {
	return (
		<div className={styles.Hero_container}>
			<div className={styles.Hero_left}>
				<div className={styles.Hero_texts}>
					<h1>Together we</h1>
					<h1>can make it</h1>
					<h1>real!</h1>
					<p className={styles.description}>
						We assure u a better environment at ENSAA.
					</p>
					<div className={styles.button_promo}>
						<Link href="/" className={styles.button}>
							<Image src={playIcon} alt="play" className={styles.play}></Image>
							<p>watch a video</p>
						</Link>
						<p>25th promotion</p>
					</div>
				</div>
				<div className={styles.social_media}>
					<Link href="/">
						<Image src={discordLogo} height="30" width="30"></Image>
					</Link>
					<Link href="/">
						<Image src={instaLogo} height="30" width="30"></Image>
					</Link>
					<Link href="/">
						<Image src={XLogo} height="30" width="30"></Image>
					</Link>
					<Link href="/">
						<Image src={facebookLogo} height="30" width="30"></Image>
					</Link>
				</div>
			</div>

			<div className={styles.Hero_right}>
				<Image
					src={moonLogo}
					alt="moonlogo"
					height="645"
					width="765"
					className={styles.moonLogo}
				></Image>
			</div>
		</div>
	);
}
