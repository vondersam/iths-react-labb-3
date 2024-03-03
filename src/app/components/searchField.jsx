'use client';
import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import { CloseButton } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

export default function SearchField({ label, stops, setStops, setStop }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <AsyncTypeahead
        promptText="Type to search"
        id={label}
        isLoading={isLoading}
        labelKey={(stop) => `${stop.Name}`}
        onSearch={async (query) => {
          setIsLoading(true);
          const response = await fetch(`/api/stops?name=${query}`);
          const data = await response.json();
          setStops(data.data);
          setIsLoading(false);
        }}
        onChange={(selected) => {
          setStop(selected[0]);
        }}
        options={stops}
      />
    </>
  );
}
