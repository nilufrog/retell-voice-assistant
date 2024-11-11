const RetellImport = () => import('retell-sdk/dist/index.js');

let client: any = null;

export const initializeVoiceBot = async () => {
  try {
    const Retell = (await RetellImport()).default;
    client = new Retell({
      apiKey: import.meta.env.VITE_RETELL_API_KEY,
    });

    const params = {
      agent_id: import.meta.env.VITE_RETELL_AGENT_ID,
      response_engine: {
        llm_id: import.meta.env.VITE_RETELL_LLM_ID,
        type: 'retell-llm'
      },
      voice_id: 'openai-Sage'
    };

    const agentResponse = await client.agent.create(params);
    return agentResponse;
  } catch (error) {
    console.error('Failed to initialize voice bot:', error);
    throw error;
  }
};

export const getRetellClient = async () => {
  if (!client) {
    const Retell = (await RetellImport()).default;
    client = new Retell({
      apiKey: import.meta.env.VITE_RETELL_API_KEY,
    });
  }
  return client;
};