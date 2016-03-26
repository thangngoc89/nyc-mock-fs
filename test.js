import test from "ava"
import mockFs from "mock-fs"
import mountfs from "mountfs"
import fs from "fs"

mountfs.patchInPlace()

test("compile template with lodash.template", async (t) => {
  fs.mount("/some/path", mockFs.fs({
    "/template.js": "foo <%= bar %>",
  }))
  const compiler = require("./index")

  const result = await compiler("/some/path/template.js", { bar: "bar" })
  t.is(result, "foo bar")

  fs.unmount("/some/path")
})
