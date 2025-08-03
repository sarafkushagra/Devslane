import React from "react";
import { ImSpinner9 } from "react-icons/im";
export default function Loading() {
    return (
        <div className="fixed inset-0 min-h-screen flex justify-center items-center bg-white bg-opacity-70 z-50">
            <ImSpinner9 className="animate-spin text-6xl text-red-500" />
        </div>
    );
}