import { type Dispatch, type SetStateAction } from "react";
export type Format = {
    width: number;
    height: number;
};
export interface UploadedFile {
    uploadId: string;
    ratio?: number;
    originalFile: {
        file: File;
        type: string;
        format: Format;
        url: string;
    };
    croppedFile?: {
        file: Blob;
        type: string;
        format: Format;
        url: string;
    };
    uploadInfo?: {
        progress: number;
        status: "success" | "error" | "uploading";
        message?: string;
    };
}
export declare const UploaderContext: import("react").Context<{
    repo: string;
    selectedFiles: UploadedFile[];
    setSelectedFiles: Dispatch<SetStateAction<UploadedFile[]>>;
}>;
export declare const UploaderContextProvider: import("react").Provider<{
    repo: string;
    selectedFiles: UploadedFile[];
    setSelectedFiles: Dispatch<SetStateAction<UploadedFile[]>>;
}>;
export declare const useUploaderContext: () => {
    repo: string;
    selectedFiles: UploadedFile[];
    setSelectedFiles: Dispatch<SetStateAction<UploadedFile[]>>;
};
