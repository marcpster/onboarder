/**
 * Utility wrapper for fetch
 */
type Options = { url: string; headers: any; bodyJson: object; };
export async function postJSON(options: Options) {
  const response = await fetch(options.url, {
    method: "POST",
    headers: options.headers,
    body: JSON.stringify(options.bodyJson),
  })
    .catch(e => console.error('fetch() error', e));

  // Get the JSON - if it is present
  let json: any = null;
  try { json = await response?.json(); } catch (e) { }

  return {
    status: response?.status,
    json
  };
}
