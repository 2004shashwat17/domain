import React, { useState, useEffect } from 'react';
import './ColorMatching.css';

const stories = [
  {
    // title: 'Cyber Awareness',
    videoUrl: 'https://www.youtube.com/embed/yiKeLOKc1tw',
    modes: {
      easy: [
        { question: 'What is phishing?', options: ['Deception', 'A secure website', 'A type of fish', 'None'], correct: 'Deception' },
        { question: 'What does a strong password include?', options: ['Just letters', 'Just numbers', 'Both letters and numbers', 'None'], correct: 'Both letters and numbers' },
        { question: 'Which of the following is an example of personal information?', options: ['Your name', 'A pet’s name', 'A general fact', 'A story title'], correct: 'Your name' },
        { question: 'What should you do if you receive a suspicious email?', options: ['Click on the link', 'Ignore it', 'Report it', 'Reply to it'], correct: 'Report it' },
        { question: 'What is antivirus software used for?', options: ['Making websites', 'Securing data', 'Speeding up a computer', 'Removing malware'], correct: 'Removing malware' },
      ],
      medium: [
        { question: 'Which is a common phishing tactic?', options: ['Offering prizes', 'Sending helpful information', 'Giving compliments', 'None'], correct: 'Offering prizes' },
        { question: 'Which is more secure?', options: ['Password123', 'YourName123', 'Random characters', 'Your birth date'], correct: 'Random characters' },
        { question: 'What is 2FA?', options: ['Two Finger Authentication', 'Two Factor Authentication', 'Second Finger Authentication', 'None'], correct: 'Two Factor Authentication' },
        { question: 'How often should you update your passwords?', options: ['Never', 'Every few months', 'Daily', 'When you remember'], correct: 'Every few months' },
        { question: 'What should you look for in a secure website?', options: ['HTTP', 'HTTPS', 'HTP', 'None'], correct: 'HTTPS' },
      ],
      hard: [
        { question: 'What is a VPN?', options: ['Virtual Private Network', 'Very Private Network', 'Virtual Public Network', 'None'], correct: 'Virtual Private Network' },
        { question: 'What is a common sign of phishing?', options: ['Grammatical errors', 'High-quality graphics', 'Personalized greeting', 'Correct spelling'], correct: 'Grammatical errors' },
        { question: 'What is a data breach?', options: ['Safe sharing', 'Unauthorized access', 'A broken computer', 'Public announcement'], correct: 'Unauthorized access' },
        { question: 'What does "encryption" mean?', options: ['Encoding information', 'Deleting files', 'Accessing a network', 'None'], correct: 'Encoding information' },
        { question: 'Which protocol is used for secure data transmission?', options: ['FTP', 'HTTP', 'HTTPS', 'SMTP'], correct: 'HTTPS' },
      ],
    },
  },
  {
    // title: 'Good Touch/Bad Touch',
    videoUrl: 'https://www.youtube.com/embed/TmxCvx2D2B8',
    modes: {
      easy: [
        { question: 'What is a safe touch?', options: ['Touching your own body', 'Touching others without permission', 'Hitting', 'None'], correct: 'Touching your own body' },
        { question: 'Who should you tell if someone makes you uncomfortable?', options: ['A friend', 'An adult you trust', 'A stranger', 'No one'], correct: 'An adult you trust' },
        { question: 'What is a private part?', options: ['Your hand', 'Your face', 'Areas covered by a swimsuit', 'Your foot'], correct: 'Areas covered by a swimsuit' },
        { question: 'Is it okay to say "no" to an adult?', options: ['Yes, if you feel unsafe', 'No, never', 'Only to friends', 'Only to strangers'], correct: 'Yes, if you feel unsafe' },
        { question: 'What should you do if someone touches you inappropriately?', options: ['Keep quiet', 'Run and tell an adult', 'Do nothing', 'Hide'], correct: 'Run and tell an adult' },
      ],
      medium: [
        { question: 'What should you do if someone asks you to keep a secret about an uncomfortable touch?', options: ['Keep it', 'Tell a trusted adult', 'Forget about it', 'Tell a friend'], correct: 'Tell a trusted adult' },
        { question: 'What is consent?', options: ['Agreeing to something', 'Disagreeing', 'A type of touch', 'A law'], correct: 'Agreeing to something' },
        { question: 'What should you say if someone asks to see your private parts?', options: ['Okay', 'No', 'Maybe', 'Later'], correct: 'No' },
        { question: 'Who can see your private parts?', options: ['Parents, doctors, or trusted adults', 'Everyone', 'Friends', 'Strangers'], correct: 'Parents, doctors, or trusted adults' },
        { question: 'Is it okay to touch someone else without asking?', options: ['No', 'Yes', 'Sometimes', 'If they ask'], correct: 'No' },
      ],
      hard: [
        { question: 'What should you do if someone touches you and says it’s a game?', options: ['Play along', 'Say no and tell a trusted adult', 'Keep quiet', 'Join in'], correct: 'Say no and tell a trusted adult' },
        { question: 'What does it mean if a touch makes you feel bad or uncomfortable?', options: ['It’s a bad touch', 'It’s a good touch', 'Ignore it', 'It’s fine'], correct: 'It’s a bad touch' },
        { question: 'What should you do if someone touches you and tells you not to tell anyone?', options: ['Keep quiet', 'Tell a trusted adult immediately', 'Wait and see', 'Tell a friend'], correct: 'Tell a trusted adult immediately' },
        { question: 'Who should you go to for help if you feel unsafe?', options: ['A trusted adult', 'A stranger', 'A friend', 'No one'], correct: 'A trusted adult' },
        { question: 'What is the best way to keep yourself safe?', options: ['Be aware of your surroundings', 'Ignore warnings', 'Stay alone', 'Trust everyone'], correct: 'Be aware of your surroundings' },
      ],
    },
  },
  {
    // title: 'Safety Rules',
    videoUrl: 'https://www.youtube.com/embed/aT61nwd5U-s',
    modes: {
      easy: [
        { question: 'What should you do when crossing the road?', options: ['Run', 'Look both ways', 'Ignore signals', 'Close your eyes'], correct: 'Look both ways' },
        { question: 'What do you do if a stranger offers you candy?', options: ['Take it', 'Run away', 'Ignore', 'Say thank you'], correct: 'Run away' },
        { question: 'What should you wear while riding a bike?', options: ['Helmet', 'Sandals', 'Hat', 'None'], correct: 'Helmet' },
        { question: 'Why should you never talk to strangers?', options: ['They might be bad people', 'They’re nice', 'They might help you', 'They’re funny'], correct: 'They might be bad people' },
        { question: 'What do you do if you get lost?', options: ['Panic', 'Find a police officer or trusted adult', 'Run away', 'Hide'], correct: 'Find a police officer or trusted adult' },
      ],
      medium: [
        { question: 'What is the first thing you do in an emergency?', options: ['Call 911 or local emergency services', 'Run', 'Scream', 'Hide'], correct: 'Call 911 or local emergency services' },
        { question: 'What should you do if you see someone hurt?', options: ['Help them yourself', 'Call for help', 'Ignore them', 'Run away'], correct: 'Call for help' },
        { question: 'Where should you keep sharp objects?', options: ['In a safe place', 'On the floor', 'Under your bed', 'In your pocket'], correct: 'In a safe place' },
        { question: 'What should you do if you smell smoke?', options: ['Investigate yourself', 'Find the source', 'Run', 'Leave the building and call for help'], correct: 'Leave the building and call for help' },
        { question: 'Why should you never play with fire?', options: ['It’s fun', 'It’s dangerous', 'It’s a game', 'It’s warm'], correct: 'It’s dangerous' },
      ],
      hard: [
        { question: 'What is the safest way to leave a burning building?', options: ['Use the elevator', 'Jump out the window', 'Walk through the smoke', 'Use the stairs and stay low'], correct: 'Use the stairs and stay low' },
        { question: 'What should you do if someone is choking?', options: ['Call for help', 'Ignore it', 'Pat their back gently', 'Offer them water'], correct: 'Call for help' },
        { question: 'What is the best way to avoid an accident while cooking?', options: ['Leave the stove unattended', 'Follow safety guidelines', 'Wear loose clothing', 'Use high heat'], correct: 'Follow safety guidelines' },
        { question: 'What should you do before using any electrical appliance?', options: ['Check for damages', 'Plug it in', 'Turn it on', 'Ignore it'], correct: 'Check for damages' },
        { question: 'What should you do if you find a gun?', options: ['Pick it up', 'Tell an adult immediately', 'Play with it', 'Ignore it'], correct: 'Tell an adult immediately' },
      ],
    },
  },
  {
    // title: 'Personal Hygiene',
    videoUrl: 'https://www.youtube.com/embed/D5BtnvQqbWs',
    modes: {
      easy: [
        { question: 'How often should you brush your teeth?', options: ['Once a day', 'Twice a day', 'Weekly', 'Monthly'], correct: 'Twice a day' },
        { question: 'Why is it important to wash your hands before eating?', options: ['To stay clean', 'To look good', 'For fun', 'No reason'], correct: 'To stay clean' },
        { question: 'What should you do after using the restroom?', options: ['Wash your hands', 'Nothing', 'Run away', 'Eat a snack'], correct: 'Wash your hands' },
        { question: 'How often should you bathe?', options: ['Every day', 'Weekly', 'Monthly', 'When you feel like it'], correct: 'Every day' },
        { question: 'Why should you trim your nails?', options: ['For hygiene', 'For fashion', 'To grow longer', 'No reason'], correct: 'For hygiene' },
      ],
      medium: [
        { question: 'Why is it important to cover your mouth when you cough?', options: ['To protect others', 'To make noise', 'To look cool', 'No reason'], correct: 'To protect others' },
        { question: 'What should you do if you have a cut or scrape?', options: ['Leave it', 'Cover it with a bandage', 'Scratch it', 'Ignore it'], correct: 'Cover it with a bandage' },
        { question: 'How often should you change your clothes?', options: ['Daily', 'Weekly', 'Monthly', 'Yearly'], correct: 'Daily' },
        { question: 'What should you use to clean your ears?', options: ['A sharp object', 'A soft cloth or cotton swab', 'Your finger', 'Nothing'], correct: 'A soft cloth or cotton swab' },
        { question: 'Why is it important to drink water?', options: ['To stay hydrated', 'To eat less', 'For fun', 'No reason'], correct: 'To stay hydrated' },
      ],
      hard: [
        { question: 'What is the best way to prevent the spread of germs?', options: ['Wash your hands regularly', 'Ignore hygiene', 'Wear dirty clothes', 'Eat unhealthy food'], correct: 'Wash your hands regularly' },
        { question: 'How often should you clean your ears?', options: ['Daily', 'When they feel dirty', 'Weekly', 'Yearly'], correct: 'Weekly' },
        { question: 'Why is it important to eat fruits and vegetables?', options: ['For vitamins and nutrients', 'For taste', 'To avoid exercise', 'For fun'], correct: 'For vitamins and nutrients' },
        { question: 'What should you do if you feel sick?', options: ['Rest and seek medical advice', 'Ignore it', 'Continue with activities', 'Hide it'], correct: 'Rest and seek medical advice' },
        { question: 'How can you keep your teeth healthy?', options: ['Brush, floss, and visit the dentist', 'Ignore them', 'Eat sugary foods', 'Never brush'], correct: 'Brush, floss, and visit the dentist' },
      ],
    },
  },
  {
    // title: 'Good/Bad Habits',
    videoUrl: 'https://www.youtube.com/embed/D5BtnvQqbWs',
    modes: {
      easy: [
        { question: 'What is a good habit?', options: ['Brushing your teeth', 'Eating junk food', 'Lying', 'Ignoring rules'], correct: 'Brushing your teeth' },
        { question: 'What is a bad habit?', options: ['Biting your nails', 'Exercising', 'Helping others', 'Studying'], correct: 'Biting your nails' },
        { question: 'What should you do after you wake up?', options: ['Make your bed', 'Go back to sleep', 'Skip breakfast', 'Watch TV'], correct: 'Make your bed' },
        { question: 'What is a good way to start your day?', options: ['With breakfast', 'Skipping meals', 'Staying in bed', 'Being late'], correct: 'With breakfast' },
        { question: 'What is a sign of good behavior?', options: ['Helping others', 'Interrupting', 'Ignoring chores', 'Being rude'], correct: 'Helping others' },
      ],
      medium: [
        { question: 'What should you do when you see trash on the ground?', options: ['Pick it up', 'Walk past it', 'Throw more trash', 'Ignore it'], correct: 'Pick it up' },
        { question: 'How often should you exercise?', options: ['Daily', 'Never', 'Monthly', 'Yearly'], correct: 'Daily' },
        { question: 'What should you do if you make a mistake?', options: ['Own up to it', 'Blame others', 'Hide it', 'Ignore it'], correct: 'Own up to it' },
        { question: 'Why is it important to be punctual?', options: ['Shows responsibility', 'Is fun', 'Is unnecessary', 'For no reason'], correct: 'Shows responsibility' },
        { question: 'What is a good way to relax?', options: ['Read a book', 'Watch TV all day', 'Eat junk food', 'Stay up late'], correct: 'Read a book' },
      ],
      hard: [
        { question: 'Why is it important to keep promises?', options: ['Builds trust', 'Is fun', 'Is unnecessary', 'No reason'], correct: 'Builds trust' },
        { question: 'What should you do if someone is rude to you?', options: ['Stay calm and polite', 'Be rude back', 'Ignore it', 'Yell'], correct: 'Stay calm and polite' },
        { question: 'What is a sign of bad behavior?', options: ['Lying', 'Helping others', 'Being kind', 'Being punctual'], correct: 'Lying' },
        { question: 'What is a good way to show respect?', options: ['Listening to others', 'Interrupting', 'Being silent', 'Ignoring them'], correct: 'Listening to others' },
        { question: 'Why is it important to share?', options: ['Builds friendships', 'Is unnecessary', 'Shows weakness', 'For no reason'], correct: 'Builds friendships' },
      ],
    },
  },
];

