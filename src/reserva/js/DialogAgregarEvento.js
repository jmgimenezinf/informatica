import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    withMobileDialog,
  } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
class DialogAgregarEvento extends Component {

    constructor(props){
        super(props);
    }
    
      handleOpen = () => {
        if(this.props.open){
            return false;
        }else{
            return false;
        }
      };
    

    render() {
        const { fullScreen } = this.props;
        return(
        <Dialog
        fullScreen={fullScreen}
        open={this.props.open}
        onClose={this.handleOpen}
        aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">{"Disponibilidad del laboratorio"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    No
                </Button>
                <Button onClick={this.handleClose} color="primary" autoFocus>
                    Si
                </Button>
            </DialogActions>
        </Dialog>)
    }
}
DialogAgregarEvento.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
  };

export default withMobileDialog()(DialogAgregarEvento);
