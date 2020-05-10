import { textAlign, height } from '@material-ui/system';

export const useStyles = theme => ({
	paper: {
		minHeight: '795px',
		width: '350px',
		backgroundColor: '#4B27AB',
	},
	cardText: {
		color: 'white',
		fontSize: '20px',
		fontWeight: 'bold',
	},
	user: {
		color: 'white',
		height: '100px',
		width: '100px',
		marginLeft: '28%',
		marginTop: '10%',
	},
	viewCandidate: {
		display: 'flex',
		justifyContent: 'space-evenly',
		marginLeft: '-15%',
	},
	viewCandidateText: {
		color: 'white',
		fontSize: '20px',
		fontWeight: 'bold',
		marginLeft: '-30%',
		cursor: 'pointer',
	},
	voteCandidateText: {
		color: 'white',
		fontSize: '20px',
		fontWeight: 'bold',
		marginLeft: '-230%',
		cursor: 'pointer',
	},
	voteCandidate: {
		display: 'flex',
		justifyContent: 'space-evenly',
		marginLeft: '-30%',
	},
	profilePicture: {
		width: '170px',
		height: '178px',
		backgroundColor: ' #C4C4C4',
	},
	candidateView:{
		display:'inline-block',
		marginLeft:'80px',
		marginTop:'80px'
	},
	voteButton:{
		backgroundColor:'#4B27AB',
		color:'white',
		marginLeft:'33%'
	},
	candidateName:{
		textAlign:'center'
	},
	Snackbar: {
		margin: '50% 40%',
		width: '800px',
	},
});
