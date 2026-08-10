(exports.replaceHTML = function (e) {
  return e.replace(/<(?:.|\s)*?>/g, "");
}),
  (exports.stripMarkdown = function (e) {
    return e
      ? e
          .replace(/```[\s\S]*?```/g, "")
          .replace(/`([^`]*)`/g, "$1")
          .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
          .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
          .replace(/^\s{0,3}#{1,6}\s+/gm, "")
          .replace(/^\s*[-*+]\s+/gm, "")
          .replace(/^\s*\d+\.\s+/gm, "")
          .replace(/(\*\*|__)(.*?)\1/g, "$2")
          .replace(/(\*|_)(.*?)\1/g, "$2")
          .replace(/^>\s?/gm, "")
          .replace(/\n{3,}/g, "\n\n")
          .trim()
      : "";
  });
