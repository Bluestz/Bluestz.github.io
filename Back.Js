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
const quiz2= document.getElementById('quiz2')
const quiz3= document.getElementById('quiz3')
const answerEls = document.querySelectorAll('.answer')
const answerEs = document.querySelectorAll('.answer2')
const answerE3 = document.querySelectorAll('.answer3')
const questionEl = document.getElementById('question')
const questionl = document.getElementById('question2')
const question2 = document.getElementById('question3')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const fir_text = document.getElementById('1_text')
const sec_text = document.getElementById('2_text')
const thir_text = document.getElementById('3_text')
const four_text = document.getElementById('4_text')
const q_text = document.getElementById('q_text')
const w_text = document.getElementById('w_text')
const e_text = document.getElementById('e_text')
const r_text = document.getElementById('r_text')
const submitBtn = document.getElementById('submit')
const submitBtn2 = document.getElementById('submit2')
const submitBtn3 = document.getElementById('submit3')
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
let currentQuiz1 = 0
let score1 = 0
loadQuiz2()
function loadQuiz2() {
    deselectAnswers2()
    const currentQuizData2 = quizData2[currentQuiz1]
    questionl.innerText = currentQuizData2.question
    fir_text.innerText = currentQuizData2.a
    sec_text.innerText = currentQuizData2.b
    thir_text.innerText = currentQuizData2.c
    four_text.innerText = currentQuizData2.d
 }
 function deselectAnswers2() {
    answerEs.forEach(answerE => answerE.checked = false)
 }
 function getSelected1() {
    let answer1
    answerEs.forEach(answerEl => {
        if(answerEl.checked) {
            answer1 = answerEl.id
        }
    })
    return answer1
 }
 submitBtn2.addEventListener('click', () => {
    const answer2 = getSelected1()
    if(answer2) {
       if(answer2 === quizData2[currentQuiz1].correct) {
           score++
       }
       currentQuiz1++
       if(currentQuiz1 < quizData2.length) {
           loadQuiz2()
       } else {
           quiz2.innerHTML = `
           <h2>You answered ${score}/${quizData2.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
 })

 loadQuiz3()
 function loadQuiz3() {
    deselectAnswers3()
    const currentQuizData3 = quizData3[currentQuiz]
    question2.innerText = currentQuizData3.question
    q_text.innerText = currentQuizData3.a
    w_text.innerText = currentQuizData3.b
    e_text.innerText = currentQuizData3.c
    r_text.innerText = currentQuizData3.d
 }
 function deselectAnswers3() {
    answerE3.forEach(answerW => answerW.checked = false)
 }
 function getSelected3() {
    let answer
    answerE3.forEach(answer3 => {
        if(answer3.checked) {
            answer = answer3.id
        }
    })
    return answer
 }
 submitBtn3.addEventListener('click', () => {
    const answer3 = getSelected3()
    if(answer3) {
       if(answer3 === quizData3[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData3.length) {
           loadQuiz3()
       } else {
           quiz3.innerHTML = `
           <h2>You answered ${score}/${quizData3.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
 })