import React from "react";
import { OverlayView } from "react-google-maps";
import style from './CustomInfoBox.module.css';

const getPixelPositionOffset = pixelOffset => (width, height) => ({
    x: -(width / 2) + pixelOffset.x,
    y: -(height / 2) + pixelOffset.y
});

const Popup = (props) => {
    return (
        <OverlayView
            position={props.anchorPosition}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={getPixelPositionOffset(props.markerPixelOffset)}
        >
            <div className={style.popupTipAnchor}>
                <div className={style.popupBubbleAnchor}>
                    <div className={style.popupBubbleContent}>
                       {props.content}
                    </div>
                </div>
            </div>
        </OverlayView>
    );
};

export default Popup;
