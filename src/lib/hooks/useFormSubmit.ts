"use client";

import { useCallback, useState } from "react";

export type FormSubmitPayload = Record<string, unknown>;

export interface UseFormSubmitOptions {
  method?: "POST" | "PUT" | "PATCH";
  headers?: HeadersInit;
}

export interface UseFormSubmitResult<TResponse = unknown> {
  submit: (payload: FormSubmitPayload) => Promise<TResponse | undefined>;
  loading: boolean;
  error: string | null;
  success: boolean;
  reset: () => void;
}

export function useFormSubmit<TResponse = unknown>(
  apiUrl: string,
  options: UseFormSubmitOptions = {}
): UseFormSubmitResult<TResponse> {
  const { method = "POST", headers } = options;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const reset = useCallback(() => {
    setError(null);
    setSuccess(false);
    setLoading(false);
  }, []);

  const submit = useCallback(
    async (payload: FormSubmitPayload) => {
      setLoading(true);
      setError(null);
      setSuccess(false);

      try {
        const response = await fetch(apiUrl, {
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const message = `Request failed (${response.status})`;
          setError(message);
          throw new Error(message);
        }

        let data: TResponse | undefined;
        const contentType = response.headers.get("content-type");
        if (contentType?.includes("application/json")) {
          data = (await response.json()) as TResponse;
        }

        setSuccess(true);
        return data;
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Something went wrong";
        setError(message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [apiUrl, headers, method]
  );

  return { submit, loading, error, success, reset };
}

export default useFormSubmit;
