import AppContainer from "./styled";
import Carousel from "./Carousel";
import data from './data'

function App() {
  return (
    <AppContainer>
      <Carousel width={1000} data={data} />
    </AppContainer>
  );
}

export default App;
