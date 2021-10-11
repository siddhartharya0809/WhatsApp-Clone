import { Dialog } from "@mui/material";
import { withStyles, makeStyles } from '@mui/styles';
import { Box } from "@mui/system";

// component import
import Menu from "./menu/Menu";

const useStyle = makeStyles({
  component: {
    display: "flex"
  },
  leftComponent: {
    width: 380
  },
  rightComponent: {
    borderLeft: "1px solid rgba(0,0,0,0.14)"
  },
})
// to override the materail UI  we have to use withStyles
const styles = {
  dialogPaper: {
    height: '100%',
    minWidth: '92vw',
    minHeight: '95vh',
    marginTop: '5%',
    boxShadow: 'none',	// box shadow is still there
    borderRadius: '0px',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
    // bottom: '10px',
  },
}

const ChatBox = ({ classes }) => {
  const className = useStyle();
  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: 'unset' } }}
    >
      <Box className={className.component}>
        <Box className={className.leftComponent}>
          <Menu />
        </Box>

        <Box className={className.rightComponent}>
          Hii
        </Box>
      </Box>
    </Dialog>
  );
}

export default withStyles(styles)(ChatBox);