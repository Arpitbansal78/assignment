
import './App.css';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateAirports } from './features/Search/Airports.slice';
import { Search } from './features/Search';

function App() {

  const dispatch = useDispatch();

  const fetchAirports = useCallback(async () => {
    const response = await fetch(`${process.env.PUBLIC_URL}/airports.json`);
    const data = await response.json()
    dispatch(updateAirports(data))
  }, []);

  useEffect(() => {
    fetchAirports();
  }, [])

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <Search />
    </div>
  );
}

export default App;
