
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { Header, Homepage, Quiz } from './components/index'

/* <div className="bg-black">
  <p className="px-8 py-8 text-white">Hola Mundo</p>
</div> */

const App = () => {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box my={4}>
          <Header/> 
            <Routes>
              <Route exact path="/" element={<Homepage/>}></Route> 
              <Route path="/quiz" element={<Quiz/>}></Route>
            </Routes>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
