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
  margin: {
    margin: theme.spacing.unit,
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
      variant={variant || 'outlined'}
      size={size || 'small'}
      type={type || ''}
      className={classes.margin}
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
