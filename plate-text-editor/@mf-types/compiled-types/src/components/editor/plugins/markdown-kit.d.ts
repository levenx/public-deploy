export declare const MarkdownKit: import("platejs").SlatePlugin<import("platejs").PluginConfig<"markdown", {
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
}>, {}, {}>>[];
