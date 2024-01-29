import Album from '../components/album';
import SchubasBack from '../images/SchubasBack.png';
import Schubas_cover from '../images/Schubas_cover.png';
import Hey from '../tracks/Hey.mp3';
import Sugar from '../tracks/Sugar.mp3';
import Blurry from '../tracks/Blurry.mp3';
import AddictLive from '../tracks/AddictLive.mp3';
import RunLive from '../tracks/RunLive.mp3';

export default function Schubas() {

    return(

    <div style={{backgroundColor: 'pink', padding: '.1rem'}}>
        <Album 
               image={Schubas_cover} 
               description={`Live at Schuba's Album Cover`} 
               songTitle1={`Hey!`}
               songTitle2={`Sugar Cereal`}
               songTitle3={`Blurry Faces`}
               songTitle4={`The Addict`}
               songTitle5={`Run (from the city)`}
               track1={Hey}
               track2={Sugar}
               track3={Blurry}
               track4={AddictLive}
               track5={RunLive}
               pageBackgroundColor={'lightyellow'}
               backgroundColor={'skyblue'}
               border={'black 2px solid'}
               backCoverImage={SchubasBack}
               coverBorder={'solid 2px black'}
               audioBorder={'solid 2px black'}
               fontFamily={'New Rocker, system-ui'}
               />
    </div>           
      
)
}