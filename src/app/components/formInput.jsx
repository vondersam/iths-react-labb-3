import Form from 'react-bootstrap/Form';

export default function FormInput({ label, setStops, setStop, stop }) {
  async function getStops() {
    const response = await fetch('/api/stops?query=' + stop.Name);
    const data = await response.json();
    setStops(data.data);
  }
  function handleChange(e) {
    setStop({ Name: e.target.value });
    getStops();
  }
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        value={stop.Name}
        type="search"
        onChange={(e) => handleChange(e)}
        placeholder={label}
      />
    </>
  );
}
