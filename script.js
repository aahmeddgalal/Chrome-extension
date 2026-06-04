let myLeads = []
const inputEl = document.getElementById("inputField")
const inputBtn = document.getElementById("sendButton")

inputBtn.addEventListener("click", function() {
    let lead = inputEl.value.trim()
    if (lead == "") {
        const output = document.getElementById("output").innerText
        output = "Invalid"
        return
    }
    
    myLeads.push(lead)
    console.log(`${lead} was added to  your leads`)

    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a href="${myLeads[i]}" target = "_  blank">${myLeads[i]}</a></li>`
    } 
    document.getElementById("output").innerHTML = listItems
    inputEl.value = ""
})



const li = document.createElement("li")
li.textContent = myLeads[i]
useCallback.append(li) 


// www.awesonmelead.com