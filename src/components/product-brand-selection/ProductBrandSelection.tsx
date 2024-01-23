interface ProductBrandSelectionProps {
  onChange: () => void;
}

const ProductBrandSelection = ({ onChange }: ProductBrandSelectionProps) => {
  const selectChange = (
    event: React.ChangeEventHandler<HTMLSelectElement>
  ): void => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <>
      <select onChange={selectChange} name="" id="" defaultValue="none">
        <option value="none" disabled>
          Choose a brand
        </option>
        <option value="apple">Apple</option>
        <option value="samsung">Samsung</option>
      </select>
    </>
  );
};

export default ProductBrandSelection;
