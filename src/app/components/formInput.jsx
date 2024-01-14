import Form from 'react-bootstrap/Form';

export default function FormInput({ label, id, setStops, setStop, value }) {
  async function getStops(searchString) {
    const response = await fetch('/api/stops?query=' + searchString);
    const data = await response.json();
    setStops(data.data);
  }
  function handleChange(e) {
    console.log(e.target.value);
    setStop(e.target.value);
    getStops(e.target.value);
  }
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        value={value}
        name={label}
        type="search"
        onChange={(e) => handleChange(e)}
        placeholder={label}
        list={id}
      />
    </>
  );
}
