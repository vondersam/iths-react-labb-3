import Form from 'react-bootstrap/Form';

export default function FormInput({ label, id, setStops }) {
  async function getStops(event) {
    const searchString = event.target.value;

    const response = await fetch('/api/stops?query=' + searchString);
    const data = await response.json();
    setStops(data.data);
  }
  return (
    <>
      <Form.Label>From</Form.Label>
      <Form.Control
        type="search"
        onChange={(e) => getStops(e)}
        placeholder={label}
        list={id}
      />
    </>
  );
}
