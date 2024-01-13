'use client';
import { useState } from 'react';
export default function SearchField() {
  const [stops, setStops] = useState([]);
  async function getStops(formData) {
    const searchString = formData.get('searchString');

    const response = await fetch('/api/stops?query=' + searchString);
    const data = await response.json();

    console.log(JSON.stringify(data));
  }
  return (
    <>
      <form action={getStops}>
        <input name="searchString" />
        <button type="submit">Search</button>
      </form>
      ;
    </>
  );
}
