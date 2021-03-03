import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./css/Product.module.css";

import AddToCartButton from "../components/AddToCartButton";

function Product() {
  const { id } = useParams();

  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    // TODO: Replace this with data from context, when it exists
    setProducts(require("../json/cars.json"));
  }, []);

  useEffect(() => {
    if (products) {
      const index = parseInt(id);
      setProduct(products[index]);
    }
  }, [products]);

  useEffect(() => {
    if (product) {
      setImgSrc(
        `/assets/car-pictures/${product.make}-${product.model}-${product.year}.jpg`
      );
      setPrice(
        product.price.toLocaleString(navigator.language, {
          style: "currency",
          currency: "EUR",
        })
      );
    }
  }, [product]);

  if (!product) return null;

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m12 l8">
          <img className={styles.productImg} src={imgSrc} />
        </div>

        <div className="col s12 m12 l4">
          <table>
            <tbody>
              <tr>
                <td className={styles.tableHeader}>Make</td>
                <td>{product.make}</td>
              </tr>
              <tr>
                <td className={styles.tableHeader}>Model</td>
                <td>{product.model}</td>
              </tr>
              <tr>
                <td className={styles.tableHeader}>Year</td>
                <td>{product.year}</td>
              </tr>
              <tr>
                <td className={styles.tableHeader}>VIN</td>
                <td>{product.vin}</td>
              </tr>
              <tr>
                <td className={styles.tableHeader}>City</td>
                <td>{product.city}</td>
              </tr>
              <tr>
                <td className={styles.tableHeader}>Miles</td>
                <td>{product.miles}</td>
              </tr>
            </tbody>
          </table>

          <p className={`${styles.productPrice} right-align`}>{price}</p>
          <div className={`right`}>
            <AddToCartButton />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h1 className={styles.productTitle}>{product.descShort}</h1>
          <p>{product.descLong}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
