// pages/api/updateNamespace.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { newNamespace } = req.body;
    
    // Update the Pinecone configuration file
    const configFilePath = path.join(process.cwd(), 'config', 'pinecone.ts');
    const configFileContent = fs.readFileSync(configFilePath, 'utf8');
    const newContent = configFileContent.replace(/const PINECONE_NAME_SPACE = '[^']+';/, `const PINECONE_NAME_SPACE = '${newNamespace}';`);
    
    fs.writeFileSync(configFilePath, newContent);

    return res.status(200).json({ success: true });
  }
  
  return res.status(405).end();  // Method Not Allowed
}
