export declare const BaseSuggestionKit: import("platejs").SlatePlugin<import("platejs").PluginConfig<"suggestion", {
    currentUserId: string | null;
    isSuggesting: boolean;
}, {
    suggestion: {
        dataList: (node: import("platejs").TSuggestionText) => import("platejs").TInlineSuggestionData[];
        isBlockSuggestion: (node: import("platejs").TNode) => node is import("platejs").TSuggestionElement;
        node: (options?: import("platejs").EditorNodesOptions & {
            id?: string;
            isText?: boolean;
        }) => import("platejs").NodeEntry<import("platejs").TSuggestionElement | import("platejs").TSuggestionText> | undefined;
        nodeId: (node: import("platejs").TElement | import("platejs").TSuggestionText) => string | undefined;
        nodes: (options?: import("platejs").EditorNodesOptions & {
            transient?: boolean;
        }) => import("platejs").NodeEntry<import("platejs").TElement | import("platejs").TSuggestionText>[];
        suggestionData: (node: import("platejs").TElement | import("platejs").TSuggestionText) => import("platejs").TInlineSuggestionData | import("platejs").TSuggestionElement["suggestion"] | undefined;
        withoutSuggestions: (fn: () => void) => void;
    };
} & Record<"suggestion", {
    dataList: (node: import("platejs").TSuggestionText) => import("platejs").TInlineSuggestionData[];
    isBlockSuggestion: (node: import("platejs").TNode) => node is import("platejs").TSuggestionElement;
    node: (options?: import("platejs").EditorNodesOptions & {
        id?: string;
        isText?: boolean;
    }) => import("platejs").NodeEntry<import("platejs").TSuggestionElement | import("platejs").TSuggestionText> | undefined;
    nodeId: (node: import("platejs").TElement | import("platejs").TSuggestionText) => string | undefined;
    nodes: (options?: import("platejs").EditorNodesOptions & {
        transient?: boolean;
    }) => import("platejs").NodeEntry<import("platejs").TElement | import("platejs").TSuggestionText>[];
    suggestionData: (node: import("platejs").TElement | import("platejs").TSuggestionText) => import("platejs").TInlineSuggestionData | import("platejs").TSuggestionElement["suggestion"] | undefined;
    withoutSuggestions: (fn: () => void) => void;
}>, {}, {}>>[];
