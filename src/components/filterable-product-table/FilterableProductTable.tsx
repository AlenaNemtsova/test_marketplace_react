import { useState } from "react";
import { productArray } from "../../mock";
import ProductBrandSelection from "../product-brand-selection/ProductBrandSelection";
import ProductTable from "../product-table/ProductTable";

const FilterableProductTable = () => {
  //   const handleSelectChange = (value: ProductBrandSelectionProps): void => {
  //     setSelectedBrand(value);
  //   };

  return (
    <>
      <ProductBrandSelection />
      <ProductTable rows={productArray} />
    </>
  );
};

export default FilterableProductTable;
