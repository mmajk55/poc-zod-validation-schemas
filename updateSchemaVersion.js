const fs = require("fs-extra");
const git = require("simple-git")();
const path = require("path");

const SCHEMA_DIR = "src/schemas";
const VERSION_FILE = "schemaVersion.json";

async function main() {
  await git.fetch();

  // Fetch tags and sort them based on the commit date
  const tags = await git.tags({
    "--sort": "-creatordate",
  });

  if (tags.all.length < 2) {
    console.log("Not enough tags to compare. At least two tags are required.");
    return;
  }

  // Get the two latest tags
  const latestTag = tags.all[0];
  const previousTag = tags.all[1];

  // Check for differences in the schemas directory between the two latest tags
  const hasChanges = await git
    .diff(["--name-only", `${previousTag}...${latestTag}`, SCHEMA_DIR])
    .then((result) => result.trim() !== "");

  const versionPath = path.join(__dirname, VERSION_FILE);

  let versionInfo = { version: 1 };
  if (fs.existsSync(versionPath)) {
    versionInfo = await fs.readJson(versionPath);
  }

  if (hasChanges) {
    versionInfo.version += 1;
    await fs.writeJson(versionPath, versionInfo);
  }

  console.log(`Current schema version: ${versionInfo.version}`);
  return versionInfo.version;
}

main()
  .then((version) => {
    console.log(`Version updated to ${version}`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
