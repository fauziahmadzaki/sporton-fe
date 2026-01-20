export async function fetcher<TResponse>(
  url: string,
  options?: RequestInit,
): Promise<TResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}${url}`, {
    ...options,
    cache: options?.cache ?? "no-cache",
  });

  if (!res.ok) {
    let errorMessage = "Something went wrong";
    try {
      const errorResponse = await res.json();
      errorMessage =
        errorResponse.message || errorResponse.data || errorMessage;
    } catch (error) {
      console.log(error);
    }

    throw new Error(errorMessage);
  }

  return res.json() as Promise<TResponse>;
}

export function getImageUrl(url: string) {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

  if (url.startsWith("http://")) {
    return url;
  }

  return `${baseUrl}${url}`;
}
