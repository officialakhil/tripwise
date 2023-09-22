const GPT_KEY = process.env.GPT_KEY;

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${GPT_KEY}`,
};

export default async function handler(req, res) {
  const { days, city } = req.query;

  let basePrompt = `what is an ideal itinerary for ${days} days in ${city}?`;
  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers,
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: basePrompt,
        temperature: 0,
        max_tokens: 550,
      }),
    });
    const itinerary = await response.json();
    const pointsOfInterestPrompt =
      "Extract the points of interest out of this text, with no additional words, separated by commas: " +
      itinerary.choices[0].text;

    const result = itinerary.choices[0].text.split("\n\n");
    result.shift();
    res.status(200).send({ schedule: result });
  } catch (err) {
    console.log("error: ", err);
  }
}
