"use client";
import { Viewer, Worker, RenderPageProps, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { useEffect, useState } from "react";

const PdfViewer = ({ url }: { url: string }) => {
    const renderPage = (props: RenderPageProps) => {
        return (
            <>
                {props.canvasLayer.children}
                <div style={{ userSelect: 'none' }}>
                    {props.textLayer.children}
                </div>
                {props.annotationLayer.children}
            </>
        );
    };
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [],
    });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    }, []);

    isMobile ? console.log("Mobile") : console.log("Desktop");
    return (
        <>
        {isMobile ? (
            <div className="w-screen h-screen">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl={url}
                        plugins={[defaultLayoutPluginInstance]}
                        theme={"dark"}
                        renderPage={renderPage}
                        defaultScale={SpecialZoomLevel.PageWidth}
                    />
                </Worker>
            </div>
        ) : (
            <div className="w-[1250px] h-screen">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl={url}
                        plugins={[defaultLayoutPluginInstance]}
                        theme={"dark"}
                        renderPage={renderPage}
                    />
                </Worker>
            </div>
        )}
        </>
    );
};
export default PdfViewer;