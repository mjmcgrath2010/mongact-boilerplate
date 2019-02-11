/**
 *
 * Button
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 2,
    padding: '.5em 1em',
    background: '#1892BF',
    borderRadius: '5px',
    color: '#FFF',
    boxShadow: '2px 3px 4px #00000052',
  },
  center: {
    textAlign: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    position: 'relative',
    display: 'block',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function Button(props) {
  const { classes, text, size, variant, onClick, type } = props;
  return (
    <ButtonBase
      onClick={onClick}
      size={size || 'small'}
      type={type || ''}
      className={variant ? [classes.root, classes[variant]] : classes.root}
      centerRipple
    >
      {text}
    </ButtonBase>
  );
}

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default withStyles(styles)(Button);
