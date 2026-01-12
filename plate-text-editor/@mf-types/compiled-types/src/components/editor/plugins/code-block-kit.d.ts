import { createLowlight } from 'lowlight';
export declare const CodeBlockKit: (import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"code_block", {
    defaultLanguage?: string | null;
    lowlight?: ReturnType<typeof createLowlight> | null;
}, {}, Record<"code_block", {
    toggle: () => void;
}>, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<any, {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"code_syntax", {}, {}, {}, {}>>)[];
