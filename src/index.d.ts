declare function plugin(options?: Partial<{ strategy: 'base' | 'class', prefix : string | undefined }>): {
  handler: () => void
}

declare namespace plugin {
  const __isOptionsFunction: true
}

export = plugin
