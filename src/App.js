import './styles';
import {DataProvider} from './Data.Context';
import BidComponent from './components/BidComponent';
import BalComponent from './components/BalComponent';
import PlayerInfo from './components/PlayerInfo';


function App() {
  return (
    <div className="App">
      <DataProvider>

          <section><BidComponent/></section>
          <section><PlayerInfo/></section>
          <section><BalComponent/></section>

      </DataProvider>
    </div>
  );
}

export default App;
