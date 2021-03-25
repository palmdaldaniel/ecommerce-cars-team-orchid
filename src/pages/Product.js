import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";
import AddToCartButton from "../components/AddToCartButton";
import styles from "./css/Product.module.css";

function Product() {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(null);

  // When products list is available in context load the single product we're interested in
  useEffect(() => {
    if (products) {
      const product = products.find((p) => p.vin === id);
      setProduct(product);
    }
  }, [products]);

  // Calculate the price string, based on current locale
  useEffect(() => {
    if (product) {
      setPrice(
        product.price.toLocaleString(navigator.language, {
          style: "currency",
          currency: "SEK",
        })
      );
    }
  }, [product]);

  // If product is not available yet, render nothing
  if (!product) return null;

  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col s12 m12 l8">
          <img className={styles.productImg} src={product.image} />
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

          <div className={styles.buttonStyle}>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col l8">
          <h1 className={styles.productTitle}>{product.descShort}</h1>
          <p>{product.descLong}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;