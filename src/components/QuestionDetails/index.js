import "./index.css"

const QuestionDetails = props => {
    const {eachItem} = props
    return (
        <div className="list-bg">
            <h1 className="student-heading">{eachItem.question}</h1>
            <p className="student-answer">{eachItem.answer}</p>
        </div>
    )
}

export default QuestionDetails