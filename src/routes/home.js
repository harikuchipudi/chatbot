import React from 'react';
import "../styles/homeStyles.css"; // Import your CSS file
import arugula from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/arugula.jpg";
import basil from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/basil.jpeg";
import beetroot from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/beetroot.jpeg";
import bellpepper from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/bell pepper.jpeg";
import brocoli from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/brocoli.jpeg";
import brussel_sprouts from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/brussel sprouts.jpeg";
import carrots from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/carrots.jpeg";
import cauliflower from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/cauliflower.jpg";
import cilantro from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/cilantro.jpg";
import cucumber from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/cucumber.jpeg";
import garlic from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/garlic.jpeg";
import kale from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/kale.jpeg";
import onions from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/onions.jpeg"
import parseley from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/parseley.jpg";
import potatoes from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/potatoes.jpeg";
import shallots from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/shallots.jpeg";
import spinach from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/spinach.jpeg";
import tomatoes from "C:/Users/harik/Desktop/projects/chatbot-project/chatbot/src/assets/tomatoes.jpeg";



const menuImages = [
    {"url": arugula, "name":"Arugula", "cost":"6$"},
    {"url": basil, "name":"Basil", "cost": "4$"},
    {"url": beetroot, "name":"Beetroot", "cost":"3$"},
    {"url": bellpepper, "name":"Bell Pepper", "cost":"4$"},
    {"url": brocoli, "name":"Brocoli", "cost":"7$"},
    {"url": brussel_sprouts, "name":"Brussel Sprouts", "cost":"2$"},
    {"url": carrots, "name":"Carrots", "cost":"9$"},
    {"url": cauliflower, "name":"Cauliflower", "cost":"5$"},
    {"url": cilantro, "name":"Cilantro", "cost":"3$"},
    {"url": cucumber, "name":"Cucumber", "cost":"3$"},
    {"url": garlic, "name":"Garlic", "cost":"3$"},
    {"url": kale, "name":"Kale", "cost":"5$"},
    {"url": onions, "name":"Onions", "cost":"6$"},
    {"url": parseley, "name":"Parseley", "cost":"4$"},
    {"url": potatoes, "name":"Potatoes", "cost":"8$"},
    {"url": shallots, "name":"Shallots", "cost":"7$"},
    {"url": spinach, "name":"Spinach", "cost":"4$"},
    {"url": tomatoes, "name":"Tomatoes", "cost":"8$"}

]

function Home() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Organic Vegiess</h1>
          <nav>
            <ul>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#visit">Visit Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className='body-container'>
        <div className='menu-container'>
            <section id="menu">
                <div className="container1">
                <h2>Our Menu</h2>
                <ul className='image-grid'>
                    {menuImages.map((image, index) => (
                    <li key={index}>
                        <img src={image.url} alt={`Menu item ${index + 1}`} />
                        <p>{image.name}</p>
                        <p>cost : {image.cost}</p>
                    </li>
                    ))}
                </ul>
                </div>
            </section>

            <section id="about">
                <div className="container1">
                <h2>About Us</h2>
                <p>At Organic Vegiess, we are committed to providing you with the freshest, healthiest, and most delicious organic vegetables. Located in the heart of Rajahmundry, Andhra Pradesh, we source our produce directly from local organic farms to ensure premium quality and sustainability.</p>
                </div>
            </section>

            <section id="visit">
                <div className="container1">
                <h2>Visit Us</h2>
                <p>Location: 2nd street, Gandhi Nagar, Rajahmundry, Andhra Pradesh</p>
                <p>Operating Hours: 9am to 6pm</p>
                <p>Contact: contact.organicveggies@gmail.com</p>
                </div>
            </section>
        </div>
        <div className='chatbot-container'>
            <h1>Chatbot</h1>
            <div className='chatbot-con'>
            <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/dd008002-922d-4a11-8175-6cb36fd48259"></iframe>
            </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <p>Connect with us on social media:</p>
          <ul>
            <li><a href="[Insert Facebook Page Link Here]">Facebook</a></li>
            <li><a href="[Insert Instagram Link Here]">Instagram</a></li>
            <li><a href="[Insert Twitter Link Here]">Twitter</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;

