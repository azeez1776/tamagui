/// <reference types="react" />
export declare const elevate: {
    true: (_: boolean, extras: any) => {
        [x: `$${string}`]: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>>) | import("@tamagui/core").Variable<any> | undefined;
        [x: `$${number}`]: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>>) | import("@tamagui/core").Variable<any> | undefined;
        hitSlop?: import("react-native").Insets | (import("react-native").Insets & number) | import("@tamagui/core").Variable<any> | undefined;
        onLayout?: import("@tamagui/core").Variable<any> | ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        pointerEvents?: "none" | "box-none" | "box-only" | "auto" | import("@tamagui/core").Variable<any> | undefined;
        removeClippedSubviews?: boolean | import("@tamagui/core").Variable<any> | undefined;
        style?: import("@tamagui/core").Variable<any> | import("react-native").StyleProp<import("react-native").ViewStyle>;
        testID?: string | import("@tamagui/core").Variable<any> | undefined;
        nativeID?: string | import("@tamagui/core").Variable<any> | undefined;
        collapsable?: boolean | import("@tamagui/core").Variable<any> | undefined;
        needsOffscreenAlphaCompositing?: boolean | import("@tamagui/core").Variable<any> | undefined;
        renderToHardwareTextureAndroid?: boolean | import("@tamagui/core").Variable<any> | undefined;
        focusable?: boolean | import("@tamagui/core").Variable<any> | undefined;
        shouldRasterizeIOS?: boolean | import("@tamagui/core").Variable<any> | undefined;
        isTVSelectable?: boolean | import("@tamagui/core").Variable<any> | undefined;
        hasTVPreferredFocus?: boolean | import("@tamagui/core").Variable<any> | undefined;
        tvParallaxProperties?: import("@tamagui/core").Variable<any> | import("react-native").TVParallaxProperties | undefined;
        tvParallaxShiftDistanceX?: number | import("@tamagui/core").Variable<any> | undefined;
        tvParallaxShiftDistanceY?: number | import("@tamagui/core").Variable<any> | undefined;
        tvParallaxTiltAngle?: number | import("@tamagui/core").Variable<any> | undefined;
        tvParallaxMagnification?: number | import("@tamagui/core").Variable<any> | undefined;
        onStartShouldSetResponder?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onTouchStart?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onTouchMove?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onTouchEnd?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onTouchCancel?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onTouchEndCapture?: import("@tamagui/core").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onPointerEnter?: import("@tamagui/core").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerEnterCapture?: import("@tamagui/core").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerLeave?: import("@tamagui/core").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerLeaveCapture?: import("@tamagui/core").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerMove?: import("@tamagui/core").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerMoveCapture?: import("@tamagui/core").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerCancel?: import("@tamagui/core").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerCancelCapture?: import("@tamagui/core").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerDown?: import("@tamagui/core").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerDownCapture?: import("@tamagui/core").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerUp?: import("@tamagui/core").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerUpCapture?: import("@tamagui/core").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        accessible?: boolean | import("@tamagui/core").Variable<any> | undefined;
        accessibilityActions?: import("@tamagui/core").Variable<any> | readonly Readonly<{
            name: string;
            label?: string | undefined;
        }>[] | undefined;
        accessibilityLabel?: string | import("@tamagui/core").Variable<any> | undefined;
        accessibilityRole?: "none" | "button" | "link" | "search" | "image" | "keyboardkey" | "text" | "adjustable" | "imagebutton" | "header" | "summary" | "list" | import("@tamagui/core").Variable<any> | undefined;
        accessibilityState?: import("react-native").AccessibilityState | import("@tamagui/core").Variable<any> | undefined;
        accessibilityHint?: string | import("@tamagui/core").Variable<any> | undefined;
        accessibilityValue?: import("@tamagui/core").Variable<any> | import("react-native").AccessibilityValue | undefined;
        onAccessibilityAction?: import("@tamagui/core").Variable<any> | ((event: import("react-native").AccessibilityActionEvent) => void) | undefined;
        accessibilityLabelledBy?: string | import("@tamagui/core").Variable<any> | string[] | undefined;
        accessibilityLiveRegion?: "none" | import("@tamagui/core").Variable<any> | "polite" | "assertive" | undefined;
        importantForAccessibility?: "auto" | import("@tamagui/core").Variable<any> | "yes" | "no" | "no-hide-descendants" | undefined;
        accessibilityElementsHidden?: boolean | import("@tamagui/core").Variable<any> | undefined;
        accessibilityLanguage?: string | import("@tamagui/core").Variable<any> | undefined;
        accessibilityViewIsModal?: boolean | import("@tamagui/core").Variable<any> | undefined;
        onAccessibilityEscape?: import("@tamagui/core").Variable<any> | (() => void) | undefined;
        onAccessibilityTap?: import("@tamagui/core").Variable<any> | (() => void) | undefined;
        onMagicTap?: import("@tamagui/core").Variable<any> | (() => void) | undefined;
        accessibilityIgnoresInvertColors?: boolean | import("@tamagui/core").Variable<any> | undefined;
        dataSet?: any;
        target?: any;
        rel?: any;
        download?: any;
        href?: string | import("@tamagui/core").Variable<any> | undefined;
        hrefAttrs?: import("@tamagui/core").Variable<any> | {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        onMouseDown?: (((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) & import("react").MouseEventHandler<HTMLDivElement>) | import("@tamagui/core").Variable<any> | undefined;
        onMouseUp?: import("@tamagui/core").Variable<any> | ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onMouseEnter?: (((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) & import("react").MouseEventHandler<HTMLDivElement>) | import("@tamagui/core").Variable<any> | undefined;
        onMouseLeave?: (((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) & import("react").MouseEventHandler<HTMLDivElement>) | import("@tamagui/core").Variable<any> | undefined;
        onFocus?: import("@tamagui/core").Variable<any> | ((event: import("react").FocusEvent<HTMLDivElement, Element>) => void) | undefined;
        onScroll?: import("@tamagui/core").Variable<any> | ((event: import("react").UIEvent<HTMLDivElement, UIEvent>) => void) | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        asChild?: boolean | import("@tamagui/core").Variable<any> | undefined;
        space?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").Variable<any> | null | undefined;
        spaceDirection?: import("@tamagui/core").Variable<any> | import("@tamagui/core").SpaceDirection | undefined;
        separator?: import("react").ReactNode | import("@tamagui/core").Variable<any>;
        dangerouslySetInnerHTML?: import("@tamagui/core").Variable<any> | {
            __html: string;
        } | undefined;
        animation?: import("@tamagui/core").Variable<any> | import("@tamagui/core").AnimationProp | null | undefined;
        animateOnly?: import("@tamagui/core").Variable<any> | string[] | undefined;
        children?: any;
        debug?: import("@tamagui/core").Variable<any> | import("@tamagui/core").DebugProp | undefined;
        disabled?: boolean | import("@tamagui/core").Variable<any> | undefined;
        className?: string | import("@tamagui/core").Variable<any> | undefined;
        themeShallow?: boolean | import("@tamagui/core").Variable<any> | undefined;
        id?: string | import("@tamagui/core").Variable<any> | undefined;
        tag?: string | import("@tamagui/core").Variable<any> | undefined;
        theme?: string | import("@tamagui/core").Variable<any> | null | undefined;
        componentName?: string | import("@tamagui/core").Variable<any> | undefined;
        forceStyle?: import("@tamagui/core").Variable<any> | "hover" | "press" | "focus" | undefined;
        onHoverIn?: import("react").MouseEventHandler<HTMLDivElement> | import("@tamagui/core").Variable<any> | undefined;
        onHoverOut?: import("react").MouseEventHandler<HTMLDivElement> | import("@tamagui/core").Variable<any> | undefined;
        onPress?: ((event: import("react-native").GestureResponderEvent) => void) | import("@tamagui/core").Variable<any> | null | undefined;
        onPressIn?: ((event: import("react-native").GestureResponderEvent) => void) | import("@tamagui/core").Variable<any> | null | undefined;
        onPressOut?: ((event: import("react-native").GestureResponderEvent) => void) | import("@tamagui/core").Variable<any> | null | undefined;
        backgroundColor?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").ColorTokens | import("react-native").OpaqueColorValue | undefined;
        borderBottomColor?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").ColorTokens | import("react-native").OpaqueColorValue | undefined;
        borderBottomEndRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").RadiusTokens | undefined;
        borderBottomLeftRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").RadiusTokens | undefined;
        borderBottomRightRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").RadiusTokens | undefined;
        borderBottomStartRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").RadiusTokens | undefined;
        borderBottomWidth?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        borderColor?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").ColorTokens | import("react-native").OpaqueColorValue | undefined;
        borderEndColor?: import("@tamagui/core").Variable<any> | import("react-native").ColorValue | undefined;
        borderLeftColor?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").ColorTokens | import("react-native").OpaqueColorValue | undefined;
        borderLeftWidth?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        borderRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").RadiusTokens | undefined;
        borderRightColor?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").ColorTokens | import("react-native").OpaqueColorValue | undefined;
        borderRightWidth?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        borderStartColor?: import("@tamagui/core").Variable<any> | import("react-native").ColorValue | undefined;
        borderStyle?: import("@tamagui/core").Variable<any> | "solid" | "dotted" | "dashed" | undefined;
        borderTopColor?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").ColorTokens | import("react-native").OpaqueColorValue | undefined;
        borderTopEndRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").RadiusTokens | undefined;
        borderTopLeftRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").RadiusTokens | undefined;
        borderTopRightRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").RadiusTokens | undefined;
        borderTopStartRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").RadiusTokens | undefined;
        borderTopWidth?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        borderWidth?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        opacity?: number | import("@tamagui/core").Variable<any> | undefined;
        alignContent?: import("@tamagui/core").Variable<any> | "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around" | undefined;
        alignItems?: import("@tamagui/core").Variable<any> | import("react-native").FlexAlignType | undefined;
        alignSelf?: "auto" | import("@tamagui/core").Variable<any> | import("react-native").FlexAlignType | undefined;
        aspectRatio?: number | import("@tamagui/core").Variable<any> | undefined;
        borderEndWidth?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        borderStartWidth?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        bottom?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        end?: string | number | import("@tamagui/core").Variable<any> | undefined;
        flex?: number | import("@tamagui/core").Variable<any> | undefined;
        flexBasis?: string | number | import("@tamagui/core").Variable<any> | undefined;
        flexDirection?: "column" | "row" | "row-reverse" | "column-reverse" | import("@tamagui/core").Variable<any> | undefined;
        flexGrow?: number | import("@tamagui/core").Variable<any> | undefined;
        flexShrink?: number | import("@tamagui/core").Variable<any> | undefined;
        flexWrap?: import("@tamagui/core").Variable<any> | "wrap" | "nowrap" | "wrap-reverse" | undefined;
        height?: import("@tamagui/core").SizeTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        justifyContent?: import("@tamagui/core").Variable<any> | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
        left?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        margin?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        marginBottom?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        marginEnd?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        marginHorizontal?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        marginLeft?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        marginRight?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        marginStart?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        marginTop?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        marginVertical?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        maxHeight?: import("@tamagui/core").SizeTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        maxWidth?: import("@tamagui/core").SizeTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        minHeight?: import("@tamagui/core").SizeTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        minWidth?: import("@tamagui/core").SizeTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        overflow?: import("@tamagui/core").Variable<any> | "visible" | "hidden" | "scroll" | undefined;
        padding?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        paddingBottom?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        paddingEnd?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        paddingHorizontal?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        paddingLeft?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        paddingRight?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        paddingStart?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        paddingTop?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        paddingVertical?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        position?: "absolute" | "relative" | import("@tamagui/core").Variable<any> | undefined;
        right?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        start?: string | number | import("@tamagui/core").Variable<any> | undefined;
        top?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        width?: import("@tamagui/core").SizeTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        zIndex?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").ZIndexTokens | undefined;
        direction?: import("@tamagui/core").Variable<any> | "inherit" | "ltr" | "rtl" | undefined;
        shadowColor?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | import("@tamagui/core").ColorTokens | import("react-native").OpaqueColorValue | undefined;
        shadowOffset?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | {
            width: import("@tamagui/core").SpaceTokens;
            height: import("@tamagui/core").SpaceTokens;
        } | {
            width: number;
            height: number;
        } | undefined;
        shadowOpacity?: number | import("@tamagui/core").Variable<any> | undefined;
        shadowRadius?: import("@tamagui/core").SizeTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        transform?: import("@tamagui/core").Variable<any> | (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform | import("react-native").MatrixTransform)[] | undefined;
        transformMatrix?: import("@tamagui/core").Variable<any> | number[] | undefined;
        rotation?: number | import("@tamagui/core").Variable<any> | undefined;
        scaleX?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        scaleY?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        translateX?: number | import("@tamagui/core").Variable<any> | undefined;
        translateY?: number | import("@tamagui/core").Variable<any> | undefined;
        x?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        y?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        perspective?: number | import("@tamagui/core").Variable<any> | undefined;
        scale?: import("@tamagui/core").SpaceTokens | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").Variable<any> | undefined;
        skewX?: string | import("@tamagui/core").Variable<any> | undefined;
        skewY?: string | import("@tamagui/core").Variable<any> | undefined;
        matrix?: import("@tamagui/core").Variable<any> | number[] | undefined;
        rotate?: string | import("@tamagui/core").Variable<any> | undefined;
        rotateY?: string | import("@tamagui/core").Variable<any> | undefined;
        rotateX?: string | import("@tamagui/core").Variable<any> | undefined;
        rotateZ?: string | import("@tamagui/core").Variable<any> | undefined;
        cursor?: import("@tamagui/core").Variable<any> | import("csstype").Property.Cursor | undefined;
        contain?: import("@tamagui/core").Variable<any> | import("csstype").Property.Contain | undefined;
        display?: "flex" | "none" | import("@tamagui/core").Variable<any> | "inherit" | "inline" | "block" | "contents" | "inline-flex" | undefined;
        userSelect?: import("@tamagui/core").Variable<any> | import("csstype").Property.UserSelect | undefined;
        outlineColor?: import("@tamagui/core").Variable<any> | import("csstype").Property.OutlineColor | undefined;
        outlineStyle?: import("@tamagui/core").Variable<any> | import("csstype").Property.OutlineStyle | undefined;
        outlineOffset?: import("@tamagui/core").Variable<any> | import("csstype").Property.OutlineOffset<0 | (string & {})> | undefined;
        outlineWidth?: import("@tamagui/core").Variable<any> | import("csstype").Property.OutlineWidth<0 | (string & {})> | undefined;
        tabIndex?: string | number | import("@tamagui/core").Variable<any> | undefined;
        role?: string | import("@tamagui/core").Variable<any> | undefined;
        hoverStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>) | import("@tamagui/core").Variable<any> | null | undefined;
        pressStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>) | import("@tamagui/core").Variable<any> | null | undefined;
        focusStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>) | import("@tamagui/core").Variable<any> | null | undefined;
        exitStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>) | import("@tamagui/core").Variable<any> | null | undefined;
        enterStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>) | import("@tamagui/core").Variable<any> | null | undefined;
    } | null | undefined;
};
export declare const bordered: (val: boolean | number, { props }: {
    props: any;
}) => any;
export declare const padded: {
    true: (_: any, extras: any) => {
        padding: any;
    };
};
export declare const radiused: {
    true: (_: any, extras: any) => {
        borderRadius: any;
    };
};
export declare const circular: {
    true: (_: any, { props, tokens }: {
        props: any;
        tokens: any;
    }) => {
        width: any;
        height: any;
        maxWidth: any;
        maxHeight: any;
        minWidth: any;
        minHeight: any;
        borderRadius: number;
        padding: number;
    };
};
export declare const hoverTheme: {
    true: {
        hoverStyle: {
            backgroundColor: string;
            borderColor: string;
        };
    };
    false: {};
};
export declare const pressTheme: {
    true: {
        pressStyle: {
            backgroundColor: string;
            borderColor: string;
        };
    };
    false: {};
};
export declare const focusTheme: {
    true: {
        focusStyle: {
            backgroundColor: string;
            borderColor: string;
        };
    };
    false: {};
};
//# sourceMappingURL=variants.d.ts.map