import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Footer from '../components/common/Footer';
import { createBrowserHistory } from 'history';
import {useStyles} from '../styles/welcome';
export const history = createBrowserHistory({
	forceRefresh: true,
});
class Welcome extends Component {
//     handleClick(){
// history.push('/candidate');
// }
	render() {
        const {classes} = this.props;
		return (
			<div>
				<Grid container spacing={3}>

					<Grid item xs={5}>
						<div style={{ marginTop: '20%',marginLeft:'15%',fontFamily: 'Roboto',fontWeight:'bold',color:'#4F4C4C'}}>
							<Typography style={{fontSize:'60px'}}>
								Welcome,to 
							</Typography>
                            <Typography style={{fontSize:'60px'}}>voting application</Typography>
							<Box m={4} />
						</div>
							<Button className={classes.button} style={{marginLeft:'32%'}} >
								continue
							</Button>
					</Grid>
                    <Grid item xs={5}>
						<img
							height='757px'
							width='757px'
							src='https://res.cloudinary.com/dldhipetm/image/upload/v1589104628/voting%20application/voting2_1_j1elfj.png'
							alt='logo'
                            style={{marginLeft:'10%'}}
						/>
					</Grid>
				</Grid>
<Footer/>
			</div>
		);
	}
}

export default (withStyles(useStyles)(Welcome));
