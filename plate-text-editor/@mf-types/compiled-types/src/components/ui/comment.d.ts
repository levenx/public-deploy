import { type Value } from 'platejs';
import * as React from 'react';
export type TComment = {
    id: string;
    contentRich: Value;
    createdAt: Date;
    discussionId: string;
    isEdited: boolean;
    userId: string;
};
export declare function Comment(props: {
    comment: TComment;
    discussionLength: number;
    editingId: string | null;
    index: number;
    setEditingId: React.Dispatch<React.SetStateAction<string | null>>;
    documentContent?: string;
    showDocumentContent?: boolean;
    onEditorClick?: () => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function CommentCreateForm({ autoFocus, className, discussionId: discussionIdProp, focusOnMount, }: {
    autoFocus?: boolean;
    className?: string;
    discussionId?: string;
    focusOnMount?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export declare const formatCommentDate: (date: Date) => string;
