/* eslint-disable @typescript-eslint/no-unused-vars */

import config from '../../config';
import ApiError from '../../error/ApiError';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: config.gemini.apiKey });

const askGemini = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [prompt],
    });
    return response.text;
  } catch (error) {
    throw new ApiError(400, 'Failed to fetch data from Gemini API');
  }
};

const aiAgentServices = {
  askGemini,
};

export default aiAgentServices;
