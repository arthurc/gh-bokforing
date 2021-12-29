import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`Verifiera ${new Date()}, payload: ${github.context.payload}`);
}

async function runWrapper() {
  try {
    await run();
  } catch (err) {
    core.setFailed(`Error: ${err}`);
    console.log(err);
  }
}

void runWrapper();
