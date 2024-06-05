import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForSnacks = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/snacks`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let snackData = await response.json();
        setData(snackData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForSnacks();
  }, []);

  return (
    <>
        <div>
        {loading && (
          <div>Loading snacks...</div>
        )}
        {error && <div>{error}</div>}

        <ul>
          {data &&
            data.map(({ _id, snackName, details}) => (
              <li
                key={_id}
               >
                  {snackName}: {details.flavour}, {details.weight}
              </li>
            ))}
        </ul>
      </div>
    </>
  )
};

export default App;