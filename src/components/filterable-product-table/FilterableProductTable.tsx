import { useState } from "react";
import { productArray } from "../../mock";
import ProductBrandSelection from "../product-brand-selection/ProductBrandSelection";
import ProductTable from "../product-table/ProductTable";
import { ProductBrandSelectionProps } from "../../types/ProductBrandSelectionProps";

const FilterableProductTable = () => {
  const [filteredRows, setRows] = useState(productArray);

  const handleSelectBrand = (value: ProductBrandSelectionProps) => {
    if (value) {
      setRows([
        ...productArray.filter((row) => {
          return Object.values(row).join("").toLowerCase().includes(value);
        }),
      ]);
    } else {
      setRows(productArray);
    }
  };

  return (
    <>
      <ProductBrandSelection selectBrand={handleSelectBrand} />
      <ProductTable rows={filteredRows} />
    </>
  );
};

export default FilterableProductTable;
