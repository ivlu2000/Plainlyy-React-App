import React, {useState} from 'react';
import {Button, Grid} from "semantic-ui-react";
import './TextAreasContainer.css'
import EnglishTextArea from "./EnglishTextArea";
import PlainEnglishTextArea from "./PlainEnglishTextArea";
import axios from "axios";
import {SecretClient} from "@azure/keyvault-secrets";
import {InteractiveBrowserCredential} from "@azure/identity";

function TextAreasContainer() {
    const [text, setText] = useState('');
    const [plainText, setPlainText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleOnConvert() {
        setIsLoading(true)

       /* const credential = new InteractiveBrowserCredential({clientId: "c467ba21-fe8c-4a08-ab40-1058d36234fc"})
        const keyVaultName = process.env["KEY_VAULT_NAME"]
        console.log("key vault name",keyVaultName)
        const url = "https://" + keyVaultName + ".vault.azure.net";
        const client = new SecretClient(url, credential)
        const apiKey = await client.getSecret('API-KEY-PLAINLYY')
        console.log(apiKey)*/
        const result = await axios.post('https://plainlyy.azurewebsites.net/api/plainlyy-v1', text, {
            headers: {
                'x-functions-key':  process.env.REACT_APP_API_KEY_PLAINLYY!
            }
        })
        setIsLoading(false)
        setPlainText(result.data)
    }

    return (
        <div className='text-area-container'>
            <Grid divided='vertically' centered padded='horizontally'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <EnglishTextArea setText={setText}/>
                    </Grid.Column>
                    <Grid.Column>
                        <PlainEnglishTextArea plainText={plainText} isLoading={isLoading}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <div className="button-container">
                <Button onClick={() => handleOnConvert()} color='blue'>Convert into Plain English</Button>
            </div>
        </div>
    );
}

export default TextAreasContainer;
