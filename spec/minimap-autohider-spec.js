// require("../lib/minimap-autohider.js");
//
// const TimeToHide = 300;
// const TransitionDuration = 300;
// const VisiblePercentage = 0;
// const ShowOnScroll = true;

describe("minimap-autohider", () => {
  // let [editor, editorElement, workspaceElement] = [];
  // beforeEach(() => {
  //   workspaceElement = atom.views.getView(atom.workspace);
  //   jasmine.attachToDOM(workspaceElement);
  //
  //   atom.config.set("minimap-autohider.TimeToHide", TimeToHide);
  //   atom.config.set("minimap-autohider.TransitionDuration", TransitionDuration);
  //   atom.config.set("minimap-autohider.VisiblePercentage", VisiblePercentage);
  //   atom.config.set("minimap-autohider.ShowOnScroll", ShowOnScroll);
  //
  //   waitsForPromise(() => atom.workspace.open());
  //   waitsForPromise(() => atom.packages.activatePackage("minimap"));
  //   waitsForPromise(() => atom.packages.activatePackage("minimap-autohider"));
  //   waitsFor(() => workspaceElement.querySelector("atom-text-editor"));
  //   runs(() => {
  //     editor = atom.workspace.getActiveTextEditor();
  //     editorElement = atom.views.getView(editor);
  //     for (let i = 0; i < 20; i++) {
  //       editor.insertText("Hello World!\n");
  //     }
  //   });
  //   waitsFor(() =>
  //     workspaceElement.querySelector(
  //       "atom-text-editor atom-text-editor-minimap"
  //     )
  //   );
  // });
  //
  // describe("with an open editor with minimap and autohider active", () => {
  //   it("minimap is not visible after `atom.get('minimap-autohider').TimeToHide` milliseconds", () => {
  //     let done = false;
  //     jasmine.unspy(window, "setTimeout");
  //     setTimeout(() => {
  //       done = true;
  //     }, atom.config.get("minimap-autohider").TimeToHide + 100);
  //     waitsFor(() => done);
  //     runs(() => {
  //       expect(
  //         window.getComputedStyle(
  //           editorElement.querySelector("atom-text-editor-minimap")
  //         ).opacity
  //       ).toBe("0.05");
  //     });
  //   });
  //   it("minimap should be visible after adding .autovisible", () => {
  //     const opacity = () =>
  //       window.getComputedStyle(
  //         editorElement.querySelector("atom-text-editor-minimap")
  //       ).opacity;
  //     let done = false;
  //     jasmine.unspy(window, "setTimeout");
  //     expect(opacity()).toBe("1");
  //     setTimeout(() => {
  //       expect(opacity()).toBe("0.05");
  //       editorElement
  //         .querySelector("atom-text-editor-minimap")
  //         .classList.add("autovisible");
  //       setTimeout(() => {
  //         done = true;
  //       }, atom.config.get("minimap-autohider").TransitionDuration + 100);
  //     }, atom.config.get("minimap-autohider").TransitionDuration + 100);
  //     waitsFor(() => done);
  //     runs(() => {
  //       expect(opacity()).toBe("1");
  //     });
  //   });
  // });
});
