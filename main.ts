// One Line, One Laugh — v1 entry.
// Deterministically writes one funny line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My houseplant started a podcast about neglect; episode one is just it reading out every day I forgot to water it, in chronological order.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
