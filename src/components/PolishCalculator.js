import { Form, Card, Button, Container } from "react-bootstrap";
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function PolishCalc(){

const [num, setNum] = useState("");
const [operatorArray, setOperator] = useState([]);
const [operandArray, setOperand] = useState([]);


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
                setNum(num.substr(0, num.length));
                return alert("Only operators 1-9 and operands +,-,*,/ are allowed")         
            }

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
        
       //const lenghtArrayDiff = operatorArray.length - operandArray.length;

       
       // Error messaging based on difference in lenght values of operators and operands
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
        console.log("num is:", operatorArray);
    }
    const clear = () =>{
        window.location.reload();
    }

    return(
        <Container>
            <Card className="text-center" style={{width:"60%",margin:"auto",marginTop:"5%"}}>
                <Card.Header style={{height:"25%",fontStyle:"bold", fontSize:"100%"}}><h2>Reverse Polish Notation Calculator</h2></Card.Header>
                
                <Card.Body>

                    <Form style={{height:"40%"}} onChange={((e)=> e.preventDefault())}>
                        <Form.Control value={num} placeholder="Enter the operand and operator: 2,6,5.5,4,*,-,+" style={{width:"60%", display:"inline-flex"}} onChange={changeHandler}></Form.Control>
                        <Button variant="outline-info" style={{display:"inline-flex", marginLeft:"3%"}} onClick={clear}>Clear</Button>
                        <Button variant="outline-info" style={{display:"inline-flex",marginLeft:"1%"}} onClick={compute}>Compute</Button>
                    </Form>
                    
                </Card.Body>
                <h3 style={{color:"red", visibility:"hidden"}}></h3>
            </Card>
        </Container>
    )
}

export default PolishCalc;
