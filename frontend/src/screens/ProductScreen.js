import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

import Rating from "../components/Rating";


export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  {
    /*props.match.params.id is exact the value of route that user enter: /product/1 */
  }
  if (!product) {
    {
      /*if product didnt exsist */
    }
    return <div>Product Not Found</div>;
  }
  return (
    <div>
      <Link to="/">Back To Result</Link>
      <div className="row top">
        <div className="col-2">
          {/*occupy 2 collumn for image*/}
          <img className="large" alt={product.name} src={product.image} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>Price : ${product.price}</li>
            <li>
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  {/*next to each other*/}
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  {/*next to each other*/}
                  <div>Status: </div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="danger">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
