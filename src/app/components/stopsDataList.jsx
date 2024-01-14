import Form from 'react-bootstrap/Form';

export default function stopsDataList({ stops, setStops, setStop }) {
  function handleClick(event) {
    const stopObj = JSON.parse(event.target.value);
    setStop(stopObj);
    setStops([]);
  }
  return (
    <>
      {stops.length > 0 && (
        <Form.Select htmlSize={stops.length} onClick={(e) => handleClick(e)}>
          {stops.map((stop) => (
            <option key={stop.Name} value={JSON.stringify(stop)}>
              {stop.Name}
            </option>
          ))}
        </Form.Select>
      )}
    </>
  );
}
