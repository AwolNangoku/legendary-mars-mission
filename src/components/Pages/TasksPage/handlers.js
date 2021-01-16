export const initialState = {
    title: undefined,
    description: undefined,
    createdBy: undefined,
    assignedTo: undefined,
}

export const taskReducer = (state, action) => {
    switch (action.type) {
        case 'TITLE':
            return {...state, ...{title: action.payload}}
        case 'DESCRIPTION':
            return {...state, ...{description: action.payload}}
        case 'CREATED_BY':
            return {...state, ...{createdBy: action.payload}}
        default:
            return {...state, ...{assignedTo: action.payload}}
    }
};

export const getPageImage = (imgUrl, setImage) => {
    fetch(imgUrl)
        .then(response => {
            if (response.ok) {
                setImage(response.url);
            }
        })
}