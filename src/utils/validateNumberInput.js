export const validadeNumberInput = (value, state) => {
  return value
    .replace(/[^0-9.]/g, "")
    .replace(/(\.*?)\.*/g, "")
    .replace(/^0[^.]/, "");
};
