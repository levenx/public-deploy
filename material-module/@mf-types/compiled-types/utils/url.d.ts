import type { IMaterialItem } from "@/services/material";
export declare const getUrl: (item?: IMaterialItem) => string;
export declare function getFilenameFromUrl(url: string): string;
export declare function createFileFormUrl(url: string, filename?: string): Promise<File>;
export declare function createImageFromImgUrl(url: string, filename?: string): Promise<File>;
