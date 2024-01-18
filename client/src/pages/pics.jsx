import Pic_1 from '../images/Pic_1.jpeg';
import Pic_2 from '../images/Pic_2.jpeg';
import Pic_3 from '../images/Pic_3.jpeg';
import Pic_4 from '../images/Pic_4.jpeg';
import Pic_5 from '../images/Pic_5.jpeg';
import Pic_6 from '../images/Pic_6.jpeg';
import C_A from '../images/C_A.jpeg';
import Co from '../images/Co.jpeg';
// import Pic_OTS from '../images/Pic_OTS.jpeg';
import Pic_Police from '../images/Pic_Police.JPG';
import Pic_Red_Lion from '../images/Pic_Red_Lion.JPG';
import Pic_SubT from '../images/Pic_SubT.JPG';
import Pic_SubT_2 from '../images/Pic_SubT_2.JPG';
import Logo_Pink from '../images/Logo_Pink.png';
import PhotoCarousel from '../components/carousel';


export default function Pics() {
  
  const images = [
      `${Pic_1}`,
      `${Pic_2}`,
      `${Pic_3}`,
      `${Pic_4}`,
      `${Pic_5}`,
      `${Pic_6}`,
      `${C_A}`,
      `${Co}`,
      `${Pic_Police}`,
      `${Pic_Red_Lion}`,
      `${Pic_SubT}`,
      `${Pic_SubT_2}`,
    ];

  const Background = {
        backgroundImage: `url(${Logo_Pink})`,
        backgroundSize: '10%',
        width: '100%',
        height: '120vh',
        margin: '5rem auto', 
        opacity: '',
        filter: 'grayscale(20%) sepia(10%) contrast(100%) brightness(90%)',
        // padding: '0',
      };
      

      return (
        <div className="app" style={Background}>
          <PhotoCarousel images={images}
            title={'Boys On Trial'}/>
        </div>
      );
};