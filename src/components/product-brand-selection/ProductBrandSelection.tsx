interface ProductBrandSelectionProps {
  onChange: (type: string | undefined) => void;
}

const ProductBrandSelection = ({ onChange }: ProductBrandSelectionProps) => {
  const filter = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <>
      <label htmlFor="filter">Filter: </label>
      <select onChange={filter} name="filter" id="">
        <option value="">--Choose a brand--</option>
        <option value="apple">Apple</option>
        <option value="samsung">Samsung</option>
      </select>
    </>
  );
};

export default ProductBrandSelection;
