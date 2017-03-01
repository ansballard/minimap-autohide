# minimap-autohider

## Hide your minimap until you need it.

_Forked from [jayk/minimap-autohide](https://github.com/jayk/minimap-autohide)_

When editing normally, you have the entire window for your editor. As soon as you begin to scroll, the minimap appears and you can interact with it normally.

![Default Autohide Behavior](https://raw.githubusercontent.com/ansballard/minimap-autohider/master/gifs/autohider.gif)

By default, the minimap will be hidden when not scrolling, and will slide out when scrolling. The minimap will slide in for 100ms, stay until you have not scrolled for 1500ms, and slide out for 100ms. The above times can be customized in the settings page for this package. For example, you could slow down the time to slide in to 500ms, and slide back out after 1000ms. You can also move the minimap to the left via `minimap`'s settings, which was not supported in the original package.

![Modified Autohider Behavior](https://raw.githubusercontent.com/ansballard/minimap-autohider/master/gifs/autohiderleft.gif)

This forked version also transforms the position of the minimap based on translateX rather than left. This should mean much smoother transitions, and a little less work atom has to do via repaints.

Originally written by @JayKuri, forked and updated by @ansballard. If you like it, say Hi!
