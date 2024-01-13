import SearchFields from './components/searchFields';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        <h1>Stockholm Transport Emissions Calculator</h1>
        <SearchFields />
      </div>
    </main>
  );
}
