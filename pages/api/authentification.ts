import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as passwordHash from "password-hash";

type Data = { response: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  )
{
  const encodedCredentials = req.headers.authorization!.split(' ')[1];
  const decodedCredentials = atob(encodedCredentials);
  const user = decodedCredentials.split(':');
  const username = user[0];
  const password = user[1];
  const jsonDirectory = path.join(process.cwd(), 'json');
  const fileContents = await fs.readFile(jsonDirectory + '/users.json', 'utf8');
  const users = JSON.parse(fileContents);
  const userIndex = users.findIndex((elem: { username: string, password: string; }) => elem.username === username);
  var response;

  if (userIndex !== -1)
  {
    const matchPassword = passwordHash.verify(password, users[userIndex].password);
    if (matchPassword)
      response = "You are connected !";
    else
      response = "Wrong password";
  }
  else
  {
    response = "User does not exist";
  }
  
  res.status(200).json({response: response});
}