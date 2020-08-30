import React from 'react'
const Packet = (props) => {
    let { packet, selectPacket, unSelectPacket } = props
    return (
        <div className={(packet.name === 'fuagra')
            ? 'app__column column fuagra' : (packet.name === 'fish')
                ? 'app__column column fish' : (packet.name === 'chiken')
                    ? 'app__column column chiken empty' : null
        }>
            <button disabled={(packet.name === 'chiken') ? true : false} onClick={packet.toggle ? () => { unSelectPacket(packet.id) } : () => { selectPacket(packet.id) }} className={packet.toggle ? 'column__screen select' : "column__screen"}>
                <div className='column__body'>
                    <p className='column__forehead'>
                        Сказочное заморское яство
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
            <div className="column__undertext">
                {packet.signature} <button onClick={packet.toggle ? () => { unSelectPacket(packet.id) } : () => { selectPacket(packet.id) }} className={packet.toggle ? ' select' : null} >{packet.link}</button>
            </div>
        </div>

    )
}




export default Packet