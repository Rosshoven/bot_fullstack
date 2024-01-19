import Album from '../components/album';
import SchubasBack from '../images/SchubasBack.png'
import Schubas_cover from '../images/Schubas_cover.JPG'

export default function Schubas() {

    return(

    <div style={{backgroundColor: 'pink', padding: '.1rem'}}>
        <Album 
               image={Schubas_cover} 
               description={`If it's the last thing we do Album Cover`} 
               songTitle1={`Rex`}
               songTitle2={`Fireplay`}
               songTitle3={`Look Left`}
               songTitle4={`Say Something`}
               songTitle5={`Get In Line`}
               // track1={}
               // track2={}
               // track3={}
               // track4={}
               // track5={}
               pageBackgroundColor={'lightyellow'}
               backgroundColor={'skyblue'}
               border={'black 2px solid'}
               backCoverImage={SchubasBack}
               />
    </div>           
      
)
}