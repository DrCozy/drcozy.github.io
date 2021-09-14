import { Backdrop, Fade, Grid, IconButton, Link, Paper, SvgIcon, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ReactComponent as XIcon } from "../../assets/icons/x.svg";
import "./changenetwork.scss";
import useEscape from "../../hooks/useEscape";
import Button from "@material-ui/core/Button";
import { useWeb3Context } from "../../hooks/web3Context";

function ChangeNetwork() {
  const { switchChain } = useWeb3Context();
  const history = useHistory();

  const handleClose = () => {
    history.goBack();
    history.push("/network");
  };

  const handleSwitchChain = id => {
    return () => {
      switchChain(id);
    };
  };

  useEscape(() => {
    handleClose();
  });

  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      <Grid container id="change-network-view">
        <Backdrop open={true}>
          <Fade in={true}>
            <Paper className="ohm-card ohm-modal">
              <div className="change-network-header">
                <Link styles="button" onClick={handleClose}>
                  <SvgIcon color="primary" component={XIcon} />
                </Link>

                <div className="change-network-header-name">
                  <Typography variant="h5">Change Network</Typography>
                </div>

                <div />
              </div>

              <div className="network-list">
                <Button variant="contained" color="primary" size="large" onClick={handleSwitchChain(1)}>
                  <Typography>Ethereum</Typography>
                </Button>
                <Button variant="contained" color="primary" size="large" onClick={handleSwitchChain(42161)}>
                  <Typography>Arbitrum</Typography>
                </Button>
              </div>
            </Paper>
          </Fade>
        </Backdrop>
      </Grid>
    </Fade>
  );
}

export default ChangeNetwork;
