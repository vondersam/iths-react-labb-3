'use client';
import { useState } from 'react';

import Search from './components/search';
import TripList from './components/tripList';

export default function Home() {
  const [routes, setRoutes] = useState();
  return (
    <>
      <Search setRoutes={setRoutes} />
      <TripList routes={routes} />
    </>
  );
}
