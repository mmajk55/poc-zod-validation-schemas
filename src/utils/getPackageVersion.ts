import * as fs from "fs";
import * as path from "path";

export function getPackageVersion(): string | null {
  const packageJsonPath = path.resolve(__dirname, "../../package.json");
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    return packageJson.version || null;
  } catch (error) {
    console.error("Error reading package.json:", error);
    return null;
  }
}
