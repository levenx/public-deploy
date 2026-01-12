import type { ClientUploadedFileData, UploadFilesOptions } from "uploadthing/types";
import type { OurFileRouter } from "@/lib/uploadthing";
export type UploadedFile<T = unknown> = ClientUploadedFileData<T>;
interface UseUploadFileProps extends Pick<UploadFilesOptions<OurFileRouter["editorUploader"]>, "headers" | "onUploadBegin" | "onUploadProgress" | "skipPolling"> {
    onUploadComplete?: (file: UploadedFile) => void;
    onUploadError?: (error: unknown) => void;
}
export declare function useUploadFile({ onUploadComplete, onUploadError, ...props }?: UseUploadFileProps): {
    isUploading: boolean;
    progress: number;
    uploadedFile: UploadedFile<unknown> | undefined;
    uploadFile: (file: File) => Promise<UploadedFile<unknown>>;
    uploadingFile: File | undefined;
};
export declare const uploadFiles: <TEndpoint extends "editorUploader">(slug: import("uploadthing/types").EndpointArg<{
    editorUploader: import("uploadthing/types").FileRoute<{
        input: undefined;
        output: {
            key: string;
            name: string;
            size: number;
            type: string;
            url: string;
        };
        errorShape: import("@uploadthing/shared").Json;
    }>;
}, TEndpoint>, opts: Omit<UploadFilesOptions<{
    editorUploader: import("uploadthing/types").FileRoute<{
        input: undefined;
        output: {
            key: string;
            name: string;
            size: number;
            type: string;
            url: string;
        };
        errorShape: import("@uploadthing/shared").Json;
    }>;
}[TEndpoint]>, keyof import("uploadthing/types").GenerateUploaderOptions>) => Promise<ClientUploadedFileData<import("uploadthing/types").inferEndpointOutput<{
    editorUploader: import("uploadthing/types").FileRoute<{
        input: undefined;
        output: {
            key: string;
            name: string;
            size: number;
            type: string;
            url: string;
        };
        errorShape: import("@uploadthing/shared").Json;
    }>;
}[TEndpoint]>>[]>, useUploadThing: <TEndpoint extends "editorUploader">(endpoint: import("uploadthing/types").EndpointArg<{
    editorUploader: import("uploadthing/types").FileRoute<{
        input: undefined;
        output: {
            key: string;
            name: string;
            size: number;
            type: string;
            url: string;
        };
        errorShape: import("@uploadthing/shared").Json;
    }>;
}, TEndpoint>, opts?: import("@uploadthing/react").UseUploadthingProps<{
    editorUploader: import("uploadthing/types").FileRoute<{
        input: undefined;
        output: {
            key: string;
            name: string;
            size: number;
            type: string;
            url: string;
        };
        errorShape: import("@uploadthing/shared").Json;
    }>;
}[TEndpoint], import("uploadthing/types").inferEndpointOutput<{
    editorUploader: import("uploadthing/types").FileRoute<{
        input: undefined;
        output: {
            key: string;
            name: string;
            size: number;
            type: string;
            url: string;
        };
        errorShape: import("@uploadthing/shared").Json;
    }>;
}[TEndpoint]>> | undefined) => {
    readonly startUpload: (...args: undefined extends import("uploadthing/types").inferEndpointInput<{
        editorUploader: import("uploadthing/types").FileRoute<{
            input: undefined;
            output: {
                key: string;
                name: string;
                size: number;
                type: string;
                url: string;
            };
            errorShape: import("@uploadthing/shared").Json;
        }>;
    }[TEndpoint]> ? [files: File[], input?: import("uploadthing/types").inferEndpointInput<{
        editorUploader: import("uploadthing/types").FileRoute<{
            input: undefined;
            output: {
                key: string;
                name: string;
                size: number;
                type: string;
                url: string;
            };
            errorShape: import("@uploadthing/shared").Json;
        }>;
    }[TEndpoint]> | undefined] : [files: File[], input: import("uploadthing/types").inferEndpointInput<{
        editorUploader: import("uploadthing/types").FileRoute<{
            input: undefined;
            output: {
                key: string;
                name: string;
                size: number;
                type: string;
                url: string;
            };
            errorShape: import("@uploadthing/shared").Json;
        }>;
    }[TEndpoint]>]) => Promise<ClientUploadedFileData<import("uploadthing/types").inferEndpointOutput<{
        editorUploader: import("uploadthing/types").FileRoute<{
            input: undefined;
            output: {
                key: string;
                name: string;
                size: number;
                type: string;
                url: string;
            };
            errorShape: import("@uploadthing/shared").Json;
        }>;
    }[TEndpoint]>>[] | undefined>;
    readonly isUploading: boolean;
    readonly routeConfig: import("@uploadthing/shared").ExpandedRouteConfig | undefined;
};
export declare function getErrorMessage(err: unknown): string;
export declare function showErrorToast(err: unknown): string | number;
export {};
