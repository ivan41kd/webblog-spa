import { Focus } from '@tiptap/extensions';
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
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const CreatePostEditor: FC<CreatePostEditorPropsType> = ({
  name,
  value,
  error,
  onChange,
}) => {
  const onChangeEditor = useDebouncedCallback((value: JSONContent | string) => {
    onChange({
      target: { name, value },
    } as React.ChangeEvent<HTMLTextAreaElement>);
  }, 300);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        trailingNode: false,
      }),
      Focus.configure({
        className: styles['ProseMirror-focused'],
        mode: 'shallowest',
      }),
    ],

    content: value,
    editorProps: {
      attributes: { class: styles['post-editor-field'] },
      handlePaste(view, event) {
        const pastedText = event.clipboardData?.getData('text/plain');

        if (pastedText) {
          const cleanText = pastedText.replace(/[\r\n]+/g, ' ').trim();
          view.dispatch(view.state.tr.insertText(cleanText));
          return true;
        }

        return false;
      },
    },
    onUpdate({ editor }) {
      const currentContent = editor.isEmpty ? '' : editor.getJSON();

      onChangeEditor(currentContent);
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
