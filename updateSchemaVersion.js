const fs = require("fs-extra");
const git = require("simple-git")();
const path = require("path");

const SCHEMA_DIR = "src/schemas";
const VERSION_FILE = "schemaVersion.json";

async function main() {
  const hasChanges = await git
    .diff(["--name-only", "HEAD", SCHEMA_DIR])
    .then((result) => result.trim() !== "");
  const versionPath = path.join(__dirname, VERSION_FILE);

  let versionInfo = { version: 1 };
  if (fs.existsSync(versionPath)) {
    versionInfo = fs.readJsonSync(versionPath);
  }

  if (hasChanges) {
    versionInfo.version += 1;
    fs.writeJsonSync(versionPath, versionInfo);
  }

  console.log(versionInfo.version);
  return versionInfo.version;
}

main()
  .then((version) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
