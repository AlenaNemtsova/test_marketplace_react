import { ProductProps } from "../../types/ProductProps";
import styles from "./ProductRow.module.scss";

export type ProductRowProps = {
  row: ProductProps;
};

const ProductRow = ({ row }: ProductRowProps) => {
  return (
    <>
      <tr>
        <td>{row.brand}</td>
        <td>{row.title}</td>
        <td>
          <img className={styles.productImage} src={row.images[0]} alt="" />
        </td>
        <td>{row.price}</td>
      </tr>
    </>
  );
};

export default ProductRow;
