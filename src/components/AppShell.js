import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: `auto`,
  },
};

class AppShell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerToggle: false,
    };
  }

  _drawerToggleHandler = () => {
    this.setState({
      drawerToggle: !this.state.drawerToggle,
    });
  };

  render() {
    const { classes } = this.props;
    const { drawerToggle } = this.state;

    return (
      <div className={classes.root}>
        <AppBar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={this._drawerToggleHandler}
          >
            <MenuIcon />
          </IconButton>
        </AppBar>
        <Drawer open={drawerToggle}>
          <MenuItem onClick={this._drawerToggleHandler}>HOME</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(AppShell);
