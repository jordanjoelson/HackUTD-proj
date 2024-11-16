import axios from 'axios';

const PINATA_API_KEY = '47b774d25a2a48417846'; // Replace with your API key
const PINATA_SECRET_API_KEY = '7d3ff7ff52f5860193b85cb303ea762df924ec8f387513484e6a2836b4050cdd'; // Replace with your Secret API key
const PINATA_API_URL = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

// Function to pin data to Piñata
const pinFileToPinata = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post(PINATA_API_URL, formData, {
            headers: {
                'Authorization': `Bearer ${PINATA_API_KEY}`,
                'pinata-api-key': PINATA_API_KEY,
                'pinata-api-secret': PINATA_SECRET_API_KEY,
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading to Pinata: ', error);
        throw error;
    }
};

// Function to pin JSON data (e.g., product catalog, customer data)
const pinJSONToPinata = async (jsonData) => {
    const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';

    try {
        const response = await axios.post(url, jsonData, {
            headers: {
                'Authorization': `Bearer ${PINATA_API_KEY}`,
                'pinata-api-key': PINATA_API_KEY,
                'pinata-api-secret': PINATA_SECRET_API_KEY,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading JSON data to Pinata: ', error);
        throw error;
    }
};

export { pinFileToPinata, pinJSONToPinata };
