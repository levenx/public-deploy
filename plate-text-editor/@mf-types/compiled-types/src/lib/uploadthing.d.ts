export declare const ourFileRouter: {
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
};
export type OurFileRouter = typeof ourFileRouter;
