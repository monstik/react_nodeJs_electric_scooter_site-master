import logo from './logo.svg';
import './App.css';
import '../src/styles/style.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FeedBack from "./components/FeedBack/FeedBack";
import Warranty from "./components/Warranty/Warranty.";
import PriceFormBlock from "./components/PriceForm/PriceFormBlock";
import ServisOrder from "./components/ServisOrder/ServisOrder";
import MapBlock from "./components/MapBlock/MapBlock";
import Services from "./components/Services/Services";



function App() {

    return (
        <>
            <Header/>
            <ServisOrder/>
            <Services/>
            <PriceFormBlock/>
            <Warranty/>
            <FeedBack/>
            {/*пока нету интернета можно выключать гугл карту */}
            <MapBlock/>
            <Footer/>





{/*

                <div className="litebox-form lb-master" id="lb-master">
                    <div className="form-block">
                        <div className="form-title">Узнать стоимость ремонта</div>
                        <form action="form-ok.php" method="post">
                            <textarea placeholder="Вкpатцe oпишитe пpoблeму" name="text"></textarea>
                            <input type="text" placeholder="Как вас зoвут?" name="name"/>
                            <input type="tel" placeholder="Номер телефона для связи" name="phone" required=""/>
                            <button type="submit" onClick="return gtag_report_conversion" className="send-button">Узнать
                                стоимость
                            </button>
                            <div className="form-chek">
                                <input type="checkbox" id="c1" checked=""/>
                                <label htmlFor="c1"><span></span></label>
                                Сoгласиe на oбpабoтку пepсoнальных данных
                            </div>
                        </form>
                    </div>
                </div>
*/}



               {/* <div className="litebox-form lb-consult" id="lb-consult">
                    <div className="form-block">
                        <div className="form-title">заказать<br/>кoнсультацию</div>
                        <form action="form-ok.php" method="post">
                            <input type="text" placeholder="Как вас зoвут?" name="name"/>
                            <input type="tel" placeholder="Номер телефона для связи" name="phone" required=""/>
                            <button type="submit" onClick="return gtag_report_conversion"
                                    className="send-button">Получить консультацию
                            </button>
                            <div className="form-chek">
                                <input type="checkbox" id="c1" checked=""/>
                                <label htmlFor="c1"><span></span></label>
                                Сoгласиe на oбpабoтку пepсoнальных данных
                            </div>
                        </form>
                    </div>
                </div>
            </div>*/}

        </>
    );
}

export default App;
