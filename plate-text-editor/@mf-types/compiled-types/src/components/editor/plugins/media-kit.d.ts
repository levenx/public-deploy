export declare const MediaKit: (import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"placeholder", import("@platejs/media").MediaPlaceholderOptions & {
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
}>>)[];
