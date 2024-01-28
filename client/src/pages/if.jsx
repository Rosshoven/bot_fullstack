// import AudioPlayer from 'react-h5-audio-player';
import { useState } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import Album from '../components/album';
import IF from '../images/IF.png';
import IfBack from '../images/IfBack.png'
import Rex from '../tracks/Rex.mp3';
import Fireplay from '../tracks/Fireplay.mp3';
import LookLeft from '../tracks/LookLeft.mp3'
import SaySometing from '../tracks/SaySomething.mp3';
import GetInLine from '../tracks/GetInLine.mp3';


export default function If() {
    const [isHovered, setIsHovered] = useState(false);
    return(

    <div>
        <Album 
               image={IF} 
               description={`If it's the last thing we do Album Cover`} 
            //    albumTitle={`If it's the last thing we do...`}
            //    albumDetail1={`Recorded by Boys On Trial`}
            //    albumDetail2={`At Bearfux Troy's in Chicago`}
            //    albumDetail3={`Spring 2008`}
            //    albumDetail4={`Michael.gv`}
            //    albumDetail5={`Colin.d`}
            //    albumDetail6={`Ken.b`}
            //    albumDetail7={`Mastered by Ken`}
            //    albumDetail8={`Cover from last soundcheck, Reggie's Rock Room`}
            //    albumDetail9={`Special thanks to our friends xo \u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ©2008`}
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
               backCoverImage={IfBack}
               fontFamily={'RocknRoll One, sans-serif'}
               />
               <p style={{
                display: 'flex', 
                // flexDirection: 'row', 
                justifyContent: 'right', 
                paddingRight: '5%', 
                alignContent: 'center', 
                // flexWrap: 'wrap', 
                paddingTop: '1rem',
                backgroundColor: '#d83c',
                // backgroundSize: 'cover', 
                width: '100%',
                height: '10vh',
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
