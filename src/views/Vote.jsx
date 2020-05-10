import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import {useStyles} from '../styles/votes';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import Footer from '../components/common/Footer';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { Typography } from '@material-ui/core';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import Link from '@material-ui/core/Link';
import {getCandidates,getCandidateAction} from '../actions/candidate.action';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory({
	forceRefresh: true,
});
class Vote extends Component{

    constructor(props) {
        super(props);
        this.state={
            isVote:'',
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
    

    render(){
        const {classes} = this.props;
        return(

<Paper >
<Grid container spacing={3} >
<Grid item xs>
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
<Card className={classes.profilePicture}>
<img src={candidate.image} style={{height:'178px',width:'170px'}}/>
</Card>
<Box m={2}/>
<Typography>{candidate.firstName} {candidate.lastName}</Typography>
<Typography>Votes: {candidate.votes}</Typography>

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
const candidates = [
    { name: 'type',image:'https://res.cloudinary.com/dldhipetm/image/upload/v1589112747/voting%20application/bush_ujq2xm.jpg' },
    { name: 'topic',image:'https://res.cloudinary.com/dldhipetm/image/upload/v1589104628/voting%20application/voting2_1_j1elfj.png'},
    { name: 'type',image:'https://res.cloudinary.com/dldhipetm/image/upload/v1589104628/voting%20application/voting2_1_j1elfj.png' },
    { name: 'topic',image:'https://res.cloudinary.com/dldhipetm/image/upload/v1589104628/voting%20application/voting2_1_j1elfj.png'},
    { name: 'type',image:'https://res.cloudinary.com/dldhipetm/image/upload/v1589104628/voting%20application/voting2_1_j1elfj.png' },
    { name: 'topic',image:'https://res.cloudinary.com/dldhipetm/image/upload/v1589104628/voting%20application/voting2_1_j1elfj.png'}
]
export const mapStateToProps = state => {
	return {
      candidates:state.candidateReducer.payload
	
	};
};

const connectedVotePage = connect(mapStateToProps, {getCandidates,getCandidateAction
})(withStyles(useStyles)(Vote));

export default connectedVotePage;