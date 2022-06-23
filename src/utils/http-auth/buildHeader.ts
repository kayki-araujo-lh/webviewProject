import {btoa} from 'js-base64';

export type Credentials = {
  user: string;
  pass: string;
};

export const buildHeader = ({user, pass}: Credentials) => ({
  Authorization: `Basic ${btoa(`${user}:${pass}`)}`,
});
