/**
 *
 * Button
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = () => ({
  root: {},
});

function Button(props) {
  const { classes, text, size, variant, onClick, type, color } = props;
  return (
    <ButtonBase
      fullWidth
      variant={variant || ''}
      onClick={onClick}
      size={size || 'small'}
      type={type || ''}
      className={classes.root}
      centerRipple
      color={color}
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
  color: PropTypes.string,
};

export default withStyles(styles)(Button);
