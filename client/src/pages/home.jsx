import '../grail.css';
import Pic_4 from '../images/Pic_4.png';
import Run from '../tracks/Run.mp3';
import AudioPlayer from 'react-h5-audio-player';
import BOT_Logo from '../images/BOT_Logo.png';
import Rex from '../tracks/Rex.mp3';
import BOT_Gun from '../images/BOT_Gun.png';
import Dog_Motorcycle from '../images/Dog_Motorcycle.png';
import IF from '../images/IF.png';
import GuanCov from '../images/GuanCov.jpg';
// import CreateAccount from '../components/create-account';
// import Login from '../components/login';

export default function Home() {

    const audioStyle = {
          width: '90%',
          height: '90%', 
          backgroundColor: 'white',
          borderRadius: '1rem',
          overflow: 'auto',
          alignItems: 'center',
          marginBottom: '5%',
          padding: '0',
          border: '.2rem solid black'
    }

    const albumPicStyle = {
                    maxHeight: '95%', 
                    width: '50%',
                    margin: '5rem auto',
    }

    return (
<>
    <div className="wrapper">
        
        {/* Grail in clockwise order from topLeft */}
        
        <div id="topLeft" className="box">
        <img src={BOT_Gun} alt="Boys On Trial T-Shirt Logo" 
              style={{
                maxHeight: '100%'
              }} 
              />
        </div>

        <div id="header" className="box">
            <img style={{width: '100%', height: '100%', objectFit: 'cover' }} src={Pic_4} alt="Pic of Band downtown Chicago" />
            {/* <h1>Boys On Trial</h1> */}
            <div style={{ position: 'absolute', top: '15%', left: '35.5%', transform: 'translate(-50%, -90%)', textAlign: 'left', color: 'black'}}>
            {/* <h1 style={{fontSize: '1rem'}}>Boys On Trial</h1> */}
  </div>
        </div>
       
        <div id="topRight" className="box">
        <img src={BOT_Gun} alt="Boys On Trial T-Shirt Logo" 
              style={{
                maxHeight: '100%', 
              }} />
        </div>

        <div id="midRightA" className="box">
            {/* <CreateAccount />  Removing until Backend is complete */}
            <img src={IF} alt={'If Album Cover'}
                style={albumPicStyle} />
        </div>

        <div id="midRightB" className="box">
        <h6 style={{marginTop: '5%', color: 'white'}}>Rex</h6>
        <AudioPlayer src={Rex} 
                        //  autoplay
                         style={audioStyle} 
                         onPlay={e => console.log("Listening to Rawk n Roll")}
                         />        </div>

        <div id="bottomRight" className="box">
            <a href='if'>You are safe today</a>
        </div>

        <div id="bottomRightA" className="box">
            <img src={Dog_Motorcycle} alt="Man riding motorcycle with his Dog"
            style={{ 
                width: '100%',
                height: '100%',
                transform: 'scaleX(-1)' //FLIPS IMAGE HORIZONTALLY
             }}  
             />
        </div>

        <div id="bottomLeftA" className="box">
            <img src={Dog_Motorcycle} alt="Man riding motorcycle with his Dog"
                style={{ 
                    width: '100%',
                    height: '100%',
                }}  
                />
        </div>

        <div id="bottomLeft" className="box">
            <a href='guan'>In all tonight's dreams believe</a>
        </div>

        <div id="midLeftB" className="box">
           <h6 style={{marginTop: '5%', color: 'white'}}>Run (from the city)</h6>
        <AudioPlayer src={Run} 
                        //  autoplay
                         style={audioStyle} 
                         onPlay={e => console.log("Listening to Rawk n Roll")}
                         />
        </div>

        <div id="midLeftA" className="box">     
            {/* <Login /> Removing until backend is complete*/}
            <img src={GuanCov} alt={'¡Guantanamo Boy! Album Cover'}
                style={albumPicStyle} />
        </div>        



        
{/* <!-- Center --> */}

             <img id="center" 
                 src={BOT_Logo} 
                 style={{ 
                    width: '100%',  
                    height: '100%'
                    }} 
                    alt="Boys On Trial Logo" 
                 />
            {/* <AudioPlayer src={LookLeft} 
                         autoplay
                         style={{width: '100%', 
                                 height: '100%', 
                                 objectFit: 'cover', 
                                 backgroundColor: '#f8f8f8',
                                //  backgroundImage: `url(${BOT_Logo}`,
                                 backgroundSize: '20%',
                                // height: '120vh',
                                borderRadius: '1rem' 
                            }} 
                         onPlay={e => console.log("Listening to Rawk n Roll")}
                         /> */}
        {/* </div>       */}

    </div>
    
    {/* Footer */}
    <div id="footer">
           <p>All Songs ©BOT</p>  
           <p>Photos by Johanna Claudette</p>  
           <p>Logos by Blake Calovic</p>
    </div>


    </>
    )
}



