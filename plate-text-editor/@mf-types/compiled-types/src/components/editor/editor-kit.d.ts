import { type Value } from 'platejs';
import { type TPlateEditor } from 'platejs/react';
export declare const EditorKit: (import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"comment", {
    activeId: string | null;
    commentingBlock: import("platejs").Path | null;
    hoverId: string | null;
    uniquePathMap: Map<string, import("platejs").Path>;
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
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"markdown", {
    allowedNodes: import("@platejs/markdown").PlateType[] | null;
    disallowedNodes: import("@platejs/markdown").PlateType[] | null;
    remarkPlugins: import("unified").Plugin[];
    remarkStringifyOptions: import("remark-stringify").Options | null;
    rules: import("@platejs/markdown").MdRules | null;
    allowNode?: import("@platejs/markdown").AllowNodeConfig;
    plainMarks?: import("@platejs/markdown").PlateType[] | null;
}, {
    markdown: {
        deserialize: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, data: string, options?: Omit<import("@platejs/markdown").DeserializeMdOptions, "editor">) => Value>;
        deserializeInline: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, text: string, options?: import("@platejs/markdown").DeserializeMdOptions) => import("platejs").Descendant[]>;
        serialize: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, options?: Omit<import("@platejs/markdown").SerializeMdOptions, "editor">) => string>;
    };
} & Record<"markdown", {
    deserialize: (data: string, options?: Omit<import("@platejs/markdown").DeserializeMdOptions, "editor"> | undefined) => Value;
    deserializeInline: (text: string, options?: import("@platejs/markdown").DeserializeMdOptions | undefined) => import("platejs").Descendant[];
    serialize: (options?: Omit<import("@platejs/markdown").SerializeMdOptions, "editor"> | undefined) => string;
}>, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"blockSelection", {
    anchorId?: string | null;
    areaOptions?: {
        document?: Document;
    } & {
        container?: (string | HTMLElement | (string | HTMLElement)[]) | undefined;
        features?: {
            range?: boolean | undefined;
            singleTap?: {
                allow?: boolean | undefined;
                intersect?: ("touch" | "native") | undefined;
            } | undefined;
            touch?: boolean | undefined;
        } | undefined;
        behaviour?: {
            intersect?: ("center" | "touch" | "cover") | undefined;
            overlap?: ("drop" | "invert" | "keep") | undefined;
            scrolling?: {
                manualSpeed?: number | undefined;
                speedDivider?: number | undefined;
                startScrollMargins?: {
                    x?: number | undefined;
                    y?: number | undefined;
                } | undefined;
            } | undefined;
            startThreshold?: number | {
                x?: number | undefined;
                y?: number | undefined;
            } | undefined;
            triggers?: ((0 | 2 | 1 | 3 | 4) | {
                button: 0 | 2 | 1 | 3 | 4;
                modifiers: ("shift" | "alt" | "ctrl")[];
            })[] | undefined;
        } | undefined;
        boundaries?: (string | HTMLElement | (string | HTMLElement)[]) | undefined;
        selectables?: (string | string[]) | undefined;
        selectionAreaClass?: string | undefined;
        startAreas?: (string | HTMLElement | (string | HTMLElement)[]) | undefined;
    };
    editorPaddingRight?: import("react").CSSProperties["width"];
    enableContextMenu?: boolean;
    isSelecting?: boolean;
    isSelectionAreaVisible?: boolean;
    rightSelectionAreaClassName?: string;
    selectedIds?: Set<string>;
    shadowInputRef?: React.RefObject<HTMLInputElement | null>;
    isSelectable?: (element: import("platejs").TElement, path: import("platejs").Path) => boolean;
    onKeyDownSelecting?: (editor: import("platejs").SlateEditor, e: KeyboardEvent) => void;
}, {
    blockSelection: {
        addOnContextMenu: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, { disabledWhenFocused, element, event }: {
            element: import("platejs").TElement;
            event: React.MouseEvent<HTMLDivElement, MouseEvent>;
            disabledWhenFocused?: boolean;
        }) => void>;
        setSelectedIds: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { added, ids, removed }: Partial<{
            added: Element[];
            removed: Element[];
        }> & {
            ids?: string[];
        }) => void>;
        add: (id: string[] | string) => void;
        addSelectedRow: (id: string, options?: {
            clear?: boolean;
            delay?: number;
        }) => void;
        clear: () => void;
        delete: (id: string[] | string) => void;
        deselect: () => void;
        first: () => import("platejs").NodeEntry<import("platejs").TIdElement> | null;
        focus: () => void;
        getNodes: (options?: {
            collapseTableRows?: boolean;
            selectionFallback?: boolean;
            sort?: boolean;
        }) => import("platejs").NodeEntry<import("platejs").TIdElement>[];
        has: (id: string[] | string) => boolean;
        isSelectable: (element: import("platejs").TElement, path: import("platejs").Path) => boolean;
        moveSelection: (direction: "down" | "up") => void;
        resetSelectedIds: () => void;
        selectAll: () => void;
        set: (id: string[] | string) => void;
        shiftSelection: (direction: "down" | "up") => void;
        unselect: () => void;
    };
} & Record<"blockSelection", Partial<{
    addOnContextMenu: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, { disabledWhenFocused, element, event }: {
        element: import("platejs").TElement;
        event: React.MouseEvent<HTMLDivElement, MouseEvent>;
        disabledWhenFocused?: boolean;
    }) => void>;
    setSelectedIds: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { added, ids, removed }: Partial<{
        added: Element[];
        removed: Element[];
    }> & {
        ids?: string[];
    }) => void>;
    add: (id: string[] | string) => void;
    addSelectedRow: (id: string, options?: {
        clear?: boolean;
        delay?: number;
    }) => void;
    clear: () => void;
    delete: (id: string[] | string) => void;
    deselect: () => void;
    first: () => import("platejs").NodeEntry<import("platejs").TIdElement> | null;
    focus: () => void;
    getNodes: (options?: {
        collapseTableRows?: boolean;
        selectionFallback?: boolean;
        sort?: boolean;
    }) => import("platejs").NodeEntry<import("platejs").TIdElement>[];
    has: (id: string[] | string) => boolean;
    isSelectable: (element: import("platejs").TElement, path: import("platejs").Path) => boolean;
    moveSelection: (direction: "down" | "up") => void;
    resetSelectedIds: () => void;
    selectAll: () => void;
    set: (id: string[] | string) => void;
    shiftSelection: (direction: "down" | "up") => void;
    unselect: () => void;
}>>, Record<"blockSelection", {
    duplicate: () => void;
    insertBlocksAndSelect: (nodes: import("platejs").TElement[], args_1: {
        at: import("platejs").Path;
        insertedCallback?: () => void;
    }) => void;
    removeNodes: () => void;
    select: () => void;
    selectBlocks: (at: import("platejs").Path | import("platejs").TNode) => void;
    setIndent: (indent: number, options?: import("platejs").SetNodesOptions | undefined) => void;
    setNodes: (props: Partial<Omit<import("platejs").TElement, "children">>, options?: import("platejs").SetNodesOptions | undefined) => void;
    setTexts: (props: Partial<Omit<import("platejs").TText, "text">>, options?: Omit<import("platejs").SetNodesOptions, "at"> | undefined) => void;
}>, {
    isSelected?: (id?: string) => boolean;
    isSelectingSome?: () => boolean;
}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"bold", {}, {}, Record<"bold", {
    toggle: () => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"italic", {}, {}, Record<"italic", {
    toggle: () => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"underline", {}, {}, Record<"underline", {
    toggle: () => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"code", {}, {}, Record<"code", {
    toggle: () => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"strikethrough", {}, {}, Record<"strikethrough", {
    toggle: () => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"subscript", {}, {}, Record<"subscript", {
    toggle: () => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"superscript", {}, {}, Record<"superscript", {
    toggle: () => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"highlight", {}, {}, Record<"highlight", {
    toggle: () => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"kbd", {}, {}, Record<"kbd", {
    toggle: () => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"discussion", {
    currentUserId: string;
    discussions: import("@/components/editor/plugins/discussion-kit").TDiscussion[];
    users: Record<string, {
        id: string;
        avatarUrl: string;
        name: string;
        hue?: number;
    }>;
}, {}, {}, {
    currentUser: () => {
        id: string;
        avatarUrl: string;
        name: string;
        hue?: number;
    };
    user: (id: string) => {
        id: string;
        avatarUrl: string;
        name: string;
        hue?: number;
    };
}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"suggestion", {
    currentUserId: string | null;
    isSuggesting: boolean;
} & {
    activeId: string | null;
    hoverId: string | null;
    uniquePathMap: Map<string, import("platejs").Path>;
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
}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"cursorOverlay", {
    cursors: Record<string, import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>>;
}, {
    cursorOverlay: {
        addCursor: (id: string, cursor: Omit<import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>, "id">) => void;
        removeCursor: (id: (string & {}) | "drag" | "selection") => void;
    };
} & Record<"cursorOverlay", {
    addCursor: (id: string, cursor: Omit<import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>, "id">) => void;
    removeCursor: (id: (string & {}) | "drag" | "selection") => void;
}>, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"textAlign", {}, {}, Record<"textAlign", {
    setNodes: (value: import("@platejs/basic-styles").Alignment, setNodesOptions?: import("platejs").SetNodesOptions | undefined) => void;
}>, {}>> | import("platejs").SlatePlugin<import("@platejs/autoformat").AutoformatConfig> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"p", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"blockquote", {}, {}, Record<"blockquote", {
    toggle: () => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"hr", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"blockMenu", {
    openId: ((string & {}) | "context") | null;
    position: {
        x: number;
        y: number;
    };
}, {
    blockMenu: {
        hide: () => void;
        show: (id: (string & {}) | "context", position?: {
            x: number;
            y: number;
        }) => void;
        showContextMenu: (blockId: string, position: {
            x: number;
            y: number;
        }) => void;
    };
} & Record<"blockMenu", Partial<{
    hide: () => void;
    show: (id: (string & {}) | "context", position?: {
        x: number;
        y: number;
    }) => void;
    showContextMenu: (blockId: string, position: {
        x: number;
        y: number;
    }) => void;
}>>, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"dnd", {
    _isOver?: boolean;
    draggingId?: string[] | string | null;
    dropTarget?: {
        id: string | null;
        line: import("@platejs/dnd").DropLineDirection;
    };
    enableScroller?: boolean;
    isDragging?: boolean;
    multiplePreviewRef?: React.RefObject<HTMLDivElement | null> | null;
    scrollerProps?: Partial<import("@platejs/dnd").ScrollerProps>;
    onDropFiles?: (props: {
        id: string;
        dragItem: import("@platejs/dnd").FileDragItemNode;
        editor: import("platejs/react").PlateEditor;
        monitor: import("react-dnd").DropTargetMonitor<import("@platejs/dnd").DragItemNode, unknown>;
        nodeRef: any;
        target?: import("platejs").Path;
    }) => void;
}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"blockPlaceholder", {
    _target: {
        node: import("platejs").TElement;
        placeholder: string;
    } | null;
    placeholders: Record<string, string>;
    query: (context: import("platejs/react").PlatePluginContext<import("platejs/react").BlockPlaceholderConfig> & {
        node: import("platejs").TElement;
        path: import("platejs").Path;
    }) => boolean;
    className?: string;
}, {}, {}, {
    placeholder: (node: import("platejs").TElement) => string | undefined;
}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"callout", {}, {}, {
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
            match?: import("platejs").Predicate<import("platejs").NodeIn<Value>> | undefined;
            text?: boolean;
        } & import("platejs").QueryAt & import("platejs").QueryMode & import("platejs").QueryVoids & {
            icon?: string;
            variant?: (string & {}) | import("platejs").TCalloutElement["variant"];
        }) | undefined) => void;
    };
}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"code_block", {
    defaultLanguage?: string | null;
    lowlight?: ReturnType<typeof import("lowlight").createLowlight> | null;
}, {}, Record<"code_block", {
    toggle: () => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<any, {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"code_syntax", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"column_group", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"column", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"copilot", {
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
}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"date", {}, {}, {
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
            match?: import("platejs").Predicate<import("platejs").NodeIn<Value>> | undefined;
            text?: boolean;
        } & import("platejs").QueryAt & import("platejs").QueryMode & import("platejs").QueryVoids) | undefined) => void;
    };
}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"placeholder", import("@platejs/media").MediaPlaceholderOptions & {
    disableEmptyPlaceholder: boolean;
    disableFileDrop: boolean;
    uploadConfig: import("@platejs/media/react").UploadConfig;
    uploadingFiles: Record<string, File>;
    error?: import("@platejs/media/react").UploadError | null;
    maxFileCount?: number;
    multiple?: boolean;
}, {
    placeholder: import("@platejs/media/react").PlaceholderApi;
} & Record<"placeholder", {
    addUploadingFile: (id: string, file: File) => void;
    getUploadingFile: (id: string) => File;
    removeUploadingFile: (id: string) => void;
}>, {
    insert: {
        media: (files: FileList, options?: (Omit<import("platejs").InsertNodesOptions, "at"> & {
            at?: import("platejs").Path;
        }) | undefined) => any;
    };
}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"docx", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"juice", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"emoji", {
    data?: import("@emoji-mart/data").EmojiMartData;
    createEmojiNode?: (emoji: import("@emoji-mart/data").Emoji) => import("platejs").Descendant;
} & import("@platejs/combobox").TriggerComboboxPluginOptions, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"emoji_input", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"exitBreak", {}, {}, Record<"exitBreak", {
    insert: (options: Omit<import("platejs").InsertExitBreakOptions, "reverse">) => true | undefined;
    insertBefore: (options: Omit<import("platejs").InsertExitBreakOptions, "reverse">) => true | undefined;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"fontSize", {}, {}, Record<"fontSize", {
    addMark: (value: string) => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"table", {
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
} & {
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
} & {
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
}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"lineHeight", {}, {}, Record<"lineHeight", {
    setNodes: (value: number, setNodesOptions?: import("platejs").SetNodesOptions | undefined) => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"fixed-toolbar", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"floating-toolbar", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"color", {}, {}, Record<"color", {
    addMark: (value: string) => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"backgroundColor", {}, {}, Record<"backgroundColor", {
    addMark: (value: string) => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"fontFamily", {}, {}, Record<"fontFamily", {
    addMark: (value: string) => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"a", {
    allowedSchemes?: string[];
    dangerouslySkipSanitization?: boolean;
    defaultLinkAttributes?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
    forceSubmit?: boolean;
    keepSelectedTextOnPaste?: boolean;
    rangeBeforeOptions?: import("platejs").EditorBeforeOptions;
    triggerFloatingLinkHotkeys?: string[] | string;
    getLinkUrl?: (prevUrl: string | null) => Promise<string | null>;
    getUrlHref?: (url: string) => string | undefined;
    isUrl?: (text: string) => boolean;
    transformInput?: (url: string) => string | undefined;
} & {
    isEditing: boolean;
    mode: import("@platejs/link/react").FloatingLinkMode;
    mouseDown: boolean;
    newTab: boolean;
    openEditorId: string | null;
    text: string;
    updated: boolean;
    url: string;
    triggerFloatingLinkHotkeys?: string;
}, {
    floatingLink: {
        hide: () => void;
        reset: () => void;
        show: (mode: import("@platejs/link/react").FloatingLinkMode, editorId: string) => void;
    };
    link: {
        getAttributes: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, link: import("platejs").TLinkElement) => Pick<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target"> & import("platejs").UnknownObject>;
    };
}, {}, {
    isOpen?: (editorId: string) => boolean;
}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"indent", {
    indentMax?: number;
    offset?: number;
    unit?: string;
}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"list", {
    getSiblingListOptions?: import("@platejs/list").GetSiblingListOptions<import("platejs").TElement>;
    getListStyleType?: (element: HTMLElement) => import("@platejs/list").ListStyleType;
}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"inline_equation", {}, {}, {
    insert: {
        inlineEquation: (texExpression?: string | undefined, options?: import("platejs").InsertNodesOptions | undefined) => void;
    };
}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"equation", {}, {}, {
    insert: {
        equation: (options?: import("platejs").InsertNodesOptions | undefined) => void;
    };
}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"media_embed", import("@platejs/media").MediaPluginOptions, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"img", {
    disableEmbedInsert?: boolean;
    disableUploadInsert?: boolean;
    uploadImage?: (dataUrl: ArrayBuffer | string) => ArrayBuffer | Promise<ArrayBuffer | string> | string;
} & import("@platejs/media").MediaPluginOptions, {}, {
    insert: {
        imageFromFiles: (files: FileList, options?: import("platejs").InsertNodesOptions | undefined) => void;
    };
}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"video", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"audio", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"file", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"caption", {
    focusEndPath: import("platejs").Path | null;
    focusStartPath: import("platejs").Path | null;
    query: {
        allow: string[];
    };
    visibleId: string | null;
}, {}, {}, {
    isVisible?: (elementId: string) => boolean;
}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"mention", {
    insertSpaceAfterMention?: boolean;
} & import("@platejs/combobox").TriggerComboboxPluginOptions, {}, {
    insert: {
        mention: (options: {
            search: string;
            value: any;
            key?: any;
        }) => void;
    };
}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"mention_input", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"slash_command", import("@platejs/combobox").TriggerComboboxPluginOptions, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"slash_input", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"tr", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"td", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"th", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"toc", {
    isScroll: boolean;
    topOffset: number;
    queryHeading?: (editor: import("platejs").SlateEditor) => import("@platejs/toc").Heading[];
}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"toggle", {
    openIds?: Set<string>;
} & {
    toggleIndex?: ReturnType<(elements: Value) => Map<string, string[]>>;
}, {
    toggle: {
        toggleIds: (ids: string[], force?: boolean | null) => void;
    };
}, {}, {
    isOpen?: (toggleId: string) => boolean;
    someClosed?: (toggleIds: string[]) => boolean;
}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"trailingBlock", {
    type: string;
} & {
    level?: number;
    type?: string;
} & import("platejs").QueryNodeOptions, {}, {}, {}>>)[];
export type MyEditor = TPlateEditor<Value, (typeof EditorKit)[number]>;
export declare const useEditor: () => {
    [x: string]: unknown;
    id: string;
    history: import("platejs").History;
    marks: import("platejs").EditorMarks | null;
    meta: import("platejs").UnknownObject & {
        isNormalizing?: boolean;
    } & {
        key: any;
        components: import("platejs").NodeComponents;
        isFallback: boolean;
        pluginCache: {
            decorate: string[];
            handlers: {
                onChange: string[];
                onNodeChange: string[];
                onTextChange: string[];
            };
            inject: {
                nodeProps: string[];
            };
            node: {
                isContainer: string[];
                isLeaf: string[];
                isText: string[];
                leafProps: string[];
                textProps: string[];
                types: Record<string, string>;
            };
            normalizeInitialValue: string[];
            render: {
                aboveEditable: string[];
                aboveNodes: string[];
                aboveSlate: string[];
                afterContainer: string[];
                afterEditable: string[];
                beforeContainer: string[];
                beforeEditable: string[];
                belowNodes: string[];
                belowRootNodes: string[];
            };
            rules: {
                match: string[];
            };
            useHooks: string[];
        };
        pluginList: any[];
        uid?: string;
    } & {
        pluginList: import("platejs/react").AnyEditorPlatePlugin[];
        shortcuts: import("platejs/react").Shortcuts;
    };
    selection: import("platejs").EditorSelection;
    redo: () => void;
    undo: () => void;
    dom: {
        composing: boolean;
        currentKeyboardEvent: KeyboardEventLike | null;
        focused: boolean;
        prevSelection: import("platejs").TRange | null;
        readOnly: boolean;
    };
    plugins: Record<string, any> & Record<string, import("platejs/react").AnyEditorPlatePlugin>;
    setOptions: <C$1 extends import("platejs").AnyPluginConfig>(plugin: import("platejs").WithRequiredKey<C$1>, options: ((state: import("mutative").Draft<Partial<import("platejs").InferOptions<C$1>>>) => void) | Partial<import("platejs").InferOptions<C$1>>) => void;
    getInjectProps: <C$1 extends import("platejs").AnyPluginConfig = import("platejs").PluginConfig>(plugin: import("platejs").WithRequiredKey<C$1>) => import("platejs").InjectNodeProps<C$1>;
    getOption: <C$1 extends import("platejs").AnyPluginConfig, StateType extends import("platejs").InferOptions<C$1>, TSelectors extends import("platejs").InferSelectors<C$1>, K$1 extends keyof StateType | keyof TSelectors | "state">(plugin: import("platejs").WithRequiredKey<C$1>, key: K$1, ...args: K$1 extends keyof TSelectors ? Parameters<TSelectors[K$1]> : []) => K$1 extends "state" ? StateType : K$1 extends keyof TSelectors ? ReturnType<TSelectors[K$1]> : K$1 extends keyof StateType ? StateType[K$1] : never;
    getOptions: <C$1 extends import("platejs").AnyPluginConfig = import("platejs").PluginConfig>(plugin: import("platejs").WithRequiredKey<C$1>) => import("platejs").InferOptions<C$1>;
    getOptionsStore: <C$1 extends import("platejs").AnyPluginConfig>(plugin: import("platejs").WithRequiredKey<C$1>) => import("zustand-x").TStateApi<import("platejs").InferOptions<C$1>, [["zustand/mutative-x", never]], {}, import("platejs").InferSelectors<C$1>>;
    getPlugin: (<C$1 extends import("platejs").AnyPluginConfig = import("platejs").PluginConfig<any, {}, {}, {}, {}>>(plugin: import("platejs").WithRequiredKey<C$1>) => C$1 extends {
        node: any;
    } ? C$1 : import("platejs").EditorPlugin<C$1>) & (<C$1 extends import("platejs").AnyPluginConfig = import("platejs").PluginConfig>(plugin: import("platejs").WithRequiredKey<C$1>) => C$1 extends {
        node: any;
    } ? C$1 : import("platejs/react").EditorPlatePlugin<C$1>);
    getType: (pluginKey: string) => string;
    setOption: <C$1 extends import("platejs").AnyPluginConfig, K$1 extends keyof import("platejs").InferOptions<C$1>>(plugin: import("platejs").WithRequiredKey<C$1>, optionKey: K$1, value: import("platejs").InferOptions<C$1>[K$1]) => void;
    api: import("platejs").EditorApi & import("platejs").UnionToIntersection<import("platejs").InferApi<import("platejs/react").PlateCorePlugin>>;
    tf: import("platejs").EditorTransforms & import("platejs").UnionToIntersection<import("platejs").InferTransforms<import("platejs/react").PlateCorePlugin>>;
    transforms: import("platejs").EditorTransforms & import("platejs").UnionToIntersection<import("platejs").InferTransforms<import("platejs/react").PlateCorePlugin>>;
    getApi: <C$1 extends import("platejs").AnyPluginConfig = import("platejs").PluginConfig>(plugin?: import("platejs").WithRequiredKey<C$1>) => import("platejs/react").PlateEditor["api"] & import("platejs").InferApi<C$1>;
    getTransforms: <C$1 extends import("platejs").AnyPluginConfig = import("platejs").PluginConfig>(plugin?: import("platejs").WithRequiredKey<C$1>) => import("platejs/react").PlateEditor["tf"] & import("platejs").InferTransforms<C$1>;
    uid?: string | undefined;
} & {
    api: {
        fragment: <N extends import("platejs").ElementOrTextIn<Value>>(at?: import("platejs").At | null, options?: import("platejs").EditorFragmentOptions) => N[];
        getDirtyPaths: <N extends import("platejs").TElement | import("platejs").TText>(operation: import("platejs").Operation<N>) => import("platejs").Path[];
        getFragment: (at?: import("platejs").At) => import("platejs").ElementOrTextIn<Value>[];
        isElementReadOnly: <N extends import("platejs").TElement>(element: N) => boolean;
        isSelected: (target: import("platejs").Path | import("platejs").TRange, options?: import("platejs").EditorIsSelectedOptions) => boolean;
        isVoid: <N extends import("platejs").TElement>(element: N) => boolean;
        markableVoid: <N extends import("platejs").TElement>(element: N) => boolean;
        setNormalizing: (isNormalizing: boolean) => void;
        shouldMergeNodes: (prevNodeEntry: import("platejs").NodeEntry, curNodeEntry: import("platejs").NodeEntry, options?: {
            reverse?: boolean;
        }) => boolean;
        shouldNormalize: (options: {
            dirtyPaths: import("platejs").Path[];
            initialDirtyPathsLength: number;
            iteration: number;
            operation?: import("platejs").Operation;
        }) => boolean;
        shouldNormalizeNode: (entry: import("platejs").NodeEntry) => boolean;
        onChange: (options?: {
            operation?: import("platejs").Operation;
        }) => void;
    } & {
        after: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At, options?: import("platejs").EditorAfterOptions) => import("slate").BasePoint | undefined>;
        before: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At, options?: import("platejs").EditorBeforeOptions) => import("platejs").Point | undefined>;
        edges: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At) => [import("slate").BasePoint, import("slate").BasePoint] | undefined>;
        elementReadOnly: import("platejs").OmitFirst<(<E extends import("platejs").Editor = import("platejs").Editor<Value>>(editor: E, options?: import("platejs").EditorElementReadOnlyOptions) => import("slate").NodeEntry<import("slate").BaseElement> | undefined)>;
        end: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At, options?: import("platejs").EditorEndOptions) => import("slate").BasePoint | undefined>;
        hasBlocks: import("platejs").OmitFirst<(editor: import("platejs").Editor, element: import("platejs").TElement) => boolean>;
        hasInlines: import("platejs").OmitFirst<(editor: import("platejs").Editor, element: import("platejs").TElement) => boolean>;
        hasMark: import("platejs").OmitFirst<(editor: import("platejs").Editor, key: string) => boolean>;
        hasTexts: import("platejs").OmitFirst<(editor: import("platejs").Editor, element: import("platejs").TElement) => boolean>;
        isBlock: import("platejs").OmitFirst<(editor: import("platejs").Editor, value: any) => value is import("platejs").TElement>;
        isEdge: import("platejs").OmitFirst<(editor: import("platejs").Editor, point: import("platejs").Point, at: import("platejs").TLocation) => boolean>;
        isEmpty: import("platejs").OmitFirst<(<E extends import("platejs").Editor>(editor: E, target?: import("platejs").At | null, options?: import("platejs").EditorEmptyOptions) => boolean)>;
        isEnd: import("platejs").OmitFirst<(editor: import("platejs").Editor, point: import("platejs").Point | null | undefined, at: import("platejs").TLocation) => boolean>;
        isNormalizing: import("platejs").OmitFirst<(editor: import("platejs").Editor) => boolean>;
        isStart: import("platejs").OmitFirst<(editor: import("platejs").Editor, point: import("platejs").Point | null | undefined, at: import("platejs").TLocation) => boolean>;
        path: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At, options?: import("slate").EditorPathOptions) => import("slate").Path | undefined>;
        pathRef: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").Path, options?: import("slate").EditorPathRefOptions) => import("slate").PathRef>;
        pathRefs: import("platejs").OmitFirst<(editor: import("platejs").Editor) => Set<import("slate").PathRef>>;
        point: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At, options?: import("slate").EditorPointOptions) => import("slate").BasePoint | undefined>;
        pointRef: import("platejs").OmitFirst<(editor: import("platejs").Editor, point: import("platejs").Point, options?: import("slate").EditorPointRefOptions) => import("slate").PointRef>;
        pointRefs: import("platejs").OmitFirst<(editor: import("platejs").Editor) => Set<import("slate").PointRef>>;
        positions: import("platejs").OmitFirst<(editor: import("platejs").Editor, options?: import("platejs").EditorPositionsOptions) => Generator<import("slate").BasePoint, void, undefined>>;
        range: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At | "before" | "start", to?: import("platejs").At | null, options?: {
            before?: import("platejs").EditorBeforeOptions;
        }) => import("platejs").TRange | undefined>;
        rangeRef: import("platejs").OmitFirst<(editor: import("platejs").Editor, range: import("platejs").TRange, options?: import("slate").EditorRangeRefOptions) => import("slate").RangeRef>;
        rangeRefs: import("platejs").OmitFirst<(editor: import("platejs").Editor) => Set<import("slate").RangeRef>>;
        start: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At, options?: import("platejs").EditorStartOptions) => import("slate").BasePoint | undefined>;
        string: import("platejs").OmitFirst<(editor: import("platejs").Editor, at?: import("platejs").At | null, options?: import("platejs").EditorStringOptions) => string>;
        unhangRange: import("platejs").OmitFirst<(editor: import("platejs").Editor, range: import("platejs").TRange, options?: import("platejs").EditorUnhangRangeOptions) => import("platejs").TRange>;
        above: <N extends import("platejs").TElement | import("platejs").Editor<Value>>(options?: import("platejs").EditorAboveOptions<Value> | undefined) => import("platejs").NodeEntry<N> | undefined;
        first: <N extends import("platejs").TElement | import("platejs").TText>(at: import("platejs").At) => import("platejs").NodeEntry<N> | undefined;
        fragment: <N extends import("platejs").ElementOrTextIn<Value>>(at: import("platejs").At) => N[] | undefined;
        hasPath: (path: import("platejs").Path) => boolean;
        last: <N extends import("platejs").TElement | import("platejs").TText>(at: import("platejs").At, options?: import("platejs").EditorLastOptions) => import("platejs").NodeEntry<N> | undefined;
        leaf: <N extends import("platejs").TText>(at: import("platejs").At, options?: import("platejs").EditorLeafOptions) => import("platejs").NodeEntry<N> | undefined;
        levels: <N extends import("platejs").NodeIn<Value>>(options?: import("platejs").EditorLevelsOptions<Value> | undefined) => Generator<import("platejs").NodeEntry<N>, void, undefined>;
        marks: () => {
            [x: string]: unknown;
        } | null;
        next: <N extends import("platejs").TElement | import("platejs").TText>(options?: import("platejs").EditorNextOptions<Value> | undefined) => import("platejs").NodeEntry<N> | undefined;
        node: <N extends import("platejs").TElement | import("platejs").TText>(atOrOptions: import("platejs").EditorNodesOptions<Value> | import("platejs").AtOrDescendant, nodeOptions?: import("platejs").EditorNodeOptions) => import("platejs").NodeEntry<N> | undefined;
        nodes: <N extends import("platejs").TElement | import("platejs").TText>(options?: import("platejs").EditorNodesOptions<Value> | undefined) => Generator<import("platejs").NodeEntry<N>, void, undefined>;
        parent: <N extends import("platejs").TElement | import("platejs").Editor<Value>>(at: import("platejs").At, options?: import("platejs").EditorParentOptions) => import("platejs").NodeEntry<N> | undefined;
        previous: <N extends import("platejs").TElement | import("platejs").TText>(options?: import("platejs").EditorPreviousOptions<Value> | undefined) => import("platejs").NodeEntry<N> | undefined;
        void: <N extends import("platejs").TElement>(options?: import("platejs").EditorVoidOptions) => import("platejs").NodeEntry<N> | undefined;
    } & {
        findDocumentOrShadowRoot: import("platejs").OmitFirst<(editor: import("platejs").Editor) => Document | ShadowRoot | undefined>;
        findEventRange: import("platejs").OmitFirst<(editor: import("platejs").Editor, event: any) => import("slate").BaseRange | undefined>;
        findKey: import("platejs").OmitFirst<(editor: import("platejs").Editor, node: import("platejs").TNode) => import("slate-dom").Key | undefined>;
        getWindow: import("platejs").OmitFirst<(editor: import("platejs").Editor) => Window | undefined>;
        hasDOMNode: import("platejs").OmitFirst<(editor: import("platejs").Editor, target: Node, options?: Parameters<(editor: import("slate-dom").DOMEditor, target: Node, options?: {
            editable?: boolean;
        }) => boolean>[2]) => boolean>;
        hasRange: import("platejs").OmitFirst<(editor: import("platejs").Editor, range: import("platejs").TRange) => boolean>;
        isComposing: import("platejs").OmitFirst<(editor: import("platejs").Editor) => boolean>;
        isFocused: import("platejs").OmitFirst<(editor: import("platejs").Editor) => boolean>;
        isReadOnly: import("platejs").OmitFirst<(editor: import("platejs").Editor) => boolean>;
        isTargetInsideNonReadonlyVoid: import("platejs").OmitFirst<(editor: import("platejs").Editor, target: EventTarget | null) => boolean>;
        toDOMNode: import("platejs").OmitFirst<(editor: import("platejs").Editor, node: import("platejs").TNode) => HTMLElement | undefined>;
        toDOMPoint: import("platejs").OmitFirst<(editor: import("platejs").Editor, point: import("platejs").Point) => import("slate-dom").DOMPoint | undefined>;
        toDOMRange: import("platejs").OmitFirst<(editor: import("platejs").Editor, range: import("platejs").TRange) => Range | undefined>;
        toSlatePoint: import("platejs").OmitFirst<(editor: import("platejs").Editor, domPoint: import("slate-dom").DOMPoint, options: Omit<Parameters<(<T extends boolean>(editor: import("slate-dom").DOMEditor, domPoint: import("slate-dom").DOMPoint, options: {
            exactMatch: boolean;
            suppressThrow: T;
            searchDirection?: "forward" | "backward";
        }) => T extends true ? import("slate").Point | null : import("slate").Point)>[2], "suppressThrow">) => import("slate").BasePoint | null | undefined>;
        toSlateRange: import("platejs").OmitFirst<(editor: import("platejs").Editor, domRange: Parameters<(<T extends boolean>(editor: import("slate-dom").DOMEditor, domRange: Range | StaticRange | Selection, options: {
            exactMatch: boolean;
            suppressThrow: T;
        }) => T extends true ? import("slate").Range | null : import("slate").Range)>[1], options: Omit<Parameters<(<T extends boolean>(editor: import("slate-dom").DOMEditor, domRange: Range | StaticRange | Selection, options: {
            exactMatch: boolean;
            suppressThrow: T;
        }) => T extends true ? import("slate").Range | null : import("slate").Range)>[2], "supressThrow">) => import("slate").BaseRange | null | undefined>;
        findPath: (node: import("platejs").TNode, options?: import("platejs").EditorFindPathOptions) => import("platejs").Path | undefined;
        hasEditableTarget: (target: EventTarget | null) => target is Node;
        hasSelectableTarget: (target: EventTarget | null) => target is Node;
        hasTarget: (target: EventTarget | null) => target is Node;
        toSlateNode: <N extends import("platejs").NodeIn<Value>>(domNode: Parameters<(editor: import("platejs").Editor, domNode: Node) => import("platejs").TNode | undefined>[1]) => N | undefined;
    } & {
        isMerging: import("platejs").OmitFirst<(editor: import("platejs").Editor) => boolean | undefined>;
        isSaving: import("platejs").OmitFirst<(editor: import("platejs").Editor) => boolean | undefined>;
        isSplittingOnce: import("platejs").OmitFirst<(editor: import("platejs").Editor) => boolean | undefined>;
    } & {
        create: {
            block: (node?: Partial<import("platejs").TElement>, path?: import("platejs").Path) => import("platejs").TElement;
            value: () => Value;
        };
        isAt: import("platejs").OmitFirst<(<E extends import("platejs").Editor>(editor: E, { at, block, blocks, end, start, text, word, ...options }?: {
            at?: import("platejs").TLocation | null;
            block?: boolean;
            blocks?: boolean;
            end?: boolean;
            start?: boolean;
            text?: boolean;
            word?: boolean;
        } & Omit<import("platejs").EditorAboveOptions<import("platejs").ValueOf<E>>, "at" | "block">) => boolean)>;
        isText: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At) => boolean>;
        scrollIntoView: import("platejs").OmitFirst<(editor: import("platejs").Editor, target: Range | import("platejs").Point, options?: import("platejs").ScrollIntoViewOptions) => void>;
        some: import("platejs").OmitFirst<(<E extends import("platejs").Editor = import("platejs").Editor<Value>>(editor: E, options: import("platejs").EditorNodesOptions<import("platejs").ValueOf<E>>) => boolean)>;
        block: <N extends import("platejs").TElement>(options?: import("platejs").EditorBlockOptions<Value> | undefined) => import("platejs").NodeEntry<N> | undefined;
        blocks: <N extends import("platejs").TElement>(options?: import("platejs").EditorNodesOptions<Value> | undefined) => import("platejs").NodeEntry<N>[];
        descendant: <N extends import("platejs").TElement | import("platejs").TText>(options: import("platejs").EditorNodesOptions<Value>) => import("platejs").NodeEntry<N> | undefined;
        edgeBlocks: <N1 extends import("platejs").TElement, N2 extends import("platejs").TElement = N1>(options?: import("platejs").EditorAboveOptions<Value> | undefined) => [import("platejs").NodeEntry<N1>, import("platejs").NodeEntry<N2>] | null;
        isCollapsed: () => boolean;
        isEditorEnd: () => boolean;
        isExpanded: () => boolean;
        isInline: <N extends import("platejs").TElement | import("platejs").TText>(element: N) => boolean;
        isSelectable: <N extends import("platejs").TElement>(element: N) => boolean;
        mark: <K extends string>(key: K) => unknown;
        nodesRange: (nodes: import("platejs").NodeEntry[]) => import("platejs").TRange | undefined;
        prop: (options: import("platejs").EditorPropOptions<Value>) => string | undefined;
    } & {
        debug: {
            error: (message: string | unknown, type?: import("platejs").DebugErrorType, details?: any) => void;
            info: (message: string, type?: import("platejs").DebugErrorType, details?: any) => void;
            log: (message: string, type?: import("platejs").DebugErrorType, details?: any) => void;
            warn: (message: string, type?: import("platejs").DebugErrorType, details?: any) => void;
        };
    } & {
        isScrolling: () => boolean;
    } & Record<"html", {
        deserialize: (args_0: {
            element: HTMLElement | string;
            collapseWhiteSpace?: boolean;
            defaultElementPlugin?: import("platejs").WithRequiredKey;
        }) => import("platejs").Descendant[];
    }> & {
        redecorate: () => void;
    } & {
        markdown: {
            deserialize: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, data: string, options?: Omit<import("@platejs/markdown").DeserializeMdOptions, "editor">) => Value>;
            deserializeInline: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, text: string, options?: import("@platejs/markdown").DeserializeMdOptions) => import("platejs").Descendant[]>;
            serialize: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, options?: Omit<import("@platejs/markdown").SerializeMdOptions, "editor">) => string>;
        };
    } & Record<"markdown", {
        deserialize: (data: string, options?: Omit<import("@platejs/markdown").DeserializeMdOptions, "editor"> | undefined) => Value;
        deserializeInline: (text: string, options?: import("@platejs/markdown").DeserializeMdOptions | undefined) => import("platejs").Descendant[];
        serialize: (options?: Omit<import("@platejs/markdown").SerializeMdOptions, "editor"> | undefined) => string;
    }> & {
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
    } & {
        blockSelection: {
            addOnContextMenu: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, { disabledWhenFocused, element, event }: {
                element: import("platejs").TElement;
                event: React.MouseEvent<HTMLDivElement, MouseEvent>;
                disabledWhenFocused?: boolean;
            }) => void>;
            setSelectedIds: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { added, ids, removed }: Partial<{
                added: Element[];
                removed: Element[];
            }> & {
                ids?: string[];
            }) => void>;
            add: (id: string[] | string) => void;
            addSelectedRow: (id: string, options?: {
                clear?: boolean;
                delay?: number;
            }) => void;
            clear: () => void;
            delete: (id: string[] | string) => void;
            deselect: () => void;
            first: () => import("platejs").NodeEntry<import("platejs").TIdElement> | null;
            focus: () => void;
            getNodes: (options?: {
                collapseTableRows?: boolean;
                selectionFallback?: boolean;
                sort?: boolean;
            }) => import("platejs").NodeEntry<import("platejs").TIdElement>[];
            has: (id: string[] | string) => boolean;
            isSelectable: (element: import("platejs").TElement, path: import("platejs").Path) => boolean;
            moveSelection: (direction: "down" | "up") => void;
            resetSelectedIds: () => void;
            selectAll: () => void;
            set: (id: string[] | string) => void;
            shiftSelection: (direction: "down" | "up") => void;
            unselect: () => void;
        };
    } & Record<"blockSelection", Partial<{
        addOnContextMenu: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, { disabledWhenFocused, element, event }: {
            element: import("platejs").TElement;
            event: React.MouseEvent<HTMLDivElement, MouseEvent>;
            disabledWhenFocused?: boolean;
        }) => void>;
        setSelectedIds: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { added, ids, removed }: Partial<{
            added: Element[];
            removed: Element[];
        }> & {
            ids?: string[];
        }) => void>;
        add: (id: string[] | string) => void;
        addSelectedRow: (id: string, options?: {
            clear?: boolean;
            delay?: number;
        }) => void;
        clear: () => void;
        delete: (id: string[] | string) => void;
        deselect: () => void;
        first: () => import("platejs").NodeEntry<import("platejs").TIdElement> | null;
        focus: () => void;
        getNodes: (options?: {
            collapseTableRows?: boolean;
            selectionFallback?: boolean;
            sort?: boolean;
        }) => import("platejs").NodeEntry<import("platejs").TIdElement>[];
        has: (id: string[] | string) => boolean;
        isSelectable: (element: import("platejs").TElement, path: import("platejs").Path) => boolean;
        moveSelection: (direction: "down" | "up") => void;
        resetSelectedIds: () => void;
        selectAll: () => void;
        set: (id: string[] | string) => void;
        shiftSelection: (direction: "down" | "up") => void;
        unselect: () => void;
    }>> & {
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
    } & {
        cursorOverlay: {
            addCursor: (id: string, cursor: Omit<import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>, "id">) => void;
            removeCursor: (id: (string & {}) | "drag" | "selection") => void;
        };
    } & Record<"cursorOverlay", {
        addCursor: (id: string, cursor: Omit<import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>, "id">) => void;
        removeCursor: (id: (string & {}) | "drag" | "selection") => void;
    }> & {
        blockMenu: {
            hide: () => void;
            show: (id: (string & {}) | "context", position?: {
                x: number;
                y: number;
            }) => void;
            showContextMenu: (blockId: string, position: {
                x: number;
                y: number;
            }) => void;
        };
    } & Record<"blockMenu", Partial<{
        hide: () => void;
        show: (id: (string & {}) | "context", position?: {
            x: number;
            y: number;
        }) => void;
        showContextMenu: (blockId: string, position: {
            x: number;
            y: number;
        }) => void;
    }>> & {
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
    }> & {
        placeholder: import("@platejs/media/react").PlaceholderApi;
    } & Record<"placeholder", {
        addUploadingFile: (id: string, file: File) => void;
        getUploadingFile: (id: string) => File;
        removeUploadingFile: (id: string) => void;
    }> & {
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
    } & {
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
    } & {
        floatingLink: {
            hide: () => void;
            reset: () => void;
            show: (mode: import("@platejs/link/react").FloatingLinkMode, editorId: string) => void;
        };
        link: {
            getAttributes: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, link: import("platejs").TLinkElement) => Pick<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target"> & import("platejs").UnknownObject>;
        };
    } & {
        toggle: {
            toggleIds: (ids: string[], force?: boolean | null) => void;
        };
    };
    children: Value;
    meta: import("platejs").UnknownObject & {
        isNormalizing?: boolean;
    } & {
        key: any;
        components: import("platejs").NodeComponents;
        isFallback: boolean;
        pluginCache: {
            decorate: string[];
            handlers: {
                onChange: string[];
                onNodeChange: string[];
                onTextChange: string[];
            };
            inject: {
                nodeProps: string[];
            };
            node: {
                isContainer: string[];
                isLeaf: string[];
                isText: string[];
                leafProps: string[];
                textProps: string[];
                types: Record<string, string>;
            };
            normalizeInitialValue: string[];
            render: {
                aboveEditable: string[];
                aboveNodes: string[];
                aboveSlate: string[];
                afterContainer: string[];
                afterEditable: string[];
                beforeContainer: string[];
                beforeEditable: string[];
                belowNodes: string[];
                belowRootNodes: string[];
            };
            rules: {
                match: string[];
            };
            useHooks: string[];
        };
        pluginList: any[];
        uid?: string;
    } & {
        pluginList: (import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"comment", {
            activeId: string | null;
            commentingBlock: import("platejs").Path | null;
            hoverId: string | null;
            uniquePathMap: Map<string, import("platejs").Path>;
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
        }>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"markdown", {
            allowedNodes: import("@platejs/markdown").PlateType[] | null;
            disallowedNodes: import("@platejs/markdown").PlateType[] | null;
            remarkPlugins: import("unified").Plugin[];
            remarkStringifyOptions: import("remark-stringify").Options | null;
            rules: import("@platejs/markdown").MdRules | null;
            allowNode?: import("@platejs/markdown").AllowNodeConfig;
            plainMarks?: import("@platejs/markdown").PlateType[] | null;
        }, {
            markdown: {
                deserialize: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, data: string, options?: Omit<import("@platejs/markdown").DeserializeMdOptions, "editor">) => Value>;
                deserializeInline: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, text: string, options?: import("@platejs/markdown").DeserializeMdOptions) => import("platejs").Descendant[]>;
                serialize: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, options?: Omit<import("@platejs/markdown").SerializeMdOptions, "editor">) => string>;
            };
        } & Record<"markdown", {
            deserialize: (data: string, options?: Omit<import("@platejs/markdown").DeserializeMdOptions, "editor"> | undefined) => Value;
            deserializeInline: (text: string, options?: import("@platejs/markdown").DeserializeMdOptions | undefined) => import("platejs").Descendant[];
            serialize: (options?: Omit<import("@platejs/markdown").SerializeMdOptions, "editor"> | undefined) => string;
        }>, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"blockSelection", {
            anchorId?: string | null;
            areaOptions?: {
                document?: Document;
            } & {
                container?: (string | HTMLElement | (string | HTMLElement)[]) | undefined;
                features?: {
                    range?: boolean | undefined;
                    singleTap?: {
                        allow?: boolean | undefined;
                        intersect?: ("touch" | "native") | undefined;
                    } | undefined;
                    touch?: boolean | undefined;
                } | undefined;
                behaviour?: {
                    intersect?: ("center" | "touch" | "cover") | undefined;
                    overlap?: ("drop" | "invert" | "keep") | undefined;
                    scrolling?: {
                        manualSpeed?: number | undefined;
                        speedDivider?: number | undefined;
                        startScrollMargins?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        } | undefined;
                    } | undefined;
                    startThreshold?: number | {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                    triggers?: ((0 | 2 | 1 | 3 | 4) | {
                        button: 0 | 2 | 1 | 3 | 4;
                        modifiers: ("shift" | "alt" | "ctrl")[];
                    })[] | undefined;
                } | undefined;
                boundaries?: (string | HTMLElement | (string | HTMLElement)[]) | undefined;
                selectables?: (string | string[]) | undefined;
                selectionAreaClass?: string | undefined;
                startAreas?: (string | HTMLElement | (string | HTMLElement)[]) | undefined;
            };
            editorPaddingRight?: import("react").CSSProperties["width"];
            enableContextMenu?: boolean;
            isSelecting?: boolean;
            isSelectionAreaVisible?: boolean;
            rightSelectionAreaClassName?: string;
            selectedIds?: Set<string>;
            shadowInputRef?: React.RefObject<HTMLInputElement | null>;
            isSelectable?: (element: import("platejs").TElement, path: import("platejs").Path) => boolean;
            onKeyDownSelecting?: (editor: import("platejs").SlateEditor, e: KeyboardEvent) => void;
        }, {
            blockSelection: {
                addOnContextMenu: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, { disabledWhenFocused, element, event }: {
                    element: import("platejs").TElement;
                    event: React.MouseEvent<HTMLDivElement, MouseEvent>;
                    disabledWhenFocused?: boolean;
                }) => void>;
                setSelectedIds: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { added, ids, removed }: Partial<{
                    added: Element[];
                    removed: Element[];
                }> & {
                    ids?: string[];
                }) => void>;
                add: (id: string[] | string) => void;
                addSelectedRow: (id: string, options?: {
                    clear?: boolean;
                    delay?: number;
                }) => void;
                clear: () => void;
                delete: (id: string[] | string) => void;
                deselect: () => void;
                first: () => import("platejs").NodeEntry<import("platejs").TIdElement> | null;
                focus: () => void;
                getNodes: (options?: {
                    collapseTableRows?: boolean;
                    selectionFallback?: boolean;
                    sort?: boolean;
                }) => import("platejs").NodeEntry<import("platejs").TIdElement>[];
                has: (id: string[] | string) => boolean;
                isSelectable: (element: import("platejs").TElement, path: import("platejs").Path) => boolean;
                moveSelection: (direction: "down" | "up") => void;
                resetSelectedIds: () => void;
                selectAll: () => void;
                set: (id: string[] | string) => void;
                shiftSelection: (direction: "down" | "up") => void;
                unselect: () => void;
            };
        } & Record<"blockSelection", Partial<{
            addOnContextMenu: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, { disabledWhenFocused, element, event }: {
                element: import("platejs").TElement;
                event: React.MouseEvent<HTMLDivElement, MouseEvent>;
                disabledWhenFocused?: boolean;
            }) => void>;
            setSelectedIds: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { added, ids, removed }: Partial<{
                added: Element[];
                removed: Element[];
            }> & {
                ids?: string[];
            }) => void>;
            add: (id: string[] | string) => void;
            addSelectedRow: (id: string, options?: {
                clear?: boolean;
                delay?: number;
            }) => void;
            clear: () => void;
            delete: (id: string[] | string) => void;
            deselect: () => void;
            first: () => import("platejs").NodeEntry<import("platejs").TIdElement> | null;
            focus: () => void;
            getNodes: (options?: {
                collapseTableRows?: boolean;
                selectionFallback?: boolean;
                sort?: boolean;
            }) => import("platejs").NodeEntry<import("platejs").TIdElement>[];
            has: (id: string[] | string) => boolean;
            isSelectable: (element: import("platejs").TElement, path: import("platejs").Path) => boolean;
            moveSelection: (direction: "down" | "up") => void;
            resetSelectedIds: () => void;
            selectAll: () => void;
            set: (id: string[] | string) => void;
            shiftSelection: (direction: "down" | "up") => void;
            unselect: () => void;
        }>>, Record<"blockSelection", {
            duplicate: () => void;
            insertBlocksAndSelect: (nodes: import("platejs").TElement[], args_1: {
                at: import("platejs").Path;
                insertedCallback?: () => void;
            }) => void;
            removeNodes: () => void;
            select: () => void;
            selectBlocks: (at: import("platejs").Path | import("platejs").TNode) => void;
            setIndent: (indent: number, options?: import("platejs").SetNodesOptions | undefined) => void;
            setNodes: (props: Partial<Omit<import("platejs").TElement, "children">>, options?: import("platejs").SetNodesOptions | undefined) => void;
            setTexts: (props: Partial<Omit<import("platejs").TText, "text">>, options?: Omit<import("platejs").SetNodesOptions, "at"> | undefined) => void;
        }>, {
            isSelected?: (id?: string) => boolean;
            isSelectingSome?: () => boolean;
        }>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"bold", {}, {}, Record<"bold", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"italic", {}, {}, Record<"italic", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"underline", {}, {}, Record<"underline", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"code", {}, {}, Record<"code", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"strikethrough", {}, {}, Record<"strikethrough", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"subscript", {}, {}, Record<"subscript", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"superscript", {}, {}, Record<"superscript", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"highlight", {}, {}, Record<"highlight", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"kbd", {}, {}, Record<"kbd", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"discussion", {
            currentUserId: string;
            discussions: import("@/components/editor/plugins/discussion-kit").TDiscussion[];
            users: Record<string, {
                id: string;
                avatarUrl: string;
                name: string;
                hue?: number;
            }>;
        }, {}, {}, {
            currentUser: () => {
                id: string;
                avatarUrl: string;
                name: string;
                hue?: number;
            };
            user: (id: string) => {
                id: string;
                avatarUrl: string;
                name: string;
                hue?: number;
            };
        }>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"suggestion", {
            currentUserId: string | null;
            isSuggesting: boolean;
        } & {
            activeId: string | null;
            hoverId: string | null;
            uniquePathMap: Map<string, import("platejs").Path>;
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
        }, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"cursorOverlay", {
            cursors: Record<string, import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>>;
        }, {
            cursorOverlay: {
                addCursor: (id: string, cursor: Omit<import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>, "id">) => void;
                removeCursor: (id: (string & {}) | "drag" | "selection") => void;
            };
        } & Record<"cursorOverlay", {
            addCursor: (id: string, cursor: Omit<import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>, "id">) => void;
            removeCursor: (id: (string & {}) | "drag" | "selection") => void;
        }>, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"textAlign", {}, {}, Record<"textAlign", {
            setNodes: (value: import("@platejs/basic-styles").Alignment, setNodesOptions?: import("platejs").SetNodesOptions | undefined) => void;
        }>, {}>> | import("platejs").SlatePlugin<import("@platejs/autoformat").AutoformatConfig> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"p", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"blockquote", {}, {}, Record<"blockquote", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"hr", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"blockMenu", {
            openId: ((string & {}) | "context") | null;
            position: {
                x: number;
                y: number;
            };
        }, {
            blockMenu: {
                hide: () => void;
                show: (id: (string & {}) | "context", position?: {
                    x: number;
                    y: number;
                }) => void;
                showContextMenu: (blockId: string, position: {
                    x: number;
                    y: number;
                }) => void;
            };
        } & Record<"blockMenu", Partial<{
            hide: () => void;
            show: (id: (string & {}) | "context", position?: {
                x: number;
                y: number;
            }) => void;
            showContextMenu: (blockId: string, position: {
                x: number;
                y: number;
            }) => void;
        }>>, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"dnd", {
            _isOver?: boolean;
            draggingId?: string[] | string | null;
            dropTarget?: {
                id: string | null;
                line: import("@platejs/dnd").DropLineDirection;
            };
            enableScroller?: boolean;
            isDragging?: boolean;
            multiplePreviewRef?: React.RefObject<HTMLDivElement | null> | null;
            scrollerProps?: Partial<import("@platejs/dnd").ScrollerProps>;
            onDropFiles?: (props: {
                id: string;
                dragItem: import("@platejs/dnd").FileDragItemNode;
                editor: import("platejs/react").PlateEditor;
                monitor: import("react-dnd").DropTargetMonitor<import("@platejs/dnd").DragItemNode, unknown>;
                nodeRef: any;
                target?: import("platejs").Path;
            }) => void;
        }, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"blockPlaceholder", {
            _target: {
                node: import("platejs").TElement;
                placeholder: string;
            } | null;
            placeholders: Record<string, string>;
            query: (context: import("platejs/react").PlatePluginContext<import("platejs/react").BlockPlaceholderConfig> & {
                node: import("platejs").TElement;
                path: import("platejs").Path;
            }) => boolean;
            className?: string;
        }, {}, {}, {
            placeholder: (node: import("platejs").TElement) => string | undefined;
        }>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"callout", {}, {}, {
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
                    match?: import("platejs").Predicate<import("platejs").NodeIn<Value>> | undefined;
                    text?: boolean;
                } & import("platejs").QueryAt & import("platejs").QueryMode & import("platejs").QueryVoids & {
                    icon?: string;
                    variant?: (string & {}) | import("platejs").TCalloutElement["variant"];
                }) | undefined) => void;
            };
        }, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"code_block", {
            defaultLanguage?: string | null;
            lowlight?: ReturnType<typeof import("lowlight").createLowlight> | null;
        }, {}, Record<"code_block", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<any, {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"code_syntax", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"column_group", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"column", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"copilot", {
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
        }>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"date", {}, {}, {
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
                    match?: import("platejs").Predicate<import("platejs").NodeIn<Value>> | undefined;
                    text?: boolean;
                } & import("platejs").QueryAt & import("platejs").QueryMode & import("platejs").QueryVoids) | undefined) => void;
            };
        }, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"placeholder", import("@platejs/media").MediaPlaceholderOptions & {
            disableEmptyPlaceholder: boolean;
            disableFileDrop: boolean;
            uploadConfig: import("@platejs/media/react").UploadConfig;
            uploadingFiles: Record<string, File>;
            error?: import("@platejs/media/react").UploadError | null;
            maxFileCount?: number;
            multiple?: boolean;
        }, {
            placeholder: import("@platejs/media/react").PlaceholderApi;
        } & Record<"placeholder", {
            addUploadingFile: (id: string, file: File) => void;
            getUploadingFile: (id: string) => File;
            removeUploadingFile: (id: string) => void;
        }>, {
            insert: {
                media: (files: FileList, options?: (Omit<import("platejs").InsertNodesOptions, "at"> & {
                    at?: import("platejs").Path;
                }) | undefined) => any;
            };
        }, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"docx", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"juice", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"emoji", {
            data?: import("@emoji-mart/data").EmojiMartData;
            createEmojiNode?: (emoji: import("@emoji-mart/data").Emoji) => import("platejs").Descendant;
        } & import("@platejs/combobox").TriggerComboboxPluginOptions, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"emoji_input", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"exitBreak", {}, {}, Record<"exitBreak", {
            insert: (options: Omit<import("platejs").InsertExitBreakOptions, "reverse">) => true | undefined;
            insertBefore: (options: Omit<import("platejs").InsertExitBreakOptions, "reverse">) => true | undefined;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"fontSize", {}, {}, Record<"fontSize", {
            addMark: (value: string) => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"table", {
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
        } & {
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
        } & {
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
        }>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"lineHeight", {}, {}, Record<"lineHeight", {
            setNodes: (value: number, setNodesOptions?: import("platejs").SetNodesOptions | undefined) => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"fixed-toolbar", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"floating-toolbar", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"color", {}, {}, Record<"color", {
            addMark: (value: string) => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"backgroundColor", {}, {}, Record<"backgroundColor", {
            addMark: (value: string) => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"fontFamily", {}, {}, Record<"fontFamily", {
            addMark: (value: string) => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"a", {
            allowedSchemes?: string[];
            dangerouslySkipSanitization?: boolean;
            defaultLinkAttributes?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
            forceSubmit?: boolean;
            keepSelectedTextOnPaste?: boolean;
            rangeBeforeOptions?: import("platejs").EditorBeforeOptions;
            triggerFloatingLinkHotkeys?: string[] | string;
            getLinkUrl?: (prevUrl: string | null) => Promise<string | null>;
            getUrlHref?: (url: string) => string | undefined;
            isUrl?: (text: string) => boolean;
            transformInput?: (url: string) => string | undefined;
        } & {
            isEditing: boolean;
            mode: import("@platejs/link/react").FloatingLinkMode;
            mouseDown: boolean;
            newTab: boolean;
            openEditorId: string | null;
            text: string;
            updated: boolean;
            url: string;
            triggerFloatingLinkHotkeys?: string;
        }, {
            floatingLink: {
                hide: () => void;
                reset: () => void;
                show: (mode: import("@platejs/link/react").FloatingLinkMode, editorId: string) => void;
            };
            link: {
                getAttributes: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, link: import("platejs").TLinkElement) => Pick<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target"> & import("platejs").UnknownObject>;
            };
        }, {}, {
            isOpen?: (editorId: string) => boolean;
        }>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"indent", {
            indentMax?: number;
            offset?: number;
            unit?: string;
        }, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"list", {
            getSiblingListOptions?: import("@platejs/list").GetSiblingListOptions<import("platejs").TElement>;
            getListStyleType?: (element: HTMLElement) => import("@platejs/list").ListStyleType;
        }, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"inline_equation", {}, {}, {
            insert: {
                inlineEquation: (texExpression?: string | undefined, options?: import("platejs").InsertNodesOptions | undefined) => void;
            };
        }, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"equation", {}, {}, {
            insert: {
                equation: (options?: import("platejs").InsertNodesOptions | undefined) => void;
            };
        }, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"media_embed", import("@platejs/media").MediaPluginOptions, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"img", {
            disableEmbedInsert?: boolean;
            disableUploadInsert?: boolean;
            uploadImage?: (dataUrl: ArrayBuffer | string) => ArrayBuffer | Promise<ArrayBuffer | string> | string;
        } & import("@platejs/media").MediaPluginOptions, {}, {
            insert: {
                imageFromFiles: (files: FileList, options?: import("platejs").InsertNodesOptions | undefined) => void;
            };
        }, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"video", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"audio", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"file", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"caption", {
            focusEndPath: import("platejs").Path | null;
            focusStartPath: import("platejs").Path | null;
            query: {
                allow: string[];
            };
            visibleId: string | null;
        }, {}, {}, {
            isVisible?: (elementId: string) => boolean;
        }>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"mention", {
            insertSpaceAfterMention?: boolean;
        } & import("@platejs/combobox").TriggerComboboxPluginOptions, {}, {
            insert: {
                mention: (options: {
                    search: string;
                    value: any;
                    key?: any;
                }) => void;
            };
        }, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"mention_input", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"slash_command", import("@platejs/combobox").TriggerComboboxPluginOptions, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"slash_input", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"tr", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"td", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"th", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"toc", {
            isScroll: boolean;
            topOffset: number;
            queryHeading?: (editor: import("platejs").SlateEditor) => import("@platejs/toc").Heading[];
        }, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"toggle", {
            openIds?: Set<string>;
        } & {
            toggleIndex?: ReturnType<(elements: Value) => Map<string, string[]>>;
        }, {
            toggle: {
                toggleIds: (ids: string[], force?: boolean | null) => void;
            };
        }, {}, {
            isOpen?: (toggleId: string) => boolean;
            someClosed?: (toggleIds: string[]) => boolean;
        }>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"trailingBlock", {
            type: string;
        } & {
            level?: number;
            type?: string;
        } & import("platejs").QueryNodeOptions, {}, {}, {}>>)[];
        shortcuts: import("platejs/react").Shortcuts;
    };
    operations: import("platejs").Operation<import("platejs").TElement | import("platejs").TText>[];
    plugins: {
        [x: string]: import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"comment", {
            activeId: string | null;
            commentingBlock: import("platejs").Path | null;
            hoverId: string | null;
            uniquePathMap: Map<string, import("platejs").Path>;
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
        }>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"markdown", {
            allowedNodes: import("@platejs/markdown").PlateType[] | null;
            disallowedNodes: import("@platejs/markdown").PlateType[] | null;
            remarkPlugins: import("unified").Plugin[];
            remarkStringifyOptions: import("remark-stringify").Options | null;
            rules: import("@platejs/markdown").MdRules | null;
            allowNode?: import("@platejs/markdown").AllowNodeConfig;
            plainMarks?: import("@platejs/markdown").PlateType[] | null;
        }, {
            markdown: {
                deserialize: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, data: string, options?: Omit<import("@platejs/markdown").DeserializeMdOptions, "editor">) => Value>;
                deserializeInline: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, text: string, options?: import("@platejs/markdown").DeserializeMdOptions) => import("platejs").Descendant[]>;
                serialize: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, options?: Omit<import("@platejs/markdown").SerializeMdOptions, "editor">) => string>;
            };
        } & Record<"markdown", {
            deserialize: (data: string, options?: Omit<import("@platejs/markdown").DeserializeMdOptions, "editor"> | undefined) => Value;
            deserializeInline: (text: string, options?: import("@platejs/markdown").DeserializeMdOptions | undefined) => import("platejs").Descendant[];
            serialize: (options?: Omit<import("@platejs/markdown").SerializeMdOptions, "editor"> | undefined) => string;
        }>, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"blockSelection", {
            anchorId?: string | null;
            areaOptions?: {
                document?: Document;
            } & {
                container?: (string | HTMLElement | (string | HTMLElement)[]) | undefined;
                features?: {
                    range?: boolean | undefined;
                    singleTap?: {
                        allow?: boolean | undefined;
                        intersect?: ("touch" | "native") | undefined;
                    } | undefined;
                    touch?: boolean | undefined;
                } | undefined;
                behaviour?: {
                    intersect?: ("center" | "touch" | "cover") | undefined;
                    overlap?: ("drop" | "invert" | "keep") | undefined;
                    scrolling?: {
                        manualSpeed?: number | undefined;
                        speedDivider?: number | undefined;
                        startScrollMargins?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        } | undefined;
                    } | undefined;
                    startThreshold?: number | {
                        x?: number | undefined;
                        y?: number | undefined;
                    } | undefined;
                    triggers?: ((0 | 2 | 1 | 3 | 4) | {
                        button: 0 | 2 | 1 | 3 | 4;
                        modifiers: ("shift" | "alt" | "ctrl")[];
                    })[] | undefined;
                } | undefined;
                boundaries?: (string | HTMLElement | (string | HTMLElement)[]) | undefined;
                selectables?: (string | string[]) | undefined;
                selectionAreaClass?: string | undefined;
                startAreas?: (string | HTMLElement | (string | HTMLElement)[]) | undefined;
            };
            editorPaddingRight?: import("react").CSSProperties["width"];
            enableContextMenu?: boolean;
            isSelecting?: boolean;
            isSelectionAreaVisible?: boolean;
            rightSelectionAreaClassName?: string;
            selectedIds?: Set<string>;
            shadowInputRef?: React.RefObject<HTMLInputElement | null>;
            isSelectable?: (element: import("platejs").TElement, path: import("platejs").Path) => boolean;
            onKeyDownSelecting?: (editor: import("platejs").SlateEditor, e: KeyboardEvent) => void;
        }, {
            blockSelection: {
                addOnContextMenu: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, { disabledWhenFocused, element, event }: {
                    element: import("platejs").TElement;
                    event: React.MouseEvent<HTMLDivElement, MouseEvent>;
                    disabledWhenFocused?: boolean;
                }) => void>;
                setSelectedIds: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { added, ids, removed }: Partial<{
                    added: Element[];
                    removed: Element[];
                }> & {
                    ids?: string[];
                }) => void>;
                add: (id: string[] | string) => void;
                addSelectedRow: (id: string, options?: {
                    clear?: boolean;
                    delay?: number;
                }) => void;
                clear: () => void;
                delete: (id: string[] | string) => void;
                deselect: () => void;
                first: () => import("platejs").NodeEntry<import("platejs").TIdElement> | null;
                focus: () => void;
                getNodes: (options?: {
                    collapseTableRows?: boolean;
                    selectionFallback?: boolean;
                    sort?: boolean;
                }) => import("platejs").NodeEntry<import("platejs").TIdElement>[];
                has: (id: string[] | string) => boolean;
                isSelectable: (element: import("platejs").TElement, path: import("platejs").Path) => boolean;
                moveSelection: (direction: "down" | "up") => void;
                resetSelectedIds: () => void;
                selectAll: () => void;
                set: (id: string[] | string) => void;
                shiftSelection: (direction: "down" | "up") => void;
                unselect: () => void;
            };
        } & Record<"blockSelection", Partial<{
            addOnContextMenu: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor, { disabledWhenFocused, element, event }: {
                element: import("platejs").TElement;
                event: React.MouseEvent<HTMLDivElement, MouseEvent>;
                disabledWhenFocused?: boolean;
            }) => void>;
            setSelectedIds: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { added, ids, removed }: Partial<{
                added: Element[];
                removed: Element[];
            }> & {
                ids?: string[];
            }) => void>;
            add: (id: string[] | string) => void;
            addSelectedRow: (id: string, options?: {
                clear?: boolean;
                delay?: number;
            }) => void;
            clear: () => void;
            delete: (id: string[] | string) => void;
            deselect: () => void;
            first: () => import("platejs").NodeEntry<import("platejs").TIdElement> | null;
            focus: () => void;
            getNodes: (options?: {
                collapseTableRows?: boolean;
                selectionFallback?: boolean;
                sort?: boolean;
            }) => import("platejs").NodeEntry<import("platejs").TIdElement>[];
            has: (id: string[] | string) => boolean;
            isSelectable: (element: import("platejs").TElement, path: import("platejs").Path) => boolean;
            moveSelection: (direction: "down" | "up") => void;
            resetSelectedIds: () => void;
            selectAll: () => void;
            set: (id: string[] | string) => void;
            shiftSelection: (direction: "down" | "up") => void;
            unselect: () => void;
        }>>, Record<"blockSelection", {
            duplicate: () => void;
            insertBlocksAndSelect: (nodes: import("platejs").TElement[], args_1: {
                at: import("platejs").Path;
                insertedCallback?: () => void;
            }) => void;
            removeNodes: () => void;
            select: () => void;
            selectBlocks: (at: import("platejs").Path | import("platejs").TNode) => void;
            setIndent: (indent: number, options?: import("platejs").SetNodesOptions | undefined) => void;
            setNodes: (props: Partial<Omit<import("platejs").TElement, "children">>, options?: import("platejs").SetNodesOptions | undefined) => void;
            setTexts: (props: Partial<Omit<import("platejs").TText, "text">>, options?: Omit<import("platejs").SetNodesOptions, "at"> | undefined) => void;
        }>, {
            isSelected?: (id?: string) => boolean;
            isSelectingSome?: () => boolean;
        }>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"bold", {}, {}, Record<"bold", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"italic", {}, {}, Record<"italic", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"underline", {}, {}, Record<"underline", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"code", {}, {}, Record<"code", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"strikethrough", {}, {}, Record<"strikethrough", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"subscript", {}, {}, Record<"subscript", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"superscript", {}, {}, Record<"superscript", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"highlight", {}, {}, Record<"highlight", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"kbd", {}, {}, Record<"kbd", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"discussion", {
            currentUserId: string;
            discussions: import("@/components/editor/plugins/discussion-kit").TDiscussion[];
            users: Record<string, {
                id: string;
                avatarUrl: string;
                name: string;
                hue?: number;
            }>;
        }, {}, {}, {
            currentUser: () => {
                id: string;
                avatarUrl: string;
                name: string;
                hue?: number;
            };
            user: (id: string) => {
                id: string;
                avatarUrl: string;
                name: string;
                hue?: number;
            };
        }>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"suggestion", {
            currentUserId: string | null;
            isSuggesting: boolean;
        } & {
            activeId: string | null;
            hoverId: string | null;
            uniquePathMap: Map<string, import("platejs").Path>;
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
        }, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"cursorOverlay", {
            cursors: Record<string, import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>>;
        }, {
            cursorOverlay: {
                addCursor: (id: string, cursor: Omit<import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>, "id">) => void;
                removeCursor: (id: (string & {}) | "drag" | "selection") => void;
            };
        } & Record<"cursorOverlay", {
            addCursor: (id: string, cursor: Omit<import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>, "id">) => void;
            removeCursor: (id: (string & {}) | "drag" | "selection") => void;
        }>, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"textAlign", {}, {}, Record<"textAlign", {
            setNodes: (value: import("@platejs/basic-styles").Alignment, setNodesOptions?: import("platejs").SetNodesOptions | undefined) => void;
        }>, {}>> | import("platejs").SlatePlugin<import("@platejs/autoformat").AutoformatConfig> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"p", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"blockquote", {}, {}, Record<"blockquote", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"hr", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"blockMenu", {
            openId: ((string & {}) | "context") | null;
            position: {
                x: number;
                y: number;
            };
        }, {
            blockMenu: {
                hide: () => void;
                show: (id: (string & {}) | "context", position?: {
                    x: number;
                    y: number;
                }) => void;
                showContextMenu: (blockId: string, position: {
                    x: number;
                    y: number;
                }) => void;
            };
        } & Record<"blockMenu", Partial<{
            hide: () => void;
            show: (id: (string & {}) | "context", position?: {
                x: number;
                y: number;
            }) => void;
            showContextMenu: (blockId: string, position: {
                x: number;
                y: number;
            }) => void;
        }>>, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"dnd", {
            _isOver?: boolean;
            draggingId?: string[] | string | null;
            dropTarget?: {
                id: string | null;
                line: import("@platejs/dnd").DropLineDirection;
            };
            enableScroller?: boolean;
            isDragging?: boolean;
            multiplePreviewRef?: React.RefObject<HTMLDivElement | null> | null;
            scrollerProps?: Partial<import("@platejs/dnd").ScrollerProps>;
            onDropFiles?: (props: {
                id: string;
                dragItem: import("@platejs/dnd").FileDragItemNode;
                editor: import("platejs/react").PlateEditor;
                monitor: import("react-dnd").DropTargetMonitor<import("@platejs/dnd").DragItemNode, unknown>;
                nodeRef: any;
                target?: import("platejs").Path;
            }) => void;
        }, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"blockPlaceholder", {
            _target: {
                node: import("platejs").TElement;
                placeholder: string;
            } | null;
            placeholders: Record<string, string>;
            query: (context: import("platejs/react").PlatePluginContext<import("platejs/react").BlockPlaceholderConfig> & {
                node: import("platejs").TElement;
                path: import("platejs").Path;
            }) => boolean;
            className?: string;
        }, {}, {}, {
            placeholder: (node: import("platejs").TElement) => string | undefined;
        }>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"callout", {}, {}, {
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
                    match?: import("platejs").Predicate<import("platejs").NodeIn<Value>> | undefined;
                    text?: boolean;
                } & import("platejs").QueryAt & import("platejs").QueryMode & import("platejs").QueryVoids & {
                    icon?: string;
                    variant?: (string & {}) | import("platejs").TCalloutElement["variant"];
                }) | undefined) => void;
            };
        }, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"code_block", {
            defaultLanguage?: string | null;
            lowlight?: ReturnType<typeof import("lowlight").createLowlight> | null;
        }, {}, Record<"code_block", {
            toggle: () => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<any, {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"code_syntax", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"column_group", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"column", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"copilot", {
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
        }>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"date", {}, {}, {
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
                    match?: import("platejs").Predicate<import("platejs").NodeIn<Value>> | undefined;
                    text?: boolean;
                } & import("platejs").QueryAt & import("platejs").QueryMode & import("platejs").QueryVoids) | undefined) => void;
            };
        }, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"placeholder", import("@platejs/media").MediaPlaceholderOptions & {
            disableEmptyPlaceholder: boolean;
            disableFileDrop: boolean;
            uploadConfig: import("@platejs/media/react").UploadConfig;
            uploadingFiles: Record<string, File>;
            error?: import("@platejs/media/react").UploadError | null;
            maxFileCount?: number;
            multiple?: boolean;
        }, {
            placeholder: import("@platejs/media/react").PlaceholderApi;
        } & Record<"placeholder", {
            addUploadingFile: (id: string, file: File) => void;
            getUploadingFile: (id: string) => File;
            removeUploadingFile: (id: string) => void;
        }>, {
            insert: {
                media: (files: FileList, options?: (Omit<import("platejs").InsertNodesOptions, "at"> & {
                    at?: import("platejs").Path;
                }) | undefined) => any;
            };
        }, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"docx", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"juice", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"emoji", {
            data?: import("@emoji-mart/data").EmojiMartData;
            createEmojiNode?: (emoji: import("@emoji-mart/data").Emoji) => import("platejs").Descendant;
        } & import("@platejs/combobox").TriggerComboboxPluginOptions, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"emoji_input", {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"exitBreak", {}, {}, Record<"exitBreak", {
            insert: (options: Omit<import("platejs").InsertExitBreakOptions, "reverse">) => true | undefined;
            insertBefore: (options: Omit<import("platejs").InsertExitBreakOptions, "reverse">) => true | undefined;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"fontSize", {}, {}, Record<"fontSize", {
            addMark: (value: string) => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"table", {
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
        } & {
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
        } & {
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
        }>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"lineHeight", {}, {}, Record<"lineHeight", {
            setNodes: (value: number, setNodesOptions?: import("platejs").SetNodesOptions | undefined) => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"fixed-toolbar", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"floating-toolbar", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"color", {}, {}, Record<"color", {
            addMark: (value: string) => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"backgroundColor", {}, {}, Record<"backgroundColor", {
            addMark: (value: string) => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"fontFamily", {}, {}, Record<"fontFamily", {
            addMark: (value: string) => void;
        }>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"a", {
            allowedSchemes?: string[];
            dangerouslySkipSanitization?: boolean;
            defaultLinkAttributes?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
            forceSubmit?: boolean;
            keepSelectedTextOnPaste?: boolean;
            rangeBeforeOptions?: import("platejs").EditorBeforeOptions;
            triggerFloatingLinkHotkeys?: string[] | string;
            getLinkUrl?: (prevUrl: string | null) => Promise<string | null>;
            getUrlHref?: (url: string) => string | undefined;
            isUrl?: (text: string) => boolean;
            transformInput?: (url: string) => string | undefined;
        } & {
            isEditing: boolean;
            mode: import("@platejs/link/react").FloatingLinkMode;
            mouseDown: boolean;
            newTab: boolean;
            openEditorId: string | null;
            text: string;
            updated: boolean;
            url: string;
            triggerFloatingLinkHotkeys?: string;
        }, {
            floatingLink: {
                hide: () => void;
                reset: () => void;
                show: (mode: import("@platejs/link/react").FloatingLinkMode, editorId: string) => void;
            };
            link: {
                getAttributes: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, link: import("platejs").TLinkElement) => Pick<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target"> & import("platejs").UnknownObject>;
            };
        }, {}, {
            isOpen?: (editorId: string) => boolean;
        }>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"indent", {
            indentMax?: number;
            offset?: number;
            unit?: string;
        }, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"list", {
            getSiblingListOptions?: import("@platejs/list").GetSiblingListOptions<import("platejs").TElement>;
            getListStyleType?: (element: HTMLElement) => import("@platejs/list").ListStyleType;
        }, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"inline_equation", {}, {}, {
            insert: {
                inlineEquation: (texExpression?: string | undefined, options?: import("platejs").InsertNodesOptions | undefined) => void;
            };
        }, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"equation", {}, {}, {
            insert: {
                equation: (options?: import("platejs").InsertNodesOptions | undefined) => void;
            };
        }, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"media_embed", import("@platejs/media").MediaPluginOptions, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"img", {
            disableEmbedInsert?: boolean;
            disableUploadInsert?: boolean;
            uploadImage?: (dataUrl: ArrayBuffer | string) => ArrayBuffer | Promise<ArrayBuffer | string> | string;
        } & import("@platejs/media").MediaPluginOptions, {}, {
            insert: {
                imageFromFiles: (files: FileList, options?: import("platejs").InsertNodesOptions | undefined) => void;
            };
        }, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"video", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"audio", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"file", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"caption", {
            focusEndPath: import("platejs").Path | null;
            focusStartPath: import("platejs").Path | null;
            query: {
                allow: string[];
            };
            visibleId: string | null;
        }, {}, {}, {
            isVisible?: (elementId: string) => boolean;
        }>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"mention", {
            insertSpaceAfterMention?: boolean;
        } & import("@platejs/combobox").TriggerComboboxPluginOptions, {}, {
            insert: {
                mention: (options: {
                    search: string;
                    value: any;
                    key?: any;
                }) => void;
            };
        }, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"mention_input", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"slash_command", import("@platejs/combobox").TriggerComboboxPluginOptions, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"slash_input", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"tr", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"td", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"th", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"toc", {
            isScroll: boolean;
            topOffset: number;
            queryHeading?: (editor: import("platejs").SlateEditor) => import("@platejs/toc").Heading[];
        }, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"toggle", {
            openIds?: Set<string>;
        } & {
            toggleIndex?: ReturnType<(elements: Value) => Map<string, string[]>>;
        }, {
            toggle: {
                toggleIds: (ids: string[], force?: boolean | null) => void;
            };
        }, {}, {
            isOpen?: (toggleId: string) => boolean;
            someClosed?: (toggleIds: string[]) => boolean;
        }>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"trailingBlock", {
            type: string;
        } & {
            level?: number;
            type?: string;
        } & import("platejs").QueryNodeOptions, {}, {}, {}>>;
    };
    tf: {
        addMark: import("platejs").OmitFirst<(editor: import("platejs").Editor, key: string, value: any) => void>;
        addMarks: import("platejs").OmitFirst<(editor: import("platejs").Editor, marks: import("platejs").EditorMarks, { remove }?: import("platejs").AddMarksOptions) => void>;
        deleteBackward: import("platejs").OmitFirst<(editor: import("platejs").Editor, unit?: import("platejs").TextUnit) => void>;
        deleteForward: import("platejs").OmitFirst<(editor: import("platejs").Editor, unit?: import("platejs").TextUnit) => void>;
        deleteFragment: import("platejs").OmitFirst<(editor: import("platejs").Editor, options?: import("slate").EditorFragmentDeletionOptions) => void>;
        duplicateNodes: import("platejs").OmitFirst<(editor: import("platejs").Editor, { block, nodes, ...options }?: import("platejs").DuplicateNodesOptions) => void>;
        insertBreak: import("platejs").OmitFirst<(editor: import("platejs").Editor) => void>;
        removeMarks: import("platejs").OmitFirst<(editor: import("platejs").Editor, keys?: string[] | string | null, { at, shouldChange, ...options }?: import("platejs").RemoveMarksOptions) => void>;
        reset: import("platejs").OmitFirst<(editor: import("platejs").Editor, options?: import("platejs").ResetOptions) => void>;
        toggleBlock: import("platejs").OmitFirst<(editor: import("platejs").Editor, type: string, { defaultType: defaultTypeProp, someOptions, wrap, ...options }?: import("platejs").ToggleBlockOptions) => void>;
        toggleMark: import("platejs").OmitFirst<(editor: import("platejs").Editor, key: string, { remove }?: import("platejs").ToggleMarkOptions) => void>;
        withoutNormalizing: import("platejs").OmitFirst<(editor: import("platejs").Editor, fn: () => boolean | void) => boolean>;
        escape: () => boolean | undefined;
        insertFragment: <N extends import("platejs").ElementOrTextIn<Value>>(fragment: N[], options?: import("platejs").InsertFragmentOptions) => void;
        insertNode: <N extends import("platejs").TElement | import("platejs").TText>(node: N, options?: import("platejs").InsertNodesOptions<Value> | undefined) => void;
        insertNodes: <N extends import("platejs").ElementOrTextIn<Value>>(nodes: N | N[], options?: import("platejs").InsertNodesOptions<Value> | undefined) => void;
        insertSoftBreak: () => void;
        liftNodes: (options?: import("platejs").LiftNodesOptions<Value> | undefined) => void;
        mergeNodes: (options?: import("platejs").MergeNodesOptions<Value, import("platejs").Editor<Value>> | undefined) => void;
        moveLine: (options: {
            reverse: boolean;
        }) => boolean | undefined;
        moveNodes: (options: import("platejs").MoveNodesOptions<Value>) => boolean | void;
        normalize: (options?: import("platejs").EditorNormalizeOptions) => void;
        redo: () => void;
        removeMark: (key: string) => void;
        removeNodes: (options?: import("platejs").RemoveNodesOptions<Value> | undefined) => void;
        replaceNodes: <N extends import("platejs").ElementOrTextIn<Value>>(nodes: N | N[], options?: import("platejs").ReplaceNodesOptions<Value> | undefined) => void;
        selectAll: () => boolean | undefined;
        setNodes: <N extends import("platejs").TElement | import("platejs").TText>(props: Partial<import("platejs").NodeProps<N>>, options?: import("platejs").SetNodesOptions<Value> | undefined) => void;
        splitNodes: (options?: import("platejs").SplitNodesOptions<Value> | undefined) => void;
        tab: (options: {
            reverse: boolean;
        }) => boolean | undefined;
        undo: () => void;
        unsetNodes: <N extends import("platejs").TElement | import("platejs").TText>(props: keyof import("platejs").NodeProps<N> | (keyof import("platejs").NodeProps<N>)[], options?: import("platejs").UnsetNodesOptions<Value> | undefined) => void;
        unwrapNodes: (options?: import("platejs").UnwrapNodesOptions<Value> | undefined) => void;
        wrapNodes: <N extends import("platejs").TElement>(element: N, options?: import("platejs").WrapNodesOptions<Value> | undefined) => void;
        writeHistory: (stack: "redos" | "undos", batch: any) => void;
    } & {
        delete: import("platejs").OmitFirst<(<E extends import("platejs").Editor>(editor: E, options?: import("platejs").DeleteTextOptions) => void)>;
        insertText: (text: string, options?: import("platejs").InsertTextOptions) => void;
    } & {
        collapse: import("platejs").OmitFirst<(editor: import("platejs").Editor, options?: import("slate/dist/interfaces/transforms/selection").SelectionCollapseOptions) => void>;
        move: import("platejs").OmitFirst<(editor: import("platejs").Editor, options?: import("slate/dist/interfaces/transforms/selection").SelectionMoveOptions) => void>;
        select: import("platejs").OmitFirst<(editor: import("platejs").Editor, target?: import("platejs").At, options?: import("platejs").SelectOptions) => void>;
        setPoint: import("platejs").OmitFirst<(editor: import("platejs").Editor, props: Partial<import("platejs").Point>, options?: import("slate/dist/interfaces/transforms/selection").SelectionSetPointOptions) => void>;
        setSelection: import("platejs").OmitFirst<(editor: import("platejs").Editor, props: Partial<import("platejs").TRange>) => void>;
        deselect: () => void;
    } & {
        blur: import("platejs").OmitFirst<(editor: import("platejs").Editor) => void>;
        deselectDOM: import("platejs").OmitFirst<(editor: import("platejs").Editor) => void>;
        focus: import("platejs").OmitFirst<(editor: import("platejs").Editor, { at, edge, retries }?: import("platejs").FocusOptions) => void>;
        insertData: import("slate-dom").DOMEditor["insertData"];
        insertFragmentData: import("slate-dom").DOMEditor["insertFragmentData"];
        insertTextData: import("slate-dom").DOMEditor["insertTextData"];
        setFragmentData: import("slate-dom").DOMEditor["setFragmentData"];
    } & {
        setSplittingOnce: import("platejs").OmitFirst<(editor: import("platejs").Editor, value: boolean | undefined) => void>;
        withMerging: import("platejs").OmitFirst<(editor: import("platejs").Editor, fn: () => void) => void>;
        withNewBatch: import("platejs").OmitFirst<(editor: import("platejs").Editor, fn: () => void) => void>;
        withoutMerging: import("platejs").OmitFirst<(editor: import("platejs").Editor, fn: () => void) => void>;
        withoutSaving: import("platejs").OmitFirst<(editor: import("platejs").Editor, fn: () => void) => void>;
    } & {
        apply: <N extends import("platejs").TElement | import("platejs").TText>(operation: import("platejs").Operation<N>) => void;
        normalizeNode: <N extends import("platejs").NodeIn<Value>>(entry: import("platejs").NodeEntry<N>, options?: {
            operation?: import("platejs").Operation;
        }) => void;
    } & {
        init: ((args_0: import("platejs").InitOptions) => void) & ((args_0: import("platejs").InitOptions) => void);
        insertExitBreak: ((args_0?: import("platejs").InsertExitBreakOptions | undefined) => true | undefined) & ((args_0?: import("platejs").InsertExitBreakOptions | undefined) => true | undefined);
        resetBlock: ((args_0?: {
            at?: import("platejs").Path;
        } | undefined) => true | undefined) & ((args_0?: {
            at?: import("platejs").Path;
        } | undefined) => true | undefined);
        setValue: ((value?: string | Value | undefined) => void) & ((value?: string | Value | undefined) => void);
        apply: <N$1 extends import("platejs").TElement | import("platejs").TText>(operation: import("platejs").Operation<N$1>) => void;
    } & {
        withScrolling: (fn: () => void, options?: import("platejs").WithAutoScrollOptions | undefined) => void;
    } & {
        nodeId: {
            normalize: () => void;
        };
    } & Record<"nodeId", {
        normalize(): void;
    }> & {
        reset: (options: import("platejs").ResetOptions | undefined) => void;
        init: ((args_0: import("platejs").InitOptions) => void) & ((args_0: import("platejs").InitOptions) => void);
        insertExitBreak: ((args_0?: import("platejs").InsertExitBreakOptions | undefined) => true | undefined) & ((args_0?: import("platejs").InsertExitBreakOptions | undefined) => true | undefined);
        resetBlock: ((args_0?: {
            at?: import("platejs").Path;
        } | undefined) => true | undefined) & ((args_0?: {
            at?: import("platejs").Path;
        } | undefined) => true | undefined);
        setValue: ((value?: string | Value | undefined) => void) & ((value?: string | Value | undefined) => void);
        apply: <N$1 extends import("platejs").TElement | import("platejs").TText>(operation: import("platejs").Operation<N$1>) => void;
    } & Record<"bold", {
        toggle: () => void;
    }> & Record<"italic", {
        toggle: () => void;
    }> & Record<"underline", {
        toggle: () => void;
    }> & Record<"code", {
        toggle: () => void;
    }> & Record<"strikethrough", {
        toggle: () => void;
    }> & Record<"subscript", {
        toggle: () => void;
    }> & Record<"superscript", {
        toggle: () => void;
    }> & Record<"highlight", {
        toggle: () => void;
    }> & Record<"kbd", {
        toggle: () => void;
    }> & {
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
    }> & Record<"blockSelection", {
        duplicate: () => void;
        insertBlocksAndSelect: (nodes: import("platejs").TElement[], args_1: {
            at: import("platejs").Path;
            insertedCallback?: () => void;
        }) => void;
        removeNodes: () => void;
        select: () => void;
        selectBlocks: (at: import("platejs").Path | import("platejs").TNode) => void;
        setIndent: (indent: number, options?: import("platejs").SetNodesOptions | undefined) => void;
        setNodes: (props: Partial<Omit<import("platejs").TElement, "children">>, options?: import("platejs").SetNodesOptions | undefined) => void;
        setTexts: (props: Partial<Omit<import("platejs").TText, "text">>, options?: Omit<import("platejs").SetNodesOptions, "at"> | undefined) => void;
    }> & Record<"textAlign", {
        setNodes: (value: import("@platejs/basic-styles").Alignment, setNodesOptions?: import("platejs").SetNodesOptions | undefined) => void;
    }> & Record<"blockquote", {
        toggle: () => void;
    }> & {
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
                match?: import("platejs").Predicate<import("platejs").NodeIn<Value>> | undefined;
                text?: boolean;
            } & import("platejs").QueryAt & import("platejs").QueryMode & import("platejs").QueryVoids & {
                icon?: string;
                variant?: (string & {}) | import("platejs").TCalloutElement["variant"];
            }) | undefined) => void;
        };
    } & Record<"code_block", {
        toggle: () => void;
    }> & {
        copilot: {
            accept: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor) => false | undefined>;
            acceptNextWord: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor) => false | undefined>;
        };
    } & Record<"copilot", {
        accept: () => false | undefined;
        acceptNextWord: () => false | undefined;
    }> & {
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
                match?: import("platejs").Predicate<import("platejs").NodeIn<Value>> | undefined;
                text?: boolean;
            } & import("platejs").QueryAt & import("platejs").QueryMode & import("platejs").QueryVoids) | undefined) => void;
        };
    } & {
        insert: {
            media: (files: FileList, options?: (Omit<import("platejs").InsertNodesOptions, "at"> & {
                at?: import("platejs").Path;
            }) | undefined) => any;
        };
    } & Record<"exitBreak", {
        insert: (options: Omit<import("platejs").InsertExitBreakOptions, "reverse">) => true | undefined;
        insertBefore: (options: Omit<import("platejs").InsertExitBreakOptions, "reverse">) => true | undefined;
    }> & Record<"fontSize", {
        addMark: (value: string) => void;
    }> & {
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
    } & {
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
    } & Record<"lineHeight", {
        setNodes: (value: number, setNodesOptions?: import("platejs").SetNodesOptions | undefined) => void;
    }> & Record<"color", {
        addMark: (value: string) => void;
    }> & Record<"backgroundColor", {
        addMark: (value: string) => void;
    }> & Record<"fontFamily", {
        addMark: (value: string) => void;
    }> & {
        insert: {
            inlineEquation: (texExpression?: string | undefined, options?: import("platejs").InsertNodesOptions | undefined) => void;
        };
    } & {
        insert: {
            equation: (options?: import("platejs").InsertNodesOptions | undefined) => void;
        };
    } & {
        insert: {
            imageFromFiles: (files: FileList, options?: import("platejs").InsertNodesOptions | undefined) => void;
        };
    } & {
        insert: {
            mention: (options: {
                search: string;
                value: any;
                key?: any;
            }) => void;
        };
    };
    transforms: {
        addMark: import("platejs").OmitFirst<(editor: import("platejs").Editor, key: string, value: any) => void>;
        addMarks: import("platejs").OmitFirst<(editor: import("platejs").Editor, marks: import("platejs").EditorMarks, { remove }?: import("platejs").AddMarksOptions) => void>;
        deleteBackward: import("platejs").OmitFirst<(editor: import("platejs").Editor, unit?: import("platejs").TextUnit) => void>;
        deleteForward: import("platejs").OmitFirst<(editor: import("platejs").Editor, unit?: import("platejs").TextUnit) => void>;
        deleteFragment: import("platejs").OmitFirst<(editor: import("platejs").Editor, options?: import("slate").EditorFragmentDeletionOptions) => void>;
        duplicateNodes: import("platejs").OmitFirst<(editor: import("platejs").Editor, { block, nodes, ...options }?: import("platejs").DuplicateNodesOptions) => void>;
        insertBreak: import("platejs").OmitFirst<(editor: import("platejs").Editor) => void>;
        removeMarks: import("platejs").OmitFirst<(editor: import("platejs").Editor, keys?: string[] | string | null, { at, shouldChange, ...options }?: import("platejs").RemoveMarksOptions) => void>;
        reset: import("platejs").OmitFirst<(editor: import("platejs").Editor, options?: import("platejs").ResetOptions) => void>;
        toggleBlock: import("platejs").OmitFirst<(editor: import("platejs").Editor, type: string, { defaultType: defaultTypeProp, someOptions, wrap, ...options }?: import("platejs").ToggleBlockOptions) => void>;
        toggleMark: import("platejs").OmitFirst<(editor: import("platejs").Editor, key: string, { remove }?: import("platejs").ToggleMarkOptions) => void>;
        withoutNormalizing: import("platejs").OmitFirst<(editor: import("platejs").Editor, fn: () => boolean | void) => boolean>;
        escape: () => boolean | undefined;
        insertFragment: <N extends import("platejs").ElementOrTextIn<Value>>(fragment: N[], options?: import("platejs").InsertFragmentOptions) => void;
        insertNode: <N extends import("platejs").TElement | import("platejs").TText>(node: N, options?: import("platejs").InsertNodesOptions<Value> | undefined) => void;
        insertNodes: <N extends import("platejs").ElementOrTextIn<Value>>(nodes: N | N[], options?: import("platejs").InsertNodesOptions<Value> | undefined) => void;
        insertSoftBreak: () => void;
        liftNodes: (options?: import("platejs").LiftNodesOptions<Value> | undefined) => void;
        mergeNodes: (options?: import("platejs").MergeNodesOptions<Value, import("platejs").Editor<Value>> | undefined) => void;
        moveLine: (options: {
            reverse: boolean;
        }) => boolean | undefined;
        moveNodes: (options: import("platejs").MoveNodesOptions<Value>) => boolean | void;
        normalize: (options?: import("platejs").EditorNormalizeOptions) => void;
        redo: () => void;
        removeMark: (key: string) => void;
        removeNodes: (options?: import("platejs").RemoveNodesOptions<Value> | undefined) => void;
        replaceNodes: <N extends import("platejs").ElementOrTextIn<Value>>(nodes: N | N[], options?: import("platejs").ReplaceNodesOptions<Value> | undefined) => void;
        selectAll: () => boolean | undefined;
        setNodes: <N extends import("platejs").TElement | import("platejs").TText>(props: Partial<import("platejs").NodeProps<N>>, options?: import("platejs").SetNodesOptions<Value> | undefined) => void;
        splitNodes: (options?: import("platejs").SplitNodesOptions<Value> | undefined) => void;
        tab: (options: {
            reverse: boolean;
        }) => boolean | undefined;
        undo: () => void;
        unsetNodes: <N extends import("platejs").TElement | import("platejs").TText>(props: keyof import("platejs").NodeProps<N> | (keyof import("platejs").NodeProps<N>)[], options?: import("platejs").UnsetNodesOptions<Value> | undefined) => void;
        unwrapNodes: (options?: import("platejs").UnwrapNodesOptions<Value> | undefined) => void;
        wrapNodes: <N extends import("platejs").TElement>(element: N, options?: import("platejs").WrapNodesOptions<Value> | undefined) => void;
        writeHistory: (stack: "redos" | "undos", batch: any) => void;
    } & {
        delete: import("platejs").OmitFirst<(<E extends import("platejs").Editor>(editor: E, options?: import("platejs").DeleteTextOptions) => void)>;
        insertText: (text: string, options?: import("platejs").InsertTextOptions) => void;
    } & {
        collapse: import("platejs").OmitFirst<(editor: import("platejs").Editor, options?: import("slate/dist/interfaces/transforms/selection").SelectionCollapseOptions) => void>;
        move: import("platejs").OmitFirst<(editor: import("platejs").Editor, options?: import("slate/dist/interfaces/transforms/selection").SelectionMoveOptions) => void>;
        select: import("platejs").OmitFirst<(editor: import("platejs").Editor, target?: import("platejs").At, options?: import("platejs").SelectOptions) => void>;
        setPoint: import("platejs").OmitFirst<(editor: import("platejs").Editor, props: Partial<import("platejs").Point>, options?: import("slate/dist/interfaces/transforms/selection").SelectionSetPointOptions) => void>;
        setSelection: import("platejs").OmitFirst<(editor: import("platejs").Editor, props: Partial<import("platejs").TRange>) => void>;
        deselect: () => void;
    } & {
        blur: import("platejs").OmitFirst<(editor: import("platejs").Editor) => void>;
        deselectDOM: import("platejs").OmitFirst<(editor: import("platejs").Editor) => void>;
        focus: import("platejs").OmitFirst<(editor: import("platejs").Editor, { at, edge, retries }?: import("platejs").FocusOptions) => void>;
        insertData: import("slate-dom").DOMEditor["insertData"];
        insertFragmentData: import("slate-dom").DOMEditor["insertFragmentData"];
        insertTextData: import("slate-dom").DOMEditor["insertTextData"];
        setFragmentData: import("slate-dom").DOMEditor["setFragmentData"];
    } & {
        setSplittingOnce: import("platejs").OmitFirst<(editor: import("platejs").Editor, value: boolean | undefined) => void>;
        withMerging: import("platejs").OmitFirst<(editor: import("platejs").Editor, fn: () => void) => void>;
        withNewBatch: import("platejs").OmitFirst<(editor: import("platejs").Editor, fn: () => void) => void>;
        withoutMerging: import("platejs").OmitFirst<(editor: import("platejs").Editor, fn: () => void) => void>;
        withoutSaving: import("platejs").OmitFirst<(editor: import("platejs").Editor, fn: () => void) => void>;
    } & {
        apply: <N extends import("platejs").TElement | import("platejs").TText>(operation: import("platejs").Operation<N>) => void;
        normalizeNode: <N extends import("platejs").NodeIn<Value>>(entry: import("platejs").NodeEntry<N>, options?: {
            operation?: import("platejs").Operation;
        }) => void;
    } & {
        init: ((args_0: import("platejs").InitOptions) => void) & ((args_0: import("platejs").InitOptions) => void);
        insertExitBreak: ((args_0?: import("platejs").InsertExitBreakOptions | undefined) => true | undefined) & ((args_0?: import("platejs").InsertExitBreakOptions | undefined) => true | undefined);
        resetBlock: ((args_0?: {
            at?: import("platejs").Path;
        } | undefined) => true | undefined) & ((args_0?: {
            at?: import("platejs").Path;
        } | undefined) => true | undefined);
        setValue: ((value?: string | Value | undefined) => void) & ((value?: string | Value | undefined) => void);
        apply: <N$1 extends import("platejs").TElement | import("platejs").TText>(operation: import("platejs").Operation<N$1>) => void;
    } & {
        withScrolling: (fn: () => void, options?: import("platejs").WithAutoScrollOptions | undefined) => void;
    } & {
        nodeId: {
            normalize: () => void;
        };
    } & Record<"nodeId", {
        normalize(): void;
    }> & {
        reset: (options: import("platejs").ResetOptions | undefined) => void;
        init: ((args_0: import("platejs").InitOptions) => void) & ((args_0: import("platejs").InitOptions) => void);
        insertExitBreak: ((args_0?: import("platejs").InsertExitBreakOptions | undefined) => true | undefined) & ((args_0?: import("platejs").InsertExitBreakOptions | undefined) => true | undefined);
        resetBlock: ((args_0?: {
            at?: import("platejs").Path;
        } | undefined) => true | undefined) & ((args_0?: {
            at?: import("platejs").Path;
        } | undefined) => true | undefined);
        setValue: ((value?: string | Value | undefined) => void) & ((value?: string | Value | undefined) => void);
        apply: <N$1 extends import("platejs").TElement | import("platejs").TText>(operation: import("platejs").Operation<N$1>) => void;
    } & Record<"bold", {
        toggle: () => void;
    }> & Record<"italic", {
        toggle: () => void;
    }> & Record<"underline", {
        toggle: () => void;
    }> & Record<"code", {
        toggle: () => void;
    }> & Record<"strikethrough", {
        toggle: () => void;
    }> & Record<"subscript", {
        toggle: () => void;
    }> & Record<"superscript", {
        toggle: () => void;
    }> & Record<"highlight", {
        toggle: () => void;
    }> & Record<"kbd", {
        toggle: () => void;
    }> & {
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
    }> & Record<"blockSelection", {
        duplicate: () => void;
        insertBlocksAndSelect: (nodes: import("platejs").TElement[], args_1: {
            at: import("platejs").Path;
            insertedCallback?: () => void;
        }) => void;
        removeNodes: () => void;
        select: () => void;
        selectBlocks: (at: import("platejs").Path | import("platejs").TNode) => void;
        setIndent: (indent: number, options?: import("platejs").SetNodesOptions | undefined) => void;
        setNodes: (props: Partial<Omit<import("platejs").TElement, "children">>, options?: import("platejs").SetNodesOptions | undefined) => void;
        setTexts: (props: Partial<Omit<import("platejs").TText, "text">>, options?: Omit<import("platejs").SetNodesOptions, "at"> | undefined) => void;
    }> & Record<"textAlign", {
        setNodes: (value: import("@platejs/basic-styles").Alignment, setNodesOptions?: import("platejs").SetNodesOptions | undefined) => void;
    }> & Record<"blockquote", {
        toggle: () => void;
    }> & {
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
                match?: import("platejs").Predicate<import("platejs").NodeIn<Value>> | undefined;
                text?: boolean;
            } & import("platejs").QueryAt & import("platejs").QueryMode & import("platejs").QueryVoids & {
                icon?: string;
                variant?: (string & {}) | import("platejs").TCalloutElement["variant"];
            }) | undefined) => void;
        };
    } & Record<"code_block", {
        toggle: () => void;
    }> & {
        copilot: {
            accept: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor) => false | undefined>;
            acceptNextWord: import("platejs").OmitFirst<(editor: import("platejs/react").PlateEditor) => false | undefined>;
        };
    } & Record<"copilot", {
        accept: () => false | undefined;
        acceptNextWord: () => false | undefined;
    }> & {
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
                match?: import("platejs").Predicate<import("platejs").NodeIn<Value>> | undefined;
                text?: boolean;
            } & import("platejs").QueryAt & import("platejs").QueryMode & import("platejs").QueryVoids) | undefined) => void;
        };
    } & {
        insert: {
            media: (files: FileList, options?: (Omit<import("platejs").InsertNodesOptions, "at"> & {
                at?: import("platejs").Path;
            }) | undefined) => any;
        };
    } & Record<"exitBreak", {
        insert: (options: Omit<import("platejs").InsertExitBreakOptions, "reverse">) => true | undefined;
        insertBefore: (options: Omit<import("platejs").InsertExitBreakOptions, "reverse">) => true | undefined;
    }> & Record<"fontSize", {
        addMark: (value: string) => void;
    }> & {
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
    } & {
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
    } & Record<"lineHeight", {
        setNodes: (value: number, setNodesOptions?: import("platejs").SetNodesOptions | undefined) => void;
    }> & Record<"color", {
        addMark: (value: string) => void;
    }> & Record<"backgroundColor", {
        addMark: (value: string) => void;
    }> & Record<"fontFamily", {
        addMark: (value: string) => void;
    }> & {
        insert: {
            inlineEquation: (texExpression?: string | undefined, options?: import("platejs").InsertNodesOptions | undefined) => void;
        };
    } & {
        insert: {
            equation: (options?: import("platejs").InsertNodesOptions | undefined) => void;
        };
    } & {
        insert: {
            imageFromFiles: (files: FileList, options?: import("platejs").InsertNodesOptions | undefined) => void;
        };
    } & {
        insert: {
            mention: (options: {
                search: string;
                value: any;
                key?: any;
            }) => void;
        };
    };
    getApi: <C$1 extends import("platejs").AnyPluginConfig = import("platejs").PluginConfig>(plugin?: import("platejs").WithRequiredKey<C$1> | undefined) => {
        fragment: <N extends import("platejs").ElementOrTextIn<Value>>(at?: import("platejs").At | null, options?: import("platejs").EditorFragmentOptions) => N[];
        getDirtyPaths: <N extends import("platejs").TElement | import("platejs").TText>(operation: import("platejs").Operation<N>) => import("platejs").Path[];
        getFragment: (at?: import("platejs").At) => import("platejs").ElementOrTextIn<Value>[];
        isElementReadOnly: <N extends import("platejs").TElement>(element: N) => boolean;
        isSelected: (target: import("platejs").Path | import("platejs").TRange, options?: import("platejs").EditorIsSelectedOptions) => boolean;
        isVoid: <N extends import("platejs").TElement>(element: N) => boolean;
        markableVoid: <N extends import("platejs").TElement>(element: N) => boolean;
        setNormalizing: (isNormalizing: boolean) => void;
        shouldMergeNodes: (prevNodeEntry: import("platejs").NodeEntry, curNodeEntry: import("platejs").NodeEntry, options?: {
            reverse?: boolean;
        }) => boolean;
        shouldNormalize: (options: {
            dirtyPaths: import("platejs").Path[];
            initialDirtyPathsLength: number;
            iteration: number;
            operation?: import("platejs").Operation;
        }) => boolean;
        shouldNormalizeNode: (entry: import("platejs").NodeEntry) => boolean;
        onChange: (options?: {
            operation?: import("platejs").Operation;
        }) => void;
    } & {
        after: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At, options?: import("platejs").EditorAfterOptions) => import("slate").BasePoint | undefined>;
        before: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At, options?: import("platejs").EditorBeforeOptions) => import("platejs").Point | undefined>;
        edges: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At) => [import("slate").BasePoint, import("slate").BasePoint] | undefined>;
        elementReadOnly: import("platejs").OmitFirst<(<E extends import("platejs").Editor = import("platejs").Editor<Value>>(editor: E, options?: import("platejs").EditorElementReadOnlyOptions) => import("slate").NodeEntry<import("slate").BaseElement> | undefined)>;
        end: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At, options?: import("platejs").EditorEndOptions) => import("slate").BasePoint | undefined>;
        hasBlocks: import("platejs").OmitFirst<(editor: import("platejs").Editor, element: import("platejs").TElement) => boolean>;
        hasInlines: import("platejs").OmitFirst<(editor: import("platejs").Editor, element: import("platejs").TElement) => boolean>;
        hasMark: import("platejs").OmitFirst<(editor: import("platejs").Editor, key: string) => boolean>;
        hasTexts: import("platejs").OmitFirst<(editor: import("platejs").Editor, element: import("platejs").TElement) => boolean>;
        isBlock: import("platejs").OmitFirst<(editor: import("platejs").Editor, value: any) => value is import("platejs").TElement>;
        isEdge: import("platejs").OmitFirst<(editor: import("platejs").Editor, point: import("platejs").Point, at: import("platejs").TLocation) => boolean>;
        isEmpty: import("platejs").OmitFirst<(<E extends import("platejs").Editor>(editor: E, target?: import("platejs").At | null, options?: import("platejs").EditorEmptyOptions) => boolean)>;
        isEnd: import("platejs").OmitFirst<(editor: import("platejs").Editor, point: import("platejs").Point | null | undefined, at: import("platejs").TLocation) => boolean>;
        isNormalizing: import("platejs").OmitFirst<(editor: import("platejs").Editor) => boolean>;
        isStart: import("platejs").OmitFirst<(editor: import("platejs").Editor, point: import("platejs").Point | null | undefined, at: import("platejs").TLocation) => boolean>;
        path: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At, options?: import("slate").EditorPathOptions) => import("slate").Path | undefined>;
        pathRef: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").Path, options?: import("slate").EditorPathRefOptions) => import("slate").PathRef>;
        pathRefs: import("platejs").OmitFirst<(editor: import("platejs").Editor) => Set<import("slate").PathRef>>;
        point: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At, options?: import("slate").EditorPointOptions) => import("slate").BasePoint | undefined>;
        pointRef: import("platejs").OmitFirst<(editor: import("platejs").Editor, point: import("platejs").Point, options?: import("slate").EditorPointRefOptions) => import("slate").PointRef>;
        pointRefs: import("platejs").OmitFirst<(editor: import("platejs").Editor) => Set<import("slate").PointRef>>;
        positions: import("platejs").OmitFirst<(editor: import("platejs").Editor, options?: import("platejs").EditorPositionsOptions) => Generator<import("slate").BasePoint, void, undefined>>;
        range: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At | "before" | "start", to?: import("platejs").At | null, options?: {
            before?: import("platejs").EditorBeforeOptions;
        }) => import("platejs").TRange | undefined>;
        rangeRef: import("platejs").OmitFirst<(editor: import("platejs").Editor, range: import("platejs").TRange, options?: import("slate").EditorRangeRefOptions) => import("slate").RangeRef>;
        rangeRefs: import("platejs").OmitFirst<(editor: import("platejs").Editor) => Set<import("slate").RangeRef>>;
        start: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At, options?: import("platejs").EditorStartOptions) => import("slate").BasePoint | undefined>;
        string: import("platejs").OmitFirst<(editor: import("platejs").Editor, at?: import("platejs").At | null, options?: import("platejs").EditorStringOptions) => string>;
        unhangRange: import("platejs").OmitFirst<(editor: import("platejs").Editor, range: import("platejs").TRange, options?: import("platejs").EditorUnhangRangeOptions) => import("platejs").TRange>;
        above: <N extends import("platejs").TElement | import("platejs").Editor<Value>>(options?: import("platejs").EditorAboveOptions<Value> | undefined) => import("platejs").NodeEntry<N> | undefined;
        first: <N extends import("platejs").TElement | import("platejs").TText>(at: import("platejs").At) => import("platejs").NodeEntry<N> | undefined;
        fragment: <N extends import("platejs").ElementOrTextIn<Value>>(at: import("platejs").At) => N[] | undefined;
        hasPath: (path: import("platejs").Path) => boolean;
        last: <N extends import("platejs").TElement | import("platejs").TText>(at: import("platejs").At, options?: import("platejs").EditorLastOptions) => import("platejs").NodeEntry<N> | undefined;
        leaf: <N extends import("platejs").TText>(at: import("platejs").At, options?: import("platejs").EditorLeafOptions) => import("platejs").NodeEntry<N> | undefined;
        levels: <N extends import("platejs").NodeIn<Value>>(options?: import("platejs").EditorLevelsOptions<Value> | undefined) => Generator<import("platejs").NodeEntry<N>, void, undefined>;
        marks: () => {
            [x: string]: unknown;
        } | null;
        next: <N extends import("platejs").TElement | import("platejs").TText>(options?: import("platejs").EditorNextOptions<Value> | undefined) => import("platejs").NodeEntry<N> | undefined;
        node: <N extends import("platejs").TElement | import("platejs").TText>(atOrOptions: import("platejs").EditorNodesOptions<Value> | import("platejs").AtOrDescendant, nodeOptions?: import("platejs").EditorNodeOptions) => import("platejs").NodeEntry<N> | undefined;
        nodes: <N extends import("platejs").TElement | import("platejs").TText>(options?: import("platejs").EditorNodesOptions<Value> | undefined) => Generator<import("platejs").NodeEntry<N>, void, undefined>;
        parent: <N extends import("platejs").TElement | import("platejs").Editor<Value>>(at: import("platejs").At, options?: import("platejs").EditorParentOptions) => import("platejs").NodeEntry<N> | undefined;
        previous: <N extends import("platejs").TElement | import("platejs").TText>(options?: import("platejs").EditorPreviousOptions<Value> | undefined) => import("platejs").NodeEntry<N> | undefined;
        void: <N extends import("platejs").TElement>(options?: import("platejs").EditorVoidOptions) => import("platejs").NodeEntry<N> | undefined;
    } & {
        findDocumentOrShadowRoot: import("platejs").OmitFirst<(editor: import("platejs").Editor) => Document | ShadowRoot | undefined>;
        findEventRange: import("platejs").OmitFirst<(editor: import("platejs").Editor, event: any) => import("slate").BaseRange | undefined>;
        findKey: import("platejs").OmitFirst<(editor: import("platejs").Editor, node: import("platejs").TNode) => import("slate-dom").Key | undefined>;
        getWindow: import("platejs").OmitFirst<(editor: import("platejs").Editor) => Window | undefined>;
        hasDOMNode: import("platejs").OmitFirst<(editor: import("platejs").Editor, target: Node, options?: Parameters<(editor: import("slate-dom").DOMEditor, target: Node, options?: {
            editable?: boolean;
        }) => boolean>[2]) => boolean>;
        hasRange: import("platejs").OmitFirst<(editor: import("platejs").Editor, range: import("platejs").TRange) => boolean>;
        isComposing: import("platejs").OmitFirst<(editor: import("platejs").Editor) => boolean>;
        isFocused: import("platejs").OmitFirst<(editor: import("platejs").Editor) => boolean>;
        isReadOnly: import("platejs").OmitFirst<(editor: import("platejs").Editor) => boolean>;
        isTargetInsideNonReadonlyVoid: import("platejs").OmitFirst<(editor: import("platejs").Editor, target: EventTarget | null) => boolean>;
        toDOMNode: import("platejs").OmitFirst<(editor: import("platejs").Editor, node: import("platejs").TNode) => HTMLElement | undefined>;
        toDOMPoint: import("platejs").OmitFirst<(editor: import("platejs").Editor, point: import("platejs").Point) => import("slate-dom").DOMPoint | undefined>;
        toDOMRange: import("platejs").OmitFirst<(editor: import("platejs").Editor, range: import("platejs").TRange) => Range | undefined>;
        toSlatePoint: import("platejs").OmitFirst<(editor: import("platejs").Editor, domPoint: import("slate-dom").DOMPoint, options: Omit<Parameters<(<T extends boolean>(editor: import("slate-dom").DOMEditor, domPoint: import("slate-dom").DOMPoint, options: {
            exactMatch: boolean;
            suppressThrow: T;
            searchDirection?: "forward" | "backward";
        }) => T extends true ? import("slate").Point | null : import("slate").Point)>[2], "suppressThrow">) => import("slate").BasePoint | null | undefined>;
        toSlateRange: import("platejs").OmitFirst<(editor: import("platejs").Editor, domRange: Parameters<(<T extends boolean>(editor: import("slate-dom").DOMEditor, domRange: Range | StaticRange | Selection, options: {
            exactMatch: boolean;
            suppressThrow: T;
        }) => T extends true ? import("slate").Range | null : import("slate").Range)>[1], options: Omit<Parameters<(<T extends boolean>(editor: import("slate-dom").DOMEditor, domRange: Range | StaticRange | Selection, options: {
            exactMatch: boolean;
            suppressThrow: T;
        }) => T extends true ? import("slate").Range | null : import("slate").Range)>[2], "supressThrow">) => import("slate").BaseRange | null | undefined>;
        findPath: (node: import("platejs").TNode, options?: import("platejs").EditorFindPathOptions) => import("platejs").Path | undefined;
        hasEditableTarget: (target: EventTarget | null) => target is Node;
        hasSelectableTarget: (target: EventTarget | null) => target is Node;
        hasTarget: (target: EventTarget | null) => target is Node;
        toSlateNode: <N extends import("platejs").NodeIn<Value>>(domNode: Parameters<(editor: import("platejs").Editor, domNode: Node) => import("platejs").TNode | undefined>[1]) => N | undefined;
    } & {
        isMerging: import("platejs").OmitFirst<(editor: import("platejs").Editor) => boolean | undefined>;
        isSaving: import("platejs").OmitFirst<(editor: import("platejs").Editor) => boolean | undefined>;
        isSplittingOnce: import("platejs").OmitFirst<(editor: import("platejs").Editor) => boolean | undefined>;
    } & {
        create: {
            block: (node?: Partial<import("platejs").TElement>, path?: import("platejs").Path) => import("platejs").TElement;
            value: () => Value;
        };
        isAt: import("platejs").OmitFirst<(<E extends import("platejs").Editor>(editor: E, { at, block, blocks, end, start, text, word, ...options }?: {
            at?: import("platejs").TLocation | null;
            block?: boolean;
            blocks?: boolean;
            end?: boolean;
            start?: boolean;
            text?: boolean;
            word?: boolean;
        } & Omit<import("platejs").EditorAboveOptions<import("platejs").ValueOf<E>>, "at" | "block">) => boolean)>;
        isText: import("platejs").OmitFirst<(editor: import("platejs").Editor, at: import("platejs").At) => boolean>;
        scrollIntoView: import("platejs").OmitFirst<(editor: import("platejs").Editor, target: Range | import("platejs").Point, options?: import("platejs").ScrollIntoViewOptions) => void>;
        some: import("platejs").OmitFirst<(<E extends import("platejs").Editor = import("platejs").Editor<Value>>(editor: E, options: import("platejs").EditorNodesOptions<import("platejs").ValueOf<E>>) => boolean)>;
        block: <N extends import("platejs").TElement>(options?: import("platejs").EditorBlockOptions<Value> | undefined) => import("platejs").NodeEntry<N> | undefined;
        blocks: <N extends import("platejs").TElement>(options?: import("platejs").EditorNodesOptions<Value> | undefined) => import("platejs").NodeEntry<N>[];
        descendant: <N extends import("platejs").TElement | import("platejs").TText>(options: import("platejs").EditorNodesOptions<Value>) => import("platejs").NodeEntry<N> | undefined;
        edgeBlocks: <N1 extends import("platejs").TElement, N2 extends import("platejs").TElement = N1>(options?: import("platejs").EditorAboveOptions<Value> | undefined) => [import("platejs").NodeEntry<N1>, import("platejs").NodeEntry<N2>] | null;
        isCollapsed: () => boolean;
        isEditorEnd: () => boolean;
        isExpanded: () => boolean;
        isInline: <N extends import("platejs").TElement | import("platejs").TText>(element: N) => boolean;
        isSelectable: <N extends import("platejs").TElement>(element: N) => boolean;
        mark: <K extends string>(key: K) => unknown;
        nodesRange: (nodes: import("platejs").NodeEntry[]) => import("platejs").TRange | undefined;
        prop: (options: import("platejs").EditorPropOptions<Value>) => string | undefined;
    } & {
        debug: {
            error: (message: string | unknown, type?: import("platejs").DebugErrorType, details?: any) => void;
            info: (message: string, type?: import("platejs").DebugErrorType, details?: any) => void;
            log: (message: string, type?: import("platejs").DebugErrorType, details?: any) => void;
            warn: (message: string, type?: import("platejs").DebugErrorType, details?: any) => void;
        };
    } & {
        isScrolling: () => boolean;
    } & Record<"html", {
        deserialize: (args_0: {
            element: HTMLElement | string;
            collapseWhiteSpace?: boolean;
            defaultElementPlugin?: import("platejs").WithRequiredKey;
        }) => import("platejs").Descendant[];
    }> & {
        redecorate: () => void;
    } & import("platejs").InferApi<C$1>;
    getTransforms: <C$1 extends import("platejs").AnyPluginConfig = import("platejs").PluginConfig>(plugin?: import("platejs").WithRequiredKey<C$1> | undefined) => {
        addMark: import("platejs").OmitFirst<(editor: import("platejs").Editor, key: string, value: any) => void>;
        addMarks: import("platejs").OmitFirst<(editor: import("platejs").Editor, marks: import("platejs").EditorMarks, { remove }?: import("platejs").AddMarksOptions) => void>;
        deleteBackward: import("platejs").OmitFirst<(editor: import("platejs").Editor, unit?: import("platejs").TextUnit) => void>;
        deleteForward: import("platejs").OmitFirst<(editor: import("platejs").Editor, unit?: import("platejs").TextUnit) => void>;
        deleteFragment: import("platejs").OmitFirst<(editor: import("platejs").Editor, options?: import("slate").EditorFragmentDeletionOptions) => void>;
        duplicateNodes: import("platejs").OmitFirst<(editor: import("platejs").Editor, { block, nodes, ...options }?: import("platejs").DuplicateNodesOptions) => void>;
        insertBreak: import("platejs").OmitFirst<(editor: import("platejs").Editor) => void>;
        removeMarks: import("platejs").OmitFirst<(editor: import("platejs").Editor, keys?: string[] | string | null, { at, shouldChange, ...options }?: import("platejs").RemoveMarksOptions) => void>;
        reset: import("platejs").OmitFirst<(editor: import("platejs").Editor, options?: import("platejs").ResetOptions) => void>;
        toggleBlock: import("platejs").OmitFirst<(editor: import("platejs").Editor, type: string, { defaultType: defaultTypeProp, someOptions, wrap, ...options }?: import("platejs").ToggleBlockOptions) => void>;
        toggleMark: import("platejs").OmitFirst<(editor: import("platejs").Editor, key: string, { remove }?: import("platejs").ToggleMarkOptions) => void>;
        withoutNormalizing: import("platejs").OmitFirst<(editor: import("platejs").Editor, fn: () => boolean | void) => boolean>;
        escape: () => boolean | undefined;
        insertFragment: <N extends import("platejs").ElementOrTextIn<Value>>(fragment: N[], options?: import("platejs").InsertFragmentOptions) => void;
        insertNode: <N extends import("platejs").TElement | import("platejs").TText>(node: N, options?: import("platejs").InsertNodesOptions<Value> | undefined) => void;
        insertNodes: <N extends import("platejs").ElementOrTextIn<Value>>(nodes: N | N[], options?: import("platejs").InsertNodesOptions<Value> | undefined) => void;
        insertSoftBreak: () => void;
        liftNodes: (options?: import("platejs").LiftNodesOptions<Value> | undefined) => void;
        mergeNodes: (options?: import("platejs").MergeNodesOptions<Value, import("platejs").Editor<Value>> | undefined) => void;
        moveLine: (options: {
            reverse: boolean;
        }) => boolean | undefined;
        moveNodes: (options: import("platejs").MoveNodesOptions<Value>) => boolean | void;
        normalize: (options?: import("platejs").EditorNormalizeOptions) => void;
        redo: () => void;
        removeMark: (key: string) => void;
        removeNodes: (options?: import("platejs").RemoveNodesOptions<Value> | undefined) => void;
        replaceNodes: <N extends import("platejs").ElementOrTextIn<Value>>(nodes: N | N[], options?: import("platejs").ReplaceNodesOptions<Value> | undefined) => void;
        selectAll: () => boolean | undefined;
        setNodes: <N extends import("platejs").TElement | import("platejs").TText>(props: Partial<import("platejs").NodeProps<N>>, options?: import("platejs").SetNodesOptions<Value> | undefined) => void;
        splitNodes: (options?: import("platejs").SplitNodesOptions<Value> | undefined) => void;
        tab: (options: {
            reverse: boolean;
        }) => boolean | undefined;
        undo: () => void;
        unsetNodes: <N extends import("platejs").TElement | import("platejs").TText>(props: keyof import("platejs").NodeProps<N> | (keyof import("platejs").NodeProps<N>)[], options?: import("platejs").UnsetNodesOptions<Value> | undefined) => void;
        unwrapNodes: (options?: import("platejs").UnwrapNodesOptions<Value> | undefined) => void;
        wrapNodes: <N extends import("platejs").TElement>(element: N, options?: import("platejs").WrapNodesOptions<Value> | undefined) => void;
        writeHistory: (stack: "redos" | "undos", batch: any) => void;
    } & {
        delete: import("platejs").OmitFirst<(<E extends import("platejs").Editor>(editor: E, options?: import("platejs").DeleteTextOptions) => void)>;
        insertText: (text: string, options?: import("platejs").InsertTextOptions) => void;
    } & {
        collapse: import("platejs").OmitFirst<(editor: import("platejs").Editor, options?: import("slate/dist/interfaces/transforms/selection").SelectionCollapseOptions) => void>;
        move: import("platejs").OmitFirst<(editor: import("platejs").Editor, options?: import("slate/dist/interfaces/transforms/selection").SelectionMoveOptions) => void>;
        select: import("platejs").OmitFirst<(editor: import("platejs").Editor, target?: import("platejs").At, options?: import("platejs").SelectOptions) => void>;
        setPoint: import("platejs").OmitFirst<(editor: import("platejs").Editor, props: Partial<import("platejs").Point>, options?: import("slate/dist/interfaces/transforms/selection").SelectionSetPointOptions) => void>;
        setSelection: import("platejs").OmitFirst<(editor: import("platejs").Editor, props: Partial<import("platejs").TRange>) => void>;
        deselect: () => void;
    } & {
        blur: import("platejs").OmitFirst<(editor: import("platejs").Editor) => void>;
        deselectDOM: import("platejs").OmitFirst<(editor: import("platejs").Editor) => void>;
        focus: import("platejs").OmitFirst<(editor: import("platejs").Editor, { at, edge, retries }?: import("platejs").FocusOptions) => void>;
        insertData: import("slate-dom").DOMEditor["insertData"];
        insertFragmentData: import("slate-dom").DOMEditor["insertFragmentData"];
        insertTextData: import("slate-dom").DOMEditor["insertTextData"];
        setFragmentData: import("slate-dom").DOMEditor["setFragmentData"];
    } & {
        setSplittingOnce: import("platejs").OmitFirst<(editor: import("platejs").Editor, value: boolean | undefined) => void>;
        withMerging: import("platejs").OmitFirst<(editor: import("platejs").Editor, fn: () => void) => void>;
        withNewBatch: import("platejs").OmitFirst<(editor: import("platejs").Editor, fn: () => void) => void>;
        withoutMerging: import("platejs").OmitFirst<(editor: import("platejs").Editor, fn: () => void) => void>;
        withoutSaving: import("platejs").OmitFirst<(editor: import("platejs").Editor, fn: () => void) => void>;
    } & {
        apply: <N extends import("platejs").TElement | import("platejs").TText>(operation: import("platejs").Operation<N>) => void;
        normalizeNode: <N extends import("platejs").NodeIn<Value>>(entry: import("platejs").NodeEntry<N>, options?: {
            operation?: import("platejs").Operation;
        }) => void;
    } & {
        init: ((args_0: import("platejs").InitOptions) => void) & ((args_0: import("platejs").InitOptions) => void);
        insertExitBreak: ((args_0?: import("platejs").InsertExitBreakOptions | undefined) => true | undefined) & ((args_0?: import("platejs").InsertExitBreakOptions | undefined) => true | undefined);
        resetBlock: ((args_0?: {
            at?: import("platejs").Path;
        } | undefined) => true | undefined) & ((args_0?: {
            at?: import("platejs").Path;
        } | undefined) => true | undefined);
        setValue: ((value?: string | Value | undefined) => void) & ((value?: string | Value | undefined) => void);
        apply: <N$1 extends import("platejs").TElement | import("platejs").TText>(operation: import("platejs").Operation<N$1>) => void;
    } & {
        withScrolling: (fn: () => void, options?: import("platejs").WithAutoScrollOptions | undefined) => void;
    } & {
        nodeId: {
            normalize: () => void;
        };
    } & Record<"nodeId", {
        normalize(): void;
    }> & {
        reset: (options: import("platejs").ResetOptions | undefined) => void;
        init: ((args_0: import("platejs").InitOptions) => void) & ((args_0: import("platejs").InitOptions) => void);
        insertExitBreak: ((args_0?: import("platejs").InsertExitBreakOptions | undefined) => true | undefined) & ((args_0?: import("platejs").InsertExitBreakOptions | undefined) => true | undefined);
        resetBlock: ((args_0?: {
            at?: import("platejs").Path;
        } | undefined) => true | undefined) & ((args_0?: {
            at?: import("platejs").Path;
        } | undefined) => true | undefined);
        setValue: ((value?: string | Value | undefined) => void) & ((value?: string | Value | undefined) => void);
        apply: <N$1 extends import("platejs").TElement | import("platejs").TText>(operation: import("platejs").Operation<N$1>) => void;
    } & import("platejs").InferTransforms<C$1>;
} & {
    store: import("platejs/react").PlateStore;
};
