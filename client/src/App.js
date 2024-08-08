import './App.css';
import {React} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import axios from "axios";
import MinimalBlogCard from './minimalblogcard';

function App() {
  // const [sampleState, setSampleState] = useState('');

  // async function fetchData(){
  //   const axiosURL = "http://localhost:3001/";
  //   axios.get(`${axiosURL}`, {
  //   }).then(response => {
  //     if (response.status === 200) {
  //       setSampleState(response.data)
  //     }
  //   })
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MinimalBlogCard/>}>  
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
