import { type Editor, useEditorState } from '@tiptap/react';
import cn from 'classnames';
import type { FC } from 'react';

import { Button } from '@shared/ui';

import styles from './menu-bar.module.scss';

interface MenuBarPropsType {
  editor: Editor;
}

export const MenuBar: FC<MenuBarPropsType> = ({ editor }) => {
  const {
    isBold,
    canBold,
    canUndo,
    canRedo,
    isHeading1,
    isHeading2,
    isHeading3,
    isSmallSize,
    isMediumSize,
    isLargeSize,
  } = useEditorState({
    editor,
    selector: (ctx) => {
      if (!ctx.editor) {
        return {
          isSmallSize: false,
          isMediumSize: false,
          isLargeSize: false,
        };
      }
      return {
        canUndo: ctx.editor.can().chain().focus().undo().run(),
        canRedo: ctx.editor.can().chain().focus().redo().run(),
        isBold: ctx.editor.isActive('bold') ?? false,
        canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
        isHeading1: ctx.editor.isActive('heading', { level: 1 }) ?? false,
        isHeading2: ctx.editor.isActive('heading', { level: 2 }) ?? false,
        isHeading3: ctx.editor.isActive('heading', { level: 3 }) ?? false,
        isSmallSize:
          ctx.editor.isActive('textStyle', { fontSize: '12px' }) ?? false,
        isMediumSize:
          ctx.editor.isActive('textStyle', { fontSize: '16px' }) ?? false,
        isLargeSize:
          ctx.editor.isActive('textStyle', { fontSize: '20px' }) ?? false,
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
        className={cn(
          styles['menu-bar-button'],
          isHeading1 && styles['active']
        )}
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }>
        H1
      </Button>
      <Button
        className={cn(
          styles['menu-bar-button'],
          isHeading2 && styles['active']
        )}
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }>
        H2
      </Button>
      <Button
        className={cn(
          styles['menu-bar-button'],
          isHeading3 && styles['active']
        )}
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        }>
        H3
      </Button>
      <Button
        className={cn(
          styles['menu-bar-button'],
          isSmallSize && styles['active']
        )}
        onClick={() => editor.chain().focus().setFontSize('12px').run()}>
        12px
      </Button>
      <Button
        className={cn(
          styles['menu-bar-button'],
          isMediumSize && styles['active']
        )}
        onClick={() => editor.chain().focus().setFontSize('16px').run()}>
        16px
      </Button>
      <Button
        className={cn(
          styles['menu-bar-button'],
          isLargeSize && styles['active']
        )}
        onClick={() => editor.chain().focus().setFontSize('20px').run()}>
        20px
      </Button>
      <Button
        className={cn(styles['menu-bar-button'])}
        onClick={() => editor.chain().focus().unsetFontSize().run()}>
        Unset font size
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
