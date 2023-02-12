import { Component } from "react";
import Header from "../Header";
import QuestionDetails from "../QuestionDetails";

import "./index.css"

class StudentPage extends Component {
    render() {
        const stringifiedList = localStorage.getItem("List")
        const parsedList = JSON.parse(stringifiedList)
        if (parsedList === null) {
            return(
                <h1>No Calculations Found</h1>
            )
        }
        return(
            <>
              <Header />
              <div className="student-bg">
                {parsedList.map(eachItem => (
                    <QuestionDetails eachItem={eachItem} key={eachItem.Question} />
                ))}
              </div>
            </>

        )
    }
}

export default StudentPage