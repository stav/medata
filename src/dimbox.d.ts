declare module 'dimbox' {
    /**
     * Options for initializing the Dimbox library.
     */
    interface ConfigOptions {
        ajaxTemplate?: string;
        closeOnOverlayClick?: boolean;
        fullscreen?: boolean;
        imageTemplate?: string;
        iframeRatio?: string;
        iframeTemplate?: string;
        inlineTemplate?: string;
        onAfterClose?: () => void;
        onAfterEnterFullscreen?: () => void;
        onAfterExitFullscreen?: () => void;
        onAfterInit?: () => void;
        onAfterOpen?: () => void;
        onAfterUpdateContent?: () => void;
        onBeforeClose?: () => void;
        onBeforeEnterFullscreen?: () => void;
        onBeforeExitFullscreen?: () => void;
        onBeforeInit?: () => void;
        onBeforeOpen?: () => void;
        onBeforeUpdateContent?: () => void;
        onContentLoaded?: () => void;
        onDownload?: () => void;
        onXhrComplete?: (response: any) => void;
        selector?: string;
        sequenceTemplate?: string;
        showDownloadButton?: boolean;
        showFullscreenButton?: boolean;
        svgCloseButton?: string;
        svgDownloadButton?: string;
        svgFullscreenButton?: string;
        svgFullscreenExitButton?: string;
        svgPrevNextButton?: string;
        theme?: 'dark' | 'light';
        videoAutoplay?: boolean;
        videoControls?: boolean;
        videoLoop?: boolean;
        videoTemplate?: string;
        videoVolume?: number | null;
        xhrResponseType?: XMLHttpRequestResponseType;
    }

    /**
     * Opens the dimbox.
     */
    function open(element: HTMLElement | null): void;

    function close();
    function init();
    function next();
    function previous();
    function setConfig(options: ConfigOptions);
}
