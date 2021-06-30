import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./actionTypes";

export interface IUser {
  createdAt: number;
  id: number;
  name: string;
}

export interface UserState {
  pending: boolean;
  users: IUser[];
  error: string | null;
}

export interface FetchUserSuccessPayload {
  users: IUser[];
}

export interface FetchUserFailurePayload {
  error: string;
}

export interface FetchUserRequest {
  type: typeof FETCH_USER_REQUEST;
}

export type FetchUserSuccess = {
  type: typeof FETCH_USER_SUCCESS;
  payload: FetchUserSuccessPayload;
};

export type FetchUserFailure = {
  type: typeof FETCH_USER_FAILURE;
  payload: FetchUserFailurePayload;
};

export type UserActions =
  | FetchUserRequest
  | FetchUserSuccess
  | FetchUserFailure;