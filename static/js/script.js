// Example POST method implementation:
async function postData(url = "", data = {}) {
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(data),
    
      body: JSON.stringify(data),
    });
    return response.json(); 
  }
  

sendButton.addEventListener("click", async () =>{
    
    questionInput = document.getElementById("questionInput").value;
    document.getElementById("questionInput").value = "";

    document.querySelector(".right2").style.display = "block";
    document.querySelector(".right1").style.display = "none";

    question.innerHTML = questionInput;

    // get the answer and show it
    let result = await postData("/api", {"question": questionInput})
    solution.innerHTML = result.result


})