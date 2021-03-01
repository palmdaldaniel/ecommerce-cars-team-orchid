function Product(props) {

	testProduct = {
		"make": "Chevrolet",
		"model": "Camaro",
		"year": 1973,
		"vin": "1D4PT5GK0BW487259",
		"city": "Santa Rosa",
		"descShort": "in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
		"descLong": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
		"price": 554963,
		"miles": 15432
	};
	
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h1>This is a product</h1>
				</div>
				<div className="col">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ab, amet totam necessitatibus rerum sapiente itaque neque cum tempore quis veritatis doloribus illo cumque. At culpa natus molestias distinctio commodi?</p>
				</div>
			</div>
		</div>
	);
}

export default Product;