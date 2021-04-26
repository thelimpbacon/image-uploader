import {
  START_UPLOADING,
  SET_UPLOAD_PROGRESS,
  SET_ERROR,
  FINISH_UPLOADING,
  RESET,
} from "./constants";

export interface UploadState {
  loading: boolean;
  progress: number;
  error: string | null;
  done: boolean;
}

export type Action =
  | { type: typeof START_UPLOADING }
  | { type: typeof SET_UPLOAD_PROGRESS; payload: number }
  | { type: typeof SET_ERROR; payload: string }
  | { type: typeof FINISH_UPLOADING; payload: any }
  | { type: typeof RESET };

export type dispatchType = (action: Action) => void;
