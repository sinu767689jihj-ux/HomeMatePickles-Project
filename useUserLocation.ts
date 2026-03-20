import { useState, useEffect, useCallback } from "react";

export const useUserLocation = () => {
  const [location, setLocation] = useState<string>(() => {
    return localStorage.getItem("homemate-location") || "Nellore, Andhra Pradesh";
  });
  const [loading, setLoading] = useState(false);

  const detectLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocation("Nellore, Andhra Pradesh");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`
          );
          const data = await res.json();
          const addr = data.address;
          const area = addr.suburb || addr.neighbourhood || addr.village || addr.town || "";
          const city = addr.city || addr.state_district || addr.county || "";
          const loc = [area, city].filter(Boolean).join(", ") || "Your Location";
          setLocation(loc);
          localStorage.setItem("homemate-location", loc);
        } catch {
          setLocation("Nellore, Andhra Pradesh");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setLocation("Nellore, Andhra Pradesh");
        setLoading(false);
      },
      { enableHighAccuracy: false, timeout: 10000 }
    );
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("homemate-location");
    if (!saved) {
      detectLocation();
    }
  }, [detectLocation]);

  return { location, loading, detectLocation };
};
