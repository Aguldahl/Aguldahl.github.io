import {FunctionComponent} from 'react';
import styles from './styles/HomeScreenMobile.module.css';
import TopBar from "./Components/TopBar";


const HomeScreenMobile:  FunctionComponent= () => {

  return (
      <div className={styles.homescreenOnIphone13}>
          <TopBar/>
          <div className={styles.imageParent}>
              <div className={styles.slideUpAnimation}>
                  <img className={styles.sexyboi1Icon} alt="" src={require("./assets/sexyBoi.jpg")}/>
                  <img className={styles.arneOveKoser1Icon} alt="" src={require("./assets/arne_ove_koser.jpg")}/>
                  <img className={styles.hipphurraVintage1Icon} alt="" src={require("./assets/HippHurra_vintage.jpg")}/>
                  <img className={styles.bikkjeBrenn1Icon} alt="" src={require("./assets/bikkje_brenn.jpg")}/>
                  <img className={styles.djEliasBw1Icon} alt="" src={require("./assets/DJ_elias_BW.jpg")}/>
                  <img className={styles.djOveBw1Icon} alt="" src={require("./assets/DJ_ove_BW.jpg")}/>
                  <img className={styles.mykkisWilhelmVinenKallerBwIcon} alt=""
                       src={require("./assets/mykkis_wilhelm_vinen_kaller_BW.jpg")}/>
                  <img className={styles.oveMiddagVintage1Icon} alt="" src={require("./assets/Ove_middag_Vintage.jpg")}/>
                  <img className={styles.arneTarBilder1Icon} alt="" src={require("./assets/arne_tar_bilder.jpg")}/>
                  <img className={styles.djEliasMedFilter1Icon} alt="" src={require("./assets/DJ_elias_med_filter.jpg")}/>
              </div>
          </div>

      </div>);
};

export default HomeScreenMobile;