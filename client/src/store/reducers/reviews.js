import { ReviewsActionTypes } from '../actions/reviews';

const initialState = {
    reviews: []
}

export const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ReviewsActionTypes.SET_REVIEW:
            return {
                ...state,
                reviews: [...state.reviews, action.payload]
            }
            case ReviewsActionTypes.REMOVE_REVIEW:
            return {
                ...state,
                reviews: [...state.reviews.filter(elem=>elem.id != action.payload)]
            }
        default:
            return state
    }
}