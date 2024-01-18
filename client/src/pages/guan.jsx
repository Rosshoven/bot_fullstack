import Album from "../components/album";
import GuanCov from '../images/GuanCov.jpg';
import GuanBack from '../images/GuanBack.JPG'


export default function Guan() {

    return (
        <>
            <Album image={GuanCov}
            backgroundColor={'black'}
            backCoverImage={GuanBack}
            pageBackgroundColor={'#d92c'}
            />
        </>
    )

}