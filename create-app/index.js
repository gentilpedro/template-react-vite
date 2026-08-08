#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templateDir = path.join(__dirname, "template");

function toPackageName(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "") || "my-react-app";
}

async function resolveTargetName() {
  const arg = process.argv[2];
  if (arg) return arg;
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const answer = await rl.question("Nome do projeto: (my-react-app) ");
  rl.close();
  return answer || "my-react-app";
}

const targetName = await resolveTargetName();
const targetDir = path.resolve(process.cwd(), targetName);

if (fs.existsSync(targetDir) && fs.readdirSync(targetDir).length > 0) {
  console.error(`Erro: a pasta "${targetName}" já existe e não está vazia.`);
  process.exit(1);
}

fs.cpSync(templateDir, targetDir, { recursive: true });

const pkgPath = path.join(targetDir, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
pkg.name = toPackageName(targetName);
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

console.log(`\nProjeto criado em ./${targetName}\n`);
console.log("Próximos passos:");
console.log(`  cd ${targetName}`);
console.log("  npm install");
console.log("  npm run dev\n");
