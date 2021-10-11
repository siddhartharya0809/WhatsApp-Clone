import { useContext, React } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

// component 
import Login from './account/login';
import { AccountContext } from '../context/AccountProvider';
import ChatBox from './ChatBox';


const useStyles = makeStyles({
	component: {
		background: '#DCDCDC',
		height: '100vh'
	},
	loginHeader: {
		height: '222px',
		backgroundColor: '#00bfa5',	// ths header color is not changing from blue to this color.
		boxShadow: 'none',
	},
})

const Messenger = () => {
	const classes = useStyles();
	const { account } = useContext(AccountContext)
	return (
		<Box className={classes.component}>
			<AppBar>
				<Toolbar className={classes.loginHeader}>
				</Toolbar>
			</AppBar>
			{/* We have to check whether our account contains some value or not if not show login page 
			else show them other page */}
			{account ? <ChatBox /> : <Login />}
		</Box>
	)
}

export default Messenger;