export declare const BlockMenuKit: (import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"blockSelection", {
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
}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"blockMenu", {
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
}>>, {}, {}>>)[];
