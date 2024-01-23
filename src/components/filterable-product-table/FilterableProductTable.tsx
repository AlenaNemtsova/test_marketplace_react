import { useState } from "react";
import { productArray } from "../../mock";
import ProductBrandSelection from "../product-brand-selection/ProductBrandSelection";
import ProductTable from "../product-table/ProductTable";
import { type ProductBrandSelectionProps } from "../../types/ProductBrandSelectionProps";

const FilterableProductTable = () => {
  const [selectedBrand, setSelectedBrand] =
    useState<ProductBrandSelectionProps>();

  const handleSelectChange = (value: ProductBrandSelectionProps): void => {
    setSelectedBrand(value);
  };

  return (
    <>
      <ProductBrandSelection onChange={handleSelectChange} />
      {selectedBrand && <h2>{selectedBrand}</h2>}
      <ProductTable rows={productArray} selectedBrand={selectedBrand} />
    </>
  );
};

export default FilterableProductTable;
