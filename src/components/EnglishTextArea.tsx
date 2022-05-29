import React from 'react';
import {Form, TextArea} from "semantic-ui-react";

interface EnglishTextAreaProps {
    setText: React.Dispatch<string>
}

function EnglishTextArea({setText}: EnglishTextAreaProps) {
    return (
        <Form>
            <Form.Field>
                <label style={{fontSize: "large"}}>English</label>
                <TextArea onChange={event => setText(event.target.value)} placeholder={'Please type your text here...'} style={{minHeight: 400, resize: 'none'}}/>
            </Form.Field>
        </Form>
    );
}

export default EnglishTextArea;
