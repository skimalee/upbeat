const initialState = {
    page: 0
}

const pagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PAGE': 
            return {
                ...state,
                page: action.payload,
            }
    }
}