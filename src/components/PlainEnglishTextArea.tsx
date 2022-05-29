import React from 'react';
import { Form, Loader, TextArea} from "semantic-ui-react";

interface PlainEnglishTextAreaProps {
    plainText: string
    isLoading: boolean
}

function PlainEnglishTextArea({plainText, isLoading}: PlainEnglishTextAreaProps) {
    return (
        <Form>
            <Form.Field>
                <label style={{fontSize: "large"}}>Plain English</label>
                <TextArea readOnly style={{minHeight: 400, resize: 'none'}} value={plainText}/>
                {isLoading && <Loader active  size='big'>Loading</Loader>}
            </Form.Field>
        </Form>
    );
}

export default PlainEnglishTextArea;
