let questionCard = document.getElementById('question-card');
let alertTitle = document.querySelector('.alertTitle');

const url = 'http://stack-o-lite.herokuapp.com/api/v1/'


// get all parties
window.onload = () => {


  class displayData {
    // Make an HTTP GET Request 

    async getAll() {
      const questionResponse = await fetch(`${url}questions`);
      const allQuestions = await questionResponse.json();
      const questionData = allQuestions.data;
      //      console.log(questionData);
      //    console.log(allQuestions);
      return {
        questionData
      }
    }
  }


  const showQuestions = new displayData;
  //console.log(showQuestions)
  showQuestions.getAll()
    .then(data => {
      console.log(data)
      questionCard.innerHTML = data.questionData.questions.map((question) => {
        //console.log(question);
        let output = '';
        return output += `<div class="card">
     
                        <h4 id='questionTitle'>${question.questionTitle}</h4>
                        <p class='questionsDescription'>${question.questionDescription}</p>
                        <div class="justify-content-between">
                        <p class='qDate'>Answer: ${question.numberOfAnswers}</p>
                        <p class='qDate'>${question.date}</p>
                        </div>
                        </div>`
      })
    })
  /*
  .catch(err => {
    alertTitle.innerText = 'An error has occured';
  });*/
}