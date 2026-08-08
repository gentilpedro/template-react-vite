import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const templateDir = path.join(__dirname, "template");

const exclude = new Set([".github", "create-app", "package-lock.json"]);

fs.rmSync(templateDir, { recursive: true, force: true });
fs.mkdirSync(templateDir, { recursive: true });

const files = execSync("git ls-files", { cwd: repoRoot, encoding: "utf-8" })
  .trim()
  .split("\n")
  .filter((f) => f && !exclude.has(f.split("/")[0]));

for (const file of files) {
  const src = path.join(repoRoot, file);
  const dest = path.join(templateDir, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

console.log(`Synced ${files.length} files into create-app/template/`);
