import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";


const Home = () => {
  const backgroundImages = [
    require('../assets/controller.avif'),
    require('../assets/controller3.jpg'),
  ];
  const {user , loginWithRedirect, isAuthenticated, logout} = useAuth0();
  console.log("Current user", user);

  const [showChat, setShowChat] = useState(false);
  // const [showPopup, setShowPopup] = useState(true);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [isSpeciallyAbled, setIsSpeciallyAbled] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [filteredGames, setFilteredGames] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("all");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const games = [
    { name: "Memory Match🎯", path: "/memory-match", type: "normal", forSpecial: true },
    { name: "Shape Sorter🥙", path: "/shape-sorter", type: "normal", forSpecial: false },
    { name: "Social Awareness🚀", path: "/color-quiz", type: "normal", forSpecial: false },
    { name: "Number Sequencing⚙️", path: "/puzzle-game", type: "normal", forSpecial: true },
    { name: "Pong Game🧩", path: "/math-game", type: "normal", forSpecial: false },
    { name: "Maze Game🌽", path: "/maze", type: "normal", forSpecial: false },
    { name: "SoundBoard 🎼", path: "/soundboard", type: "special", forSpecial: true },
    { name: "Tic Tac Toe 🎫", path: "/word-search", type: "normal", forSpecial: false },
    { name: "Sign Language💌", path: "/letter", type: "special", forSpecial: true },
    { name: "Hand Writing🅰️", path: "/building", type: "special", forSpecial: true },
    { name: "Sound Identification🔊", path: "/sound", type: "special", forSpecial: true },
  ];
  
  const buyFunction = async () => {
    try {
      const response = await axios.post('https://domain-mnmb.onrender.com/payment');
      if (response.status === 200) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  useEffect(() => {
    const sortedGames = games
      .filter((game) => {
        if (sortCriteria === "all") return true;
        if (sortCriteria === "children" && game.type === "normal") return true;
        if (sortCriteria === "special") {
          // Show all "special" games and the ones marked for special children
          return game.type === "special" || game.forSpecial;
        }
        return false;
      })
      .sort((a, b) => {
        if (sortCriteria === "special" && a.type === "normal") return 1;
        if (sortCriteria === "special" && b.type === "normal") return -1;
        return 0;
      });
  
    setFilteredGames(sortedGames);
  }, [sortCriteria]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000); // changes image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && gender && isSpeciallyAbled !== "" && termsAccepted) {
      // setShowPopup(false);
      // Save profile data to local storage
      const profileData = { name, age, gender, isSpeciallyAbled };
      localStorage.setItem("profile", JSON.stringify(profileData));
      // Save the registration timestamp
      const now = new Date().getTime();
      localStorage.setItem("registrationTimestamp", now);
      // Filter games based on isSpeciallyAbled value
      const sortedGames = games.filter((game) => {
        if (isSpeciallyAbled === "yes" && game.type === "normal") return false;
        if (isSpeciallyAbled === "no" && game.type === "special") return false;
        return true;
      });
      setFilteredGames(sortedGames);
      // Navigate to profile section
      navigate("/profile");
    } else {
      alert("Please fill all the fields and accept the terms.");
    }
  };

