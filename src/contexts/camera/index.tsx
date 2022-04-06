import React, { Children, createContext, useContext, useState } from "react";
import { TILE_SIZE } from "../../settings/constants";
import { EDirection } from "../../settings/types";

interface ICameraContextProps {
    valid: boolean,
    position: {
        x: number,
        y: number
    },
    getValidCameraMovement: (isValid: boolean) => void
}

export const CameraContext = createContext<ICameraContextProps>({
    valid: true,
    position: {
        x: 0,
        y: 0
    },
    getValidCameraMovement: (isValid) => null
});

const CameraProvider = ({ children }: { children: React.ReactNode }) => {
    const [positionCamera, setPositionCamera] = useState<any>({
        valid: true,
        position: {
            x: 0,
            y: 0
        },
        getValidCameraMovement: (isValid: boolean, direction: EDirection) => {
            setPositionCamera((prevState: any) => {

                if (isValid) {
                    if (direction === EDirection.UP) {
                        setPositionCamera({
                            ...positionCamera,
                            position: {
                                x: positionCamera.position.x,
                                y: positionCamera.position.y + TILE_SIZE,
                            }
                        });
                    }
                    if (direction === EDirection.DOWN) {
                        setPositionCamera({
                            ...positionCamera,
                            position: {
                                x: positionCamera.position.x,
                                y: positionCamera.position.y - TILE_SIZE,
                            }
                        });
                    }
                    if (direction === EDirection.LEFT) {
                        setPositionCamera({
                            ...positionCamera,
                            position: {
                                x: positionCamera.position.x + TILE_SIZE,
                                y: positionCamera.position.y,
                            }
                        });
                    }
                    if (direction === EDirection.RIGHT) {
                        setPositionCamera({
                            ...positionCamera,
                            position: {
                                x: positionCamera.position.x - TILE_SIZE,
                                y: positionCamera.position.y,
                            }
                        });
                    }
                }

                return {
                    valid: isValid,
                    position: {
                        x: 0,
                        y: 0
                    },
                    getValidCameraMovement: prevState.getValidCameraMovement

                }
            });
        }
    });

    return (
        <CameraContext.Provider value={positionCamera}>
            {children}
        </CameraContext.Provider>
    )
}
export default CameraProvider;