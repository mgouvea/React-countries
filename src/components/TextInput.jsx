export default function TextInput({
  labelDescription = 'Descrição do Label',
  placeholderDescription = 'Descrição do placeholder',
  id = 'id_text_input',
  inputValue,
  onInputChange = null,
}) {
  const handleInputChange = ({ currentTarget }) => {
    const newValue = currentTarget.value;
    onInputChange(newValue);
  };

  return (
    <div className="grid grid-cols-1 mb-3">
      <label htmlFor={id} className="block">
        <span className="text-gray-700">{labelDescription}</span>
      </label>
      <input
        className="border border-gray-900 p-1 my-1 md:w-full"
        type="text"
        id={id}
        autoFocus
        placeholder={placeholderDescription}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
