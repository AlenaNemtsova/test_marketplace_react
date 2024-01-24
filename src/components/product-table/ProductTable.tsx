import ProductRow from "../product-row/ProductRow";
import { ProductArrayProps } from "../../types/ProductArrayProps";
import styles from "./ProductTable.module.scss";

export type ProductTableProps = {
  rows: ProductArrayProps;
};

const ProductTable = ({ rows }: ProductTableProps) => {
  return (
    <>
      <div className={styles.tableWrapper}>
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
            {rows.map((row, index) => (
              <ProductRow key={index} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
