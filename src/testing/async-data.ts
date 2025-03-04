import { defer, of } from "rxjs";

export function promiseAsyncResponse<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export function promiseError(error: unknown) {
  return defer(() => Promise.reject(error));
}

export function observableResponse<T>(data: T) {
  return of(data);
}

export function promiseResponse<T>(data: T) {
  return Promise.resolve(data);
}
