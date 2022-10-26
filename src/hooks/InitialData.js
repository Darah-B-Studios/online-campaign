import { useCallback } from "react";

export const useInitialData = () => {
  const getCountryData = useCallback(async () => {
    try {
      const data = await fetch("https://restcountries.com/v3.1/all");
      let countries = await data.json();
      countries = countries.map((country) => {
        return {
          name: country.name.common,
          flag: country.flag,
          code: country.cca3,
        };
      });
      return countries
    } catch {
        return false
    }
  }, []);

  return {
    getCountryData
  };
};
