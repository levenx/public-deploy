import { Caption as CaptionPrimitive, CaptionTextarea as CaptionTextareaPrimitive } from '@platejs/caption/react';
import type { VariantProps } from 'class-variance-authority';
import type * as React from 'react';
declare const captionVariants: (props?: ({
    align?: "left" | "right" | "center" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function Caption({ align, className, ...props }: React.ComponentProps<typeof CaptionPrimitive> & VariantProps<typeof captionVariants>): import("react/jsx-runtime").JSX.Element;
export declare function CaptionTextarea(props: React.ComponentProps<typeof CaptionTextareaPrimitive>): import("react/jsx-runtime").JSX.Element;
export declare const CaptionButton: React.ForwardRefExoticComponent<{
    as?: React.ElementType;
    asChild?: boolean;
    className?: string;
    options?: undefined;
    state?: {
        editor: {
            id: string;
            children: import("platejs").Value;
            history: import("platejs").History;
            marks: import("platejs").EditorMarks | null;
            meta: import("platejs").UnknownObject & {
                isNormalizing?: boolean;
            };
            operations: import("platejs").Operation<import("platejs").TElement | import("platejs").TText>[];
            selection: import("platejs").EditorSelection;
        } & import("platejs").EditorMethods<import("platejs").Value> & import("platejs").UnknownObject & {
            dom: {
                composing: boolean;
                currentKeyboardEvent: is_hotkey0.KeyboardEventLike | null;
                focused: boolean;
                prevSelection: import("platejs").TRange | null;
                readOnly: boolean;
            };
            meta: import("platejs").EditorBase["meta"] & {
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
            };
            plugins: Record<string, any>;
            setOptions: <C$1 extends import("platejs").AnyPluginConfig>(plugin: import("platejs").WithRequiredKey<C$1>, options: ((state: import("mutative").Draft<Partial<import("platejs").InferOptions<C$1>>>) => void) | Partial<import("platejs").InferOptions<C$1>>) => void;
            getInjectProps: <C$1 extends import("platejs").AnyPluginConfig = import("platejs").PluginConfig>(plugin: import("platejs").WithRequiredKey<C$1>) => import("platejs").InjectNodeProps<C$1>;
            getOption: <C$1 extends import("platejs").AnyPluginConfig, StateType extends import("platejs").InferOptions<C$1>, TSelectors extends import("platejs").InferSelectors<C$1>, K$1 extends keyof StateType | keyof TSelectors | "state">(plugin: import("platejs").WithRequiredKey<C$1>, key: K$1, ...args: K$1 extends keyof TSelectors ? Parameters<TSelectors[K$1]> : []) => K$1 extends "state" ? StateType : K$1 extends keyof TSelectors ? ReturnType<TSelectors[K$1]> : K$1 extends keyof StateType ? StateType[K$1] : never;
            getOptions: <C$1 extends import("platejs").AnyPluginConfig = import("platejs").PluginConfig>(plugin: import("platejs").WithRequiredKey<C$1>) => import("platejs").InferOptions<C$1>;
            getOptionsStore: <C$1 extends import("platejs").AnyPluginConfig>(plugin: import("platejs").WithRequiredKey<C$1>) => import("zustand-x").TStateApi<import("platejs").InferOptions<C$1>, [["zustand/mutative-x", never]], {}, import("platejs").InferSelectors<C$1>>;
            getPlugin: <C$1 extends import("platejs").AnyPluginConfig = import("platejs").PluginConfig>(plugin: import("platejs").WithRequiredKey<C$1>) => C$1 extends {
                node: any;
            } ? C$1 : import("platejs").EditorPlugin<C$1>;
            getType: (pluginKey: string) => string;
            setOption: <C$1 extends import("platejs").AnyPluginConfig, K$1 extends keyof import("platejs").InferOptions<C$1>>(plugin: import("platejs").WithRequiredKey<C$1>, optionKey: K$1, value: import("platejs").InferOptions<C$1>[K$1]) => void;
        } & {
            api: import("platejs").EditorApi & import("platejs").UnionToIntersection<import("platejs").InferApi<import("platejs/react").PlateCorePlugin>>;
            meta: import("platejs").BaseEditor["meta"] & {
                pluginList: import("platejs/react").AnyEditorPlatePlugin[];
                shortcuts: import("platejs/react").Shortcuts;
            };
            plugins: Record<string, import("platejs/react").AnyEditorPlatePlugin>;
            tf: import("platejs").EditorTransforms & import("platejs").UnionToIntersection<import("platejs").InferTransforms<import("platejs/react").PlateCorePlugin>>;
            transforms: import("platejs").EditorTransforms & import("platejs").UnionToIntersection<import("platejs").InferTransforms<import("platejs/react").PlateCorePlugin>>;
            getApi: <C$1 extends import("platejs").AnyPluginConfig = import("platejs").PluginConfig>(plugin?: import("platejs").WithRequiredKey<C$1>) => import("platejs/react").PlateEditor["api"] & import("platejs").InferApi<C$1>;
            getPlugin: <C$1 extends import("platejs").AnyPluginConfig = import("platejs").PluginConfig>(plugin: import("platejs").WithRequiredKey<C$1>) => C$1 extends {
                node: any;
            } ? C$1 : import("platejs/react").EditorPlatePlugin<C$1>;
            getTransforms: <C$1 extends import("platejs").AnyPluginConfig = import("platejs").PluginConfig>(plugin?: import("platejs").WithRequiredKey<C$1>) => import("platejs/react").PlateEditor["tf"] & import("platejs").InferTransforms<C$1>;
            uid?: string;
        } & {
            store: import("platejs/react").PlateStore;
        };
        element: import("platejs").TElement;
    } | undefined;
    style?: React.CSSProperties;
    setProps?: ((hookProps: {
        onClick: () => void;
    }) => Omit<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<(props?: ({
        variant?: "link" | "outline" | "default" | "destructive" | "secondary" | "ghost" | null | undefined;
        size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
    } & import("class-variance-authority/types").ClassProp) | undefined) => string> & {
        asChild?: boolean;
    }, "ref">) | undefined;
} & Omit<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<(props?: ({
    variant?: "link" | "outline" | "default" | "destructive" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & {
    asChild?: boolean;
}, "ref"> & React.RefAttributes<any>>;
export {};
