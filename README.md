# CKEditor5 Code Snippet Plugin

This plugin helps your create a code block or snippet in your rich text.

![Demo](https://res.cloudinary.com/iyikuyoro/image/upload/v1574861568/GitHub%20Readme%20Images/Screenshot_2019-11-27_at_14.31.53.png)

## How to Use

1) To make use of this plugin, you will need to setup your editor using the framework. If you have not done so, bellow are links to the respective frontend framework specific docs for this. I will recommend you use a custom editor rather than the build.

   - [Node](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/quick-start.html)
   - [Angular](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/angular.html#quick-start)
   - [React](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html#quick-start)
   - [Vue](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs.html)

2) Install this package using `npm i ckeditor5-code-snippet-plugin`. This package contains the plugin that will help create preformatted text as well as the command and toolbar button.

3) Import the CodeSnippet plugin into the file that contains your editor like so

```javascript
import CodeSnippet from 'ckeditor-code-snippet-plugin/dist/codesnippet';
```

4) In the `config` object, add `CodeSnippet` to the list of plugins.

```javascript
plugins: [
  ..., CodeSnippet, ...
],
```

5) Add the command to the list of `toolbar` elements as well.

```javascript
toolbar: [..., 'codeSnippet', ...],
```

## Styling the Preformatted Text

To add custom styles to the preformatted text, you will need to add the following class to your global style. `code-snippet`. You may notice that the style gets overwritten when the `pre` element is in focus. To modify the override, add and edit the following selector as well `.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused, .ck .ck-editor__nested-editable:focus`.

## Contributors

_Opeoluwa Iyi-Kuyoro_: 👨🏿[Profile](https://github.com/IyiKuyoro) - [WebSite](https://iyikuyoro.com)
