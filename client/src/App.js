import styled, {ThemeProvider} from 'styled-components'
import {darkTheme} from './utils/Theme'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Createpost from './pages/Createpost.jsx';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';




const Container = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  background: ${({theme})=> theme.bg};
  color: ${({theme})=> theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all .2s ease;


`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 3;
  justify-content: space-between;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element = {<HomePage/>} />
              <Route path='/post' element = {<Createpost/>}/>
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
