import styles from './css/Herobanner.module.css'

const Herobanner = () => {
	return (
		<div className={styles.heroContainer}>
		
		<div className={styles.videoContainer}>
		<video autoPlay loop muted>
        <source src="./hero.mp4" type="video/mp4"/>
        </video> 
		</div>

				<h1>A sustainable way to access freedom</h1>
				<p>Find your car today</p>	
		</div>
	);
}

export default Herobanner;
