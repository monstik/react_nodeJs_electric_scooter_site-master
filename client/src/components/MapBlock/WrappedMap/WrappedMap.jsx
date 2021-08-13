import React from "react";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import CustomInfoBox from "../CustomInfoBox/CustomInfoBox";

const Map = (props) => {
    return (
        <GoogleMap
            defaultZoom={17}
            defaultCenter={{lat: 50.49498242083122, lng: 30.461981280971926}}>

            <Marker position={{lat: 50.4942384786443, lng: 30.462077840443065}}
                    icon={{
                        url: './images/rev-photo.png',
                        scaledSize: new window.google.maps.Size(35, 35)
                    }}
            />

            <CustomInfoBox
                anchorPosition={{lat: 50.4942384786443, lng: 30.462077840443065}}
                markerPixelOffset={{ x: 0, y: -32 }}
                // content={'Украина, Киев, ул. Кириловская, 160; корп Б, офис 307'}4
                content={props.blockContent}
            />

        </GoogleMap>

    );
};

export const WrappedMap = withScriptjs(withGoogleMap(Map));