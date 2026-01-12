export declare const LinkKit: import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"a", {
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
}>>[];
