// import AudioPlayer from 'react-h5-audio-player';
import { useState } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import Album from '../components/album';
import IF from '../images/IF.png';
import If_Back from '../images/If_Back.png'
import Rex from '../tracks/Rex.mp3';
import Fireplay from '../tracks/Fireplay.mp3';
import LookLeft from '../tracks/LookLeft.mp3'
import SaySometing from '../tracks/SaySomething.mp3';
import GetInLine from '../tracks/GetInLine.mp3';


export default function If() {
    const [isHovered, setIsHovered] = useState(false);
    return(

    <div style={{backgroundColor: '#d83c',}}>
        <Album 
               image={IF} 
               description={`If it's the last thing we do Album Cover`} 
               songTitle1={`Rex`}
               songTitle2={`Fireplay`}
               songTitle3={`Look Left`}
               songTitle4={`Say Something`}
               songTitle5={`Get In Line`}
               track1={Rex}
               track2={Fireplay}
               track3={LookLeft}
               track4={SaySometing}
               track5={GetInLine}
               backgroundColor={'silver'}
               border={'green 2px solid'}
               pageBackgroundColor={'#d83c'}
               backCoverImage={If_Back}
               fontFamily={'RocknRoll One, sans-serif'}
               />
               <p style={{
                display: 'flex', 
                justifyContent: 'right', 
                paddingRight: '5%', 
                alignContent: 'center', 
                paddingTop: '1rem',
                backgroundColor: '#d83c',
                // backgroundSize: 'cover', 
                margin: 0,
                // width: '100%',
                height: '10vh',
                overflow: 'auto',
                // paddingTop: '.1rem',
                // position: 'relative',
                fontFamily: 'Rock Salt, cursive',
                color: isHovered ? 'red' : 'transparent',
            }} 
            //    onMouseEnter={(e) => e.target.style.color = 'red'}
            //    onMouseLeave={(e) => e.target.style.color = 'transparent'}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
               >...it was</p>
    </div>           
      
)
}
