import React from 'react';
import { useContext } from 'react';
import { Dialog, List, Typography, ListItem } from '@mui/material'
import { makeStyles, withStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { GoogleLogin } from 'react-google-login';
import { AccountContext } from '../../context/AccountProvider';


// React Stying Components
const useStyles = makeStyles({
	component: {
		display: 'flex',
	},
	leftComponent: {
		padding: '56px 0 56px 56px',
	},
	qrCode: {
		height: 264,
		width: 264,
		padding: '50px 0 0 50px',
	},
	title: {
		// fontSize: '26px !important',
		marginBottom: '25px',
		color: '#525252',
		fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
		fontWeight: 300
	},
	link: {
		color: '#009688',
		font: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
		a: {
			textDecoration: 'none !important',
			color: 'inherit',
		}
	},
	list: {
		'& > *': {
			padding: '5px',
			lineHeight: '28px',
			color: '#4a4a4a',
		},
		text: {
			fontWeight: "bold"
		}
	}
})
const styles = {
	dialogPaper: {
		height: '95%',
		minWidth: '66vw',
		marginTop: '12%',
		boxShadow: 'none',	// box shadow is still there
		borderRadius: 0,
		maxHeight: '100%',
		maxWidth: '100%',
		overflow: 'hidden',
		top: '60px',
	},
}

const Login = ({ classes }) => {
	const className = useStyles();
	const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
	const client_id = '227111407776-eq9tsq2g2eod1vc3uo8pbvpbupkscsjk.apps.googleusercontent.com'

	const { account, setAccount } = useContext(AccountContext)

	const onLoginSuccess = (res) => {
		console.log('on login successfully', res.profileObj);
		setAccount(res.profileObj);

	}
	const onLoginFailure = () => {
		console.log('on login unsuccessfully');
	}

	return (
		<Dialog
			open={true}
			classes={{ paper: classes.dialogPaper }}
			BackdropProps={{ style: { backgroundColor: 'unset' } }}
		>
			<Box className={className.component}>
				{/* first child component */}
				<Box className={className.leftComponent}>
					<Typography
						className={className.title}
						style={{
							fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
							fontSize: '26px',
							marginBottom: '52px',
							color: '#525252',
						}}>
						To use WhatsApp on your Computer:
					</Typography>
					<List className={className.list}>
						<ListItem>1. Open WhatsApp on your Phone.</ListItem>
						<ListItem>2. Tap Menu or Setting and select Linked Devices.</ListItem>
						<ListItem>3. Point your Phone to the Screen to capture the code.</ListItem>

						<Typography style={{ color: '#009688', padding: '40px', }}>
							<a href={"https://faq.whatsapp.com/web/download-and-installation/how-to-log-in-or-out?lang=en"} color={'#009688'} >Need Help to get starterd?</a>
						</Typography>
					</List>
				</Box>

				{/* Second child component */}
				<Box style={{ position: 'relative' }}>
					<img src={qrurl} alt='qr' className={className.qrCode} />
					<Box style={{ position: 'absolute', left: '50%', top: '35%' }}>
						<GoogleLogin
							clientId={client_id}
							buttonText=""
							isSignedIn={true}
							onSuccess={onLoginSuccess}
							onFailure={onLoginFailure}
							cookiePolicy={'single_host_origin'}
						/>
					</Box>
				</Box>
			</Box>
		</Dialog >
	)
}

export default withStyles(styles)(Login);
