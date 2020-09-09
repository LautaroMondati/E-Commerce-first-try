
export const ReviewsActionTypes = {
    SET_REVIEW: 'SET_REVIEW',
    REMOVE_REVIEW: 'REMOVE_REVIEW'
}

export const addReview = review => {
    return {
        type: ReviewsActionTypes.SET_REVIEW,
        payload: review
    }
}

export const removeReview = r => {
    return {
        type: ReviewsActionTypes.REMOVE_REVIEW,
        payload: r
    }
}

