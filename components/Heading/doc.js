'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../utils');

exports.default = function (Heading) {
  var DocumentedHeading = (0, _reactDesc.describe)(Heading).availableAt((0, _utils.getAvailableAtBadge)('Heading')).description('Heading text structed in levels.').usage('import { Heading } from \'grommet\';\n<Heading />');

  DocumentedHeading.propTypes = {
    level: _reactDesc.PropTypes.oneOf([1, 2, 3, 4]).description('The heading level. It corresponds to the number after the \'H\' for\nthe DOM tag. Set the level for semantic accuracy and accessibility.\nThe sizing can be further adjusted using the size property.'),
    margin: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none', 'small', 'medium', 'large']), _reactDesc.PropTypes.shape({
      bottom: _reactDesc.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
      top: _reactDesc.PropTypes.oneOf(['none', 'small', 'medium', 'large'])
    })]).description('The amount of margin above and/or below the heading. An object can be\nspecified to distinguish top margin and bottom margin.'),
    size: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large']).description('The font size is primarily driven by the chosen tag. But, it can\nbe adjusted via this size property. The tag should be set for semantic\ncorrectness and accessibility. This size property allows for stylistic\nadjustments.'),
    textAlign: _reactDesc.PropTypes.oneOf(['start', 'center', 'end']).description('How to align the text inside the heading.'),
    truncate: _reactDesc.PropTypes.bool.description('Restrict the text to a single line and truncate with ellipsis if it\nis too long to all fit.')
  };

  return DocumentedHeading;
};