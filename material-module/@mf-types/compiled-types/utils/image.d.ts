import type { Area } from "react-easy-crop";
export declare function getImageSize(file: File): Promise<{
    width: number;
    height: number;
}>;
export declare const createImageFormUrl: (url: string) => Promise<HTMLImageElement>;
export declare function getCroppedImg(imageSrc: string, pixelCrop: Area, rotation: number | undefined, fileName: string): Promise<{
    file: File;
    type: string;
    format: {
        width: number;
        height: number;
    };
}>;
