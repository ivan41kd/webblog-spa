import { FontSize, TextStyle } from '@tiptap/extension-text-style';
import { Focus, Placeholder } from '@tiptap/extensions';
import { EditorContent, type JSONContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { type FC } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { MenuBar } from './menu-bar/MenuBar';
import styles from './post-editor.module.scss';

interface CreatePostEditorPropsType {
  name: string;
  value: string;
  error?: string;
  defaultValue?: JSONContent;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export const CreatePostEditor: FC<CreatePostEditorPropsType> = ({
  name,
  value,
  error,
  onChange,
  defaultValue,
}) => {
  const onChangeEditor = useDebouncedCallback((value: JSONContent | string) => {
    onChange({
      target: { name, value },
    } as React.ChangeEvent<HTMLTextAreaElement>);
  }, 100);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        trailingNode: false,
        heading: {
          levels: [1, 2, 3],
        },
      }),
      TextStyle,
      FontSize,
      Focus.configure({
        className: styles['ProseMirror-focused'],
        mode: 'shallowest',
      }),
      Placeholder.configure({
        placeholder: 'Start writing your story here...',
        emptyEditorClass: styles['is-empty'],
      }),
    ],

    content: value,
    editorProps: {
      attributes: { class: styles['post-editor-field'] },
      handlePaste(view, event) {
        const pastedText = event.clipboardData?.getData('text/plain');

        if (pastedText) {
          view.dispatch(view.state.tr.insertText(pastedText));
          return true;
        }

        return false;
      },
    },
    onUpdate({ editor }) {
      const currentContent = editor.isEmpty ? '' : editor.getJSON();

      onChangeEditor(currentContent);
    },
    onBlur({ editor }) {
      const currentContent = editor.isEmpty
        ? (defaultValue as JSONContent)
        : editor.getJSON();

      onChangeEditor(currentContent);
      if (editor.isEmpty && defaultValue) {
        editor.commands.setContent(defaultValue);
      }
    },
  });

  return (
    <div className={styles['post-editor']}>
      <div className={styles['post-editor-wrapper']}>
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
      {error && <span className={styles['error-text']}>{error}</span>}
    </div>
  );
};
