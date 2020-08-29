import React from 'react'
import App from "./App";
import { connect } from 'react-redux';
import { selectPacket, unSelectPacket } from './redux/reducer';


class AppContainer extends React.Component {
    render() {
        return <>
            <App packets={this.props.packets}
                selectPacket={this.props.selectPacket}
                unSelectPacket={this.props.unSelectPacket}
            />
        </>
    }
}



let mstp = (state) => {
    return ({
        packets: state.packet.packets
    })
}
let mdtp = (dispatch) => {
    return {
        selectPacket: (id) => {
            dispatch(selectPacket(id));
        },
        unSelectPacket: (id) => {
            dispatch(unSelectPacket(id))
        }
    }
}

export default connect(mstp, mdtp)(AppContainer);