//  const toggleChat = () => {
//     setShowChat(!showChat);
//   };
  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };
  // Premium Content Carousel State
 const [activeSlide, setActiveSlide] = useState(0);

  const subscriptionOptions = [
    {
      title: "Yearly Subscription",
      description: "Access all premium Games for a year.",
      price: "₹2500/year",
    }
  ];
  return (
    <div className="home">
      <header>
        <nav className="header-nav">
          <Link to="/about" className="about-button">
            MoreInfo 🪶
          </Link>
          <div className="header-rewards">
            <Link to="/reward" className="about-button">
              Rewards🎁
            </Link>
            <Link to="/score" className="about-button">
              Score🪙
            </Link>
          </div>
          <Link to="/report" className="about-button weekly-report-button">
            WeeklyReports🔁
          </Link>
          {isAuthenticated && <h3>Hello {user.name}</h3>}
          {isAuthenticated ? 
            <button onClick={(e) => logout()}>Logout</button> : <button 
            onClick={(e) => loginWithRedirect()} 
             style={{ padding: '12px 24px', fontSize: '16px', borderRadius: '8px', cursor: 'pointer' }}
           >
           Login
           </button>
          }
        
          {/* Profile Icon */}
          {/* <Link to="/profile" className="profile-icon"> */}
          {/* <Link className="profile-icon">
            <svg
              width="70"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="purple" />
              <path
                fill="white"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6z"
              />
            </svg>
          </Link> */}
        </nav>
        <h1>
          <i>Brain Domain🧠</i>
        </h1>
      </header>
      <br />
      <section className="header2">
  <nav className="header-nav2">
    <div className="header-rewards2">
      <br />
      <Link to="https://www.education.com/worksheets/civics-government/" className="about-button2">Worksheets 📝</Link>
      {/* <Link to="/reward" className="about-button2">More Games🎯</Link> */}
      {/* <Link to="/score" className="about-button2">Lesson Plans🪙</Link> */}
      <Link to="https://www.goodhousekeeping.com/home/craft-ideas/g1389/diy-kids-activities/" className="about-button2">Activities😶‍🌫️</Link>
      <Link to="https://socialwelfare.tripura.gov.in/sites/default/files/Activity%20Book%20for%203-4%20years%20Children.pdf" className="about-button2">Work Books📔</Link>
      <Link to="https://www.parents.com/exercises-for-kids-8642585" className="about-button2">Exercise⛹🏻‍♂️</Link>
      <br />
      <Link to="https://www.freechildrenstories.com/kids-stories" className="about-button2">Story💫</Link>
      <br />
      <Link to="https://learnenglishkids.britishcouncil.org/listen-watch/songs" className="about-button2">Song🎶</Link>
    </div>
  </nav>
</section>
      <br />
      <main
      className="main"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <i>
        <b>
          👇🏻Challenges your creative minds to conceptualize and develop unique
          mindsets across 5-10 years of children 👇🏻
        </b>
      </i>
      <br />
      <br />
      <b>
        ```It is dedicated to helping children from playing mindless,
        brain-draining
      </b>
      <br />
      <b>
        video games to engaging in activities that challenge and strengthen
        their minds```
      </b>
      <br />
      <br />
      <i>
        <b>
          Our games are designed to boost cognitive skills, enhance
          problem-solving abilities and promote healthy brain development in a
          fun and interactive way.🎰
        </b>
      </i>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
      <br />
      <div className="sorting-bar">
          <label htmlFor="sort-options">Sort By:</label>
          <select id="sort-options" value={sortCriteria} onChange={handleSortChange}>
            <option value="all">All Games</option>
            <option value="children">For Child</option>
            <option value="special"> For Special Child</option>
          </select>
        </div>
        <div className="game-grid">
  {filteredGames.map((game, index) => (
    <div className="game-item" key={index}>
      {game.name === "Sign Language💌" || game.name === "Tic Tac Toe 🎫" || game.name === "Pong Game🧩" || game.name === "SoundBoard 🎼" ? (
        <div
          className="game-link"
          onClick={() => {
            const externalLink =
              game.name === "Sign Language💌"
                ? "http://localhost:8501/" // Replace with the actual link for Sign Language
                : game.name === "Tic Tac Toe 🎫"
                ? "https://xoomgame.netlify.app/" // Replace with the actual link for Tic Tac Toe
                : game.name === "Pong Game🧩"
                ? "https://pongggg.netlify.app/" // Replace with the actual external link for Pong Game
                : "https://rococo-croquembouche-15610e.netlify.app"; // Replace with the actual external link for SoundBoard 🎼
            window.open(externalLink, "_blank");
          }}
          style={{ cursor: "pointer" }}
        >
          <div className="game-name">{game.name}</div>
        </div>
      ) : (
        <Link
          to={game.path}
          className={`game-link ${game.path.substring(1)}`}
        >
          <div className="game-name">{game.name}</div>
        </Link>
      )}
    </div>
  ))}
</div>

      {/* Premium Content Section */}
      <section className="premium-content">
  <h2>SUBSCRIPTIONS®️</h2>
  <div className="carousel">
    <button 
      onClick={buyFunction} 
      style={{
        height : '110px',
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 50px',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '30px',
        marginBottom: '20px'
      }}
    >
      Buy Now
    </button>

    {subscriptionOptions.map((option, index) => (
      <div
        key={index}
        className={`carousel-item ${index === activeSlide ? "active" : ""}`}
      >
        <h3>{option.title}</h3>
        <p>{option.description}</p>
        <span>{option.price}</span>
      </div>
    ))}
  </div>
</section>

      <footer>
        <div className="footer-content">
          <p>© 2024 Brain Boost Games. All rights reserved.</p>
          <h2>
            <i>Brain Domain🧠</i>
          </h2>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/shashwats500/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/shashwat-singh-68b241235/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <br />
          <br />
        </div>
        <div className="seminar">
        <a
          href="https://www.itu.int/en/ITU-T/Workshops-and-Seminars/2024/0130/Pages/default.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="seminar-button">Weekly (WHO) Seminar🚀</button>
        </a>
      </div>
      </footer>
    </div>
  );
};

export default Home;
