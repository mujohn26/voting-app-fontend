export const GET_CANDIDATES = 'GET_CANDIDATES';
export const VOTING_SUCCESS = 'VOTING_SUCCESS';


import axios from 'axios';


export const getCandidates = () => async dispatch => {

    try {
        const candidates = await axios.get(`https://vote-app-backend.herokuapp.com/api/v1/candidate`);
		dispatch(getCandidateAction(candidates.data.data));
	} catch (error) {}
};

export const voteCandidates = (email) => async dispatch => {

    try {
		const candidates = await axios.post(`https://vote-app-backend.herokuapp.com/api/v1/vote`,{email});
		dispatch(voteCandidateAction(candidates.data.message));
	} catch (error) {}
};
export function getCandidateAction(data) {
	return {
		type: GET_CANDIDATES,
		payload: data,
	};
}
export function voteCandidateAction(data) {
	return {
		type: VOTING_SUCCESS,
		payload: data,
	};
}
