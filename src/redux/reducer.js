
const TOGGLE_SELECT = 'TOGGLE_SELECT'
const TOGGLE_UNSELECT = 'TOGGLE_UNSELECT'
const TOGGLE_MOUSEOUT = 'TOGGLE_MOUSEOUT'
const TOGGLE_MOUSEOVER = 'TOGGLE_MOUSEOVER'
const updateObjectInArray = (packets, packId, objPropName, toggle) => {
    return packets.map((u) => {
        if (u[objPropName] === packId) {
            return { ...u, ...toggle }
        }
        return u
    }
    )
}


let initialState = {
    packets: [
        {
            id: 1,
            name: 'fuagra',
            customer: '',
            filling: 'с фуа-гра',
            portion: '10 порций',
            prize: 'мышь в подарок',
            weight: '0,5',
            toggle: false,
            signature: `Чего сидишь? порадуй котэ`,
            link: 'купи.',
            undertext: 'Печень утки разварная с артишоками.',
            isPresence: false,
            onMouseOut: false

        },
        {
            id: 0,
            name: 'fish',
            customer: '',
            filling: 'с рыбой',
            portion: '40 порций',
            prize: '2 мыши в подарок',
            weight: '2',
            toggle: false,
            signature: `Чего сидишь? порадуй котэ`,
            link: 'купи.',
            undertext: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            isPresence: false,
            onMouseOut: false
        },
        {
            id: 2,
            name: 'chiken',
            customer: 'заказчик доволен',
            filling: 'с курой',
            portion: '100 порций',
            prize: '5 мышей в подарок',
            weight: '5',
            toggle: false,
            signature: `Чего сидишь? порадуй котэ`,
            link: 'купи.',
            undertext: 'Филе из цеплят с труфелями в бульоне.',
            isPresence: true,
            onMouseOut: false


        }
    ],

}
const packetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SELECT:
            return {
                ...state,
                packets: updateObjectInArray(state.packets, action.packId, 'id', { toggle: true })
            }
        case TOGGLE_UNSELECT:
            return {
                ...state,
                packets: updateObjectInArray(state.packets, action.packId, 'id', { toggle: false })
            }
        case TOGGLE_MOUSEOVER: {
            return {
                ...state,
                packets: updateObjectInArray(state.packets, action.packId, 'id', { onMouseOut: true })
            }
        }
        case TOGGLE_MOUSEOUT: {
            return {
                ...state,
                packets: updateObjectInArray(state.packets, action.packId, 'id', { onMouseOut: false })
            }
        }
        default: return state
    }
}

export const selectPacket = (packId) => ({
    type: TOGGLE_SELECT, packId
})
export const unSelectPacket = (packId) => ({
    type: TOGGLE_UNSELECT, packId
})
export const selectHover = (packId) => ({
    type: TOGGLE_MOUSEOVER, packId
})
export const selectHoverTurnOff = (packId) => ({
    type: TOGGLE_MOUSEOUT, packId
})
export default packetsReducer