# minimap-autohider package

## Hide your minimap until you need it.

This package automatically hides the minimap until you need it.

_Forked from [jayk/minimap-autohide](https://github.com/jayk/minimap-autohide)_

When editing normally, you have the entire window for your editor. As soon as you begin to scroll, the minimap appears and you can interact with it normally.

Written by @JayKuri - If you like it, say Hi!

Forked and updated by @ansballard

By default the minimap will be hidden when not scrolling, and will slide out when scrolling.  You can, however, tweak the appearance. When you are scrolling, the minimap will have a class _scrolling_ added to it. You can therefore override the default by adding an entry to your personal `styles.less` file.

For example, if you don't like the semi-transparent background, you can override it in your theme:

```less
atom-text-editor-minimap {
  // give us a nice dark-blue background
  background: #000040;
}
```
