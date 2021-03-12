import styles from './css/Herobanner.module.css'

const Herobanner = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.videoContainer}>
				<video autoPlay loop muted>
						<source src="./hero.mp4" type="video/mp4"/>
				</video> 
			</div>
			<div className={styles.textContainer}>
				<span>Our way to access freedom</span>
				<p>Find your car today</p>	
			</div>
		</div>
	);
}

export default Herobanner;
