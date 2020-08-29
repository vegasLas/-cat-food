import React from 'react';
import './App.scss';
import Packet from './components/Packet';

const App = (props) => {
  let packets = props.packets
  let packetElement = packets.map(d => <Packet packet={d} selectPacket={props.selectPacket} unSelectPacket={props.unSelectPacket} />);
  return (
    <div className="app">
      <div className="app__content">
        <h1 className="app__title">
          Ты сегодня покормил кота?
        </h1>
        <div class="app__columns columns">
          {packetElement}
        </div>
      </div>
    </div >
  );
}

export default App;
