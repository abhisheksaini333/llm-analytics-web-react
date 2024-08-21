import React, { useState, ChangeEvent } from 'react';
import { uploadFile } from '../../services/httpService/apiService';

interface FileUploadProps {
    uploadUrl: string;
    onUploadSuccess: (response: any) => void;
    onUploadError: (error: any) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ uploadUrl, onUploadSuccess, onUploadError }) => {
    const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        } else {
            setSelectedFile(undefined);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        setIsUploading(true);

        try {
            const response = await uploadFile(uploadUrl, selectedFile, { additionalDataKey: 'additionalDataValue' });
            onUploadSuccess(response);
        } catch (error) {
            onUploadError(error);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <br />
            <br />
            <button onClick={handleUpload} disabled={isUploading}>
                {isUploading ? 'Uploading...' : 'Upload'}
            </button>
        </div>
    );
};

export default FileUpload;
