import { type EmojiIconList } from '@platejs/emoji';
import { type EmojiDropdownMenuOptions, type UseEmojiPickerType } from '@platejs/emoji/react';
import * as React from 'react';
import { ToolbarButton } from '@/components/ui/toolbar';
export declare function EmojiToolbarButton({ options, ...props }: {
    options?: EmojiDropdownMenuOptions;
} & React.ComponentPropsWithoutRef<typeof ToolbarButton>): import("react/jsx-runtime").JSX.Element;
export declare function EmojiPopover({ children, control, isOpen, setIsOpen, }: {
    children: React.ReactNode;
    control: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function EmojiPicker({ clearSearch, emoji, emojiLibrary, focusedCategory, hasFound, i18n, icons, isSearching, refs, searchResult, searchValue, setSearch, settings, visibleCategories, handleCategoryClick, onMouseOver, onSelectEmoji, }: Omit<UseEmojiPickerType, 'icons'> & {
    icons?: EmojiIconList<React.ReactElement>;
}): import("react/jsx-runtime").JSX.Element;
