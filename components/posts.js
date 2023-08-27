import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPosts() {
  const folder = '../posts/';
  const files = fs.readdirSync(folder);
  const mdFiles = files.filter((file) => file.endsWith('.md'));
  const slug = mdFiles.map((file) => file.replace('.md', ''));
  return {
    slug
  };
}
