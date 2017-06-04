module.exports = {
  "TimeToHide": {
    "description": "Number of milliseconds to wait after a visibilty event to hide minimap",
    "type": "integer",
    "default": 1500,
    "minimum": 1
  },
  "TransitionDuration": {
    "description": "Number of milliseconds to it takes for minimap to slide in/out (requires reload)",
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
  "ShowOnHover": {
    "description": "Keep the minimap 25% visible so it can be hovered over to be shown",
    "type": "boolean",
    "default": false
  }
};
