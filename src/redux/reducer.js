
export const TOGGLE_SELECT = 'TOGGLE_SELECT'
export const TOGGLE_UNSELECT = 'TOGGLE_UNSELECT'
export const updateObjectInArray = (packets, packId, objPropName, toggle) => {
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
            id: 0,
            name: 'fish',
            customer: '',
            filling: 'с рыбой',
            portion: '40 порций',
            prize: '2 мыши в подарок',
            weight: '2',
            toggle: false,
            signature: `Чего сидидшь? порадуй котэ`,
            link: 'купи.'
        },
        {
            id: 1,
            name: 'fuagra',
            customer: '',
            filling: 'с фуагра',
            portion: '10 порций',
            prize: 'мышь в подарок',
            weight: '0.5',
            toggle: false,
            signature: `Головы щучьи с чесноком да свежайшая сёмгушка.`,
            link: ''
        },
        {
            id: 2,
            name: 'chiken',
            customer: 'заказчик доволен',
            filling: 'с рыбой',
            portion: '100 порций',
            prize: '5 мышей в подарок',
            weight: '5',
            toggle: false,
            signature: `Печалька, с курой закончился.`,
            link: ''
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
        default: return state
    }
}

export const selectPacket = (packId) => ({
    type: TOGGLE_SELECT, packId
})
export const unSelectPacket = (packId) => ({
    type: TOGGLE_UNSELECT, packId
})
export default packetsReducer