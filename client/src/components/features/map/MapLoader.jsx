import { useJsApiLoader } from "@react-google-maps/api";

//__ Default libraries to load with Google Maps API
const defaultLibraries = ["places", "marker"];

//__ Custom hook to load Google Maps API
export function useMapLoader() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: defaultLibraries,
    
  });

  return { isLoaded, loadError };
}
