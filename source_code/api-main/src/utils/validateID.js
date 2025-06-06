export const validateID = (id) => {
  if (typeof id !== "string" || !id.trim()) {
    throw new Error("Invalid ID format");
  }

  const parsedID = Number(id);

  if (isNaN(parsedID) || parsedID <= 0 || !Number.isInteger(parsedID)) {
    throw new Error("ID must be a valid positive integer");
  }
  return parsedID;
};
