import ProductRow from "../product-row/ProductRow";
import { ProductArrayProps } from "../../types/ProductArrayProps";
import styles from "./ProductTable.module.scss";

import { useState } from "react";

export type ProductTableProps = {
  rows: ProductArrayProps;
};

const ProductTable = ({ rows }: ProductTableProps) => {
  const [filteredRows, setRows] = useState(rows);

  const filter = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value;

    if (value) {
      setRows([
        ...rows.filter((row) => {
          return Object.values(row).join("").toLowerCase().includes(value);
        }),
      ]);
    } else {
      setRows(rows);
    }
  };

  return (
    <>
      {/* test select */}
      <select onChange={filter} name="filter" id="">
        <option value="">Select-test</option>
        <option value="apple">Apple</option>
        <option value="samsung">Samsung</option>
      </select>
      {/* test select */}

      <table className={styles.table}>
        <thead className={styles.table__head}>
          <tr>
            <th className={styles.table__headItem}>Brand</th>
            <th className={styles.table__headItem}>Title</th>
            <th className={styles.table__headItem}>Image</th>
            <th className={styles.table__headItem}>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row, index) => (
            <ProductRow key={index} row={row} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
