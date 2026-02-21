import { createClient, type SanityClient } from "@sanity/client";

let _client: SanityClient | null = null;

export function getSanityClient(): SanityClient | null {
  if (_client) return _client;

  const projectId = import.meta.env.SANITY_PROJECT_ID;
  if (!projectId) return null;

  _client = createClient({
    projectId,
    dataset: import.meta.env.SANITY_DATASET || "production",
    apiVersion: "2024-01-01",
    useCdn: true,
  });

  return _client;
}
