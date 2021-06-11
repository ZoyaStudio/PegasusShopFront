import React from "react";
import ImageViewer from "./ImageViewer";
import ProductDetails from "./ProductDetails";
import ProductOptions from "./ProductOptions";
import css from "./styles.css";

function ProductOverview() {
  return (
    <div className={css.productoverview}>
      <div className={css.imageviewer}>
        <ImageViewer />
      </div>
      <div className={css.productoptions}>
        <ProductOptions />
      </div>
      <div className={css.productdetails}>
        <ProductDetails />
      </div>
    </div>
  );
}
export default ProductOverview;
