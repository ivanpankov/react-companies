import React, { useEffect } from 'react';
import { getCompanies } from '../api/companies';

function App() {
  useEffect(() => {
    getCompanies().then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <div>
      Application
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </div>
  );
}

export default App;
