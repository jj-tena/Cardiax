import './App.css';
import axios from 'axios';

function App() {

  axios.get('http://localhost:8000/api/users/')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
  });
  
  return (
    <h1>
        Hello world
    </h1>
  );
}

export default App;
