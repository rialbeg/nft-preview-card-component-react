import cardImg from '../../assets/images/image-equilibrium.jpg';
import avatarImg from '../../assets/images/image-avatar.png';
import ethereumIcon from '../../assets/images/icon-ethereum.svg';
import clockIcon from '../../assets/images/icon-clock.svg';
import viewIcon from '../../assets/images/icon-view.svg';

import styles from './styles.module.scss';

export function PreviewCard() {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardContent}>
				<div className={styles.overlayContainer}>
					<img src={cardImg} alt="card image" />
					<div className={styles.overlay}>
						<img className={styles.eye} src={viewIcon} alt="view icon" />
					</div>
				</div>
				<h2 className={styles.title}>Equilibrium #3429</h2>
				<p className={styles.subtitle}>Our Equilibrium collection promotes balance and calm.</p>
				<div className={styles.infoRow}>
					<div className={styles.ethereum}>
						<img src={ethereumIcon} alt="ethereum icon" />
						<p>0.041 ETH</p>
					</div>
					<div className={styles.days}>
						<img src={clockIcon} alt="ethereum icon" />
						<p>3 days left</p>
					</div>
				</div>
				<hr className={styles.divider} />
				<div className={styles.avatar}>
					<img src={avatarImg} alt="avatar img" />
					<p>Creation of <span>Jules Wyvern</span></p>
				</div>
			</div>
		</div>
	);
}