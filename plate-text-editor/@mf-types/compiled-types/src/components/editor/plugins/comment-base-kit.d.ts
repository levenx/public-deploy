export declare const BaseCommentKit: import("platejs").SlatePlugin<import("platejs").PluginConfig<"comment", {}, {
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
} & Record<"comment", {
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
}>, {
    comment: {
        removeMark: () => void;
        setDraft: (options?: import("platejs").SetNodesOptions) => void;
        unsetMark: (options: {
            id?: string;
            transient?: boolean;
        }) => void;
    };
} & Record<"comment", {
    removeMark: () => void;
    setDraft: (options?: import("platejs").SetNodesOptions) => void;
    unsetMark: (options: {
        id?: string;
        transient?: boolean;
    }) => void;
}>, {}>>[];
