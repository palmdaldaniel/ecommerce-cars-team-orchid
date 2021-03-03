import styles from './css/Herobanner.module.css'

const Herobanner = () => {
	return (
		<div className={styles.heroContainer}>
			<img className={styles.herobannerImg} src="https://cdn.pixabay.com/photo/2017/07/31/17/13/green-2559072_960_720.jpg"></img>
			<h1>A catchy headline.</h1>
		</div>
	);
}

export default Herobanner;
