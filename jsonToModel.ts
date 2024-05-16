interface Model {
  [key: string]: any;
}

export function convertToModel(json: string): Model {
  try {
    const parsedJson = JSON.parse(json);
    return parsedJson;
  } catch (error) {
    throw new Error("Invalid JSON input");
  }
}
