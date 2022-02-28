import {
    GETALLUSERLIST, GETALLUSERLISTSUCCESS, ISUSERDETAILSMODALOPEN,
    CLOSEUSERDETAILSMODAL, DELETEUSER, OPENUSERDELETEMODAL, CLOSEUSERDELETEMODAL
} from "../Action/ActionTypes"

const initialState = {
    usersList: [],
    usersLoader: false,
    isUserDetailsModalOpen: false,
    isUserDeleteModal: false,
    idForDeleteUser: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALLUSERLIST:
            return {
                ...state,
                usersLoader: true
            }
        case GETALLUSERLISTSUCCESS:
            return {
                ...state,
                usersList: action.payload,
                usersLoader: false
            }

        case ISUSERDETAILSMODALOPEN:
            return {
                ...state,
                isUserDetailsModalOpen: true
            }

        case CLOSEUSERDETAILSMODAL:
            return {
                ...state,
                isUserDetailsModalOpen: false
            }

        case DELETEUSER:
            return {
                ...state,
                usersList: action.payload
            }

        case OPENUSERDELETEMODAL:
            return {
                ...state,
                isUserDeleteModal: true,
                idForDeleteUser: action.payload
            }

        case CLOSEUSERDELETEMODAL:
            return {
                ...state,
                isUserDeleteModal: false
            }

        default: return state;
    }
}

export default userReducer;