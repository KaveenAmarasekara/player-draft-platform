import './styles';
import {DataProvider} from './Data.Context';
import BidComponent from './components/BidComponent';
import BalComponent from './components/BalComponent';
import PlayerInfo from './components/PlayerInfo';


// function App() {
//   return (
//     <div className="App">
//       <DataProvider>

//           <section><BidComponent/></section>
//           <section><PlayerInfo/></section>
//           <section><BalComponent/></section>

//       </DataProvider>
//     </div>
//   );
// }

// export default App;


function App(){
  const appStyle = {
    display: 'flex',
    gap: '2em',
    padding: '0.8em',
    height: '100vh', // Full screen height
    width: '100vw', // Full screen width
    backgroundImage: 'linear-gradient(110deg, #020024 0%, #090979 35%, #00d4ff 100%)',
  };

  const sectionStyle = (flexValue) => ({
    flex: flexValue, // Controls the width ratio
    height: '100%', // Full height of the container
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(26, 19, 23)',
    fontSize: '1.5em',
    borderRadius: '1.2em',
    padding: '.4em',
    
  });

  return (
    <div style={appStyle}>
      <DataProvider>
        <section style={sectionStyle(1)}><BidComponent/></section>
        <section style={sectionStyle(2.5)}><PlayerInfo/></section>
        <section style={sectionStyle(1)}><BalComponent/></section>
      </DataProvider>
    </div>
  );
}

export default App;
