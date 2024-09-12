export type Action = 'next' | 'previous';

export type Actions = {
  type: Action;
}

export type ErrorProps = {
  error: ErrorType;
}

export type ErrorType = {
  name: string;
  message: string;
}

export type Cryptos = {
  data: any;
  error: ErrorType | null;
  isLoading: boolean;
}

export type User = {
  username: string;
  profilePicture: string;
  email: string;
}

