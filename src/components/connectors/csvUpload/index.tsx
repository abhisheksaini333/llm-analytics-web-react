import React, { useState } from 'react';
import FileUpload from '../../fileUpload';
import { useNavigate } from 'react-router-dom';

interface CsvUploaderProps {
    apiEndpoint: string;
    onSubmit: (resp: string) => void;
}

const CsvUploader: React.FC<CsvUploaderProps> = ({ apiEndpoint, onSubmit }) => {
    const navigate = useNavigate();

    const handleUploadSuccess = (response: any) => {
        navigate('/data');
        onSubmit('success');
    };

    const handleUploadError = (error: any) => {
        navigate('/data');
        onSubmit('error');
    };

    return (
        <div>
            <h3>CSV Upload</h3>
            <br />
            <FileUpload
                uploadUrl={apiEndpoint}
                onUploadSuccess={handleUploadSuccess}
                onUploadError={handleUploadError}
            />
        </div>
    );
};

export default CsvUploader;
