import { Form, Card, Button, Container } from "react-bootstrap";
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function PolishCalc(){

const [num, setNum] = useState("");
const [operatorArray, setOperator] = useState([]);
const [operandArray, setOperand] = useState([]);
const error = document.getElementById("error");

useEffect(()=>{
    setNum("")
},[])

    const changeHandler = e =>{
    

    let value = e.target.value;
    let cleanedValue =  value.substr(-1);
    setNum(e.target.value);
    let arr = [];
    let operator = [];
    let operand = [];

   

    
    
            if(cleanedValue.match(/[0-9]/) || cleanedValue.match(/[+-/*=]/)){
                cleanedValue = value.substr(value.lenght - 1);
            }else{
                if(num.length === 1){
                    return setNum(num.substr(0, num.length-1)); 
                }else if(num.substr(-1).match([/[0-9]/]) || num.substr(-1).match(/[+-/*=]/)){
                    setNum(num.substr(0, num.length));
                    document.getElementById("error").style.visibility="visible";
                    document.getElementById("error").innerHTML = "Only numbers and arithmetic operators are valid!"
                    return;
                    
                }
            }
            document.getElementById("error").style.visibility="hidden";
            arr = cleanedValue.split(",")
    
            arr.forEach(element => {
               
                switch(element){
                    case "+":
                        setOperand([...operand, element]);
                        operand.push(element);
                        break;
                    case "-":
                        setOperand([...operand, element]);
                        operand.push(element);
                        break;
                    case "/":
                        setOperand([...operand, element]);
                        operand.push(element);
                        break;
                    case "*":
                        setOperand([...operand, element]);
                        operand.push(element);
                        break;
                    default:
                        setOperator([...operator, element]);
                        operator.push(element);
                        break;
                }   
            })     
    }

    const compute = () =>{
        
       const lenghtArrayDiff = operatorArray.length - operandArray.length;
       
       if(!num){
           document.getElementById("error").style.visibility = "visible";
           document.getElementById("error").innerHTML = "You did not enter anything!"
       }else if(lenghtArrayDiff > 1){
            error.style.visibility = "visible";
            error.innerHTML = "Something went wrong! Check the number of OPERANDS!"
       }else if(lenghtArrayDiff < 1){
            error.style.visibility = "visible";
            error.innerHTML = "Something went wrong! Check the number of OPERATORS!"
       }else{
        let result = ""
        for(let i=0;i<=operatorArray.length-1;i++){
            for(let j=0;j<=operandArray.length-1;j++){
                switch(operandArray[0]){
                    case "+":
                    console.log(operandArray)
                    result = parseFloat(operatorArray[operatorArray.length-1]) + parseFloat(operatorArray[operatorArray.length-2]);
                    operatorArray.pop()
                    operatorArray.pop()
                    operandArray.shift()
                    console.log(operandArray)
                    console.log(result)
                    operatorArray.push(parseFloat(result));
                    result = "";
                    break;

                    case "-":
                    result = parseFloat(operatorArray[operatorArray.length-1]) - parseFloat(operatorArray[operatorArray.length-2]);
                    operatorArray.pop()
                    operatorArray.pop()
                    operandArray.shift()
                    operatorArray.push(parseFloat(result));
                    result = "";
                    break;

                    case "/":
                    result = parseFloat(operatorArray[operatorArray.length-1]) / parseFloat(operatorArray[operatorArray.length-2]);
                    operatorArray.pop()
                    operatorArray.pop()
                    operandArray.shift()
                    operatorArray.push(parseFloat(result));
                    result = "";
                    break;

                    case "*":
                    result = parseFloat(operatorArray[operatorArray.length-1]) * parseFloat(operatorArray[operatorArray.length-2]);
                    operatorArray.pop()
                    operatorArray.pop()
                    operandArray.shift()
                    operatorArray.push(parseFloat(result));
                    result = ""
                    break;

                }
            }
        }
        setNum(`${num} = ${operatorArray[0]}`)
    }
}


       
    const clear = () =>{
        window.location.reload();
    }

    return(
        <Container>
            <Card className="text-center" style={{width:"80%",margin:"auto",marginTop:"5%"}}>
                <Card.Header style={{height:"25%",fontStyle:"bold", fontSize:"100%"}}><h2>Reverse Polish Notation Calculator</h2></Card.Header>
                
                <Card.Body style={{marginLeft:"1%"}}>

                    <Form style={{height:"40%"}}>
                        <Form.Control id="input" value={num} placeholder="Enter the operand and operator: 2,6,5.5,4,*,-,+" style={{width:"62%", display:"inline-flex",marginLeft:"1%", fontSize:"60%"}} onChange={changeHandler}></Form.Control>
                        <Button variant="outline-info" style={{display:"inline-flex", marginLeft:"2%",fontSize:"55%"}} onClick={clear}>Clear</Button>
                        <Button variant="outline-info" style={{display:"inline-flex",marginLeft:"1%",fontSize:"55%"}} onClick={compute}>Compute</Button>
                    </Form>
                    
                </Card.Body>
                <p id="error" style={{color:"red", visibility:"hidden"}}></p>
            </Card>
        </Container>
    )
}

export default PolishCalc;
