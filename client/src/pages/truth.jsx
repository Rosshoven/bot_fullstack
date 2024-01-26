import AlbumFour from '../components/albumFour';
import TruthCover from '../images/TruthCover.png';
import Truth_Back from '../images/Truth_Back.png';
import FakeSmiles from '../tracks/FakeSmiles.mp3';
import Oval from '../tracks/Oval.mp3';
import October from '../tracks/October.mp3';
import Addict from '../tracks/Addict.mp3';

export default function Truth () {

    return (
        <>
            <AlbumFour 
                image={TruthCover} 
                description={`Truth and Lies Album Cover`} 
                songTitle1={`Fake Smiles`}
                songTitle2={`The Oval Office`}
                songTitle3={`October Circle`}
                songTitle4={`The Addict`}
                // songTitle5={`Run (from the city)`}
                track1={FakeSmiles}
                track2={Oval}
                track3={October}
                track4={Addict}
                // track5={RunLive}
                pageBackgroundColor={'black'}
                backgroundColor={'black'}
                border={'hotpink 2px solid'}
                color={'white'}
                backCoverImage={Truth_Back}
                audioBorder={'solid 2px hotpink'}
                coverBorder={'solid 2px hotpink'}
            />
        </>

    )

}