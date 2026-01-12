import { type Path, type TElement } from 'platejs';
import type { PlateEditor } from 'platejs/react';
type InsertBlockOptions = {
    upsert?: boolean;
};
export declare const insertBlock: (editor: PlateEditor, type: string, options?: InsertBlockOptions) => void;
export declare const insertInlineElement: (editor: PlateEditor, type: string) => void;
export declare const setBlockType: (editor: PlateEditor, type: string, { at }?: {
    at?: Path;
}) => void;
export declare const getBlockType: (block: TElement) => string;
export {};
