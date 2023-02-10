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
  const userExistence = users.some((elem: { username: string, password: string; }) => elem.username === username);
  var response;

  if (userExistence)
  {
    response = "User already exists";
  }
  else
  {
    users.push({username: username, password: passwordHash.generate(password)})
    await fs.writeFile(jsonDirectory + '/users.json', JSON.stringify(users), 'utf8');
    response = "User registered successfully";
  }
  
  res.status(200).json({response: response});
}