import { type Editor, useEditorState } from '@tiptap/react';
import cn from 'classnames';
import type { FC } from 'react';

import { Button } from '@shared/ui';

import styles from './menu-bar.module.scss';

interface MenuBarPropsType {
  editor: Editor;
}

export const MenuBar: FC<MenuBarPropsType> = ({ editor }) => {
  const { isBold, canBold, canUndo, canRedo } = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        canUndo: ctx.editor.can().chain().focus().undo().run(),
        canRedo: ctx.editor.can().chain().focus().redo().run(),
        isBold: ctx.editor.isActive('bold') ?? false,
        canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
      };
    },
  });

  if (!editor) return;
  return (
    <div className={styles['menu-bar']}>
      <Button
        className={cn(styles['menu-bar-button'], isBold && styles['active'])}
        isDisabled={!canBold}
        onClick={() => editor.chain().focus().toggleBold().run()}>
        Bold
      </Button>
      <Button
        isDisabled={!canUndo}
        onClick={() => editor.chain().focus().undo().run()}>
        Undo
      </Button>
      <Button
        isDisabled={!canRedo}
        onClick={() => editor.chain().focus().redo().run()}>
        Redo
      </Button>
    </div>
  );
};
