import type { Dispatch, SetStateAction } from "react";
import type { UploadedFile } from "../context";
export declare enum UploaderStep {
    Selector = 0,
    Crop = 1,
    Result = 2
}
interface UseStepOptions {
    selectedFiles: UploadedFile[];
    setCurrentStep: Dispatch<SetStateAction<UploaderStep>>;
    onClose: () => void;
}
export declare function useStep(options: UseStepOptions): {
    0: {
        stepIndex: number;
        title: string;
        nextStep: UploaderStep;
        prevButton: {
            text: string;
            onClick: () => void;
        };
        nextButton: {
            text: string;
            disabled: boolean;
            onClick: () => void;
        };
    };
    1: {
        stepIndex: number;
        title: string;
        nextStep: UploaderStep;
        prevButton: {
            text: string;
            onClick: () => void;
        };
        nextButton: {
            text: string;
            disabled: boolean;
            onClick: () => void;
        };
    };
    2: {
        stepIndex: number;
        title: string;
        nextStep: UploaderStep;
        prevButton: {
            text: string;
            onClick: () => void;
        };
        nextButton: {
            text: string;
            disabled: boolean;
            onClick: () => void;
        };
    };
};
export {};
