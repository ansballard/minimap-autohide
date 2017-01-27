# minimap-autohider package

## Hide your minimap until you need it.

This package automatically hides the minimap until you need it.

_Forked from [jayk/minimap-autohide](https://github.com/jayk/minimap-autohide)_

When editing normally, you have the entire window for your editor. As soon as you begin to scroll, the minimap appears and you can interact with it normally.

Written by @JayKuri - If you like it, say Hi!

Forked and updated by @ansballard

![Minimap autohider animated image](screenshot.gif)

By default the minimap will be hidden when not scrolling, and will slide out from the right when scrolling.  You can, however, tweak the appearance. When you are scrolling, the minimap will have a class 'scrolling' added to it. You can therefore override the default by adding an entry to your personal styles.less file.

For example, this style entry restores the original look of the minimap, but causes the minimap to instantly disappear when not scrolling... for a more 'snap-in' effect.

    atom-text-editor {
      atom-text-editor-minimap.scrolling {
        left: 0px;
        display: block;
      }
      atom-text-editor-minimap {
        background: rgba(0,0,0,0.2);
        position: relative;
        display: none;
        left: 0px;
        opacity: 1;
      }
    }

Likewise, if you don't like the semi-transparent background, you can override it in your theme:

    atom-text-editor-minimap {
      // give us a nice dark-blue background
      background: #000040;
    }

Known issues: Does not interact well with 'minimap-on-left' setting. You may, however, be able to set a style in your own styles.less that would allow it to work.
