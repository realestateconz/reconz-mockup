import React from 'react';
import {
  Image,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';


const ImageButton = ({
  resizeMode = 'cover',
  imageStyle = {},
  source,
  style,
  onPress
}) => (
  <TouchableOpacity
    style={style}
    onPress={onPress}
  >
    <Image
      style={imageStyle}
      source={source}
      resizeMode={resizeMode}
    />
  </TouchableOpacity>
);

ImageButton.propTypes = {
  source: PropTypes.any.isRequired,
  style: PropTypes.any,
  imageStyle: PropTypes.any,
  onPress: PropTypes.func.isRequired,
  resizeMode: PropTypes.string
};

export default ImageButton;
