interface ProductBrandSelectionProps {
  selectBrand: (type: string | undefined) => void;
}

const ProductBrandSelection = ({ selectBrand }: ProductBrandSelectionProps) => {
  const handleChangeValue = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = event.target.value;
    selectBrand(value);
  };

  return (
    <>
      <label htmlFor="filter">Filter: </label>
      <select onChange={handleChangeValue} name="filter" id="">
        <option value="">--Choose a brand--</option>
        <option value="apple">Apple</option>
        <option value="samsung">Samsung</option>
      </select>
    </>
  );
};

export default ProductBrandSelection;
