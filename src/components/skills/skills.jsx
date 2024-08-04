import './skills.css'
import cpp from './../../assets/languages/c++.png';
import python from './../../assets/languages/python.png';
import js from './../../assets/languages/js.png';
import java from './../../assets/languages/java.png';
import flutter from './../../assets/frameworks/flutter.png';
import vue from './../../assets/frameworks/vue.png';
import react from './../../assets/frameworks/react.png';
import angular from './../../assets/frameworks/angular.png';
import premiere from './../../assets/tools/premiere.png';
import after from './../../assets/tools/after.png';
import photoshop from './../../assets/tools/photoshop.png';
import illustrator from './../../assets/tools/illustrator.png';
import latex from './../../assets/tools/latex.png';
import word from './../../assets/tools/word.png';
import exel from './../../assets/tools/excel.png';
import powerpoint from './../../assets/tools/powerpoint.png';






export default function Skills(){
    return(
        <div id="skills">
            <h1>Programing languages</h1>
            <br />
            <div className='langs'>
                <img src={cpp} alt="c++" />
                <img src={java} alt="java" />
                <img src={python} alt="python" />
                <img src={js} alt="js" />
            </div>
            <h1>Librabries and framework</h1>
            <br />
            <div className='langs'>
                <img src={react} alt="react" />
                <img src={angular} alt="angular" />
                <img src={vue} alt="vue" />
                <img src={flutter} alt="flutter" />
            </div>
            <h1>tools</h1>
            <br />
            <div className='langs'>
                <img src={premiere} alt="premier" />
                <img src={after} alt="after effect" />
                <img src={photoshop} alt="photoshop" />
                <img src={illustrator} alt="illustrator" />
                <img src={latex} alt="latex" />
                <img src={powerpoint} alt="powerpoint" />
                <img src={word} alt="word" />
                <img src={exel} alt="excel" />

            </div>
        </div>
    )
}