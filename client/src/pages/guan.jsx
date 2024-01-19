import Album from "../components/album";
import GuanCov from '../images/GuanCov.jpg';
import GuanBack from '../images/GuanBack.JPG';
import Coward from '../tracks/Coward.mp3';
import Run from '../tracks/Run.mp3';
import BWL from '../tracks/BWL.mp3';
import NewPolice from '../tracks/NewPolice.mp3';
import Leavin from '../tracks/Leavin.mp3';


export default function Guan() {

    return (
        <>
            <Album 
                image={GuanCov}
                backgroundColor={'black'}
                backCoverImage={GuanBack}
                pageBackgroundColor={'black'}
                songTitle1={`Coward or Hero`}
                songTitle2={`Run (from the city)`}
                songTitle3={`Big White Lie`}
                songTitle4={`New Police`}
                songTitle5={`Leavin`}
                track1={Coward}
                track2={Run}
                track3={BWL}
                track4={NewPolice}
                track5={Leavin}   
                border={'white 2px solid'} 
                color={'white'}
            />
        </>
    )
}