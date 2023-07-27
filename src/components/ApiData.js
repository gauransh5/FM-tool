export const ApiData = await fetch(
  "http://localhost:8085/versionlessManagement/v1/availablejiraItems?itemsLevel=US"
)
  .then((response) => response.json())
  .catch((error) => console.error("Error fetching data:", error));
