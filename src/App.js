import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import './App.css';
import Category from './components/category';
import NavBar from './components/navBar';
import store from './components/reducers/store';


function App() {
 

  return (
    <Provider store={store}>
      <div>
      <NavBar/>
        <Container>
        <Category/>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
