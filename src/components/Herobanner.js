import styles from './css/Herobanner.module.css'

const Herobanner = () => {
	return (
		<div className={styles.heroContainer}>
			<img className={styles.herobannerImg} src="/image.jpg"></img>
			<h1>A catchy headline.</h1>
		</div>
	);
}

export default Herobanner;
