import Dropdown from 'react-bootstrap/Dropdown';

export default function stopsDataList({ id, stops }) {
  return (
    <datalist id={id}>
      {stops.map((stop) => (
        <option key={stop.Name} value={stop.Name}>
          {stop.Name}
        </option>
      ))}
    </datalist>
  );
}
