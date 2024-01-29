import '../grail.css';
import Pic_4 from '../images/Pic_4.png';
import Run from '../tracks/Run.mp3';
// import AudioPlayer from 'react-h5-audio-player';
import BOT_Logo from '../images/BOT_Logo.png';
import Rex from '../tracks/Rex.mp3';
import BOT_Gun from '../images/BOT_Gun.png';
import Dog_Motorcycle from '../images/Dog_Motorcycle.png';
import IF from '../images/IF.png';
import GuanCov from '../images/GuanCov.jpg';
import { NavLink, Link } from 'react-router-dom';
// import CreateAccount from '../components/create-account';
// import Login from '../components/login';

export default function Home() {

    const audioStyle = {
          width: '96%',
          maxHeight: '100vh', 
          backgroundColor: 'white',
          borderRadius: '1rem',
          overflow: 'auto',
          alignItems: 'center',
          marginBottom: '5%',
          padding: '0',
          border: '.2rem solid black'
    }

    const albumPicStyle = {
        width: '150px',
        height: '150px',
        padding: '4%',
    }

    return (
<>
    <div className="wrapper">
        
        {/* Grail in clockwise order from topLeft */}
        
        <div id="topLeft" className="box">
            <img src={BOT_Gun} alt="Boys On Trial T-Shirt Logo" 
                style={{
                    maxHeight: '100%',
                    // filter: 'drop-shadow(0px 0px 3px hotpink)'
                }} 
                />
        </div>

        <div id="header" className="box">
            <img style={{width: '100%', height: '100%', objectFit: 'cover' }} src={Pic_4} alt="Pic of Band downtown Chicago" />
        </div>
       
        <div id="topRight" className="box">
        <img src={BOT_Gun} alt="Boys On Trial T-Shirt Logo" 
              style={{
                maxHeight: '100%', 
                // filter: 'drop-shadow(0px 0px 5px hotpink)'
              }} />
        </div>

        <div id="midRightA" className="box">
            {/* <CreateAccount />  Removing until Backend is complete */}
            <Link to={'if'}>
            <img src={IF} alt={'If Album Cover'}
                style={albumPicStyle} />
            </Link>    
        </div>

        <div id="midRightB" className="box">
            <h6 style={{
                marginTop: '5%',
                color: 'rgb(255, 253, 237)',
                fontFamily: 'RocknRoll One, sans-serif'
                }}>Rex
            </h6>
            
            <audio controls 
                src={Rex} 
                style={audioStyle} 
                onPlay={e => console.log("Listening to Rawk n Roll")}
             />        
        </div>

        <div id="bottomRight" className="box">
            <Link className='corner' to={'if'} style={{fontFamily: 'New Rocker, system-ui', fontSize: '1.3rem'}} >You are safe today</Link>
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
            <Link to={'guan'} style={{fontFamily: 'New Rocker, system-ui', fontSize: '1.3rem'}} >In all tonight's dreams believe</Link>
        </div>

        <div id="midLeftB" className="box">
           <h6 style={{
                    marginTop: '5%', 
                    color: 'rgb(255, 253, 237)',
                    fontFamily: 'RocknRoll One, sans-serif'
                    }}>Run (from the city)</h6>
            <audio   
                    controls    
                     src={Run} 
                     style={audioStyle} 
                     onPlay={e => console.log("Listening to Rawk n Roll")}
            />
        </div>


        <div id="midLeftA" className="box">     
            {/* <Login /> Removing until backend is complete*/}
            <NavLink to={'guan'}>
            <img src={GuanCov} alt={'¡Guantanamo Boy! Album Cover'}
                style={albumPicStyle}/>
            </NavLink>    
        </div>        



        
{/* <!-- Center --> */}
<div className='shimmer'  id="center">
             <img  
                 src={BOT_Logo} 
                 style={{ 
                    width: '100%',  
                    height: '100%'
                    }} 
                    alt="Boys On Trial Logo" 
                 />
</div>                 
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
           <p>©2024DADADesigns</p>  
           <p>Photos by Johanna Claudette</p>  
           <p>Logos by Blake Calovic</p>
           <p>All Songs ©BOT</p>
    </div>


    </>
    )
}



