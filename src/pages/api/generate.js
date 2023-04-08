import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured",
      },
    });
    return;
  }

  const inputDiscreption = req.body.discreption || "";
  if (inputDiscreption.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid Discreption",
      },
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(inputDiscreption),
      temperature: 0,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      temperature: 0.6,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

function generatePrompt(inputDiscreption) {
  return `Generate a list of travel destinations based on the user's preferences. Consider the type of destination they are interested in (e.g. beach, mountain, city), the activities they want to do (e.g. hiking, surfing, sightseeing), and the time of year they plan to travel from the user input. The output should be a list of destinations that match the user's criteria, separated by commas with no other additional text. User input: ${inputDiscreption}`;
}
