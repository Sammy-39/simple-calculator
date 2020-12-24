var createNewElement = (elementName) =>{
    return document.createElement(elementName)
}

var setAttributes = (elementName,attributeNameValuePair)=>{
    Object.keys(attributeNameValuePair).forEach((attributeName)=>{
        elementName.setAttribute(attributeName,attributeNameValuePair[attributeName])
    })
}
    

var containerElement = createNewElement("div")
setAttributes(containerElement,{
    class:"col-sm-4 offset-sm-4 col-md-4 offset-md-4 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4 mt-5"
})

var tableContainerElement = createNewElement("div")
setAttributes(tableContainerElement,{
    class:"table-responsive-sm table-responsive-md table-responsive-ld table-responsive-xl",
    style:"overflow:visible !important;"
})

var tableElement = createNewElement("table")
setAttributes(tableElement,{
    class:"table table-striped table-dark table-my-style"
})

var inputRowElement = createNewElement("tr")
var inputDataElement = createNewElement("td")
setAttributes(inputDataElement,{colspan:"4"})

var inputDisplayElement = createNewElement("input")
setAttributes(inputDisplayElement,{
    type:"text",
    class:"form-control",
    id:"input-area"
})
inputDisplayElement.addEventListener("keyup",onKeyPress)

var buttonsRowElements = []

for(var i=0;i<5;i++){
    buttonsRowElements[i] = createNewElement("tr")
}

var acButtonElement = createNewElement("td")
setAttributes(acButtonElement,{
    class:"color text-center p-0",
    style:"cursor:pointer"
})
acButtonElement.innerText = "AC"
acButtonElement.addEventListener("click",clearOrRemoveData)

var deleteButtonElement = createNewElement("td")
setAttributes(deleteButtonElement,{
    class:"color text-center p-0",
    style:"cursor:pointer"
})
deleteButtonElement.innerHTML = `<i class="fa fa-eraser" aria-hidden="true"> </i>`
deleteButtonElement.addEventListener("click",clearOrRemoveData)

var modulusButtonElement = createNewElement("td")
setAttributes(modulusButtonElement,{
    class:"color text-center p-0",
    style:"cursor:pointer"
})
modulusButtonElement.innerText = "%"
modulusButtonElement.addEventListener("click",toInput)

var divisionButtonElement = createNewElement("td")
setAttributes(divisionButtonElement,{
    class:"color text-center p-0",
    style:"cursor:pointer"
})
divisionButtonElement.innerText = "/"
divisionButtonElement.addEventListener("click",toInput)

