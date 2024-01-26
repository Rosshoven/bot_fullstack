import { useState } from "react";



export default function AlbumFour( { 
                            image, 
                            description,
                            songTitle1, 
                            songTitle2, 
                            songTitle3, 
                            songTitle4, 
                            songTitle5, 
                            track1, 
                            track2, 
                            track3, 
                            track4, 
                            track5, 
                            backgroundColor, 
                            border, 
                            pageBackgroundColor, 
                            color, 
                            backCoverImage, 
                            audioBorder, coverBorder} ) 
    
    { 


    const audioStyle = {
        margin: '0 0 .7rem',
        border: audioBorder,
        borderRadius: '2rem',
    }

    const coverStyle = {
        width: '400px', 
        height: '400px', 
        borderRadius: '1.5%', 
        border: coverBorder,
        // marginRight: '1rem',
        boxShadow: '4px 4px 20px rgba(55, 24, 3, 1)',
  }

    const tracksStyle = {
        width: '330px', 
        height: '330px', 
        borderRadius: '1.5%',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        margin: '1rem',
        backgroundColor,
        border,
        boxShadow: '2px 2px 12px rgba(55, 24, 3, 1)',
        color
    }

    

    const [backCover, setBackCover] = useState(false);

    return (

    <div style={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        alignContent:'space-evenly', 
        flexWrap: 'wrap', 
        margin: '0',
        backgroundColor: pageBackgroundColor,
        backgroundSize: 'cover', 
        width: '100%',
        height: '100vh',
        paddingTop: '1rem',
        position: 'relative',
    }}>
            

        {/* Album Front/Back */}    
        {!backCover ? (  

            <img src={image} 
                 alt={description}
                 className="img-fluid"
                 style={coverStyle}
                 onMouseEnter={() => setBackCover(true)}
                 >   
            </img>

         ) : ( 

            <div style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',   
                backgroundColor, 
                border, 
                borderRadius: '1.5%',
                margin: '0 1rem 1rem 0',

            }}>
                
                <img style={coverStyle} 
                     src={backCoverImage} 
                     alt='back cover'
                     onMouseLeave={() => setBackCover(false)}
                     />
           </div>
           )}


        {/* Tracks */}
        <figure style={tracksStyle}>
            <figcaption>{songTitle1}</figcaption>
            <audio controls src={track1} style={audioStyle}/>

            <figcaption>{songTitle2}</figcaption>   
            <audio controls src={track2} style={audioStyle}/>

            <figcaption>{songTitle3}</figcaption>   
            <audio controls src={track3} style={audioStyle}/>

            <figcaption>{songTitle4}</figcaption>   
            <audio controls src={track4} style={audioStyle}/>

        </figure>   

    </div>

)
};