/**
 *
 * NavBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/es/Drawer/Drawer';
import Divider from '@material-ui/core/es/Divider/Divider';
import List from '@material-ui/core/es/List/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Icon from '@material-ui/core/Icon';
import { push } from 'connected-react-router/immutable';
import Collapse from '@material-ui/core/es/Collapse/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class NavBar extends React.Component {
  state = {
    open: false,
  };

  componentDidMount() {
    const { userLinks, adminLinks } = this.props;
    [userLinks, adminLinks].map(links => {
      if (links.length) {
        return this.setUpNestedLinks(links);
      }
      return false;
    });
  }

  setUpNestedLinks = links =>
    links.map(link => {
      if (link.children) {
        const prop = `${link.text}Open`;
        return this.setState({ [prop]: false });
      }
      return false;
    });

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  renderIcon = name => {
    switch (name) {
      case 'inbox':
        return <InboxIcon />;
      case 'mail':
        return <MailIcon />;
      case 'users':
        return <Icon>account_box</Icon>;
      case 'invite':
        return <Icon>add_box</Icon>;
      case 'posts':
        return <Icon>file_copy</Icon>;
      case 'new-post':
        return <Icon>create</Icon>;
      case 'categories':
        return <Icon>filter_list</Icon>;
      default:
        return <MailIcon />;
    }
  };

  handleNavigation = path => {
    const { dispatch } = this.props;
    this.setState({ open: false });
    dispatch(push(path));
  };

  handleNestedLinkClick = prop => () => {
    this.setState(state => ({ [prop]: !state[prop] }));
  };

  renderUserLinks = () => {
    const { userLinks } = this.props;

    if (userLinks.length) {
      return (
        <div>
          <Divider />
          <List>{this.renderLinks(userLinks)}</List>
        </div>
      );
    }
    return null;
  };

  renderChildLinks = links => {
    const { classes } = this.props;
    return links.map(link => (
      <ListItem
        className={classes.nested}
        onClick={() => this.handleNavigation(link.path)}
        button
        key={link.text}
      >
        <ListItemIcon>{this.renderIcon(link.icon)}</ListItemIcon>
        <ListItemText inset primary={link.text} />
      </ListItem>
    ));
  };

  renderLinks = links =>
    links.map(link => {
      if (link.children && link.children.length) {
        return (
          <div key={link.text}>
            <ListItem
              button
              onClick={this.handleNestedLinkClick(`${link.text}Open`)}
            >
              <ListItemIcon>{this.renderIcon(link.icon)}</ListItemIcon>
              <ListItemText primary={link.text} />
              {this.state[`${link.text}Open`] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
              in={this.state[`${link.text}Open`]}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {this.renderChildLinks(link.children)}
              </List>
            </Collapse>
          </div>
        );
      }
      return (
        <ListItem
          onClick={() => this.handleNavigation(link.path)}
          button
          key={link.text}
        >
          <ListItemIcon>{this.renderIcon(link.icon)}</ListItemIcon>
          <ListItemText primary={link.text} />
        </ListItem>
      );
    });

  renderAdminLinks = () => {
    const { adminLinks } = this.props;

    if (adminLinks.length) {
      return (
        <div>
          <Divider />
          <List>{this.renderLinks(adminLinks)}</List>
        </div>
      );
    }
    return null;
  };

  render() {
    const { classes, theme, viewName, onLogout, loggedIn } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              onClick={this.handleDrawerOpen}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {viewName}
            </Typography>
            <Button onClick={onLogout} color="inherit">
              {loggedIn ? 'LOGOUT' : 'LOGIN'}
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Menu
            </Typography>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          {this.renderUserLinks()}
          {this.renderAdminLinks()}
        </Drawer>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  viewName: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  userLinks: PropTypes.array.isRequired,
  adminLinks: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(NavBar);
