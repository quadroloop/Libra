
export const el = (elem) => {
  return document.getElementById(elem);
}

export const isMounted = (elem) => {
  return document.contains(document.getElementById(elem));
}

export const sclass = (elemClass) => {
  return document.getElementsByClassName(elemClass);
}


