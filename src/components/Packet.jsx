import React from 'react'
const Packet = (props) => {
    let { packet, selectPacket, unSelectPacket, selectHover, selectHoverTurnOff } = props
    let toggleSelect = (id) => {
        unSelectPacket(id)
        selectHoverTurnOff(id)
    }
    return (
        <div className={packet.isPresence ? 'app__column column empty' : "app__column column presence"}>
            <button onMouseOut={packet.toggle ? () => { selectHover(packet.id) } : null} disabled={packet.isPresence ? true : false} onClick={packet.toggle ? () => { toggleSelect(packet.id) } : () => { selectPacket(packet.id) }} className={packet.onMouseOut ? "column__screen selectHover" : packet.toggle ? 'column__screen select' : "column__screen"}>
                <div className='column__body'>
                    <p className='column__forehead'>
                        <span>Котэ не одобряет?</span>
                        <span>Сказочное заморское яство</span>
                    </p>
                    <h2 className='column__title '>
                        Нямушка
                        <span>
                            {packet.filling}
                        </span>
                    </h2>
                    <div className="column__text">
                        <span>{packet.portion}</span>
                        <span>{packet.prize}</span>
                        <span>{packet.customer}</span>
                    </div>
                    <div className="column__weight">
                        <span>
                            {packet.weight}
                        </span>
                        <span>
                            кг
                        </span>
                    </div>
                </div>
            </button>
            <div className="column__undertext undertext">
                <div className="undertext__default">
                    {packet.signature} <button onClick={() => { selectPacket(packet.id) }} className={packet.toggle ? ' select' : null} >{packet.link}</button>
                </div>
                <div className="undertext__selected">
                    {packet.undertext}
                </div>
                <div className="undertext__disabled">
                    Печалька {packet.filling} закончился
                </div>
            </div>
        </div >

    )
}




export default Packet