export declare const aiChatPlugin: import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"aiChat", {
    chatOptions: {
        api: string;
        body: {};
    };
} & {
    _blockChunks: string;
    _blockPath: import("platejs").Path | null;
    _mdxName: string | null;
    _replaceIds: string[];
    aiEditor: import("platejs").SlateEditor | null;
    chat: import("@ai-sdk/react").UseChatHelpers<import("ai").UIMessage<{}, {
        toolName: "comment" | "edit" | "generate";
        comment?: {
            blockId: string;
            comment: string;
            content: string;
        };
    }, import("ai").UITools>>;
    chatNodes: import("platejs").TIdElement[];
    chatSelection: import("platejs").TRange | null;
    experimental_lastTextId: string | null;
    mode: import("@platejs/ai").AIMode;
    open: boolean;
    streaming: boolean;
    toolName: import("@platejs/ai").AIToolName;
} & import("@platejs/combobox").TriggerComboboxPluginOptions, {
    aiChat: {
        reset: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, { undo }?: {
            undo?: boolean;
        }) => void>;
        submit: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, input: string, { mode, options, prompt, toolName: toolNameProps }?: {
            mode?: import("@platejs/ai").AIMode;
            options?: import("ai").ChatRequestOptions;
            prompt?: import("@platejs/ai").EditorPrompt;
            toolName?: import("@platejs/ai").AIToolName;
        }) => void>;
        hide: (options?: {
            focus?: boolean;
            undo?: boolean;
        }) => void;
        node: (options?: import("platejs").EditorNodesOptions & {
            anchor?: boolean;
            streaming?: boolean;
        }) => import("platejs").NodeEntry | undefined;
        reload: () => void;
        show: () => void;
        stop: () => void;
    };
} & Record<"aiChat", Pick<{
    reset: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, { undo }?: {
        undo?: boolean;
    }) => void>;
    submit: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, input: string, { mode, options, prompt, toolName: toolNameProps }?: {
        mode?: import("@platejs/ai").AIMode;
        options?: import("ai").ChatRequestOptions;
        prompt?: import("@platejs/ai").EditorPrompt;
        toolName?: import("@platejs/ai").AIToolName;
    }) => void>;
    hide: (options?: {
        focus?: boolean;
        undo?: boolean;
    }) => void;
    node: (options?: import("platejs").EditorNodesOptions & {
        anchor?: boolean;
        streaming?: boolean;
    }) => import("platejs").NodeEntry | undefined;
    reload: () => void;
    show: () => void;
    stop: () => void;
}, "node" | "reset" | "submit" | "stop">> & Record<"aiChat", {
    hide: ({ focus, undo }?: {
        focus?: boolean;
        undo?: boolean;
    }) => void;
    show: () => void;
}>, {
    aiChat: {
        accept: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor) => void>;
        insertBelow: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, sourceEditor: import("platejs").SlateEditor, { format }?: {
            format?: "all" | "none" | "single";
        }) => void>;
        replaceSelection: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, sourceEditor: import("platejs").SlateEditor, { format }?: {
            format?: "all" | "none" | "single";
        }) => void>;
        removeAnchor: (options?: import("platejs").EditorNodesOptions) => void;
    };
} & Record<"aiChat", {
    accept: () => void;
    insertBelow: (sourceEditor: import("platejs").SlateEditor, args_1?: {
        format?: "all" | "none" | "single";
    } | undefined) => void;
    removeAnchor: (options?: import("platejs").RemoveNodesOptions | undefined) => void;
    replaceSelection: (sourceEditor: import("platejs").SlateEditor, args_1?: {
        format?: "all" | "none" | "single";
    } | undefined) => void;
}>, {}>>;
export declare const AIKit: (import("platejs").SlatePlugin<import("platejs").PluginConfig<"markdown", {
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
        serialize: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, options?: Omit<import("@platejs/markdown").SerializeMdOptions, "editor">) => string>;
    };
} & Record<"markdown", {
    deserialize: (data: string, options?: Omit<import("@platejs/markdown").DeserializeMdOptions, "editor"> | undefined) => import("platejs").Value;
    deserializeInline: (text: string, options?: import("@platejs/markdown").DeserializeMdOptions | undefined) => import("platejs").Descendant[];
    serialize: (options?: Omit<import("@platejs/markdown").SerializeMdOptions, "editor"> | undefined) => string;
}>, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<any, {}, {}, Record<any, {
    insertNodes: (nodes: import("platejs").Descendant[], args_1?: {
        target?: import("platejs").Path;
    } | undefined) => void;
    removeMarks: (args_0?: {
        at?: import("platejs").TLocation;
    } | undefined) => void;
    removeNodes: (args_0?: {
        at?: import("platejs").Path;
    } | undefined) => void;
    undo: () => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"cursorOverlay", {
    cursors: Record<string, import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>>;
}, {
    cursorOverlay: {
        addCursor: (id: string, cursor: Omit<import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>, "id">) => void;
        removeCursor: (id: (string & {}) | "drag" | "selection") => void;
    };
} & Record<"cursorOverlay", {
    addCursor: (id: string, cursor: Omit<import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>, "id">) => void;
    removeCursor: (id: (string & {}) | "drag" | "selection") => void;
}>, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"aiChat", {
    chatOptions: {
        api: string;
        body: {};
    };
} & {
    _blockChunks: string;
    _blockPath: import("platejs").Path | null;
    _mdxName: string | null;
    _replaceIds: string[];
    aiEditor: import("platejs").SlateEditor | null;
    chat: import("@ai-sdk/react").UseChatHelpers<import("ai").UIMessage<{}, {
        toolName: "comment" | "edit" | "generate";
        comment?: {
            blockId: string;
            comment: string;
            content: string;
        };
    }, import("ai").UITools>>;
    chatNodes: import("platejs").TIdElement[];
    chatSelection: import("platejs").TRange | null;
    experimental_lastTextId: string | null;
    mode: import("@platejs/ai").AIMode;
    open: boolean;
    streaming: boolean;
    toolName: import("@platejs/ai").AIToolName;
} & import("@platejs/combobox").TriggerComboboxPluginOptions, {
    aiChat: {
        reset: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, { undo }?: {
            undo?: boolean;
        }) => void>;
        submit: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, input: string, { mode, options, prompt, toolName: toolNameProps }?: {
            mode?: import("@platejs/ai").AIMode;
            options?: import("ai").ChatRequestOptions;
            prompt?: import("@platejs/ai").EditorPrompt;
            toolName?: import("@platejs/ai").AIToolName;
        }) => void>;
        hide: (options?: {
            focus?: boolean;
            undo?: boolean;
        }) => void;
        node: (options?: import("platejs").EditorNodesOptions & {
            anchor?: boolean;
            streaming?: boolean;
        }) => import("platejs").NodeEntry | undefined;
        reload: () => void;
        show: () => void;
        stop: () => void;
    };
} & Record<"aiChat", Pick<{
    reset: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, { undo }?: {
        undo?: boolean;
    }) => void>;
    submit: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, input: string, { mode, options, prompt, toolName: toolNameProps }?: {
        mode?: import("@platejs/ai").AIMode;
        options?: import("ai").ChatRequestOptions;
        prompt?: import("@platejs/ai").EditorPrompt;
        toolName?: import("@platejs/ai").AIToolName;
    }) => void>;
    hide: (options?: {
        focus?: boolean;
        undo?: boolean;
    }) => void;
    node: (options?: import("platejs").EditorNodesOptions & {
        anchor?: boolean;
        streaming?: boolean;
    }) => import("platejs").NodeEntry | undefined;
    reload: () => void;
    show: () => void;
    stop: () => void;
}, "node" | "reset" | "submit" | "stop">> & Record<"aiChat", {
    hide: ({ focus, undo }?: {
        focus?: boolean;
        undo?: boolean;
    }) => void;
    show: () => void;
}>, {
    aiChat: {
        accept: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor) => void>;
        insertBelow: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, sourceEditor: import("platejs").SlateEditor, { format }?: {
            format?: "all" | "none" | "single";
        }) => void>;
        replaceSelection: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, sourceEditor: import("platejs").SlateEditor, { format }?: {
            format?: "all" | "none" | "single";
        }) => void>;
        removeAnchor: (options?: import("platejs").EditorNodesOptions) => void;
    };
} & Record<"aiChat", {
    accept: () => void;
    insertBelow: (sourceEditor: import("platejs").SlateEditor, args_1?: {
        format?: "all" | "none" | "single";
    } | undefined) => void;
    removeAnchor: (options?: import("platejs").RemoveNodesOptions | undefined) => void;
    replaceSelection: (sourceEditor: import("platejs").SlateEditor, args_1?: {
        format?: "all" | "none" | "single";
    } | undefined) => void;
}>, {}>>)[];
