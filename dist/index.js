"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
// Component to animate page transitions
export function AnimatePage({ children, animationType, className, }) {
    // Define animation configurations
    const animations = {
        SlideRightFull: {
            initial: { opacity: 0.5, x: "-100%" },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0.5, x: "-100%" },
            transition: { delay: 0.25 },
        },
        SlideRight: {
            initial: { opacity: 0, x: -15 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -15 },
            transition: { delay: 0.25 },
        },
        SlideLeftFull: {
            initial: { opacity: 0.5, x: "100%" },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0.5, x: "100%" },
            transition: { delay: 0.25 },
        },
        SlideLeft: {
            initial: { opacity: 0, x: 15 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 15 },
            transition: { delay: 0.25 },
        },
        SlideUpFull: {
            initial: { opacity: 0.5, y: "100%" },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0.5, y: "100%" },
            transition: { delay: 0.25 },
        },
        SlideUp: {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 15 },
            transition: { delay: 0.25 },
        },
        SlideDownFull: {
            initial: { opacity: 0.5, y: "-100%" },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0.5, y: "-100%" },
            transition: { delay: 0.25 },
        },
        SlideDown: {
            initial: { opacity: 0, y: -15 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -15 },
            transition: { delay: 0.25 },
        },
        EaseInOut: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { delay: 0.2 },
        },
    };
    // Function to determine if the user is using a mobile device
    function isMobileDevice() {
        if (typeof navigator === "undefined")
            return false;
        return /Mobi|Android/i.test(navigator.userAgent);
    }
    // Determine the selected animation based on animationType or device type
    const selectedAnimation = animations[animationType || (isMobileDevice() ? "SlideLeft" : "SlideUp")];
    return (React.createElement(AnimatePresence, null,
        React.createElement(motion.div, { initial: selectedAnimation.initial, animate: selectedAnimation.animate, exit: selectedAnimation.exit, transition: selectedAnimation.transition, className: className, style: { overflow: "hidden" } }, children)));
}
