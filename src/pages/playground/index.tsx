import React, { useState } from 'react';
import CLI from '../../components/cli';
import ChatWindow from '../../components/chatWindow';
import UserInput from '../../components/userInput';
import HistoryPanel from '../../components/interaction/historyPanel';
import ChatPanel from '../../components/interaction/chatPanel';
import WorkflowPanel from '../../components/interaction/workflowPanel';

import './styles.css';
import { post } from '../../services/httpService/apiService';

const PlaygroundPage: React.FC = () => {
    const [queryResponse, setQueryResponse] = useState({});
    const [loading, setLoading] = useState<boolean>(true);

    const runQuery = async (query: string) => {
        setLoading(true);
        try {
            const config = {
                "natural_language_query": query
            };
            const response: any = await post('https://magicbi-g6lg7lulsq-uc.a.run.app/run-query/', config);
            setQueryResponse(response?.result);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            {/* <h1>Playground</h1> */}
            {/* <CLI /> */}
            {/* <ChatWindow />
            <UserInput /> */}
            <div className='playground'>
                {/* <div className="left-panel">
                    <button className="new-chat-button">New Chat</button>
                    <HistoryPanel />
                </div> */}
                <div className="center-panel">
                    <ChatPanel onQuerySend={runQuery} queryResponse={queryResponse} loading={loading}/>
                </div>
                <div className="right-panel">
                    <WorkflowPanel queryResponse={queryResponse} />
                </div>
            </div>
        </div>
    );
};

export default PlaygroundPage;
