import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import CodeSnippetEditing from './codesnippetediting';
import CodeSnippetUI from './codesnippetui';

export default class CodeSnippet extends Plugin {
  static get requires() {
    return [CodeSnippetEditing, CodeSnippetUI];
  }
}
