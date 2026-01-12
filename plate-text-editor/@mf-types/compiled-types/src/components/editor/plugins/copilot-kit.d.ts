import { serializeMd } from '@platejs/markdown';
export declare const CopilotKit: (import("platejs").SlatePlugin<import("platejs").PluginConfig<"markdown", {
    allowedNodes: import("@platejs/markdown").PlateType[] | null;
    disallowedNodes: import("@platejs/markdown").PlateType[] | null;
    remarkPlugins: import("unified").Plugin[];
    remarkStringifyOptions: import("remark-stringify").Options | null;
    rules: import("@platejs/markdown").MdRules | null;
    allowNode?: import("@platejs/markdown").AllowNodeConfig;
    plainMarks?: import("@platejs/markdown").PlateType[] | null;
}, {
    markdown: {
        deserialize: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, data: string, options?: Omit<import("@platejs/markdown").DeserializeMdOptions, "editor">) => import("platejs").Value>;
        deserializeInline: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, text: string, options?: import("@platejs/markdown").DeserializeMdOptions) => import("platejs").Descendant[]>;
        serialize: import("platejs").OmitFirst<typeof serializeMd>;
    };
} & Record<"markdown", {
    deserialize: (data: string, options?: Omit<import("@platejs/markdown").DeserializeMdOptions, "editor"> | undefined) => import("platejs").Value;
    deserializeInline: (text: string, options?: import("@platejs/markdown").DeserializeMdOptions | undefined) => import("platejs").Descendant[];
    serialize: (options?: Omit<import("@platejs/markdown").SerializeMdOptions, "editor"> | undefined) => string;
}>, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"copilot", {
    abortController?: AbortController | null;
    completion?: string | null;
    error?: Error | null;
    isLoading?: boolean;
} & {
    completeOptions?: Partial<import("@platejs/ai/react").CompleteOptions>;
    debounceDelay?: number;
    getNextWord?: import("@platejs/ai/react").GetNextWord;
    renderGhostText?: (() => React.ReactNode) | null;
    shouldAbort?: boolean;
    suggestionNodeId?: string | null;
    suggestionText?: string | null;
    autoTriggerQuery?: (options: {
        editor: import("platejs/react").PlateEditor;
    }) => boolean;
    getPrompt?: (options: {
        editor: import("platejs/react").PlateEditor;
    }) => string;
    triggerQuery?: (options: {
        editor: import("platejs/react").PlateEditor;
    }) => boolean;
}, {
    copilot: {
        triggerSuggestion: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor) => Promise<false | undefined>>;
        reject: () => false | undefined;
        setBlockSuggestion: (options: {
            text: string;
            id?: string;
        }) => void;
        stop: () => void;
    };
} & Record<"copilot", Omit<{
    triggerSuggestion: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor) => Promise<false | undefined>>;
    reject: () => false | undefined;
    setBlockSuggestion: (options: {
        text: string;
        id?: string;
    }) => void;
    stop: () => void;
}, "reject">> & Record<"copilot", {
    reject: () => false | undefined;
}>, {
    copilot: {
        accept: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor) => false | undefined>;
        acceptNextWord: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor) => false | undefined>;
    };
} & Record<"copilot", {
    accept: () => false | undefined;
    acceptNextWord: () => false | undefined;
}>, {
    isSuggested?: (id: string) => boolean;
}>>)[];
