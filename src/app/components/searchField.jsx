'use client';
import { useState } from 'react';

import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

export default function SearchField({ label, stops, setStops, setStop }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <AsyncTypeahead
        className="inputWithButton"
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
      >
        {({ onClear, selected }) => (
          <div className="rbt-aux clearButton">
            {!!selected.length && <CloseButton onClick={onClear} />}
          </div>
        )}
      </AsyncTypeahead>
    </>
  );
}
