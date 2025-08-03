import React from "react";
import { ImSpinner9 } from "react-icons/im";
export default function Loading(){
    return (
        <div className="text-3xl font-bold flex justify-center items-center" >
            <ImSpinner9  className="animate-spin text-6xl text-red-500" />
        </div>
    );
}