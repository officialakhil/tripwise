export default async function handler(req, res) {
  const { location } = req.query;

  const TRIP_ADVISOR_KEY = process.env.TRIP_ADVISOR_KEY;

  if (!TRIP_ADVISOR_KEY) {
    return res.status(500).json({ error: "Missing Trip Advisor API Key" });
  }

  const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${TRIP_ADVISOR_KEY}&searchQuery=${location}&category=attractions&language=en`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  const response = await fetch(url, options);
  const { data } = await response.json();

  if (!data || data.length === 0) {
    return res.status(404).json({ error: "Location not found" });
  }

  //   res.status(200).json({ data });

  const locationNames = new Set();

  const locationIDs = data
    .map((location) => {
      if (locationNames.has(location.name)) {
        return;
      }

      locationNames.add(location.name);
      return location.location_id;
    })
    .filter((location) => location);

  const locations = [];

  for (const locationID of locationIDs) {
    const detailsEndpoint = `https://api.content.tripadvisor.com/api/v1/location/${locationID}/details?key=${TRIP_ADVISOR_KEY}&language=en`;

    const detailsResponse = await fetch(detailsEndpoint, options);
    const detailsData = await detailsResponse.json();

    const photosEndpoint = `https://api.content.tripadvisor.com/api/v1/location/${locationID}/photos?key=${TRIP_ADVISOR_KEY}&language=en`;

    const photosResponse = await fetch(photosEndpoint, options);
    const { data: photos } = await photosResponse.json();

    if (!photos || photos.length === 0) {
      continue;
    }

    const photo = photos[0]["images"];

    if (!photo) {
      continue;
    }

    const photoOriginal = photo["original"];

    if (!photoOriginal) {
      continue;
    }

    const photoURL = photoOriginal["url"];

    const locationData = {
      id: locationID,
      name: detailsData.name,
      web_url: detailsData.web_url,
      rating: detailsData.rating,
      photoURL,
    };
    locations.push(locationData);
  }

  res.status(200).json({ locations });

  //   const url2 = `https://api.content.tripadvisor.com/api/v1/location/${locID}/photos?key=${TRIP_ADVISOR_KEY}&language=en`;

  //   const response2 = await fetch(url2, options);

  //   res.status(200).json({ response2, locID });
}
