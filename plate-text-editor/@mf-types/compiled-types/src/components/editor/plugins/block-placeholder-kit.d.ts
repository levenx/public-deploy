export declare const BlockPlaceholderKit: import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"blockPlaceholder", {
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
}>>[];
