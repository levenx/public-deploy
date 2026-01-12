export declare const BaseMediaKit: (import("platejs").SlatePlugin<import("platejs").PluginConfig<"img", {
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
}, {}>>)[];
