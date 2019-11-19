import {Type} from 'class-transformer';

export class ErrorResponse {
  @Type(() => HeaderData)
  headers: HeaderData;
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  @Type(() => Error)
  error: Error;
}

export class Error {
  error: boolean;
  code: string;
  message: string;
}

export class HeaderData {
  @Type(() => NormalizedNames)
  normalizedNames: NormalizedNames;
  lazyUpdate?: any;
}

export class NormalizedNames {
}
