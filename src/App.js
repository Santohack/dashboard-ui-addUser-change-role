import Container from '@mui/material/Container'
import HomeScreen from './pages/homeScreen/HomeScreen';

function App() {
  return (
    <div style={{backgroundColor:'#ffffff',color:'#8e8f9c'}}>
    <Container maxWidth="xl">
      <HomeScreen />
    </Container>
    </div>
  
  );
}

export default App;
