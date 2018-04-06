export function setName(name) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'CHANGE',
                payload: name
            });
        }, 2000);
    }
}

export function setDefault() {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'DEFAULT'
            });
        }, 2000);
    }
}