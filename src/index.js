import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./Components/CommentDetails";
import Message from "./Components/Message";
import Placeholder from "./Components/Placeholder";

import faker from "faker";
import ApprovalCard from "./Components/ApprovalCard";
import Seasons from "./Seasons/Seasons";

const App = () => {
    return (
        <div className="ui container comments">
            {/* <ApprovalCard>
                <CommentDetails name="hassan" timeAgo="Today at 4:45PM" image={faker.image.avatar()} comment="Hello" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails name="haroon" timeAgo="Today at 9:13PM" image={faker.image.avatar()} comment="Nice Blog" />
            </ApprovalCard>
            <Message message="Hello World" para="lorem ipsum" />
            <ApprovalCard>
                <h4>Warning</h4>
                <p>Dont be here</p>
            </ApprovalCard>
            <Placeholder>
                <div className="ui icon header">
                    <i className="pdf file outline icon"></i>
                    NO documents
                </div>
                <div className="ui primary button">Add Documents</div>
            </Placeholder>
            <Placeholder>
               <h4>Heading</h4>
               <p>loremdnkasnkldsdjjkdnjansdjansdjandj
               </p>
            </Placeholder>
            {console.log("hello")} */}
            {/* -------------------------Seasons STarts --------------------------- */}

            <Seasons/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))