import style from './MapBlock.module.css';

import React from "react";
import {WrappedMap} from "./WrappedMap/WrappedMap";
import WorkDaysBlock from "./WorkDaysBlock/WorkDaysBlock";
import InformBlock from "./InformBlock/InformBlock";

const MapBlock = () => {


    return (
        <div className={style.mapBlock} id={'contacts'}>

            <div className={style.mapBlockGrid}>

                <div className={style.mapItem}>
                    <WrappedMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC2r4VRJvLh74P7vRrdVPtkT-eQr9-O8nw`}
                        loadingElement={<div style={{height: `100%`}}/>}
                        containerElement={<div style={{height: `100%`, minHeight: '500px'}}/>}
                        mapElement={<div style={{height: `100%`}}/>}
                        blockContent={
                            <div className={style.blockContentContainer}>
                                <div>
                                <a target="_blank"
                                    // href="https://maps.google.com/maps?ll=50.4942384786443,30.462077840443065&amp;z=17&amp;t=m&amp;hl=pt-PT&amp;gl=US&amp;mapclient=apiv3&amp;cid=18382420964649073743"
                                   href={`https://g.page/ItKiosk?share`}
                                   tabIndex="0">
                                    <div className={style.mapAddress}>
                                        Украина, Киев, ул. Кириловская, 160; корп Б, офис 307
                                    </div>
                                </a>
                                </div>
                                <div className={style.isVisible}>
                                    <WorkDaysBlock/>
                                </div>
                                <div className={style.redirectToGMaps}>
                                    <a target="_blank"
                                        // href="https://maps.google.com/maps?ll=50.4942384786443,30.462077840443065&amp;z=17&amp;t=m&amp;hl=pt-PT&amp;gl=US&amp;mapclient=apiv3&amp;cid=18382420964649073743"
                                       href={`https://g.page/ItKiosk?share`}
                                       tabIndex="0"> <span>Открыть в Google Maps</span> </a>
                                </div>
                            </div>
                        }/>
                </div>


                <div className={style.mapInfoItem}>
                    <div className={style.mapItemContainer}>
                        <InformBlock/>
                    </div>

                    <div className={style.mapItemContainer + ' ' + style.isVisibleInverted}>
                        <WorkDaysBlock/>
                    </div>
                </div>
            </div>
        </div>

    );
};


/*
const Map = () => {
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
                markerPixelOffset={{x: 0, y: -32}}
                content={
                    <div className={style.workDaysBlock}>
                    <h3 className={style.workDays}>График работы</h3>
                    <ul className={style.workDaysList}>
                        <li>
                            <div className={style.workDaysListItem}>
                                <span>Понедельник</span>
                                <span>10:00 - 18:00</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.workDaysListItem}>
                                <span>Вторник</span>
                                <span>10:00 - 18:00</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.workDaysListItem}>
                                <span>Среда</span>
                                <span>10:00 - 18:00</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.workDaysListItem}>
                                <span>Четверг</span>
                                <span>10:00 - 18:00</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.workDaysListItem}>
                                <span>Пятница</span>
                                <span>10:00 - 18:00</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.workDaysListItem}>
                                <span>Суббота</span>
                                <span>Выходной</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.workDaysListItem}>
                                <span>Воскресенье</span>
                                <span>Выходной</span>
                            </div>
                        </li>
                    </ul>
                </div>
                }
            />

        </GoogleMap>

    );
};
const WrappedMap = withScriptjs(withGoogleMap(Map));
*/


export default MapBlock;