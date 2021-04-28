import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./Components/CommentDetails";

import faker from "faker";
import ApprovalCard from "./Components/ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetails name="hassan" timeAgo="Today at 4:45PM" image={faker.image.avatar()} comment="Hello" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails name="haroon" timeAgo="Today at 9:13PM" image={faker.image.avatar()} comment="Nice Blog" />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))