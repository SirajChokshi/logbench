/**
 * normalizes text by removing non-alphanumeric characters and converting to lowercase
 *
 * @param text - text to normalize can be tokenized or the original text
 * @returns - normalized text
 */
export function normalize(text: string | string[]): string {
  if (Array.isArray(text)) {
    // if the text is already tokenized, we'll normalize each element
    return text.map(normalize).join(" ");
  }

  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, " ");
}

/**
 * @deprecated use `tokenize` instead for better results
 *
 * splits text into tokens by whitespace
 *
 * @param text
 * @returns
 */
export function split(text: string): string[] {
  return text.split(" ");
}

/**
 * splits text into tokens by whitespace and punctuation
 *
 * @param text
 * @returns
 */
export function tokenize(text: string): string[] {
  return text.split(/([().]|['\w]+)/);
}
