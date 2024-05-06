import React from "react";
type AnimationType = "SlideLeftFull" | "SlideLeft" | "SlideRightFull" | "SlideRight" | "SlideUpFull" | "SlideUp" | "SlideDownFull" | "SlideDown" | "EaseInOut";
export declare function AnimatePage({ children, animationType, className, }: {
    children: React.ReactNode;
    animationType?: AnimationType;
    className?: string;
}): React.JSX.Element;
export {};
