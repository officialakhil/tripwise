export default async function handler(req, res) {
  const { locationID } = req.query;

  const TRIP_ADVISOR_KEY = process.env.TRIP_ADVISOR_KEY;

  if (!TRIP_ADVISOR_KEY) {
    return res.status(500).json({ error: "Missing Trip Advisor API Key" });
  }

  const reviewsEndpoint = `https://api.content.tripadvisor.com/api/v1/location/${locationID}/reviews?key=${TRIP_ADVISOR_KEY}&language=en`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  const reviewsResponse = await fetch(reviewsEndpoint, options);
  const { data: reviews } = await reviewsResponse.json();

  if (!reviews || reviews.length === 0) {
    return res.status(404).json({ error: "Reviews not found" });
  }

  const reviewsData = reviews.map((review) => {
    return {
      title: review.title,
      text: review.text,
      rating: review.rating,
    };
  });

  res.status(200).json({ reviews: reviewsData });
}
