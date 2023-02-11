import { TamaguiElement } from '@tamagui/core';
import React from 'react';
import { PositionChangeHandler, ScrollBridge, SheetProps } from './types';
type SheetContextValue = Required<Pick<SheetProps, 'open' | 'position' | 'snapPoints' | 'dismissOnOverlayPress'>> & {
    hidden: boolean;
    setPosition: PositionChangeHandler;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    contentRef: React.RefObject<TamaguiElement>;
    dismissOnSnapToBottom: boolean;
    scrollBridge: ScrollBridge;
    frameSize: number;
    modal: boolean;
};
export declare const createSheetContext: <ContextValueType extends object | null>(rootComponentName: string, defaultContext?: ContextValueType | undefined) => readonly [{
    (props: ContextValueType & {
        scope: import("@tamagui/create-context").Scope<ContextValueType>;
        children: React.ReactNode;
    }): JSX.Element;
    displayName: string;
}, (consumerName: string, scope: import("@tamagui/create-context").Scope<ContextValueType | undefined>, options?: {
    warn?: boolean | undefined;
    fallback?: Partial<ContextValueType> | undefined;
} | undefined) => ContextValueType], createSheetScope: import("@tamagui/create-context").CreateScope;
export declare const SheetProvider: {
    (props: Required<Pick<SheetProps, "position" | "open" | "snapPoints" | "dismissOnOverlayPress">> & {
        hidden: boolean;
        setPosition: PositionChangeHandler;
        setOpen: React.Dispatch<React.SetStateAction<boolean>>;
        contentRef: React.RefObject<TamaguiElement>;
        dismissOnSnapToBottom: boolean;
        scrollBridge: ScrollBridge;
        frameSize: number;
        modal: boolean;
    } & {
        scope: import("@tamagui/create-context").Scope<SheetContextValue>;
        children: React.ReactNode;
    }): JSX.Element;
    displayName: string;
}, useSheetContext: (consumerName: string, scope: import("@tamagui/create-context").Scope<SheetContextValue | undefined>, options?: {
    warn?: boolean | undefined;
    fallback?: Partial<SheetContextValue> | undefined;
} | undefined) => SheetContextValue;
export {};
//# sourceMappingURL=SheetContext.d.ts.map