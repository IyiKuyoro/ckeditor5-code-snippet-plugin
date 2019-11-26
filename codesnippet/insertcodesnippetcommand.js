import Command from '@ckeditor/ckeditor5-core/src/command';

function createCodeSnippet(writer) {
  const codeSnippet = writer.createElement('codeSnippet');

  // There must be at least one paragraph for the description to be editable.
  // See https://github.com/ckeditor/ckeditor5/issues/1464.
  writer.appendElement('paragraph', codeSnippet);

  return codeSnippet;
}

export default class InsertCodeSnippetCommand extends Command {
  execute() {
    this.editor.model.change((writer) => {
      // Insert <pre>*</pre> at the current selection position
      // in a way that will result in creating a valid model structure.
      this.editor.model.insertContent(createCodeSnippet(writer));
    });
  }

  refresh() {
    const model = this.editor.model;
    const selection = model.document.selection;
    const allowedIn = model.schema.findAllowedParent(selection.getFirstPosition(), 'codeSnippet');

    this.isEnabled = allowedIn !== null;
  }
}
