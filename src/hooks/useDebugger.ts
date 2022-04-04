import useEventListener from "@use-it/event-listener";
import { useState } from "react";

const useDebugger = () => {
    const [activeDebuggerScreen, setActiveDebuggerScreen] = useState(false);
    
    useEventListener('keydown', (e: KeyboardEvent) => {
        if(['d', 'D'].includes(e.key)) {
            setActiveDebuggerScreen(!activeDebuggerScreen)
        }
    });

    return activeDebuggerScreen;
}
export default useDebugger;