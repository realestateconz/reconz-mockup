import React from 'react';
import {
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import TouchableScale from 'react-native-touchable-scale';

const ImageButton = ({
  resizeMode = 'cover',
  imageStyle = {},
  source,
  style,
  onPress
}) => (
  <TouchableScale
    style={style}
    onPress={onPress}
  >
    <Image
      style={imageStyle}
      source={source}
      resizeMode={resizeMode}
    />
  </TouchableScale>
);

ImageButton.propTypes = {
  source: PropTypes.any.isRequired,
  style: PropTypes.any,
  imageStyle: PropTypes.any,
  onPress: PropTypes.func.isRequired,
  resizeMode: PropTypes.string
};

export default ImageButton;
