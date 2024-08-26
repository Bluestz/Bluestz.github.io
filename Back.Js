const quizData = [
   {
       question: "What is cybersecurity?",
       a: "a) The practice of protecting your physical home",
       b: "b) The use of strong passwords",
       c: "c) The practice of protecting computers, networks, and data from unauthorized access and attacks",
       d: "d) The study of internet laws",
       correct: "c",
   },
   {
       question: "Why is cybersecurity important?",
       a: "a) It ensures your devices never run out of battery",
       b: "b) It helps protect sensitive data from cyber threats",
       c: "c) It speeds up your internet connection",
       d: "d) It improves software design",
       correct: "b",
   },
   {
       question: "Which of the following is a common form of cyber threat?",
       a: "a) Malware",
       b: "b) GPS signals",
       c: "c) Social media posts ",
       d: "d) Weather reports",
       correct: "a",
   },
   {
       question: "What can happen if your data is not properly protected?",
       a: "a) Your device's battery life increases",
       b: "b) You might experience identity theft or financial loss",
       c: "c) Your internet speed becomes faster",
       d: "d) Your apps stop working",
       correct: "b",
   },
];

const quizData2 =[
    {
        question: "What is data privacy?",
        a: "a) Keeping your browsing history visible to everyone",
        b: "b) Protecting personal information from unauthorized access",
        c: "c) Sharing your passwords with friends",
        d: "d) Disabling two-factor authentication",
        correct: "b",
    },
    {
        question: "What should you look for in a URL to ensure a secure connection?",
        a: "a) http://",
        b: "b) www.",
        c: "c) https://",
        d: "d) .com",
        correct: "c",
    },
    {
        question: "What is a recommended habit for safe browsing?",
        a: "a) Clicking on all pop-up ads",
        b: "b) Using the same password for all accounts",
        c: "c) Regularly updating your browser and using ad blockers",
        d: "d) Disabling your antivirus software",
        correct: "c",
    },
    {
        question: "What should you do if you receive a suspicious email?",
        a: "a) Click on all the links immediately",
        b: "b) Forward it to your contacts",
        c: "c) Delete it without clicking on any links or downloading attachments",
        d: "d) Reply with your personal information",
        correct: "c",
    },
];

const quizData3 = [
    {
        question: "Which is a good security habit?",
        a: "a) Using the same password for all accounts",
        b: "b) Enabling two-factor authentication",
        c: "c) Ignoring software updates",
        d: "d) Writing down passwords on sticky notes",
        correct: "b",
    },
    {
        question: "How can you protect your mobile device from cyber threats?",
        a: "a) Only download apps from trusted sources like the Google Play Store or Apple App Store",
        b: "b) Disable your device's lock screen",
        c: "c) Use public Wi-Fi without precautions",
        d: "d) Avoid updating your apps",
        correct: "a",
    },
    {
        question: "Why is it important to stay informed about cybersecurity?",
        a: "a) To be aware of the latest dance trends",
        b: "b) To understand the latest cybersecurity threats and best practices",
        c: "c) To get discounts on software",
        d: "d) To follow the latest celebrity gossip",
        correct: "b",
    },
    {
        question: "What is one way to secure your mobile device in case it gets lost or stolen?",
        a: "a) Enable a remote wipe feature to erase your data",
        b: "b) Turn off location services",
        c: "c) Leave your device unlocked",
        d: "d) Share your passwords with friends",
        correct: "a",
    },
 ];




const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
   deselectAnswers()
   const currentQuizData = quizData[currentQuiz]
   questionEl.innerText = currentQuizData.question
   a_text.innerText = currentQuizData.a
   b_text.innerText = currentQuizData.b
   c_text.innerText = currentQuizData.c
   d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
   answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
   let answer
   answerEls.forEach(answerEl => {
       if(answerEl.checked) {
           answer = answerEl.id
       }
   })
   return answer
}
submitBtn.addEventListener('click', () => {
   const answer = getSelected()
   if(answer) {
      if(answer === quizData[currentQuiz].correct) {
          score++
      }
      currentQuiz++
      if(currentQuiz < quizData.length) {
          loadQuiz()
      } else {
          quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Reload</button>
          `
      }
   }
})