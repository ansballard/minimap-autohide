module.exports = {
  "TimeToHide": {
    "description": "Number of milliseconds to wait after a visibilty event to hide minimap",
    "type": "integer",
    "default": 1500,
    "minimum": 1
  },
  "TransitionDuration": {
    "description": "Number of milliseconds to it takes for minimap to activate (requires reload)",
    "type": "integer",
    "default": 100,
    "minimum": 1
  },
  "ShowOnScroll": {
    "description": "Show the minimap on scroll",
    "type": "boolean",
    "default": true
  },
  "ShowOnClick": {
    "description": "Show the minimap on click",
    "type": "boolean",
    "default": false
  },
  "VisiblePercentage": {
    "description": "Percent of the minimap to show when inactive (requires reload)",
    "type": "integer",
    "default": 0,
    "enum": [0, 25, 50, 75, 100]
  }
};
