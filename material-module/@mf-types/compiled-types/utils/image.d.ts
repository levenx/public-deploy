import type { Area } from "react-easy-crop";
export declare function getImageSize(file: File): Promise<{
    width: number;
    height: number;
}>;
export declare function getCroppedImg(imageSrc: string, pixelCrop: Area, rotation: number | undefined, fileName: string): Promise<{
    file: File;
    type: string;
    format: {
        width: number;
        height: number;
    };
}>;
