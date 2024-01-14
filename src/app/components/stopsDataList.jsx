import Form from 'react-bootstrap/Form';

export default function stopsDataList({ id, stops, setStops, setStop, value }) {
  function handleClick(event) {
    console.log(event.target.innerText);
    setStop(event.target.innerText);
    setStops([]);
  }
  return (
    <>
      {stops.length > 0 && (
        <Form.Select
          form={id}
          htmlSize={stops.length}
          onClick={(e) => handleClick(e)}
        >
          {stops.map((stop) => (
            <option key={stop.Name} value={stop}>
              {stop.Name}
            </option>
          ))}
        </Form.Select>
      )}
    </>
  );
}