var sevenButtonElement = createNewElement("td")
setAttributes(sevenButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
sevenButtonElement.innerText = "7"
sevenButtonElement.addEventListener("click",toInput)

var eightButtonElement = createNewElement("td")
setAttributes(eightButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
eightButtonElement.innerText = "8"
eightButtonElement.addEventListener("click",toInput)

var nineButtonElement = createNewElement("td")
setAttributes(nineButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
nineButtonElement.innerText = "9"
nineButtonElement.addEventListener("click",toInput)

var multiplyButtonElement = createNewElement("td")
setAttributes(multiplyButtonElement,{
    class:"color text-center p-0",
    style:"cursor:pointer"
})
multiplyButtonElement.innerText = "X"
multiplyButtonElement.addEventListener("click",toInput)

var fourButtonElement = createNewElement("td")
setAttributes(fourButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
fourButtonElement.innerText = "4"
fourButtonElement.addEventListener("click",toInput)

var fiveButtonElement = createNewElement("td")
setAttributes(fiveButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
fiveButtonElement.innerText = "5"
fiveButtonElement.addEventListener("click",toInput)

var sixButtonElement = createNewElement("td")
setAttributes(sixButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
sixButtonElement.innerText = "6"
sixButtonElement.addEventListener("click",toInput)

var subButtonElement = createNewElement("td")
setAttributes(subButtonElement,{
    class:"color text-center p-0",
    style:"cursor:pointer"
})
subButtonElement.innerText = "-"
subButtonElement.addEventListener("click",toInput)

var oneButtonElement = createNewElement("td")
setAttributes(oneButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
oneButtonElement.innerText = "1"
oneButtonElement.addEventListener("click",toInput)

var twoButtonElement = createNewElement("td")
setAttributes(twoButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
twoButtonElement.innerText = "2"
twoButtonElement.addEventListener("click",toInput)

var threeButtonElement = createNewElement("td")
setAttributes(threeButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
threeButtonElement.innerText = "3"
threeButtonElement.addEventListener("click",toInput)

var addButtonElement = createNewElement("td")
setAttributes(addButtonElement,{
    class:"color text-center p-0",
    style:"cursor:pointer"
})
addButtonElement.innerText = "+"
addButtonElement.addEventListener("click",toInput)

var memoryButtonElement = createNewElement("td")
setAttributes(memoryButtonElement,{
    class:"color text-center p-0 dropdown",
    style:"cursor:pointer"
})
memoryButtonElement.innerText = "M"

var memoryDropDownElement = createNewElement("span")
setAttributes(memoryDropDownElement,{
    class:"dropdown-content color text-center bg-dark",
    style:"border-radius: 20px; font-size: 20px;"
})

var memoryAddButtonElement = createNewElement("p")
memoryAddButtonElement.innerText = "M+"
memoryAddButtonElement.addEventListener("click",memoryActions)

var memoryRecallButtonElement = createNewElement("p")
memoryRecallButtonElement.innerText = "MR"
memoryRecallButtonElement.addEventListener("click",memoryActions)

var memoryClearButtonElement = createNewElement("p")
memoryClearButtonElement.innerText = "MC"
memoryClearButtonElement.addEventListener("click",memoryActions)

var memoryStoreButtonElement = createNewElement("p")
memoryStoreButtonElement.innerText = "MS"
memoryStoreButtonElement.addEventListener("click",memoryActions)

var zeroButtonElement = createNewElement("td")
setAttributes(zeroButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
zeroButtonElement.innerText = "0"
zeroButtonElement.addEventListener("click",toInput)

var pointButtonElement = createNewElement("td")
setAttributes(pointButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
pointButtonElement.innerText = "."
pointButtonElement.addEventListener("click",toInput)

var evalButtonElement = createNewElement("td")
setAttributes(evalButtonElement,{
    class:"color text-center p-0",
    style:"cursor:pointer"
})
evalButtonElement.innerText = "="
evalButtonElement.addEventListener("click",eval)


var inputData = ""

function onKeyPress(event){
    if(!(event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)){
        alert("Only numbers are allowed")
        inputData = ""
        document.querySelector("input").value = ""
        return
    }
    inputData = event.target.value
    if(event.keyCode === 13){
        eval();
    }

}

function toInput(event){
    var value = event.target.innerText
    inputData += value
    document.querySelector("input").value = inputData
}

function clearOrRemoveData(event){
    if(event.target.innerText === "AC" && inputData!==""){
        document.querySelector("input").value = ""
        inputData = ""
    }
    inputData = document.querySelector("input").value
    if(event.target.innerText==="" && inputData!==""){
        inputData = inputData.slice(0,inputData.length-1)
        document.querySelector("input").value = inputData
    }
}

var result = 0

function solveSingle(arr){
    arr = arr.slice();
    while(arr.length-1){
      if(arr[1] === '*' || arr[1]==="X" ) arr[0] = arr[0] * arr[2]
      if(arr[1] === '-') arr[0] = arr[0] - arr[2]
      if(arr[1] === '+') arr[0] = +arr[0] + (+arr[2])
      if(arr[1] === '/') arr[0] = arr[0] / arr[2]
      if(arr[1] === '%') arr[0] = arr[0] % arr[2]
      arr.splice(1,1);
      arr.splice(1,1);
    }
    return arr[0];
  }
  
  function eval() {
    var eq = inputData
    let res = eq.split(/(\+|-)/g).map(x => x.trim().split(/(\*|\/|\X|\%)/g).map(a => a.trim()));
    res = res.map(x => solveSingle(x)); 
     
    result =  solveSingle(res)
    document.querySelector("#input-area").value = result
    inputData = result 
  }
  
var memory = 0
var count = 0

function memoryActions(event){
    var targetName = event.target.innerText
    if(targetName === "MC"){
        memory = 0
        document.querySelector("#input-area").value = 0
        inputData = document.querySelector("#input-area").value
        localStorage.setItem(`memory-value-${++count}`,memory)
    }
    if(targetName === "MR"){
        document.querySelector("#input-area").value = memory
        inputData = document.querySelector("#input-area").value
    }
    if(targetName === "M+"){
        if(document.querySelector("#input-area").value!=""){
            memory = parseInt(document.querySelector("#input-area").value) + memory
            document.querySelector("#input-area").value = memory
            localStorage.setItem(`memory-value-${++count}`,memory)
        }
    }
    if(targetName === "MS"){
        memory = result
        inputData = document.querySelector("#input-area").value
        localStorage.setItem(`memory-value-${++count}`,memory)
    }
}


document.body.append(containerElement)
containerElement.append(tableContainerElement)
tableContainerElement.append(tableElement)
tableElement.append(inputRowElement,...buttonsRowElements)
inputRowElement.append(inputDataElement)
inputDataElement.append(inputDisplayElement)
buttonsRowElements[0].append(acButtonElement,deleteButtonElement,modulusButtonElement,divisionButtonElement)
buttonsRowElements[1].append(sevenButtonElement,eightButtonElement,nineButtonElement,multiplyButtonElement)
buttonsRowElements[2].append(fourButtonElement,fiveButtonElement,sixButtonElement,subButtonElement)
buttonsRowElements[3].append(oneButtonElement,twoButtonElement,threeButtonElement,addButtonElement)
buttonsRowElements[4].append(memoryButtonElement,zeroButtonElement,pointButtonElement,evalButtonElement)
memoryButtonElement.append(memoryDropDownElement)
memoryDropDownElement.append(memoryAddButtonElement,memoryRecallButtonElement,memoryStoreButtonElement,memoryClearButtonElement)