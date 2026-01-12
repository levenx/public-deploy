import { createLowlight } from 'lowlight';
export declare const BaseCodeBlockKit: (import("platejs").SlatePlugin<import("platejs").PluginConfig<any, {}, {}, {}, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"code_block", {
    defaultLanguage?: string | null;
    lowlight?: ReturnType<typeof createLowlight> | null;
}, {}, Record<"code_block", {
    toggle: () => void;
}>, {}>> | import("platejs").SlatePlugin<import("platejs").PluginConfig<"code_syntax", {}, {}, {}, {}>>)[];
