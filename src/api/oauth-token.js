const petFinderKey = "SXp2BsMkrzpp3bz0ncHCc1ekh9UQTipToeryJhbIcifEXcWQUL";
const petFinderSecret = "JPm1gyfEIX85MBLoiNaWZAdII0DVbhsIaRP0QUR2";

export default async (req, res) => {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", petFinderKey);
  params.append("client_secret", petFinderSecret);
  const petfinderRes = await fetch(
    "https://api.petfinder.com/v2/oauth2/token",
    {
      method: "POST",
      body: params,
    }
  );
  const data = await petfinderRes.json();
  res.send(data);
};
