import { format } from "date-fns";

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const addOrUpdateItem = (arr, item) => {
  let tempArr = [];
  const tempItem = arr.find((currentItem) => currentItem.id === item.id);
  if (tempItem) {
    tempArr = arr.map((currentItem) => {
      if (currentItem.id === item.id) currentItem = item;
      return currentItem;
    });
  } else {
    tempArr = [...arr, item];
  }
  return tempArr;
};

export const getLocalStorageAuth = () => {
  if (typeof window !== "undefined") {
    let auth = localStorage.getItem("auth");
    return auth ? JSON.parse(auth) : null;
  }
};
export const getLocalStorageJWT = () => {
  if (typeof window !== "undefined") {
    let auth = localStorage.getItem("auth");
    return auth ? JSON.parse(auth.jwt) : "";
  }
};
export const getLocalStoragePax = () => {
  if (typeof window !== "undefined") {
    let formData = localStorage.getItem("formData");
    return formData
      ? JSON.parse(formData)
      : {
          from: "",
          to: "",
          departure: format(new Date(), "y-MM-dd"),
          return: format(new Date(), "y-MM-dd"),
          pax: [],
        };
  }
};

export default async function fetcher(url, option = {}) {
  let response;
  if (!option) {
    response = await fetch(url);
  } else {
    response = await fetch(url, option);
    console.log(response);
  }

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
