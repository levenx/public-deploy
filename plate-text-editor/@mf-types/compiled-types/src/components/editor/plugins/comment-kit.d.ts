import type { Path } from 'platejs';
export declare const commentPlugin: import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"comment", {
    activeId: string | null;
    commentingBlock: Path | null;
    hoverId: string | null;
    uniquePathMap: Map<string, Path>;
}, {
    comment: {
        has: (options: {
            id: string;
        }) => boolean;
        node: (options?: import("platejs").EditorNodesOptions & {
            id?: string;
            isDraft?: boolean;
        }) => import("platejs").NodeEntry<import("platejs").TCommentText> | undefined;
        nodeId: (leaf: import("platejs").TCommentText) => string | undefined;
        nodes: (options?: import("platejs").EditorNodesOptions & {
            id?: string;
            isDraft?: boolean;
            transient?: boolean;
        }) => import("platejs").NodeEntry<import("platejs").TCommentText>[];
    };
}, {
    comment: {
        removeMark: () => void;
        setDraft: (options?: import("platejs").SetNodesOptions) => void;
        unsetMark: (options: {
            id?: string;
            transient?: boolean;
        }) => void;
    };
} & Record<"comment", {
    setDraft: () => void;
}>, {}>>;
export declare const CommentKit: import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"comment", {
    activeId: string | null;
    commentingBlock: Path | null;
    hoverId: string | null;
    uniquePathMap: Map<string, Path>;
}, {
    comment: {
        has: (options: {
            id: string;
        }) => boolean;
        node: (options?: import("platejs").EditorNodesOptions & {
            id?: string;
            isDraft?: boolean;
        }) => import("platejs").NodeEntry<import("platejs").TCommentText> | undefined;
        nodeId: (leaf: import("platejs").TCommentText) => string | undefined;
        nodes: (options?: import("platejs").EditorNodesOptions & {
            id?: string;
            isDraft?: boolean;
            transient?: boolean;
        }) => import("platejs").NodeEntry<import("platejs").TCommentText>[];
    };
}, {
    comment: {
        removeMark: () => void;
        setDraft: (options?: import("platejs").SetNodesOptions) => void;
        unsetMark: (options: {
            id?: string;
            transient?: boolean;
        }) => void;
    };
} & Record<"comment", {
    setDraft: () => void;
}>, {}>>[];