const ColorMatching = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [difficulty, setDifficulty] = useState('easy');
  const [videoEnded, setVideoEnded] = useState(false); // New state to track if video ended

  useEffect(() => {
    // Load YouTube IFrame API
    const loadYouTubeAPI = () => {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };

    loadYouTubeAPI();

    // This function will be called by the YouTube API once the video is done
    window.onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player('youtube-player', {
        height: '390',
        width: '640',
        videoId: stories[currentStory].videoUrl.split('/').pop(),
        events: {
          'onStateChange': onPlayerStateChange
        }
      });
    };

    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.ENDED) {
        setVideoEnded(true); // Video ended, show questions
      }
    };
  }, [currentStory]); // Re-run when currentStory changes

  const handleAnswer = (selectedOption) => {
    const correctAnswer = stories[currentStory].modes[difficulty][currentQuestion].correct;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question or story
    if (currentQuestion < stories[currentStory].modes[difficulty].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentStory < stories.length - 1) {
      setCurrentStory(currentStory + 1);
      setCurrentQuestion(0);
      setVideoEnded(false); // Reset video ended state for the next story
    } else {
      alert(`Game Over! Your score: ${score}/${stories.length * 5}`);
    }
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
    setCurrentQuestion(0);
    setScore(0);
    setVideoEnded(false); // Reset when changing difficulty
  };

  return (
    <div className="game-container">
      <h1>{stories[currentStory].title}</h1>

      <div className="video-text">

        <h2> 💫 STORY MODE 💫 </h2>
    <p>Instructions : 🕹️</p>
    <p>🏹 Learn From the Vedio and Answer the Questions ? </p>
  </div>

      <div id="youtube-player"></div> {/* YouTube player will be rendered here */}
      {videoEnded && ( // Render questions only if the video has ended
        <div className="quiz-container">
          <h2>{stories[currentStory].modes[difficulty][currentQuestion].question}</h2>
          <div className="options">
            {stories[currentStory].modes[difficulty][currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="score">
        Current Score: {score}
      </div>
    </div>
  );
};

export default ColorMatching;
