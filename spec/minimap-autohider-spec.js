require("../lib/minimap-autohider.js");

describe("minimap-autohider", () => {
  let [ editor, editorElement, workspaceElement ] = [];
  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    jasmine.attachToDOM(workspaceElement);
    waitsForPromise(() =>
      atom.workspace.open()
    );
    waitsForPromise(() =>
      atom.packages.activatePackage("minimap")
    );
    waitsForPromise(() =>
      atom.packages.activatePackage("minimap-autohider")
    );
    waitsFor(() =>
      workspaceElement.querySelector("atom-text-editor")
    );
    runs(() => {
      editor = atom.workspace.getActiveTextEditor();
      editorElement = atom.views.getView(editor);
      for(let i = 0; i < 20; i++) {
        editor.insertText("Hello World!\n");
      }
    });
    waitsFor(() =>
      workspaceElement.querySelector("atom-text-editor atom-text-editor-minimap")
    );
  });
  return describe("with an open editor with minimap and autohider active", () =>
    Promise.all([
      it("minimap is not visible after `atom.get('minimap-autohider').TimeToHide` milliseconds", () => {
        setTimeout(() => {
          expect(window.getComputedStyle(editorElement.querySelector("atom-text-editor-minimap")).opacity).toBe("0.05");
        }, atom.config.get("minimap-autohider").TimeToHide + 100);
      }),
      it("minimap should be visible after scroll event", () => {
        editor.scrollToScreenPosition([ 19, 0 ]);
        setTimeout(() => {
          expect(window.getComputedStyle(editorElement.querySelector("atom-text-editor-minimap")).opacity).toBe("1");
        }, atom.config.get("minimap-autohider").TransitionDuration + 100);
      })
    ])
  );
});
