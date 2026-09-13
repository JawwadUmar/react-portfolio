const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;

interface SheetPayload {
  [key: string]: string | number | boolean | null | undefined;
}

interface SheetResponse {
  status: string;
  [key: string]: unknown;
}

export const saveToSheet = async (
  dataPayload: SheetPayload
): Promise<SheetResponse> => {
  try {

    
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(dataPayload),
    });

    

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result: SheetResponse = await response.json();

    if (result.status !== 'success') {
      throw new Error('Sheet returned an error status');
    }

    return result;
  } catch (error) {
    console.error('Error saving to sheet:', error);
    throw error;
  }
};