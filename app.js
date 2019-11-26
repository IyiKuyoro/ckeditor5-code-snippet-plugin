import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import List from '@ckeditor/ckeditor5-list/src/list';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';

import CodeSnippet from './codesnippet/codesnippet';

BalloonEditor
  .create(document.querySelector('#editor'), {
    plugins: [
      Essentials,
      Paragraph,
      Heading,
      List,
      Bold,
      Italic,
      Subscript,
      Strikethrough,
      Underline,
      CodeSnippet,
    ],
    toolbar: [
      'heading',
      'bold',
      'italic',
      'numberedList',
      'bulletedList',
      'subscript',
      'strikethrough',
      'underline',
      'image',
      'codeSnippet',
    ],
  })
  .then((editor) => {
    console.log('Editor was initialized', editor);

    // Expose for playing in the console.
    window.editor = editor;
  })
  .catch((error) => {
    console.error(error.stack);
  });
