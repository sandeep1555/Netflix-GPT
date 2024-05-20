import OpenAI from 'openai';
import { OPENIAI_KEY_ENV, OPEN_AI_KEY } from './useConstant';

const openai = new OpenAI({
  apiKey: OPENIAI_KEY_ENV, 
  dangerouslyAllowBrowser: true,
});

export default openai