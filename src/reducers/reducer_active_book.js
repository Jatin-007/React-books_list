// state arguement is not an application state, only the state
// it is responsible for

//if the state is undefined? set the state equal to null
export default function (state = null, action) {
    switch(action.type){
        case 'BOOK_SELECTED':
        return action.payload
    }

    return state;
}