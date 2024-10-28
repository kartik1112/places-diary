export function capitalize(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export async function getAddress(lat, lng) {
    console.log(lat, lng);
    
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Address can not be found");
    }
    const data = await response.json();
    return data.display_name;
  } catch (error) {
    console.error("Error fetching address:", error);
    return "Address not found";
  }
}
