class Calculator {
    constructor(num) {
        this.calkNum = num;
        this.num1 = `num1-${num}`;
        this.num2 = `num2-${num}`;
        this.operator = `operator-${num}`;
        this.result = `result-${num}`;
        this.counter = 0; 
    }

  
    increaseCounter = () => {
        this.counter++;
        document.getElementById(this.result).textContent = this.counter;
    }

    decreaseCounter = () => {
        this.counter--;
        document.getElementById(this.result).textContent = this.counter;
    }

    getLayout = () => {
        let layout = `
    
       <div id="${this.calkNum}"> 
       <span id="${this.num1}"></span>
       <span id="${this.num2}"></span>
       <button id="increase-${this.calkNum}" onclick="calculator.increaseCounter()">+</button>
       <button id="decrease-${this.calkNum}" onclick="calculator.decreaseCounter()">-</button>
       <span class="spend" id="${this.result}">${this.counter}</span></div>
        `;
        return layout;
    }
}

const calculator = new Calculator();


document.body.innerHTML += calculator.getLayout();






