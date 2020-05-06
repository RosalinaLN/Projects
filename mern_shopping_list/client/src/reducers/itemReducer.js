const initState = {
    items: [],
    loading:false
}

const itemReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ITEM_LOADING':
            return {
                ...state,
                loading:true
            }
        case 'GET_ITEMS':
            //console.log(action.payload);
            return {
                ...state,
                items: action.payload,
                loading:false
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        default:
            return state;
    }
}

export default itemReducer;