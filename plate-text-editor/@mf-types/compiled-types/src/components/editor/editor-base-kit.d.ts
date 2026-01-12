export declare const BaseEditorKit: (import("platejs").SlatePlugin<import("platejs").PluginConfig<"comment", {}, {
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
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"p", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<any, {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"textAlign", {}, {}, Record<"textAlign", {
    setNodes: (value: import("@platejs/basic-styles").Alignment, setNodesOptions?: import("platejs").SetNodesOptions | undefined) => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"blockquote", {}, {}, Record<"blockquote", {
    toggle: () => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"hr", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"bold", {}, {}, Record<"bold", {
    toggle: () => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"italic", {}, {}, Record<"italic", {
    toggle: () => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"underline", {}, {}, Record<"underline", {
    toggle: () => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"code", {}, {}, Record<"code", {
    toggle: () => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"strikethrough", {}, {}, Record<"strikethrough", {
    toggle: () => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"subscript", {}, {}, Record<"subscript", {
    toggle: () => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"superscript", {}, {}, Record<"superscript", {
    toggle: () => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"highlight", {}, {}, Record<"highlight", {
    toggle: () => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"kbd", {}, {}, Record<"kbd", {
    toggle: () => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"callout", {}, {}, {
    insert: {
        callout: (args_0?: ({
            batchDirty?: boolean;
            hanging?: boolean;
            nextBlock?: boolean;
            removeEmpty?: import("platejs").QueryNodeOptions | boolean;
            select?: boolean;
        } & {
            id?: boolean | string;
            block?: boolean;
            empty?: boolean;
            match?: import("platejs").Predicate<import("platejs").NodeIn<import("platejs").Value>> | undefined;
            text?: boolean;
        } & import("platejs").QueryAt & import("platejs").QueryMode & import("platejs").QueryVoids & {
            icon?: string;
            variant?: (string & {}) | import("platejs").TCalloutElement["variant"];
        }) | undefined) => void;
    };
}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"code_block", {
    defaultLanguage?: string | null;
    lowlight?: ReturnType<typeof import("lowlight").createLowlight> | null;
}, {}, Record<"code_block", {
    toggle: () => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"code_syntax", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"column_group", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"column", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"date", {}, {}, {
    insert: {
        date: (args_0?: ({
            date?: string;
        } & {
            batchDirty?: boolean;
            hanging?: boolean;
            nextBlock?: boolean;
            removeEmpty?: import("platejs").QueryNodeOptions | boolean;
            select?: boolean;
        } & {
            id?: boolean | string;
            block?: boolean;
            empty?: boolean;
            match?: import("platejs").Predicate<import("platejs").NodeIn<import("platejs").Value>> | undefined;
            text?: boolean;
        } & import("platejs").QueryAt & import("platejs").QueryMode & import("platejs").QueryVoids) | undefined) => void;
    };
}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"color", {}, {}, Record<"color", {
    addMark: (value: string) => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"backgroundColor", {}, {}, Record<"backgroundColor", {
    addMark: (value: string) => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"fontSize", {}, {}, Record<"fontSize", {
    addMark: (value: string) => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"fontFamily", {}, {}, Record<"fontFamily", {
    addMark: (value: string) => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"lineHeight", {}, {}, Record<"lineHeight", {
    setNodes: (value: number, setNodesOptions?: import("platejs").SetNodesOptions | undefined) => void;
}>, {}>> | import("platejs").SlatePlugin<import("@platejs/link").BaseLinkConfig> | import("platejs").SlatePlugin<import("@platejs/indent").IndentConfig> | import("platejs").SlatePlugin<import("@platejs/list").BaseListConfig> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"markdown", {
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
}>, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"inline_equation", {}, {}, {
    insert: {
        inlineEquation: (texExpression?: string | undefined, options?: import("platejs").InsertNodesOptions | undefined) => void;
    };
}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"equation", {}, {}, {
    insert: {
        equation: (options?: import("platejs").InsertNodesOptions | undefined) => void;
    };
}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"img", {
    disableEmbedInsert?: boolean;
    disableUploadInsert?: boolean;
    uploadImage?: (dataUrl: ArrayBuffer | string) => ArrayBuffer | Promise<ArrayBuffer | string> | string;
} & import("@platejs/media").MediaPluginOptions, {}, {
    insert: {
        imageFromFiles: (files: FileList, options?: import("platejs").InsertNodesOptions | undefined) => void;
    };
}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"video", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"audio", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"file", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"caption", {
    focusEndPath: import("platejs").Path | null;
    focusStartPath: import("platejs").Path | null;
    query: {
        allow: string[];
    };
    visibleId: string | null;
}, {}, {}, {
    isVisible?: (elementId: string) => boolean;
}>> | import("platejs").SlatePlugin<import("@platejs/media").MediaEmbedConfig> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"placeholder", import("@platejs/media").MediaPlaceholderOptions, {}, {
    insert: {
        audioPlaceholder: (options?: import("platejs").InsertNodesOptions | undefined) => void;
        filePlaceholder: (options?: import("platejs").InsertNodesOptions | undefined) => void;
        imagePlaceholder: (options?: import("platejs").InsertNodesOptions | undefined) => void;
        videoPlaceholder: (options?: import("platejs").InsertNodesOptions | undefined) => void;
    };
}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"mention", {
    insertSpaceAfterMention?: boolean;
} & import("@platejs/combobox").TriggerComboboxPluginOptions, {}, {
    insert: {
        mention: (options: {
            search: string;
            value: any;
            key?: any;
        }) => void;
    };
}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"suggestion", {
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
}>, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"table", {
    _cellIndices: Record<string, {
        col: number;
        row: number;
    }>;
    selectedCells: import("platejs").TElement[] | null;
    selectedTables: import("platejs").TElement[] | null;
    disableExpandOnInsert?: boolean;
    disableMarginLeft?: boolean;
    disableMerge?: boolean;
    enableUnsetSingleColSize?: boolean;
    initialTableWidth?: number;
    minColumnWidth?: number;
}, {
    create: {
        table: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { colCount, header, rowCount, ...cellOptions }?: import("@platejs/table").GetEmptyTableNodeOptions) => import("platejs").TTableElement>;
        tableCell: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { children, header, row }?: import("@platejs/table").CreateCellOptions) => {
            children: import("platejs").Descendant[];
            type: string;
        }>;
        tableRow: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { colCount, ...cellOptions }?: import("@platejs/table").GetEmptyRowNodeOptions) => {
            children: {
                children: import("platejs").Descendant[];
                type: string;
            }[];
            type: string;
        }>;
    };
    table: {
        getCellBorders: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { cellIndices, defaultBorder, element }: {
            element: import("platejs").TTableCellElement;
            cellIndices?: import("@platejs/table").CellIndices;
            defaultBorder?: import("platejs").TTableCellBorder;
        }) => import("@platejs/table").BorderStylesDefault>;
        getCellSize: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { cellIndices, colSizes, element, rowSize }: {
            element: import("platejs").TTableCellElement;
            cellIndices?: import("@platejs/table").CellIndices;
            colSizes?: number[];
            rowSize?: number;
        }) => {
            minHeight: number | undefined;
            width: number;
        }>;
        getColSpan: (cellElem: import("platejs").TTableCellElement) => number;
        getRowSpan: (cellElem: import("platejs").TTableCellElement) => number;
        getCellChildren: (cell: import("platejs").TTableCellElement) => import("platejs").Descendant[];
    };
}, {
    insert: {
        table: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { colCount, header, rowCount }?: import("@platejs/table").GetEmptyTableNodeOptions, { select: shouldSelect, ...options }?: import("platejs").InsertNodesOptions) => void>;
        tableColumn: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, options?: {
            at?: import("platejs").Path;
            before?: boolean;
            fromCell?: import("platejs").Path;
            header?: boolean;
            select?: boolean;
        }) => void>;
        tableRow: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, options?: {
            at?: import("platejs").Path;
            before?: boolean;
            fromRow?: import("platejs").Path;
            header?: boolean;
            select?: boolean;
        }) => void>;
    };
    remove: {
        table: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor) => void>;
        tableColumn: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor) => void>;
        tableRow: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor) => void>;
    };
    table: {
        merge: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor) => void>;
        split: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor) => void>;
    };
}, {
    cellIndices?: (id: string) => import("@platejs/table").CellIndices;
}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"tr", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"td", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"th", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("@platejs/toc").TocConfig> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"toggle", {
    openIds?: Set<string>;
}, {
    toggle: {
        toggleIds: (ids: string[], force?: boolean | null) => void;
    };
} & Record<"toggle", {
    toggleIds: (ids: string[], force?: boolean | null) => void;
}>, {}, {
    isOpen?: (toggleId: string) => boolean;
    someClosed?: (toggleIds: string[]) => boolean;
}>>)[];
