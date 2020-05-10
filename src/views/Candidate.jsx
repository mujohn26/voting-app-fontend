import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import {useStyles} from '../styles/votes';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Footer from '../components/common/Footer';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { Typography } from '@material-ui/core';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import Link from '@material-ui/core/Link';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import {getCandidates,getCandidateAction,voteCandidates,voteCandidateAction} from '../actions/candidate.action';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory({
	forceRefresh: true,
});
class Candidate extends Component{

    constructor(props) {
        super(props);
        this.state={
            isVote:'',
            disabled: false,
            open: false
        }
    }
    UNSAFE_componentWillMount() {
        const {getCandidates}=this.props;
        getCandidates();
	}
    getCandidates(){
        history.push('/vote');
    }
    votingPage(){
        history.push('/candidate');

    }
    sendVotes=(email)=>{
const {voteCandidates} = this.props;
voteCandidates(email);
    }
    handleCloseAlert(event, reason) {
		this.setState({
			open: false,
		});
	}
    componentDidUpdate(prevProps) {
		if (this.props.message !== prevProps.message) {
			this.setState({
                open:true,
				disabled: true,
			});
		}
	}

    render(){
        const {classes} = this.props;
        return(

<Paper >
<Grid container spacing={3} >
<Grid item xs>
<Snackbar
					open={this.state.open}
					autoHideDuration={5000}
					className={classes.Snackbar}
					onClose={this.handleCloseAlert.bind(this)}
				>
					<Alert severity='success'>You voted successfully</Alert>
				</Snackbar>
<Card className={classes.paper}>
<AccountCircleIcon className={classes.user}/>
<Box m={10}/>
<div>
<div className={classes.viewCandidate}>
<div>
<ViewModuleIcon style={{height:'30px',width:'30px',color:'white'}}/>
</div>
<div>
<Link  onClick={this.getCandidates.bind(this)}>
<Typography className={classes.viewCandidateText}>  View candidates</Typography>
</Link>
</div>
</div>
<Box m={4}/>
<div className={classes.voteCandidate}>
<div>
<HowToVoteIcon style={{height:'30px',width:'30px',color:'white'}}/>
</div>
<div>
<Link onClick={this.votingPage.bind(this)}>
<Typography className={classes.voteCandidateText}> Vote</Typography>
</Link>
</div>

</div>
</div>
 </Card>
      </Grid>
<Grid item xs={8}>
{
    this.props.candidates!=null?(this.props.candidates.map((candidate)=>{
    return(
<div className={classes.candidateView}>
<Typography className={classes.candidateName}>{candidate.firstName} {candidate.lastName}</Typography>
<Box m={1}/>
<Card className={classes.profilePicture}>
<img src={candidate.image} style={{height:'178px',width:'170px'}}/>
</Card>
<Box m={2}/>
<Button className={classes.voteButton} onClick={()=>{this.sendVotes(candidate.email)}} disabled={this.state.disabled}>vote</Button>
</div>
)
})):(
    <Typography style={{color:'black', marginLeft:'20px',fontSize:'18px'}}>still loading candidates </Typography>
)


}
</Grid>
    </Grid>
    <Footer/>
    </Paper>
        )
    }
}
export const mapStateToProps = state => {
	return {
      candidates:state.candidateReducer.payload,
      message:state.candidateReducer.message
	
	};
};

const connectedVotePage = connect(mapStateToProps, {getCandidates,getCandidateAction,voteCandidates,voteCandidateAction
})(withStyles(useStyles)(Candidate));

export default connectedVotePage;