import './home.css';
import adel from './../../assets/adel.jpg'

export default function Home(){
    return(
        <div id="home">
            <div className="me">
                <h1>My name is BOURAS ADEL</h1>
                <p>&emsp;&emsp;Hello, I'm Adel, a passionate software engineer and MERN stack developer. With a strong background in desktop and mobile app development, I specialize in creating innovative solutions using technologies like React and Flutter. I thrive on turning complex problems into simple, elegant solutions, and I love exploring new technologies and pushing the boundaries of what's possible. <br /> <br />
Explore my portfolio to see my work, learn more about my journey, and get in touch if you're interested in collaborating or just want to chat about tech!</p>

            </div>

            <img  src={adel} alt="adel's image" />


        </div>
    )
}