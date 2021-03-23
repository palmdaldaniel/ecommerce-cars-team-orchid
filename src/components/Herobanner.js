import styles from './css/Herobanner.module.css'
import SearchBar from './Searchbar.js';

const Herobanner = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.imgContainer}>
				<img id="img" src="https://cdn.pixabay.com/photo/2017/08/16/17/25/car-2648563_960_720.jpg"></img> 
			</div>
			<div className={styles.textContainer}>
				<div className={styles.textBg}>
					{/* {<span>Our way to access freedom</span>} */}
					<p>Find your car today</p>	
					<SearchBar/>
				</div>
			</div>
		</div>
	);
}

export default Herobanner;
