import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import { listProducts } from "../actions/productActions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);/*useSelector to get state from store */
  const { loading, error, products } = productList;

  useEffect(() => {
      dispatch(listProducts());/*listProduct is an action in redux */
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox varriant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
