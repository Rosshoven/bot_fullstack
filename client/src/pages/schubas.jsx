import Album from '../components/album';
import SchubasBack from '../images/SchubasBack.png';
import Schubas_cover from '../images/Schubas_cover.JPG';
import 

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
               track1={}
               track2={}
               track3={}
               track4={}
               track5={}
               pageBackgroundColor={'lightyellow'}
               backgroundColor={'skyblue'}
               border={'black 2px solid'}
               backCoverImage={SchubasBack}
               />
    </div>           
      
)
}