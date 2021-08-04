import Item from './Item';

export default function Country({
  children: country = null,
  onCountryClick,
  isVisited = false,
}) {
  if (!country) {
    return <div>Impossível renderizar o país</div>;
  }

  const { id, flag, name, capital, region, population, area } = country;
  const demographicDensity = population / area;

  const handleCountryClick = () => {
    if (onCountryClick) {
      onCountryClick(id);
    }
  };

  const isVisitedClassName = isVisited ? 'bg-green-200' : 'bg-gray-100';

  return (
    <div
      className={`${isVisitedClassName} cursor-pointer border border-gray-300 p-2 m-2 flex flex-row items-center space-x-2  rounded-2xl`}
      onClick={handleCountryClick}
    >
      <img className="rounded-2xl w-20 m-2" src={flag} alt={name} />
      <ul>
        <li>
          <Item label="Nome:">{name}</Item>
        </li>
        <li>
          <Item label="Capital:">{capital}</Item>
        </li>
        <li>
          <Item label="Região:">{region}</Item>
        </li>
        <li>
          <Item label="População:">{population}</Item>
        </li>
        <li>
          <Item label="Área:">{area}</Item>
        </li>
        <li>
          <Item label="Densidade demográfica:">{demographicDensity}</Item>
        </li>
      </ul>
    </div>
  );
}
