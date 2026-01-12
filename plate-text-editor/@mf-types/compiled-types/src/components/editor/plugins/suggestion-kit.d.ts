import { type BaseSuggestionConfig } from '@platejs/suggestion';
import type { ExtendConfig, Path } from 'platejs';
export type SuggestionConfig = ExtendConfig<BaseSuggestionConfig, {
    activeId: string | null;
    hoverId: string | null;
    uniquePathMap: Map<string, Path>;
}>;
export declare const suggestionPlugin: import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"suggestion", {
    currentUserId: string | null;
    isSuggesting: boolean;
} & {
    activeId: string | null;
    hoverId: string | null;
    uniquePathMap: Map<string, Path>;
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
}, {}, {}>>;
export declare const SuggestionKit: import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"suggestion", {
    currentUserId: string | null;
    isSuggesting: boolean;
} & {
    activeId: string | null;
    hoverId: string | null;
    uniquePathMap: Map<string, Path>;
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
}, {}, {}>>[];
