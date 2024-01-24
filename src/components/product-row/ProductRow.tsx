import { ProductProps } from "../../types/ProductProps";
import styles from "../product-table/ProductTable.module.scss";

export type ProductRowProps = {
  row: ProductProps;
};

const ProductRow = ({ row }: ProductRowProps) => {
  return (
    <>
      <tr className={styles.table__bodyRow}>
        <td className={styles.table__data}>{row.brand}</td>
        <td className={styles.table__data}>{row.title}</td>
        <td className={styles.table__data}>
          <img
            className={styles.table__productImage}
            src={row.images[0]}
            alt=""
          />
        </td>
        <td className={styles.table__data}>{row.price}</td>
      </tr>
    </>
  );
};

export default ProductRow;
