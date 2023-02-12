import { Component } from "react";
import Header from "../Header";

import "./index.css"

const questionsList = () => {
    const stringifiedList = localStorage.getItem("List")
    const parsedList = JSON.parse(stringifiedList)
    if (parsedList === null) {
      return []
    }
    else {
      return parsedList
    }
  }

class MasterPage extends Component {
    state = {question: "", answer: "", questionList: questionsList(), submitText: ""}

    updateQuestion = event => {
        this.setState({question: event.target.value})
    }

    calculateAnswer = () => {
        const calc = (num, func) => {
            if (func === undefined) {
                return num;
            } else {
                return func(num);
            }
        }
        
        const zero = (func) => {
            return calc(0, func);
        }
        
        const one = (func) => {
            return calc(1, func);
        }
        
        const two = (func) => {
            return calc(2, func);
        }
        
        const three = (func) => {
            return calc(3, func);
        }
        
        const four = (func) => {
            return calc(4, func);
        }
        
        const five = (func) => {
            return calc(5, func);
        }
        
        const six = (func) => {
            return calc(6, func);
        }
        
        const seven = (func) => {
            return calc(7, func);
        }
        
        const eight = (func) => {
            return calc(8, func);
        }
        
        const nine = (func) => {
            return calc(9, func);
        }
        
        const plus = (right) => {
            return function(left) {
                return left + right;
            };
        }
        
        const minus = (right) => {
            return function(left) {
                return left - right;
            };
        }
        
        const times = (right) => {
            return function(left) {
                return left * right;
            };
        }
        
        const divided_by = (right) => {
            return function(left) {
                return left / right;
            };
        }
        
        const{question} = this.state

        const answer = eval(question)
        this.setState({answer: Math.floor(answer)})
    }

    onClickAsk = () => {
        this.calculateAnswer()
    }

    onClickSubmit = () => {
        const {question, answer} = this.state
        const questionDetails = {question, answer}
        this.setState(prevState => (
            {questionList: [...prevState.questionList, questionDetails], submitText: "Your Question Submitted Successfully"}
        ))

    }


    render() {
        const {question, answer, questionList, submitText} = this.state
        localStorage.setItem("List", JSON.stringify(questionList))
        
        return(
            <>
              <Header />
              <div className="master-bg">
                <div className="form-master-bg">
                  <h1 className="master-heading">Please Ask Question!</h1>
                  <h1>Question:</h1>
                  <input type="text" value={question} onChange={this.updateQuestion} className="input-master" />
                  <button type="button" onClick={this.onClickAsk} className="master-button" >Ask</button>
                  <h1>Answer:</h1>
                  <p className="answer">{answer}</p>
                  <button type="button" onClick={this.onClickSubmit} className="master-button" >Submit Question</button>
                  <p className="success">{submitText}</p>
                </div>
              </div>
            </>
        )
    }
}

export default MasterPage