const initialState = {
userDetails: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'USER_FETCH_SUCCESS':
            return { ...state , userDetails: [...payload ]}

    default:
        return state
    }
}
