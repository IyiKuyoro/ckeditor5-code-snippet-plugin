import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { toWidgetEditable } from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';
import InsertCodeSnippetCommand from './insertcodesnippetcommand';

export default class CodeSnippetEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  init() {
    this._defineSchema();
    this._defineConverters();

    this.editor.commands.add('insertCodeSnippet', new InsertCodeSnippetCommand(this.editor));
  }

  _defineSchema() {
    const schema = this.editor.model.schema;

    schema.register('codeSnippet', {
      // Cannot be split or left by the caret.
      isLimit: true,
      // Allow in places where other blocks are allowed (e.g. directly in the root).
      allowWhere: '$block',
      // Allow only block content
      allowContentOf: ['$block', '$text'],
    });
  }

  _defineConverters() {
    const conversion = this.editor.conversion;

    conversion.for('upcast').elementToElement({
      model: 'codeSnippet',
      view: {
        name: 'pre',
        classes: 'code-snippet',
      },
    });
    conversion.for('dataDowncast').elementToElement({
      model: 'codeSnippet',
      view: {
        name: 'pre',
        classes: 'code-snippet',
      },
    });
    conversion.for('editingDowncast').elementToElement({
      model: 'codeSnippet',
      view: (modelElement, viewWriter) => {
        const pre = viewWriter.createEditableElement('pre', { class: 'code-snippet' });

        return toWidgetEditable(pre, viewWriter, { label: 'code snippet widget' });
      },
    });
  }
}
