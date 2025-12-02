import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getDesignAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "A chave de API não está configurada. Por favor, adicione sua API KEY para usar o consultor.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      Você é um consultor de Nail Design especialista e sofisticado chamado "Lumière Assistant".
      Seu objetivo é ajudar clientes a escolherem cores, formatos e estilos de unhas baseados na ocasião, tom de pele ou preferência pessoal.
      
      Diretrizes:
      - Seja breve, elegante e amigável.
      - Use emojis relacionados a unhas e beleza moderadamente 💅✨.
      - Fale em Português do Brasil.
      - Sugira tendências atuais de nail art.
      - Se a pergunta não for sobre unhas ou beleza, responda educadamente que só pode ajudar com esse tema.
      - Limite a resposta a 2 ou 3 frases curtas.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, não consegui pensar em uma sugestão agora. Tente novamente!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao consultar nossa IA. Por favor, tente novamente mais tarde.";
  }
};