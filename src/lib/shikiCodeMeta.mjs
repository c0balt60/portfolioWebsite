// Shiki transformer: copies the fence language and `tab="..." group="..."` meta onto the <pre>
// so the client script (src/components/CodeBlocks.astro) can build the topbar and tabs.
export const codeMeta = {
  name: "code-meta",
  pre(node) {
    const meta = this.options.meta?.__raw ?? ""
    const get = (key) => meta.match(new RegExp(`${key}=(?:"([^"]*)"|'([^']*)'|(\\S+))`))?.slice(1).find(Boolean)
    node.properties["data-lang"] = this.options.lang
    for (const key of ["tab", "group"]) {
      const value = get(key)
      if (value) node.properties[`data-${key}`] = value
    }
  },
}
